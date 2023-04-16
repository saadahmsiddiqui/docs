"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2873],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(4137)),i=["components"],c={title:"React"},s=void 0,l={unversionedId:"ui-identicon/react",id:"ui-identicon/react",title:"React",description:"A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot",source:"@site/docs/ui-identicon/react.md",sourceDirName:"ui-identicon",slug:"/ui-identicon/react",permalink:"/docs/ui-identicon/react",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-identicon/react.md",tags:[],version:"current",frontMatter:{title:"React"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/ui-identicon"},next:{title:"React Native",permalink:"/docs/ui-identicon/react-native"}},u={},p=[{value:"Usage Examples",id:"usage-examples",level:2}],d={toc:p},f="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot"),(0,a.kt)("h2",{id:"usage-examples"},"Usage Examples"),(0,a.kt)("p",null,"To install the component, do ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add @polkadot/react-identicon")),(0,a.kt)("p",null,"Inside a React component, you can now render any account with the associated icon -"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import Identicon from '@polkadot/react-identicon';\n\n...\nrender () {\n  // address is an ss58-encoded address or publicKey (hex string or Uint8Array)\n  const { address } = this.props;\n  // size (optional) is a number, indicating the size (in pixels, 64 as default)\n  const size = 32;\n  // theme (optional), depicts the type of icon, one of\n  // 'polkadot', 'substrate' (default), 'beachball' or 'jdenticon'\n  const theme = 'polkadot';\n\n  // standard className & style props are also available\n  return (\n    <Identicon\n      value={address}\n      size={size}\n      theme={theme}\n    />\n  );\n}\n...\n")))}m.isMDXComponent=!0}}]);