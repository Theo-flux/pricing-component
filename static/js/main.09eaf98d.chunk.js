(this["webpackJsonppricing-component"]=this["webpackJsonppricing-component"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),a=c.n(i),r=(c(9),c(10),c(11),c.p+"static/media/pattern-circles.9f6ed14b.svg"),l=c(0);function j(){return Object(l.jsxs)("header",{className:"header container",children:[Object(l.jsx)("img",{src:r,alt:"pattern circles"}),Object(l.jsxs)("div",{className:"caption",children:[Object(l.jsx)("h1",{children:"Simple traffic-based pricing"}),Object(l.jsx)("p",{children:"Sign-up for our 30-day trial. No credit card required."})]})]})}c(13),c(14);var o=c(2),b=s.a.createContext();function d(e){var t=e.children,c=Object(n.useState)("monthly"),s=Object(o.a)(c,2),i=s[0],a=s[1],r=Object(n.useState)("100"),j=Object(o.a)(r,2),d=j[0],u=j[1],h=Object(n.useState)(!1),O=Object(o.a)(h,2),x=O[0],m=O[1],p=Object(n.useState)(0),g=Object(o.a)(p,2),f=g[0],v=g[1];return Object(n.useEffect)((function(){a(x?"yearly":"monthly")}),[x]),Object(n.useEffect)((function(){"yearly"===i?v((parseInt(d)/6.25*.75*12).toFixed(2)):"monthly"===i&&v((parseInt(d)/6.25).toFixed(2))}),[i,d]),console.log(d),Object(l.jsx)(b.Provider,{value:{isToggled:x,handleChange:function(e){var t=e.target.checked;m(t)},billRange:d,handleRange:function(e){var t=e.target.value;u(t)},premium:i,amount:f},children:t})}function u(){var e=Object(n.useContext)(b),t=e.billRange,c=e.handleRange;return Object(l.jsxs)("div",{className:"price-range",children:[Object(l.jsx)("input",{type:"range",min:"0",value:t,max:"200",step:"25",onChange:c}),Object(l.jsx)("div",{className:"price-meter"})]})}c(15);function h(){var e=Object(n.useContext)(b),t=e.amount,c=e.premium;return Object(l.jsxs)("div",{className:"bill",children:[Object(l.jsxs)("h1",{children:["$",t]}),Object(l.jsxs)("small",{children:[" / ",c]})]})}c(16);function O(){var e=Object(n.useContext)(b),t=e.isToggled,c=e.handleChange;return Object(l.jsxs)("div",{className:"toggle",children:[Object(l.jsx)("small",{children:"Monthly Billing"}),Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{name:"isToggled",type:"checkbox",checked:t,onChange:c}),Object(l.jsx)("span",{className:"toggler"})]}),Object(l.jsx)("small",{children:"Yearly Billing"}),Object(l.jsx)("p",{className:"discount",children:"-25%"})]})}c(17);function x(){return Object(l.jsx)("footer",{children:Object(l.jsxs)("div",{className:"wrapper container",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{className:"ri-check-line"}),"  Unlimited websites"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{className:"ri-check-line"}),"  100% data ownership"]}),Object(l.jsxs)("p",{children:[Object(l.jsx)("i",{className:"ri-check-line"}),"  Email reports"]})]}),Object(l.jsx)("button",{children:"start my trial"})]})})}function m(){var e=Object(n.useContext)(b).billRange;return Object(l.jsxs)("main",{className:"main container",children:[Object(l.jsxs)("h3",{children:[e,"K PAGEVIEWS"]}),Object(l.jsx)(u,{}),Object(l.jsx)(h,{}),Object(l.jsx)(O,{}),Object(l.jsx)(x,{})]})}var p=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(m,{})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(d,{children:Object(l.jsx)(p,{})})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.09eaf98d.chunk.js.map