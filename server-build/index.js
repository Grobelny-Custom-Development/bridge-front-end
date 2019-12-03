/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_BridgeRouter_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/BridgeRouter.jsx */ \"./src/BridgeRouter.jsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./dist'));\napp.get('/*', (req, res) => {\n  // const activeRoute = routes.find((route) => matchPath(req.url, route)) || {}\n  const context = {};\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_7__[\"jsx\"])(_src_BridgeRouter_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./src/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/BridgeRouter.jsx":
/*!******************************!*\
  !*** ./src/BridgeRouter.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.jsx */ \"./src/Navigation.jsx\");\n/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.jsx */ \"./src/Home.jsx\");\n/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login.jsx */ \"./src/Login.jsx\");\n/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Register.jsx */ \"./src/Register.jsx\");\n/* harmony import */ var _Profile_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Profile.jsx */ \"./src/Profile.jsx\");\n/* harmony import */ var _meeting_MeetingRouter_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meeting/MeetingRouter.jsx */ \"./src/meeting/MeetingRouter.jsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nclass BridgeRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n    this.state = {\n      isLoggedIn: false\n    };\n  }\n\n  componentDidMount() {\n    this.setState({\n      isLoggedIn: localStorage.getItem('token') ? true : false\n    });\n  }\n\n  componentDidUpdate(prevProps, prevState) {\n    const {\n      isLoggedIn: isPrevLoggedIn\n    } = prevState;\n    const isLoggedInCurrent = localStorage.getItem('token');\n\n    if (isLoggedInCurrent && !isPrevLoggedIn || isLoggedInCurrent !== isPrevLoggedIn) {\n      this.setState({\n        isLoggedIn: isLoggedInCurrent\n      });\n    }\n  }\n\n  render() {\n    const {\n      isLoggedIn\n    } = this.state;\n    console.log(this.props);\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(_Navigation_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      isLoggedIn: isLoggedIn\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/\",\n      component: _Home_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/login\",\n      component: _Login_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/register\",\n      component: _Register_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/profile\",\n      component: _Profile_jsx__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_9__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/meeting\",\n      component: _meeting_MeetingRouter_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BridgeRouter);\n\n//# sourceURL=webpack:///./src/BridgeRouter.jsx?");

/***/ }),

/***/ "./src/Home.jsx":
/*!**********************!*\
  !*** ./src/Home.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\n\nconst appCss =  false ? undefined : {\n  name: \"4f7xni-appCss\",\n  styles: \"padding:32px;background-color:blue;font-size:24px;color:white;;label:appCss;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZ3JvYmVsbnkvRG9jdW1lbnRzL0dpdEh1Yi9icmlkZ2UtZnJvbnQtZW5kL3NyYy9Ib21lLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPa0IiLCJmaWxlIjoiL1VzZXJzL3Nncm9iZWxueS9Eb2N1bWVudHMvR2l0SHViL2JyaWRnZS1mcm9udC1lbmQvc3JjL0hvbWUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtcbiAgTGlua1xufSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBhcHBDc3MgPSBjc3NgXG5wYWRkaW5nOiAzMnB4O1xuYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbmZvbnQtc2l6ZTogMjRweDtcbmNvbG9yOiB3aGl0ZTtcbmA7XG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgPlxuICAgICAgICA8aGVhZGVyIGNzcz17YXBwQ3NzfT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhvbWUgUGFnZVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"header\", {\n      css: appCss\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", null, \"Home Page\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/Home.jsx?");

/***/ }),

/***/ "./src/Login.jsx":
/*!***********************!*\
  !*** ./src/Login.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Login = () => {\n  // React Hooks declaration\n  const [email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n\n  const handleLogin = event => {\n    event.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      headers: {\n        'X-Requested-With': 'XMLHttpRequest'\n      },\n      url: 'http://localhost:8000/users/token-auth/',\n      method: 'POST',\n      data: {\n        email,\n        password\n      }\n    }).then(({\n      data\n    }) => {\n      const {\n        token\n      } = data;\n      console.log(token);\n      localStorage.setItem('token', token);\n    }).catch(error => {\n      console.log(error);\n    });\n  };\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"h1\", null, \" Login View\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"form\", {\n    onSubmit: handleLogin\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"input\", {\n    type: \"text\",\n    name: \"email\",\n    value: email,\n    onChange: e => setEmail(e.target.value)\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"input\", {\n    name: \"password\",\n    value: password,\n    onChange: e => setPassword(e.target.value)\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\", {\n    type: \"submit\"\n  }, \" Login \")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/Login.jsx?");

/***/ }),

/***/ "./src/Navigation.jsx":
/*!****************************!*\
  !*** ./src/Navigation.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Navigation = props => {\n  const logout = () => {\n    localStorage.removeItem('token');\n  };\n\n  const {\n    isLoggedIn\n  } = props;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"nav\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"ul\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/\"\n  }, \"Home\")), !isLoggedIn && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/login\"\n  }, \"Login\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/register\"\n  }, \"Register\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/meeting\"\n  }, \"Meetings\"))), isLoggedIn && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/profile\"\n  }, \"Profile\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"p\", {\n    onClick: logout\n  }, \" Logout\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\n\n//# sourceURL=webpack:///./src/Navigation.jsx?");

/***/ }),

/***/ "./src/Profile.jsx":
/*!*************************!*\
  !*** ./src/Profile.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nclass Profile extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  async componentDidMount() {\n    const token = localStorage.getItem('token');\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default()({\n        headers: {\n          Authorization: \"JWT \".concat(token)\n        },\n        url: 'http://localhost:8000/users/user/',\n        method: 'GET'\n      });\n      console.log(response);\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  render() {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h2\", null, \"Profile\");\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./src/Profile.jsx?");

/***/ }),

/***/ "./src/Register.jsx":
/*!**************************!*\
  !*** ./src/Register.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Register extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h1\", null, \" Register View\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"form\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"input\", {\n      name: \"first-name\"\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"input\", {\n      name: \"last-name\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\n\n//# sourceURL=webpack:///./src/Register.jsx?");

/***/ }),

/***/ "./src/meeting/MeetingCreate.jsx":
/*!***************************************!*\
  !*** ./src/meeting/MeetingCreate.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst MeetingCreate = ({\n  match\n}) => {\n  // React Hooks declaration\n  const [meetingName, setMeetingName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [isPublic, setPublic] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [isRecurring, setRecurring] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [startDate, setStartDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const [interval, setInterval] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n\n  const createMeeting = event => {\n    event.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      headers: {\n        'X-Requested-With': 'XMLHttpRequest'\n      },\n      url: 'http://localhost:8000/meetings/create/',\n      method: 'POST',\n      data: {\n        email,\n        password\n      }\n    }).then(({\n      data\n    }) => {\n      const {\n        token\n      } = data;\n      console.log(token);\n      localStorage.setItem('token', token);\n    }).catch(error => {\n      console.log(error);\n    });\n  };\n\n  console.log(isPublic);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"h2\", null, \" Meeting Creation \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"form\", {\n    onSubmit: createMeeting\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"input\", {\n    type: \"text\",\n    name: \"meeting-name\",\n    value: meetingName,\n    onChange: e => setMeetingName(e.target.value)\n  }), \" \", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"br\", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"input\", {\n    type: \"checkbox\",\n    name: \"public\",\n    onChange: e => setPublic(!e.target.checked)\n  }), \" Public \", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"br\", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"input\", {\n    type: \"date\",\n    name: \"start-date\",\n    onChange: e => setStartDate(e.target.value),\n    value: startDate\n  }), \" Start Date \", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"br\", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"input\", {\n    type: \"checkbox\",\n    name: \"recurring\",\n    onChange: e => setRecurring(!e.target.checked)\n  }), \" Recurring \", Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"br\", null), !isRecurring && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"select\", {\n    onChange: e => setInterval(e.target.value)\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"option\", {\n    value: \"Daily\"\n  }, \"Daily\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"option\", {\n    value: \"Monthly\"\n  }, \"Monthly\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"option\", {\n    value: \"Weekly\"\n  }, \"Weekly\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"option\", {\n    value: \"Yearly\"\n  }, \"Yearly\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\", {\n    type: \"submit\"\n  }, \" Create\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetingCreate);\n\n//# sourceURL=webpack:///./src/meeting/MeetingCreate.jsx?");

/***/ }),

/***/ "./src/meeting/MeetingRouter.jsx":
/*!***************************************!*\
  !*** ./src/meeting/MeetingRouter.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetingCreate_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetingCreate.jsx */ \"./src/meeting/MeetingCreate.jsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst MeetingRouter = props => {\n  const {\n    path,\n    url\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useRouteMatch\"])();\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: url + \"/create\"\n  }, \" Create \"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"\".concat(path, \"/:topicId\"),\n    component: _MeetingCreate_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetingRouter);\n\n//# sourceURL=webpack:///./src/meeting/MeetingRouter.jsx?");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");\n\n//# sourceURL=webpack:///external_%22@emotion/core%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });