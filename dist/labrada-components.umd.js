(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e["labrada-components"]=t(e.Vue))})(this,function(e){"use strict";const t=(n,o)=>{const c=n.__vccOpts||n;for(const[d,u]of o)c[d]=u;return c},i={},r={type:"button",class:"p-3 rounded-sm text-pink-50 bg-blue-500 active:shadow-sm active:bg-pink-800 transition-colors transition-shadows duration-500 ease-linear"};function a(n,o){return e.openBlock(),e.createElementBlock("button",r,"Hellow")}const s={FIButton:t(i,[["render",a]])};return{install(n){Object.keys(s).forEach(o=>{n.component(o,s[o])})}}});
