(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(16),r=a.n(o),c=(a(24),a(6)),l=a(7),s=(a(25),a(2));function u(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],o=t[1];function r(){o(!a)}return i.a.createElement("nav",{className:"navbar is-transparent is-fixed-top",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(c.b,{to:"/",className:"navbar-item"},"PWA Tester"),i.a.createElement("a",{tabIndex:"0",role:"button",className:"navbar-burger burger "+(a?"is-active":""),onClick:r,"aria-label":"menu","aria-expanded":a,"data-target":"navbarBasicExample"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+(a?"is-active":"")},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(c.b,{to:"/",onClick:r,className:"navbar-item"},"Home"),i.a.createElement(c.b,{to:"/about",onClick:r,className:"navbar-item"},"About"),i.a.createElement(c.b,{to:"/geolocation",onClick:r,className:"navbar-item"},"Geolocation"),i.a.createElement(c.b,{to:"/notifications",onClick:r,className:"navbar-item"},"Notifications"),i.a.createElement(c.b,{to:"/device/orientation",onClick:r,className:"navbar-item"},"Device Orientation"))))}function m(){return i.a.createElement("section",{className:"section"},"About Page")}var d=i.a.createContext({updateAvailable:!1,offLineReady:!1,registration:null,installPrompt:null});function v(e){var t=e.registration;return t?i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"Details"),i.a.createElement("div",null,"Active State: ",t.active&&t.active.state),i.a.createElement("div",null,"Waiting State: ",t.waiting&&t.waiting.state),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone)&&i.a.createElement("div",null,"Display mode is standalone")):null}function f(){var e=Object(n.useContext)(d),t="serviceWorker"in navigator?"ServiceWorker Supported!":"ServiceWorker NOT Supported!";return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"hero is-primary"},i.a.createElement("div",{className:"hero-body"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"title"},t)))),i.a.createElement(v,{registration:e.registration}))}function p(){var e=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){if(!navigator.geolocation)return Error("Geolocation is not supported.");var e=navigator.geolocation.watchPosition(function(e){i(e.coords)},function(e){console.error(e),i(e)},{timeout:1e4});return function(){navigator.geolocation.clearWatch(e)}},[]),a}();return e instanceof Error?i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"Geolocation is NOT suported!")):i.a.createElement("section",{className:"section"},i.a.createElement("h1",null,"Geolocation is suported!"),i.a.createElement("div",null,"latitude: ",e&&e.latitude),i.a.createElement("div",null,"longitude: ",e&&e.longitude))}var E="4/20/2019, 10:44:49 AM";function b(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",null,"PWA Tester by ",i.a.createElement("a",{href:"https://github.com/corwinm"},"Corwin Marsh"),". The source code is available on"," ",i.a.createElement("a",{href:"https://github.com/corwinm/pwa-tester"},"GitHub")),i.a.createElement("p",null,"Built: ",E)))}function g(e){var t=e.title,a=e.children;return i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"container is-fluid"},i.a.createElement("h1",null,t),i.a.createElement("div",null,a)))}function w(){var e=Object(n.useState)("Notification"in window&&Notification.permission),t=Object(s.a)(e,2),a=t[0],o=t[1];if(!a)return i.a.createElement(g,null,"Notifications are not suported.");if("granted"===a){return i.a.createElement(g,{title:"Test Notification"},i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){var e=new Notification("Hi there!");e.onclick=function(){window.focus(),this.close()},setTimeout(e.close.bind(e),4e3)}},"Click Me!")))}return i.a.createElement(g,{title:"Test Notification"},"denied"===a&&i.a.createElement("div",null,"Permission Denied"),i.a.createElement("div",null,i.a.createElement("button",{onClick:function(){Notification.requestPermission().then(function(e){o(e)})}},"Request Permission")))}var h=a(9),N=a.n(h);function O(){var e=Object(n.useContext)(d),t=Object(n.useState)(!0),a=Object(s.a)(t,2),o=a[0],r=a[1],c=Object(n.useState)(!0),l=Object(s.a)(c,2),u=l[0],m=l[1];if(u&&e.updateAvailable){return i.a.createElement("div",{className:N.a.floatingContainer},i.a.createElement("article",{className:"message is-primary "+N.a.withShadow},i.a.createElement("div",{className:"message-header"},i.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){e.registration.waiting.postMessage("skipWaiting")}},"Update Now"),i.a.createElement("p",null,"New version of the app available!!!"),i.a.createElement("button",{className:"delete is-medium","aria-label":"delete",onClick:function(){return m(!1)}})),i.a.createElement("div",{className:"message-body"},"New version will automatically load after all windows reopened.")))}if(o&&e.installPrompt){return i.a.createElement("div",{className:N.a.floatingContainer},i.a.createElement("article",{className:"message is-primary "+N.a.withShadow},i.a.createElement("div",{className:"message-header"},i.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){e.installPrompt.prompt(),e.installPrompt.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),r(!1)})}},"Install App"),i.a.createElement("p",null,"App available for installation!"),i.a.createElement("button",{className:"delete is-medium","aria-label":"delete",onClick:function(){return r(!1)}})),i.a.createElement("div",{className:"message-body"},"Install the app!")))}return null}var k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){if("serviceWorker"in navigator){if(new URL("/pwa-tester",window.location.href).origin!==window.location.origin)return;var t=function(){var t="".concat("/pwa-tester","/service-worker.js");k?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)};"complete"===document.readyState?t():window.addEventListener("load",t)}}function S(e,t){var a=!1;navigator.serviceWorker.oncontrollerchange=function(){a||(a=!0,window.location.reload())},navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var C=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!1),r=Object(s.a)(o,2),c=r[0],l=r[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),d=m[0],v=m[1],f=Object(n.useState)(null),p=Object(s.a)(f,2),E=p[0],b=p[1];return Object(n.useEffect)(function(){var e=function(e){e.preventDefault(),b(e),console.log("Install prompt available!",e)};return window.addEventListener("beforeinstallprompt",e),function(){window.removeEventListener("beforeinstallprompt",e)}},[]),Object(n.useEffect)(function(){var e=!1;return j({onUpdate:function(t){e||(console.log("onUpdate called! New content after windows closed!",t),v(t),i(!0))},onSuccess:function(t){e||(console.log("onSuccess called! Offline ready!",t),v(t),l(!0))}}),console.log("serviceWorker.register called"),function(){console.log("ignore set to true"),e=!0}},[]),Object(n.useEffect)(function(){if("serviceWorker"in navigator){var e=!1;return navigator.serviceWorker.getRegistration().then(function(t){e||(console.log("Current sw registration",t),v(t),l(!!t),i(t&&!!t.waiting))}),function(){e=!0}}},[]),{updateAvailable:a,offLineReady:c,registration:d,installPrompt:E}};function y(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)(function(){return window.addEventListener("deviceorientation",function(e){console.log(e),o(e)},!0),function(){window.removeEventListener("deviceorientation")}},[]),i.a.createElement(g,{title:"Device Orientation"},a?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"Alpha: ",a.alpha),i.a.createElement("div",null,"Beta: ",a.beta),i.a.createElement("div",null,"Gamma: ",a.gamma),i.a.createElement("div",null,"Compass: ",a.webkitCompassHeading)):i.a.createElement("div",null,"No data"))}function A(){return window.DeviceOrientationEvent?i.a.createElement(y,null):i.a.createElement(g,{title:"Device Orientation"},i.a.createElement("div",null,"Not supported"))}var W=function(){var e=C();return i.a.createElement("div",{className:"App"},i.a.createElement(d.Provider,{value:e},i.a.createElement(c.a,{basename:"/pwa-tester"},i.a.createElement(u,null),i.a.createElement(l.a,{exact:!0,path:"/",component:f}),i.a.createElement(l.a,{path:"/about",component:m}),i.a.createElement(l.a,{path:"/geolocation",component:p}),i.a.createElement(l.a,{path:"/notifications",component:w}),i.a.createElement(l.a,{path:"/device/orientation",component:A}),i.a.createElement(b,null),i.a.createElement(O,null))))};r.a.render(i.a.createElement(W,null),document.getElementById("root"))},9:function(e,t,a){e.exports={floatingContainer:"AppUpdate_floatingContainer__1aESH",withShadow:"AppUpdate_withShadow__3Y6Tl"}}},[[19,1,2]]]);
//# sourceMappingURL=main.c0387cf1.chunk.js.map