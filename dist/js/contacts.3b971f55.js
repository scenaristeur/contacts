(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contacts"],{"94ef":function(t,c,a){"use strict";a("d998")},c141:function(t,c,a){"use strict";a.d(c,"a",(function(){return s}));var n=a("d4ec"),s=function t(){Object(n["a"])(this,t),this.jsonld={"@context":{as:"https://www.w3.org/ns/activitystreams",schema:"http://schema.org/"},"@id":null,"@type":"Thing","schema:name":"__NEW__THING__"}}},c93c:function(t,c,a){"use strict";a.r(c);var n=function(){var t=this,c=t.$createElement,a=t._self._c||c;return a("b-container",[a("b-list-group",t._l(t.contacts,(function(c){return a("b-list-group-item",{key:c["@id"],staticClass:"text-dark",attrs:{variant:"light",button:""},on:{click:function(a){return t.open(c)}}},[void 0!=c["vcard:hasPhoto"]?a("b-img",{staticStyle:{"max-width":"2rem"},attrs:{src:c["vcard:hasPhoto"],alt:"Image",fluid:"",rounded:"circle"}}):a("b-img",{staticStyle:{"max-width":"2rem"},attrs:{src:"https://image.flaticon.com/icons/svg/149/149992.svg",alt:"Image",fluid:"",rounded:"circle"}}),t._v(" "+t._s(c["vcard:hasName"])+" ")],1)})),1),a("b-iconstack",{staticClass:"floating-action-button",attrs:{"font-scale":"4",type:"button"},on:{click:t.editContact}},[a("b-icon",{attrs:{stacked:"",icon:"circle-fill",variant:"primary"}}),a("b-icon",{attrs:{stacked:"",icon:"plus",scale:"0.5",variant:"white"}}),a("b-icon",{attrs:{stacked:"",icon:"circle",variant:"secondary"}})],1)],1)},s=[],i=a("d72f"),e=a("2f62"),o={name:"Contacts",components:{},data:function(){return{vcard:{}}},created:function(){this.$store.dispatch("contacts/findAll")},methods:{editContact:function(){this.vcard=new i["a"],console.log("vcard",this.vcard),this.$router.push({name:"EditContact",params:{vcard:this.vcard}})},open:function(t){console.log(t),this.$router.push({name:"Contact",params:{contact:t}})}},watch:{storage:function(){this.$store.dispatch("contacts/findAll")},contacts:function(){}},computed:Object(e["b"])({contacts:function(t){return t.contacts.contacts},storage:function(t){return t.solid.storage}})},r=o,d=(a("94ef"),a("2877")),u=Object(d["a"])(r,n,s,!1,null,null,null);c["default"]=u.exports},d72f:function(t,c,a){"use strict";a.d(c,"a",(function(){return d}));var n=a("d4ec"),s=a("257e"),i=a("262e"),e=a("2caf"),o=a("c141"),r={"@id":null,"vcard:hasName":"","@type":"vcard:VCard","vcard:given-name":"","vcard:family-name":"","vcard:hasPhoto":"https://image.flaticon.com/icons/svg/149/149992.svg"},d=function(t){Object(i["a"])(a,t);var c=Object(e["a"])(a);function a(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return Object(n["a"])(this,a),t=c.call(this),Object.assign(Object(s["a"])(t),i),t}return a}(o["a"])},d998:function(t,c,a){}}]);
//# sourceMappingURL=contacts.3b971f55.js.map