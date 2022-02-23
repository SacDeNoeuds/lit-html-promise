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
  async: AsyncValue<any> = idle()

  render(promise: Maybe<Promise<any>>, mapper: Mappers | Mapper) {
    const mappers = toMappers(mapper)
    if (this.promise === promise) return this.mapState(mappers)
    else if (this.promise) cancelled.add(this.promise)

    this.promise = promise
    this.async = this.promise ? pending(this.previousValue) : idle()
    this.promise
      ?.then((value) => {
        this.safeSetValue(mappers, fulfilled(value), promise)
      })
      ?.catch((error) => {
        this.safeSetValue(mappers, rejected(error), promise)
      })
    return this.mapState(mappers)
  }

  mapState(mappers: Mappers) {
    switch (this.async.state) {
      case 'idle': return mappers.idle?.()
      case 'pending': return mappers.pending?.(this.previousValue)
      case 'rejected': return mappers.rejected?.(this.async.error)
      case 'fulfilled': {
        this.previousValue = this.async.value
        return mappers.fulfilled?.(this.async.value)
      }
    }
  }

  safeSetValue(mappers: Mappers, async: AsyncValue<any>, promise: Maybe<Promise<any>>): void {
    if (promise && cancelled.has(promise)) return
    this.async= async
    this.setValue(this.mapState(mappers))
  }
}

export const promise = directive(PromiseDirective) as PromiseLitDirective

interface PromiseLitDirective {
  <T, E = Error>(promise: Maybe<Promise<T>>, mappers: Mappers<T, E> | Mapper<T, E>): any
}

