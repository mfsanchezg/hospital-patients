(function(){"use strict";var n={1257:function(n,a,t){var e=t(9242),r=t(3396);function o(n,a,t,e,o,i){const l=(0,r.up)("header-menu"),u=(0,r.up)("insert-update-patient");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,{brand:o.brand,title:o.title},null,8,["brand","title"]),(0,r.Wm)(u),(0,r.Wm)(u,{patientName:"Manuel"})],64)}var i={data(){return{brand:"IQ SPACES",title:"Manejo hospitalario de camas"}}},l=t(89);const u=(0,l.Z)(i,[["render",o]]);var s=u,c=t(7139);const p={class:"navbar navbar-expand-lg navbar-dark bg-dark"},d={class:"container-fluid"},v={class:"navbar-brand",href:"#"},f=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),b=(0,r.uE)('<nav class="navbar navbar-expand-lg navbar-light" style="background-color:#e3f2fd;"><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Insertar paciente</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="#">Actualizar cama</a></li><li class="nav-item"><a class="nav-link" aria-current="page" href="#">Consultar cama</a></li></ul></div></nav>',1);function m(n,a,t,e,o,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",p,[(0,r._)("div",d,[(0,r._)("a",v,(0,c.zw)(t.brand)+" - "+(0,c.zw)(t.title),1),f])]),b],64)}var g={props:["brand","title"],data(){return{}}};const h=(0,l.Z)(g,[["render",m]]);var y=h;const w={class:"mb-3 row"},_=(0,r.uE)('<label for="barCode" class="col-sm-2 col-form-label">Habitación asignada</label><select name="barCode" id="barCode"><option value="101A">101A</option><option value="101B">101B</option><option value="201A">201A</option><option value="201B">201B</option></select><label for="inputPassword" class="col-sm-2 col-form-label">Nombre del paciente</label>',3),O={class:"col-sm-10"},S=["value"];function k(n,a,t,e,o,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("h5",null,(0,c.zw)(o.info),1),(0,r._)("div",w,[_,(0,r._)("div",O,[(0,r._)("input",{type:"text",class:"form-control",id:"inputPassword",value:""!=this.patientName||null!=this.patientName||void 0!=this.patientName?this.patientName:this.novalor},null,8,S)])])],64)}var C={props:{barCode:String,patientName:String},data(){return{novalor:"No hay valor",info:"Digite la información del paciente:"}}};const j=(0,l.Z)(C,[["render",k]]);var x=j;t(5654);const N=(0,e.ri)(s);N.component("insert-update-patient",x),N.component("header-menu",y),N.mount("#app")}},a={};function t(e){var r=a[e];if(void 0!==r)return r.exports;var o=a[e]={exports:{}};return n[e].call(o.exports,o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(a,e,r,o){if(!e){var i=1/0;for(c=0;c<n.length;c++){e=n[c][0],r=n[c][1],o=n[c][2];for(var l=!0,u=0;u<e.length;u++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](e[u])}))?e.splice(u--,1):(l=!1,o<i&&(i=o));if(l){n.splice(c--,1);var s=r();void 0!==s&&(a=s)}}return a}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[e,r,o]}}(),function(){t.n=function(n){var a=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(a,{a:a}),a}}(),function(){t.d=function(n,a){for(var e in a)t.o(a,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:a[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(a){return 0===n[a]};var a=function(a,e){var r,o,i=e[0],l=e[1],u=e[2],s=0;if(i.some((function(a){return 0!==n[a]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(u)var c=u(t)}for(a&&a(e);s<i.length;s++)o=i[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(c)},e=self["webpackChunkhospital_patients"]=self["webpackChunkhospital_patients"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(1257)}));e=t.O(e)})();
//# sourceMappingURL=app.811b7a4c.js.map