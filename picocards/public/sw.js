if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const t=e=>s(e,c),o={module:{uri:c},exports:r,require:t};i[c]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/framework-ed075df0e0b45174.js",revision:"ed075df0e0b45174"},{url:"/_next/static/chunks/main-20e9e6a32c625538.js",revision:"20e9e6a32c625538"},{url:"/_next/static/chunks/pages/_app-1a336683ff51f334.js",revision:"1a336683ff51f334"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-33c578d5f60dad62.js",revision:"33c578d5f60dad62"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/ab44ce7add5c3d11.css",revision:"ab44ce7add5c3d11"},{url:"/_next/static/hHkyuxtOVP-4KHEr3cjGr/_buildManifest.js",revision:"7c60e7620012801987102b65a1ecb1c3"},{url:"/_next/static/hHkyuxtOVP-4KHEr3cjGr/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/RPF.png",revision:"9ad5658622c946fb1e124ddc4fd592e8"},{url:"/images/assistive.PNG",revision:"17ed2b02f7f1b97297c4bb4e3fc82c88"},{url:"/images/bee.PNG",revision:"22567fa5b8191bbeeaa258905ce09bf7"},{url:"/images/blink-rgb.png",revision:"4c3acb0c7595ca59571da1cf19d4f20b"},{url:"/images/blink-wait.png",revision:"e9e93a5f520bdb29bb93e3a559405df6"},{url:"/images/button-switch.png",revision:"be95196752d32206a3c7903e38f9c024"},{url:"/images/button_led.png",revision:"66c6d5517ba7560c95ccc512f60bd5a7"},{url:"/images/candle.PNG",revision:"7919e95f78db5e25a05c86e79793542a"},{url:"/images/dj.png",revision:"2002db09ff638dceb0f4a25b1b238b1f"},{url:"/images/foil-switch.png",revision:"2213a8d9371998e433263d5f9a395ca6"},{url:"/images/foil-tape.png",revision:"560f0c0335d8638c8a73c9b041097f37"},{url:"/images/icon_512.png",revision:"7383290bf283286cc7bf34b753b47683"},{url:"/images/jumper-wires-rgb.png",revision:"afa6d7068b837a0fb1edf775c634f009"},{url:"/images/jumper-wires.jpg",revision:"3a85c461b4cd54f15bcc7ef50fdb6ff3"},{url:"/images/keyboard.png",revision:"61df1c1128d480d22f507d563634466c"},{url:"/images/led-blink-static.png",revision:"3fd3afbba56819ff3b7ee9aa5a549344"},{url:"/images/led-off.png",revision:"eb9b31c8b0cac20203f6c41e625522f7"},{url:"/images/led-on.png",revision:"495754cc198780a442f809e2cdb8c54b"},{url:"/images/led-pulse-static.png",revision:"a0e01b4955f27970e2453931601bad29"},{url:"/images/maskable_icon.png",revision:"5eba82c820a3e129fbbed93e783e987f"},{url:"/images/midi-c.png",revision:"0619d3e969989264756073f3841ace39"},{url:"/images/mood-emoji.png",revision:"fd1c68dcd2b3b4f151d74c88a95b8cef"},{url:"/images/mood-indicator.png",revision:"c69858a88e3b2ad3c6d9289f0382a795"},{url:"/images/mood-lamp.gif",revision:"483b086d719155f0051d4ea7c328577b"},{url:"/images/multiple-button-wiring.png",revision:"b87fe05d89c600afc95e388a7bc06900"},{url:"/images/multiple-single-leds.png",revision:"27678e18e9c1d6a04204639097786f69"},{url:"/images/note-c.png",revision:"e4d9624508a6591c26199a27a37a55e1"},{url:"/images/option-button.png",revision:"407df624998b92ac27c39684a0ed99a2"},{url:"/images/pico-top-plug.png",revision:"043cc8c3cd4e1c260ace543a42fbe25c"},{url:"/images/play-a-tune.png",revision:"121f24391ded7651516b475fa66ac501"},{url:"/images/plug-in-pico.png",revision:"6a66455ea4e22a9603fc24365f87e47c"},{url:"/images/pot-diagram.png",revision:"b99b47ee6e95ae412f8edfe9fb8b5892"},{url:"/images/pot.png",revision:"40fee683d25b0ca235f4216740e9e551"},{url:"/images/rgb-led-diagram.png",revision:"7759bf1f82a5a9b909d766f0d0443240"},{url:"/images/rgb-led-legs.png",revision:"11bbbb878aa1084eb98c40dd1c495f13"},{url:"/images/rgb-led-resistors.png",revision:"3488cee91500ac0672500706b566b312"},{url:"/images/saber.PNG",revision:"56931846c1fb006c398dd3ed7c1b9b64"},{url:"/images/search-picozero.PNG",revision:"e91c69d1012ccd0c7f20535eed9ab8c9"},{url:"/images/setup-led.png",revision:"c4481d4fe0e1b91b07804d117df31243"},{url:"/images/single-button-wiring.png",revision:"467ff85a6af0a9131cf5b4c83ad7a44b"},{url:"/images/single-buzzer-wiring.png",revision:"04ef64ed5c77ea36915ee2373fd32e54"},{url:"/images/sound-with-buttons.png",revision:"39382616aed3ffd184c97ad74e3bc571"},{url:"/images/sound-with-pot.png",revision:"4746efaa529bd340952830424011abb4"},{url:"/images/soundeffect.png",revision:"cd013bf5330d54561b5dc9c821809ca1"},{url:"/images/stereo-buzzer-wiring.png",revision:"0161cb002de4c40bf4c52708bfd34ba5"},{url:"/images/stopBuzzer.png",revision:"cb81a320f115a9b04d2969ec2076da80"},{url:"/images/switch-wiring.png",revision:"7652667634bd96d7ee15387b8d37017e"},{url:"/images/tab.png",revision:"0427e0f011f79bba20b56e7905befd09"},{url:"/images/tools-manage-packages.png",revision:"f7d90f5e00b34374010863c88700c817"},{url:"/images/toy-switch.png",revision:"fe043036c53753962f3c61218b727d37"},{url:"/images/toy-token.png",revision:"fef5f224fa834c04bb44b1998c8f7353"},{url:"/images/twist-leg-rgb.png",revision:"7f788dc4c1d0ca703c3f20ccec4ae620"},{url:"/images/twist-leg.jpg",revision:"06955a493c09f9b45c5d7bc19c0dc385"},{url:"/images/wicked.png",revision:"64f360837a906be1bc12c368fba8b061"},{url:"/images/you-will-need.png",revision:"73ffc4d2c3bad660df09d6c6d544d960"},{url:"/maker-card.css",revision:"50236789524bc7031bf2576fffc39750"},{url:"/manifest.json",revision:"eb27bc528498d8d187447a40b8b3cb3f"},{url:"/mc-style.css",revision:"cd7572a9a875889560d44622aa3d7664"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
