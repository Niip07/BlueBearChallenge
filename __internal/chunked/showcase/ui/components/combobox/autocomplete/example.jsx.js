var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/combobox/autocomplete/example.jsx.js"]=function(t){function e(e){for(var i,l,a=e[0],c=e[1],r=e[2],d=0,p=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);for(u&&u(e);p.length;)p.shift()();return n.push.apply(n,r||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],i=!0,a=1;a<o.length;a++){var c=o[a];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=o[0]))}return t}var i={},s={43:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},n=[];function l(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=t,l.c=i,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(o,i,function(e){return t[e]}.bind(null,i));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var r=0;r<a.length;r++)e(a[r]);var u=c;return n.push([591,0]),o()}({0:function(t,e){t.exports=React},15:function(t,e){t.exports=ReactDOM},591:function(t,e,o){"use strict";o.r(e),o.d(e,"states",(function(){return m})),o.d(e,"examples",(function(){return b}));var i=o(0),s=o.n(i),n=o(4),l=o(17),a=o(19),c=o(61),r=o(8),u=o(24),d=o(6),p=o(21);e.default=[{context:"Autocomplete",id:"".concat("Autocomplete".toLowerCase(),"-default"),label:"".concat("Autocomplete"," default"),element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-9",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-9",snapshot:p.n,type:"plain",count:3}),resultsType:"listbox",hasInteractions:!0})}];var m=[{context:"Autocomplete",id:"focused-open",label:"Focused - Open",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-10",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-10",snapshot:p.n,type:"plain",count:3}),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{context:"Autocomplete",id:"lookup-focused-open",label:"Lookup - Focused - Open",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-15",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-15",snapshot:p.a,type:"entity",count:2}),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{context:"Autocomplete",id:"typeahead",label:"Typeahead",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-11",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),value:"opp",results:s.a.createElement(a.e,{id:"listbox-id-11",snapshot:p.s,term:"opp",type:"plain",count:4}),resultsType:"listbox",isOpen:!0,hasFocus:!0})},{context:"Autocomplete",id:"lookup-typeahead",label:"Lookup - Typeahead",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-16",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),value:"salesforce",results:s.a.createElement(a.e,{id:"listbox-id-16",snapshot:p.d,term:"salesforce",type:"entity",count:4}),resultsType:"listbox","aria-activedescendant":"option0",isOpen:!0,hasFocus:!0})},{context:"Autocomplete",id:"highlighting-an-option",label:"Highlighting an option",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-12",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-12",snapshot:p.o,type:"plain",count:3}),resultsType:"listbox","aria-activedescendant":"option1",isOpen:!0,hasFocus:!0})},{context:"Autocomplete",id:"lookup-highlighting-an-option",label:"Lookup - Highlighting an option",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-17",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-17",snapshot:p.b,type:"entity",count:2}),resultsType:"listbox","aria-activedescendant":"option1",isOpen:!0,hasFocus:!0})},{context:"Autocomplete",id:"selected-an-option",label:"Selected an option",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-unique-id-03",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(n.b,{className:"slds-input__icon slds-input__icon_right",symbol:"clear",title:"Clear the text input",assistiveText:"Clear the text input"}),results:s.a.createElement(a.e,{id:"listbox-unique-id-03",snapshot:p.n,type:"entity",count:3}),resultsType:"listbox",value:"GenePoint",hasSelection:!0,selectOnly:!0})},{context:"Autocomplete",id:"lookup-selected-an-option",label:"Lookup - Selected an option",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-18",inputIconPosition:"left-right",leftInputIcon:s.a.createElement(u.StandardIcon,{symbol:"account",className:"slds-icon_small",containerClassName:"slds-combobox__input-entity-icon",assistiveText:"Account",title:"Account"}),rightInputIcon:s.a.createElement(n.b,{className:"slds-input__icon slds-input__icon_right",symbol:"close",title:"Remove selected option",assistiveText:"Remove selected option"}),results:s.a.createElement(a.e,{id:"listbox-id-18",snapshot:p.a,type:"entity",count:2}),resultsType:"listbox",hasSelection:!0,value:"Salesforce.com, Inc.",selectOnly:!0})},{context:"Autocomplete",id:"selected-multiple-options",label:"Selected multiple options",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-13",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-13",snapshot:p.n,type:"entity",count:3}),resultsType:"listbox",hasSelection:!0,listboxOfSelections:s.a.createElement(c.a,{snapshot:p.r,count:2})})},{context:"Autocomplete",id:"lookup-multiple-options",label:"Lookup - Selected multiple options",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-19",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-19",snapshot:p.a,type:"entity",count:2}),resultsType:"listbox",hasSelection:!0,listboxOfSelections:s.a.createElement(c.a,{snapshot:p.e,count:2})})}],b=[{context:"Autocomplete",id:"lookup",label:"Lookup",element:s.a.createElement(l.b,{id:d.d.uniqueId("combobox-id-"),"aria-controls":"listbox-id-14",autocomplete:!0,inputIconPosition:"right",rightInputIcon:s.a.createElement(r.UtilityIcon,{symbol:"search",className:"slds-icon slds-icon_x-small slds-icon-text-default",containerClassName:"slds-input__icon slds-input__icon_right",assistiveText:!1,title:!1}),results:s.a.createElement(a.e,{id:"listbox-id-14",snapshot:p.a,type:"entity",count:2}),resultsType:"listbox",hasInteractions:!0})}]}});