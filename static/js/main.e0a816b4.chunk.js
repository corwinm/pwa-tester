(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},32:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),o=a.n(i),l=(a(31),a(8)),c=a(6),s=(a(32),a(1)),u=a(11),m=a.n(u),d=a(18);function v(){var e=function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.share){e.next=12;break}return e.prev=1,e.next=4,navigator.share({title:"PWA Tester",text:"PWA Tester",url:window.location.href});case 4:console.log("Successful share."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Error sharing:",e.t0);case 10:e.next=13;break;case 12:console.log("Share not supported.");case 13:case"end":return e.stop()}},e,null,[[1,7]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("button",{className:"button is-primary",onClick:e},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-share"})),r.a.createElement("span",null,"Share"))}function p(e){var t=e.children;return r.a.createElement("nav",{className:"navbar is-transparent is-fixed-top",role:"navigation","aria-label":"main navigation"},t)}function E(e){var t=e.children,a=e.menuOpen;return r.a.createElement("div",{className:"navbar-menu "+(a?"is-active":"")},t)}function f(e){var t=e.menuOpen,a=e.toggleMenu;return r.a.createElement("a",{tabIndex:"0",role:"button",className:"navbar-burger burger "+(t?"is-active":""),onClick:a,"aria-label":"menu","aria-expanded":t},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))}function g(e){var t=e.toggleMenu;function a(e){return r.a.createElement(l.b,Object.assign({},e,{exact:!0,onClick:t,className:"navbar-item",activeClassName:"has-text-link"}))}return r.a.createElement("div",{className:"navbar-start"},r.a.createElement(a,{to:"/"},"Home"),r.a.createElement(a,{to:"/about"},"About"),r.a.createElement(a,{to:"/geolocation"},"Geolocation"),r.a.createElement(a,{to:"/notifications"},"Notifications"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{className:"navbar-link",tabIndex:"0"},"Device"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement(a,{to:"/device/orientation"},"Orientation"),r.a.createElement(a,{to:"/device/motion"},"Motion"))))}function b(){return r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(v,null))))}function h(e){var t=e.onClick;return navigator.standalone?r.a.createElement("a",{className:"navbar-item",tabIndex:"0",onClick:t},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-arrow-left"}))):null}var w=Object(c.d)(function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],o=a[1];function c(){o(!i)}return r.a.createElement(p,null,r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(h,{onClick:e.history.goBack}),r.a.createElement(l.b,{to:"/",className:"navbar-item"},"PWA Tester"),r.a.createElement(f,{menuOpen:i,toggleMenu:c})),r.a.createElement(E,{menuOpen:i},r.a.createElement(g,{toggleMenu:c}),r.a.createElement(b,null)))}),N=a(21),O=a(22),k=a(24),j=a(23),S=a(25),y=function(e){function t(e){var a;return Object(N.a)(this,t),(a=Object(k.a)(this,Object(j.a)(t).call(this,e))).state={hasError:!1,message:""},a}return Object(S.a)(t,e),Object(O.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Something went wrong."),r.a.createElement("p",null,this.state.message)):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,message:e.message}}}]),t}(r.a.Component);function C(e){var t=e.title,a=e.children;return r.a.createElement(y,null,r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container is-fluid"},r.a.createElement("h1",{className:"title has-text-white"},t),r.a.createElement("div",null,a))))}function x(){return r.a.createElement(C,{title:"About Page"},r.a.createElement("div",null,"This is the about page."))}var A=r.a.createContext({updateAvailable:!1,offLineReady:!1,registration:null,installPrompt:null});function W(e){var t=e.registration;return r.a.createElement(C,{title:"Features"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement(P,{description:"Geolocation",supported:navigator.geolocation}),r.a.createElement(P,{description:"Notifications",supported:"Notification"in window}),r.a.createElement(P,{description:"Payments",supported:t&&t.paymentManager})),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement(P,{description:"Motion",supported:window.DeviceMotionEvent}),r.a.createElement(P,{description:"Orientation",supported:window.DeviceOrientationEvent}),r.a.createElement(P,{description:"Web Share",supported:navigator.share})))}function P(e){var t=e.description,a=e.supported;return null===a?r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-primary"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Loading..."))):a?r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-success"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Supported"))):r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-danger"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Not Supported")))}function M(e){var t=e.registration;return t?r.a.createElement(C,{title:"Details"},r.a.createElement("div",null,"Active State: ",t.active&&t.active.state),r.a.createElement("div",null,"Waiting State: ",t.waiting&&t.waiting.state),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone)&&r.a.createElement("div",null,"Display mode is standalone")):null}function D(){var e=Object(n.useContext)(A),t="serviceWorker"in navigator?"ServiceWorker Supported!":"ServiceWorker NOT Supported!";return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-primary"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},t)))),r.a.createElement(M,{registration:e.registration}),r.a.createElement(W,{registration:e.registration}))}function T(){var e=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){if(!navigator.geolocation)return Error("Geolocation is not supported.");var e=navigator.geolocation.watchPosition(function(e){r(e.coords)},function(e){console.error(e),r(e)},{timeout:1e4});return function(){navigator.geolocation.clearWatch(e)}},[]),a}();return e instanceof Error?r.a.createElement(C,{title:"Geolocation is NOT suported!"}):r.a.createElement(C,{title:"Geolocation is suported!"},r.a.createElement("div",null,"latitude: ",e&&e.latitude),r.a.createElement("div",null,"longitude: ",e&&e.longitude))}var L="4/26/2019, 6:30:02 AM";function U(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"PWA Tester by ",r.a.createElement("a",{href:"https://github.com/corwinm"},"Corwin Marsh"),". The source code is available on"," ",r.a.createElement("a",{href:"https://github.com/corwinm/pwa-tester"}," ",r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),"GitHub")),r.a.createElement("p",null,"Built: ",L)))}function G(){var e=Object(n.useState)("Notification"in window&&Notification.permission),t=Object(s.a)(e,2),a=t[0],i=t[1];if(!a)return r.a.createElement(C,null,"Notifications are not suported.");if("granted"===a){return r.a.createElement(C,{title:"Test Notification"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=new Notification("Hi there!");e.onclick=function(){window.focus(),this.close()},setTimeout(e.close.bind(e),4e3)}},"Click Me!")))}return r.a.createElement(C,{title:"Test Notification"},"denied"===a&&r.a.createElement("div",null,"Permission Denied"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){Notification.requestPermission().then(function(e){i(e)})}},"Request Permission")))}var H=a(9),I=a.n(H);function R(){var e=Object(n.useContext)(A),t=Object(n.useState)(!0),a=Object(s.a)(t,2),i=a[0],o=a[1],l=Object(n.useState)(!0),c=Object(s.a)(l,2),u=c[0],m=c[1];if(u&&e.updateAvailable){return r.a.createElement("div",{className:I.a.floatingContainer},r.a.createElement("article",{className:"message is-primary "+I.a.withShadow},r.a.createElement("div",{className:"message-header"},r.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){e.registration.waiting.postMessage("skipWaiting")}},"Update Now"),r.a.createElement("p",null,"New version of the app available!!!"),r.a.createElement("button",{className:"delete is-medium","aria-label":"delete",onClick:function(){return m(!1)}})),r.a.createElement("div",{className:"message-body"},"New version will automatically load after all windows reopened.")))}if(i&&e.installPrompt){return r.a.createElement("div",{className:I.a.floatingContainer},r.a.createElement("article",{className:"message is-primary "+I.a.withShadow},r.a.createElement("div",{className:"message-header"},r.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){e.installPrompt.prompt(),e.installPrompt.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o(!1)})}},"Install App"),r.a.createElement("p",null,"App available for installation!"),r.a.createElement("button",{className:"delete is-medium","aria-label":"delete",onClick:function(){return o(!1)}})),r.a.createElement("div",{className:"message-body"},"Install the app!")))}return null}var F=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){if("serviceWorker"in navigator){if(new URL("/pwa-tester",window.location.href).origin!==window.location.origin)return;var t=function(){var t="".concat("/pwa-tester","/service-worker.js");F?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):B(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):B(t,e)};"complete"===document.readyState?t():window.addEventListener("load",t)}}function B(e,t){var a=!1;navigator.serviceWorker.oncontrollerchange=function(){a||(a=!0,window.location.reload())},navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var q=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),l=o[0],c=o[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),d=m[0],v=m[1],p=Object(n.useState)(null),E=Object(s.a)(p,2),f=E[0],g=E[1];return Object(n.useEffect)(function(){var e=function(e){e.preventDefault(),g(e),console.log("Install prompt available!",e)};return window.addEventListener("beforeinstallprompt",e),function(){window.removeEventListener("beforeinstallprompt",e)}},[]),Object(n.useEffect)(function(){var e=!1;return _({onUpdate:function(t){e||(console.log("onUpdate called! New content after windows closed!",t),v(t),r(!0))},onSuccess:function(t){e||(console.log("onSuccess called! Offline ready!",t),v(t),c(!0))}}),console.log("serviceWorker.register called"),function(){console.log("ignore set to true"),e=!0}},[]),Object(n.useEffect)(function(){if("serviceWorker"in navigator){var e=!1;return navigator.serviceWorker.getRegistration().then(function(t){e||(console.log("Current sw registration",t),v(t),c(!!t),r(t&&!!t.waiting))}),function(){e=!0}}v(void 0)},[]),{updateAvailable:a,offLineReady:l,registration:d,installPrompt:f}};function J(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){var e=function(e){console.log(e),i(e)};return window.addEventListener("deviceorientation",e,!0),function(){window.removeEventListener("deviceorientation",e)}},[]),r.a.createElement(C,{title:"Device Orientation"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Alpha: ",a.alpha),r.a.createElement("div",null,"Beta: ",a.beta),r.a.createElement("div",null,"Gamma: ",a.gamma),r.a.createElement("div",null,"Compass: ",a.webkitCompassHeading)):r.a.createElement("div",null,"No data"))}function Y(){return window.DeviceOrientationEvent?r.a.createElement(J,null):r.a.createElement(C,{title:"Device Orientation"},r.a.createElement("div",null,"Not supported"))}function z(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){var e=function(e){console.log(e),i(e)};return window.addEventListener("devicemotion",e,!0),function(){window.removeEventListener("devicemotion",e)}},[]),r.a.createElement(C,{title:"Device Motion"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Acceleration:"),r.a.createElement("div",null,"X: ",a.acceleration.x),r.a.createElement("div",null,"Y: ",a.acceleration.y),r.a.createElement("div",null,"Z: ",a.acceleration.z)):r.a.createElement("div",null,"No data"))}function X(){return window.DeviceMotionEvent?r.a.createElement(z,null):r.a.createElement(C,{title:"Device Motion"},r.a.createElement("div",null,"Not supported"))}var Z=function(){var e=q();return r.a.createElement("div",{className:"App"},r.a.createElement(A.Provider,{value:e},r.a.createElement(l.a,{basename:"/pwa-tester"},r.a.createElement(w,null),r.a.createElement(c.a,{exact:!0,path:"/",component:D}),r.a.createElement(c.a,{path:"/about",component:x}),r.a.createElement(c.a,{path:"/geolocation",component:T}),r.a.createElement(c.a,{path:"/notifications",component:G}),r.a.createElement(c.a,{path:"/device/orientation",component:Y}),r.a.createElement(c.a,{path:"/device/motion",component:X}),r.a.createElement(U,null),r.a.createElement(R,null))))};o.a.render(r.a.createElement(Z,null),document.getElementById("root"))},9:function(e,t,a){e.exports={floatingContainer:"AppUpdate_floatingContainer__1aESH",withShadow:"AppUpdate_withShadow__3Y6Tl"}}},[[26,1,2]]]);
//# sourceMappingURL=main.e0a816b4.chunk.js.map