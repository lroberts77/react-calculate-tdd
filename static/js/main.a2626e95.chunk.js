(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(2),c=t.n(l),s=t(3),o=t(5),u=t(4),i=(t(11),function(e){var a=e.displayValue;return n.a.createElement("div",{className:"display-container"},n.a.createElement("p",{className:"display-value"},a))}),p=(t(12),function(e){var a=e.keyAction,t=e.keyType,r=e.keyValue;return n.a.createElement("div",{className:"key-container ".concat(t),onClick:function(){return a(r)}},n.a.createElement("p",{className:"key-value"},r))}),y=(t(13),function(e){var a=e.callOperator,t=e.numbers,r=e.operators,l=e.setOperator,c=e.updateDisplay,s=t.map((function(e){return n.a.createElement(p,{key:e,keyAction:c,keyType:"number-key",keyValue:e})})),o=r.map((function(e){return n.a.createElement(p,{key:e,keyAction:l,keyType:"operator-key",keyValue:e})}));return n.a.createElement("div",{className:"keypad-container"},n.a.createElement("div",{className:"numbers-container"},s),n.a.createElement("div",{className:"operators-container"},o),n.a.createElement("div",{className:"submit-container"},n.a.createElement(p,{keyAction:a,keyType:"submit-key",keyValue:"="})))}),d=(t(14),function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).state={displayValue:"0",numbers:["9","8","7","6","5","4","3","2","1",".","0","ce"],operators:["/","x","-","+"],selectedOperator:"",storedValue:""},e.callOperator=function(){var a=e.state,t=a.displayValue,r=a.selectedOperator,n=a.storedValue,l=t;switch(t*=1,n*=1,r){case"+":t=n+t;break;case"-":t=n-t;break;case"x":t*=n;break;case"/":t=n/t;break;default:t="0"}r="","NaN"!==(t=t.toString())&&"Infinity"!==t||(t="0"),e.setState({displayValue:t,selectedOperator:r,storedValue:n,updateStoredValue:l}),console.log(e.state.displayValue)},e.setOperator=function(a){var t=e.state,r=t.displayValue,n=t.selectedOperator,l=t.storedValue;""===n?(l=r,r="0",n=a):n=a,e.setState({displayValue:r,selectedOperator:n,storedValue:l}),console.log("setOperator")},e.updateDisplay=function(a){var t=e.state.displayValue;"."===a&&t.includes(".")&&(a=""),"ce"===a?""===(t=t.substr(0,t.length-1))&&(t="0"):"0"===t?t=a:t+=a,e.setState({displayValue:t}),console.log(e.state.displayValue)},e.render=function(){var a=e.state,t=a.displayValue,r=a.numbers,l=a.operators;return n.a.createElement("div",{className:"calculator-container"},n.a.createElement(i,{displayValue:t}),n.a.createElement(y,{callOperator:e.callOperator,numbers:r,operators:l,setOperator:e.setOperator,updateDisplay:e.updateDisplay}))},e}return t}(r.Component)),m=(t(15),function(){return n.a.createElement("div",{className:"app-container"},n.a.createElement(d,null))});t(16);c.a.render(n.a.createElement(m,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.a2626e95.chunk.js.map