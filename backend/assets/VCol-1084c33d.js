import"./VContainer-cade46d0.js";import{aV as a,aW as f,p as y,q as S,y as C,A as k,Q as N,aX as h}from"./index-9925a73e.js";const i=(()=>a.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),d=(()=>a.reduce((e,s)=>{const t="offset"+f(s);return e[t]={type:[String,Number],default:null},e},{}))(),m=(()=>a.reduce((e,s)=>{const t="order"+f(s);return e[t]={type:[String,Number],default:null},e},{}))(),u={col:Object.keys(i),offset:Object.keys(d),order:Object.keys(m)};function V(e,s,t){let o=e;if(!(t==null||t===!1)){if(s){const r=s.replace(e,"");o+=`-${r}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const L=["auto","start","end","center","baseline","stretch"],P=y({cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...d,order:{type:[String,Number],default:null},...m,alignSelf:{type:String,default:null,validator:e=>L.includes(e)},...S(),...C()},"VCol"),v=k()({name:"VCol",props:P(),setup(e,s){let{slots:t}=s;const o=N(()=>{const r=[];let l;for(l in u)u[l].forEach(n=>{const g=e[n],c=V(l,n,g);c&&r.push(c)});const b=r.some(n=>n.startsWith("v-col-"));return r.push({"v-col":!b||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return h(e.tag,{class:[o.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});export{v as V};
