var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/path/base/example.jsx.js"]=function(e){function t(t){for(var a,i,r=t[0],c=t[1],s=t[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);p.length;)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={113:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},l=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var s=0;s<r.length;s++)t(r[s]);var u=c;return l.push([668,0]),n()}({0:function(e,t){e.exports=React},15:function(e,t){e.exports=ReactDOM},175:function(e){e.exports=JSON.parse('[{"id":"iphone-11-pro-max","description":"iPhone 11 Pro Max","dimensions":{"width":414,"height":896}},{"id":"iphone-11-pro","description":"iPhone 11 Pro","dimensions":{"width":375,"height":812}},{"id":"iphone-11","description":"iPhone 11","dimensions":{"width":414,"height":896}},{"id":"iphone-xr","description":"iPhone XR","dimensions":{"width":414,"height":896}},{"id":"iphone-x","description":"iPhone X","dimensions":{"width":375,"height":812}},{"id":"iphone-8-plus","description":"iPhone 8 Plus","dimensions":{"width":414,"height":736}},{"id":"iphone-8","description":"iPhone 8","dimensions":{"width":375,"height":667}},{"id":"ipad-pro","description":"iPad Pro","dimensions":{"width":1024,"height":1366}},{"id":"ipad","description":"iPad 3rd & 4th Generation","dimensions":{"width":768,"height":1024}},{"id":"pixel-3xl","description":"Google Pixel 3 XL","dimensions":{"width":412,"height":847}},{"id":"pixel-3","description":"Google Pixel 3","dimensions":{"width":412,"height":824}},{"id":"pixel-2xl","description":"Google Pixel 2 XL","dimensions":{"width":412,"height":732}},{"id":"pixel","description":"Google Pixel","dimensions":{"width":412,"height":732}},{"id":"galaxy-s9","description":"Samsung Galaxy S8/S8+/S9/S9+","dimensions":{"width":360,"height":740}}]')},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(301);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,l=n(589),i=(o=l)&&o.__esModule?o:{default:o};t.default=i.default},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),l=(a=o)&&a.__esModule?a:{default:a};var i=void 0,r=void 0;"undefined"!=typeof document&&(i=document),"undefined"!=typeof window&&(r=window);var c=t.FrameContext=l.default.createContext({document:i,window:r}),s=c.Provider,u=c.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=u},589:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),r=p(i),c=p(n(15)),s=p(n(1)),u=n(301),d=p(n(590));function p(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o.handleLoad=function(){o.forceUpdate()},o._isMounted=!1,o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=!this._setInitialContent,l=r.default.createElement(d.default,{contentDidMount:t,contentDidUpdate:n},r.default.createElement(u.FrameContextProvider,{value:{document:e,window:a}},r.default.createElement("div",{className:"frame-content"},this.props.children)));o&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close(),this._setInitialContent=!0);var i=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(l,i)]}},{key:"render",value:function(){var e=this,t=o({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,r.default.createElement("iframe",o({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(i.Component);f.propTypes={style:s.default.object,head:s.default.node,initialContent:s.default.string,mountTarget:s.default.string,contentDidMount:s.default.func,contentDidUpdate:s.default.func,children:s.default.oneOfType([s.default.element,s.default.arrayOf(s.default.element)])},f.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=f},590:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(0),i=(r(l),r(n(1)));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==a(t)&&"function"!=typeof t?e:t}var u=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+a(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return l.Children.only(this.props.children)}}]),t}(l.Component);u.propTypes={children:i.default.element.isRequired,contentDidMount:i.default.func.isRequired,contentDidUpdate:i.default.func.isRequired},t.default=u},668:function(e,t,n){"use strict";n.r(t),n.d(t,"states",(function(){return oe}));var a=n(0),o=n.n(a),l=n(221),i=n.n(l),r=n(106),c=n(1),s=n.n(c),u=n(5),d=n(107),p=n(175);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E={};p.map((function(e,t){E[e.id]=t}));var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(s,e);var t,n,a,c=y(s);function s(){return m(this,s),c.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.hideDeviceSelector,a=e.frameStyles,c=e.frameTitle,s=!1;a&&a.hasOwnProperty("height")&&(s=!0);var f=Math.random().toString(36).substr(2,9),m="example-frame-"+f,h="device-selector-"+f,b=function(e){var t=e.target.value||"iphone-11",n=E[t],a=p[n],o=document.getElementById(m),l=a?a.dimensions.width+"px":null;o.style.width=l,!s&&o.contentWindow.resizeIframe&&o.contentWindow.resizeIframe()},y='\n      <!DOCTYPE html>\n      <html>\n        <head>\n          <link rel="stylesheet" type="text/css" href="/assets/styles/salesforce-lightning-design-system.min.css" />\n          <link rel="stylesheet" type="text/css" href="/assets/__internal/styles/salesforce-lightning-design-system_touch-demo.min.css" />\n          <style type="text/css">\n            html { background: transparent !important; padding: 1rem; }\n          </style>\n        </head>\n        <body>\n          <div></div>'+(s?"":"<script>\n            function resizeIframe() {\n              window.frameElement.classList.remove('slds-resize-done');\n              const offsetHeight = document.documentElement.offsetHeight;\n              const frameHeight = offsetHeight + (window.frameElement.offsetHeight - window.frameElement.clientHeight);\n              window.frameElement.style.height =  Math.ceil(frameHeight) + \"px\";\n              window.frameElement.classList.add('slds-resize-done');\n            }\n\n            window.parent.addEventListener(\"resize\", resizeIframe);\n            setTimeout(resizeIframe, 250);\n          <\/script>")+"</body>\n      </html>";return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{className:"docs-mobile_frame",id:m,initialContent:y,style:a,onLoad:b,title:c},o.a.createElement(l.FrameContextConsumer,null,(function(e){return o.a.createElement(r.a,{target:e.document.head},o.a.createElement(o.a.Fragment,null,t))}))),!n&&o.a.createElement("ul",{className:"docs-codeblock__action-bar docs-codeblock__device-selector"},o.a.createElement("li",null,o.a.createElement(u.b,{isHorizontal:!0,labelContent:"Select a device to set the width of the example",inputId:h},o.a.createElement(d.Select,{id:h,onChange:b},o.a.createElement("option",{value:"no-device"},"No device"),p.map((function(e,t){var n="iphone-11"===e.id;return o.a.createElement("option",{key:t,value:e.id,selected:n},e.description)})))))))}}])&&h(t.prototype,n),a&&h(t,a),s}(o.a.Component);S.propTypes={hideDeviceSelector:s.a.bool,frameStyles:s.a.object,frameTitle:s.a.string};var x=n(63),_=n(2),w=n.n(_),O=n(12),C=n(4),P=n(9),N=n(43);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=M(e);if(t){var o=M(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var L=function(e){return o.a.createElement("div",{className:w()("slds-path",{"slds-path_has-coaching":e.hasCoaching,"slds-is-expanded":e.coachingOpen})},e.children)};L.propTypes={hasCoaching:s.a.bool,coachingOpen:s.a.bool},L.defaultProps={hasCoaching:!1,coachingOpen:!1};var I=function(e){var t=e.hasCoaching,n=e.coachingOpen,a=e.hasOverflow,l=e.coachingId,i=e.stageName,r=e.actionButtonLabel;return o.a.createElement("div",{className:w()("slds-grid slds-path__track",{"slds-has-overflow":a})},o.a.createElement("div",{className:"slds-grid slds-path__scroller-container"},t?o.a.createElement(C.b,{symbol:"chevronright",theme:"neutral",className:w()("slds-path__trigger",{"slds-path__trigger_open":n}),assistiveText:"Show Details",title:"Toggle Sales Coaching","aria-expanded":n,"aria-controls":l}):null,o.a.createElement("div",{className:"slds-path__scroller"},o.a.createElement("div",{className:"slds-path__scroller_inner"},o.a.createElement("ul",{className:"slds-path__nav",role:"listbox","aria-orientation":"horizontal"},e.children),a?o.a.createElement("div",{className:"slds-path__scroll-controls"},o.a.createElement(C.b,{symbol:"left",theme:"neutral",assistiveText:"Scroll left",title:"Scroll left",tabIndex:"-1"}),o.a.createElement(C.b,{symbol:"right",theme:"neutral",assistiveText:"Scroll right",title:"Scroll right",tabIndex:"-1"})):null))),o.a.createElement("div",{className:"slds-grid slds-path__action"},o.a.createElement("span",{className:"slds-path__stage-name"},"Stage: ",i),o.a.createElement(O.Button,{isBrand:!0,className:"slds-path__mark-complete"},r),t?o.a.createElement(O.Button,{isNeutral:!0,className:"slds-path__trigger-coaching-content","aria-expanded":n,"aria-controls":l},n?"Show Less":"Show More"):null))};I.propTypes={hasCoaching:s.a.bool,coachingOpen:s.a.bool,hasOverflow:s.a.bool,coachingId:s.a.string,stageName:s.a.string,actionButtonLabel:s.a.node},I.defaultProps={hasCoaching:!1,coachingOpen:!1,hasOverflow:!1,coachingId:"",stageName:"Unqualified",actionButtonLabel:o.a.createElement(a.Fragment,null,o.a.createElement(P.a,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"check","aria-hidden":"true"}),"Mark Status as Complete")};var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,a,l=D(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=l.call(this)).state={itemRef:null},e}return t=i,(n=[{key:"componentDidUpdate",value:function(e,t){var n=this.props.setTooltipRef,a=this.state.itemRef;n&&a!==t.itemRef&&n(a)}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,a=t.stepState,l=t.index,i=a.indexOf("active")>-1,r=a.indexOf("complete")>-1,c=a.indexOf("current")>-1,s=null;return r?s="Stage Complete":c&&(s="Current Stage:"),o.a.createElement("li",{className:w()("slds-path__item",a.map((function(e){return"slds-is-".concat(e)}))),role:"presentation",ref:function(t){e.state.itemRef||e.setState({itemRef:t})}},o.a.createElement("a",{"aria-selected":i,className:"slds-path__link",href:"#",onClick:function(e){return e.preventDefault()},id:"path-".concat(l),role:"option",tabIndex:i?0:-1},o.a.createElement("span",{className:"slds-path__stage"},o.a.createElement(P.a,{className:"slds-icon slds-icon_x-small",sprite:"utility",symbol:"check"}),s?o.a.createElement("span",{className:"slds-assistive-text"},s):null),o.a.createElement("span",{className:"slds-path__title"},n)))}}])&&j(t.prototype,n),a&&j(t,a),i}(a.Component);U.propTypes={label:s.a.string,stepState:s.a.arrayOf(s.a.string),index:s.a.number},U.defaultProps={label:"Undefined",stepState:["incomplete"],index:0};var B=function(e){var t=e.coachingId,n=e.isHidden,a=e.coachingData,l=e.pathGuidance;return o.a.createElement("div",{className:w()("slds-path__content",{"slds-is-collapsed":n}),id:t},o.a.createElement("div",{className:"slds-path__coach slds-grid"},o.a.createElement("div",{className:"slds-path__keys"},o.a.createElement("div",{className:"slds-grid slds-grid_align-spread slds-path__coach-title"},o.a.createElement("h2",null,"Key Fields This Stage"),o.a.createElement(O.Button,{className:"slds-path__coach-edit slds-text-body_small"},"Edit")),o.a.createElement(N.a,{direction:"stacked",snapshot:a,isViewMode:!0})),o.a.createElement("div",{className:"slds-path__guidance"},o.a.createElement("h2",{className:"slds-path__coach-title"},"Guidance for Success"),o.a.createElement("div",{className:"slds-text-longform slds-path__guidance-content"},l))))};function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=A(e);if(t){var o=A(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}B.propTypes={coachingId:s.a.string,isHidden:s.a.bool,coachingData:s.a.object,pathGuidance:s.a.arrayOf(s.a.node)},B.defaultProps={coachingId:null,isHidden:!1,coachingData:{rows:[{fields:[{type:"text",label:"Expected Budget",value:"$10,000"}]},{fields:[{type:"text",label:"Lead Source",value:"Marketing and Web Referral"}]},{fields:[{type:"text",label:"Support Engineer",value:"Jane Authur"}]}]},pathGuidance:[o.a.createElement("p",{key:"guidance-1"},"Regularly cross-sell related products using"," ",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"cross-sell tactics and principles"),"."),o.a.createElement("p",{key:"guidance-2"},"Prepare demo deck using the"," ",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"latest template")," ","and review with Marketing and Sales teams. Review demo copy with Legal and Doc team."),o.a.createElement("p",{key:"guidance-3"},"Look up"," ",o.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"needs analysis principles")," ","and review selling plan with Sales Engineer.")]};var V=function(){return o.a.createElement(L,null,o.a.createElement(I,null,o.a.createElement(U,{label:"Contacted",stepState:["current","active"],index:1}),o.a.createElement(U,{label:"Open",stepState:["incomplete"],index:2}),o.a.createElement(U,{label:"Unqualified",stepState:["incomplete"],index:3}),o.a.createElement(U,{label:"Nurturing",stepState:["incomplete"],index:4}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:5})))},X=function(){return o.a.createElement(L,null,o.a.createElement(I,null,o.a.createElement(U,{label:"Contacted",stepState:["complete"],index:6}),o.a.createElement(U,{label:"Open",stepState:["complete"],index:7}),o.a.createElement(U,{label:"Unqualified",stepState:["complete"],index:8}),o.a.createElement(U,{label:"Nurturing",stepState:["current","active"],index:9}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:10})))},J=function(){return o.a.createElement(L,null,o.a.createElement(I,{actionButtonLabel:"Mark as Current Stage"},o.a.createElement(U,{label:"Contacted",stepState:["current"],index:11}),o.a.createElement(U,{label:"Open",stepState:["incomplete"],index:12}),o.a.createElement(U,{label:"Unqualified",stepState:["active"],index:13}),o.a.createElement(U,{label:"Nurturing",stepState:["incomplete"],index:14}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:15})))},Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(r,e);var t,n,l,i=z(r);function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=i.call(this)).updateTooltipOffset=e.updateTooltipOffset.bind(G(e)),e.setTooltipRef=e.setTooltipRef.bind(G(e)),e.state={tooltipRef:null,tooltipLeft:0,tooltipTop:0},e}return t=r,(n=[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateTooltipOffset),this.updateTooltipOffset()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateTooltipOffset)}},{key:"componentDidUpdate",value:function(e,t){this.state.tooltipRef&&!t.tooltipRef&&this.updateTooltipOffset()}},{key:"updateTooltipOffset",value:function(){var e=this.state.tooltipRef,t=0,n=0;e&&(t=e.offsetLeft+e.offsetWidth/2,n=e.offsetTop+e.offsetHeight+14),this.setState({tooltipLeft:t,tooltipTop:n})}},{key:"setTooltipRef",value:function(e){this.setState({tooltipRef:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.tooltipLeft,l=t.tooltipTop;return o.a.createElement(a.Fragment,null,o.a.createElement(L,null,o.a.createElement(I,{actionButtonLabel:"Mark as Current Stage"},o.a.createElement(U,{label:"Contacted",stepState:["complete"],index:16}),o.a.createElement(U,{label:"Open",stepState:["complete"],index:17}),o.a.createElement(U,{label:"Unqualified",stepState:["current"],index:18,setTooltipRef:function(t){return e.setTooltipRef(t)}}),o.a.createElement(U,{label:"Nurturing",stepState:["active"],index:19}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:20})),o.a.createElement(x.Tooltip,{className:"slds-nubbin_top",style:{left:"".concat(n,"px"),transform:"translateX(-50%)",top:"".concat(l,"px"),position:"absolute"}},"3 Days in Unqualified")))}}])&&q(t.prototype,n),l&&q(t,l),r}(a.Component),Y=function(){return o.a.createElement(L,{hasCoaching:!0},o.a.createElement(I,{coachingId:"path-coaching-1",hasCoaching:!0},o.a.createElement(U,{label:"Contacted",stepState:["complete"],index:21}),o.a.createElement(U,{label:"Open",stepState:["complete"],index:22}),o.a.createElement(U,{label:"Unqualified",stepState:["active","current"],index:23}),o.a.createElement(U,{label:"Nurturing",stepState:["incomplete"],index:24}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:25})),o.a.createElement(B,{coachingId:"path-coaching-1",labelledBy:"path-23",isHidden:!0}))},K=function(){return o.a.createElement(L,{hasCoaching:!0,coachingOpen:!0},o.a.createElement(I,{coachingId:"path-coaching-2",hasCoaching:!0,coachingOpen:!0},o.a.createElement(U,{label:"Contacted",stepState:["complete"],index:26}),o.a.createElement(U,{label:"Open",stepState:["complete"],index:27}),o.a.createElement(U,{label:"Unqualified",stepState:["current"],index:28}),o.a.createElement(U,{label:"Nurturing",stepState:["incomplete","active"],index:29}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:30})),o.a.createElement(B,{coachingId:"path-coaching-2",labelledBy:"path-28"}))},$=function(){return o.a.createElement(L,null,o.a.createElement(I,{actionButtonLabel:"Change Closed State"},o.a.createElement(U,{label:"Contacted",stepState:["complete"],index:31}),o.a.createElement(U,{label:"Open",stepState:["complete"],index:32}),o.a.createElement(U,{label:"Unqualified",stepState:["complete"],index:33}),o.a.createElement(U,{label:"Nurturing",stepState:["complete"],index:34}),o.a.createElement(U,{label:"Closed Won",stepState:["won","active","current"],index:35})))},Z=function(){return o.a.createElement(L,null,o.a.createElement(I,{actionButtonLabel:"Change Closed State"},o.a.createElement(U,{label:"Contacted",stepState:["incomplete"],index:36}),o.a.createElement(U,{label:"Open",stepState:["incomplete"],index:37}),o.a.createElement(U,{label:"Unqualified",stepState:["incomplete"],index:38}),o.a.createElement(U,{label:"Nurturing",stepState:["incomplete"],index:39}),o.a.createElement(U,{label:"Closed Lost",stepState:["lost","active","current"],index:40})))},ee=function(){return o.a.createElement(L,null,o.a.createElement(I,{hasOverflow:!0},o.a.createElement(U,{label:"Prospecting",stepState:["complete"],index:41}),o.a.createElement(U,{label:"Qualification",stepState:["complete"],index:42}),o.a.createElement(U,{label:"Needs Analysis",stepState:["active","current"],index:43}),o.a.createElement(U,{label:"Value Proposition",stepState:["incomplete"],index:44}),o.a.createElement(U,{label:"Id. Decision Maker",stepState:["incomplete"],index:45}),o.a.createElement(U,{label:"Perception Analysis",stepState:["incomplete"],index:46}),o.a.createElement(U,{label:"Proposal / Pricing",stepState:["incomplete"],index:47}),o.a.createElement(U,{label:"Negotiation / Review",stepState:["incomplete"],index:48}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:49})))},te=function(){return o.a.createElement("div",{className:"slds-region_medium",style:{width:"700px"}},o.a.createElement(L,null,o.a.createElement(I,null,o.a.createElement(U,{label:"Contacted",stepState:["complete"],index:50}),o.a.createElement(U,{label:"Open",stepState:["complete"],index:51}),o.a.createElement(U,{label:"Unqualified",stepState:["active","current"],index:52}),o.a.createElement(U,{label:"Nurturing",stepState:["incomplete"],index:53}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:54}))))},ne=function(){return o.a.createElement("div",{className:"slds-region_medium",style:{width:"700px"}},o.a.createElement(L,{hasCoaching:!0,coachingOpen:!0},o.a.createElement(I,{stageName:"Needs Analysis",coachingId:"path-coaching-2",hasCoaching:!0,coachingOpen:!0,hasOverflow:!0},o.a.createElement(U,{label:"Prospecting",stepState:["complete"],index:55}),o.a.createElement(U,{label:"Qualification",stepState:["complete"],index:56}),o.a.createElement(U,{label:"Needs Analysis",stepState:["active","current"],index:57}),o.a.createElement(U,{label:"Value Proposition",stepState:["incomplete"],index:58}),o.a.createElement(U,{label:"Id. Decision Maker",stepState:["incomplete"],index:59}),o.a.createElement(U,{label:"Perception Analysis",stepState:["incomplete"],index:60}),o.a.createElement(U,{label:"Proposal / Pricing",stepState:["incomplete"],index:61}),o.a.createElement(U,{label:"Negotiation / Review",stepState:["incomplete"],index:62}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:63})),o.a.createElement(B,{coachingId:"path-coaching-2",labelledBy:"path-57"})))},ae=function(){return o.a.createElement("div",{className:"slds-region_small",style:{width:"360px"}},o.a.createElement(L,{hasCoaching:!0,coachingOpen:!0},o.a.createElement(I,{stageName:"Needs Analysis",coachingId:"path-coaching-3",hasOverflow:!0,hasCoaching:!0,coachingOpen:!0},o.a.createElement(U,{label:"Prospecting",stepState:["complete"],index:64}),o.a.createElement(U,{label:"Qualification",stepState:["complete"],index:65}),o.a.createElement(U,{label:"Needs Analysis",stepState:["active","current"],index:66}),o.a.createElement(U,{label:"Value Proposition",stepState:["incomplete"],index:67}),o.a.createElement(U,{label:"Id. Decision Maker",stepState:["incomplete"],index:68}),o.a.createElement(U,{label:"Perception Analysis",stepState:["incomplete"],index:69}),o.a.createElement(U,{label:"Proposal / Pricing",stepState:["incomplete"],index:70}),o.a.createElement(U,{label:"Negotiation / Review",stepState:["incomplete"],index:71}),o.a.createElement(U,{label:"Closed",stepState:["incomplete"],index:72})),o.a.createElement(B,{coachingId:"path-coaching-3",labelledBy:"path-66"})))},oe=(t.default=o.a.createElement(V,null),[{id:"later-stage",label:"In a later stage",element:o.a.createElement(X,null)},{id:"different-stage-selected",label:"With different stage selected",element:o.a.createElement(J,null)},{id:"with-visible-tooltip",label:"With visible tooltip",element:o.a.createElement(Q,null)},{id:"with-coaching",label:"With coaching available",element:o.a.createElement(Y,null)},{id:"different-coaching",label:"With different stage selected - with coaching",element:o.a.createElement(K,null)},{id:"lost",label:"Lost",element:o.a.createElement(Z,null)},{id:"won",label:"Won",element:o.a.createElement($,null)},{id:"with-overflow",label:"Path with overflow",element:o.a.createElement(ee,null)},{id:"medium",label:"Medium viewport",element:o.a.createElement(te,null)},{id:"medium-coaching",label:"Medium viewport with coaching",element:o.a.createElement(ne,null)},{id:"small-coaching",label:"Small viewport",element:o.a.createElement(ae,null)},{id:"mobile-default",label:"Mobile: default",element:o.a.createElement(S,{hideDeviceSelector:!0},o.a.createElement(V,null))}])}});