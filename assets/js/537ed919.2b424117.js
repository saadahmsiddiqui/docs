"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[613],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,f=u["".concat(d,".").concat(g)]||u[g]||p[g]||s;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=g;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8582:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),s=(n(7294),n(4137)),i=["components"],o={title:"Addresses"},d=void 0,l={unversionedId:"ui-keyring/start/addresses",id:"ui-keyring/start/addresses",title:"Addresses",description:"As mentioned in previous sections, the keyring not only has the ability to manage accounts (i.e. keypairs), but also allows you to add addresses/contacts as well as contracts to the keyring. This is very useful in the case where you are developing a wallet and want to save external addresses to interact with.",source:"@site/docs/ui-keyring/start/addresses.md",sourceDirName:"ui-keyring/start",slug:"/ui-keyring/start/addresses",permalink:"/docs/ui-keyring/start/addresses",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/start/addresses.md",tags:[],version:"current",frontMatter:{title:"Addresses"},sidebar:"reference",previous:{title:"Accounts",permalink:"/docs/ui-keyring/start/accounts"},next:{title:"Loading saved pairs",permalink:"/docs/ui-keyring/start/loading"}},c={},u=[{value:"Adding an address",id:"adding-an-address",level:2},{value:"Removing an address",id:"removing-an-address",level:2},{value:"Retrieving previously-saved",id:"retrieving-previously-saved",level:2}],p={toc:u},g="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,s.kt)(g,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"As mentioned in previous sections, the keyring not only has the ability to manage accounts (i.e. keypairs), but also allows you to add addresses/contacts as well as contracts to the keyring. This is very useful in the case where you are developing a wallet and want to save external addresses to interact with."),(0,s.kt)("p",null,"Here we will give an overview of working with addresses, the same concepts can be expanded to work with contracts."),(0,s.kt)("h2",{id:"adding-an-address"},"Adding an address"),(0,s.kt)("p",null,"For accounts, we have the ",(0,s.kt)("inlineCode",{parentName:"p"},"addUri(...)")," endpoint that allows us to create and save an account. For addresses, we the keyring exposes ",(0,s.kt)("inlineCode",{parentName:"p"},"saveAddress (address: string, meta: KeyringPair$Meta)"),", which we can use to save any address -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n// add the address\nconst FAUCET_ADDR = 'FvnazYM5KAetYpXoVDfqt9WFcJogKbekXVJ3Fz5oW2Dv82P';\nconst json = keyring.saveAddress(FAUCET_ADDR, { name: 'Alex faucet' });\n\n// the faucet will now be in the list of available addresses\nkeyring.getAddresses().forEach(...)\n")),(0,s.kt)("p",null,"From this point forward, the address is in your keyring and can be retrieved via the ",(0,s.kt)("inlineCode",{parentName:"p"},"getAddresses()")," interface. The same call can be used to update the meta for the address, for instance if we wish to change the name above, we can do -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\nconst json = keyring.saveAddress(FAUCET_ADDR, { name: 'Alexander Faucet' });\n")),(0,s.kt)("p",null,"And the already-saved address will be updated with the new metadata."),(0,s.kt)("h2",{id:"removing-an-address"},"Removing an address"),(0,s.kt)("p",null,"To clear and address and remove it from the keyring, we can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"forgetAddress(address: string)")," call, this mirrors the ",(0,s.kt)("inlineCode",{parentName:"p"},"forgetAccount(address: string)")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"forgetContract(address: string)")," calls. For instance -"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"...\n// remove the specific address\nkeyring.forgetAddress(FAUCET_ADDR);\n\n/// the faucet will not be in the list of addresses anymore\nkeyring.getAddresses().forEach(...)\n")),(0,s.kt)("h2",{id:"retrieving-previously-saved"},"Retrieving previously-saved"),(0,s.kt)("p",null,"With all interactions with the keyring, the information is persisted. In the next section we will take a look at ",(0,s.kt)("a",{parentName:"p",href:"/docs/ui-keyring/start/loading"},"retrieval of saved information"),", typically done on first init."))}f.isMDXComponent=!0}}]);