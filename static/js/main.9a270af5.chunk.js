(this["webpackJsonpandrews-hot-ass-portfolio-site"]=this["webpackJsonpandrews-hot-ass-portfolio-site"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/Andrew-Photo-Cropped.e950cb73.jpg"},18:function(e,a,t){e.exports=t(30)},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(13),o=t.n(r),i=(t(23),t(17)),l=(t(24),t(6));function m(e){var a=e.background,t=e.text,n=e.position,r=e.onClick,o=e.expanded,i=e.clicked,m=e.pageName,s=i?"clicked":"";return c.a.createElement("div",{className:"splash-link ".concat(n,"-position ").concat(o," ").concat(s)},c.a.createElement(l.b,{to:"/".concat(m,"/about")},c.a.createElement("button",{onClick:r,className:"".concat(a,"-background ").concat(s)},c.a.createElement("h2",{className:"".concat(i?"fadeOut":"fadeIn"," ").concat(m)},t))))}function s(e){var a=e.currentLink,t=e.changeCurrentLink,n=[{background:"green",text:"Software Engineer",pageName:"engineer"},{background:"white",text:"Musician",pageName:"music"},{background:"orange",text:"Nerd",pageName:"nerd"}];return c.a.createElement("div",{className:"splash-links"},n.map((function(e,n){return c.a.createElement(m,{background:e.background,text:e.text,position:n,onClick:(o=e.pageName,function(){"home"===a&&t(o)}),clicked:e.pageName===a,pageName:e.pageName,currentLink:a,expanded:(r=e.pageName,"home"===a?"unexpanded":r===a?"expanded":"flat"),key:"splashLink".concat(n)});var r,o})))}var u=t(1);function p(e){var a=e.currentLink,t=e.pageInfo,n={home:[],engineer:[{pageName:"about",text:"About"},{pageName:"portfolio",text:"Portfolio"},{pageName:"contact",text:"Contact"}],music:[{pageName:"about",text:"About"},{pageName:"discography",text:"Discography"},{pageName:"store",text:"Store"},{pageName:"transcriptions",text:"Sheet Music"},{pageName:"contact",text:"Contact"}],nerd:[{pageName:"about",text:"About"},{pageName:"japanese",text:"\u65e5\u672c\u8a9e"},{pageName:"gaming",text:"Gaming"},{pageName:"blog",text:"Blog"}]},r=Object(u.f)().pathname.split("/")[2];return c.a.createElement("nav",{className:"navbar-container ".concat("home"===a?"fadeOut":"fadeIn")},c.a.createElement("ul",{className:"navbar-list ".concat(t.pageColor,"-background-font")},n[a].map((function(e){return c.a.createElement("li",null,c.a.createElement(l.b,{className:e.pageName===r?"active":"",to:"/".concat(a,"/").concat(e.pageName)},e.text))}))))}var g=t(16),d=t.n(g);function h(e){var a=e.currentLink,t=e.changeCurrentLink,n={home:{pageColor:"",title:""},engineer:{pageColor:"green",title:"Software Engineer"},music:{pageColor:"white",title:"Musician"},nerd:{pageColor:"orange",title:"Nerd"}},r="engineer"===a?"white":n[a].pageColor;return c.a.createElement("header",{className:"header ".concat(n[a].pageColor,"-background-font")},c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"andrew-head-cropper"},"home"!==a&&c.a.createElement("p",{className:"".concat(r,"-background-font")},"Back"),c.a.createElement(l.b,{to:"/",className:"home"===a?"disable-link":"",onClick:function(){t("home")}},c.a.createElement("img",{className:"andrew-head ".concat("home"===a?"":"clickable"),src:d.a}))),c.a.createElement("div",{className:"andrew-title"},c.a.createElement("h1",null,"Andrew Tae"),c.a.createElement("div",{className:"title-placeholder"}))),c.a.createElement(p,{pageInfo:n[a],currentLink:a}))}var f=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(6)]).then(t.bind(null,47))}));var N=function(){var e=Object(u.f)().pathname.split("/")[1],a=Object(n.useState)(e||"home"),t=Object(i.a)(a,2),r=t[0],o=t[1],l=function(e,a){return c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",{className:"white-background-font"},"Loading...")},c.a.createElement(f,{match:a,type:e}))};return c.a.createElement("div",{className:"App"},c.a.createElement(h,{currentLink:r,changeCurrentLink:o}),c.a.createElement(s,{currentLink:r,changeCurrentLink:o}),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/engineer",component:function(e){var a=e.match;return l("engineer",a)}}),c.a.createElement(u.a,{path:"/music",component:function(e){var a=e.match;return l("music",a)}}),c.a.createElement(u.a,{path:"/nerd",component:function(e){var a=e.match;return l("nerd",a)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,null,c.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.9a270af5.chunk.js.map