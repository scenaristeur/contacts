(function(t){function e(e){for(var r,a,c=e[0],i=e[1],u=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o={app:0},s=[];function c(t){return i.p+"js/"+({about:"about",tests:"tests",contact:"contact",contacts:"contacts",editContact:"editContact",import:"import",itemvue:"itemvue",solidresttest:"solidresttest"}[t]||t)+"."+{about:"db21636e","chunk-258852a9":"5152889e",tests:"747dbb06","chunk-2d21659a":"4c4148ce","chunk-2d226c5a":"a7d4b12a","chunk-49c0190c":"6110632f","chunk-43c6387c":"b95cfda9",contact:"39aaef8b",contacts:"5ec858a9",editContact:"5f619bf9",import:"92bfddf1",itemvue:"d8e2b511",solidresttest:"d9f0ce2e","chunk-14c874ec":"6a58feb5","chunk-2d0a386e":"c9e91539","chunk-7863bbbc":"e75b8980","chunk-59d5d60e":"f2a21409","chunk-23187bda":"ac2df290","chunk-2d0b6714":"dbc087eb"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-258852a9":1,tests:1,"chunk-49c0190c":1,"chunk-43c6387c":1,contacts:1,"chunk-14c874ec":1,"chunk-7863bbbc":1,"chunk-59d5d60e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",tests:"tests",contact:"contact",contacts:"contacts",editContact:"editContact",import:"import",itemvue:"itemvue",solidresttest:"solidresttest"}[t]||t)+"."+{about:"31d6cfe0","chunk-258852a9":"34bc152d",tests:"1bbdaac2","chunk-2d21659a":"31d6cfe0","chunk-2d226c5a":"31d6cfe0","chunk-49c0190c":"2318ed1c","chunk-43c6387c":"507a0378",contact:"31d6cfe0",contacts:"f79d833f",editContact:"31d6cfe0",import:"31d6cfe0",itemvue:"31d6cfe0",solidresttest:"31d6cfe0","chunk-14c874ec":"2a9fb7c3","chunk-2d0a386e":"31d6cfe0","chunk-7863bbbc":"44a172be","chunk-59d5d60e":"2a9fb7c3","chunk-23187bda":"31d6cfe0","chunk-2d0b6714":"31d6cfe0"}[t]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[t],p.parentNode.removeChild(p),n(s)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ldp-workspace/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info",fixed:"top"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Contacts ")]),n("SolidLoginButton"),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/import"}},[t._v("Import")]),n("b-nav-item",{attrs:{to:"/export"}},[t._v("Export")]),n("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),n("b-nav-item",{attrs:{to:"/solidRestTest"}},[t._v("SolidRest test")])],1),null!=t.webId?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),n("b-nav-item-dropdown",{attrs:{text:"Lang",right:""}},[n("b-dropdown-item",{attrs:{href:"#"}},[t._v("EN")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("ES")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("RU")]),n("b-dropdown-item",{attrs:{href:"#"}},[t._v("FA")])],1)],1):t._e()],1)],1)],1),n("br"),n("br"),n("br"),null!=t.webId?n("div",[n("router-view"),n("Fab",{staticClass:"fab"})],1):n("div",[n("b-jumbotron",{attrs:{header:"Contacts",lead:"Contacts store your Contacts on your Solid POD in the rootFolder/contacts/ folder."}},[n("p",[t._v("For more information visit "),n("a",{attrs:{href:"https://github.com/scenaristeur/ldp-workspace",target:"_blank"}},[t._v("github repo")])]),n("SolidLoginButton")],1)],1),n("SolidTrackSession"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[n("i",[t._v("0.1-1")])])}],s=(n("d3b7"),n("2f62")),c={name:"App",components:{SolidLoginButton:function(){return n.e("chunk-2d226c5a").then(n.bind(null,"e9a1"))},SolidTrackSession:function(){return n.e("chunk-2d21659a").then(n.bind(null,"c1a7"))},Fab:function(){return Promise.all([n.e("chunk-49c0190c"),n.e("chunk-258852a9"),n.e("chunk-43c6387c")]).then(n.bind(null,"872f"))}},computed:Object(s["b"])({ldp_server:function(t){return t.ldp_store.ldp_server},webId:function(t){return t.solid.webId}})},i=c,u=(n("034f"),n("2877")),l=Object(u["a"])(i,a,o,!1,null,null,null),d=l.exports,p=n("9483");Object(p["a"])("".concat("/ldp-workspace/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),alert("New content is available; close the app and reopen.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=n("8c4f");r["default"].use(f["a"]);var m=[{path:"/",name:"Contacts",component:function(){return n.e("contacts").then(n.bind(null,"c93c"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/itemvue",name:"ItemVue",component:function(){return n.e("itemvue").then(n.bind(null,"9d71"))}},{path:"/contact/:contact",name:"Contact",props:!0,component:function(){return n.e("contact").then(n.bind(null,"b8fa"))}},{path:"/editContact/:vcard",name:"EditContact",props:!0,component:function(){return n.e("editContact").then(n.bind(null,"7465"))}},{path:"/tests",name:"Tests",component:function(){return Promise.all([n.e("chunk-258852a9"),n.e("tests")]).then(n.bind(null,"751f"))}},{path:"/import",name:"Import",component:function(){return n.e("import").then(n.bind(null,"7989"))}},{path:"/solidRestTest",name:"SolidRestTest",component:function(){return n.e("solidresttest").then(n.bind(null,"9819"))}}],h="/ldp-workspace",v=new f["a"]({routes:m,mode:"history",base:h,linkActiveClass:"active"}),b=v,w=(n("4160"),n("b64b"),n("8a79"),n("159b"),n("96cf"),n("1da1")),g=function(){return{ldp_server:{name:"Semapps Local Server",url:"http://localhost:3000"},app:{persons:[],workspaces:[],bases:[],tables:[],records:[],fields:[],documents:[],files:[],tasks:[],tags:[],offers:[],needs:[],things:[],skills:[],categories:[],models:[],collections:[],views:[],vcards:[],contexts:[]},models:[{value:{name:"Workspace",type:"http://purl.org/vocab/lifecycle/schema#TaskGroup",path:"workspaces"},text:"Workspace"},{value:{name:"Base",type:"https://www.w3.org/ns/activitystreams#Base",path:"bases"},text:"Base"},{value:{name:"Table",type:"https://www.w3.org/ns/activitystreams#Table",path:"tables"},text:"Table"},{value:{name:"Field",type:"https://www.w3.org/ns/activitystreams#Field",path:"fields"},text:"Field"},{value:{name:"Record",type:"https://www.w3.org/ns/activitystreams#Record",path:"records"},text:"Record"},{value:{name:"Task",type:"https://www.w3.org/ns/activitystreams#Task",path:"tasks"},text:"Task"},{value:{name:"Person",type:"https://www.w3.org/ns/activitystreams#Person",path:"persons"},text:"Person"},{value:{name:"Document",type:"https://www.w3.org/ns/activitystreams#Document",path:"documents"},text:"Document"},{value:{name:"File",type:"https://www.w3.org/ns/activitystreams#File",path:"files"},text:"File"},{value:{name:"Tag",type:"https://www.w3.org/ns/activitystreams#Tag",path:"tags"},text:"Tag"},{value:{name:"Offer",type:"https://www.w3.org/ns/activitystreams#Offer",path:"offers"},text:"Offer"},{value:{name:"Need",type:"https://www.w3.org/ns/activitystreams#Need",path:"needs"},text:"Need"},{value:{name:"Thing",type:"https://www.w3.org/ns/activitystreams#Thing",path:"things"},text:"Thing"},{value:{name:"Skill",type:"https://www.w3.org/ns/activitystreams#Skill",path:"skills"},text:"Skill"},{value:{name:"Category",type:"https://www.w3.org/ns/activitystreams#Category",path:"categories"},text:"Category"},{value:{name:"Model",type:"https://www.w3.org/ns/activitystreams#Model",path:"models"},text:"Model"},{value:{name:"Collection",type:"https://www.w3.org/ns/activitystreams#Collection",path:"collections"},text:"Collection"},{value:{name:"View",type:"https://www.w3.org/ns/activitystreams#View",path:"views"},text:"View"},{value:{name:"Vcard",type:"http://www.w3.org/2006/vcard/ns#Vcard",path:"vcards"},text:"Vcard"},{value:{name:"Context",type:"https://www.w3.org/ns/activitystreams#Context",path:"contexts"},text:"Context"}]}},y={},k={update:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.state.ldp_server.url.endsWith("/")?t.state.ldp_server.url+e+"/":t.state.ldp_server.url+"/"+e+"/",console.log("update",r),console.log(t.rootState.solid.storage),fetch(r,{headers:{Accept:"application/json"}}).then((function(t){return t.json()})).then((function(n){console.log(n);var r={container:e,items:n["ldp:contains"]};t.commit("setItems",r)})).catch((function(t){console.log(t)}));case 4:case"end":return n.stop()}}),n)})))()},init:function(t){return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Object.keys(t.state.app).forEach((function(e){console.log(e),t.dispatch("update",e)}));case 1:case"end":return e.stop()}}),e)})))()}},x={setServer:function(t,e){console.log(e),t.ldp_server=e},setItems:function(t,e){console.log(e),t.app[e.container]=e.items}},S={namespaced:!0,state:g,getters:y,actions:k,mutations:x},_=(n("99af"),window.solid),C=function(){return{webId:null,storage:null}},O={},j={setWebId:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.commit("setWebId",e),null==e){n.next=11;break}return n.t0="",n.next=5,_.data[e].storage;case 5:n.t1=n.sent,r=n.t0.concat.call(n.t0,n.t1),t.commit("setStorage",r),t.commit("ldp_store/setServer",{name:e+" storage",url:r},{root:!0}),n.next=13;break;case 11:t.commit("setStorage",null),t.commit("ldp_store/setServer",{name:"Localhost",url:"http://localhost:3000"},{root:!0});case 13:case"end":return n.stop()}}),n)})))()}},T={setWebId:function(t,e){console.log(e),t.webId=e},setStorage:function(t,e){console.log(e),t.storage=e}},R={namespaced:!0,state:C,getters:O,actions:j,mutations:T},E=(n("d81d"),n("3ca3"),n("ddb0"),n("11c1")),F=n("00e8"),A=n.n(F),N=n("7fed"),P=n.n(N),I=new P.a(A.a),L=function(){return{contacts:[]}},B={},V={findAll:function(t){return Object(w["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null==t.rootState.solid.storage){e.next=4;break}return n=t.rootState.solid.storage+"contacts/",e.next=4,I.readFolder(n).then(function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.files.map(function(){var t=Object(w["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.readFile(e.url);case 2:return n=t.sent,t.abrupt("return",JSON.parse(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 2:r=e.sent,r.sort((function(t,e){return t["vcard:hasName"]>e["vcard:hasName"]})),t.commit("setContacts",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})))()},delete:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I.deleteFile(e["@id"]).catch((function(t){return console.error("Error: ".concat(t))}));case 2:case"end":return t.stop()}}),t)})))()},add:function(t,e){return Object(w["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.rootState.solid.storage+"contacts/",null==e["@id"]&&(e["@id"]=r+Object(E["v4"])()+".jsonld"),n.next=4,I.createFile(e["@id"],JSON.stringify(e),"application/json").then((function(){t.dispatch("findAll")})).catch((function(t){return console.error("Error: ".concat(t))}));case 4:case"end":return n.stop()}}),n)})))()}},M={setContacts:function(t,e){t.contacts=e}},D={namespaced:!0,state:L,getters:B,actions:V,mutations:M};r["default"].use(s["a"]);var W=new s["a"].Store({state:{},mutations:{},actions:{},modules:{ldp_store:S,solid:R,contacts:D}}),J=n("5f5b"),q=n("b1e0"),$=(n("f9e3"),n("2dd8"),n("63f8"),n("f309"));r["default"].use($["a"]);var z=new $["a"]({}),U=n("a164");r["default"].use(J["a"]),r["default"].use(q["a"]),r["default"].component("vueVcard",U["a"]),r["default"].config.productionTip=!1,new r["default"]({router:b,store:W,render:function(t){return t(d)},vuetify:z,created:function(){}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.aac1b166.js.map