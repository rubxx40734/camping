(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ca080f6"],{f5af:function(e,t,o){!function(t,o){e.exports=o()}(0,(function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=o(1),r=(n(a),o(6)),s=n(r),c=o(7),l=n(c),d=o(8),u=n(d),f=o(9),m=n(f),b=o(10),p=n(b),v=o(11),w=n(v),g=o(14),h=n(g),y=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return y=(0,w.default)(y,x),(0,p.default)(y,x.once),y},O=function(){y=(0,h.default)(),j()},z=function(){y.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},E=function(e){return!0===e||"mobile"===e&&m.default.mobile()||"phone"===e&&m.default.phone()||"tablet"===e&&m.default.tablet()||"function"==typeof e&&!0===e()},M=function(e){x=i(x,e),y=(0,h.default)();var t=document.all&&!window.atob;return E(x.disable)||t?z():(x.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,(function(){j(!0)})):document.addEventListener(x.startEvent,(function(){j(!0)})),window.addEventListener("resize",(0,l.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,l.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,p.default)(y,x.once)}),x.throttleDelay)),x.disableMutationObserver||u.default.ready("[data-aos]",O),y)};e.exports={init:M,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=p,n=v;return p=v=void 0,k=t,g=e.apply(n,o)}function a(e){return k=e,h=setTimeout(d,t),z?n(e):g}function r(e){var o=e-y,n=e-k,i=t-o;return E?j(i,w-n):i}function c(e){var o=e-y,n=e-k;return void 0===y||o>=t||o<0||E&&n>=w}function d(){var e=O();return c(e)?u(e):void(h=setTimeout(d,r(e)))}function u(e){return h=void 0,M&&p?n(e):(p=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),k=0,p=y=v=h=void 0}function m(){return void 0===h?g:u(O())}function b(){var e=O(),o=c(e);if(p=arguments,v=this,y=e,o){if(void 0===h)return a(y);if(E)return h=setTimeout(d,t),n(y)}return void 0===h&&(h=setTimeout(d,t)),g}var p,v,w,g,h,y,k=0,z=!1,E=!1,M=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,i(o)&&(z=!!o.leading,E="maxWait"in o,w=E?x(s(o.maxWait)||0,t):w,M="trailing"in o?!!o.trailing:M),b.cancel=f,b.flush=m,b}function n(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return i(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),o(e,t,{leading:a,maxWait:t,trailing:r})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&k.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return d;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=b.test(e);return o||p.test(e)?v(e.slice(2),o?2:8):m.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,p=/^0o[0-7]+$/i,v=parseInt,w="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=w||g||Function("return this")(),y=Object.prototype,k=y.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function i(t){var o=p,n=v;return p=v=void 0,O=t,g=e.apply(n,o)}function a(e){return O=e,h=setTimeout(d,t),z?i(e):g}function s(e){var o=e-y,n=e-O,i=t-o;return E?x(i,w-n):i}function l(e){var o=e-y,n=e-O;return void 0===y||o>=t||o<0||E&&n>=w}function d(){var e=j();return l(e)?u(e):void(h=setTimeout(d,s(e)))}function u(e){return h=void 0,M&&p?i(e):(p=v=void 0,g)}function f(){void 0!==h&&clearTimeout(h),O=0,p=y=v=h=void 0}function m(){return void 0===h?g:u(j())}function b(){var e=j(),o=l(e);if(p=arguments,v=this,y=e,o){if(void 0===h)return a(y);if(E)return h=setTimeout(d,t),i(y)}return void 0===h&&(h=setTimeout(d,t)),g}var p,v,w,g,h,y,O=0,z=!1,E=!1,M=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,n(o)&&(z=!!o.leading,E="maxWait"in o,w=E?k(r(o.maxWait)||0,t):w,M="trailing"in o?!!o.trailing:M),b.cancel=f,b.flush=m,b}function n(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||i(e)&&y.call(e)==d}function r(e){if("number"==typeof e)return e;if(a(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=m.test(e);return o||b.test(e)?p(e.slice(2),o?2:8):f.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,p=parseInt,v="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,w="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,g=v||w||Function("return this")(),h=Object.prototype,y=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if(n=e[t],n.dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!n()}function a(e,t){var o=window.document,i=n(),a=new i(r);s=t,a.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),i=t.concat(n);if(o(i))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:i,ready:a}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){o(this,e)}return i(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,a){o(e,i+n,t)}))};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(12),a=n(i),r=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=r},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(13),a=n(i),r=function(e,t){var o=0,n=0,i=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,a.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])}))},f820:function(e,t,o){"use strict";o.r(t);var n=o("7a23");const i=Object(n["i"])('<div class="container"><h1 class="text-center fw-bold mb-7 text-primary">那些關於我們的故事</h1><div class="row mb-7" data-aos="fade-up" data-aos-duration="2000"><div class="col-md-6 mb-5 mb-md-0"><img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/i4mXi8E6EwKBjH7nfnRF1vrXrLmVsOzdNsig8d72cNVgAc103KqIbTl4uFfoCDXK8tQpap096VZBxar7fforwsyNivsGoajnTrvoTxgDdEhtXIgcgiLFCqyqPVruDbie.png" alt="" class="card-img bgCover h-350"></div><div class="col-md-6 mb-5 mb-md-0 d-flex align-items-center"><h2 class="fw-bold fs-5">我們是一家專注於露營產品的線上電商，成立於2022年。我們的使命是幫助人們在野外度過最難忘的時光，通過提供高品質且實惠的露營產品。我們的團隊由一群熱愛戶外活動的專業人員組成，他們不斷努力提供最好的露營體驗給我們的客戶。</h2></div></div><div class="row mb-7" data-aos="fade-up" data-aos-duration="2000"><div class="col-md-6 mb-5 mb-md-0 d-flex align-items-center order-2 order-md-1"><ul><li><h2 class="fw-bold fs-5 mb-5">我們堅信以下幾項核心價值觀是我們成功的關鍵：</h2></li><li class="fw-bold">客戶至上：我們始終以客戶的需求為中心，確保他們能夠享受到最佳的露營體驗。</li><li class="fw-bold">品質保證：我們堅持使用優質的材料製造產品，確保產品符合客戶的期望。</li><li class="fw-bold">環保意識：我們致力於減少對環境的影響，並支持可持續發展。</li><li class="fw-bold">創新精神：我們不斷尋求創新，以提供更好的露營產品和體驗。</li><li class="fw-bold">團隊合作：我們相信團隊合作是成功的關鍵，我們始終在一起努力。</li></ul></div><div class="col-md-6 mb-5 mb-md-0 order-1 order-md-2"><img src="https://hexschool-api.s3.us-west-2.amazonaws.com/custom/b8BQklA842P4ysgiCUDUygWbixeQBizBenrennyFKje7GpvpqXdpSFx7FkzGWeGxXkXpg6id01W0TIoE770x1btrZc5aAOpHutoMupE709cENrnG6ilF7zKIgOdowBli.png" alt="" class="card-img bgCover h-350"></div></div><div class="row mb-7" data-aos="fade-up" data-aos-duration="2000"><div class="col-md-6 mb-5 mb-md-0"><img src="https://images.unsplash.com/photo-1502294624983-4ba589803a55?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1355&amp;q=80" alt="" class="card-img bgCover h-350"></div><div class="col-md-6 mb-5 mb-md-0 d-flex align-items-center"><ul><li><h2 class="fw-bold fs-5 mb-5">我們對未來充滿信心，並有以下幾個明確的規劃：</h2></li><li class="fw-bold">擴大產品線：我們將不斷擴大我們的產品線，以滿足客戶的更多需求。</li><li class="fw-bold">提高客戶服務水平：我們將加強客戶服務，以提供更好的顧客體驗。</li><li class="fw-bold">加強品牌知名度：我們將努力提高我們的品牌知名度，以吸引更多客戶。</li><li class="fw-bold">投資新技術：我們將繼續投資創新技術，以提供更高效、更高品質的產品和服務。</li><li class="fw-bold">建立露營社群：我們將努力建立一個熱愛露營的社群，以分享露營經驗和信息。</li></ul></div></div></div>',1),a=Object(n["h"])("div",{class:"map bg-secondary"},[Object(n["h"])("div",{class:"container"},[Object(n["h"])("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57821.59895870447!2d121.37273305820315!3d25.07307489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a721c0d6c8fb%3A0x5a1fc3d9b460fab6!2zRnVu6YeO55Sf5rS75oi25aSW6YeO6YG4!5e0!3m2!1szh-TW!2stw!4v1676270238842!5m2!1szh-TW!2stw",height:"450",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",class:"w-100 mb-5"}),Object(n["h"])("p",{class:"text-center fw-bold"},"星期一至星期五：上午9時至晚上6時"),Object(n["h"])("p",{class:"text-center fw-bold"},"星期六：上午10時至下午5時"),Object(n["h"])("p",{class:"text-center fw-bold"},"星期日：休息")])],-1),r=Object(n["i"])('<div class="connection bg-secondary p-6 d-flex flex-column align-items-center mb-4"><div class="phone d-xl-flex d-block justify-content-between mb-4"><p class="text-success fw-bold me-2">| 客服時間： Mon - Fri 09:30-12:00 13:00-17:30（例假日官網客服無法及時回覆，敬請見諒）</p><p class="text-success fw-bold me-2">| 客服專線：02-2999-9520</p><p class="text-success fw-bold me-2">| 信箱：bill.cheng#taidoc.com.tw</p></div><div class="community d-flex"><a href="#" class="d-block"><i class="bi bi-facebook fs-3 me-3"></i></a><a href="#" class="d-block"><i class="bi bi-instagram fs-3 me-3"></i></a><a href="#" class="d-block"><i class="bi bi-line fs-3 me-3"></i></a><a href="#" class="d-block"><i class="bi bi-youtube fs-3"></i></a></div></div><p class="text-center text-success">Copyright © 2023 Coleman Taiwan All Rights Reserved.</p><p class="text-center text-success mb-4">此網站為練習作品，無任何商業用途</p>',3);function s(e,t,o,s,c,l){const d=Object(n["F"])("FontNavbar");return Object(n["y"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(d,{class:"mb-7"}),i,a,r],64)}var c=o("fbde"),l=o("f5af"),d=o.n(l),u={data(){return{}},components:{FontNavbar:c["a"]},mounted(){d.a.init(),console.log(d.a)}},f=o("6b0d"),m=o.n(f);const b=m()(u,[["render",s]]);t["default"]=b}}]);
//# sourceMappingURL=chunk-1ca080f6.558ef4be.js.map