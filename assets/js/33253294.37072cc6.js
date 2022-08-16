"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2408],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3857:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={sidebar_position:100},s="Sample Configuration",p={unversionedId:"examples/config",id:"examples/config",title:"Sample Configuration",description:"The following is a sample configuration for collecting snowplow, cloudevents, self-describing, webhook, and relay events before validating them and sending them to redpanda, mysql, postgres, materialize, and clickhouse:",source:"@site/docs/examples/config.md",sourceDirName:"examples",slug:"/examples/config",permalink:"/examples/config",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"defaultSidebar",previous:{title:"Event Streaming Quickstart with \ud83c\udf6f",permalink:"/examples/quickstart"},next:{title:"Documentation",permalink:"/developing/documentation"}},c={},d=[],u={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("p",null,"The following is a sample configuration for collecting ",(0,o.kt)("inlineCode",{parentName:"p"},"snowplow"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cloudevents"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"self-describing"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"relay")," events before validating them and sending them to ",(0,o.kt)("inlineCode",{parentName:"p"},"redpanda"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"postgres"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"materialize"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'version: 1.1\n\napp:\n  env: development\n  mode: debug\n  port: 8080\n  trackerDomain: trck.slvrtnio.com\n  health:\n    enabled: true\n    path: /health\n  stats:\n    enabled: true\n    path: /stats\n\nmiddleware:\n  timeout:\n    enabled: false\n    ms: 2000\n  rateLimiter:\n    enabled: false\n    period: S\n    limit: 10\n  identity:\n    cookie:\n      enabled: true\n      name: nuid\n      secure: true\n      ttlDays: 365\n      domain: ""\n      path: /\n      sameSite: Lax\n    fallback: 00000000-0000-4000-A000-000000000000\n  cors:\n    enabled: true\n    allowOrigin:\n      - "*"\n    allowCredentials: true\n    allowMethods:\n      - POST\n      - OPTIONS\n      - GET\n    maxAge: 86400\n  requestLogger:\n    enabled: true\n  yeet:\n    enabled: false\n\ninputs:\n  snowplow:\n    enabled: true\n    standardRoutesEnabled: true\n    openRedirectsEnabled: true\n    getPath: /plw/g\n    postPath: /plw/p\n    redirectPath: /plw/r\n  cloudevents:\n    enabled: true\n    path: /ce/p\n  generic:\n    enabled: true\n    path: /gen/p\n    contexts:\n      rootKey: contexts\n      schemaKey: schema\n      dataKey: data\n    payload:\n      rootKey: payload\n      schemaKey: schema\n      dataKey: data\n  webhook:\n    enabled: true\n    path: /wb/hk\n  relay:\n    enabled: true\n    path: /relay\n\nschemaCache:\n  backend:\n    type: fs\n    path: ./schemas/\n  ttlSeconds: 300\n  maxSizeBytes: 104857600 # 100mb -> 100 * 1024 * 1024\n  purge:\n    enabled: true\n    path: /c/purge\n  schemaDirectory:\n    enabled: true\n\nsinks:\n  - name: nada\n    type: blackhole\n    deliveryRequired: false\n  - name: redpanda\n    type: kafka\n    deliveryRequired: true\n    kafkaBrokers:\n      - 127.0.0.1:9092\n    validTopic: honeypot-valid\n    invalidTopic: honeypot-invalid\n  - name: mysql\n    type: mysql\n    deliveryRequired: true\n    mysqlHost: 127.0.0.1\n    mysqlPort: 3306\n    mysqlDbName: honeypot\n    mysqlUser: honeypot\n    mysqlPass: honeypot\n    validTable: honeypot_valid\n    invalidTable: honeypot_invalid\n  - name: postgres\n    type: postgres\n    deliveryRequired: true\n    pgHost: 127.0.0.1\n    pgPort: 5432\n    pgDbName: honeypot\n    pgUser: honeypot\n    pgPass: honeypot\n    validTable: honeypot_valid\n    invalidTable: honeypot_invalid\n  - name: materialize\n    type: materialize\n    deliveryRequired: false\n    mzHost: 127.0.0.1\n    mzPort: 6875\n    mzDbName: materialize\n    mzUser: materialize\n    mzPass: ""\n    validTable: honeypot_valid\n    invalidTable: honeypot_invalid\n  - name: clickhouse\n    type: clickhouse\n    deliveryRequired: true\n    clickhouseHost: 127.0.0.1\n    clickhousePort: 9000\n    clickhouseDbName: honeypot\n    clickhouseUser: honeypot\n    clickhousePass: honeypot\n    validTable: honeypot_valid\n    invalidTable: honeypot_invalid\n\nsquawkBox:\n  enabled: true\n  cloudeventsPath: /sqwk/ce\n  snowplowPath: /sqwk/sp\n  genericPath: /sqwk/gen\n\nprivacy:\n  anonymize:\n    device:\n      ip: false\n      useragent: false\n    user:\n      id: false\n\ntele:\n  enabled: true\n')))}m.isMDXComponent=!0}}]);