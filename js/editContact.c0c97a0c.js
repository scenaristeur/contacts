(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["editContact"],{7465:function(a,e,t){"use strict";t.r(e);var c=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-container",[t("div",{staticClass:"add-item"},[t("h4",[a._v("Main fields ")]),void 0!=a.vcard["vcard:hasPhoto"]?t("b-img-lazy",{staticStyle:{"max-width":"10rem"},attrs:{src:a.vcard["vcard:hasPhoto"],alt:"Image",thumbnail:"",fluid:"",rounded:"circle"}}):t("b-img-lazy",{staticStyle:{"max-width":"10rem"},attrs:{src:"https://image.flaticon.com/icons/svg/149/149992.svg",alt:"Image",thumbnail:"",fluid:"",rounded:"circle"}}),t("b-form-file",{ref:"fileInput",staticStyle:{display:"none"},attrs:{accept:"image/*"},model:{value:a.file,callback:function(e){a.file=e},expression:"file"}}),t("b-icon",{staticClass:"h1 rounded-circle bg-info p-1",attrs:{icon:"camera-fill",variant:"dark",type:"button"},on:{click:function(e){return a.$refs.fileInput.$el.childNodes[0].click()}}}),t("b-form-input",{attrs:{placeholder:"vcard:given-name"},on:{input:a.updateName},model:{value:a.vcard["vcard:given-name"],callback:function(e){a.$set(a.vcard,"vcard:given-name",e)},expression:"vcard['vcard:given-name']"}}),t("b-form-input",{attrs:{placeholder:"vcard:family-name"},on:{input:a.updateName},model:{value:a.vcard["vcard:family-name"],callback:function(e){a.$set(a.vcard,"vcard:family-name",e)},expression:"vcard['vcard:family-name']"}}),t("b-form-input",{attrs:{placeholder:"vcard:hasName"},model:{value:a.vcard["vcard:hasName"],callback:function(e){a.$set(a.vcard,"vcard:hasName",e)},expression:"vcard['vcard:hasName']"}}),t("b-form-input",{attrs:{placeholder:"vcard:hasEmail"},model:{value:a.vcard["vcard:hasEmail"],callback:function(e){a.$set(a.vcard,"vcard:hasEmail",e)},expression:"vcard['vcard:hasEmail']"}}),t("b-form-input",{attrs:{placeholder:"vcard:hasURL"},model:{value:a.vcard["vcard:hasURL"],callback:function(e){a.$set(a.vcard,"vcard:hasURL",e)},expression:"vcard['vcard:hasURL']"}}),t("b-form-input",{attrs:{placeholder:"vcard:hasTelephone"},model:{value:a.vcard["vcard:hasTelephone"],callback:function(e){a.$set(a.vcard,"vcard:hasTelephone",e)},expression:"vcard['vcard:hasTelephone']"}}),t("hr"),t("h6",[a._v("All fields")]),a._l(Object.entries(a.vcard),(function(e,c){var r=e[0];e[1];return t("div",{key:c},[a._v(" "+a._s(r)+": "),"jsonld"!=r&&"basic_fields"!=r?t("b-form-input",{attrs:{placeholder:r},model:{value:a.vcard[r],callback:function(e){a.$set(a.vcard,r,e)},expression:"vcard[key]"}}):a._e()],1)}))],2),t("br"),t("br"),t("br"),t("br"),t("div",{staticStyle:{position:"fixed",bottom:"0px",left:"0px",width:"100%",color:"#fff",background:"#000"},attrs:{id:"toolbar"}},[t("b-row",[t("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{variant:"outline-light"},on:{click:a.cancel}},[t("b-icon",{attrs:{icon:"close"}}),a._v(" Cancel ")],1),t("b-button",{staticClass:"col p-3",staticStyle:{"text-align":"center"},attrs:{variant:"outline-light"},on:{click:a.save}},[t("b-icon",{attrs:{icon:"ok"}}),a._v(" Save ")],1)],1)],1)])},r=[],n=(t("b0c0"),t("96cf"),t("1da1")),i=t("2f62"),o=t("00e8"),l=t.n(o),s=t("7fed"),d=t.n(s),v=new d.a(l.a),u={name:"EditContact",props:["vcard"],data:function(){return{file:null}},created:function(){console.log("route",this.$route)},methods:{cancel:function(){this.$router.go(-1)},save:function(){this.$store.dispatch("contacts/add",this.vcard),this.$router.push({name:"Contact",params:{contact:this.vcard}})},updateName:function(){console.log("update");var a=this.vcard["vcard:given-name"]||"",e=this.vcard["vcard:family-name"]||"";this.vcard["vcard:hasName"]=a+" "+e}},watch:{$route:function(a,e){console.log("from",e),console.log("to",a)},file:function(a){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=e.storage+"contacts-pics/",r=a.webkitRelativePath.length>0?c+a.webkitRelativePath:c+a.name,console.log(r,a,a.type),t.next=5,v.createFile(r,a,a.type);case 5:e.vcard["vcard:hasPhoto"]=r;case 6:case"end":return t.stop()}}),t)})))()}},computed:Object(i["b"])({storage:function(a){return a.solid.storage}})},m=u,h=t("2877"),f=Object(h["a"])(m,c,r,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=editContact.c0c97a0c.js.map