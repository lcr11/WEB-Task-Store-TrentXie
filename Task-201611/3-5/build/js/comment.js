!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(6),n(5)},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),a(t,[{key:"render",value:function(){return React.createElement("li",{className:"commentAuthor"},this.props.author,"：",this.props.children)}}]),t}(React.Component);t.default=u},function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),_CommentList=__webpack_require__(4),_CommentList2=_interopRequireDefault(_CommentList),_CommentForm=__webpack_require__(3),_CommentForm2=_interopRequireDefault(_CommentForm),CommentBox=function(_React$Component){function CommentBox(){_classCallCheck(this,CommentBox);var e=_possibleConstructorReturn(this,(CommentBox.__proto__||Object.getPrototypeOf(CommentBox)).call(this));return e.submit=function(t){var n=e.state.data.concat(t);e.setState({data:n})},e.state={data:[]},e}return _inherits(CommentBox,_React$Component),_createClass(CommentBox,[{key:"componentDidMount",value:function componentDidMount(){console.log(this);var oReq=new XMLHttpRequest,srv="comment2.json";oReq.open("get",srv),oReq.send();var that=this;oReq.onreadystatechange=function(){if(4==oReq.readyState)if(200==oReq.status){var r=eval(oReq.responseText);console.log(this),that.setState({data:r})}else alert("服务器错误:"+oReq.status)}}},{key:"render",value:function(){return React.createElement("div",{className:"commentBox"},React.createElement(_CommentList2.default,{data:this.state.data,xxx:this.state.xxx}),React.createElement(_CommentForm2.default,{commentSubmit:this.submit}))}}]),CommentBox}(React.Component);exports.default=CommentBox},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(e){function t(){var e,r,a,u;n(this,t);for(var c=arguments.length,i=Array(c),l=0;l<c;l++)i[l]=arguments[l];return r=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.confirm=function(e){console.log(a),e.preventDefault(),a.props.commentSubmit({author:a.refs.author.value,text:a.refs.text.value}),a.refs.author.value="",a.refs.text.value=""},u=r,o(a,u)}return r(t,e),a(t,[{key:"render",value:function(){return React.createElement("div",{className:"commentForm"},React.createElement("form",{className:"myForm",onSubmit:this.confirm},React.createElement("input",{type:"text",placeholder:"Your Name",ref:"author"}),React.createElement("input",{type:"text",placeholder:"Say Something ...",ref:"text"}),React.createElement("input",{type:"submit",value:"确定"})))}}]),t}(React.Component);t.default=u},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(1),l=o(i),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){function e(e,t){return React.createElement(l.default,{author:e.author},React.createElement("span",null,e.text))}var t=this.props.data.map(e);return console.log(this.props.xxx),React.createElement("div",{className:"commentList"},React.createElement("ul",{className:"comment"},t))}}]),t}(React.Component);t.default=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),a=o(r);ReactDOM.render(React.createElement(a.default,null),document.getElementById("content"))},function(e,t){}]);