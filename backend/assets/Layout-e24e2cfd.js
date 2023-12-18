import{_ as V,r as h,o as a,c as _,a as e,w as t,a9 as g,e as l,a5 as f,a6 as C,b as p,$ as v,a3 as k,V as b,d as I}from"./index-363aa5c7.js";import{V as m,a as c,b as y}from"./VList-eee4a057.js";import{V as D,a as T}from"./VNavigationDrawer-3cc7ee56.js";import{V as x,a as L}from"./VToolbar-1ccd7a4d.js";import{V as S}from"./VSpacer-d61a15f8.js";import{V as B,a as A}from"./VApp-9392548f.js";import"./ssrBoot-e874f482.js";import"./scopeId-c1697853.js";/* empty css              */const N={data(){return{showDropdown:!1,user:sessionStorage.getItem("name"),email:sessionStorage.getItem("email"),courseList:[{code:"CS101",name:"Introduction to Computer Science",description:"An introductory course covering fundamental concepts in computer science.",difficulty_rating:4.5,level:"foundation",dp_or_ds:"both",credits:3},{code:"MATH201",name:"Calculus II",description:"A continuation of Calculus I, focusing on advanced calculus topics.",difficulty_rating:5,level:"degree",dp_or_ds:"both",credits:4}]}},created(){this.initialize()},methods:{initialize:async function(){try{let r=sessionStorage.getItem("token");const o=await fetch("/api/v1/courses/all",{method:"GET",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"}});if(!o.ok)throw new Error(`Error ${o.status}: ${o.statusText}`);const n=await o.json();this.courseList=n.filter(i=>i.instructors.map(u=>u.email).includes(sessionStorage.getItem("email")))}catch(r){console.log(r)}},showCoursesDropdown(){this.showDropdown=!this.showDropdown}}};function $(r,o,n,i,s,u){const w=h("router-link");return a(),_(f,null,[e(D,{color:"primary"},{default:t(()=>[e(m,null,{default:t(()=>[e(c,{"prepend-avatar":"https://randomuser.me/api/portraits/women/85.jpg",title:s.user,subtitle:s.email},null,8,["title","subtitle"])]),_:1}),e(g),e(m,{nav:""},{default:t(()=>[e(c,{"prepend-icon":"mdi-home",title:"Dashboard",value:"dashboard",to:{name:"CourseTeamDashboard"}}),e(c,{"prepend-icon":"mdi-book-open-blank-variant",title:"Courses",value:"courses",onClick:u.showCoursesDropdown},null,8,["onClick"]),s.showDropdown?(a(),l(m,{key:0},{default:t(()=>[(a(!0),_(f,null,C(s.courseList,d=>(a(),l(w,{key:d.id,to:{name:"CourseFeedback",params:{courseId:d.code}}},{default:t(()=>[e(c,null,{default:t(()=>[e(y,null,{default:t(()=>[p(v(d.name),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:1})):k("",!0)]),_:1})]),_:1}),e(L,{color:"secondary"},{default:t(()=>[e(T),e(x,null,{default:t(()=>[p("Course Compass")]),_:1}),e(S),e(b,{icon:"",to:{name:"Logout"}},{default:t(()=>[e(I,null,{default:t(()=>[p("mdi-export")]),_:1})]),_:1})]),_:1})],64)}const E=V(N,[["render",$]]),j={__name:"View",setup(r){return(o,n)=>{const i=h("router-view");return a(),l(B,null,{default:t(()=>[e(i)]),_:1})}}},P={__name:"Layout",setup(r){return(o,n)=>(a(),l(A,null,{default:t(()=>[e(E),e(j)]),_:1}))}};export{P as default};
