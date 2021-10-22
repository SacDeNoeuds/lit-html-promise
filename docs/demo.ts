import { html, render } from 'lit-html'
import { renderPost as templateMapperObject } from './example.mapper-object'
import { renderPost as  templateMapperFunction } from './example.mapper-fn'
import { post } from './mock'

type View = 'fulfilled' | 'rejected'
type SubView = 'mapper object' | 'mapper function'
type PageProps = {
  activeView: View,
  activeSubView: SubView,
  startWithIdle: boolean
}
const root = document.querySelector('.demo') as HTMLDivElement
const page = ({ activeView, activeSubView, startWithIdle }: PageProps) => {
  function switchView(view: View, subView: SubView, startWithIdle: boolean): void {
    page({ activeView: view, activeSubView: subView, startWithIdle })
  }
  const template = (promise?: Promise<any>) => html`
<div class="menu card">
  <fieldset>
    <legend>Mapper object demos</legend>
    <button @click=${() => switchView('fulfilled', 'mapper object', true)} ?disabled=${activeSubView === 'mapper object' && activeView === 'fulfilled'}>Fulfilled</button>
    <button @click=${() => switchView('rejected', 'mapper object', true)} ?disabled=${activeSubView === 'mapper object' && activeView === 'rejected'}>Rejected</button>
  </fieldset>
  <fieldset>
    <legend>Mapper function demos</legend>
    <button @click=${() => switchView('fulfilled', 'mapper function', true)} ?disabled=${activeSubView === 'mapper function' && activeView === 'fulfilled'}>Fulfilled</button>
    <button @click=${() => switchView('rejected', 'mapper function', true)} ?disabled=${activeSubView === 'mapper function' && activeView === 'rejected'}>Rejected</button>
  </fieldset>
</div>
<div class="example">
  <div class="card">
    <h3 class="example-title">
      Example: “${activeSubView}” with ${activeView} promise
    </h3>
    <div class="example-subtitle">
      <button @click=${() => switchView(activeView, activeSubView, true)}>Refresh</button>
      <button @click=${() => switchView(activeView, activeSubView, false)}>Refresh promise only</button>
      <span style="display: inline-block; margin-left: 0.5rem">post: ${promise === undefined ? 'undefined' : 'Promise<Post>'}</span>
    </div>
    <div class="example-body">
      ${activeSubView === 'mapper function' ? templateMapperFunction(promise) : templateMapperObject(promise)}
    </div>
  </div>
</div>
  `
  
  const renderTemplate = () => {
    const promise = activeView === 'fulfilled' ? post.get() : post.throw()
    render(template(promise), root)
  }
  if (!startWithIdle) renderTemplate()
  else {
    render(template(undefined), root)
    setTimeout(renderTemplate, 1000);
  }
}

page({ activeView: 'fulfilled', activeSubView: 'mapper object', startWithIdle: true })
