/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$1=globalThis.trustedTypes,s=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e$2,n$1=`<${o$1}>`,l$1=document,h$1=(t="")=>l$1.createComment(t),r$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d$1=Array.isArray,u=t=>{var i;return d$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea)$/i,$=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),p=$(1),b=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),x=new WeakMap,w=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,$=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,$=-1):void 0===u[1]?$=-2:($=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$1:$>=0?(l.push(o),s.slice(0,$)+"$lit$"+s.slice($)+e$2+y):s+e$2+(-2===$?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");return [void 0!==s?s.createHTML(u):u,l]};class P{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=P.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$2)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$2),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?k:"@"===i[1]?H:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$2),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h$1()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h$1());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$2,t+1));)c.push({type:7,index:r}),t+=e$2.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r$2(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=V(t,d._$AS(t,i.values),d,e)),i}class E{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new I(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),r$2(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):u(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==T&&r$2(this._$AH)?this._$AA.nextSibling.data=t:this.S(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new E(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=x.get(t.strings);return void 0===i&&x.set(t.strings,i=new P(t)),i}M(t){d$1(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.A(h$1()),this.A(h$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!r$2(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r$2(h)||h!==this._$AH[l]),h===T?t=T:t!==T&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===T?void 0:t;}}class k extends S{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==T?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class H extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:T)===b)return;const e=this._$AH,o=t===T&&e!==T||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==T&&(e===T||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class I{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t);}}const R=window.litHtmlPolyfillSupport;null==R||R(P,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.0.1");

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r$1=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e$1=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(i,t)=>{var s,o;const n=i._$AN;if(void 0===n)return !1;for(const i of n)null===(o=(s=i)._$AO)||void 0===o||o.call(s,t,!1),e(i,t);return !0},o=i=>{let t,s;do{if(void 0===(t=i._$AM))break;s=t._$AN,s.delete(i),i=t;}while(0===(null==s?void 0:s.size))},n=i=>{for(let t;t=i._$AM;i=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(i))break;s.add(i),l(t);}};function r(i){void 0!==this._$AN?(o(this),this._$AM=i,n(this)):this._$AM=i;}function h(i,t=!1,s=0){const n=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(n))for(let i=s;i<n.length;i++)e(n[i],!1),o(n[i]);else null!=n&&(e(n,!1),o(n));else e(this,i);}const l=i=>{var t$1,e,o,n;i.type==t.CHILD&&(null!==(t$1=(o=i)._$AP)&&void 0!==t$1||(o._$AP=h),null!==(e=(n=i)._$AQ)&&void 0!==e||(n._$AQ=r));};class d extends i{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,s){super._$AT(i,t,s),n(this),this.isConnected=i._$AU;}_$AO(i,t=!0){var s,n;i!==this.isConnected&&(this.isConnected=i,i?null===(s=this.reconnected)||void 0===s||s.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(e(this,i),o(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

const idle = () => ({ state: 'idle' });
const pending = (previousValue) => ({ state: 'pending', value: previousValue });
const fulfilled = (value) => ({ state: 'fulfilled', value });
const rejected = (error) => ({ state: 'rejected', error });
const cancelled = new WeakSet();
const toMappers = (mapper) => {
    return typeof mapper !== 'function' ? mapper : {
        idle: () => mapper(idle()),
        pending: (previousValue) => mapper(pending(previousValue)),
        fulfilled: (value) => mapper(fulfilled(value)),
        rejected: (error) => mapper(rejected(error)),
    };
};
class PromiseDirective extends d {
    promise;
    previousValue;
    async = idle();
    render(promise, mapper) {
        const mappers = toMappers(mapper);
        if (this.promise === promise)
            return this.mapState(mappers);
        else if (this.promise)
            cancelled.add(this.promise);
        this.promise = promise;
        this.async = this.promise ? pending(this.previousValue) : idle();
        this.promise
            ?.then((value) => {
            this.safeSetValue(mappers, fulfilled(value), promise);
        })
            ?.catch((error) => {
            this.safeSetValue(mappers, rejected(error), promise);
        });
        return this.mapState(mappers);
    }
    mapState(mappers) {
        switch (this.async.state) {
            case 'idle': return mappers.idle?.();
            case 'pending': return mappers.pending?.(this.previousValue);
            case 'rejected': return mappers.rejected?.(this.async.error);
            case 'fulfilled': {
                this.previousValue = this.async.value;
                return mappers.fulfilled?.(this.async.value);
            }
        }
    }
    safeSetValue(mappers, async, promise) {
        if (promise && cancelled.has(promise))
            return;
        this.async = async;
        this.setValue(this.mapState(mappers));
    }
}
const promise = e$1(PromiseDirective);

const renderPost$1 = (post) => p `
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
    idle: () => p `Idle…`,
    pending: (post) => p `Pending… Previous post: ${post?.id} − ${post?.title}`,
    fulfilled: (post) => p `Fulfilled! ${post.id} − ${post.title}`,
    rejected: (error) => p `Something went wrong: ${error.message}`,
})}
    </div>
  </div>
`;

const renderPost = (post) => p `
  <div style="position: relative">
    <div
      class="overlay"
      ?hidden=${promise(post, (async) => async.state !== 'pending')}
    ></div>
    <div>
      ${promise(post, (async) => {
    switch (async.state) {
        case 'idle': return p `Idle…`;
        case 'pending': return p `Pending… ${async.value?.id} − ${async.value?.title}`;
        case 'fulfilled': return p `Fulfilled! ${async.value.id} − ${async.value.title}`;
        case 'rejected': return p `Something went wrong: ${async.error.message}`;
        default: return null;
    }
})}
    </div>
  </div>
`;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const post = {
    example: {
        id: '1',
        title: 'Awesome post',
        body: 'I ain’t got much to say, as long as it works…'
    },
    requestDelay: Number(new URLSearchParams(globalThis.location.search).get('delay') ?? '1000'),
    get: () => delay(post.requestDelay).then(() => post.example),
    throw: (error = new Error('Aïe aïe aïe')) => delay(post.requestDelay).then(() => {
        throw error;
    }),
};

const root = document.querySelector('.demo');
const page = ({ activeView, activeSubView, startWithIdle }) => {
    function switchView(view, subView, startWithIdle) {
        page({ activeView: view, activeSubView: subView, startWithIdle });
    }
    const template = (promise) => p `
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
      ${activeSubView === 'mapper function' ? renderPost(promise) : renderPost$1(promise)}
    </div>
  </div>
</div>
  `;
    const renderTemplate = () => {
        const promise = activeView === 'fulfilled' ? post.get() : post.throw();
        w(template(promise), root);
    };
    if (!startWithIdle)
        renderTemplate();
    else {
        w(template(undefined), root);
        setTimeout(renderTemplate, 1000);
    }
};
page({ activeView: 'fulfilled', activeSubView: 'mapper object', startWithIdle: true });
