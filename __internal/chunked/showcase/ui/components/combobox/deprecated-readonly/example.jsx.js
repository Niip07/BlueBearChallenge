var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/combobox/deprecated-readonly/example.jsx.js"]=function(e){function t(t){for(var o,c,r=t[0],i=t[1],d=t[2],s=0,u=[];s<r.length;s++)c=r[s],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&u.push(l[c][0]),l[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(p&&p(t);u.length;)u.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==l[i]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},l={47:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var p=i;return a.push([557,0]),n()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},557:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return p}));var o=n(0),l=n.n(o),a=n(26),c=n(19),r=n(16),i="Deprecated – Select-Only",d=function(e){return l.a.createElement(a.c,{listboxClassName:"slds-dropdown slds-dropdown_fluid",vertical:!0},e.heading&&l.a.createElement(c.c,{type:"plain",text:e.heading}),l.a.createElement(a.d,null,l.a.createElement(a.e,{id:"listbox-option-unique-id-01",title:"Option A",focused:e.focused,selected:e.optionOneSelected})),l.a.createElement(a.d,null,l.a.createElement(a.e,{id:"listbox-option-unique-id-02",title:"Option B",selected:e.optionTwoSelected})))};t.default=[{context:i,deprecated:!0,id:"".concat(i.toLowerCase(),"-default"),label:"".concat(i," default"),element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{inputIcon:"right",inputIconRightSymbol:"down",listbox:l.a.createElement(d,null),readonly:!0}))}];var p=[{context:i,deprecated:!0,id:"deprecated-focused",label:"Deprecated - Focused",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:l.a.createElement(d,null),readonly:!0})),script:"\n      document.getElementById('combobox-unique-id').focus()\n    "},{context:i,deprecated:!0,id:"deprecated-open-item-focused",label:"Deprecated - Open - Item Focused",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",listbox:l.a.createElement(d,{focused:!0}),"aria-activedescendant":"listbox-option-unique-id-01",readonly:!0}))},{context:i,deprecated:!0,id:"deprecated-open-option-selected",label:"Deprecated - Open - Option Selected",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:l.a.createElement(d,{optionOneSelected:!0}),readonly:!0}))},{context:i,deprecated:!0,id:"deprecated-open-options-selected",label:"Deprecated - Open - Option(s) Selected",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:l.a.createElement(d,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0}))},{context:i,deprecated:!0,id:"deprecated-closed-option-selected",label:"Deprecated - Option Selected",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:l.a.createElement(d,{focused:!0,optionOneSelected:!0}),readonly:!0}))},{context:i,deprecated:!0,id:"deprecated-closed-options-selected",label:"Deprecated - Option(s) Selected",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{inputIcon:"right",inputIconRightSymbol:"down",value:"2 Options Selected",listbox:l.a.createElement(d,{optionOneSelected:!0,optionTwoSelected:!0}),readonly:!0},l.a.createElement(r.b,{className:"slds-p-top_xxx-small"},l.a.createElement(r.c,null,l.a.createElement(r.a,{label:"Option A",tabIndex:"0"})),l.a.createElement(r.c,null,l.a.createElement(r.a,{label:"Option B"})))))},{context:i,deprecated:!0,id:"deprecated-open-option-heading",label:"Deprecated - Sub-heading",element:l.a.createElement("div",{className:"demo-only",style:{height:"10rem"}},l.a.createElement(a.a,{isOpen:!0,inputIcon:"right",inputIconRightSymbol:"down",value:"Option A",listbox:l.a.createElement(d,{optionOneSelected:!0,heading:"Recently Viewed"}),readonly:!0}))}]}});