(this["webpackJsonp@fdograph/color-picker"]=this["webpackJsonp@fdograph/color-picker"]||[]).push([[0],{21:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var o,r,a,i,c,s,l,d,p,b=t(0),x=t.n(b),u=t(12),h=t.n(u),f=(t(21),t(7)),m=t(2),j=t(9),g=t(3),O=t(4),w=t.n(O),v=t(5),k=t.n(v),y=t(13),D=t(1),C=g.a.button(o||(o=Object(m.a)(["\n  -webkit-appareance: none;\n  appareance: none;\n  border: none;\n  margin: 0;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1 0 auto;\n  cursor: pointer;\n  padding: 0 14px;\n  min-width: 90px;\n  min-height: 6em;\n  box-shadow: 0 0 0 rgba(0, 0, 0, 1);\n  transition: all 150ms ease;\n\n  &::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    outline-offset: 1px;\n  }\n\n  &:focus {\n    outline: 1px dashed #333;\n\n    &::before {\n      outline: 1px dashed #ededed;\n    }\n  }\n\n  color: #333;\n  &.isDark {\n    color: #ededed;\n\n    &:focus {\n      outline-color: #ededed;\n\n      &::before {\n        outline: 1px dashed #333;\n      }\n    }\n  }\n\n  &:hover,\n  &:focus {\n    z-index: 2;\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);\n  }\n\n  .helper-text {\n    opacity: 0;\n    height: 0;\n    display: flex;\n    align-items: center;\n    overflow: hidden;\n    transition: all 150ms ease;\n  }\n\n  &:hover .helper-text,\n  &:focus .helper-text,\n  &.alwaysVisible .helper-text {\n    opacity: 1;\n    height: 1.8em;\n  }\n\n  @media (pointer: coarse) {\n    .helper-text {\n      opacity: 1;\n      height: 1.8em;\n    }\n  }\n"]))),z=g.a.p(r||(r=Object(m.a)(["\n  margin: 0;\n  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 14px;\n  font-weight: 500;\n"]))),N=g.a.p(a||(a=Object(m.a)(["\n  margin: 0;\n  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 10px;\n"]))),S=function(n){var e=n.color,t=n.className,o=n.alwaysVisible,r=Object(b.useState)(!1),a=Object(f.a)(r,2),i=a[0],c=a[1],s=i?"Copied!":"Tap to copy";return Object(b.useEffect)((function(){i&&setTimeout((function(){return c(!1)}),3e3)}),[i]),Object(D.jsx)(y.CopyToClipboard,{text:e.value,onCopy:function(){return c(!0)},children:Object(D.jsxs)(C,{className:k()({isDark:e.isDark,alwaysVisible:!!o},t),style:{backgroundColor:e.value},children:[Object(D.jsx)(z,{children:e.value}),Object(D.jsx)(N,{className:"helper-text",children:s})]})})},V=g.a.div(i||(i=Object(m.a)(["\n  padding: 15px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  z-index: 1;\n  box-shadow: 0 0 3em rgba(0, 0, 0, 0.2);\n\n  color: #222;\n  &.isDark {\n    color: #ededed;\n  }\n\n  .picker-component,\n  .picker-component * {\n    box-sizing: unset;\n  }\n"]))),A=g.a.h1(c||(c=Object(m.a)(["\n  margin: 1em 0 1em 0;\n  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-size: 42px;\n  font-weight: bolder;\n"]))),T=Object(g.a)(S)(s||(s=Object(m.a)(["\n  margin: 1em 0 0 0;\n  min-width: auto;\n  flex: 1;\n  width: 100%;\n  padding: 20px;\n  max-height: 6em;\n\n  border-width: 1px;\n  border-radius: 3px;\n  border-style: solid;\n  border-color: #222;\n\n  &.isDark {\n    border-color: #ededed;\n  }\n"]))),E=function(n){var e=n.color,t=n.setColor,o=w()(e),r={value:o.toRgbString(),isDark:o.isDark()},a=k()({isDark:r.isDark});return Object(D.jsxs)(V,{style:{backgroundColor:r.value},className:a,children:[Object(D.jsxs)(A,{children:["Pick a color!",Object(D.jsx)("br",{}),"Any color!"]}),Object(D.jsx)(j.a,{color:r.value,onChange:function(n){t(n.rgb)},theme:j.b.dark,className:"picker-component"}),Object(D.jsx)(T,{color:r,className:a,alwaysVisible:!0})]})},J=function(n,e){return n.shift(),n.map((function(n){return{value:n.setAlpha(e).toRgbString(),isDark:n.isDark()}}))},M=function(n){return Object(b.useMemo)((function(){return function(n){var e=w()(n),t=e.getAlpha();return{triad:J(e.triad(),t),analogous:J(e.analogous(),t),tetrad:J(e.tetrad(),t),monochromatic:J(e.monochromatic(),t),splitComplement:J(e.splitcomplement(),t)}}(n)}),[n])},R=g.a.div(l||(l=Object(m.a)(["\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n"]))),B=function(n){var e=n.comb;return Object(D.jsx)(R,{children:e.map((function(n,e){return Object(D.jsx)(S,{color:n},"".concat(e,"-").concat(n))}))})},I=g.a.div(d||(d=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 70%;\n"]))),P=function(n){var e=n.color,t=M(e);return Object(D.jsx)(I,{children:Object.values(t).map((function(n,e){return Object(D.jsx)(B,{comb:n},e)}))})},q=g.a.div(p||(p=Object(m.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  min-height: 100vh;\n  align-items: stretch;\n"]))),F=function(){var n=Object(b.useState)("rgb(255, 0, 90)"),e=Object(f.a)(n,2),t=e[0],o=e[1];return Object(D.jsxs)(q,{children:[Object(D.jsx)(E,{color:t,setColor:o}),Object(D.jsx)(P,{color:t})]})};h.a.render(Object(D.jsx)(x.a.StrictMode,{children:Object(D.jsx)(F,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.384d33f2.chunk.js.map