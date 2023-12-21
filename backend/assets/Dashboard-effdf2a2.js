import{C as b,A as k,p as y,a as w,P as A}from"./index-2d264455.js";import{_ as v,r as T,o as r,h as c,w as a,a as t,V as u,L as f,b as i,M as o,I as _,d as V,K as C,J as p,G as n,g as s,ab as D,f as x}from"./index-5d579034.js";import{V as j}from"./VRow-a5df2455.js";import{V as h}from"./VCol-2308291c.js";import{V as B}from"./VTable-b5de552d.js";import{V as I}from"./VContainer-e02257f0.js";b.register(k,y,w);const L={components:{Pie:A},data(){return{cards:[{title:"Student Details",cdata:{labels:["Foundation","Diploma","Degree"],datasets:[{backgroundColor:this.$chartColors.p3,data:[]}]},options:{responsive:!0,maintainAspectRatio:!1},loaded:!1},{title:"Course Details",cdata:{labels:["Foundation","Diploma","Degree"],datasets:[{backgroundColor:this.$chartColors.p3,data:[]}]},options:{responsive:!0,maintainAspectRatio:!1},loaded:!1},{title:"Non-Student Details",data:{}}]}},mounted:async function(){let m=sessionStorage.getItem("token");await fetch("/api/v1/stats/general",{method:"GET",headers:{Authorization:`Bearer ${m}`,"Content-Type":"application/json"}}).then(d=>d.json().then(l=>({response:d,data:l}))).then(({response:d,data:l})=>{if(!d.ok)throw new Error(`Error ${d.status}: ${l.msg}`);this.cards[0].cdata.datasets[0].data=[l.students.foundation,l.students.diploma,l.students.degree],this.cards[0].loaded=!0,this.cards[1].cdata.datasets[0].data=[l.courses.foundation,l.courses.diploma,l.courses.degree],this.cards[1].loaded=!0,this.cards[2].data=l.admins}).catch(d=>{console.log(d)})}},N=s("span",{class:"float-left"},"Foundation",-1),E={class:"float-right"},F=s("span",{class:"float-left"},"Diploma",-1),M={class:"float-right"},P=s("span",{class:"float-left"},"Degree",-1),S={class:"float-right"},R=s("span",{class:"float-left"},"Foundation",-1),G={class:"float-right"},z=s("span",{class:"float-left"},"Diploma",-1),J={class:"float-right"},K=s("span",{class:"float-left"},"Degree",-1),q={class:"float-right"},H=s("span",{class:"float-left"},"Admins",-1),O={class:"float-right"},Q=s("span",{class:"float-left"},"Course Team Members",-1),U={class:"float-right"},W=s("span",{class:"float-left"},"IITM Management",-1),X={class:"float-right"};function Y(m,d,l,Z,e,$){const g=T("Pie");return r(),c(I,{"fill-height":"",fluid:"",class:"down-top-padding"},{default:a(()=>[t(j,null,{default:a(()=>[t(h,{cols:"3",lg:"4"},{default:a(()=>[t(u,{elevation:"3"},{default:a(()=>[t(f,null,{default:a(()=>[i(o(e.cards[0].title),1)]),_:1}),t(_),t(V,{class:"d-flex justify-center"},{default:a(()=>[e.cards[0].loaded?(r(),c(g,{key:0,class:"text-center text-justify",data:e.cards[0].cdata,options:e.cards[0].options},null,8,["data","options"])):C("",!0)]),_:1}),t(p,null,{default:a(()=>[t(n,null,{default:a(()=>[N,s("span",E,o(this.cards[0].cdata.datasets[0].data[0]),1)]),_:1}),t(n,null,{default:a(()=>[F,s("span",M,o(this.cards[0].cdata.datasets[0].data[1]),1)]),_:1}),t(n,null,{default:a(()=>[P,s("span",S,o(this.cards[0].cdata.datasets[0].data[2]),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{cols:"3",lg:"4"},{default:a(()=>[t(u,{elevation:"3"},{default:a(()=>[t(f,null,{default:a(()=>[i(o(e.cards[1].title),1)]),_:1}),t(_),t(V,{class:"d-flex justify-center"},{default:a(()=>[e.cards[1].loaded?(r(),c(g,{key:0,class:"text-center text-justify",data:e.cards[1].cdata,options:e.cards[1].options},null,8,["data","options"])):C("",!0)]),_:1}),t(p,null,{default:a(()=>[t(n,null,{default:a(()=>[R,s("span",G,o(this.cards[1].cdata.datasets[0].data[0]),1)]),_:1}),t(n,null,{default:a(()=>[z,s("span",J,o(this.cards[1].cdata.datasets[0].data[1]),1)]),_:1}),t(n,null,{default:a(()=>[K,s("span",q,o(this.cards[1].cdata.datasets[0].data[2]),1)]),_:1})]),_:1}),t(D,null,{default:a(()=>[t(x,{color:"primary",block:"",to:{name:"AdminsCourseList"}},{default:a(()=>[i("View all courses")]),_:1})]),_:1})]),_:1})]),_:1}),t(h,{cols:"3",lg:"4"},{default:a(()=>[t(u,{elevation:"3"},{default:a(()=>[t(f,null,{default:a(()=>[i(o(e.cards[2].title),1)]),_:1}),t(_),t(p,null,{default:a(()=>[t(n,null,{default:a(()=>[H,s("span",O,o(e.cards[2].data.superadmins),1)]),_:1}),t(n,null,{default:a(()=>[Q,s("span",U,o(e.cards[2].data.ctm),1)]),_:1}),t(n,null,{default:a(()=>[W,s("span",X,o(e.cards[2].data.management),1)]),_:1})]),_:1}),t(B),t(D,null,{default:a(()=>[t(x,{color:"primary",block:"",to:{name:"AdminsList"}},{default:a(()=>[i("View all admins")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const nt=v(L,[["render",Y]]);export{nt as default};