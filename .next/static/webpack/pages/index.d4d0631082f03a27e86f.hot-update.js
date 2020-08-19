webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _component_DonutChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/DonutChart */ "./component/DonutChart.js");
var _jsxFileName = "C:\\Users\\Yock\\Desktop\\react-test\\coffee\\pages\\app.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function App() {
  _s();

  var generateData = function generateData(value) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    return d3__WEBPACK_IMPORTED_MODULE_1__["range"](length).map(function (item, index) {
      return {
        date: index,
        value: value === null || value === undefined ? Math.random() * 100 : value
      };
    });
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(generateData(0)),
      data = _useState[0],
      setData = _useState[1];

  var changeData = function changeData() {
    setData(generateData());
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setData(generateData());
  }, [!data]);
  return __jsx("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: changeData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "Transform")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Animated Pie Hooks (D3 animations)"), __jsx(_component_DonutChart__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data,
    width: 200,
    height: 200,
    innerRadius: 60,
    outerRadius: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })));
}

_s(App, "W3uuPrm8C7J4VrWEdcoj+uGWcI8=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsImdlbmVyYXRlRGF0YSIsInZhbHVlIiwibGVuZ3RoIiwiZDMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkYXRlIiwidW5kZWZpbmVkIiwiTWF0aCIsInJhbmRvbSIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJjaGFuZ2VEYXRhIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsR0FBZTtBQUFBOztBQUNYLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQ7QUFBQSxRQUFRQyxNQUFSLHVFQUFpQixDQUFqQjtBQUFBLFdBQ25CQyx3Q0FBQSxDQUFTRCxNQUFULEVBQWlCRSxHQUFqQixDQUFxQixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxhQUFrQjtBQUNyQ0MsWUFBSSxFQUFFRCxLQUQrQjtBQUVyQ0wsYUFBSyxFQUFFQSxLQUFLLEtBQUssSUFBVixJQUFrQkEsS0FBSyxLQUFLTyxTQUE1QixHQUF3Q0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXhELEdBQThEVDtBQUZoQyxPQUFsQjtBQUFBLEtBQXJCLENBRG1CO0FBQUEsR0FBckI7O0FBRFcsa0JBT2FVLHNEQUFRLENBQUNYLFlBQVksQ0FBQyxDQUFELENBQWIsQ0FQckI7QUFBQSxNQU9KWSxJQVBJO0FBQUEsTUFPRUMsT0FQRjs7QUFRWCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxXQUFPLENBQUNiLFlBQVksRUFBYixDQUFQO0FBQ0QsR0FGRDs7QUFJQWUseURBQVMsQ0FDUCxZQUFNO0FBQ0pGLFdBQU8sQ0FBQ2IsWUFBWSxFQUFiLENBQVA7QUFDRCxHQUhNLEVBSVAsQ0FBQyxDQUFDWSxJQUFGLENBSk8sQ0FBVDtBQU9BLFNBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFRSxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FERixFQUVFLE1BQUMsNkRBQUQ7QUFDRSxRQUFJLEVBQUVGLElBRFI7QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFVBQU0sRUFBRSxHQUhWO0FBSUUsZUFBVyxFQUFFLEVBSmY7QUFLRSxlQUFXLEVBQUUsR0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGO0FBaUJEOztHQXBDTWIsRzs7S0FBQUEsRztBQXNDUUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDRkMDYzMTA4MmYwM2EyN2U4NmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5pbXBvcnQgQW5pbWF0ZWRQaWVIb29rcyBmcm9tIFwiLi4vY29tcG9uZW50L0RvbnV0Q2hhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IGdlbmVyYXRlRGF0YSA9ICh2YWx1ZSwgbGVuZ3RoID0gNSkgPT5cclxuICAgICAgZDMucmFuZ2UobGVuZ3RoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGRhdGU6IGluZGV4LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gTWF0aC5yYW5kb20oKSAqIDEwMCA6IHZhbHVlXHJcbiAgICAgIH0pKTtcclxuICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGdlbmVyYXRlRGF0YSgwKSk7XHJcbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gKCkgPT4ge1xyXG4gICAgICBzZXREYXRhKGdlbmVyYXRlRGF0YSgpKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzZXREYXRhKGdlbmVyYXRlRGF0YSgpKTtcclxuICAgICAgfSxcclxuICAgICAgWyFkYXRhXVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlRGF0YX0+VHJhbnNmb3JtPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+QW5pbWF0ZWQgUGllIEhvb2tzIChEMyBhbmltYXRpb25zKTwvc3Bhbj5cclxuICAgICAgICAgIDxBbmltYXRlZFBpZUhvb2tzXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICBpbm5lclJhZGl1cz17NjB9XHJcbiAgICAgICAgICAgIG91dGVyUmFkaXVzPXsxMDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==