(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a386e"],{"030e":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-form-group",{attrs:{description:"Select the type of the Resource.",label:"Type","label-for":"type"}},[o("b-form-select",{attrs:{options:e.models,selected:e.models[0]},model:{value:e.post.meta.type,callback:function(t){e.$set(e.post.meta,"type",t)},expression:"post.meta.type"}})],1),o("b-form-group",{attrs:{description:"Enter the name of the Resource.",label:"Name","label-for":"name"}},[o("b-input",{attrs:{id:"name",placeholder:"name, ex: 'Bobby Cool'"},model:{value:e.post.data["schema:name"],callback:function(t){e.$set(e.post.data,"schema:name",t)},expression:"post.data['schema:name']"}})],1),o("b-button",{on:{click:e.post_action}},[e._v("Post")])],1)},n=[],s=(o("d3b7"),o("8a79"),o("96cf"),o("1da1")),r=o("2f62"),c=o("00e8"),l=o.n(c),p=o("7fed"),i=o.n(p),d=o("11c1"),u=new i.a(l.a),m={name:"AxiosPost",data:function(){return{selected:{},post:{data:{"@context":{as:"https://www.w3.org/ns/activitystreams",schema:"http://schema.org/"},"schema:name":"Guillaume Cousin","@type":""},meta:{}}}},methods:{post_action:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var o,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.post),e.post.data["schema:dateCreated"]=(new Date).toISOString(),e.post.data["@type"]=e.post.meta.type.type,console.log(JSON.stringify(e.post.data)),o=e.$store,a=e.post.meta.type.path,n=e.post.data,console.log(e.storage),null!=e.storage){t.next=12;break}fetch(e.ldp_server.url+"/"+e.post.meta.type.path+"/",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(e.post.data)}).then((function(e){console.log(e),o.dispatch("ldp_store/update",a),n["schema:name"]=""})).catch((function(e){console.log(e)})),t.next=24;break;case 12:return t.prev=12,s=e.ldp_server.url.endsWith("/")?e.ldp_server.url+e.post.meta.type.path+"/"+Object(d["v4"])()+".jsonld":e.ldp_server.url+"/"+e.post.meta.type.path+"/"+Object(d["v4"])()+".jsonld",console.log(s),console.log(e.post.data),t.next=18,u.createFile(s,JSON.stringify(e.post.data),"application/json").then((function(e){console.log(e)})).catch((function(e){return console.error("Error: ".concat(e))}));case 18:alert(s+" sauvegardé"),t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](12),alert(t.t0);case 24:case"end":return t.stop()}}),t,null,[[12,21]])})))()}},computed:Object(r["b"])({ldp_server:function(e){return e.ldp_store.ldp_server},models:function(e){return e.ldp_store.models},storage:function(e){return e.solid.storage}})},h=m,f=o("2877"),b=Object(f["a"])(h,a,n,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0a386e.c9e91539.js.map