(()=>{"use strict";var n,e,t,r,o,a,i,c,s,d,l,u,p,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n#main {\r\n  width: 35%;\r\n  height: 35%;\r\n  margin: auto;\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.title,\r\n.input,\r\n.btn-clear,\r\np {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  border: 1px solid lightgray;\r\n  background-color: white;\r\n}\r\n\r\nbutton {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  background-color: #fff;\r\n  border: 2px solid lightgray;\r\n  align-content: center;\r\n  align-items: center;\r\n  padding: 1.5rem;\r\n  list-style: none;\r\n}\r\n\r\n.task-item {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  text-align: start;\r\n  align-items: center;\r\n  align-content: center;\r\n  padding: 1rem;\r\n  gap: 1rem;\r\n  border: 1px solid lightgray;\r\n  list-style: none;\r\n}\r\n\r\n.Text {\r\n  width: 65%;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  background: none;\r\n  outline: none;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function g(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),d=g.n(s),l=g(589),u=g.n(l),p=g(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals,window.addEventListener("load",(function n(){const e=localStorage.getItem("tasks"),t=e?JSON.parse(e):[],r=document.getElementById("todo");t.forEach((n=>{const e=document.createElement("li");e.className="task-item",e.innerHTML=`\n      <div class="taskContainer">\n        <input type="checkbox" class="checkbox" ${n.completed?"checked":""}>\n        <input type="text" class="Text" value="${n.description}" ${n.completed?"disabled":""}>\n        <button class="removeBtn" type="button">&#x1F5D1;</button>\n      </div>     \n    `,r.appendChild(e)}));const o=document.getElementById("addBtn"),a=document.getElementById("new-task-input");o.addEventListener("click",(()=>{const e=a.value;""!==e.trim()&&(function(n,e){const t={description:e,completed:!1,index:n.length+1};n.push(t)}(t,e),function(n){localStorage.setItem("tasks",JSON.stringify(n))}(t),n(),a.value="")}))}))})();