import{_,o as c,e as T,w as i,a as t,b as o,a9 as b,V as n,L as w,a1 as h,a7 as f,a0 as x,$ as p,a2 as v,ad as g,c as C,a6 as D,a5 as E,d as k}from"./index-363aa5c7.js";import{V as I}from"./VContainer-9791081e.js";import{V as j,a as V,b as $}from"./VDialog-0d180c25.js";import{a as A,V as B}from"./VToolbar-1ccd7a4d.js";import{V as u}from"./VSpacer-d61a15f8.js";import{V as y}from"./VRow-83dfdd24.js";import{b as z}from"./VTextField-88d9b4a4.js";/* empty css              */import"./VList-eee4a057.js";import"./ssrBoot-e874f482.js";import"./scopeId-c1697853.js";const O={data:()=>({groupBy:[{key:"level"}],all_emails:[],search:"",courses:[],dialog:!1,dialogDelete:!1,headers:[{title:"Course Code",align:"start",key:"id"},{title:"Name",key:"name"},{title:"Difficulty Rating",key:"difficulty_rating"},{title:"Instructors",key:"instructors"},{title:"Actions",key:"actions",sortable:!1}],editedIndex:-1,editedItem:{name:"",instructors:[]},defaultItem:{name:"",instructors:[]}}),computed:{formTitle(){return this.editedIndex===-1?"Add Course":"Edit Course"},editMode(){return this.editedIndex!==-1}},watch:{dialog(a){a||this.close()},dialogDelete(a){a||this.closeDelete()}},created(){this.initialize()},methods:{initialize:async function(){let a=sessionStorage.getItem("token");await fetch("/api/v1/courses/all",{method:"GET",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}}).then(e=>e.json().then(s=>({response:e,data:s}))).then(({response:e,data:s})=>{if(!e.ok)throw new Error(`Error ${e.status}: ${s.msg}`);this.courses=s}).catch(e=>{console.log(e)}),await fetch("/api/v1/admin",{method:"GET",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}}).then(e=>e.json().then(s=>({response:e,data:s}))).then(({response:e,data:s})=>{if(!e.ok)throw new Error(`Error ${e.status}: ${s.msg}`);for(var d in s)s[d].role=="ctm"&&this.all_emails.push({email:s[d].email,name:s[d].name,role:s[d].role,created_at:s[d].created_at})}).catch(e=>{console.log(e)})},editItem(a){this.editedIndex=this.courses.indexOf(a),this.editedItem=Object.assign({},a),this.dialog=!0},deleteItem(a){this.editedIndex=this.courses.indexOf(a),this.editedItem=Object.assign({},a),this.dialogDelete=!0},deleteItemConfirm:async function(){this.closeDelete();let a=sessionStorage.getItem("token");await fetch("/api/v1/courses/"+this.courses[this.editedIndex].id,{method:"DELETE",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"}}).then(e=>e.json().then(s=>({response:e,data:s}))).then(({response:e,data:s})=>{if(!e.ok)throw new Error(`Error ${e.status}: ${s.msg}`);this.courses.splice(this.editedIndex,1)}).catch(e=>{e.message.includes("Token has expired"),console.log(e)})},close(){this.dialog=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},closeDelete(){this.dialogDelete=!1,this.$nextTick(()=>{this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1})},save:async function(){let a=sessionStorage.getItem("token");await fetch("/api/v1/courses/"+this.editedItem.id,{method:"PATCH",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({name:this.editedItem.name,instructors:this.editedItem.instructors})}).then(e=>e.json().then(s=>({response:e,data:s}))).then(({response:e,data:s})=>{if(!e.ok)throw new Error(`Error ${e.status}: ${s.msg}`);Object.assign(this.courses[this.editedIndex],this.editedItem)}).catch(e=>{console.log(e)}),this.close()}}},S={class:"text-h5"},N={class:"mt-2"};function U(a,e,s,d,L,r){return c(),T(I,null,{default:i(()=>[t(h,{elevation:"2"},{default:i(()=>[t(j,{headers:a.headers,items:a.courses,"group-by":a.groupBy,"items-per-page":"25"},{top:i(()=>[t(A,{flat:""},{default:i(()=>[t(B,null,{default:i(()=>[o("Courses")]),_:1}),t(b,{class:"mx-4",inset:"",vertical:""}),t(u),t(V,{modelValue:a.dialog,"onUpdate:modelValue":e[2]||(e[2]=l=>a.dialog=l),"max-width":"500px"},{activator:i(({props:l})=>[t(n,w({color:"primary",dark:"",class:"mb-2"},l),{default:i(()=>[o(" Add Course ")]),_:2},1040)]),default:i(()=>[t(h,null,{default:i(()=>[t(f,null,{default:i(()=>[x("span",S,p(r.formTitle),1)]),_:1}),t(v,null,{default:i(()=>[t(I,null,{default:i(()=>[t(y,null,{default:i(()=>[t(z,{modelValue:a.editedItem.name,"onUpdate:modelValue":e[0]||(e[0]=l=>a.editedItem.name=l),label:"Course Name"},null,8,["modelValue"])]),_:1}),t(y,null,{default:i(()=>[t($,{modelValue:a.editedItem.instructors,"onUpdate:modelValue":e[1]||(e[1]=l=>a.editedItem.instructors=l),label:"Course Team Members",items:a.all_emails,"item-title":"email",multiple:"","return-object":""},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(g,null,{default:i(()=>[t(u),t(n,{color:"secondary",variant:"text",onClick:r.close},{default:i(()=>[o(" Cancel ")]),_:1},8,["onClick"]),t(n,{color:"primary",variant:"text",onClick:r.save},{default:i(()=>[o(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{modelValue:a.dialogDelete,"onUpdate:modelValue":e[3]||(e[3]=l=>a.dialogDelete=l),"max-width":"500px"},{default:i(()=>[t(h,null,{default:i(()=>[t(f,{class:"text-center"},{default:i(()=>[o("Are you sure you want to delete this item?")]),_:1}),t(g,null,{default:i(()=>[t(u),t(n,{color:"primary",onClick:r.closeDelete},{default:i(()=>[o("Cancel")]),_:1},8,["onClick"]),t(n,{color:"red",onClick:r.deleteItemConfirm},{default:i(()=>[o("OK")]),_:1},8,["onClick"]),t(u)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.instructors":i(({item:l})=>[(c(!0),C(E,null,D(l.instructors,m=>(c(),C("p",N,p(m.name),1))),256))]),"item.actions":i(({item:l})=>[t(k,{size:"small",class:"me-2",onClick:m=>r.editItem(l)},{default:i(()=>[o(" mdi-pencil ")]),_:2},1032,["onClick"]),t(k,{size:"small",onClick:m=>r.deleteItem(l)},{default:i(()=>[o(" mdi-delete ")]),_:2},1032,["onClick"])]),"no-data":i(()=>[t(n,{color:"primary",onClick:r.initialize},{default:i(()=>[o(" Reset ")]),_:1},8,["onClick"])]),_:1},8,["headers","items","group-by"])]),_:1})]),_:1})}const X=_(O,[["render",U]]);export{X as default};
