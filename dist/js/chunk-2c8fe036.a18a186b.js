(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c8fe036"],{"5b8f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",e._l(e.items,(function(t,r){return n("v-col",{key:r,attrs:{cols:"4"}},[n("Item",{attrs:{item:t},on:{delete:e.deleteItem,edit:e.editItem}})],1)})),1),n("v-row",[n("v-col",[n("v-btn",{on:{click:e.addItem}},[e._v("Add Item")])],1)],1)],1)},c=[],a=(n("d3b7"),n("96cf"),n("1da1")),o={components:{Item:function(){return Promise.all([n.e("chunk-6ae1ee2e"),n.e("chunk-e6039560")]).then(n.bind(null,"5e7da"))}},computed:{items:function(){return this.$store.state.contacts.items}},created:function(){this.$store.dispatch("contacts/getItems")},methods:{addItem:function(){this.$router.push({name:"edit"})},deleteItem:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("delete",e.id),n.next=3,t.$store.dispatch("contacts/deleteItem",e);case 3:t.$store.dispatch("contacts/getItems");case 4:case"end":return n.stop()}}),n)})))()},editItem:function(e){console.log("edit",e.id),this.$router.push({name:"edit",params:{item:e}})}}},u=o,i=n("2877"),s=n("6544"),l=n.n(s),d=n("8336"),f=n("62ad"),m=n("a523"),b=n("0fd9"),p=Object(i["a"])(u,r,c,!1,null,null,null);t["default"]=p.exports;l()(p,{VBtn:d["a"],VCol:f["a"],VContainer:m["a"],VRow:b["a"]})},"62ad":function(e,t,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var r=n("ade3"),c=n("5530"),a=(n("4b85"),n("2b0e")),o=n("d9f7"),u=n("80d2"),i=["sm","md","lg","xl"],s=function(){return i.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),l=function(){return i.reduce((function(e,t){return e["offset"+Object(u["D"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return i.reduce((function(e,t){return e["order"+Object(u["D"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(s),offset:Object.keys(l),order:Object.keys(d)};function m(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var c=t.replace(e,"");r+="-".concat(c)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var b=new Map;t["a"]=a["default"].extend({name:"v-col",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({cols:{type:[Boolean,String,Number],default:!1}},s),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,c=t.data,a=t.children,u=(t.parent,"");for(var i in n)u+=String(n[i]);var s=b.get(u);return s||function(){var e,t;for(t in s=[],f)f[t].forEach((function(e){var r=n[e],c=m(t,e,r);c&&s.push(c)}));var c=s.some((function(e){return e.startsWith("col-")}));s.push((e={col:!c||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),b.set(u,s)}(),e(n.tag,Object(o["a"])(c,{class:s}),a)}})}}]);
//# sourceMappingURL=chunk-2c8fe036.a18a186b.js.map