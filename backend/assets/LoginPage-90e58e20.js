import{f as me,p,I as de,m as O,g as ve,h as X,i as Y,j as U,k as z,l as E,n as Z,q as j,s as ee,t as B,u as te,v as I,x as M,y as ae,z as fe,A as se,B as ne,C as $,D as H,E as q,F as ye,G as oe,H as be,a as s,J as le,d as ke,K as L,V as re,L as D,M as R,N as G,O as he,P as Ve,Q as ge,R as Se,S as ie,T as K,U as Ce,W as _e,X as we,Y as Pe,Z as xe,_ as Te,o as N,c as pe,w as f,b as x,$ as Be,a0 as T,a1 as Ae,a2 as Fe,e as ce,a3 as Ie,a4 as Le,a5 as De}from"./index-60217f6b.js";import{m as Re,c as Ne,f as ue,a as Oe,V as Q,b as W}from"./VTextField-ca67f13a.js";import{u as Ue}from"./scopeId-aa21dfff.js";import{a as ze,V as Ee}from"./VToolbar-eb837a90.js";const je=me("v-alert-title"),Me=["success","info","warning","error"],$e=p({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:de,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Me.includes(e)},...O(),...ve(),...X(),...Y(),...U(),...z(),...E(),...Z(),...j(),...ee({variant:"flat"})},"VAlert"),He=B()({name:"VAlert",props:$e(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:o,slots:t}=a;const n=te(e,"modelValue"),l=I(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),r=I(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:m}=M(e),{colorClasses:i,colorStyles:u,variantClasses:c}=ae(r),{densityClasses:y}=fe(e),{dimensionStyles:v}=se(e),{elevationClasses:b}=ne(e),{locationStyles:w}=$(e),{positionClasses:V}=H(e),{roundedClasses:g}=q(e),{textColorClasses:k,textColorStyles:A}=ye(oe(e,"borderColor")),{t:F}=be(),P=I(()=>({"aria-label":F(e.closeLabel),onClick(d){n.value=!1,o("click:close",d)}}));return()=>{const d=!!(t.prepend||l.value),S=!!(t.title||e.title),h=!!(t.close||e.closable);return n.value&&s(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},m.value,i.value,y.value,b.value,V.value,g.value,c.value,e.class],style:[u.value,v.value,w.value,e.style],role:"alert"},{default:()=>{var C,J;return[le(!1,"v-alert"),e.border&&s("div",{key:"border",class:["v-alert__border",k.value],style:A.value},null),d&&s("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?s(L,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},t.prepend):s(ke,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),s("div",{class:"v-alert__content"},[S&&s(je,{key:"title"},{default:()=>{var _;return[((_=t.title)==null?void 0:_.call(t))??e.title]}}),((C=t.text)==null?void 0:C.call(t))??e.text,(J=t.default)==null?void 0:J.call(t)]),t.append&&s("div",{key:"append",class:"v-alert__append"},[t.append()]),h&&s("div",{key:"close",class:"v-alert__close"},[t.close?s(L,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var _;return[(_=t.close)==null?void 0:_.call(t,{props:P.value})]}}):s(re,D({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}}),qe=p({...O(),...Re()},"VForm"),Ge=B()({name:"VForm",props:qe(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:o,emit:t}=a;const n=Ne(e),l=R();function r(i){i.preventDefault(),n.reset()}function m(i){const u=i,c=n.validate();u.then=c.then.bind(c),u.catch=c.catch.bind(c),u.finally=c.finally.bind(c),t("submit",u),u.defaultPrevented||c.then(y=>{var b;let{valid:v}=y;v&&((b=l.value)==null||b.submit())}),u.preventDefault()}return G(()=>{var i;return s("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:r,onSubmit:m},[(i=o.default)==null?void 0:i.call(o,n)])}),ue(n,l)}});const Je=p({color:String,...he(),...O(),...X(),...Y(),...U(),...z(),...E(),...Z(),...j()},"VSheet"),Ke=B()({name:"VSheet",props:Je(),setup(e,a){let{slots:o}=a;const{themeClasses:t}=M(e),{backgroundColorClasses:n,backgroundColorStyles:l}=Ve(oe(e,"color")),{borderClasses:r}=ge(e),{dimensionStyles:m}=se(e),{elevationClasses:i}=ne(e),{locationStyles:u}=$(e),{positionClasses:c}=H(e),{roundedClasses:y}=q(e);return G(()=>s(e.tag,{class:["v-sheet",t.value,n.value,r.value,i.value,c.value,y.value,e.class],style:[l.value,m.value,u.value,e.style]},o)),{}}});function Qe(e){const a=ie(e);let o=-1;function t(){clearInterval(o)}function n(){t(),xe(()=>a.value=e)}function l(r){const m=r?getComputedStyle(r):{transitionDuration:.2},i=parseFloat(m.transitionDuration)*1e3||200;if(t(),a.value<=0)return;const u=performance.now();o=window.setInterval(()=>{const c=performance.now()-u+i;a.value=Math.max(e-c,0),a.value<=0&&t()},i)}return Pe(t),{clear:t,time:a,start:l,reset:n}}const We=p({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...U({location:"bottom"}),...z(),...E(),...ee(),...j(),...Se(Oe({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),Xe=B()({name:"VSnackbar",props:We(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const t=te(e,"modelValue"),{locationStyles:n}=$(e),{positionClasses:l}=H(e),{scopeId:r}=Ue(),{themeClasses:m}=M(e),{colorClasses:i,colorStyles:u,variantClasses:c}=ae(e),{roundedClasses:y}=q(e),v=Qe(Number(e.timeout)),b=R(),w=R(),V=ie(!1);K(t,k),K(()=>e.timeout,k),Ce(()=>{t.value&&k()});let g=-1;function k(){v.reset(),window.clearTimeout(g);const d=Number(e.timeout);if(!t.value||d===-1)return;const S=_e(w.value);v.start(S),g=window.setTimeout(()=>{t.value=!1},d)}function A(){v.reset(),window.clearTimeout(g)}function F(){V.value=!0,A()}function P(){V.value=!1,k()}return G(()=>{const d=Q.filterProps(e),S=!!(o.default||o.text||e.text);return s(Q,D({ref:b,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},l.value,e.class],style:e.style},d,{modelValue:t.value,"onUpdate:modelValue":h=>t.value=h,contentProps:D({class:["v-snackbar__wrapper",m.value,i.value,y.value,c.value],style:[n.value,u.value],onPointerenter:F,onPointerleave:P},d.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},r),{default:()=>{var h,C;return[le(!1,"v-snackbar"),e.timer&&s("div",{key:"timer",class:"v-snackbar__timer"},[s(we,{ref:w,active:!V.value,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":v.time.value},null)]),S&&s("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((h=o.text)==null?void 0:h.call(o))??e.text,(C=o.default)==null?void 0:C.call(o)]),o.actions&&s(L,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[s("div",{class:"v-snackbar__actions"},[o.actions()])]})]},activator:o.activator})}),ue({},b)}}),Ye={name:"LoginForm",data(){return{snackbar:{show:!1,message:null,color:null},username:"abc@xyz.com",password:"abcd",showAlert:!1,varient:"success",message:"Hi"}},methods:{login:function(){fetch("/api/v1/user/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.username,password:this.password})}).then(e=>e.json().then(a=>({response:e,data:a}))).then(({response:e,data:a})=>{if(e.ok)sessionStorage.setItem("name",a.profile.name),sessionStorage.setItem("email",a.profile.email),sessionStorage.setItem("role",a.profile.role),sessionStorage.setItem("token",a.auth.authToken),this.snackbar={message:"Login Successful, redirecting",color:"success",show:!0},a.profile.role=="admin"?this.$router.push({name:"AdminDashboard"}):a.profile.role=="student"&&this.$router.push({name:"StudentHome"});else throw new Error(`${a.message}`)}).catch(e=>{this.message=e.message,this.showAlert=!0,this.varient="error"})}}},Ze={class:"d-flex align-center justify-center",style:{height:"100vh"}},et=T("div",{class:"mt-2"},[T("p",{class:"text-body-2"},[x("Don't have an account? "),T("a",{href:"#"},"Sign Up")])],-1);function tt(e,a,o,t,n,l){return N(),pe(De,null,[s(Xe,{color:n.snackbar.color,modelValue:n.snackbar.show,"onUpdate:modelValue":a[0]||(a[0]=r=>n.snackbar.show=r)},{default:f(()=>[x(Be(n.snackbar.message),1)]),_:1},8,["color","modelValue"]),T("div",Ze,[s(Ke,{width:"400",class:"mx-auto"},{default:f(()=>[s(Ae,{class:"elevation-12"},{default:f(()=>[s(ze,{dark:"",color:"primary"},{default:f(()=>[s(Ee,null,{default:f(()=>[x("Login form")]),_:1})]),_:1}),s(Fe,null,{default:f(()=>[n.showAlert?(N(),ce(He,{key:0,color:n.varient,text:n.message},null,8,["color","text"])):Ie("",!0),s(Ge,{"fast-fail":"",onSubmit:Le(l.login,["prevent"])},{default:f(()=>[s(W,{modelValue:n.username,"onUpdate:modelValue":a[1]||(a[1]=r=>n.username=r),name:"username",label:"Username",type:"text",placeholder:"username",required:""},null,8,["modelValue"]),s(W,{modelValue:n.password,"onUpdate:modelValue":a[2]||(a[2]=r=>n.password=r),name:"password",label:"Password",type:"password",placeholder:"password",required:""},null,8,["modelValue"]),s(re,{block:"",type:"submit",class:"fill-width",color:"primary",value:"log in"},{default:f(()=>[x("Login")]),_:1})]),_:1},8,["onSubmit"]),et]),_:1})]),_:1})]),_:1})])],64)}const at=Te(Ye,[["render",tt]]),rt={__name:"LoginPage",setup(e){return(a,o)=>(N(),ce(at))}};export{rt as default};
