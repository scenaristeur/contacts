(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59d5d60e"],{"5ef9":function(t,e,i){},8170:function(t,e,i){"use strict";i("5ef9")},ca01:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-item"},[i("form",{staticClass:"mb-3",attrs:{action:"#",method:"post"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}}},[i("b-form-input",{attrs:{placeholder:"Choose a Ldp server"},on:{submit:function(e){return e.preventDefault(),t.submitForm(e)}},model:{value:t.itemLabel,callback:function(e){t.itemLabel=e},expression:"itemLabel"}})],1)])},s=[],o=i("2f62"),r={name:"LdpServer",data:function(){return{itemLabel:""}},methods:{submitForm:function(){this.itemLabel&&(this.$store.commit("ldp_store/setServer",{url:this.itemLabel}),this.itemLabel="")}},watch:{storage:function(){this.itemLabel=this.storage}},computed:Object(o["b"])({storage:function(t){return t.solid.storage}})},a=r,u=(i("8170"),i("2877")),c=Object(u["a"])(a,n,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-59d5d60e.f2a21409.js.map