import { delay } from './delay'

export type Post = {
  id: string
  title: string
  body: string
}
export const post = {
  example: {
    id: '1',
    title: 'Awesome post',
    body: 'I ain’t got much to say, as long as it works…'
  },
  requestDelay: Number(new URLSearchParams(globalThis.location.search).get('delay') ?? '1000'),
  get: () => delay(post.requestDelay).then(() => post.example),
  throw: (error = new Error('Aïe aïe aïe')) => delay(post.requestDelay).then(() => {
    throw error
  }),
}
