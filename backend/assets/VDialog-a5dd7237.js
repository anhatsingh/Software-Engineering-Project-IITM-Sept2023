import{p as D,aA as b,A as y,a7 as h,aB as S,U as x,an as B,al as f,am as w,Q as A,a8 as v,K as F,aC as m,a as g,ap as I,af as R,aD as T}from"./index-9925a73e.js";import{V as C}from"./dialog-transition-6afa3e57.js";const O=D({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...b({origin:"center center",scrollStrategy:"block",transition:{component:C},zIndex:2400})},"VDialog"),U=y()({name:"VDialog",props:O(),emits:{"update:modelValue":a=>!0},setup(a,p){let{slots:c}=p;const n=h(a,"modelValue"),{scopeId:V}=S(),t=x();function i(l){var r,s;const e=l.relatedTarget,o=l.target;if(e!==o&&((r=t.value)!=null&&r.contentEl)&&((s=t.value)!=null&&s.globalTop)&&![document,t.value.contentEl].includes(o)&&!t.value.contentEl.contains(o)){const u=T(t.value.contentEl);if(!u.length)return;const d=u[0],P=u[u.length-1];e===d?P.focus():d.focus()}}B&&f(()=>n.value&&a.retainFocus,l=>{l?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),f(n,async l=>{var e,o;await w(),l?(e=t.value.contentEl)==null||e.focus({preventScroll:!0}):(o=t.value.activatorEl)==null||o.focus({preventScroll:!0})});const E=A(()=>v({"aria-haspopup":"dialog","aria-expanded":String(n.value)},a.activatorProps));return F(()=>{const l=m.filterProps(a);return g(m,v({ref:t,class:["v-dialog",{"v-dialog--fullscreen":a.fullscreen,"v-dialog--scrollable":a.scrollable},a.class],style:a.style},l,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:E.value,role:"dialog"},V),{activator:c.activator,default:function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return g(I,{root:"VDialog"},{default:()=>{var s;return[(s=c.default)==null?void 0:s.call(c,...o)]}})}})}),R({},t)}});export{U as V};
