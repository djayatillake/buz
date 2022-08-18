"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5232],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4612:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],s={},i="MySQL",l={unversionedId:"under-the-hood/cache-backends/database/mysql",id:"under-the-hood/cache-backends/database/mysql",title:"MySQL",description:"\ud83d\udfe2 Supported",source:"@site/docs/under-the-hood/cache-backends/database/mysql.md",sourceDirName:"under-the-hood/cache-backends/database",slug:"/under-the-hood/cache-backends/database/mysql",permalink:"/under-the-hood/cache-backends/database/mysql",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"MongoDb",permalink:"/under-the-hood/cache-backends/database/mongodb"},next:{title:"Postgres",permalink:"/under-the-hood/cache-backends/database/postgres"}},u={},p=[{value:"Sample Mysql Schema Cache Backend Configuration",id:"sample-mysql-schema-cache-backend-configuration",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\ud83d\udfe2 Supported")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," schema cache backend leverages schemas stored in a configurable registry table."),(0,o.kt)("p",null,"It is most useful when you want to store ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"valid events"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"invalid events")," within the same system to reduce infrastructure overhead."),(0,o.kt)("p",null,"It can be used with any combination of sink(s)."),(0,o.kt)("h2",{id:"sample-mysql-schema-cache-backend-configuration"},"Sample Mysql Schema Cache Backend Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"schemaCache:\n  backend:\n    type: mysql\n    registryTable: registry\n    mysqlHost: localhost\n    mysqlPort: 3306\n    mysqlDbName: honeypot\n    mysqlUser: honeypot\n    mysqlPass: honeypot\n")))}m.isMDXComponent=!0}}]);