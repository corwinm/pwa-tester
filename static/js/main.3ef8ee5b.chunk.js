(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),r=a.n(n),i=a(13);function o(e){var t=e.title,a=e.children;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"notch-inset-item"},r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"container is-fluid"},r.a.createElement("h1",{className:"title has-text-white"},t),r.a.createElement("div",null,a)))))}},13:function(e,t,a){"use strict";var n=a(22),r=a(23),i=a(27),o=a(24),c=a(28),l=a(0),s=a.n(l),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={hasError:!1,message:"",name:""},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",null,"Something went wrong."),s.a.createElement("p",null,this.state.name),s.a.createElement("p",null,this.state.message),s.a.createElement("p",null,s.a.createElement("button",{className:"button",onClick:function(){return window.location.reload()}},"Reload Page"))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,message:e.message,name:e.name}}}]),t}(s.a.Component);t.a=u},14:function(e,t,a){e.exports={floatingContainer:"FloatingMessage_floatingContainer__2z4hZ",withShadow:"FloatingMessage_withShadow__2GxW2"}},29:function(e,t,a){e.exports=a(44)},34:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),o=a.n(i),c=(a(34),a(2)),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e){if("serviceWorker"in navigator){if(new URL("/pwa-tester",window.location.href).origin!==window.location.origin)return;var t=function(){var t="".concat("/pwa-tester","/service-worker.js");l?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):u(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):u(t,e)};"complete"===document.readyState?t():window.addEventListener("load",t)}}function u(e,t){var a=!1;navigator.serviceWorker.oncontrollerchange=function(){a||(a=!0,window.location.reload())},navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var m=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),o=Object(c.a)(i,2),l=o[0],u=o[1],m=Object(n.useState)(null),d=Object(c.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)(null),E=Object(c.a)(v,2),g=E[0],b=E[1];return Object(n.useEffect)(function(){var e=function(e){e.preventDefault(),b(e),console.log("Install prompt available!",e)};return window.addEventListener("beforeinstallprompt",e),function(){window.removeEventListener("beforeinstallprompt",e)}},[]),Object(n.useEffect)(function(){var e=!1;return s({onUpdate:function(t){e||(console.log("onUpdate called! New content after windows closed!",t),f(t),r(!0))},onSuccess:function(t){e||(console.log("onSuccess called! Offline ready!",t),f(t),u(!0))}}),console.log("serviceWorker.register called"),function(){console.log("ignore set to true"),e=!0}},[]),Object(n.useEffect)(function(){if("serviceWorker"in navigator){var e=!1;return navigator.serviceWorker.getRegistration().then(function(t){e||(console.log("Current sw registration",t),f(t),u(!!t),r(t&&!!t.waiting))}),function(){e=!0}}f(void 0)},[]),{updateAvailable:a,offLineReady:l,registration:p,installPrompt:g}},d=r.a.createContext({updateAvailable:!1,offLineReady:!1,registration:null,installPrompt:null}),p=function(e){var t=e.children,a=m();return r.a.createElement(d.Provider,{value:a},t)},f=a(6),v=a(8),E=a(14),g=a.n(E);function b(e){var t=e.title,a=e.message,n=void 0===a?"":a,i=e.actionText,o=e.deleteClick,c=e.actionClick;return r.a.createElement("div",{className:g.a.floatingContainer+" notch-inset"},r.a.createElement("article",{className:"message is-primary "+g.a.withShadow},r.a.createElement("div",{className:"message-header"},r.a.createElement("p",null,t),r.a.createElement("button",{className:"delete is-medium","aria-label":"delete",onClick:o})),r.a.createElement("div",{className:"message-body"},n,r.a.createElement("p",null,r.a.createElement("button",{className:"button is-primary is-fullwidth is-outlined",onClick:c},i)))))}function h(){var e=Object(n.useContext)(d),t=e.updateAvailable,a=e.registration,i=e.installPrompt,o=Object(n.useState)(!0),l=Object(c.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(!0),p=Object(c.a)(m,2),f=p[0],v=p[1];if(f&&t){return r.a.createElement(b,{title:"New version of the app available!!!",actionText:"Update Now",message:r.a.createElement("p",null,"New version will automatically load next visit after all open windows are closed."),deleteClick:function(){return v(!1)},actionClick:function(){a.waiting.postMessage("skipWaiting")}})}if(s&&i){return r.a.createElement(b,{title:"App available for installation!",actionText:"Install App",deleteClick:function(){return u(!1)},actionClick:function(){i.prompt(),i.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),u(!1)})}})}return null}var w=a(13),N="5/25/2019, 11:20:25 PM";function O(){return r.a.createElement("p",null,"Built: ",N)}function k(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,"PWA Tester by ",r.a.createElement("a",{href:"https://github.com/corwinm"},"Corwin Marsh"),". The source code is available on"," ",r.a.createElement("a",{href:"https://github.com/corwinm/pwa-tester"}," ",r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-github"})),"GitHub"),r.a.createElement("a",{href:"https://googlechrome.github.io/lighthouse/viewer/?gist=6ac7f4fd8b349c903dfcf04d2ff88e3e"}," ",r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fab fa-chrome"})),"Lighthouse Score")),r.a.createElement(O,null)))}var y=a(11),j=function(e){return[{description:"Geolocation",route:"/geolocation",supported:navigator.geolocation},{description:"Camera",route:"/camera",supported:navigator.mediaDevices&&navigator.mediaDevices.getUserMedia},{description:"Notifications",route:"/notifications",supported:"Notification"in window},{description:"Payments",supported:e&&e.paymentManager},{description:"Motion",route:"/device/motion",supported:window.DeviceMotionEvent},{description:"Orientation",route:"/device/orientation",supported:window.DeviceOrientationEvent},{description:"Vibration",supported:navigator.vibrate},{description:"Online Status",supported:"onLine"in navigator},{description:"Clipboard",supported:navigator.clipboard},{description:"Web Share",supported:navigator.share},{description:"Push Notifications",supported:e&&"pushManager"in e},{description:"Background Sync",supported:e&&"sync"in e}]};function C(e){var t=e.registration,a=j(t).map(function(e,t){return r.a.createElement(x,Object.assign({key:t},e))}).reduce(function(e,t,a){return a%3===0&&e.push([]),e[e.length-1].push(t),e},[]).map(function(e,t){return r.a.createElement("div",{key:t,className:"tile is-ancestor"},e)});return r.a.createElement(y.a,{title:"Features"},a)}function x(e){var t=e.description,a=e.supported,n=e.route;return null===a?r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-primary"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Loading..."))):a?r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-success has-text-black"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Supported"," ",n&&r.a.createElement(f.b,{to:n,"aria-label":t,style:{textDecoration:"none"}},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-arrow-circle-right"})))))):r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box notification is-danger has-text-black"},r.a.createElement("p",{className:"title"},t),r.a.createElement("p",{className:"subtitle"},"Not Supported")))}function S(e){var t=e.registration;return t?r.a.createElement(y.a,{title:"Details"},r.a.createElement("div",null,"Active State: ",t.active&&t.active.state),r.a.createElement("div",null,"Waiting State: ",t.waiting&&t.waiting.state),(window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone)&&r.a.createElement("div",null,"Display mode is standalone")):null}function W(){var e=Object(n.useContext)(d),t="serviceWorker"in navigator?"ServiceWorker Supported!":"ServiceWorker NOT Supported!";return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"hero is-primary notch-inset-item"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("button",{className:"button is-primary is-inverted is-outlined",onClick:function(){alert("This is going to be something really great someday!")}},"Call to Action!")))),r.a.createElement(S,{registration:e.registration}),r.a.createElement(C,{registration:e.registration}))}var A=a(9),M=a.n(A),L=a(12);function P(){var e=function(){var e=Object(L.a)(M.a.mark(function e(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share({title:"PWA Tester",text:"PWA Tester",url:window.location.href});case 3:console.log("Successful share."),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error sharing:",e.t0);case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("button",{className:"button is-primary",onClick:e,disabled:!navigator.share},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-share"})),r.a.createElement("span",null,"Share"))}function T(){var e=Object(n.useContext)(d),t=e.registration,a=e.updateAvailable,i=Object(n.useState)(!1),o=Object(c.a)(i,2),l=o[0],s=o[1];if(!t)return null;if(a){return r.a.createElement("button",{className:"button is-info",onClick:function(){t.waiting.postMessage("skipWaiting")}},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-sync"})),r.a.createElement("span",null,"Update Now"))}function u(){return(u=Object(L.a)(M.a.mark(function e(){var a;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t.update();case 3:a=e.sent,console.log(a),s(!1);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("button",{className:"button is-info",onClick:function(){return u.apply(this,arguments)}},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-sync"+(l?" fa-spin":"")})),r.a.createElement("span",null,l?"Updating":"Check for Update"))}function U(e){var t=e.children;return r.a.createElement("nav",{className:"navbar is-transparent is-fixed-top notch-inset-item",role:"navigation","aria-label":"main navigation"},t)}function D(e){var t=e.children,a=e.menuOpen;return r.a.createElement("div",{className:"navbar-menu "+(a?"is-active":"")},t)}function z(e){var t=e.menuOpen,a=e.toggleMenu;return r.a.createElement("a",{tabIndex:"0",role:"button",className:"navbar-burger burger "+(t?"is-active":""),onClick:a,"aria-label":"menu","aria-expanded":t},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))}function R(e){var t=e.toggleMenu;function a(e){return r.a.createElement(f.b,Object.assign({},e,{exact:!0,onClick:t,className:"navbar-item",activeClassName:"has-text-link"}))}return r.a.createElement("div",{className:"navbar-start"},r.a.createElement(a,{to:"/"},"Home"),r.a.createElement(a,{to:"/about"},"About"),r.a.createElement(a,{to:"/geolocation"},"Geolocation"),r.a.createElement(a,{to:"/notifications"},"Notifications"),r.a.createElement(a,{to:"/camera"},"Camera"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("a",{className:"navbar-link",tabIndex:"0"},"Device"),r.a.createElement("div",{className:"navbar-dropdown is-boxed"},r.a.createElement(a,{to:"/device/orientation"},"Orientation"),r.a.createElement(a,{to:"/device/motion"},"Motion"))))}function F(){return r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(T,null),r.a.createElement(P,null))))}function I(e){var t=e.onClick;return navigator.standalone?r.a.createElement("a",{className:"navbar-item",tabIndex:"0",onClick:t},r.a.createElement("span",{className:"icon"},r.a.createElement("i",{className:"fas fa-arrow-left"}))):null}var V=Object(v.d)(function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],o=a[1];function l(){o(!i)}return r.a.createElement(U,null,r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(I,{onClick:e.history.goBack}),r.a.createElement(f.b,{to:"/",className:"navbar-item"},"PWA Tester"),r.a.createElement(z,{menuOpen:i,toggleMenu:l})),r.a.createElement(D,{menuOpen:i},r.a.createElement(R,{toggleMenu:l}),r.a.createElement(F,null)))});function _(){return function(){var e=Object(n.useState)(!("onLine"in navigator)||!navigator.onLine),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){var e=function(){return r(!0)},t=function(){return r(!1)};return window.addEventListener("offline",e),window.addEventListener("online",t),function(){window.removeEventListener("offline",e),window.removeEventListener("online",t)}},[]),a}()?r.a.createElement("section",{className:"notch-inset-item has-background-grey-lighter "},r.a.createElement("h1",{className:"navbar-item has-text-danger"},"Offline")):null}var B=a(16);B.a.initialize("UA-139919526-1",{testMode:!1});var G=r.a.createContext({pageView:function(e){B.a.pageview("/pwa-tester"+e)}});function H(e){var t=e.pageView,a=e.location;return Object(n.useEffect)(function(){console.log("Trace pageView",a),t(a)},[t,a]),null}function J(){var e=Object(n.useContext)(G);return r.a.createElement(v.a,{path:"/",render:function(t){var a=t.location;return r.a.createElement(H,{pageView:e.pageView,location:a.pathname+a.search})}})}var Z=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,45))}),$=Object(n.lazy)(function(){return a.e(4).then(a.bind(null,47))}),q=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,48))}),K=Object(n.lazy)(function(){return a.e(6).then(a.bind(null,49))}),Q=Object(n.lazy)(function(){return a.e(7).then(a.bind(null,50))}),X=Object(n.lazy)(function(){return a.e(8).then(a.bind(null,46))}),Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null,r.a.createElement(f.a,{basename:"/pwa-tester"},r.a.createElement(J,null),r.a.createElement(V,null),r.a.createElement(_,null),r.a.createElement("main",{role:"main"},r.a.createElement(w.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(v.a,{exact:!0,path:"/",component:W}),r.a.createElement(v.a,{path:"/about",component:Z}),r.a.createElement(v.a,{path:"/geolocation",component:Q}),r.a.createElement(v.a,{path:"/notifications",component:X}),r.a.createElement(v.a,{path:"/camera",component:$}),r.a.createElement(v.a,{path:"/device/orientation",component:K}),r.a.createElement(v.a,{path:"/device/motion",component:q})))),r.a.createElement(k,null),r.a.createElement(h,null))))};o.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.3ef8ee5b.chunk.js.map