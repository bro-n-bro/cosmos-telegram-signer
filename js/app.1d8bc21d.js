(function(){"use strict";var e={4342:function(e,t,n){var r=n(5130),a=n(3367),o=n(6768),i=n(1387),l=n(8326),c={__name:"App",setup(e){const t=(0,o.WQ)("i18n"),n=(0,i.lq)(),r=(0,l.K7Q)(),a=(0,o.EW)((()=>n.meta.layout||"default-layout"));return(0,o.KC)((()=>{r.value=t.global.t("message.page_title")})),(0,o.sV)((()=>{window.Telegram&&window.Telegram.WebApp&&(Telegram.WebApp.ready(),Telegram.WebApp.expand())})),(e,t)=>((0,o.uX)(),(0,o.Wv)((0,o.$y)(a.value)))}};const u=c;var s=u;const f={class:"main"};function p(e,t){const n=(0,o.g2)("RouterView");return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.bF)(n)])}var d=n(1241);const m={},h=(0,d.A)(m,[["render",p]]);var _=h;const b=[{path:"/",name:"MainPage",component:()=>n.e(496).then(n.bind(n,692)),meta:{layout:_}},{path:"/create_wallet",name:"CreateWallet",component:()=>Promise.all([n.e(872),n.e(124)]).then(n.bind(n,4836)),meta:{layout:_}},{path:"/create_wallet_confirm",name:"CreateWalletConfirm",component:()=>n.e(448).then(n.bind(n,5448)),meta:{layout:_}},{path:"/create_pin",name:"CreatePin",component:()=>Promise.all([n.e(872),n.e(234)]).then(n.bind(n,8374)),meta:{layout:_}},{path:"/wallet_created",name:"WalletCreated",component:()=>n.e(163).then(n.bind(n,4163)),meta:{layout:_}},{path:"/account",name:"Account",component:()=>n.e(41).then(n.bind(n,7041)),meta:{layout:_}},{path:"/import_wallet",name:"ImportWallet",component:()=>Promise.all([n.e(872),n.e(915)]).then(n.bind(n,1231)),meta:{layout:_}}],v=(0,i.aE)({history:(0,i.LA)(),routes:b});var y=v,g=n(5384),w={en:{message:{page_title:"Bro wallet",create_wallet_title:"New Recovery Phrase",create_wallet_confirm_title:"Verify Your Recovery Phrase",create_pin_title:"Name your wallet",wallet_created_title:"Wallet created!",wallet_title:"Wallet page",import_wallet_title:"Import Existing Wallet",create_wallet_agree_label1:"Do not share your recovery phrase with ANYMORE.",create_wallet_agree_label2:"Back up the phrase safely.",create_wallet_agree_checkbox1:"Anymone withyour recovery phrases can have full control over your assets. Plese stay vigilant against phishing attacks at all times.",create_wallet_agree_checkbox2:"You will never be able to restore your account without your recovery phrase.",confirm_label:"Word",confirm_exp:"Fill out the words according to their numbers to verify that you have stored your phrase safely.",create_pin_wallet_name_label:"Wallet name:",create_pin_create_pin_label:"Create pin:",create_pin_confirm_pin_label:"Repeat pin:",create_pin_wallet_name_placeholder:"Name",mnemonic_tab1:"12 words",mnemonic_tab2:"24 words",mnemonic_tab3:"Private Key",import_wallet_exp:"Enter your recovery phrase here to restore your wallet. Or click on any blank and paste the entire phrase.",btn_create_wallet:"Create new wallet",btn_import_wallet:"Import wallet",btn_show:"Show",btn_next:"Next",btn_copy:"Copy to clipboard",btn_copied:"Copied!",btn_join:"Join",btn_biometric:"Turn on biometric security"}}};const C=(0,g.hU)({locale:"en",fallbackLocale:"en",messages:w});var k=C,E=n(595);const A=(0,E.A)(),O=(0,r.Ef)(s),P=(0,a.Ey)();O.use(P),O.use(y),O.use(k),O.provide("i18n",k),O.provide("emitter",A),O.mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(s=0;s<e.length;s++){r=e[s][0],a=e[s][1],o=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(l=!1,o<i&&(i=o));if(l){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{41:"82d9da18",124:"33cfed69",163:"e4b9fe2e",234:"07766e1c",448:"9f45c691",496:"73e5cf18",872:"0a227961",915:"c4e5ec20"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{41:"3d3e1637",124:"0b7cb9fc",163:"3d3e1637",234:"118e4b81",448:"43485a31",496:"65fb4199",915:"62805014"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cosmos-telegram-signer:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var l,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){l=f;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var p=function(t,n){l.onerror=l.onload=null,clearTimeout(d);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,a,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",n.nc&&(i.nonce=n.nc);var l=function(n){if(i.onerror=i.onload=null,"load"===n.type)a();else{var r=n&&n.type,l=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+l+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=l,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=l,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),l=n.p+i;if(t(i,l))return a();e(r,l,null,a,o)}))},a={524:0};n.f.miniCss=function(e,t){var n={41:1,124:1,163:1,234:1,448:1,496:1,915:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],l=r[1],c=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var s=c(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(s)},r=self["webpackChunkcosmos_telegram_signer"]=self["webpackChunkcosmos_telegram_signer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(4342)}));r=n.O(r)})();
//# sourceMappingURL=app.1d8bc21d.js.map