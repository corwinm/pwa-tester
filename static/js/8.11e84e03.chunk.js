(this["webpackJsonppwa-tester"]=this["webpackJsonppwa-tester"]||[]).push([[8],{42:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return r}));var n=i(2),o=i(0),a=i.n(o),c=i(11);function r(){var e=Object(o.useState)("Notification"in window&&Notification.permission),t=Object(n.a)(e,2),i=t[0],r=t[1];if(!i)return a.a.createElement(c.a,null,"Notifications are not supported.");if("granted"===i){return a.a.createElement(c.a,{title:"Test Notification"},a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){var e=new Notification("Hi there!");e.onclick=function(){window.focus(),this.close()},setTimeout(e.close.bind(e),4e3)}},"Click Me!")))}return a.a.createElement(c.a,{title:"Test Notification"},"denied"===i&&a.a.createElement("div",null,"Permission Denied"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){Notification.requestPermission().then((function(e){r(e)}))}},"Request Permission")))}}}]);
//# sourceMappingURL=8.11e84e03.chunk.js.map