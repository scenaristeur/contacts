(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1071:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-form",[r("v-container",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Name",required:""},model:{value:t.cat.name,callback:function(e){t.$set(t.cat,"name",e)},expression:"cat.name"}})],1),r("v-col",[r("v-text-field",{attrs:{label:"Age",required:"",type:"numeric",min:"0",max:"30"},model:{value:t.cat.age,callback:function(e){t.$set(t.cat,"age",e)},expression:"cat.age"}})],1)],1),r("v-row",[r("v-col",[r("v-btn",{attrs:{color:"green"},on:{click:t.save}},[t._v("Save Cat")])],1)],1)],1)],1)],1)},a=[],i=(r("96cf"),r("1da1")),o={data:function(){return{cat:null}},created:function(){this.$route.params.cat?this.cat=this.$route.params.cat:this.cat={name:"",age:0}},methods:{save:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("contacts/saveCat",t.cat);case 2:console.log("back"),t.$router.push("/solidRestTest");case 4:case"end":return e.stop()}}),e)})))()}}},u=o,c=r("2877"),s=r("6544"),l=r.n(s),d=r("8336"),f=r("62ad"),h=r("a523"),b=(r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b"),r("5530")),v=r("58df"),p=r("7e2b"),m=r("3206"),g=Object(v["a"])(p["a"],Object(m["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(n.valid=r(t)))})):n.valid=r(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(b["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),w=r("0fd9"),O=r("8654"),j=Object(c["a"])(u,n,a,!1,null,null,null);e["default"]=j.exports;l()(j,{VBtn:d["a"],VCol:f["a"],VContainer:h["a"],VForm:g,VRow:w["a"],VTextField:O["a"]})},"62ad":function(t,e,r){"use strict";r("4160"),r("caad"),r("13d5"),r("45fc"),r("4ec9"),r("a9e3"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("2ca0"),r("159b"),r("ddb0");var n=r("ade3"),a=r("5530"),i=(r("4b85"),r("2b0e")),o=r("d9f7"),u=r("80d2"),c=["sm","md","lg","xl"],s=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return c.reduce((function(t,e){return t["offset"+Object(u["D"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(u["D"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(d)};function h(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var a=e.replace(t,"");n+="-".concat(a)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),n.toLowerCase()):n.toLowerCase()}}var b=new Map;e["a"]=i["default"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,a=e.data,i=e.children,u=(e.parent,"");for(var c in r)u+=String(r[c]);var s=b.get(u);return s||function(){var t,e;for(e in s=[],f)f[e].forEach((function(t){var n=r[t],a=h(e,t,n);a&&s.push(a)}));var a=s.some((function(t){return t.startsWith("col-")}));s.push((t={col:!a||!r.cols},Object(n["a"])(t,"col-".concat(r.cols),r.cols),Object(n["a"])(t,"offset-".concat(r.offset),r.offset),Object(n["a"])(t,"order-".concat(r.order),r.order),Object(n["a"])(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),b.set(u,s)}(),t(r.tag,Object(o["a"])(a,{class:s}),i)}})},f820:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about"},[r("b-jumbotron",{attrs:{header:"Contacts",lead:"Contacts store your Contacts on your Solid POD in the rootFolder/contacts/ folder."}},[r("p",[t._v("For more information visit "),r("a",{attrs:{href:"https://github.com/scenaristeur/ldp-workspace/blob/main/README.md",target:"_blank"}},[t._v("github repo")])]),r("SolidLoginButton")],1)],1)},a=[],i=r("2877"),o={},u=Object(i["a"])(o,n,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=about.d16f1ae3.js.map