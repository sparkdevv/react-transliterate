(this["webpackJsonpreact-transliterate-example"]=this["webpackJsonpreact-transliterate-example"]||[]).push([[0],{10:function(e,t,n){},15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);n(10);var a=n(0),r=n.n(a),l=n(5),i=n.n(l),o=n(3),u=[{label:"Amharic",value:"am"},{label:"Arabic",value:"ar"},{label:"Bangla",value:"bn"},{label:"Belarusian",value:"be"},{label:"Bulgarian",value:"bg"},{label:"Chinese (Hong Kong)",value:"yue-hant"},{label:"Chinese (Simplified)",value:"zh"},{label:"Chinese (Traditional)",value:"zh-hant"},{label:"French",value:"fr"},{label:"German",value:"de"},{label:"Greek",value:"el"},{label:"Gujarati",value:"gu"},{label:"Hebrew",value:"he"},{label:"Hindi",value:"hi"},{label:"Italian",value:"it"},{label:"Japanese",value:"ja"},{label:"Kannada",value:"kn"},{label:"Malayalam",value:"ml"},{label:"Marathi",value:"mr"},{label:"Nepali",value:"ne"},{label:"Odia",value:"or"},{label:"Persian",value:"fa"},{label:"Portuguese (Brazil)",value:"pt"},{label:"Punjabi",value:"pa"},{label:"Russian",value:"ru"},{label:"Sanskrit",value:"sa"},{label:"Serbian",value:"sr"},{label:"Sinhala",value:"si"},{label:"Spanish",value:"es"},{label:"Tamil",value:"ta"},{label:"Telugu",value:"te"},{label:"Tigrinya",value:"ti"},{label:"Ukrainian",value:"uk"},{label:"Urdu",value:"ur"},{label:"Vietnamese",value:"vi"}],s=n(6),c=n.n(s);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var f="_1tkHS",d="_1KtfG",h=13,b=14,m=9,g=32;"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var p=function(e){var t=e.renderComponent,n=void 0===t?function(e){return Object(a.createElement)("input",Object.assign({},e))}:t,r=e.lang,l=void 0===r?"hi":r,i=e.offsetX,o=void 0===i?0:i,u=e.offsetY,s=void 0===u?10:u,p=e.onChange,y=void 0===p?function(){}:p,S=e.onChangeText,O=void 0===S?function(){}:S,w=e.onBlur,j=void 0===w?function(){}:w,x=e.value,C=e.onKeyDown,E=void 0===C?function(){}:C,k=e.containerClassName,B=void 0===k?"":k,T=e.containerStyles,P=void 0===T?{}:T,I=e.activeItemStyles,N=void 0===I?{}:I,D=e.maxOptions,M=void 0===D?5:D,K=e.hideSuggestionBoxOnMobileDevices,H=void 0!==K&&K,U=e.hideSuggestionBoxBreakpoint,L=void 0===U?450:U,R=e.triggerKeys,z=void 0===R?[g,b,h,m]:R,W=e.insertCurrentSelectionOnBlur,A=void 0===W||W,F=e.showCurrentWordAsLastSuggestion,G=void 0===F||F,J=e.enabled,X=void 0===J||J,Y=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["renderComponent","lang","offsetX","offsetY","onChange","onChangeText","onBlur","value","onKeyDown","containerClassName","containerStyles","activeItemStyles","maxOptions","hideSuggestionBoxOnMobileDevices","hideSuggestionBoxBreakpoint","triggerKeys","insertCurrentSelectionOnBlur","showCurrentWordAsLastSuggestion","enabled"]),_=Object(a.useState)([]),q=_[0],V=_[1],Q=Object(a.useState)(0),Z=Q[0],$=Q[1],ee=Object(a.useState)(0),te=ee[0],ne=ee[1],ae=Object(a.useState)(0),re=ae[0],le=ae[1],ie=Object(a.useState)(-1),oe=ie[0],ue=ie[1],se=Object(a.useState)(-1),ce=se[0],ve=se[1],fe=Object(a.useRef)(null),de=Object(a.useState)({width:0,height:0}),he=de[0],be=de[1],me=Object(a.useMemo)((function(){return!H||he.width>L}),[he,L,H]),ge=function(){le(0),V([])},pe=function(e){var t,n=x;if("string"===typeof n){var a=n.substring(0,oe)+q[e]+" "+n.substring(ce+1,n.length);setTimeout((function(){var t,n;t=fe.current,n=oe+q[e].length+1,t&&(t.selectionStart?(t.focus(),t.setSelectionRange(n,n)):t.focus())}),1);var r={target:{value:a}};return O(a),y(r),ge(),null===(t=fe.current)||void 0===t?void 0:t.focus()}},ye=function(e){try{if(!me)return Promise.resolve();var t=G?M-1:M;return Promise.resolve(function(e,t,n,a){void 0===t&&(t=5),void 0===n&&(n=!1),void 0===a&&(a="hi");try{var r="https://inputtools.google.com/request?text="+e+"&itc="+a+"-t-i0-und&num="+t+"&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage";return Promise.resolve(function(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}((function(){return Promise.resolve(fetch(r)).then((function(t){return Promise.resolve(t.json()).then((function(t){if(t&&"SUCCESS"===t[0])return n?[].concat(t[1][0][1],[e]):t[1][0][1]}))}))}),(function(e){return console.error("There was an error with transliteration",e),[]})))}catch(l){return Promise.reject(l)}}(e,t,G,l)).then((function(e){V(e)}))}catch(n){return Promise.reject(n)}},Se=function(){var e=window.innerWidth,t=window.innerHeight;be({width:e,height:t})};return Object(a.useEffect)((function(){window.addEventListener("resize",Se);var e=window.innerWidth,t=window.innerHeight;return be({width:e,height:t}),function(){window.removeEventListener("resize",Se)}}),[]),Object(a.createElement)("div",{style:v({},P,{position:"relative"}),className:B},n(v({onChange:function(e){var t=e.currentTarget.value;if(y(e),O(t),me){var n,a=(n=e.target,n&&"number"===typeof n.selectionStart&&"number"===typeof n.selectionEnd?{start:n.selectionStart,end:n.selectionEnd}:{start:0,end:0}).end,r=fe.current;if(r){var l=c()(r,a),i=t.lastIndexOf(" ",a-1)<t.lastIndexOf("\n",a-1)?t.lastIndexOf("\n",a-1):t.lastIndexOf(" ",a-1);ue(i+1),ve(a-1);var o=t.slice(i+1,a);if(o&&X){ye(o);var u=r.getBoundingClientRect(),s=l.top<u.height?l.top+r.offsetTop:u.height-(r.scrollHeight-l.top)%u.height+r.offsetTop,v=Math.min(l.left+r.offsetLeft-10,r.offsetLeft+u.width-100);ne(s),$(v)}else ge()}}},onKeyDown:function(e){if(q.length>0)if(z.includes(e.keyCode))e.preventDefault(),pe(re);else switch(e.keyCode){case 27:e.preventDefault(),ge();break;case 38:e.preventDefault(),le((q.length+re-1)%q.length);break;case 40:e.preventDefault(),le((re+1)%q.length);break;default:E(e)}else E(e)},onBlur:function(e){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0||(A&&q[0]?pe(0):ge()),j(e)},ref:fe,value:x},Y)),me&&q.length>0&&Object(a.createElement)("ul",{style:{left:Z+o+"px",top:te+s+"px",position:"absolute",width:"auto"},className:f},q.map((function(e,t){return Object(a.createElement)("li",{className:t===re?d:void 0,style:t===re&&N||{},onMouseEnter:function(){le(t)},onClick:function(){return pe(t)},key:e},e)}))))},y=(n(15),n(34)),S=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],i=Object(a.useState)("hi"),s=Object(o.a)(i,2),c=s[0],v=s[1];return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"React transliterate"),r.a.createElement("select",{className:"language-dropdown",value:c,onChange:function(e){return v(e.target.value)}},u.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)}))),r.a.createElement("div",{className:"spacer"}),r.a.createElement("label",{htmlFor:"react-transliterate-input"},"Using input"),r.a.createElement(p,{value:n,onChangeText:function(e){l(e)},lang:c,placeholder:"Start typing here...",id:"react-transliterate-input"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement("label",{htmlFor:"react-transliterate-textarea"},"Using textarea"),r.a.createElement(p,{renderComponent:function(e){return r.a.createElement("textarea",e)},value:n,onChangeText:function(e){l(e)},lang:c,placeholder:"Start typing here...",id:"react-transliterate-textarea"}),r.a.createElement("div",{className:"spacer"}),r.a.createElement("label",{htmlFor:"react-transliterate-material-ui-input"},"Using Material UI input"),r.a.createElement(p,{renderComponent:function(e){var t=e.ref;return delete e.ref,r.a.createElement(y.a,Object.assign({fullWidth:!0},e,{inputRef:t}))},value:n,onChangeText:function(e){l(e)},lang:c,placeholder:"Start typing here...",id:"react-transliterate-material-ui-input"}))};i.a.render(r.a.createElement(S,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.3174cb4d.chunk.js.map