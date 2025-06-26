"use strict";
(self["webpackChunkanotate_imagesearch"] = self["webpackChunkanotate_imagesearch"] || []).push([[16,492,1555,1825,1929,2873,3349,3936,4206,4301,4310,5254,5730,6587,6669,6682,6691,7063,7635,8111,8968,9072,9367],{

/***/ 1555:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Command: () => (/* binding */ He),
  CommandDialog: () => (/* binding */ Ce),
  CommandEmpty: () => (/* binding */ xe),
  CommandGroup: () => (/* binding */ he),
  CommandInput: () => (/* binding */ Ee),
  CommandItem: () => (/* binding */ be),
  CommandList: () => (/* binding */ Se),
  CommandLoading: () => (/* binding */ Pe),
  CommandRoot: () => (/* binding */ me),
  CommandSeparator: () => (/* binding */ ye),
  useCommandState: () => (/* binding */ dist_D)
});

;// ../../node_modules/cmdk/dist/chunk-NZJY6EH4.mjs
var U=1,Y=.9,H=.8,J=.17,p=.1,u=.999,$=.9999;var k=.99,m=/[\\\/_+.#"@\[\(\{&]/,B=/[\\\/_+.#"@\[\(\{&]/g,K=/[\s-]/,X=/[\s-]/g;function G(_,C,h,P,A,f,O){if(f===C.length)return A===_.length?U:k;var T=`${A},${f}`;if(O[T]!==void 0)return O[T];for(var L=P.charAt(f),c=h.indexOf(L,A),S=0,E,N,R,M;c>=0;)E=G(_,C,h,P,c+1,f+1,O),E>S&&(c===A?E*=U:m.test(_.charAt(c-1))?(E*=H,R=_.slice(A,c-1).match(B),R&&A>0&&(E*=Math.pow(u,R.length))):K.test(_.charAt(c-1))?(E*=Y,M=_.slice(A,c-1).match(X),M&&A>0&&(E*=Math.pow(u,M.length))):(E*=J,A>0&&(E*=Math.pow(u,c-A))),_.charAt(c)!==C.charAt(f)&&(E*=$)),(E<p&&h.charAt(c-1)===P.charAt(f+1)||P.charAt(f+1)===P.charAt(f)&&h.charAt(c-1)!==P.charAt(f))&&(N=G(_,C,h,P,c+1,f+2,O),N*p>E&&(E=N*p)),E>S&&(S=E),c=h.indexOf(L,c+1);return O[T]=S,S}function D(_){return _.toLowerCase().replace(X," ")}function W(_,C,h){return _=h&&h.length>0?`${_+" "+h.join(" ")}`:_,G(_,C,D(_),D(C),0,0,{})}

// EXTERNAL MODULE: consume shared module (default) @radix-ui/react-dialog@!=1...1...2 (strict) (singleton) (fallback: ../../node_modules/cmdk/node_modules/@radix-ui/react-dialog/dist/index.mjs)
var index_mjs_ = __webpack_require__(5026);
// EXTERNAL MODULE: consume shared module (default) react@^8...3...1 (strict) (singleton) (fallback: ../../node_modules/react/index.js)
var index_js_ = __webpack_require__(6587);
// EXTERNAL MODULE: ../../node_modules/cmdk/node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(6669);
;// ../../node_modules/cmdk/dist/index.mjs
var V='[cmdk-group=""]',dist_X='[cmdk-group-items=""]',ge='[cmdk-group-heading=""]',dist_Y='[cmdk-item=""]',le=`${dist_Y}:not([aria-disabled="true"])`,Q="cmdk-item-select",M="data-value",Re=(r,o,n)=>W(r,o,n),ue=index_js_.createContext(void 0),dist_G=()=>index_js_.useContext(ue),de=index_js_.createContext(void 0),Z=()=>index_js_.useContext(de),fe=index_js_.createContext(void 0),me=index_js_.forwardRef((r,o)=>{let n=dist_k(()=>{var e,s;return{search:"",value:(s=(e=r.value)!=null?e:r.defaultValue)!=null?s:"",filtered:{count:0,items:new Map,groups:new Set}}}),u=dist_k(()=>new Set),c=dist_k(()=>new Map),d=dist_k(()=>new Map),f=dist_k(()=>new Set),p=pe(r),{label:v,children:b,value:l,onValueChange:y,filter:S,shouldFilter:C,loop:L,disablePointerSelection:ee=!1,vimBindings:j=!0,...H}=r,te=index_js_.useId(),$=index_js_.useId(),K=index_js_.useId(),x=index_js_.useRef(null),g=Me();T(()=>{if(l!==void 0){let e=l.trim();n.current.value=e,h.emit()}},[l]),T(()=>{g(6,re)},[]);let h=index_js_.useMemo(()=>({subscribe:e=>(f.current.add(e),()=>f.current.delete(e)),snapshot:()=>n.current,setState:(e,s,i)=>{var a,m,R;if(!Object.is(n.current[e],s)){if(n.current[e]=s,e==="search")z(),q(),g(1,U);else if(e==="value"&&(i||g(5,re),((a=p.current)==null?void 0:a.value)!==void 0)){let E=s!=null?s:"";(R=(m=p.current).onValueChange)==null||R.call(m,E);return}h.emit()}},emit:()=>{f.current.forEach(e=>e())}}),[]),B=index_js_.useMemo(()=>({value:(e,s,i)=>{var a;s!==((a=d.current.get(e))==null?void 0:a.value)&&(d.current.set(e,{value:s,keywords:i}),n.current.filtered.items.set(e,ne(s,i)),g(2,()=>{q(),h.emit()}))},item:(e,s)=>(u.current.add(e),s&&(c.current.has(s)?c.current.get(s).add(e):c.current.set(s,new Set([e]))),g(3,()=>{z(),q(),n.current.value||U(),h.emit()}),()=>{d.current.delete(e),u.current.delete(e),n.current.filtered.items.delete(e);let i=O();g(4,()=>{z(),(i==null?void 0:i.getAttribute("id"))===e&&U(),h.emit()})}),group:e=>(c.current.has(e)||c.current.set(e,new Set),()=>{d.current.delete(e),c.current.delete(e)}),filter:()=>p.current.shouldFilter,label:v||r["aria-label"],disablePointerSelection:ee,listId:te,inputId:K,labelId:$,listInnerRef:x}),[]);function ne(e,s){var a,m;let i=(m=(a=p.current)==null?void 0:a.filter)!=null?m:Re;return e?i(e,n.current.search,s):0}function q(){if(!n.current.search||p.current.shouldFilter===!1)return;let e=n.current.filtered.items,s=[];n.current.filtered.groups.forEach(a=>{let m=c.current.get(a),R=0;m.forEach(E=>{let P=e.get(E);R=Math.max(P,R)}),s.push([a,R])});let i=x.current;A().sort((a,m)=>{var P,_;let R=a.getAttribute("id"),E=m.getAttribute("id");return((P=e.get(E))!=null?P:0)-((_=e.get(R))!=null?_:0)}).forEach(a=>{let m=a.closest(dist_X);m?m.appendChild(a.parentElement===m?a:a.closest(`${dist_X} > *`)):i.appendChild(a.parentElement===i?a:a.closest(`${dist_X} > *`))}),s.sort((a,m)=>m[1]-a[1]).forEach(a=>{let m=x.current.querySelector(`${V}[${M}="${encodeURIComponent(a[0])}"]`);m==null||m.parentElement.appendChild(m)})}function U(){let e=A().find(i=>i.getAttribute("aria-disabled")!=="true"),s=e==null?void 0:e.getAttribute(M);h.setState("value",s||void 0)}function z(){var s,i,a,m;if(!n.current.search||p.current.shouldFilter===!1){n.current.filtered.count=u.current.size;return}n.current.filtered.groups=new Set;let e=0;for(let R of u.current){let E=(i=(s=d.current.get(R))==null?void 0:s.value)!=null?i:"",P=(m=(a=d.current.get(R))==null?void 0:a.keywords)!=null?m:[],_=ne(E,P);n.current.filtered.items.set(R,_),_>0&&e++}for(let[R,E]of c.current)for(let P of E)if(n.current.filtered.items.get(P)>0){n.current.filtered.groups.add(R);break}n.current.filtered.count=e}function re(){var s,i,a;let e=O();e&&(((s=e.parentElement)==null?void 0:s.firstChild)===e&&((a=(i=e.closest(V))==null?void 0:i.querySelector(ge))==null||a.scrollIntoView({block:"nearest"})),e.scrollIntoView({block:"nearest"}))}function O(){var e;return(e=x.current)==null?void 0:e.querySelector(`${dist_Y}[aria-selected="true"]`)}function A(){var e;return Array.from((e=x.current)==null?void 0:e.querySelectorAll(le))}function W(e){let i=A()[e];i&&h.setState("value",i.getAttribute(M))}function J(e){var R;let s=O(),i=A(),a=i.findIndex(E=>E===s),m=i[a+e];(R=p.current)!=null&&R.loop&&(m=a+e<0?i[i.length-1]:a+e===i.length?i[0]:i[a+e]),m&&h.setState("value",m.getAttribute(M))}function oe(e){let s=O(),i=s==null?void 0:s.closest(V),a;for(;i&&!a;)i=e>0?we(i,V):Ie(i,V),a=i==null?void 0:i.querySelector(le);a?h.setState("value",a.getAttribute(M)):J(e)}let ie=()=>W(A().length-1),ae=e=>{e.preventDefault(),e.metaKey?ie():e.altKey?oe(1):J(1)},se=e=>{e.preventDefault(),e.metaKey?W(0):e.altKey?oe(-1):J(-1)};return index_js_.createElement(dist/* Primitive */.sG.div,{ref:o,tabIndex:-1,...H,"cmdk-root":"",onKeyDown:e=>{var s;if((s=H.onKeyDown)==null||s.call(H,e),!e.defaultPrevented)switch(e.key){case"n":case"j":{j&&e.ctrlKey&&ae(e);break}case"ArrowDown":{ae(e);break}case"p":case"k":{j&&e.ctrlKey&&se(e);break}case"ArrowUp":{se(e);break}case"Home":{e.preventDefault(),W(0);break}case"End":{e.preventDefault(),ie();break}case"Enter":if(!e.nativeEvent.isComposing&&e.keyCode!==229){e.preventDefault();let i=O();if(i){let a=new Event(Q);i.dispatchEvent(a)}}}}},index_js_.createElement("label",{"cmdk-label":"",htmlFor:B.inputId,id:B.labelId,style:De},v),F(r,e=>index_js_.createElement(de.Provider,{value:h},index_js_.createElement(ue.Provider,{value:B},e))))}),be=index_js_.forwardRef((r,o)=>{var K,x;let n=index_js_.useId(),u=index_js_.useRef(null),c=index_js_.useContext(fe),d=dist_G(),f=pe(r),p=(x=(K=f.current)==null?void 0:K.forceMount)!=null?x:c==null?void 0:c.forceMount;T(()=>{if(!p)return d.item(n,c==null?void 0:c.id)},[p]);let v=ve(n,u,[r.value,r.children,u],r.keywords),b=Z(),l=dist_D(g=>g.value&&g.value===v.current),y=dist_D(g=>p||d.filter()===!1?!0:g.search?g.filtered.items.get(n)>0:!0);index_js_.useEffect(()=>{let g=u.current;if(!(!g||r.disabled))return g.addEventListener(Q,S),()=>g.removeEventListener(Q,S)},[y,r.onSelect,r.disabled]);function S(){var g,h;C(),(h=(g=f.current).onSelect)==null||h.call(g,v.current)}function C(){b.setState("value",v.current,!0)}if(!y)return null;let{disabled:L,value:ee,onSelect:j,forceMount:H,keywords:te,...$}=r;return index_js_.createElement(dist/* Primitive */.sG.div,{ref:N([u,o]),...$,id:n,"cmdk-item":"",role:"option","aria-disabled":!!L,"aria-selected":!!l,"data-disabled":!!L,"data-selected":!!l,onPointerMove:L||d.disablePointerSelection?void 0:C,onClick:L?void 0:S},r.children)}),he=index_js_.forwardRef((r,o)=>{let{heading:n,children:u,forceMount:c,...d}=r,f=index_js_.useId(),p=index_js_.useRef(null),v=index_js_.useRef(null),b=index_js_.useId(),l=dist_G(),y=dist_D(C=>c||l.filter()===!1?!0:C.search?C.filtered.groups.has(f):!0);T(()=>l.group(f),[]),ve(f,p,[r.value,r.heading,v]);let S=index_js_.useMemo(()=>({id:f,forceMount:c}),[c]);return index_js_.createElement(dist/* Primitive */.sG.div,{ref:N([p,o]),...d,"cmdk-group":"",role:"presentation",hidden:y?void 0:!0},n&&index_js_.createElement("div",{ref:v,"cmdk-group-heading":"","aria-hidden":!0,id:b},n),F(r,C=>index_js_.createElement("div",{"cmdk-group-items":"",role:"group","aria-labelledby":n?b:void 0},index_js_.createElement(fe.Provider,{value:S},C))))}),ye=index_js_.forwardRef((r,o)=>{let{alwaysRender:n,...u}=r,c=index_js_.useRef(null),d=dist_D(f=>!f.search);return!n&&!d?null:index_js_.createElement(dist/* Primitive */.sG.div,{ref:N([c,o]),...u,"cmdk-separator":"",role:"separator"})}),Ee=index_js_.forwardRef((r,o)=>{let{onValueChange:n,...u}=r,c=r.value!=null,d=Z(),f=dist_D(l=>l.search),p=dist_D(l=>l.value),v=dist_G(),b=index_js_.useMemo(()=>{var y;let l=(y=v.listInnerRef.current)==null?void 0:y.querySelector(`${dist_Y}[${M}="${encodeURIComponent(p)}"]`);return l==null?void 0:l.getAttribute("id")},[]);return index_js_.useEffect(()=>{r.value!=null&&d.setState("search",r.value)},[r.value]),index_js_.createElement(dist/* Primitive */.sG.input,{ref:o,...u,"cmdk-input":"",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"aria-autocomplete":"list",role:"combobox","aria-expanded":!0,"aria-controls":v.listId,"aria-labelledby":v.labelId,"aria-activedescendant":b,id:v.inputId,type:"text",value:c?r.value:f,onChange:l=>{c||d.setState("search",l.target.value),n==null||n(l.target.value)}})}),Se=index_js_.forwardRef((r,o)=>{let{children:n,label:u="Suggestions",...c}=r,d=index_js_.useRef(null),f=index_js_.useRef(null),p=dist_G();return index_js_.useEffect(()=>{if(f.current&&d.current){let v=f.current,b=d.current,l,y=new ResizeObserver(()=>{l=requestAnimationFrame(()=>{let S=v.offsetHeight;b.style.setProperty("--cmdk-list-height",S.toFixed(1)+"px")})});return y.observe(v),()=>{cancelAnimationFrame(l),y.unobserve(v)}}},[]),index_js_.createElement(dist/* Primitive */.sG.div,{ref:N([d,o]),...c,"cmdk-list":"",role:"listbox","aria-label":u,id:p.listId},F(r,v=>index_js_.createElement("div",{ref:N([f,p.listInnerRef]),"cmdk-list-sizer":""},v)))}),Ce=index_js_.forwardRef((r,o)=>{let{open:n,onOpenChange:u,overlayClassName:c,contentClassName:d,container:f,...p}=r;return index_js_.createElement(index_mjs_.Root,{open:n,onOpenChange:u},index_js_.createElement(index_mjs_.Portal,{container:f},index_js_.createElement(index_mjs_.Overlay,{"cmdk-overlay":"",className:c}),index_js_.createElement(index_mjs_.Content,{"aria-label":r.label,"cmdk-dialog":"",className:d},index_js_.createElement(me,{ref:o,...p}))))}),xe=index_js_.forwardRef((r,o)=>dist_D(u=>u.filtered.count===0)?index_js_.createElement(dist/* Primitive */.sG.div,{ref:o,...r,"cmdk-empty":"",role:"presentation"}):null),Pe=index_js_.forwardRef((r,o)=>{let{progress:n,children:u,label:c="Loading...",...d}=r;return index_js_.createElement(dist/* Primitive */.sG.div,{ref:o,...d,"cmdk-loading":"",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,"aria-label":c},F(r,f=>index_js_.createElement("div",{"aria-hidden":!0},f)))}),He=Object.assign(me,{List:Se,Item:be,Input:Ee,Group:he,Separator:ye,Dialog:Ce,Empty:xe,Loading:Pe});function we(r,o){let n=r.nextElementSibling;for(;n;){if(n.matches(o))return n;n=n.nextElementSibling}}function Ie(r,o){let n=r.previousElementSibling;for(;n;){if(n.matches(o))return n;n=n.previousElementSibling}}function pe(r){let o=index_js_.useRef(r);return T(()=>{o.current=r}),o}var T=typeof window=="undefined"?index_js_.useEffect:index_js_.useLayoutEffect;function dist_k(r){let o=index_js_.useRef();return o.current===void 0&&(o.current=r()),o}function N(r){return o=>{r.forEach(n=>{typeof n=="function"?n(o):n!=null&&(n.current=o)})}}function dist_D(r){let o=Z(),n=()=>r(o.snapshot());return index_js_.useSyncExternalStore(o.subscribe,n,n)}function ve(r,o,n,u=[]){let c=index_js_.useRef(),d=dist_G();return T(()=>{var v;let f=(()=>{var b;for(let l of n){if(typeof l=="string")return l.trim();if(typeof l=="object"&&"current"in l)return l.current?(b=l.current.textContent)==null?void 0:b.trim():c.current}})(),p=u.map(b=>b.trim());d.value(r,f,p),(v=o.current)==null||v.setAttribute(M,f),c.current=f}),c}var Me=()=>{let[r,o]=index_js_.useState(),n=dist_k(()=>new Map);return T(()=>{n.current.forEach(u=>u()),n.current=new Map},[r]),(u,c)=>{n.current.set(u,c),o({})}};function Te(r){let o=r.type;return typeof o=="function"?o(r.props):"render"in o?o.render(r.props):r}function F({asChild:r,children:o},n){return r&&index_js_.isValidElement(o)?index_js_.cloneElement(Te(o),{ref:o.ref},n(o.props.children)):n(o)}var De={position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"};


/***/ }),

/***/ 6669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hO: () => (/* binding */ $8927f6f2acc4f386$export$6d1a0317bde7de7f),
/* harmony export */   sG: () => (/* binding */ $8927f6f2acc4f386$export$250ffa63cdc0d034)
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9209);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6587);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3349);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6996);









const $8927f6f2acc4f386$var$NODES = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul'
]; // Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396
// prettier-ignore
/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$250ffa63cdc0d034 = $8927f6f2acc4f386$var$NODES.reduce((primitive, node)=>{
    const Node = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
        const { asChild: asChild , ...primitiveProps } = props;
        const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.Slot : node;
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
            window[Symbol.for('radix-ui')] = true;
        }, []);
        return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, primitiveProps, {
            ref: forwardedRef
        }));
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
/* -------------------------------------------------------------------------------------------------
 * Utils
 * -----------------------------------------------------------------------------------------------*/ /**
 * Flush custom event dispatch
 * https://github.com/radix-ui/primitives/pull/1378
 *
 * React batches *all* event handlers since version 18, this introduces certain considerations when using custom event types.
 *
 * Internally, React prioritises events in the following order:
 *  - discrete
 *  - continuous
 *  - default
 *
 * https://github.com/facebook/react/blob/a8a4742f1c54493df00da648a3f9d26e3db9c8b5/packages/react-dom/src/events/ReactDOMEventListener.js#L294-L350
 *
 * `discrete` is an  important distinction as updates within these events are applied immediately.
 * React however, is not able to infer the priority of custom event types due to how they are detected internally.
 * Because of this, it's possible for updates from custom events to be unexpectedly batched when
 * dispatched by another `discrete` event.
 *
 * In order to ensure that updates from custom events are applied predictably, we need to manually flush the batch.
 * This utility should be used when dispatching a custom event from within another `discrete` event, this utility
 * is not nessesary when dispatching known event types, or if dispatching a custom type inside a non-discrete event.
 * For example:
 *
 * dispatching a known click 👎
 * target.dispatchEvent(new Event(‘click’))
 *
 * dispatching a custom type within a non-discrete event 👎
 * onScroll={(event) => event.target.dispatchEvent(new CustomEvent(‘customType’))}
 *
 * dispatching a custom type within a `discrete` event 👍
 * onPointerDown={(event) => dispatchDiscreteCustomEvent(event.target, new CustomEvent(‘customType’))}
 *
 * Note: though React classifies `focus`, `focusin` and `focusout` events as `discrete`, it's  not recommended to use
 * this utility with them. This is because it's possible for those handlers to be called implicitly during render
 * e.g. when focus is within a component as it is unmounted, or when managing focus on mount.
 */ function $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, event) {
    if (target) (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)(()=>target.dispatchEvent(event)
    );
}
/* -----------------------------------------------------------------------------------------------*/ const $8927f6f2acc4f386$export$be92b6f5f03c0fe9 = (/* unused pure expression or super */ null && ($8927f6f2acc4f386$export$250ffa63cdc0d034));





//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 9209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ })

}]);
//# sourceMappingURL=1555.js.map