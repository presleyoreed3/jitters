!function(){var e={2419:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n(1539),n(4747),n(9720),n(7042),n(6833),n(7941);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.height=0}var t,n;return t=e,n=[{key:"raise",value:function(e){var t=document.getElementsByClassName("waves")[0];this.height+=e,t.style.height="".concat(this.height,"%"),t.style.maxHeight="".concat(this.height,"%"),this.checkHeight()}},{key:"checkHeight",value:function(){var e=document.getElementsByClassName("mgMax")[0],t=e.dataset.mgValue,n=document.querySelector("#wave-div").dataset.currentMg;t=parseInt(t),(n=parseInt(n))>=t&&(e.style.color="#f2f2f2",e.style.textShadow="2px 2px #6A44F2")}},{key:"adjustWave",value:function(){}}],n&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i=o;function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.drinks=[]}var t,n;return t=e,n=[{key:"addDrink",value:function(e,t,n){var r={drinkName:e,oz:t,total:n};this.drinks.push(r)}},{key:"display",value:function(){var e=this,t=document.getElementById("drinkListBtn");document.getElementById("drinkListDiv").style.display="block",t.addEventListener("click",(function(t){e.renderList()}))}},{key:"renderList",value:function(){document.getElementById("drinkListModal");var e=document.getElementById("drinkUL");this.clearList();for(var t=0;t<this.drinks.length;t++){var n=document.createElement("li");n.innerHTML="".concat(this.drinks[t].drinkName,":<br />")+" ".concat(this.drinks[t].oz,"oz.")+" which amount to ".concat(this.drinks[t].total,"Mgs. of Caffeine"),e.appendChild(n)}}},{key:"clearList",value:function(){document.getElementById("drinkUL").querySelectorAll("*").forEach((function(e){e.remove()}))}}],n&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=a,s=n(6856),l=new u,f=document.getElementsByClassName("input-form")[0],d=document.getElementById("addDrinkModalBtn"),p=new i;function m(e,t){var n=document.getElementsByClassName("slidecontainer")[0];n&&(n.querySelectorAll("*").forEach((function(e){e.remove()})),document.getElementById("add-drink-button").remove(),n.remove());var r=document.createElement("div");r.classList.add("slidecontainer");var o=document.createElement("label");o.innerHTML="How many Oz. did you have?",r.appendChild(o);var i=document.createElement("input");i.classList.add("slider"),i.id="ozRange",i.type="range",i.min="1",i.max="64",i.value="16",r.appendChild(i);var c=document.createElement("p");c.id="oz-label",c.innerHTML="".concat(i.value," Oz.");var a=i.value;i.oninput=function(){a=this.value,c.innerHTML="".concat(this.value," Oz.")},r.appendChild(c),f.appendChild(r);var u=document.createElement("input");u.value="Add to your Jitters",u.type="submit",u.id="add-drink-button",f.appendChild(u),u.addEventListener("click",(function(n){n.preventDefault(),function(e,t,n){var r,o,i=document.getElementsByClassName("mgMax")[0];if(!i)return function(){var e=document.querySelector("#wave-div").dataset.currentMg;0===parseInt(e)&&alert("You must set a daily limit before adding a drink!")}(),(m=document.getElementById("addDrinkModal")).style.display="none",void v();for(var c in r=i.dataset.mgValue,n)c===e&&(o=n[c].mgPerOz);var a=t*o,u=a/r,s=Math.floor(.75*u*100),f=document.querySelector("#wave-div"),d=f.dataset.currentMg;d=parseInt(d),d+=a,f.dataset.currentMg=d,document.querySelector("#display").innerHTML="Current Amount: ".concat(d,"Mg"),p.raise(s);var m=document.getElementById("addDrinkModal");m.style.display="none",v(),l.addDrink(e,t,a),l.display()}(e,a,t)}))}function v(){document.getElementsByClassName("input-form")[0].querySelectorAll("*").forEach((function(e){e.remove()}))}d.addEventListener("click",(function(e){!function(){var e=document.createElement("label");e.innerHTML="Drink Type: ",f.appendChild(e);var t=document.createElement("select");t.classList.add("type-options");var n=document.createElement("option");n.innerHTML="Select Category",n.selected=!0,n.disabled=!0,t.appendChild(n),Object.entries(s).forEach((function(e){var n=document.createElement("option");n.innerHTML=e[0].slice(0,1).toUpperCase()+e[0].slice(1),t.appendChild(n)})),f.appendChild(t);var r=document.createElement("br");f.appendChild(r),t.addEventListener("change",(function(e){!function(e){if(document.querySelector("#drink-options"))!function(e){var t=document.createElement("select");t.classList.add("selection"),t.id="drinks-selector";var n,r=Object.values(s);n="Coffee"===e?r[0]:"Tea"===e?r[1]:"Soda"===e?r[2]:r[3];var o=document.createElement("option");o.innerHTML="Select Drink",o.selected=!0,o.disabled=!0,t.appendChild(o),Object.keys(n).forEach((function(e){var n=document.createElement("option");n.id="drink-option",n.innerHTML=e,t.appendChild(n)}));var i=document.querySelector("#drinks-selector");f.replaceChild(t,i),t.addEventListener("change",(function(e){m(e.target.value,n)}))}(e);else{var t=document.createElement("label");t.id="drink-options",t.innerHTML="Drink: ",f.appendChild(t);var n=document.createElement("select");n.classList.add("selection"),n.id="drinks-selector";var r,o=Object.values(s);r="Coffee"===e?o[0]:"Tea"===e?o[1]:"Soda"===e?o[2]:o[3];var i=document.createElement("option");i.innerHTML="Select Drink",i.selected=!0,i.disabled=!0,n.appendChild(i),Object.keys(r).forEach((function(e){var t=document.createElement("option");t.id="drink-option",t.innerHTML=e,n.appendChild(t)})),f.appendChild(n);var c=document.createElement("br");c.id="options-break",f.appendChild(c),n.addEventListener("change",(function(e){m(e.target.value,r)}))}}(e.target.value)}))}()})),document.querySelector("#closeAddModal").addEventListener("click",(function(e){v(),document.getElementById("addDrinkModal").style.display="none"}))},7758:function(){document.getElementById("infoBtn").addEventListener("click",(function(e){var t,n;t=document.getElementById("infoModal"),n=document.getElementsByClassName("close")[0],t.style.display="block",n.onclick=function(){t.style.display="none"}}))},143:function(){var e=document.getElementsByClassName("logon-form")[0],t=document.createElement("h3");t.innerHTML="Please set your daily caffeine limit:",e.appendChild(t),function(){var t=document.createElement("div");t.classList.add("mgSlideContainer");var n=document.createElement("input");n.classList.add("slider"),n.id="mgRange",n.type="range",n.min="20",n.max="700",n.value="200",t.appendChild(n);var r=document.createElement("h3");r.id="mg-label",r.innerHTML="".concat(n.value," mg.");var o=n.value;n.oninput=function(){r.innerHTML="".concat(this.value," mg."),o=n.value},t.appendChild(r),e.appendChild(t);var i=document.createElement("input");i.value="Set you Daily Limit",i.type="submit",i.id="set-limit-button",e.appendChild(i),i.addEventListener("click",(function(e){document.querySelector("#line")?function(e){var t=document.getElementsByClassName("mgMax")[0];t.innerHTML="Your Daily Max: ".concat(e,"Mg");var n=document.querySelector("#limit-line");t.dataset.mgValue=e,n.appendChild(t),document.getElementById("wave-div")}(o):function(e){var t=document.createElement("h4");t.innerHTML="Your Daily Max: ".concat(e,"Mg"),t.classList.add("mgMax"),t.dataset.mgValue=e;var n=document.createElement("hr");n.id="line";var r=document.querySelector("#limit-line");r.appendChild(n),r.appendChild(t)}(o);var t=document.getElementById("logonModal");document.getElementById("closeLoginModal"),t.style.display="none"}))}()},9314:function(){var e=document.getElementById("addDrinkModal");r(document.getElementById("addDrinkModalBtn"),e,document.getElementsByClassName("close")[0]);var t=document.getElementById("logonModal");r(document.getElementById("logonBtn"),t,document.getElementById("closeLoginModal")),document.getElementById("infoModal"),document.getElementById("infoBtn"),document.getElementById("closeInfoModal");var n=document.getElementById("drinkListModal");function r(e,t,n){e.onclick=function(){t.style.display="block"},n.onclick=function(){t.style.display="none"},window.onclick=function(e){e.target==t&&(t.style.display="none")}}r(document.getElementById("drinkListBtn"),n,document.getElementById("closeListModal"))},2806:function(){var e,t=document.querySelector("#current-oz-tracker");document.querySelector("#wave-div"),document.querySelector("#add-drink-button"),(e=document.createElement("h4")).innerHTML="Current Amount: ".concat(0,"Mg"),e.id="display",t.appendChild(e)},9662:function(e,t,n){var r=n(7854),o=n(614),i=n(6330),c=r.TypeError;e.exports=function(e){if(o(e))return e;throw c(i(e)+" is not a function")}},9670:function(e,t,n){var r=n(7854),o=n(111),i=r.String,c=r.TypeError;e.exports=function(e){if(o(e))return e;throw c(i(e)+" is not an object")}},8533:function(e,t,n){"use strict";var r=n(2092).forEach,o=n(9341)("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),c=function(e){return function(t,n,c){var a,u=r(t),s=i(u),l=o(c,s);if(e&&n!=n){for(;s>l;)if((a=u[l++])!=a)return!0}else for(;s>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:c(!0),indexOf:c(!1)}},2092:function(e,t,n){var r=n(9974),o=n(1702),i=n(8361),c=n(7908),a=n(6244),u=n(5417),s=o([].push),l=function(e){var t=1==e,n=2==e,o=3==e,l=4==e,f=6==e,d=7==e,p=5==e||f;return function(m,v,y,g){for(var h,b,S=c(m),E=i(S),x=r(v,y),M=a(E),L=0,O=g||u,k=t?O(m,M):n||d?O(m,0):void 0;M>L;L++)if((p||L in E)&&(b=x(h=E[L],L,S),e))if(t)k[L]=b;else if(b)switch(e){case 3:return!0;case 5:return h;case 6:return L;case 2:s(k,h)}else switch(e){case 4:return!1;case 7:s(k,h)}return f?-1:o||l?l:k}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterReject:l(7)}},1194:function(e,t,n){var r=n(7293),o=n(5112),i=n(7392),c=o("species");e.exports=function(e){return i>=51||!r((function(){var t=[];return(t.constructor={})[c]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},9341:function(e,t,n){"use strict";var r=n(7293);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},206:function(e,t,n){var r=n(1702);e.exports=r([].slice)},7475:function(e,t,n){var r=n(7854),o=n(3157),i=n(4411),c=n(111),a=n(5112)("species"),u=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(i(t)&&(t===u||o(t.prototype))||c(t)&&null===(t=t[a]))&&(t=void 0)),void 0===t?u:t}},5417:function(e,t,n){var r=n(7475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(7854),o=n(1694),i=n(614),c=n(4326),a=n(5112)("toStringTag"),u=r.Object,s="Arguments"==c(function(){return arguments}());e.exports=o?c:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=u(e),a))?n:s?c(t):"Object"==(r=c(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),c=n(3070);e.exports=function(e,t,n){for(var a=o(t),u=c.f,s=i.f,l=0;l<a.length;l++){var f=a[l];r(e,f)||n&&r(n,f)||u(e,f,s(t,f))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6135:function(e,t,n){"use strict";var r=n(4948),o=n(3070),i=n(9114);e.exports=function(e,t,n){var c=r(t);c in e?o.f(e,c,i(0,n)):e[c]=n}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);e.exports=function(e){return c?i.createElement(e):{}}},8324:function(e){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(e,t,n){var r=n(317)("span").classList,o=r&&r.constructor&&r.constructor.prototype;e.exports=o===Object.prototype?void 0:o},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),c=n(8113),a=i.process,u=i.Deno,s=a&&a.versions||u&&u.version,l=s&&s.v8;l&&(o=(r=l.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(1320),a=n(3505),u=n(9920),s=n(4705);e.exports=function(e,t){var n,l,f,d,p,m=e.target,v=e.global,y=e.stat;if(n=v?r:y?r[m]||a(m,{}):(r[m]||{}).prototype)for(l in t){if(d=t[l],f=e.noTargetGet?(p=o(n,l))&&p.value:n[l],!s(v?l:m+(y?".":"#")+l,e.forced)&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(e.sham||f&&f.sham)&&i(d,"sham",!0),c(n,l,d,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(e){return!0}}},9974:function(e,t,n){var r=n(1702),o=n(9662),i=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?i(e,t):function(){return e.apply(t,arguments)}}},6916:function(e){var t=Function.prototype.call;e.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),u=a&&"something"===function(){}.name,s=a&&(!r||r&&c(i,"name").configurable);e.exports={EXISTS:a,PROPER:u,CONFIGURABLE:s}},1702:function(e){var t=Function.prototype,n=t.bind,r=t.call,o=n&&n.bind(r);e.exports=n?function(e){return e&&o(r,e)}:function(e){return e&&function(){return r.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(7854),o=n(1702),i=n(7293),c=n(4326),a=r.Object,u=o("".split);e.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==c(e)?u(e,""):a(e)}:a},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),c=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return c(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,c=n(8536),a=n(7854),u=n(1702),s=n(111),l=n(8880),f=n(2597),d=n(5465),p=n(6200),m=n(3501),v="Object already initialized",y=a.TypeError,g=a.WeakMap;if(c||d.state){var h=d.state||(d.state=new g),b=u(h.get),S=u(h.has),E=u(h.set);r=function(e,t){if(S(h,e))throw new y(v);return t.facade=e,E(h,e,t),t},o=function(e){return b(h,e)||{}},i=function(e){return S(h,e)}}else{var x=p("state");m[x]=!0,r=function(e,t){if(f(e,x))throw new y(v);return t.facade=e,l(e,x,t),t},o=function(e){return f(e,x)?e[x]:{}},i=function(e){return f(e,x)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!s(t)||(n=o(t)).type!==e)throw y("Incompatible receiver, "+e+" required");return n}}}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e){e.exports=function(e){return"function"==typeof e}},4411:function(e,t,n){var r=n(1702),o=n(7293),i=n(614),c=n(648),a=n(5005),u=n(2788),s=function(){},l=[],f=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=r(d.exec),m=!d.exec(s),v=function(e){if(!i(e))return!1;try{return f(s,l,e),!0}catch(e){return!1}},y=function(e){if(!i(e))return!1;switch(c(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!p(d,u(e))}catch(e){return!0}};y.sham=!0,e.exports=!f||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?y:v},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,c=function(e,t){var n=u[a(e)];return n==l||n!=s&&(o(t)?r(t):!!t)},a=c.normalize=function(e){return String(e).replace(i,".").toLowerCase()},u=c.data={},s=c.NATIVE="N",l=c.POLYFILL="P";e.exports=c},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(7854),o=n(5005),i=n(614),c=n(7976),a=n(3307),u=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=o("Symbol");return i(t)&&c(t.prototype,u(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),i=n(2788),c=r.WeakMap;e.exports=o(c)&&/native code/.test(i(c))},3070:function(e,t,n){var r=n(7854),o=n(9781),i=n(4664),c=n(9670),a=n(4948),u=r.TypeError,s=Object.defineProperty;t.f=o?s:function(e,t,n){if(c(e),t=a(t),c(n),i)try{return s(e,t,n)}catch(e){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),c=n(9114),a=n(5656),u=n(4948),s=n(2597),l=n(4664),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=a(e),t=u(t),l)try{return f(e,t)}catch(e){}if(s(e,t))return c(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),c=n(1318).indexOf,a=n(3501),u=r([].push);e.exports=function(e,t){var n,r=i(e),s=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&u(l,n);for(;t.length>s;)o(r,n=t[s++])&&(~c(l,n)||u(l,n));return l}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},4699:function(e,t,n){var r=n(9781),o=n(1702),i=n(1956),c=n(5656),a=o(n(5296).f),u=o([].push),s=function(e){return function(t){for(var n,o=c(t),s=i(o),l=s.length,f=0,d=[];l>f;)n=s[f++],r&&!a(o,n)||u(d,e?[n,o[n]]:o[n]);return d}};e.exports={entries:s(!0),values:s(!1)}},288:function(e,t,n){"use strict";var r=n(1694),o=n(648);e.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(e,t,n){var r=n(7854),o=n(6916),i=n(614),c=n(111),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&i(n=e.toString)&&!c(r=o(n,e)))return r;if(i(n=e.valueOf)&&!c(r=o(n,e)))return r;if("string"!==t&&i(n=e.toString)&&!c(r=o(n,e)))return r;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),c=n(5181),a=n(9670),u=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=c.f;return n?u(t,n(e)):t}},1320:function(e,t,n){var r=n(7854),o=n(614),i=n(2597),c=n(8880),a=n(3505),u=n(2788),s=n(9909),l=n(6530).CONFIGURABLE,f=s.get,d=s.enforce,p=String(String).split("String");(e.exports=function(e,t,n,u){var s,f=!!u&&!!u.unsafe,m=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet,y=u&&void 0!==u.name?u.name:t;o(n)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||l&&n.name!==y)&&c(n,"name",y),(s=d(n)).source||(s.source=p.join("string"==typeof y?y:""))),e!==r?(f?!v&&e[t]&&(m=!0):delete e[t],m?e[t]=n:c(e,t,n)):m?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||u(this)}))},4488:function(e,t,n){var r=n(7854).TypeError;e.exports=function(e){if(null==e)throw r("Can't call method on "+e);return e}},3505:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3505),i="__core-js_shared__",c=r[i]||o(i,{});e.exports=c},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e){var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!=r||0===r?0:(r>0?n:t)(r)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(7854),o=n(4488),i=r.Object;e.exports=function(e){return i(o(e))}},7593:function(e,t,n){var r=n(7854),o=n(6916),i=n(111),c=n(2190),a=n(8173),u=n(2140),s=n(5112),l=r.TypeError,f=s("toPrimitive");e.exports=function(e,t){if(!i(e)||c(e))return e;var n,r=a(e,f);if(r){if(void 0===t&&(t="default"),n=o(r,e,t),!i(n)||c(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},6330:function(e,t,n){var r=n(7854).String;e.exports=function(e){try{return r(e)}catch(e){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),c=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+c(++o+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),c=n(9711),a=n(133),u=n(3307),s=o("wks"),l=r.Symbol,f=l&&l.for,d=u?l:l&&l.withoutSetter||c;e.exports=function(e){if(!i(s,e)||!a&&"string"!=typeof s[e]){var t="Symbol."+e;a&&i(l,e)?s[e]=l[e]:s[e]=u&&f?f(t):d(t)}return s[e]}},7042:function(e,t,n){"use strict";var r=n(2109),o=n(7854),i=n(3157),c=n(4411),a=n(111),u=n(1400),s=n(6244),l=n(5656),f=n(6135),d=n(5112),p=n(1194),m=n(206),v=p("slice"),y=d("species"),g=o.Array,h=Math.max;r({target:"Array",proto:!0,forced:!v},{slice:function(e,t){var n,r,o,d=l(this),p=s(d),v=u(e,p),b=u(void 0===t?p:t,p);if(i(d)&&(n=d.constructor,(c(n)&&(n===g||i(n.prototype))||a(n)&&null===(n=n[y]))&&(n=void 0),n===g||void 0===n))return m(d,v,b);for(r=new(void 0===n?g:n)(h(b-v,0)),o=0;v<b;v++,o++)v in d&&f(r,o,d[v]);return r.length=o,r}})},9720:function(e,t,n){var r=n(2109),o=n(4699).entries;r({target:"Object",stat:!0},{entries:function(e){return o(e)}})},7941:function(e,t,n){var r=n(2109),o=n(7908),i=n(1956);r({target:"Object",stat:!0,forced:n(7293)((function(){i(1)}))},{keys:function(e){return i(o(e))}})},1539:function(e,t,n){var r=n(1694),o=n(1320),i=n(288);r||o(Object.prototype,"toString",i,{unsafe:!0})},6833:function(e,t,n){var r=n(2109),o=n(4699).values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},4747:function(e,t,n){var r=n(7854),o=n(8324),i=n(8509),c=n(8533),a=n(8880),u=function(e){if(e&&e.forEach!==c)try{a(e,"forEach",c)}catch(t){e.forEach=c}};for(var s in o)o[s]&&u(r[s]&&r[s].prototype);u(i)},6856:function(e){"use strict";e.exports=JSON.parse('{"coffee":{"Drip Coffee":{"Size":8,"Mg":145,"mgPerOz":20.4},"Cold Brew":{"Size":10,"Mg":60,"mgPerOz":6},"French Press":{"Size":8,"Mg":107,"mgPerOz":14},"Espresso":{"Size":1.5,"Mg":77,"mgPerOz":51.3}},"tea":{"Green Tea":{"Size":8,"Mg":25,"mgPerOz":2.2},"Black Tea":{"Size":8,"Mg":30,"mgPerOz":5.2},"Matcha":{"Size":8,"Mg":64,"mgPerOz":8},"Yerba Mate":{"Size":16,"Mg":150,"mgPerOz":9.7},"Chai":{"Size":8,"Mg":50,"mgPerOz":6.2}},"soda":{"Coca-Cola":{"Size":12,"Mg":34,"mgPerOz":2.8},"Dr. Pepper":{"Size":12,"Mg":42,"mgPerOz":3.5},"Mountain Dew":{"Size":12,"Mg":54,"mgPerOz":4.5},"Root Beer":{"Size":12,"Mg":22,"mgPerOz":1.8}},"energy drink":{"Monster":{"Size":16,"Mg":160,"mgPerOz":10},"Red Bull":{"Size":8.5,"Mg":80,"mgPerOz":9.5},"Rockstar":{"Size":16,"Mg":160,"mgPerOz":10},"5-Hour-Energy":{"Size":1.9,"Mg":200,"mgPerOz":103.6},"NOS":{"Size":16,"Mg":160,"mgPerOz":10},"Bang":{"Size":16,"Mg":300,"mgPerOz":18.8}}}')}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(9314),n(2419),n(143),n(2806),n(7758)}();
//# sourceMappingURL=main.js.map