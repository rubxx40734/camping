(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c0285ee"],{"380d":function(t,e,c){},"6ff1":function(t,e,c){"use strict";var l=c("7a23");const o={class:"modal",tabindex:"-1",ref:"delModal"},a={class:"modal-dialog"},s={class:"modal-content"},d=Object(l["h"])("div",{class:"modal-header"},[Object(l["h"])("h5",{class:"modal-title"},"刪除產品"),Object(l["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),i={class:"modal-body"},r={class:"text-danger"},n={class:"modal-footer"},b=Object(l["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function u(t,e,c,u,h,p){return Object(l["y"])(),Object(l["g"])("div",o,[Object(l["h"])("div",a,[Object(l["h"])("div",s,[d,Object(l["h"])("div",i,[Object(l["h"])("p",null,[Object(l["j"])("確定要刪除 "),Object(l["h"])("span",r,Object(l["I"])(c.product.title),1),Object(l["j"])(" 嗎?")])]),Object(l["h"])("div",n,[b,Object(l["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...t)=>p.checkDel&&p.checkDel(...t))},"Save changes")])])])],512)}var h=c("7c2b"),p=c.n(h),m={data(){return{modal:{}}},props:["product"],methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},checkDel(){this.$emit("delete-product",this.product.id)}},mounted(){this.modal=new p.a(this.$refs.delModal)}},j=c("6b0d"),O=c.n(j);const f=O()(m,[["render",u]]);e["a"]=f},"9d12":function(t,e,c){"use strict";c("380d")},e6dc:function(t,e,c){"use strict";c.r(e);var l=c("7a23");const o=Object(l["h"])("div",{class:"loadingio-spinner-spinner-a5v3i0pye0a"},[Object(l["h"])("div",{class:"ldio-ifotaor80h"},[Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div"),Object(l["h"])("div")])],-1),a={class:"text-end mt-3"},s={class:"table mt-4"},d=Object(l["h"])("thead",null,[Object(l["h"])("tr",null,[Object(l["h"])("th",{width:"120"},"分類"),Object(l["h"])("th",null,"產品名稱"),Object(l["h"])("th",{width:"120"},"原價"),Object(l["h"])("th",{width:"120"},"售價"),Object(l["h"])("th",{width:"100"},"是否啟用"),Object(l["h"])("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},r={class:"text-right"},n={key:0,class:"text-success"},b={key:1,class:"text-secondary"},u={class:"btn-group"},h=["onClick"],p=["onClick"];function m(t,e,c,m,j,O){const f=Object(l["F"])("Loading"),g=Object(l["F"])("ProductModal"),v=Object(l["F"])("DelModal"),y=Object(l["F"])("Pagination");return Object(l["y"])(),Object(l["g"])(l["a"],null,[Object(l["k"])(f,{active:j.isLoading},{default:Object(l["R"])(()=>[o]),_:1},8,["active"]),Object(l["h"])("div",a,[Object(l["h"])("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=t=>O.openModal(!0))},"新增品項")]),Object(l["h"])("table",s,[d,Object(l["h"])("tbody",null,[(Object(l["y"])(!0),Object(l["g"])(l["a"],null,Object(l["D"])(j.products,e=>(Object(l["y"])(),Object(l["g"])("tr",{key:e.id},[Object(l["h"])("td",null,Object(l["I"])(e.category),1),Object(l["h"])("td",null,Object(l["I"])(e.title),1),Object(l["h"])("td",i,Object(l["I"])(t.$filter.currency(e.origin_price)),1),Object(l["h"])("td",r,Object(l["I"])(t.$filter.currency(e.price)),1),Object(l["h"])("td",null,[e.is_enabled?(Object(l["y"])(),Object(l["g"])("span",n,"啟用")):(Object(l["y"])(),Object(l["g"])("span",b,"未啟用"))]),Object(l["h"])("td",null,[Object(l["h"])("div",u,[Object(l["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>O.openModal(!1,e)},"編輯",8,h),Object(l["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>O.openDelModal(e)},"刪除",8,p)])])]))),128))])]),Object(l["k"])(g,{ref:"productmodal",onUpdateProduct:O.updateProduct,product:j.tempProduct},null,8,["onUpdateProduct","product"]),Object(l["k"])(v,{ref:"delmodal",product:j.tempProduct,onDeleteProduct:O.deleteProduct},null,8,["product","onDeleteProduct"]),Object(l["k"])(y,{page:j.pagination,class:"align-self-center w-50 mt-4",onChangePage:O.getproducts},null,8,["page","onChangePage"])],64)}const j={class:"modal fade",id:"exampleModal",tabindex:"-1",ref:"modal","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},O={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},g=Object(l["h"])("div",{class:"modal-header bg-dark text-white"},[Object(l["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(l["h"])("span",null,"新增產品")]),Object(l["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},y={class:"row"},P={class:"col-sm-4"},x={class:"mb-3 input-group"},M={class:"mb-3"},U=Object(l["h"])("label",{for:"customFile",class:"form-label"},[Object(l["j"])("或 上傳圖片 "),Object(l["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),w=["src"],k={class:"mt-5 border"},C={class:"mb-3 input-group"},S={class:"mt-2"},V=["onClick"],D=["src"],I={class:"col-sm-8"},L={class:"mb-3"},$=Object(l["h"])("label",{for:"title",class:"form-label"},"標題",-1),_={class:"row gx-2"},R={class:"mb-3 col-md-6"},F=Object(l["h"])("label",{for:"category",class:"form-label"},"分類",-1),N={class:"mb-3 col-md-6"},J=Object(l["h"])("label",{for:"price",class:"form-label"},"單位",-1),q={class:"row gx-2"},z={class:"mb-3 col-md-6"},A=Object(l["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),B={class:"mb-3 col-md-6"},E=Object(l["h"])("label",{for:"price",class:"form-label"},"售價",-1),G=Object(l["h"])("hr",null,null,-1),H={class:"mb-3"},K=Object(l["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),Q={class:"mb-3"},T=Object(l["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),W={class:"mb-3"},X=Object(l["h"])("label",{for:"content",class:"form-label"},"規格1",-1),Y={class:"mb-3"},Z=Object(l["h"])("label",{for:"content",class:"form-label"},"規格2",-1),tt={class:"mb-3"},et=Object(l["h"])("label",{for:"content",class:"form-label"},"規格3",-1),ct={class:"mb-3"},lt=Object(l["h"])("label",{for:"content",class:"form-label"},"規格4",-1),ot={class:"mb-3"},at=Object(l["h"])("label",{for:"content",class:"form-label"},"規格5",-1),st={class:"mb-3"},dt={class:"form-check"},it=Object(l["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),rt={class:"modal-footer"},nt=Object(l["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function bt(t,e,c,o,a,s){return Object(l["y"])(),Object(l["g"])("div",j,[Object(l["h"])("div",O,[Object(l["h"])("div",f,[g,Object(l["h"])("div",v,[Object(l["h"])("div",y,[Object(l["h"])("div",P,[Object(l["h"])("div",x,[Object(l["S"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>a.tempProduct.imageUrl=t)},null,512),[[l["M"],a.tempProduct.imageUrl]]),Object(l["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:e[1]||(e[1]=(...t)=>s.deleteImageUrl&&s.deleteImageUrl(...t))}," 移除 ")]),Object(l["h"])("div",M,[U,Object(l["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[2]||(e[2]=(...t)=>s.fileUpload&&s.fileUpload(...t))},null,544)]),Object(l["h"])("img",{src:a.tempProduct.imageUrl,class:"img-fluid rounded mx-auto d-block",alt:""},null,8,w),Object(l["h"])("div",k,[Object(l["h"])("div",C,[Object(l["h"])("div",S,[Object(l["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"filesInput",onChange:e[3]||(e[3]=(...t)=>s.filesUpload&&s.filesUpload(...t))},null,544),(Object(l["y"])(!0),Object(l["g"])(l["a"],null,Object(l["D"])(a.tempProduct.imagesUrl,(t,e)=>(Object(l["y"])(),Object(l["g"])("div",{key:e,class:"mb-3"},[Object(l["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.deleteManyimg(e)}," 移除 ",8,V),Object(l["h"])("img",{src:t,class:"img-fluid rounded mx-auto d-block",alt:""},null,8,D)]))),128))])])])]),Object(l["h"])("div",I,[Object(l["h"])("div",L,[$,Object(l["S"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[4]||(e[4]=t=>a.tempProduct.title=t)},null,512),[[l["M"],a.tempProduct.title]])]),Object(l["h"])("div",_,[Object(l["h"])("div",R,[F,Object(l["S"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[5]||(e[5]=t=>a.tempProduct.category=t)},null,512),[[l["M"],a.tempProduct.category]])]),Object(l["h"])("div",N,[J,Object(l["S"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[6]||(e[6]=t=>a.tempProduct.unit=t)},null,512),[[l["M"],a.tempProduct.unit]])])]),Object(l["h"])("div",q,[Object(l["h"])("div",z,[A,Object(l["S"])(Object(l["h"])("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[7]||(e[7]=t=>a.tempProduct.origin_price=t)},null,512),[[l["M"],a.tempProduct.origin_price]])]),Object(l["h"])("div",B,[E,Object(l["S"])(Object(l["h"])("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[8]||(e[8]=t=>a.tempProduct.price=t)},null,512),[[l["M"],a.tempProduct.price]])])]),G,Object(l["h"])("div",H,[K,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[9]||(e[9]=t=>a.tempProduct.description=t)},null,512),[[l["M"],a.tempProduct.description]])]),Object(l["h"])("div",Q,[T,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[10]||(e[10]=t=>a.tempProduct.content=t)},null,512),[[l["M"],a.tempProduct.content]])]),Object(l["h"])("div",W,[X,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"rule1",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[11]||(e[11]=t=>a.tempProduct.productRule1=t)},null,512),[[l["M"],a.tempProduct.productRule1]])]),Object(l["h"])("div",Y,[Z,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"rule2",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[12]||(e[12]=t=>a.tempProduct.productRule2=t)},null,512),[[l["M"],a.tempProduct.productRule2]])]),Object(l["h"])("div",tt,[et,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"rule3",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[13]||(e[13]=t=>a.tempProduct.productRule3=t)},null,512),[[l["M"],a.tempProduct.productRule3]])]),Object(l["h"])("div",ct,[lt,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"rule4",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[14]||(e[14]=t=>a.tempProduct.productRule4=t)},null,512),[[l["M"],a.tempProduct.productRule4]])]),Object(l["h"])("div",ot,[at,Object(l["S"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"rule5",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[15]||(e[15]=t=>a.tempProduct.productRule5=t)},null,512),[[l["M"],a.tempProduct.productRule5]])]),Object(l["h"])("div",st,[Object(l["h"])("div",dt,[Object(l["S"])(Object(l["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[16]||(e[16]=t=>a.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[l["L"],a.tempProduct.is_enabled]]),it])])])])]),Object(l["h"])("div",rt,[nt,Object(l["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[17]||(e[17]=(...t)=>s.addProduct&&s.addProduct(...t))},"確認")])])])],512)}c("14d9");var ut=c("7c2b"),ht=c.n(ut),pt={data(){return{modal:{},tempProduct:{}}},props:["product"],watch:{product(){this.tempProduct=this.product}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},addProduct(){this.$emit("update-product",this.tempProduct)},async fileUpload(){const t="https://vue3-course-api.hexschool.io/api/rhea0309/admin/upload",e=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",e);const l=await this.axios.post(t,c);l.data.success&&(this.tempProduct.imageUrl=l.data.imageUrl),console.log(l)},async deleteImageUrl(){this.tempProduct.imageUrl="",this.addProduct()},async filesUpload(){const t="https://vue3-course-api.hexschool.io/api/rhea0309/admin/upload",e=this.$refs.filesInput.files[0],c=new FormData;c.append("file-to-upload",e);const l=await this.axios.post(t,c);this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imagesUrl.push(l.data.imageUrl)},async deleteManyimg(t){console.log(t),this.tempProduct.imagesUrl.splice(t,1)}},mounted(){this.modal=new ht.a(this.$refs.modal)}},mt=c("6b0d"),jt=c.n(mt);const Ot=jt()(pt,[["render",bt]]);var ft=Ot,gt=c("6ff1"),vt=c("1799"),yt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},inject:["emitter"],components:{ProductModal:ft,DelModal:gt["a"],Pagination:vt["a"]},methods:{openModal(t,e){console.log(t,e),this.tempProduct=t?{}:{...e},this.isNew=t,this.$refs.productmodal.showModal()},async getproducts(t=1){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/rhea0309/admin/products/?page="+t,c=await this.axios.get(e);this.isLoading=!1,this.products=c.data.products,this.pagination=c.data.pagination,console.log(c)},async updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/rhea0309/admin/product",c="post";this.isNew||(e="https://vue3-course-api.hexschool.io/api/rhea0309/admin/product/"+t.id,c="put"),this.isLoading=!0;const l=await this.axios[c](e,{data:this.tempProduct});l.data.success?this.emitter.emit("sendMessage",{style:"success",title:"更新成功"}):this.emitter.emit("sendMessage",{style:"danger",title:"更新失敗",content:l.data.message.join("、")}),this.isLoading=!1,this.$refs.productmodal.hideModal(),this.getproducts(this.pagination.current_page)},async openDelModal(t){this.tempProduct={...t},this.$refs.delmodal.showModal()},async deleteProduct(t){const e="https://vue3-course-api.hexschool.io/api/rhea0309/admin/product/"+t;this.$refs.delmodal.hideModal(),this.isLoading=!0;const c=await this.axios.delete(e);this.isLoading=!1,console.log(c),this.getproducts()}},mounted(){this.getproducts()}};c("9d12");const Pt=jt()(yt,[["render",m]]);e["default"]=Pt}}]);
//# sourceMappingURL=chunk-3c0285ee.3c507f7b.js.map