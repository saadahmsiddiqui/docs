"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[3332],{4137:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},l="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=o,f=l["".concat(c,".").concat(m)]||l[m]||b[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1472:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=t(7462),o=t(3366),i=(t(7294),t(4137)),a=["components"],s={title:"Unsubscribe from listening to updates"},c=void 0,u={unversionedId:"api/examples/promise/unsubscribe",id:"api/examples/promise/unsubscribe",title:"Unsubscribe from listening to updates",description:"This example shows how to subscribe to and later unsubscribe from listening to block updates.",source:"@site/docs/api/examples/promise/unsubscribe.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/unsubscribe",permalink:"/docs/api/examples/promise/unsubscribe",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/unsubscribe.md",tags:[],version:"current",frontMatter:{title:"Unsubscribe from listening to updates"},sidebar:"reference",previous:{title:"Listen to balance changes",permalink:"/docs/api/examples/promise/listen-to-balance-change"},next:{title:"Read storage",permalink:"/docs/api/examples/promise/read-storage"}},p={},l=[],b={toc:l},m="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(m,(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how to subscribe to and later unsubscribe from listening to block updates."),(0,i.kt)("p",null,"In this example we're calling the built-in unsubscribe() function after a timeOut of 20s to cleanup and unsubscribe from listening to updates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\nasync function main () {\n  // Create a new instance of the api\n  const api = await ApiPromise.create();\n\n  // Subscribe to chain updates and log the current block number on update.\n  const unsubscribe = await api.rpc.chain.subscribeNewHeads((header) => {\n    console.log(`Chain is at block: #${header.number}`);\n  });\n\n  // In this example we're calling the unsubscribe() function that is being\n  // returned by the api call function after 20s.\n  setTimeout(() => {\n    unsubscribe();\n    console.log('Unsubscribed');\n  }, 20000);\n}\n\nmain().catch(console.error);\n")))}f.isMDXComponent=!0}}]);