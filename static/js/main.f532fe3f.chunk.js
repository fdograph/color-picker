(this["webpackJsonp@fdograph/color-picker"]=this["webpackJsonp@fdograph/color-picker"]||[]).push([[0],{21:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r,o,a,c,i,l,s,d,x,p=t(0),b=t.n(p),u=t(12),j=t.n(u),h=(t(21),t(7)),f=t(2),m=t(9),g=t(3),O=t(4),v=t.n(O),k=t(5),w=t.n(k),y=t(13),C=t(1),D=g.a.div(r||(r=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  cursor: pointer;\n  padding: 15px;\n  //aspect-ratio: 1 / 1;\n  //height: 120px;\n  min-width: 90px;\n  box-shadow: 0 0 0 rgba(0, 0, 0, 1);\n  transition: all 150ms ease;\n\n  color: #333;\n  &.isDark {\n    color: #ededed;\n  }\n\n  &:hover {\n    z-index: 2;\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);\n  }\n\n  &:hover .helper-text {\n    opacity: 1;\n  }\n\n  .helper-text {\n    opacity: 0;\n    transition: all 150ms ease;\n  }\n"]))),z=g.a.p(o||(o=Object(f.a)(["\n  margin: 0;\n  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n"]))),N=g.a.p(a||(a=Object(f.a)(["\n  margin: 0;\n  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 10px;\n"]))),S=function(n){var e=n.color,t=n.className,r=Object(p.useState)(!1),o=Object(h.a)(r,2),a=o[0],c=o[1],i=a?"Copied!":"Click to copy :)";return Object(C.jsx)(y.CopyToClipboard,{text:e.value,onCopy:function(){return c(!0)},children:Object(C.jsxs)(D,{className:w()({isDark:e.isDark},t),style:{backgroundColor:e.value},children:[Object(C.jsx)(z,{children:e.value}),Object(C.jsx)(N,{className:"helper-text",children:i})]})})},A=g.a.div(c||(c=Object(f.a)(["\n  padding: 15px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  z-index: 1;\n  box-shadow: 0 0 3em rgba(0, 0, 0, 0.2);\n\n  color: #222;\n  &.isDark {\n    color: #ededed;\n  }\n"]))),J=g.a.h1(i||(i=Object(f.a)(["\n  margin: 1em 0 1em 0;\n  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 42px;\n  font-weight: bolder;\n"]))),M=Object(g.a)(S)(l||(l=Object(f.a)(["\n  margin: 1em 0 0 0;\n  min-width: auto;\n  flex: 0;\n  width: 100%;\n  padding: 20px;\n\n  border-width: 1px;\n  border-radius: 3px;\n  border-style: solid;\n  border-color: #222;\n  &.isDark {\n    border-color: #ededed;\n  }\n\n  .helper-text {\n    opacity: 1;\n  }\n"]))),R=function(n){var e=n.color,t=n.setColor,r=v()(e),o={value:r.toRgbString(),isDark:r.isDark()},a=w()({isDark:o.isDark});return Object(C.jsxs)(A,{style:{backgroundColor:o.value},className:a,children:[Object(C.jsxs)(J,{children:["Pick a color!",Object(C.jsx)("br",{}),"Any color!"]}),Object(C.jsx)(m.a,{color:o.value,onChange:function(n){t(n.rgb)},theme:m.b.dark}),Object(C.jsx)(M,{color:o,className:a})]})},B=function(n,e){return n.shift(),n.map((function(n){return{value:n.setAlpha(e).toRgbString(),isDark:n.isDark()}}))},E=function(n){return Object(p.useMemo)((function(){return function(n){var e=v()(n),t=e.getAlpha();return{analogous:B(e.analogous(),t),monochromatic:B(e.monochromatic(),t),splitComplement:B(e.splitcomplement(),t),tetrad:B(e.tetrad(),t),triad:B(e.triad(),t)}}(n)}),[n])},I=g.a.div(s||(s=Object(f.a)(["\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n"]))),P=function(n){var e=n.comb;return Object(C.jsx)(I,{children:e.map((function(n,e){return Object(C.jsx)(S,{color:n},"".concat(e,"-").concat(n))}))})},T=g.a.div(d||(d=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  //height: 100%;\n  min-width: 70%;\n"]))),q=function(n){var e=n.color,t=E(e);return Object(C.jsx)(T,{children:Object.values(t).map((function(n,e){return Object(C.jsx)(P,{comb:n},e)}))})},F=g.a.div(x||(x=Object(f.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 100vh;\n  align-items: stretch;\n"]))),G=function(){var n=Object(p.useState)("rgb(255, 70, 135)"),e=Object(h.a)(n,2),t=e[0],r=e[1];return Object(C.jsxs)(F,{children:[Object(C.jsx)(R,{color:t,setColor:r}),Object(C.jsx)(q,{color:t})]})};j.a.render(Object(C.jsx)(b.a.StrictMode,{children:Object(C.jsx)(G,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.f532fe3f.chunk.js.map