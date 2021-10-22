import { html } from 'lit-html'
import { promise } from '../src/main'
import { Post } from './mock'

export const renderPost = (post?: Promise<Post>) => html`
  <div style="position: relative">
    <div
      class="overlay"
      ?hidden=${promise(post, {
        idle: () => true,
        pending: () => false,
        fulfilled: () => true,
        rejected: () => true,
      })}
    ></div>
    <div>
    ${promise(post, {
      idle: () => html`Idle…`,
      pending: (post) => html`Pending… Previous post: ${post?.id} − ${post?.title}`,
      fulfilled: (post) => html`Fulfilled! ${post.id} − ${post.title}`,
      rejected: (error) => html`Something went wrong: ${error.message}`,
    })}
    </div>
  </div>
`