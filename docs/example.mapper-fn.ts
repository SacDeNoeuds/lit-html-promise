import { html } from 'lit-html'
import { promise } from '../src/main'
import { Post } from './mock'

export const renderPost = (post?: Promise<Post>) => html`
  <div style="position: relative">
    <div
      class="overlay"
      ?hidden=${promise(post, (async) => async.state !== 'pending')}
    ></div>
    <div>
      ${promise(post, (async) => {
        switch (async.state) {
          case 'idle': return html`Idle…`
          case 'pending': return html`Pending… ${async.value?.id} − ${async.value?.title}`
          case 'fulfilled': return html`Fulfilled! ${async.value.id} − ${async.value.title}`
          case 'rejected': return html`Something went wrong: ${async.error.message}`
          default: return null
        }
      })}
    </div>
  </div>
`