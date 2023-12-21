import{m as Ve,u as ye,a as ke,b as Ce,c as we,d as xe}from"./VSelect-d87bab9f.js";import{f as Se,g as be,V as J}from"./VTextField-5ae99a31.js";import{p as Fe,ah as Ie,ai as Ae,u as Pe,aj as De,U as _,T as I,a7 as O,Q as C,ak as Re,a0 as _e,al as q,am as Q,an as Te,F as Me,a as o,N as M,a8 as T,J as Le,G as W,ac as X,ao as Ne,ap as Ue,b as Ee,aq as Be,af as Ke,ar as Oe,as as Y}from"./index-5d579034.js";import{m as qe,u as ze}from"./filter-0178f655.js";function He(e,g,t){if(g==null)return e;if(Array.isArray(g))throw new Error("Multiple matches is not implemented");return typeof g=="number"&&~g?o(M,null,[o("span",{class:"v-autocomplete__unmask"},[e.substr(0,g)]),o("span",{class:"v-autocomplete__mask"},[e.substr(g,t)]),o("span",{class:"v-autocomplete__unmask"},[e.substr(g+t)])]):e}const $e=Fe({autoSelectFirst:{type:[Boolean,String]},search:String,...qe({filterKeys:["title"]}),...Ve(),...Ie(Se({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Ae({transition:!1})},"VAutocomplete"),We=Pe()({name:"VAutocomplete",props:$e(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,g){let{slots:t}=g;const{t:L}=De(),h=_(),y=I(!1),k=I(!0),A=I(!1),z=_(),H=_(),N=O(e,"menu"),c=C({get:()=>N.value,set:l=>{var a;N.value&&!l&&((a=z.value)!=null&&a.ΨopenChildren)||(N.value=l)}}),s=I(-1),Z=C(()=>{var l;return(l=h.value)==null?void 0:l.color}),$=C(()=>c.value?e.closeText:e.openText),{items:U,transformIn:ee,transformOut:le}=Re(e),{textColorClasses:te,textColorStyles:ae}=_e(Z),v=O(e,"search",""),n=O(e,"modelValue",[],l=>ee(l===null?[null]:Oe(l)),l=>{const a=le(l);return e.multiple?a:a[0]??null}),ue=C(()=>typeof e.counterValue=="function"?e.counterValue(n.value):typeof e.counterValue=="number"?e.counterValue:n.value.length),b=be(),{filteredItems:E,getMatches:ne}=ze(e,U,()=>k.value?"":v.value),V=C(()=>e.hideSelected?E.value.filter(l=>!n.value.some(a=>a.value===l.value)):E.value),oe=C(()=>n.value.map(l=>l.props.value)),P=C(()=>{var a;return(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&v.value===((a=V.value[0])==null?void 0:a.title))&&V.value.length>0&&!k.value&&!A.value}),B=C(()=>e.hideNoData&&!U.value.length||e.readonly||(b==null?void 0:b.isReadonly.value)),K=_(),{onListScroll:se,onListKeydown:ie}=ye(K,h);function re(l){e.openOnClear&&(c.value=!0),v.value=""}function ce(){B.value||(c.value=!0)}function ve(l){B.value||(y.value&&(l.preventDefault(),l.stopPropagation()),c.value=!c.value)}function de(l){var m,u,d;if(e.readonly||b!=null&&b.isReadonly.value)return;const a=h.value.selectionStart,r=n.value.length;if((s.value>-1||["Enter","ArrowDown","ArrowUp"].includes(l.key))&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(c.value=!0),["Escape"].includes(l.key)&&(c.value=!1),P.value&&["Enter","Tab"].includes(l.key)&&w(V.value[0]),l.key==="ArrowDown"&&P.value&&((m=K.value)==null||m.focus("next")),!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(s.value<0){l.key==="Backspace"&&!v.value&&(s.value=r-1);return}const i=s.value,p=n.value[s.value];p&&!p.props.disabled&&w(p),s.value=i>=r-1?r-2:i}if(l.key==="ArrowLeft"){if(s.value<0&&a>0)return;const i=s.value>-1?s.value-1:r-1;n.value[i]?s.value=i:(s.value=-1,h.value.setSelectionRange((u=v.value)==null?void 0:u.length,(d=v.value)==null?void 0:d.length))}if(l.key==="ArrowRight"){if(s.value<0)return;const i=s.value+1;n.value[i]?s.value=i:(s.value=-1,h.value.setSelectionRange(0,0))}}}function fe(l){if(Y(h.value,":autofill")||Y(h.value,":-webkit-autofill")){const a=U.value.find(r=>r.title===l.target.value);a&&w(a)}}function me(){var l;y.value&&(k.value=!0,(l=h.value)==null||l.focus())}function pe(l){y.value=!0,setTimeout(()=>{A.value=!0})}function he(l){A.value=!1}function ge(l){(l==null||l===""&&!e.multiple)&&(n.value=[])}const F=I(!1);function w(l){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!l.props.disabled)if(e.multiple){const r=n.value.findIndex(m=>e.valueComparator(m.value,l.value));if(r===-1)n.value=[...n.value,l];else{const m=[...n.value];m.splice(r,1),n.value=m}}else n.value=a?[l]:[],F.value=!0,v.value=a?l.title:"",c.value=!1,k.value=!0,Q(()=>F.value=!1)}return q(y,(l,a)=>{var r;l!==a&&(l?(F.value=!0,v.value=e.multiple?"":String(((r=n.value.at(-1))==null?void 0:r.props.title)??""),k.value=!0,Q(()=>F.value=!1)):(!e.multiple&&v.value==null?n.value=[]:P.value&&!A.value&&!n.value.some(m=>{let{value:u}=m;return u===V.value[0].value})&&w(V.value[0]),c.value=!1,v.value="",s.value=-1))}),q(v,l=>{!y.value||F.value||(l&&(c.value=!0),k.value=!l)}),q(c,()=>{if(!e.hideSelected&&c.value&&n.value.length){const l=V.value.findIndex(a=>n.value.some(r=>a.value===r.value));Te&&window.requestAnimationFrame(()=>{var a;l>=0&&((a=H.value)==null||a.scrollToIndex(l))})}}),Me(()=>{const l=!!(e.chips||t.chip),a=!!(!e.hideNoData||V.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),r=n.value.length>0,m=J.filterProps(e);return o(J,T({ref:h},m,{modelValue:v.value,"onUpdate:modelValue":[u=>v.value=u,ge],focused:y.value,"onUpdate:focused":u=>y.value=u,validationValue:n.externalValue,counterValue:ue.value,dirty:r,onChange:fe,class:["v-autocomplete",`v-autocomplete--${e.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!t.selection,"v-autocomplete--selecting-index":s.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:r?void 0:e.placeholder,"onClick:clear":re,"onMousedown:control":ce,onKeydown:de}),{...t,default:()=>o(M,null,[o(ke,T({ref:z,modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,activator:"parent",contentClass:"v-autocomplete__content",disabled:B.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:me},e.menuProps),{default:()=>[a&&o(Le,{ref:K,selected:oe.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:u=>u.preventDefault(),onKeydown:ie,onFocusin:pe,onFocusout:he,onScrollPassive:se,tabindex:"-1",color:e.itemColor??e.color},{default:()=>{var u,d,i;return[(u=t["prepend-item"])==null?void 0:u.call(t),!V.value.length&&!e.hideNoData&&(((d=t["no-data"])==null?void 0:d.call(t))??o(W,{title:L(e.noDataText)},null)),o(Ce,{ref:H,renderless:!0,items:V.value},{default:p=>{var G;let{item:f,index:x,itemRef:S}=p;const j=T(f.props,{ref:S,key:x,active:P.value&&x===0?!0:void 0,onClick:()=>w(f)});return((G=t.item)==null?void 0:G.call(t,{item:f,index:x,props:j}))??o(W,j,{prepend:D=>{let{isSelected:R}=D;return o(M,null,[e.multiple&&!e.hideSelected?o(we,{key:f.value,modelValue:R,ripple:!1,tabindex:"-1"},null):void 0,f.props.prependIcon&&o(X,{icon:f.props.prependIcon},null)])},title:()=>{var D,R;return k.value?f.title:He(f.title,(D=ne(f))==null?void 0:D.title,((R=v.value)==null?void 0:R.length)??0)}})}}),(i=t["append-item"])==null?void 0:i.call(t)]}})]}),n.value.map((u,d)=>{function i(S){S.stopPropagation(),S.preventDefault(),w(u,!1)}const p={"onClick:close":i,onMousedown(S){S.preventDefault(),S.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},f=l?!!t.chip:!!t.selection,x=f?Ne(l?t.chip({item:u,index:d,props:p}):t.selection({item:u,index:d})):void 0;if(!(f&&!x))return o("div",{key:u.value,class:["v-autocomplete__selection",d===s.value&&["v-autocomplete__selection--selected",te.value]],style:d===s.value?ae.value:{}},[l?t.chip?o(Ue,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:u.title}}},{default:()=>[x]}):o(xe,T({key:"chip",closable:e.closableChips,size:"small",text:u.title,disabled:u.props.disabled},p),null):x??o("span",{class:"v-autocomplete__selection-text"},[u.title,e.multiple&&d<n.value.length-1&&o("span",{class:"v-autocomplete__selection-comma"},[Ee(",")])])])})]),"append-inner":function(){var p;for(var u=arguments.length,d=new Array(u),i=0;i<u;i++)d[i]=arguments[i];return o(M,null,[(p=t["append-inner"])==null?void 0:p.call(t,...d),e.menuIcon?o(X,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:ve,onClick:Be,"aria-label":L($.value),title:L($.value)},null):void 0])}})}),Ke({isFocused:y,isPristine:k,menu:c,search:v,filteredItems:E,select:w},h)}});export{We as V};