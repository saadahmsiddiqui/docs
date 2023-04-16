"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[4638],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4483:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(4137)),i=["components"],s={title:"FAQ"},l=void 0,p={unversionedId:"usage/FAQ",id:"usage/FAQ",title:"FAQ",description:"The list will be updated/expanded as questions come up, dealing with some common build questions that library users find.",source:"@site/docs/usage/FAQ.md",sourceDirName:"usage",slug:"/usage/FAQ",permalink:"/docs/usage/FAQ",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/usage/FAQ.md",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"reference",previous:{title:"FAQ",permalink:"/docs/extension/FAQ"}},u={},c=[{value:"Under TypeScript I have TS compilation errors",id:"under-typescript-i-have-ts-compilation-errors",level:2},{value:"On Webpack 4 I have a parse error on import.meta.url",id:"on-webpack-4-i-have-a-parse-error-on-importmetaurl",level:2},{value:"Under my babel build, I have a BigInt to number conversion error",id:"under-my-babel-build-i-have-a-bigint-to-number-conversion-error",level:2},{value:"I would like to use browser bundles, bypassing the compile step",id:"i-would-like-to-use-browser-bundles-bypassing-the-compile-step",level:2},{value:"I am having trouble with Jest, ESM and the libraries",id:"i-am-having-trouble-with-jest-esm-and-the-libraries",level:2}],m={toc:c},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The list will be updated/expanded as questions come up, dealing with some common build questions that library users find."),(0,o.kt)("h2",{id:"under-typescript-i-have-ts-compilation-errors"},"Under TypeScript I have TS compilation errors"),(0,o.kt)("p",null,"When running into TypeScript errors, ensure that you are on a recent version. The API (and common utilities) rely extensively on ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html"},"template literals")," which were introduced in ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html"},"Typescript version 4.1"),"."),(0,o.kt)("p",null,"Additionally the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/"},"rxjs library")," (used internally by the API), requires at least a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/6bd1c5f3cf0e387973b44698c48bc933e8c528aa/package.json#L9"},"TypeScript 4.2 version"),", without it the Observable types are not correctly resolved."),(0,o.kt)("p",null,"The API itself generally always uses the latest TypeScript versions under development, but the use of new of features are delayed to at least 2 major versions to not require immediate upgrades of the compilers."),(0,o.kt)("h2",{id:"on-webpack-4-i-have-a-parse-error-on-importmetaurl"},"On Webpack 4 I have a parse error on import.meta.url"),(0,o.kt)("p",null,"Under CJS environments ",(0,o.kt)("inlineCode",{parentName:"p"},"__dirname")," is used to determine package locations, on ESM environments the ",(0,o.kt)("inlineCode",{parentName:"p"},"new URL('.', import.meta.url).pathname")," form is used to yield the same results. This resolves a long-running issue where the functionality was not available under ESM environments."),(0,o.kt)("p",null,"Webpack 4 doesn't support the ",(0,o.kt)("inlineCode",{parentName:"p"},"import.meta.url")," syntax (the Webpack 5 betas added support, which was not backported), however there is a plugin available to add this functionality, specifically ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@open-wc/webpack-import-meta-loader"},"https://www.npmjs.com/package/@open-wc/webpack-import-meta-loader"),"."),(0,o.kt)("p",null,"The following config has been verified as working for old versions of Webpack -"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module: {\n  rules: [\n    {\n      test: /\\.js$/,\n      loader: require.resolve('@open-wc/webpack-import-meta-loader'),\n    }\n  ]\n}\n")),(0,o.kt)("h2",{id:"under-my-babel-build-i-have-a-bigint-to-number-conversion-error"},"Under my babel build, I have a BigInt to number conversion error"),(0,o.kt)("p",null,"This is casued by a Babel config that transforms inputs such as ",(0,o.kt)("inlineCode",{parentName:"p"},"2 ** 32")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.pow(2, 32)"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"transform-exponentiation-operator")," is not ",(0,o.kt)("inlineCode",{parentName:"p"},"BigInt")," aware, which means that it also transforms\n",(0,o.kt)("inlineCode",{parentName:"p"},"BigInt(2) ** BigInt(256)")," into an invalid ",(0,o.kt)("inlineCode",{parentName:"p"},"Math.pow(BigInt(2), BigInt(256))")," which then fails on execution."),(0,o.kt)("p",null,"It is not specific to the API or libraries, but rather the local build environment and a known issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockstack/stacks.js/issues/1096#issuecomment-946350299"},"https://github.com/blockstack/stacks.js/issues/1096#issuecomment-946350299")," which can be fixed with 1 of two overrides as per the linked issue -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"exclude Babel ",(0,o.kt)("inlineCode",{parentName:"li"},"transform-exponentiation-operator")),(0,o.kt)("li",{parentName:"ul"},"adjust browserslist to exclude old versions")),(0,o.kt)("h2",{id:"i-would-like-to-use-browser-bundles-bypassing-the-compile-step"},"I would like to use browser bundles, bypassing the compile step"),(0,o.kt)("p",null,"All libraries ship with UMD browser bundles as part of the npm packages. For instance for the ",(0,o.kt)("inlineCode",{parentName:"p"},"@polkadot/util")," libraries, a ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle-polkadot-util.js")," is provided. Depending on usage, multiple bundles may be needed, for instance the API would depend on both the ",(0,o.kt)("inlineCode",{parentName:"p"},"util")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"util-crypto")," libraries."),(0,o.kt)("p",null,"For sample usage, please see the test HTML bundles provides in each relevant repo -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/common/blob/master/test-bundle.html"},"https://github.com/polkadot-js/common/blob/master/test-bundle.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api/blob/master/test-bundle.html"},"https://github.com/polkadot-js/api/blob/master/test-bundle.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/extension/blob/master/test-bundle.html"},"https://github.com/polkadot-js/extension/blob/master/test-bundle.html"))),(0,o.kt)("h2",{id:"i-am-having-trouble-with-jest-esm-and-the-libraries"},"I am having trouble with Jest, ESM and the libraries"),(0,o.kt)("p",null,"All the polkadot-js also use Jest for tests. When using Jest refer to the specific configuration for your environment -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Jest, ",(0,o.kt)("a",{parentName:"li",href:"https://jestjs.io/docs/ecmascript-modules"},"https://jestjs.io/docs/ecmascript-modules")),(0,o.kt)("li",{parentName:"ul"},"TS-Jest, ",(0,o.kt)("a",{parentName:"li",href:"https://kulshekhar.github.io/ts-jest/docs/guides/esm-support"},"https://kulshekhar.github.io/ts-jest/docs/guides/esm-support"))),(0,o.kt)("p",null,"Also bear in mind that packages expose ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"exports")," fields in ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". Under environments such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/browserify/resolve/issues/222"},"Jest using browserify/resolve"),", it is advisable to import from the root, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"import { ApiPromise } from '@polkadot/api'")," as opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"import { ApiPromise } from '@polkadot/api/promise'")),(0,o.kt)("p",null,"Additionally the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/dev/blob/master/packages/dev/config/jest.cjs"},"polkadot-js Jest config")," may prove to be useful as a template, specifically the ",(0,o.kt)("inlineCode",{parentName:"p"},"transformIgnorePatterns")," which excludes certain folders (assuming transforms are not empty as per the linked suggestions above)."))}h.isMDXComponent=!0}}]);