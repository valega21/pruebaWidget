(this["webpackJsonpamx-contenido"]=this["webpackJsonpamx-contenido"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(20),a=c.n(i),l=(c(27),c(22)),o=c(4),d=(c(28),c(45));c(33);var j=c(1);function r(e){let{longitud:t}=e;const[c,n]=Object(s.useState)(null),[i,a]=Object(s.useState)(!1),[l,o]=Object(s.useState)(!1),[r,b]=Object(s.useState)(!1),[h,m]=Object(s.useState)(!1),[O,x]=Object(s.useState)(!1);Object(s.useEffect)((()=>{(async function(){let{}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const e={method:"get",url:"https://dev-cdn.clarosports.com/json/widgets/medal_standings.json",timeout:25e3,withCredentials:!1,headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json; charset=utf-8"}};return await Object(d.a)(e).then((e=>{const{data:t,status:c}=e;return console.log(" SERVICIO: ",e),200===c?{data:t}:[]}))})().then((e=>{n(e.data)}))}),[]);return console.log(" datossss... ",c),Object(j.jsxs)("div",{className:"medallero-container",children:[Object(j.jsxs)("div",{className:"medallero-header",children:[Object(j.jsx)("div",{className:"medallero-header-equipo",onClick:()=>{i?a(!1):(a(!0),o(!1),b(!1),m(!1),x(!1))},children:"Equipo"}),Object(j.jsxs)("div",{className:"medallero-header-medallas",children:[Object(j.jsx)("div",{onClick:()=>{l?o(!1):(o(!0),a(!1),b(!1),m(!1),x(!1))},children:"Oro"}),Object(j.jsx)("div",{onClick:()=>{r?b(!1):(b(!0),a(!1),o(!1),m(!1),x(!1))},children:"Plata"}),Object(j.jsx)("div",{onClick:()=>{h?m(!1):(m(!0),a(!1),o(!1),b(!1),x(!1))},children:"Bronce"})]}),Object(j.jsx)("div",{className:"medallero-header-total",onClick:()=>{O?x(!1):(x(!0),a(!1),o(!1),b(!1),m(!1))},children:"Total"})]}),c&&c.map(((e,c)=>String(e.organization).length>0&&(c+1<=t&&t||!t)&&Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"line"}),Object(j.jsxs)("div",{className:"medallero-body",children:[Object(j.jsxs)("div",{className:"medallero-body-equipo",children:[Object(j.jsx)("img",{className:"medallero-body-equipo-img",src:"https://gstatic.olympics.com/s1/t_s_pog_flag_x2/f_auto/static/flag/4x3/au",alt:"flag-icon"}),Object(j.jsx)("p",{className:"medallero-body-equipo-name",children:e.organization})]}),Object(j.jsxs)("div",{className:"medallero-body-medallas",children:[0!==String(e.gold).length?Object(j.jsx)("span",{className:"oro",children:e.gold}):Object(j.jsx)("span",{className:"medallero-body-medallas-vacia",children:"-"}),0!==String(e.silver).length?Object(j.jsx)("span",{className:"silver",children:e.silver}):Object(j.jsx)("span",{className:"medallero-body-medallas-vacia",children:"-"}),0!==String(e.bronze).length?Object(j.jsx)("span",{className:"bronce",children:e.bronze}):Object(j.jsx)("span",{className:"medallero-body-medallas-vacia",children:"-"})]}),Object(j.jsx)("div",{className:"medallero-body-total",children:Object(j.jsx)("p",{className:"",children:e.total})})]})]},e._id)))]})}function b(e){let{type:t,longitud:c}=e;return Object(j.jsx)("div",{className:"principal",children:Object(j.jsx)(r,{longitud:10})})}var h=c(9);c(35);function m(){return Object(j.jsx)("div",{className:"footer",children:Object(j.jsxs)("div",{className:"footer-content",children:[Object(j.jsxs)("div",{className:"footer-content-privacidad",children:[Object(j.jsx)(h.Link,{to:"/privacity",children:"Aviso de privacidad"}),Object(j.jsx)("p",{children:"/"}),Object(j.jsx)(h.Link,{to:"/contact",children:"Contacto"})]}),Object(j.jsx)("div",{className:"footer-content-logo",children:Object(j.jsx)(h.Link,{to:"/",children:Object(j.jsx)("img",{src:"/img/logo-sochi.png",alt:"logo-sochi"})})}),Object(j.jsx)("div",{className:"footer-content-redes",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(h.Link,{to:"/",children:Object(j.jsx)("div",{className:"logo-mobile"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(h.Link,{to:"/",children:Object(j.jsx)("img",{src:"/img/twitter.png",alt:"logo-twitter"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(h.Link,{to:"/",children:Object(j.jsx)("img",{src:"/img/facebook.png",alt:"logo-facebook"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(h.Link,{to:"/",children:Object(j.jsx)("img",{src:"/img/youtube.png",alt:"logo-youtube"})})})]})})]})})}c(40);function O(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{className:"header-content-left",children:Object(j.jsx)(h.Link,{to:"/",children:Object(j.jsx)("img",{src:"/img/logo-sochi.png",alt:"logo-sochi"})})}),Object(j.jsx)("div",{className:"header-content-rigth",children:Object(j.jsx)("img",{src:"/img/logo-claro-sports.png",alt:"logo-claro-sports"})})]})}c(41);function x(){return Object(j.jsxs)("div",{className:"principal",children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"section-contact",children:Object(j.jsx)("p",{children:"Contacto AMX-Contenido..."})}),Object(j.jsx)(m,{})]})}c(42);function g(){return Object(j.jsxs)("div",{className:"principal",children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"section-privacity",children:Object(j.jsx)("p",{children:"Pol\xedticas de Privacidad AMX-Contenido..."})}),Object(j.jsx)(m,{})]})}var p=function(){return Object(j.jsx)("div",{className:"contentPage",children:Object(j.jsxs)(l.a,{children:[Object(j.jsx)(o.Route,{path:"/",exact:!0,component:b}),Object(j.jsx)(o.Route,{path:"/contact",exact:!0,component:x}),Object(j.jsx)(o.Route,{path:"/privacity",exact:!0,component:g})]})})};var u=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((t=>{let{getCLS:c,getFID:s,getFCP:n,getLCP:i,getTTFB:a}=t;c(e),s(e),n(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),u()}},[[43,1,2]]]);
//# sourceMappingURL=main.dcb08a29.chunk.js.map