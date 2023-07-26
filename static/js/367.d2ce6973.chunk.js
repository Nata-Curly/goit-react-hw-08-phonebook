"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[367],{7367:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,o,i,u,a=t(2791),c=t(9434),s=t(6907),l=t(9439),d=t(168),p=t(7686),f=p.Z.form(r||(r=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 15px;"]))),h=p.Z.label(o||(o=(0,d.Z)(["\ntext-align: center;"]))),b=p.Z.button(i||(i=(0,d.Z)(["\npadding: 5px 10px;\nwidth: 110px;\ncursor: pointer;\nfont-size: 16px;\nline-height: 1.2;\nfont-weight: 500;\nletter-spacing: -0.01em;\ncolor: black;\nbackground-color: #cbbfbf4d;\nborder: none;\nborder-radius: 10px;\nfilter: drop-shadow(0px 4px 4px #00000040);\ntransition-property: color, background-color;\ntransition-duration: 250ms;\ntransition-timing-function: cubic-bezier(.4, 0, .2, 1);\n&:hover,\n&:focus {\n    color: white;\n    background-color: blue;\n    }"]))),x=p.Z.input(u||(u=(0,d.Z)(["\nheight: 25px;\nwidth: 200px;\npadding: 0 10px;\nborder: 1px solid #cbbfbf4d;\nborder-radius: 10px;\nfilter: drop-shadow(0px 4px 4px #00000040);\ntransition-property: border;\ntransition-duration: 250ms;\ntransition-timing-function: cubic-bezier(.4, 0, .2, 1);\n&:hover,\n&:focus {\n    border: 1px solid blue;\n    }"]))),m="NOT_FOUND";var v=function(n,e){return n===e};function g(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,o=void 0===r?v:r,i=t.maxSize,u=void 0===i?1:i,a=t.resultEqualityCheck,c=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}}(o),s=1===u?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:m},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(c):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return m}return{get:r,put:function(e,o){r(e)===m&&(t.unshift({key:e,value:o}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(u,c);function l(){var e=s.get(arguments);if(e===m){if(e=n.apply(null,arguments),a){var t=s.getEntries(),r=t.find((function(n){return a(n.value,e)}));r&&(e=r.value)}s.put(arguments,e)}return e}return l.clearCache=function(){return s.clear()},l}function y(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function w(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var o=function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i,u=0,a={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(a=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=a,l=s.memoizeOptions,d=void 0===l?t:l,p=Array.isArray(d)?d:[d],f=y(r),h=n.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(p)),b=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=h.apply(null,n)}));return Object.assign(b,{resultFunc:c,memoizedResultFunc:h,dependencies:f,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),b};return o}var k,j,Z,C,z,A=w(g),_=function(n){return n.contacts.items},E=function(n){return n.filter},S=function(n){return n.contacts.error},q=function(n){return n.contacts.isLoading},F=A([_,E],(function(n,e){return null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),L=t(8174),I=function(n){L.Am.error(n)},N=t(3634),O=t(184),R=function(){var n=(0,a.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],o=(0,a.useState)(""),i=(0,l.Z)(o,2),u=i[0],s=i[1],d=(0,c.I0)(),p=(0,c.v9)(_),m=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}(),v=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":s(o);break;default:throw new Error("Unknown state")}},g=function(){r(""),s("")};return(0,O.jsxs)(f,{onSubmit:function(n){if(n.preventDefault(),p.find((function(n){return n.name.toLowerCase()===t.toLowerCase().trim()})))return I('The contact with name "'.concat(t,'" is already in your numberbook')),void g();var e;d((0,N.uK)({name:t,number:u})),e='The contact "'.concat(t,'" is added to your numberbook'),L.Am.success(e),g()},children:[(0,O.jsxs)(h,{htmlFor:m,children:["Name ",(0,O.jsx)("br",{}),(0,O.jsx)(x,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces",placeholder:"enter contact's name",fullWidth:!0,"aria-describedby":"contact's name",required:!0,value:t,onChange:v,id:m})]}),(0,O.jsxs)(h,{htmlFor:"",children:["Number ",(0,O.jsx)("br",{}),(0,O.jsx)(x,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"number number can contain only numbers, spaces, dashes, parentheses and can start with +",placeholder:"enter contact's phone number",fullWidth:!0,"aria-describedby":"phone number",required:!0,value:u,onChange:v})]}),(0,O.jsx)(b,{type:"submit",children:"Add contact"})]})},T=p.Z.label(k||(k=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\ngap: 15px;\nfont-size: 18px;\n"]))),U=p.Z.input(j||(j=(0,d.Z)(["\nheight: 25px;\nwidth: 200px;\npadding: 0 10px;\nborder: 1px solid #cbbfbf4d;\nborder-radius: 10px;\nfilter: drop-shadow(0px 4px 4px #00000040);\ntransition-property: border;\ntransition-duration: 250ms;\ntransition-timing-function: cubic-bezier(.4, 0, .2, 1);\n&:hover,\n&:focus {\n    border: 1px solid blue;\n    }"]))),D=t(4808),Y=function(){var n=(0,c.I0)(),e=(0,c.v9)(E);return(0,O.jsxs)(T,{children:["Find contact by name ",(0,O.jsx)(U,{type:"text",value:e,onChange:function(e){var t=e.target;n((0,D.T)(t.value.toLowerCase().trim()))}})]})},W=p.Z.ul(Z||(Z=(0,d.Z)(["\n    flex-direction: column;\n    width: 394px;\n    margin-left: auto;\n    margin-right: auto;\n    border: 1px solid #8080802b;\n    border-radius: 10px;\n    filter: drop-shadow(0px 4px 4px #00000040);\n    padding: 0 15px;\n    list-style: none;"]))),B=p.Z.div(C||(C=(0,d.Z)(["\n    display: flex;\n    gap: 15px;\n    align-items: center;\n    justify-content: space-between;"]))),K=p.Z.button(z||(z=(0,d.Z)(["\n    padding: 5px 10px;\n    width: 80px;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 1.2;\n    font-weight: 500\n    letter-spacing: -0.01em;\n    color: black;\n    background-color: #cbbfbf4d;\n    border: none;\n    border-radius: 10px;\n    filter: drop-shadow(0px 4px 4px #00000040);\n    transition-property: color, background-color;\n    transition-duration: 250ms;\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    &:hover,\n    &:focus {\n    color: white;\n    background-color: red;\n    }\n"]))),P=function(){var n=(0,c.I0)(),e=(0,c.v9)(F);return(0,O.jsx)(W,{children:null===e||void 0===e?void 0:e.map((function(e){return(0,O.jsx)("li",{children:(0,O.jsxs)(B,{children:[(0,O.jsxs)("p",{children:[e.name,": ",e.number]}),(0,O.jsx)(K,{type:"button",onClick:function(){return t=e.id,n((0,N.z8)(t)),void I("You have deleted a contact");var t},children:"Delete"})]})},e.id)}))})};function V(){var n,e=(0,c.I0)(),t=(0,c.v9)(q),r=(0,c.v9)(S);return(0,a.useEffect)((function(){e((0,N.yF)())}),[e]),(0,O.jsxs)(s.B6,{children:[(0,O.jsx)(s.ql,{children:(0,O.jsx)("title",{children:"Your Phonebook"})}),(0,O.jsx)(R,{}),(0,O.jsx)("h2",{children:"Contacts"}),(0,O.jsx)(Y,{}),t&&!r&&(n="Your request is in progress...",void L.Am.info(n)),(0,O.jsx)(P,{})]})}}}]);
//# sourceMappingURL=367.d2ce6973.chunk.js.map