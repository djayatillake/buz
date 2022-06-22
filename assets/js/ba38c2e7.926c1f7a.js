"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9018],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3709:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},p="Pixel",s={unversionedId:"inputs/honeypot/pixel",id:"inputs/honeypot/pixel",title:"Pixel",description:"\ud83d\udfe2 Supported",source:"@site/docs/inputs/honeypot/pixel.md",sourceDirName:"inputs/honeypot",slug:"/inputs/honeypot/pixel",permalink:"/inputs/honeypot/pixel",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Webhook",permalink:"/inputs/honeypot/webhook"},next:{title:"CDC",permalink:"/inputs/honeypot/cdc"}},d={},u=[{value:"Collection Method",id:"collection-method",level:2},{value:"Parameter Payloads",id:"parameter-payloads",level:3},{value:"Base64 Encoded Parameter Payloads",id:"base64-encoded-parameter-payloads",level:3},{value:"Validation Method",id:"validation-method",level:2},{value:"Sample Pixel Configuration",id:"sample-pixel-configuration",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pixel"},"Pixel"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,o.kt)("h2",{id:"collection-method"},"Collection Method"),(0,o.kt)("h3",{id:"parameter-payloads"},"Parameter Payloads"),(0,o.kt)("p",null,"Honeypot supports collecting payloads via url query params."),(0,o.kt)("p",null,"While this method of data collection is useful it does have drawbacks such as ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/812925/what-is-the-maximum-possible-length-of-a-query-string"},"max uri lengths")," and the inability to explicitly declare parameter types."),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"good")," thing about the pixel input is it is extremely simple to get started with."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For example")," -> if ",(0,o.kt)("inlineCode",{parentName:"p"},"/pxl")," is configured as a pixel input, submitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pxl/?hello=world&userId=10")," will send a payload of ",(0,o.kt)("inlineCode",{parentName:"p"},'{"hello": "world", "userId": "10"}')," to the configured sinks. No sdk's necessary."),(0,o.kt)("h3",{id:"base64-encoded-parameter-payloads"},"Base64 Encoded Parameter Payloads"),(0,o.kt)("p",null,'Honeypot supports a "special" query param, ',(0,o.kt)("inlineCode",{parentName:"p"},"hbp"),", by which b64 encoded payloads can be collected."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For example")," -> if ",(0,o.kt)("inlineCode",{parentName:"p"},"/pxl")," is configured as a pixel input, submitting a ",(0,o.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/pxl?hbp=eyJoZWxsbyI6IndvcmxkIn0")," will send a payload of ",(0,o.kt)("inlineCode",{parentName:"p"},'{"hello":"world"}')," to the configured sinks."),(0,o.kt)("h2",{id:"validation-method"},"Validation Method"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Please Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Honeypot ",(0,o.kt)("strong",{parentName:"p"},"does not yet validate"),' incoming pixel-based payloads - they are assumed "ok" and are sunk to the "good" sink(s).'))),(0,o.kt)("h2",{id:"sample-pixel-configuration"},"Sample Pixel Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pixel:\n  enabled: true\n  paths:\n    - name: default\n      path: /pxl/d\n    - name: secondary\n      path: /pxl/scnd\n")))}m.isMDXComponent=!0}}]);