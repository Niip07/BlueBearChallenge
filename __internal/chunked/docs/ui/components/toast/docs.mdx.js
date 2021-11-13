var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/toast/docs.mdx.js"]=function(e){function t(t){for(var a,r,i=t[0],o=t[1],c=t[2],d=0,u=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(m&&m(t);u.length;)u.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],a=!0,i=1;i<s.length;i++){var o=s[i];0!==l[o]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},l={77:0},n=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=o;return n.push([690,0]),s()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},690:function(e,t,s){"use strict";s.r(t),s.d(t,"getElement",(function(){return S})),s.d(t,"getContents",(function(){return O}));var a=s(0),l=s.n(a),n=s(4),r=s(2),i=(s(15),s(37)),o=s(3),c=s.n(o),m=s(7),d=s(11),u=s(5),h=s.n(u),f=function(e){var t=e.containerClassName,s=e.className,a=e.type,n=e.children;return l.a.createElement("div",{className:h()("slds-notify_container",t)},l.a.createElement("div",{className:h()("slds-notify slds-notify_toast",s,a&&"slds-theme_"+a),role:"status"},l.a.createElement("span",{className:"slds-assistive-text"},a),n,l.a.createElement("div",{className:"slds-notify__close"},l.a.createElement(m.b,{className:"slds-button_icon-inverse",iconClassName:"slds-button__icon_large",symbol:"close",assistiveText:"Close",title:"Close"}))))};f.propTypes={containerClassName:c.a.string,className:c.a.string,type:c.a.oneOf(["info","success","warning","error"]),children:c.a.node},f.defaultProps={type:"info"};var p=l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(f,{type:"info",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"info"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small"},"26 potential duplicate leads were found."," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"Select Leads to Merge"))))),y=[{id:"success",label:"Success",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(f,{type:"success",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"success"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small "},"Account"," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"ACME - 100")," ","widgets was created."))))},{id:"warning",label:"Warning",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(f,{type:"warning",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"warning"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small "},"Can’t share file “report-q3.pdf” with the"," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"selected users"),"."))))},{id:"error",label:"Error",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(f,{type:"error",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"error"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small "},"Can’t save lead “Sally Wong” because"," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"another lead")," ","has the same name."))))},{id:"error-with-details",label:"Error With Details",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem"}},l.a.createElement(f,{type:"error",containerClassName:"slds-is-relative"},l.a.createElement(d.a,{containerClassName:"slds-m-right_small slds-no-flex slds-align-top",className:"slds-icon_small",assistiveText:!1,symbol:"error"}),l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small"},"You've encountered some errors when trying to save edits to Samuel Smith."),l.a.createElement("p",null,"Here's some detail of"," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"what happened"),", being very descriptive and transparent."))))}],v=[{id:"small",label:"Small Column",element:l.a.createElement("div",{className:"demo-only",style:{height:"4rem",width:"25rem"}},l.a.createElement("div",{className:"slds-region_narrow slds-is-relative"},l.a.createElement(f,{type:"info",containerClassName:"slds-is-absolute"},l.a.createElement("div",{className:"slds-notify__content"},l.a.createElement("h2",{className:"slds-text-heading_small"},"26 potential"," ",l.a.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},"duplicate leads")," ","were found.")))))}],g=s(1),b=n.c.code,E=n.c.h2,_=n.c.h3,N=n.c.p,S=function(){return Object(a.createElement)(n.b,{},Object(a.createElement)("div",{className:"doc lead"},"Toast serves as a feedback & confirmation mechanism after the user takes an action."),Object(a.createElement)(r.a,{exampleOnly:!0,demoStyles:"height: 4rem;"},Object(g.f)(p)),E({id:"About-Toast"},"About Toast"),_({id:"Accessibility"},"Accessibility"),N({},"Toast should contain ",b({},'role="alert"')," on the container to signal to assistive technology that they require the user’s attention."),N({},"When the design uses multiple toasts simultaneously, set the role to ",b({},'role="status"'),". Historically, toasts would use the role of ",b({},"alert"),", but because you can invoke multiple toasts, assertive alerts would override previous toasts in the screen reader's speech queue. The role of ",b({},"status")," is a polite live region, which does not clear the queue, reducing the risk of a missed toast message."),N({},"Use a span with ",b({},"slds-assistive-text")," to let the user know what type of notification it is."),E({id:"Base"},"Base"),Object(a.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.f)(p)),E({id:"States"},"States"),_({id:"Success"},"Success"),Object(a.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.f)(y,"success")),_({id:"Warning"},"Warning"),Object(a.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.f)(y,"warning")),_({id:"Error"},"Error"),Object(a.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.f)(y,"error")),_({id:"Error-With-Details"},"Error With Details"),Object(a.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.f)(y,"error-with-details")),E({id:"Examples"},"Examples"),_({id:"Small-Column"},"Small Column"),Object(a.createElement)(r.a,{demoStyles:"height: 4rem;"},Object(g.f)(v,"small")),E({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),Object(a.createElement)(i.a,{name:"toast",type:"component"}))},O=function(){return Object(n.a)(S())}}});