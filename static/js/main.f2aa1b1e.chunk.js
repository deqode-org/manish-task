(this["webpackJsonptest-task-react"]=this["webpackJsonptest-task-react"]||[]).push([[0],{22:function(e,t,n){e.exports=n(33)},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),r=n.n(i),s=(n(27),n(20)),c=n(1),u=n(14),l=n(15),p=n(19),h=n(21),d=n(16),f=n(17),m=n(4),v=n.n(m),C=13,g=38,_=40;function S(e){return e>1e3&&(e=1e3),Math.floor(1e3*Math.random())%e===0}var O=function(e){var t=[];return S(2)&&t.push("pre"+e),S(2)&&t.push(e),S(2)&&t.push(e+"post"),S(2)&&t.push("pre"+e+"post"),new Promise((function(e,n){var a=200*Math.random();setTimeout((function(){S(10)?n():e(t)}),a)}))},I=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onInputChange=function(t){var n=t.target.value;if(e.setState({inputValue:n}),""!==n){if(" "===n.slice(-1))return void e.setState({options:[],activeIndex:0});var a=n.split(" ").filter((function(e){return""!==e})).pop();e.setState({searchedWord:a}),e.debouncedSearch(a)}else e.setState({options:[],activeIndex:0})},e.getWordSuggestions=function(t){O(t).then((function(t){e.setState({options:t,activeIndex:0,showOptions:!0})})).catch(console.error)},e.onSelectOption=function(t){var n=e.state.inputValue;if(void 0===t)e.setState({inputValue:n.concat(" ")});else{var a=t+" ",o=n;if(""!==n){var i=n.split(" ").slice(0,-1);i.push(a),o=i.join(" ")}else o.concat(a);e.setState({inputValue:o,activeIndex:0,options:[]})}e.inputRef&&e.inputRef.current&&e.inputRef.current.focus()},e.highlightOption=function(t){return t.replace(new RegExp(e.state.searchedWord,"gi"),(function(e){return'<span class="'.concat(v.a.highlight,'">').concat(e,"</span>")}))},e.handleKeyPress=function(t){var n=e.state,a=n.activeIndex,o=n.options;if(t.keyCode===C)e.onSelectOption(o[a]);else if(t.keyCode===g){if(t.preventDefault(),0===a)return;e.setState({activeIndex:a-1})}else if(t.keyCode===_){if(t.preventDefault(),a===o.length-1)return;e.setState({activeIndex:a+1})}},e.onOutsideClick=function(){e.setState({showOptions:!1})},e.state={inputValue:"",options:[],activeIndex:0,searchedWord:"",showOptions:!1},e.inputRef=o.a.createRef(),e.debouncedSearch=Object(d.debounce)(e.getWordSuggestions,400),e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(f.a,{onOutsideClick:this.onOutsideClick},o.a.createElement("div",{className:v.a.searchContainer},o.a.createElement("div",{className:v.a.inputContainer},o.a.createElement("div",{className:v.a.inputInnerContainer},o.a.createElement("input",{className:v.a.inputSearch,ref:this.inputRef,type:"text",onChange:this.onInputChange,onKeyDown:this.handleKeyPress,value:this.state.inputValue}))),this.state.showOptions&&0!==this.state.options.length&&o.a.createElement("div",{className:v.a.optionsContainer},this.state.options.map((function(t,n){return o.a.createElement("div",{key:t,className:n===e.state.activeIndex?v.a.activeOption:v.a.option,onClick:function(){return e.onSelectOption(t)},dangerouslySetInnerHTML:{__html:e.highlightOption(t)}})})))))}}]),n}(o.a.Component),w=function(){return o.a.createElement("div",{className:"col-md-4 offset-md-4"},o.a.createElement(I,null))},E={Dashboard:"/",Redirect:"*"},k=function(){return o.a.createElement(s.a,{basename:"/manish-task"},o.a.createElement(c.b,{path:E.Dashboard,component:w}),o.a.createElement(c.a,{from:E.Redirect,to:E.Dashboard}))},b=function(){return o.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={searchContainer:"autoCompleteField_searchContainer__3iOht",inputContainer:"autoCompleteField_inputContainer__3YeW7",inputInnerContainer:"autoCompleteField_inputInnerContainer__3Y2wf",inputSearch:"autoCompleteField_inputSearch__1zYQ3",optionsContainer:"autoCompleteField_optionsContainer__1II0r",option:"autoCompleteField_option__3VBBc",activeOption:"autoCompleteField_activeOption__3VwTT",highlight:"autoCompleteField_highlight__1m1T5"}}},[[22,1,2]]]);
//# sourceMappingURL=main.f2aa1b1e.chunk.js.map