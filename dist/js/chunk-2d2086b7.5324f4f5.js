(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(s,e,t){"use strict";t.r(e);var a=t("7a23");const n={class:"container mt-5"},o={class:"col-md-6"},r=Object(a["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),c={class:"mb-2"},i=Object(a["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),d={class:"mb-2"},l=Object(a["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),u=Object(a["h"])("div",{class:"text-end mt-4"},[Object(a["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function b(s,e,t,b,p,h){return Object(a["y"])(),Object(a["g"])("div",n,[Object(a["h"])("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=Object(a["T"])((...s)=>h.signIn&&h.signIn(...s),["prevent"]))},[Object(a["h"])("div",o,[r,Object(a["h"])("div",c,[i,Object(a["S"])(Object(a["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>p.user.username=s)},null,512),[[a["M"],p.user.username]])]),Object(a["h"])("div",d,[l,Object(a["S"])(Object(a["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>p.user.password=s)},null,512),[[a["M"],p.user.password]])]),u])],32)])}t("14d9");var p={data(){return{user:{username:"",password:""}}},methods:{async signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin",e=await this.axios.post(s,this.user);if(e.data.success){const{token:s,expired:t}=e.data;document.cookie=`hexToken=${s}; expires=${new Date(t)}`,this.$router.push("/dashboard/products")}}},mounted(){}},h=t("6b0d"),m=t.n(h);const w=m()(p,[["render",b]]);e["default"]=w}}]);
//# sourceMappingURL=chunk-2d2086b7.5324f4f5.js.map