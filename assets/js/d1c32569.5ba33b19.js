"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[42],{4137:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9343:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(4137)),i=["components"],c={title:"Load Accounts"},s=void 0,l={unversionedId:"keyring/examples/load-accounts",id:"keyring/examples/load-accounts",title:"Load Accounts",description:"The following example shows how to load all accounts from the keyring as pairs and convert them into JSON format.",source:"@site/docs/keyring/examples/load-accounts.md",sourceDirName:"keyring/examples",slug:"/keyring/examples/load-accounts",permalink:"/docs/keyring/examples/load-accounts",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/keyring/examples/load-accounts.md",tags:[],version:"current",frontMatter:{title:"Load Accounts"}},u={},p=[],d={toc:p},f="wrapper";function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following example shows how to load all accounts from the keyring as pairs and convert them into JSON format."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import Keyring class and utility function\nconst { Keyring } = require('@polkadot/keyring');\nconst { stringToU8a } = require('@polkadot/util');\n\nasync function main () {\n  // Create account seed for Alice and Bob\n  const ALICE_SEED = 'Alice'.padEnd(32, ' ');\n  const BOB_SEED = 'Bob'.padEnd(32, ' ');\n\n  // Create an instance of the Keyring\n  const keyring = new Keyring();\n\n  // Create their pairs with account seeds. Add to keyring pair dictionary\n  keyring.addFromSeed(stringToU8a(ALICE_SEED));\n  keyring.addFromSeed(stringToU8a(BOB_SEED));\n\n  // Note that we did not use `addFromAddress` since it does not add the\n  // secret key to memory so we cannot later retrieve it with `getPairs`\n\n  // Retrieve all keyring pairs from the keyring pair dictionary\n  keyring\n    .getPairs()\n    .forEach((pair, index) => {\n      const { address } = pair;\n\n      console.log(`\\nAccount with index #${index} has json: `, JSON.stringify(keyring.toJson(address), null, 2));\n    });\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}y.isMDXComponent=!0}}]);