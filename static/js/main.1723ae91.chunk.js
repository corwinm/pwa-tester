(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={floatingContainer:"AppUpdate_floatingContainer__1aESH",withShadow:"AppUpdate_withShadow__3Y6Tl"}},26:function(e,t,a){e.exports=a(42)},31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),c=(a(31),a(10)),l=a(7),s=(a(32),a(1)),u=a(6),m=a.n(u),d=a(8);function v(){var e=function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.share){e.next=12;break}return e.prev=1,e.next=4,navigator.share({title:"PWA Tester",text:"PWA Tester",url:window.location.href});case 4:console.log("Successful share."),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("Error sharing:",e.t0);case 10:e.next=13;break;case 12:console.log("Share not supported.");case 13:case"end":return e.stop()}},e,null,[[1,7]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("button",{className:"button is-primary",onClick:e},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-share"})),r.a.createElement("span",null,"Share"))}var p=r.a.createContext({updateAvailable:!1,offLineReady:!1,registration:null,installPrompt:null});function f(){var e=Object(n.useContext)(p),t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],o=a[1];if(!e.registration)return null;if(e.updateAvailable){return r.a.createElement("button",{className:"button is-info",onClick:function(){e.registration.waiting.postMessage("skipWaiting")}},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-sync"})),r.a.createElement("span",null,"Update Now"))}function c(){return(c=Object(d.a)(m.a.mark(function t(){var a;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,e.registration.update();case 3:a=t.sent,console.log(a),o(!1);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}return r.a.createElement("button",{className:"button is-info",onClick:function(){return c.apply(this,arguments)}},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-sync"+(i?" fa-spin":"")})),r.a.createElement("span",null,i?"Updating":"Check for Update"))}function E(e){var t=e.children;return r.a.createElement("nav",{className:"navbar is-transparent is-fixed-top notch-inset-item",role:"navigation","aria-label":"main navigation"},t)}function g(e){var t=e.children,a=e.menuOpen;return r.a.createElement("div",{className:"navbar-menu "+(a?"is-active":"")},t)}function b(e){var t=e.menuOpen,a=e.toggleMenu;return r.a.createElement("a",{tabIndex:"0",role:"button",className:"navbar-burger burger "+(t?"is-active":""),onClick:a,"aria-label":"menu","aria-expanded":t},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))}function h(e){var t=e.toggleMenu;function a(e){return r.a.createElement(c.b,Object.assign({},e,{exact:!0,onClick:t,className:"navbar-item",activeClassName:"has-text-link"}))}return r.a.createElement("div",{className:"navbar-start"},r.a.createElement(a,{to:"/"},"Home"),r.a.createElement(a,{to:"/geolocation"},"Geolocation"),r.a.createElement(a,{to:"/notifications"},"Notifications"),r.a.createElement(a,{to:"/camera"},"Camera"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{className:"navbar-link",tabIndex:"0"},"Device"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement(a,{to:"/device/orientation"},"Orientation"),r.a.createElement(a,{to:"/device/motion"},"Motion"))))}function w(){return r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(f,null),r.a.createElement(v,null))))}function N(e){var t=e.onClick;return navigator.standalone?r.a.createElement("a",{className:"navbar-item",tabIndex:"0",onClick:t},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-arrow-left"}))):null}var O=Object(l.d)(function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),i=a[0],o=a[1];function l(){o(!i)}return r.a.createElement(E,null,r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(N,{onClick:e.history.goBack}),r.a.createElement(c.b,{to:"/",className:"navbar-item"},"PWA Tester"),r.a.createElement(b,{menuOpen:i,toggleMenu:l})),r.a.createElement(g,{menuOpen:i},r.a.createElement(h,{toggleMenu:l}),r.a.createElement(w,null)))}),k=a(21),j=a(22),C=a(24),y=a(23),S=a(25),x=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(C.a)(this,Object(y.a)(t).call(this,e))).state={hasError:!1,message:"",name:""},a}return Object(S.a)(t,e),Object(j.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Something went wrong."),r.a.createElement("p",null,this.state.name),r.a.createElement("p",null,this.state.message),r.a.createElement("p",null,r.a.createElement("button",{className:"button",onClick:function(){return window.location.reload()}},"Reload Page"))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,message:e.message,name:e.name}}}]),t}(r.a.Component);function A(e){var t=e.title,a=e.children;return r.a.createElement(x,null,r.a.createElement("div",{className:"notch-inset-item"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container is-fluid"},r.a.createElement("h1",{className:"title has-text-white"},t),r.a.createElement("div",null,a)))))}function T(){return r.a.createElement(A,{title:"About Page"},r.a.createElement("div",null,"This is the about page."))}function W(e){var t=e.registration;return r.a.createElement(A,{title:"Features"},r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement(L,{description:"Geolocation",supported:navigator.geolocation}),r.a.createElement(L,{description:"Notifications",supported:"Notification"in window}),r.a.createElement(L,{description:"Payments",supported:t&&t.paymentManager})),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement(L,{description:"Motion",supported:window.DeviceMotionEvent}),r.a.createElement(L,{description:"Orientation",supported:window.DeviceOrientationEvent}),r.a.createElement(L,{description:"Vibration",supported:navigator.vibrate})),r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement(L,{description:"Online Status",supported:"onLine"in navigator}),r.a.createElement(L,{description:"Clipboard",supported:navigator.clipboard}),r.a.createElement(L,{description:"Web Share",supported:navigator.share})))}function L(e){var t=e.description,a=e.supported;return null===a?r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-primary"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Loading..."))):a?r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-success"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Supported"))):r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-danger"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Not Supported")))}function P(e){var t=e.registration;return t?r.a.createElement(A,{title:"Details"},r.a.createElement("div",null,"Active State: ",t.active&&t.active.state),r.a.createElement("div",null,"Waiting State: ",t.waiting&&t.waiting.state),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone)&&r.a.createElement("div",null,"Display mode is standalone")):null}function M(){var e=Object(n.useContext)(p),t="serviceWorker"in navigator?"ServiceWorker Supported!":"ServiceWorker NOT Supported!";return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-primary notch-inset-item"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){alert("This is going to be something really great someday!")}},"Call to Action!")))),r.a.createElement(P,{registration:e.registration}),r.a.createElement(W,{registration:e.registration}))}function D(){var e=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){if(!navigator.geolocation)return Error("Geolocation is not supported.");var e=navigator.geolocation.watchPosition(function(e){r(e.coords)},function(e){console.error(e),r(e)},{timeout:1e4});return function(){navigator.geolocation.clearWatch(e)}},[]),a}();return e instanceof Error?r.a.createElement(A,{title:"Geolocation is NOT suported!"}):r.a.createElement(A,{title:"Geolocation is suported!"},r.a.createElement("div",null,"latitude: ",e&&e.latitude),r.a.createElement("div",null,"longitude: ",e&&e.longitude))}var U="5/4/2019, 7:41:08 AM";function R(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"PWA Tester by ",r.a.createElement("a",{href:"https://github.com/corwinm"},"Corwin Marsh"),". The source code is available on"," ",r.a.createElement("a",{href:"https://github.com/corwinm/pwa-tester"}," ",r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),"GitHub")),r.a.createElement("p",null,"Built: ",U)))}function I(){var e=Object(n.useState)("Notification"in window&&Notification.permission),t=Object(s.a)(e,2),a=t[0],i=t[1];if(!a)return r.a.createElement(A,null,"Notifications are not suported.");if("granted"===a){return r.a.createElement(A,{title:"Test Notification"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=new Notification("Hi there!");e.onclick=function(){window.focus(),this.close()},setTimeout(e.close.bind(e),4e3)}},"Click Me!")))}return r.a.createElement(A,{title:"Test Notification"},"denied"===a&&r.a.createElement("div",null,"Permission Denied"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){Notification.requestPermission().then(function(e){i(e)})}},"Request Permission")))}var B=a(13),G=a.n(B);function H(e){var t=e.title,a=e.message,n=void 0===a?"":a,i=e.actionText,o=e.deleteClick,c=e.actionClick;return r.a.createElement("div",{className:G.a.floatingContainer+" notch-inset"},r.a.createElement("article",{className:"message is-primary "+G.a.withShadow},r.a.createElement("div",{className:"message-header"},r.a.createElement("p",null,t),r.a.createElement("button",{className:"delete is-medium","aria-label":"delete",onClick:o})),r.a.createElement("div",{className:"message-body"},n,r.a.createElement("p",null,r.a.createElement("button",{className:"button is-primary is-fullwidth is-outlined",onClick:c},i)))))}function F(){var e=Object(n.useContext)(p),t=Object(n.useState)(!0),a=Object(s.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(!0),l=Object(s.a)(c,2),u=l[0],m=l[1];if(u&&e.updateAvailable){return r.a.createElement(H,{title:"New version of the app available!!!",actionText:"Update Now",message:r.a.createElement("p",null,"New version will automatically load next visit after all open windows are closed."),deleteClick:function(){return m(!1)},actionClick:function(){e.registration.waiting.postMessage("skipWaiting")}})}if(i&&e.installPrompt){return r.a.createElement(H,{title:"App available for installation!",actionText:"Install App",deleteClick:function(){return o(!1)},actionClick:function(){e.installPrompt.prompt(),e.installPrompt.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o(!1)})}})}return null}var V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){if("serviceWorker"in navigator){if(new URL("/pwa-tester",window.location.href).origin!==window.location.origin)return;var t=function(){var t="".concat("/pwa-tester","/service-worker.js");V?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):q(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):q(t,e)};"complete"===document.readyState?t():window.addEventListener("load",t)}}function q(e,t){var a=!1;navigator.serviceWorker.oncontrollerchange=function(){a||(a=!0,window.location.reload())},navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var J=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),o=Object(s.a)(i,2),c=o[0],l=o[1],u=Object(n.useState)(null),m=Object(s.a)(u,2),d=m[0],v=m[1],p=Object(n.useState)(null),f=Object(s.a)(p,2),E=f[0],g=f[1];return Object(n.useEffect)(function(){var e=function(e){e.preventDefault(),g(e),console.log("Install prompt available!",e)};return window.addEventListener("beforeinstallprompt",e),function(){window.removeEventListener("beforeinstallprompt",e)}},[]),Object(n.useEffect)(function(){var e=!1;return _({onUpdate:function(t){e||(console.log("onUpdate called! New content after windows closed!",t),v(t),r(!0))},onSuccess:function(t){e||(console.log("onSuccess called! Offline ready!",t),v(t),l(!0))}}),console.log("serviceWorker.register called"),function(){console.log("ignore set to true"),e=!0}},[]),Object(n.useEffect)(function(){if("serviceWorker"in navigator){var e=!1;return navigator.serviceWorker.getRegistration().then(function(t){e||(console.log("Current sw registration",t),v(t),l(!!t),r(t&&!!t.waiting))}),function(){e=!0}}v(void 0)},[]),{updateAvailable:a,offLineReady:c,registration:d,installPrompt:E}};function Y(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){var e=function(e){console.log(e),i(e)};return window.addEventListener("deviceorientation",e,!0),function(){window.removeEventListener("deviceorientation",e)}},[]),r.a.createElement(A,{title:"Device Orientation"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Alpha: ",a.alpha),r.a.createElement("div",null,"Beta: ",a.beta),r.a.createElement("div",null,"Gamma: ",a.gamma),r.a.createElement("div",null,"Compass: ",a.webkitCompassHeading)):r.a.createElement("div",null,"No data"))}function z(){return window.DeviceOrientationEvent?r.a.createElement(Y,null):r.a.createElement(A,{title:"Device Orientation"},r.a.createElement("div",null,"Not supported"))}function X(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){var e=function(e){console.log(e),i(e)};return window.addEventListener("devicemotion",e,!0),function(){window.removeEventListener("devicemotion",e)}},[]),r.a.createElement(A,{title:"Device Motion"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Acceleration:"),r.a.createElement("div",null,"X: ",a.acceleration.x),r.a.createElement("div",null,"Y: ",a.acceleration.y),r.a.createElement("div",null,"Z: ",a.acceleration.z)):r.a.createElement("div",null,"No data"))}function Z(){return window.DeviceMotionEvent?r.a.createElement(X,null):r.a.createElement(A,{title:"Device Motion"},r.a.createElement("div",null,"Not supported"))}function $(){var e=Object(n.useState)(!navigator.onLine),t=Object(s.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){var e=function(){return i(!0)},t=function(){return i(!1)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}},[]),"onLine"in navigator&&a?r.a.createElement("section",{className:"notch-inset-item has-background-grey-lighter "},r.a.createElement("h1",{className:"navbar-item has-text-danger"},"Offline")):null}function K(){var e=function(){var e=Object(n.useState)(void 0),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){if(!navigator.mediaDevices)return Error("Media devices not supported.");var e;function t(){return(t=Object(d.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1});case 3:e=t.sent,r(e),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),r(t.t0);case 11:case"end":return t.stop()}},t,null,[[0,7]])}))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){console.log("In cleanup function");try{e&&e.getVideoTracks?(console.log("Before videoStream.getVideoTracks()"),e.getVideoTracks().forEach(function(e){e.stop()}),console.log("After videoStream.getVideoTracks()")):alert("Camera not stopped?")}catch(t){alert("".concat(t.name,": ").concat(t.message))}}},[]),a}();if(e instanceof Error||e&&e.name)return r.a.createElement(A,{title:"Camera is NOT suported!"},e.name&&e.name,e.message&&e.message);return r.a.createElement(A,{title:"Camera is suported!"},r.a.createElement("div",null,"Video Below?"),r.a.createElement("video",{id:"video-chat",ref:function(t){try{if(!e||!t)return;"srcObject"in t?t.srcObject=e:t.src=window.URL.createObjectURL(e)}catch(a){alert("Error in setupCameraSource: ".concat(a.name))}},autoPlay:!0,playsInline:!0}))}var Q=function(){var e=J();return r.a.createElement("div",{className:"App"},r.a.createElement(p.Provider,{value:e},r.a.createElement(c.a,{basename:"/pwa-tester"},r.a.createElement(O,null),r.a.createElement($,null),r.a.createElement(x,null,r.a.createElement(l.a,{exact:!0,path:"/",component:M}),r.a.createElement(l.a,{path:"/about",component:T}),r.a.createElement(l.a,{path:"/geolocation",component:D}),r.a.createElement(l.a,{path:"/notifications",component:I}),r.a.createElement(l.a,{path:"/camera",component:K}),r.a.createElement(l.a,{path:"/device/orientation",component:z}),r.a.createElement(l.a,{path:"/device/motion",component:Z})),r.a.createElement(R,null),r.a.createElement(F,null))))};o.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1723ae91.chunk.js.map