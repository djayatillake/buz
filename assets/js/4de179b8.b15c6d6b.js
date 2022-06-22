"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2175],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],p={sidebar_position:1},c="Self-Describing",l={unversionedId:"inputs/honeypot/self-describing",id:"inputs/honeypot/self-describing",title:"Self-Describing",description:"\ud83d\udfe2 Supported",source:"@site/docs/inputs/honeypot/self-describing.md",sourceDirName:"inputs/honeypot",slug:"/inputs/honeypot/self-describing",permalink:"/inputs/honeypot/self-describing",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Honeypot Inputs",permalink:"/category/honeypot-inputs"},next:{title:"Webhook",permalink:"/inputs/honeypot/webhook"}},s={},u=[{value:"Collection Method",id:"collection-method",level:2},{value:"Validation Method",id:"validation-method",level:2},{value:"Sample Self-Describing Event Configuration",id:"sample-self-describing-event-configuration",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"self-describing"},"Self-Describing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,i.kt)("h2",{id:"collection-method"},"Collection Method"),(0,i.kt)("p",null,"Honeypot listens on a configurable endpoint for incoming ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests of ",(0,i.kt)("inlineCode",{parentName:"p"},"self describing")," payloads, structured as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  $CONTEXTS_ROOT_KEY: {\n    "some-context-schema": {"context-data": "here"},\n    "another-context-schema": {"more-context-data": "here"}\n  },\n  $PAYLOAD_ROOT_KEY: {\n    $PAYLOAD_SCHEMA_KEY: "some-key",\n    $PAYLOAD_DATA_KEY: {"data": "here"}\n  }\n}\n')),(0,i.kt)("p",null,"This (configured by you!) endpoint accepts ",(0,i.kt)("strong",{parentName:"p"},"batches of self-describing events")," and ",(0,i.kt)("strong",{parentName:"p"},"single self-describing events"),". It requires a ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," header of ",(0,i.kt)("inlineCode",{parentName:"p"},"application/json"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note!")," If a ",(0,i.kt)("inlineCode",{parentName:"p"},"Content-Type")," header is not specified, the event will not be accepted."),(0,i.kt)("h2",{id:"validation-method"},"Validation Method"),(0,i.kt)("p",null,"Honeypot uses the schema defined at ",(0,i.kt)("inlineCode",{parentName:"p"},"$PAYLOAD_KEY.$SCHEMA_KEY")," to validate each payload."),(0,i.kt)("h2",{id:"sample-self-describing-event-configuration"},"Sample Self-Describing Event Configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  generic:\n    enabled: true         # Whether or not to enable generic self-describing events\n    path: /gen/p          # Path for incoming self-describing events\n    contexts: \n      rootKey: contexts   # The contexts root key (contexts)\n    payload:\n      rootKey: payload    # The payload root key (payload)\n      schemaKey: schema   # The payload schema key (payload.schema)\n      dataKey: data       # The payload data key (payload.data)\n")))}f.isMDXComponent=!0}}]);