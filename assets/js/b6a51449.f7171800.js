"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2095],{4137:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),s=["components"],i={title:"Traverse events"},c=void 0,p={unversionedId:"api/examples/promise/system-events",id:"api/examples/promise/system-events",title:"Traverse events",description:"Query the system events and extract information from them. This example runs until exited via Ctrl-C",source:"@site/docs/api/examples/promise/system-events.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/system-events",permalink:"/docs/api/examples/promise/system-events",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/system-events.md",tags:[],version:"current",frontMatter:{title:"Traverse events"},sidebar:"reference",previous:{title:"Make a simple transfer",permalink:"/docs/api/examples/promise/make-transfer"},next:{title:"Transfer events",permalink:"/docs/api/examples/promise/transfer-events"}},l={},u=[],m={toc:u},f="wrapper";function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query the system events and extract information from them. This example runs until exited via Ctrl-C"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\nasync function main () {\n  // Create our API with a default connection to the local node\n  const api = await ApiPromise.create();\n\n  // Subscribe to system events via storage\n  api.query.system.events((events) => {\n    console.log(`\\nReceived ${events.length} events:`);\n\n    // Loop through the Vec<EventRecord>\n    events.forEach((record) => {\n      // Extract the phase, event and the event types\n      const { event, phase } = record;\n      const types = event.typeDef;\n\n      // Show what we are busy with\n      console.log(`\\t${event.section}:${event.method}:: (phase=${phase.toString()})`);\n      console.log(`\\t\\t${event.meta.documentation.toString()}`);\n\n      // Loop through each of the parameters, displaying the type and data\n      event.data.forEach((data, index) => {\n        console.log(`\\t\\t\\t${types[index].type}: ${data.toString()}`);\n      });\n    });\n  });\n}\n\nmain().catch((error) => {\n  console.error(error);\n  process.exit(-1);\n});\n")))}d.isMDXComponent=!0}}]);