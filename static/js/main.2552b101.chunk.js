(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(16),r=a.n(o),c=(a(24),a(2)),l=a(6),s=a(7);a(25);function u(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],o=t[1];function r(){o(!a)}return i.a.createElement("nav",{className:"navbar is-transparent is-fixed-top",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(l.b,{to:"/",className:"navbar-item"},"PWA Tester"),i.a.createElement("a",{tabIndex:"0",role:"button",className:"navbar-burger burger "+(a?"is-active":""),onClick:r,"aria-label":"menu","aria-expanded":a,"data-target":"navbarBasicExample"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+(a?"is-active":"")},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(l.b,{to:"/",onClick:r,className:"navbar-item"},"Home"),i.a.createElement(l.b,{to:"/about",onClick:r,className:"navbar-item"},"About"),i.a.createElement(l.b,{to:"/geolocation",onClick:r,className:"navbar-item"},"Geolocation"),i.a.createElement(l.b,{to:"/notifications",onClick:r,className:"navbar-item"},"Notifications"))))}function m(){return i.a.createElement("section",{className:"section"},"About Page")}var d=i.a.createContext({updateAvailable:!1,offLineReady:!1,registration:null,installPrompt:null});function v(e){var t=e.registration;return t?i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"Details"),i.a.createElement("div",null,"Active State: ",t.active&&t.active.state),i.a.createElement("div",null,"Waiting State: ",t.waiting&&t.waiting.state)):null}function f(){var e=Object(n.useContext)(d),t="serviceWorker"in navigator?"ServiceWorker Supported!":"ServiceWorker NOT Supported!";return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"hero is-primary"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},t)))),i.a.createElement(v,{registration:e.registration}))}function p(){var e=function(){var e=Object(n.useState)(void 0),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){if(!navigator.geolocation)return Error("Geolocation is not supported.");var e=navigator.geolocation.watchPosition(function(e){i(e.coords)},function(e){console.error(e),i(e)},{timeout:1e4});return function(){navigator.geolocation.clearWatch(e)}},[]),a}();return e instanceof Error?i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"Geolocation is NOT suported!")):i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"Geolocation is suported!"),i.a.createElement("div",null,"latitude: ",e&&e.latitude),i.a.createElement("div",null,"longitude: ",e&&e.longitude))}var E="4/14/2019, 3:22:43 PM";function b(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,i.a.createElement("strong",null,"PWA Tester")," by"," ",i.a.createElement("a",{href:"https://github.com/corwinm"},"Corwin Marsh"),". The source code is available on"," ",i.a.createElement("a",{href:"https://github.com/corwinm/pwa-tester"},"GitHub")),i.a.createElement("p",null,"Built: ",E)))}function g(){var e=Object(n.useState)("Notification"in window&&Notification.permission),t=Object(c.a)(e,2),a=t[0],o=t[1];if(!a)return i.a.createElement("div",{className:"section"},"Notifications are not suported.");if("granted"===a){return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"container is-fluid"},i.a.createElement("h1",null,"Test Notification"),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){var e=new Notification("Hi there!");e.onclick=function(){window.focus(),this.close()},setTimeout(e.close.bind(e),4e3)}},"Click Me!"))))}return i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container is-fluid"},i.a.createElement("h1",null,"Test Notification"),"denied"===a&&i.a.createElement("div",null,"Permission Denied"),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){Notification.requestPermission().then(function(e){o(e)})}},"Request Permission"))))}var w=a(9),h=a.n(w);function N(){var e=Object(n.useContext)(d);if(e.installPrompt)return i.a.createElement("div",{className:h.a.floatingContainer},i.a.createElement("article",{className:"message is-primary "+h.a.withShadow},i.a.createElement("div",{className:"message-header"},i.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:e.installPrompt.prompt},"Install App"),i.a.createElement("p",null,"App available for installation!"),i.a.createElement("button",{className:"delete is-medium","aria-label":"delete"})),i.a.createElement("div",{className:"message-body"},"Install the app!")));if(!e.updateAvailable)return null;return i.a.createElement("div",{className:h.a.floatingContainer},i.a.createElement("article",{className:"message is-primary "+h.a.withShadow},i.a.createElement("div",{className:"message-header"},i.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){e.registration.waiting.postMessage("skipWaiting")}},"Update Now"),i.a.createElement("p",null,"New version of the app available!!!"),i.a.createElement("button",{className:"delete is-medium","aria-label":"delete"})),i.a.createElement("div",{className:"message-body"},"New version will automatically load after all windows reopened.")))}var k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){if("serviceWorker"in navigator){if(new URL("/pwa-tester",window.location.href).origin!==window.location.origin)return;var t=function(){var t="".concat("/pwa-tester","/service-worker.js");k?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)};"complete"===document.readyState?t():window.addEventListener("load",t)}}function S(e,t){var a=!1;navigator.serviceWorker.oncontrollerchange=function(){a||(a=!0,window.location.reload())},navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var j=function(){var e=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!1),r=Object(c.a)(o,2),l=r[0],s=r[1],u=Object(n.useState)(null),m=Object(c.a)(u,2),d=m[0],v=m[1],f=Object(n.useState)(null),p=Object(c.a)(f,2),E=p[0],b=p[1];return Object(n.useEffect)(function(){var e=function(e){e.preventDefault(),b(e),console.log("Install prompt available!",e)};return window.addEventListener("beforeinstallprompt",e),function(){window.removeEventListener("beforeinstallprompt",e)}},[]),Object(n.useEffect)(function(){var e=!1;return O({onUpdate:function(t){e||(console.log("onUpdate called! New content after windows closed!",t),v(t),i(!0))},onSuccess:function(t){e||(console.log("onSuccess called! Offline ready!",t),v(t),s(!0))}}),console.log("serviceWorker.register called"),function(){console.log("ignore set to true"),e=!0}},[]),Object(n.useEffect)(function(){var e=!1;return navigator.serviceWorker.getRegistration().then(function(t){e||(console.log("Current sw registration",t),v(t),s(!!t),i(t&&!!t.waiting))}),function(){e=!0}},[]),{updateAvailable:a,offLineReady:l,registration:d,installPrompt:E}}();return i.a.createElement("div",{className:"App"},i.a.createElement(d.Provider,{value:e},i.a.createElement(l.a,{basename:"/pwa-tester"},i.a.createElement(u,null),i.a.createElement(s.a,{exact:!0,path:"/",component:f}),i.a.createElement(s.a,{path:"/about",component:m}),i.a.createElement(s.a,{path:"/geolocation",component:p}),i.a.createElement(s.a,{path:"/notifications",component:g}),i.a.createElement(b,null),i.a.createElement(N,null))))};r.a.render(i.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports={floatingContainer:"AppUpdate_floatingContainer__1aESH",withShadow:"AppUpdate_withShadow__3Y6Tl"}}},[[19,1,2]]]);
//# sourceMappingURL=main.2552b101.chunk.js.map