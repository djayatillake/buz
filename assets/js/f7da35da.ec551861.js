"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[595],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(u,".").concat(f)]||d[f]||l[f]||c;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],i={},u="S3",s={unversionedId:"under-the-hood/cache-backends/object/s3",id:"under-the-hood/cache-backends/object/s3",title:"S3",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/cache-backends/object/s3.md",sourceDirName:"under-the-hood/cache-backends/object",slug:"/under-the-hood/cache-backends/object/s3",permalink:"/under-the-hood/cache-backends/object/s3",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MinIO",permalink:"/under-the-hood/cache-backends/object/minio"},next:{title:"Registry",permalink:"/category/registry"}},p={},l=[{value:"Sample S3 Cache Backend Configuration",id:"sample-s3-cache-backend-configuration",level:2}],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"s3"},"S3"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"s3")," cache backend uses jsonschemas stored in s3 to back the in-memory schema cache."),(0,c.kt)("h2",{id:"sample-s3-cache-backend-configuration"},"Sample S3 Cache Backend Configuration"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"schemaCache:\n  backend:\n    type: s3                  # The backend type\n    bucket: honeypot-schemas  # The s3 bucket containing schemas\n    path: /                   # The path to consider as root\n")))}f.isMDXComponent=!0}}]);