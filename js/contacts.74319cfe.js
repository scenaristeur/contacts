(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contacts"],{"94ef":function(t,n,c){"use strict";c("d998")},c141:function(t,n,c){"use strict";c.d(n,"a",(function(){return s}));var a=c("d4ec"),s=function t(){Object(a["a"])(this,t),this.jsonld={"@context":{owl:"http://www.w3.org/2002/07/owl#",as:"https://www.w3.org/ns/activitystreams",schema:"http://schema.org/"},"@id":null,"@type":"owl:Thing","schema:name":"__NEW__THING__"}}},c93c:function(t,n,c){"use strict";c.r(n);var a=function(){var t=this,n=t.$createElement,c=t._self._c||n;return c("b-container",[c("b-list-group",t._l(t.contacts,(function(n){return c("b-list-group-item",{key:n["@id"],staticClass:"text-dark",attrs:{variant:"light",button:""},on:{click:function(c){return t.open(n)}}},[c("b-avatar",{staticClass:"mr-3",attrs:{variant:"info",src:n["vcard:hasPhoto"]}}),t._v(" "+t._s(n["vcard:hasName"])+" ")],1)})),1),c("b-iconstack",{staticClass:"floating-action-button",attrs:{"font-scale":"4",type:"button"},on:{click:t.editContact}},[c("b-icon",{attrs:{stacked:"",icon:"circle-fill",variant:"primary"}}),c("b-icon",{attrs:{stacked:"",icon:"plus",scale:"0.5",variant:"white"}}),c("b-icon",{attrs:{stacked:"",icon:"circle",variant:"secondary"}})],1)],1)},s=[],o=c("d72f"),i=c("2f62"),e={name:"Contacts",components:{},data:function(){return{vcard:{}}},created:function(){this.$store.dispatch("contacts/findAll")},methods:{editContact:function(){this.vcard=new o["a"],this.$router.push({name:"EditContact",params:{vcard:this.vcard}})},open:function(t){this.$router.push({name:"Contact",params:{contact:t}})}},watch:{storage:function(){this.$store.dispatch("contacts/findAll")},contacts:function(){}},computed:Object(i["b"])({contacts:function(t){return t.contacts.contacts},storage:function(t){return t.solid.storage}})},r=e,u=(c("94ef"),c("2877")),d=Object(u["a"])(r,a,s,!1,null,null,null);n["default"]=d.exports},d72f:function(t,n,c){"use strict";c.d(n,"a",(function(){return u}));var a=c("d4ec"),s=c("257e"),o=c("262e"),i=c("2caf"),e=c("c141"),r={"@id":null,"vcard:hasName":"","@type":"vcard:VCard","vcard:given-name":"","vcard:family-name":"","vcard:hasPhoto":"https://image.flaticon.com/icons/svg/149/149992.svg"},u=function(t){Object(o["a"])(c,t);var n=Object(i["a"])(c);function c(){var t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;return Object(a["a"])(this,c),t=n.call(this),Object.assign(Object(s["a"])(t),o),t}return c}(e["a"])},d998:function(t,n,c){}}]);
//# sourceMappingURL=contacts.74319cfe.js.map