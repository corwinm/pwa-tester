(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{46:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return r});var i=n(2),o=n(0),a=n.n(o),c=n(11);function r(){var e=Object(o.useState)("Notification"in window&&Notification.permission),t=Object(i.a)(e,2),n=t[0],r=t[1];if(!n)return a.a.createElement(c.a,null,"Notifications are not supported.");if("granted"===n){return a.a.createElement(c.a,{title:"Test Notification"},a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){var e=new Notification("Hi there!");e.onclick=function(){window.focus(),this.close()},setTimeout(e.close.bind(e),4e3)}},"Click Me!")))}return a.a.createElement(c.a,{title:"Test Notification"},"denied"===n&&a.a.createElement("div",null,"Permission Denied"),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){Notification.requestPermission().then(function(e){r(e)})}},"Request Permission")))}}}]);
//# sourceMappingURL=8.11f15331.chunk.js.map