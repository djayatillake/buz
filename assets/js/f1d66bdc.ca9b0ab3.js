"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9269],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=c,h=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4100:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(7462),c=n(3366),o=(n(7294),n(3905)),a=["components"],i={},u="GCS",s={unversionedId:"under-the-hood/cache-backends/object/gcs",id:"under-the-hood/cache-backends/object/gcs",title:"GCS",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/cache-backends/object/gcs.md",sourceDirName:"under-the-hood/cache-backends/object",slug:"/under-the-hood/cache-backends/object/gcs",permalink:"/under-the-hood/cache-backends/object/gcs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Object",permalink:"/category/object"},next:{title:"MinIO",permalink:"/under-the-hood/cache-backends/object/minio"}},p={},l=[{value:"Sample GCS Cache Backend Configuration",id:"sample-gcs-cache-backend-configuration",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gcs"},"GCS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gcs")," cache backend uses jsonschemas stored in gcs to back the in-memory schema cache."),(0,o.kt)("h2",{id:"sample-gcs-cache-backend-configuration"},"Sample GCS Cache Backend Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"schemaCache:\n  backend:\n    type: gcs                 # The backend type\n    bucket: honeypot-schemas  # The gcs bucket containing schemas\n    path: /                   # The path to consider as root\n")))}f.isMDXComponent=!0}}]);