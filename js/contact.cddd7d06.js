(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{b8fa:function(t,a,c){"use strict";c.r(a);var e=function(){var t=this,a=t.$createElement,c=t._self._c||a;return c("b-container",[c("b-card",{staticClass:"mb-2",attrs:{tag:"article"}},[c("b-img-lazy",{staticStyle:{"max-width":"10rem"},attrs:{src:t.contact["picture"],alt:"Image",thumbnail:"",fluid:"",rounded:"circle"}}),c("b-card-title",[t._v(t._s(t.contact["vcard:hasName"]))]),c("b-card-sub-title",[c("b-row",[c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{href:"mailto:"+t.contact["vcard:hasURL"]}},[c("b-icon",{attrs:{icon:"envelope-fill",variant:"success"}}),t._v(" "+t._s(t.contact["vcard:hasEmail"])+" ")],1),c("b-button",{staticClass:"col p-3 button",staticStyle:{"text-align":"center"},attrs:{href:t.contact["vcard:hasURL"],target:"_blank"}},[c("b-icon",{attrs:{icon:"link"}}),t._v(" "+t._s(t.contact["vcard:hasURL"])+" ")],1),c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{href:"tel:"+t.contact["vcard:hasTelephone"]}},[c("b-icon",{attrs:{icon:"telephone-fill"}}),t._v(" "+t._s(t.contact["vcard:hasTelephone"])+" ")],1),c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{href:"sms:"+t.contact["vcard:hasTelephone"]}},[c("b-icon",{attrs:{icon:"chat-left-fill"}}),t._v(" "+t._s(t.contact["vcard:hasTelephone"])+" ")],1)],1)],1),c("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. ")]),c("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Go somewhere")])],1),t._v(" "+t._s(t.contact)+" "),c("div",{staticStyle:{position:"fixed",bottom:"0px",left:"0px",width:"100%",color:"#fff",background:"#000"},attrs:{id:"toolbar"}},[c("b-row",[c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"}},[c("b-icon",{attrs:{icon:"share"}}),t._v(" QR Code ")],1),c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},on:{click:t.modify}},[c("b-icon",{attrs:{icon:"pencil-fill"}}),t._v(" Modify ")],1),c("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"}},[c("b-icon",{attrs:{icon:"share-fill"}}),t._v(" Share ")],1)],1)],1)],1)},n=[],o={name:"Conatct",props:["contact"],methods:{modify:function(){this.$router.push({name:"EditContact",params:{vcard:this.contact}})}}},s=o,i=c("2877"),l=Object(i["a"])(s,e,n,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=contact.cddd7d06.js.map