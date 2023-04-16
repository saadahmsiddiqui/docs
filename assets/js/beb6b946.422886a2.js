"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[5361],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4367:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),o=["components"],s={title:"Installation"},l=void 0,p={unversionedId:"api/start/install",id:"api/start/install",title:"Installation",description:"Yes, it really is as simple as installing from npm, so we are not going to waste too much time with the bare basics, just install the API via",source:"@site/docs/api/start/install.md",sourceDirName:"api/start",slug:"/api/start/install",permalink:"/docs/api/start/install",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/install.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api/start"},next:{title:"Basics & Metadata",permalink:"/docs/api/start/basics"}},c={},d=[{value:"Betas",id:"betas",level:2},{value:"Other dependencies",id:"other-dependencies",level:2},{value:"API basics",id:"api-basics",level:2}],u={toc:d},h="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Yes, it really is as simple as ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/api"},"installing from npm"),", so we are not going to waste too much time with the bare basics, just install the API via"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/api")),(0,i.kt)("p",null,"And it will be added and ready for use. The above will always install the latest stable release, which should allow you to connect to test networks and local nodes that are tracking versioned releases for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"Polkadot")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate"),"."),(0,i.kt)("h2",{id:"betas"},"Betas"),(0,i.kt)("p",null,"For users who have a slightly higher appetite for risk, or are using bleeding-edge master branches of either Polkadot/Substrate, we also publish a beta version as soon as anything is merged into the API master branch. This version really contains all the latest fixes and features and is the version we actually use inside the polkadot-js projects - eating our own dog food."),(0,i.kt)("p",null,"To install a beta version, either to test or for support of a feature that is available in Substrate master (and has not yet made it to a stable api release), you can install it via the ",(0,i.kt)("inlineCode",{parentName:"p"},"@beta")," tag, i.e."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/api@beta")),(0,i.kt)("h2",{id:"other-dependencies"},"Other dependencies"),(0,i.kt)("p",null,"In most cases, you don't need to do anything else apart from just installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," above. It has dependencies such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/types")," which are installed automatically alongside. When using ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," the dependencies are installed, flattened, available for use and you will never run into issues with mismatched versions."),(0,i.kt)("p",null,"This means that by simply installing ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api"),", you will have access to utilities (crypto and normal), types, providers and even higher-order (derived) API functions. (We will get to all of these in follow-up sections)"),(0,i.kt)("p",null,"If you do however decide to explicitly install other packages (even though they are dependencies), please make sure that the versions inside the api package always match with your versions, i.e. if you installed ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2.1.2-3")," and you have your own version of ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/types"),", ensure that it is also ",(0,i.kt)("inlineCode",{parentName:"p"},"2.1.2-3"),"."),(0,i.kt)("h2",{id:"api-basics"},"API basics"),(0,i.kt)("p",null,"So we have it installed. Before we jump into actual real-world usage, ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/basics"},"let's understand what the API gives us"),"."))}m.isMDXComponent=!0}}]);