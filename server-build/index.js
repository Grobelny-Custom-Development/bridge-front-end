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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_BridgeRouter_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/BridgeRouter.jsx */ \"./src/BridgeRouter.jsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./dist'));\napp.get('/*', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_src_BridgeRouter_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./src/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.listen(PORT, () => {\n  console.log(\"\\uD83D\\uDE0E Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\n\nconst appCss =  false ? undefined : {\n  name: \"4f7xni-appCss\",\n  styles: \"padding:32px;background-color:blue;font-size:24px;color:white;;label:appCss;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZ3JvYmVsbnkvRG9jdW1lbnRzL0dpdEh1Yi9icmlkZ2UtZnJvbnQtZW5kL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlrQiIsImZpbGUiOiIvVXNlcnMvc2dyb2JlbG55L0RvY3VtZW50cy9HaXRIdWIvYnJpZGdlLWZyb250LWVuZC9zcmMvQXBwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgYXBwQ3NzID0gY3NzYFxucGFkZGluZzogMzJweDtcbmJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5mb250LXNpemU6IDI0cHg7XG5jb2xvcjogd2hpdGU7XG5gO1xuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50e1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIGNvbnNvbGUubG9nKCdpbiBtb3VudCcpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3VzZXJzL3Rlc3QvJyk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY3NzPXthcHBDc3N9PlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgYnJpZGdlIEZyb250IEVuZCBBcHBsaWNhdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  async componentDidMount() {\n    console.log('in mount');\n\n    try {\n      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:8000/users/test/');\n      console.log(res);\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  render() {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n      css: appCss\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"header\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"p\", null, \"bridge Front End Application.\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/BridgeRouter.jsx":
/*!******************************!*\
  !*** ./src/BridgeRouter.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.jsx */ \"./src/App.jsx\");\n/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.jsx */ \"./src/Login.jsx\");\n/* harmony import */ var _Register_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Register.jsx */ \"./src/Register.jsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nclass BridgeRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"nav\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"ul\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/\"\n    }, \"Home\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/login\"\n    }, \"Login\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"li\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      to: \"/register\"\n    }, \"Register\")))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_App_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/login\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Login_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n      path: \"/register\"\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_Register_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BridgeRouter);\n\n//# sourceURL=webpack:///./src/BridgeRouter.jsx?");

/***/ }),

/***/ "./src/Login.jsx":
/*!***********************!*\
  !*** ./src/Login.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass Login extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h1\", null, \" Login View\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"form\", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"input\", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"input\", null)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\n//# sourceURL=webpack:///./src/Login.jsx?");

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