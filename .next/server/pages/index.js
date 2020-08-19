module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./component/DonutChart.js":
/*!*********************************!*\
  !*** ./component/DonutChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Yock\\Desktop\\react-test\\coffee\\component\\DonutChart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Pie = props => {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.data);
  const createPie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().value(d => d.value).sort(null);
  const createArc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(props.innerRadius).outerRadius(props.outerRadius);
  const colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
  const format = d3__WEBPACK_IMPORTED_MODULE_1__["format"](".2f");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const data = createPie(props.data);
    const prevData = createPie(cache.current);
    const group = d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref.current);
    const groupWithData = group.selectAll("g.arc").data(data);
    groupWithData.exit().remove();
    const groupWithUpdate = groupWithData.enter().append("g").attr("class", "arc");
    const path = groupWithUpdate.append("path").merge(groupWithData.select("path.arc"));

    const arcTween = (d, i) => {
      const interpolator = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](prevData[i], d);
      return t => createArc(interpolator(t));
    };

    path.attr("class", "arc").attr("fill", (d, i) => colors(i)).transition().attrTween("d", arcTween);
    const text = groupWithUpdate.append("text").merge(groupWithData.select("text"));
    text.attr("text-anchor", "middle").attr("alignment-baseline", "middle").style("fill", "white").style("font-size", 10).transition().attr("transform", d => `translate(${createArc.centroid(d)})`).tween("text", (d, i, nodes) => {
      const interpolator = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](prevData[i], d);
      return t => d3__WEBPACK_IMPORTED_MODULE_1__["select"](nodes[i]).text(format(interpolator(t).value));
    });
    cache.current = props.data;
  }, [props.data]);
  return __jsx("svg", {
    width: props.width,
    height: props.height,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("g", {
    ref: ref,
    transform: `translate(${props.outerRadius} ${props.outerRadius})`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Pie);

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_DonutChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/DonutChart */ "./component/DonutChart.js");
var _jsxFileName = "C:\\Users\\Yock\\Desktop\\react-test\\coffee\\pages\\app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const divStyle = {
  position: 'absolute',
  top: '150px',
  left: '128px'
};

function App() {
  const generateData = (value, length = 5) => d3__WEBPACK_IMPORTED_MODULE_1__["range"](length).map((item, index) => ({
    date: index,
    value: value === null || value === undefined ? Math.random() * 100 : value
  }));

  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateData(0));

  const changeData = () => {
    setData(generateData());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setData(generateData());
  }, [!data]);
  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: changeData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Transform")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_component_DonutChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    width: 700,
    height: 700,
    innerRadius: 250,
    outerRadius: 350,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: divStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_component_DonutChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    width: 460,
    height: 460,
    innerRadius: 130,
    outerRadius: 230,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./pages/app.js");
var _jsxFileName = "C:\\Users\\Yock\\Desktop\\react-test\\coffee\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_app__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
})));

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50L0RvbnV0Q2hhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImQzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQaWUiLCJwcm9wcyIsInJlZiIsInVzZVJlZiIsImNhY2hlIiwiZGF0YSIsImNyZWF0ZVBpZSIsImQzIiwidmFsdWUiLCJkIiwic29ydCIsImNyZWF0ZUFyYyIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJjb2xvcnMiLCJmb3JtYXQiLCJ1c2VFZmZlY3QiLCJwcmV2RGF0YSIsImN1cnJlbnQiLCJncm91cCIsImdyb3VwV2l0aERhdGEiLCJzZWxlY3RBbGwiLCJleGl0IiwicmVtb3ZlIiwiZ3JvdXBXaXRoVXBkYXRlIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwicGF0aCIsIm1lcmdlIiwic2VsZWN0IiwiYXJjVHdlZW4iLCJpIiwiaW50ZXJwb2xhdG9yIiwidCIsInRyYW5zaXRpb24iLCJhdHRyVHdlZW4iLCJ0ZXh0Iiwic3R5bGUiLCJjZW50cm9pZCIsInR3ZWVuIiwibm9kZXMiLCJ3aWR0aCIsImhlaWdodCIsImRpdlN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiQXBwIiwiZ2VuZXJhdGVEYXRhIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGF0ZSIsInVuZGVmaW5lZCIsIk1hdGgiLCJyYW5kb20iLCJzZXREYXRhIiwidXNlU3RhdGUiLCJjaGFuZ2VEYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUV1RCxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUNFLFFBQUksRUFBRXZELElBRFI7QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFVBQU0sRUFBRSxHQUhWO0FBSUUsZUFBVyxFQUFFLEdBSmY7QUFLRSxlQUFXLEVBQUUsR0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixFQWNFO0FBQUssU0FBSyxFQUFFdUMsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw2REFBRDtBQUNJLFFBQUksRUFBRXZDLElBRFY7QUFFSSxTQUFLLEVBQUUsR0FGWDtBQUdJLFVBQU0sRUFBRSxHQUhaO0FBSUksZUFBVyxFQUFFLEdBSmpCO0FBS0ksZUFBVyxFQUFFLEdBTGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxDQWRGLENBREY7QUEwQkQ7O0FBRWMyQyxrRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekRGO0FBRWUscUVBQ2QsbUVBQ0MsTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREQsQ0FERCxFOzs7Ozs7Ozs7OztBQ0ZBLCtCOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcclxuXHJcbmNvbnN0IFBpZSA9IHByb3BzID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY2FjaGUgPSB1c2VSZWYocHJvcHMuZGF0YSk7XHJcbiAgY29uc3QgY3JlYXRlUGllID0gZDNcclxuICAgIC5waWUoKVxyXG4gICAgLnZhbHVlKGQgPT4gZC52YWx1ZSlcclxuICAgIC5zb3J0KG51bGwpO1xyXG4gIGNvbnN0IGNyZWF0ZUFyYyA9IGQzXHJcbiAgICAuYXJjKClcclxuICAgIC5pbm5lclJhZGl1cyhwcm9wcy5pbm5lclJhZGl1cylcclxuICAgIC5vdXRlclJhZGl1cyhwcm9wcy5vdXRlclJhZGl1cyk7XHJcbiAgY29uc3QgY29sb3JzID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xyXG4gIGNvbnN0IGZvcm1hdCA9IGQzLmZvcm1hdChcIi4yZlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gY3JlYXRlUGllKHByb3BzLmRhdGEpO1xyXG4gICAgICBjb25zdCBwcmV2RGF0YSA9IGNyZWF0ZVBpZShjYWNoZS5jdXJyZW50KTtcclxuICAgICAgY29uc3QgZ3JvdXAgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpO1xyXG4gICAgICBjb25zdCBncm91cFdpdGhEYXRhID0gZ3JvdXAuc2VsZWN0QWxsKFwiZy5hcmNcIikuZGF0YShkYXRhKTtcclxuXHJcbiAgICAgIGdyb3VwV2l0aERhdGEuZXhpdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgY29uc3QgZ3JvdXBXaXRoVXBkYXRlID0gZ3JvdXBXaXRoRGF0YVxyXG4gICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpO1xyXG5cclxuICAgICAgY29uc3QgcGF0aCA9IGdyb3VwV2l0aFVwZGF0ZVxyXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgLm1lcmdlKGdyb3VwV2l0aERhdGEuc2VsZWN0KFwicGF0aC5hcmNcIikpO1xyXG5cclxuICAgICAgY29uc3QgYXJjVHdlZW4gPSAoZCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlKHByZXZEYXRhW2ldLCBkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQgPT4gY3JlYXRlQXJjKGludGVycG9sYXRvcih0KSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBwYXRoXHJcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxyXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCwgaSkgPT4gY29sb3JzKGkpKVxyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2Vlbik7XHJcblxyXG4gICAgICBjb25zdCB0ZXh0ID0gZ3JvdXBXaXRoVXBkYXRlXHJcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAubWVyZ2UoZ3JvdXBXaXRoRGF0YS5zZWxlY3QoXCJ0ZXh0XCIpKTtcclxuXHJcbiAgICAgIHRleHRcclxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcclxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgMTApXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke2NyZWF0ZUFyYy5jZW50cm9pZChkKX0pYClcclxuICAgICAgICAudHdlZW4oXCJ0ZXh0XCIsIChkLCBpLCBub2RlcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW50ZXJwb2xhdG9yID0gZDMuaW50ZXJwb2xhdGUocHJldkRhdGFbaV0sIGQpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0ID0+IGQzLnNlbGVjdChub2Rlc1tpXSkudGV4dChmb3JtYXQoaW50ZXJwb2xhdG9yKHQpLnZhbHVlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYWNoZS5jdXJyZW50ID0gcHJvcHMuZGF0YTtcclxuICAgIH0sXHJcbiAgICBbcHJvcHMuZGF0YV1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fT5cclxuICAgICAgPGEgaHJlZj1cIiNcIj48Z1xyXG4gICAgICAgIHJlZj17cmVmfVxyXG4gICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3Byb3BzLm91dGVyUmFkaXVzfSAke3Byb3BzLm91dGVyUmFkaXVzfSlgfVxyXG4gICAgICAvPjwvYT5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5pbXBvcnQgQW5pbWF0ZWRQaWVIb29rcyBmcm9tIFwiLi4vY29tcG9uZW50L0RvbnV0Q2hhcnRcIjtcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcxNTBweCcsXHJcbiAgICBsZWZ0OiAnMTI4cHgnXHJcbn07XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBnZW5lcmF0ZURhdGEgPSAodmFsdWUsIGxlbmd0aCA9IDUpID0+XHJcbiAgICAgIGQzLnJhbmdlKGxlbmd0aCkubWFwKChpdGVtLCBpbmRleCkgPT4gKHtcclxuICAgICAgICBkYXRlOiBpbmRleCxcclxuICAgICAgICB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IE1hdGgucmFuZG9tKCkgKiAxMDAgOiB2YWx1ZVxyXG4gICAgICB9KSk7XHJcbiAgXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShnZW5lcmF0ZURhdGEoMCkpO1xyXG4gICAgY29uc3QgY2hhbmdlRGF0YSA9ICgpID0+IHtcclxuICAgICAgc2V0RGF0YShnZW5lcmF0ZURhdGEoKSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YShnZW5lcmF0ZURhdGEoKSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFshZGF0YV1cclxuICAgICk7XHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NoYW5nZURhdGF9PlRyYW5zZm9ybTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8QW5pbWF0ZWRQaWVIb29rc1xyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB3aWR0aD17NzAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwMH1cclxuICAgICAgICAgICAgaW5uZXJSYWRpdXM9ezI1MH1cclxuICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezM1MH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XHJcbiAgICAgICAgPEFuaW1hdGVkUGllSG9va3NcclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgd2lkdGg9ezQ2MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0NjB9XHJcbiAgICAgICAgICAgIGlubmVyUmFkaXVzPXsxMzB9XHJcbiAgICAgICAgICAgIG91dGVyUmFkaXVzPXsyMzB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEFwcDsiLCJpbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PD5cclxuXHRcdDxBcHAgLz5cclxuXHQ8Lz5cclxuKSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImQzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=