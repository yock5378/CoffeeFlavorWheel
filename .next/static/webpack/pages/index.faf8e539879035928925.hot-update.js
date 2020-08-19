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



var divStyle = {
  position: 'absolute',
  top: '100',
  left: '100'
};

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
    width: 400,
    height: 400,
    innerRadius: 100,
    outerRadius: 200,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBwLmpzIl0sIm5hbWVzIjpbImRpdlN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiQXBwIiwiZ2VuZXJhdGVEYXRhIiwidmFsdWUiLCJsZW5ndGgiLCJkMyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRhdGUiLCJ1bmRlZmluZWQiLCJNYXRoIiwicmFuZG9tIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImNoYW5nZURhdGEiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDYkMsVUFBUSxFQUFFLFVBREc7QUFFYkMsS0FBRyxFQUFFLEtBRlE7QUFHYkMsTUFBSSxFQUFFO0FBSE8sQ0FBakI7O0FBTUEsU0FBU0MsR0FBVCxHQUFlO0FBQUE7O0FBQ1gsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRDtBQUFBLFFBQVFDLE1BQVIsdUVBQWlCLENBQWpCO0FBQUEsV0FDbkJDLHdDQUFBLENBQVNELE1BQVQsRUFBaUJFLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGFBQWtCO0FBQ3JDQyxZQUFJLEVBQUVELEtBRCtCO0FBRXJDTCxhQUFLLEVBQUVBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUtPLFNBQTVCLEdBQXdDQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBeEQsR0FBOERUO0FBRmhDLE9BQWxCO0FBQUEsS0FBckIsQ0FEbUI7QUFBQSxHQUFyQjs7QUFEVyxrQkFPYVUsc0RBQVEsQ0FBQ1gsWUFBWSxDQUFDLENBQUQsQ0FBYixDQVByQjtBQUFBLE1BT0pZLElBUEk7QUFBQSxNQU9FQyxPQVBGOztBQVFYLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJELFdBQU8sQ0FBQ2IsWUFBWSxFQUFiLENBQVA7QUFDRCxHQUZEOztBQUlBZSx5REFBUyxDQUNQLFlBQU07QUFDSkYsV0FBTyxDQUFDYixZQUFZLEVBQWIsQ0FBUDtBQUNELEdBSE0sRUFJUCxDQUFDLENBQUNZLElBQUYsQ0FKTyxDQUFUO0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxXQUFPLEVBQUVFLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQ0UsUUFBSSxFQUFFRixJQURSO0FBRUUsU0FBSyxFQUFFLEdBRlQ7QUFHRSxVQUFNLEVBQUUsR0FIVjtBQUlFLGVBQVcsRUFBRSxHQUpmO0FBS0UsZUFBVyxFQUFFLEdBTGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsRUFjRTtBQUFLLFNBQUssRUFBRWpCLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNkRBQUQ7QUFDSSxRQUFJLEVBQUVpQixJQURWO0FBRUksU0FBSyxFQUFFLEdBRlg7QUFHSSxVQUFNLEVBQUUsR0FIWjtBQUlJLGVBQVcsRUFBRSxHQUpqQjtBQUtJLGVBQVcsRUFBRSxHQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREEsQ0FkRixDQURGO0FBMEJEOztHQTdDTWIsRzs7S0FBQUEsRztBQStDUUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmFmOGU1Mzk4NzkwMzU5Mjg5MjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5pbXBvcnQgQW5pbWF0ZWRQaWVIb29rcyBmcm9tIFwiLi4vY29tcG9uZW50L0RvbnV0Q2hhcnRcIjtcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcxMDAnLFxyXG4gICAgbGVmdDogJzEwMCdcclxufTtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IGdlbmVyYXRlRGF0YSA9ICh2YWx1ZSwgbGVuZ3RoID0gNSkgPT5cclxuICAgICAgZDMucmFuZ2UobGVuZ3RoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGRhdGU6IGluZGV4LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gTWF0aC5yYW5kb20oKSAqIDEwMCA6IHZhbHVlXHJcbiAgICAgIH0pKTtcclxuICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGdlbmVyYXRlRGF0YSgwKSk7XHJcbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gKCkgPT4ge1xyXG4gICAgICBzZXREYXRhKGdlbmVyYXRlRGF0YSgpKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzZXREYXRhKGdlbmVyYXRlRGF0YSgpKTtcclxuICAgICAgfSxcclxuICAgICAgWyFkYXRhXVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlRGF0YX0+VHJhbnNmb3JtPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxBbmltYXRlZFBpZUhvb2tzXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHdpZHRoPXs3MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzAwfVxyXG4gICAgICAgICAgICBpbm5lclJhZGl1cz17MjUwfVxyXG4gICAgICAgICAgICBvdXRlclJhZGl1cz17MzUwfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cclxuICAgICAgICA8QW5pbWF0ZWRQaWVIb29rc1xyXG4gICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICB3aWR0aD17NDAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwMH1cclxuICAgICAgICAgICAgaW5uZXJSYWRpdXM9ezEwMH1cclxuICAgICAgICAgICAgb3V0ZXJSYWRpdXM9ezIwMH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=