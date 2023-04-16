"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[7926],{4137:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||i;return t?r.createElement(d,a(a({ref:n},l),{},{components:t})):r.createElement(d,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3029:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=t(7462),o=t(3366),i=(t(7294),t(4137)),a=["components"],c={title:"Get chain information"},s=void 0,p={unversionedId:"api/examples/promise/chain-info",id:"api/examples/promise/chain-info",title:"Get chain information",description:"This example shows how to connect to the api and retrieve the chain information such as the token name, the ss58 format for address encoding and the token decimals.",source:"@site/docs/api/examples/promise/chain-info.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/chain-info",permalink:"/docs/api/examples/promise/chain-info",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/chain-info.md",tags:[],version:"current",frontMatter:{title:"Get chain information"},sidebar:"reference",previous:{title:"TS type generation",permalink:"/docs/api/examples/promise/typegen"},next:{title:"FAQ",permalink:"/docs/api/FAQ"}},l={},m=[],f={toc:m},u="wrapper";function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(u,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This example shows how to connect to the api and retrieve the chain information such as the token name, the ss58 format for address encoding and the token decimals."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nimport { ApiPromise, WsProvider } from '@polkadot/api';\n\nasync function main () {\n  // Create connection to websocket\n  const wsProvider = new WsProvider('wss://rpc.polkadot.io');\n  // Create a new instance of the api\n  const api = await ApiPromise.create({ provider: wsProvider });\n  // get the chain information\n  const chainInfo = await api.registry.getChainProperties()\n\n  console.log(chainInfo);\n  // for Polkadot this would print\n  // {ss58Format: 0, tokenDecimals: [10], tokenSymbol: [DOT]}\n}\n\nmain().catch(console.error).finally(() => process.exit());;\n")))}d.isMDXComponent=!0}}]);