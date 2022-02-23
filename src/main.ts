import { AsyncDirective, directive } from 'lit-html/async-directive.js'

export type AsyncValue<Value = any, E = Error> =
  | { state: 'idle' }
  | { state: 'pending', value: Value | undefined }
  | { state: 'fulfilled', value: Value }
  | { state: 'rejected', error: E }
const idle = (): AsyncValue => ({ state: 'idle' })
const pending = <Value>(previousValue?: Value): AsyncValue<Value> => ({ state: 'pending', value: previousValue })
const fulfilled = <Value>(value: Value): AsyncValue<Value> => ({ state: 'fulfilled', value })
const rejected = <E = Error>(error: E): AsyncValue<any, E> => ({ state: 'rejected', error })

type Maybe<Value> = Value | undefined | null

type Mapper<Value = any, E = Error> = (asyncValue: AsyncValue<Value, E>) => any
type Mappers<Value = any, Err = Error> = {
  pending?: (previousValue: Value | undefined) => any
  idle?: () => any
  fulfilled?: (value: Value) => any
  rejected?: (error: Err) => any
}

const cancelled = new WeakSet<Promise<any>>()
const toMappers = (mapper: Mapper | Mappers): Mappers => {
  return typeof mapper !== 'function' ? mapper : {
    idle: () => mapper(idle()),
    pending: (previousValue) => mapper(pending(previousValue)),
    fulfilled: (value) => mapper(fulfilled(value)),
    rejected: (error) => mapper(rejected(error)),
  }
}

class PromiseDirective extends AsyncDirective {
  promise: Maybe<Promise<any>>
  previousValue: Maybe<any>

  render(promise: Maybe<Promise<any>>, mapper: Mappers | Mapper) {
    if (!promise) this.previousValue = undefined
    if (promise !== this.promise && this.promise) cancelled.add(this.promise)
    
    const mappers = toMappers(mapper)
    this.promise = promise
    this.promise
      ?.then((result) => {
        this.previousValue = result
        this.safeSetValue(promise, mappers.fulfilled?.(result))
      })
      ?.catch((error) => this.safeSetValue(promise, mappers.rejected?.(error)))

    return this.promise ? mappers.pending?.(this.previousValue) : mappers.idle?.()
  }

  safeSetValue(promise: Maybe<Promise<any>>, value: any): void {
    if (!promise || cancelled.has(promise)) return
    this.setValue(value)
  }
}

export const promise = directive(PromiseDirective) as PromiseLitDirective

interface PromiseLitDirective {
  <T, E = Error>(promise: Maybe<Promise<T>>, mappers: Mappers<T, E> | Mapper<T, E>): any
}

