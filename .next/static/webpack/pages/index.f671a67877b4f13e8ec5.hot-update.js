webpackHotUpdate_N_E("pages/index",{

/***/ "./component/DonutChart.js":
/*!*********************************!*\
  !*** ./component/DonutChart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Yock\\Desktop\\react-test\\coffee\\component\\DonutChart.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Pie = function Pie(props) {
  _s();

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.data);
  var createPie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().value(function (d) {
    return d.value;
  }).sort(null);
  var createArc = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().innerRadius(props.innerRadius).outerRadius(props.outerRadius);
  var colors = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeCategory10"]);
  var format = d3__WEBPACK_IMPORTED_MODULE_1__["format"](".2f");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var data = createPie(props.data);
    var prevData = createPie(cache.current);
    var group = d3__WEBPACK_IMPORTED_MODULE_1__["select"](ref.current);
    var groupWithData = group.selectAll("g.arc").data(data);
    groupWithData.exit().remove();
    var groupWithUpdate = groupWithData.enter().append("g").attr("class", "arc");
    var path = groupWithUpdate.append("path").merge(groupWithData.select("path.arc"));

    var arcTween = function arcTween(d, i) {
      var interpolator = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](prevData[i], d);
      return function (t) {
        return createArc(interpolator(t));
      };
    };

    path.attr("class", "arc").attr("fill", function (d, i) {
      return colors(i);
    }).transition().attrTween("d", arcTween);
    var text = groupWithUpdate.append("text").merge(groupWithData.select("text"));
    text.attr("text-anchor", "middle").attr("alignment-baseline", "middle").style("fill", "white").style("font-size", 10).transition().attr("transform", function (d) {
      return "translate(".concat(createArc.centroid(d), ")");
    }).tween("text", function (d, i, nodes) {
      var interpolator = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](prevData[i], d);
      return function (t) {
        return d3__WEBPACK_IMPORTED_MODULE_1__["select"](nodes[i]).text(format(interpolator(t).value));
      };
    });
    cache.current = props.data;
  }, [props.data]);
  return __jsx("svg", {
    width: props.width,
    height: props.height,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: ref,
    transform: "translate(".concat(props.outerRadius, " ").concat(props.outerRadius, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }));
};

_s(Pie, "MmPCtGo/I6HdvmXfA/do21yyKOc=");

_c = Pie;
/* harmony default export */ __webpack_exports__["default"] = (Pie);

var _c;

$RefreshReg$(_c, "Pie");

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

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
false,

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! no exports provided */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0RvbnV0Q2hhcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FwcC5qcyJdLCJuYW1lcyI6WyJQaWUiLCJwcm9wcyIsInJlZiIsInVzZVJlZiIsImNhY2hlIiwiZGF0YSIsImNyZWF0ZVBpZSIsImQzIiwidmFsdWUiLCJkIiwic29ydCIsImNyZWF0ZUFyYyIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJjb2xvcnMiLCJmb3JtYXQiLCJ1c2VFZmZlY3QiLCJwcmV2RGF0YSIsImN1cnJlbnQiLCJncm91cCIsImdyb3VwV2l0aERhdGEiLCJzZWxlY3RBbGwiLCJleGl0IiwicmVtb3ZlIiwiZ3JvdXBXaXRoVXBkYXRlIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwicGF0aCIsIm1lcmdlIiwic2VsZWN0IiwiYXJjVHdlZW4iLCJpIiwiaW50ZXJwb2xhdG9yIiwidCIsInRyYW5zaXRpb24iLCJhdHRyVHdlZW4iLCJ0ZXh0Iiwic3R5bGUiLCJjZW50cm9pZCIsInR3ZWVuIiwibm9kZXMiLCJ3aWR0aCIsImhlaWdodCIsIkFwcCIsImdlbmVyYXRlRGF0YSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRhdGUiLCJ1bmRlZmluZWQiLCJNYXRoIiwicmFuZG9tIiwidXNlU3RhdGUiLCJzZXREYXRhIiwiY2hhbmdlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQUMsS0FBSyxFQUFJO0FBQUE7O0FBQ25CLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRCxvREFBTSxDQUFDRixLQUFLLENBQUNJLElBQVAsQ0FBcEI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLHNDQUFBLEdBRWZDLEtBRmUsQ0FFVCxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDRCxLQUFOO0FBQUEsR0FGUSxFQUdmRSxJQUhlLENBR1YsSUFIVSxDQUFsQjtBQUlBLE1BQU1DLFNBQVMsR0FBR0osc0NBQUEsR0FFZkssV0FGZSxDQUVIWCxLQUFLLENBQUNXLFdBRkgsRUFHZkMsV0FIZSxDQUdIWixLQUFLLENBQUNZLFdBSEgsQ0FBbEI7QUFJQSxNQUFNQyxNQUFNLEdBQUdQLCtDQUFBLENBQWdCQSxtREFBaEIsQ0FBZjtBQUNBLE1BQU1RLE1BQU0sR0FBR1IseUNBQUEsQ0FBVSxLQUFWLENBQWY7QUFFQVMseURBQVMsQ0FDUCxZQUFNO0FBQ0osUUFBTVgsSUFBSSxHQUFHQyxTQUFTLENBQUNMLEtBQUssQ0FBQ0ksSUFBUCxDQUF0QjtBQUNBLFFBQU1ZLFFBQVEsR0FBR1gsU0FBUyxDQUFDRixLQUFLLENBQUNjLE9BQVAsQ0FBMUI7QUFDQSxRQUFNQyxLQUFLLEdBQUdaLHlDQUFBLENBQVVMLEdBQUcsQ0FBQ2dCLE9BQWQsQ0FBZDtBQUNBLFFBQU1FLGFBQWEsR0FBR0QsS0FBSyxDQUFDRSxTQUFOLENBQWdCLE9BQWhCLEVBQXlCaEIsSUFBekIsQ0FBOEJBLElBQTlCLENBQXRCO0FBRUFlLGlCQUFhLENBQUNFLElBQWQsR0FBcUJDLE1BQXJCO0FBRUEsUUFBTUMsZUFBZSxHQUFHSixhQUFhLENBQ2xDSyxLQURxQixHQUVyQkMsTUFGcUIsQ0FFZCxHQUZjLEVBR3JCQyxJQUhxQixDQUdoQixPQUhnQixFQUdQLEtBSE8sQ0FBeEI7QUFLQSxRQUFNQyxJQUFJLEdBQUdKLGVBQWUsQ0FDekJFLE1BRFUsQ0FDSCxNQURHLEVBRVZHLEtBRlUsQ0FFSlQsYUFBYSxDQUFDVSxNQUFkLENBQXFCLFVBQXJCLENBRkksQ0FBYjs7QUFJQSxRQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDdEIsQ0FBRCxFQUFJdUIsQ0FBSixFQUFVO0FBQ3pCLFVBQU1DLFlBQVksR0FBRzFCLDhDQUFBLENBQWVVLFFBQVEsQ0FBQ2UsQ0FBRCxDQUF2QixFQUE0QnZCLENBQTVCLENBQXJCO0FBRUEsYUFBTyxVQUFBeUIsQ0FBQztBQUFBLGVBQUl2QixTQUFTLENBQUNzQixZQUFZLENBQUNDLENBQUQsQ0FBYixDQUFiO0FBQUEsT0FBUjtBQUNELEtBSkQ7O0FBTUFOLFFBQUksQ0FDREQsSUFESCxDQUNRLE9BRFIsRUFDaUIsS0FEakIsRUFFR0EsSUFGSCxDQUVRLE1BRlIsRUFFZ0IsVUFBQ2xCLENBQUQsRUFBSXVCLENBQUo7QUFBQSxhQUFVbEIsTUFBTSxDQUFDa0IsQ0FBRCxDQUFoQjtBQUFBLEtBRmhCLEVBR0dHLFVBSEgsR0FJR0MsU0FKSCxDQUlhLEdBSmIsRUFJa0JMLFFBSmxCO0FBTUEsUUFBTU0sSUFBSSxHQUFHYixlQUFlLENBQ3pCRSxNQURVLENBQ0gsTUFERyxFQUVWRyxLQUZVLENBRUpULGFBQWEsQ0FBQ1UsTUFBZCxDQUFxQixNQUFyQixDQUZJLENBQWI7QUFJQU8sUUFBSSxDQUNEVixJQURILENBQ1EsYUFEUixFQUN1QixRQUR2QixFQUVHQSxJQUZILENBRVEsb0JBRlIsRUFFOEIsUUFGOUIsRUFHR1csS0FISCxDQUdTLE1BSFQsRUFHaUIsT0FIakIsRUFJR0EsS0FKSCxDQUlTLFdBSlQsRUFJc0IsRUFKdEIsRUFLR0gsVUFMSCxHQU1HUixJQU5ILENBTVEsV0FOUixFQU1xQixVQUFBbEIsQ0FBQztBQUFBLGlDQUFpQkUsU0FBUyxDQUFDNEIsUUFBVixDQUFtQjlCLENBQW5CLENBQWpCO0FBQUEsS0FOdEIsRUFPRytCLEtBUEgsQ0FPUyxNQVBULEVBT2lCLFVBQUMvQixDQUFELEVBQUl1QixDQUFKLEVBQU9TLEtBQVAsRUFBaUI7QUFDOUIsVUFBTVIsWUFBWSxHQUFHMUIsOENBQUEsQ0FBZVUsUUFBUSxDQUFDZSxDQUFELENBQXZCLEVBQTRCdkIsQ0FBNUIsQ0FBckI7QUFFQSxhQUFPLFVBQUF5QixDQUFDO0FBQUEsZUFBSTNCLHlDQUFBLENBQVVrQyxLQUFLLENBQUNULENBQUQsQ0FBZixFQUFvQkssSUFBcEIsQ0FBeUJ0QixNQUFNLENBQUNrQixZQUFZLENBQUNDLENBQUQsQ0FBWixDQUFnQjFCLEtBQWpCLENBQS9CLENBQUo7QUFBQSxPQUFSO0FBQ0QsS0FYSDtBQWFBSixTQUFLLENBQUNjLE9BQU4sR0FBZ0JqQixLQUFLLENBQUNJLElBQXRCO0FBQ0QsR0FoRE0sRUFpRFAsQ0FBQ0osS0FBSyxDQUFDSSxJQUFQLENBakRPLENBQVQ7QUFvREEsU0FDRTtBQUFLLFNBQUssRUFBRUosS0FBSyxDQUFDeUMsS0FBbEI7QUFBeUIsVUFBTSxFQUFFekMsS0FBSyxDQUFDMEMsTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsT0FBRyxFQUFFekMsR0FEUDtBQUVFLGFBQVMsc0JBQWVELEtBQUssQ0FBQ1ksV0FBckIsY0FBb0NaLEtBQUssQ0FBQ1ksV0FBMUMsTUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQVFELENBMUVEOztHQUFNYixHOztLQUFBQSxHO0FBNEVTQSxrRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9FQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzRDLEdBQVQsR0FBZTtBQUFBOztBQUNYLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNyQyxLQUFEO0FBQUEsUUFBUXNDLE1BQVIsdUVBQWlCLENBQWpCO0FBQUEsV0FDbkJ2Qyx3Q0FBQSxDQUFTdUMsTUFBVCxFQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsYUFBa0I7QUFDckNDLFlBQUksRUFBRUQsS0FEK0I7QUFFckN6QyxhQUFLLEVBQUVBLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUsyQyxTQUE1QixHQUF3Q0MsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXhELEdBQThEN0M7QUFGaEMsT0FBbEI7QUFBQSxLQUFyQixDQURtQjtBQUFBLEdBQXJCOztBQURXLGtCQU9hOEMsc0RBQVEsQ0FBQ1QsWUFBWSxDQUFDLENBQUQsQ0FBYixDQVByQjtBQUFBLE1BT0p4QyxJQVBJO0FBQUEsTUFPRWtELE9BUEY7O0FBUVgsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QkQsV0FBTyxDQUFDVixZQUFZLEVBQWIsQ0FBUDtBQUNELEdBRkQ7O0FBSUE3Qix5REFBUyxDQUNQLFlBQU07QUFDSnVDLFdBQU8sQ0FBQ1YsWUFBWSxFQUFiLENBQVA7QUFDRCxHQUhNLEVBSVAsQ0FBQyxDQUFDeEMsSUFBRixDQUpPLENBQVQ7QUFPQSxTQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFRLFdBQU8sRUFBRW1ELFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQURGLEVBRUUsTUFBQyw2REFBRDtBQUNFLFFBQUksRUFBRW5ELElBRFI7QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFVBQU0sRUFBRSxHQUhWO0FBSUUsZUFBVyxFQUFFLEVBSmY7QUFLRSxlQUFXLEVBQUUsR0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FKRixDQURGO0FBaUJEOztHQXBDTXVDLEc7O0tBQUFBLEciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjY3MWE2Nzg3N2I0ZjEzZThlYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcclxuXHJcbmNvbnN0IFBpZSA9IHByb3BzID0+IHtcclxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgY2FjaGUgPSB1c2VSZWYocHJvcHMuZGF0YSk7XHJcbiAgY29uc3QgY3JlYXRlUGllID0gZDNcclxuICAgIC5waWUoKVxyXG4gICAgLnZhbHVlKGQgPT4gZC52YWx1ZSlcclxuICAgIC5zb3J0KG51bGwpO1xyXG4gIGNvbnN0IGNyZWF0ZUFyYyA9IGQzXHJcbiAgICAuYXJjKClcclxuICAgIC5pbm5lclJhZGl1cyhwcm9wcy5pbm5lclJhZGl1cylcclxuICAgIC5vdXRlclJhZGl1cyhwcm9wcy5vdXRlclJhZGl1cyk7XHJcbiAgY29uc3QgY29sb3JzID0gZDMuc2NhbGVPcmRpbmFsKGQzLnNjaGVtZUNhdGVnb3J5MTApO1xyXG4gIGNvbnN0IGZvcm1hdCA9IGQzLmZvcm1hdChcIi4yZlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBjb25zdCBkYXRhID0gY3JlYXRlUGllKHByb3BzLmRhdGEpO1xyXG4gICAgICBjb25zdCBwcmV2RGF0YSA9IGNyZWF0ZVBpZShjYWNoZS5jdXJyZW50KTtcclxuICAgICAgY29uc3QgZ3JvdXAgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpO1xyXG4gICAgICBjb25zdCBncm91cFdpdGhEYXRhID0gZ3JvdXAuc2VsZWN0QWxsKFwiZy5hcmNcIikuZGF0YShkYXRhKTtcclxuXHJcbiAgICAgIGdyb3VwV2l0aERhdGEuZXhpdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgY29uc3QgZ3JvdXBXaXRoVXBkYXRlID0gZ3JvdXBXaXRoRGF0YVxyXG4gICAgICAgIC5lbnRlcigpXHJcbiAgICAgICAgLmFwcGVuZChcImdcIilcclxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpO1xyXG5cclxuICAgICAgY29uc3QgcGF0aCA9IGdyb3VwV2l0aFVwZGF0ZVxyXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgICAgLm1lcmdlKGdyb3VwV2l0aERhdGEuc2VsZWN0KFwicGF0aC5hcmNcIikpO1xyXG5cclxuICAgICAgY29uc3QgYXJjVHdlZW4gPSAoZCwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGludGVycG9sYXRvciA9IGQzLmludGVycG9sYXRlKHByZXZEYXRhW2ldLCBkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHQgPT4gY3JlYXRlQXJjKGludGVycG9sYXRvcih0KSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBwYXRoXHJcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxyXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCwgaSkgPT4gY29sb3JzKGkpKVxyXG4gICAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2Vlbik7XHJcblxyXG4gICAgICBjb25zdCB0ZXh0ID0gZ3JvdXBXaXRoVXBkYXRlXHJcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcclxuICAgICAgICAubWVyZ2UoZ3JvdXBXaXRoRGF0YS5zZWxlY3QoXCJ0ZXh0XCIpKTtcclxuXHJcbiAgICAgIHRleHRcclxuICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXHJcbiAgICAgICAgLmF0dHIoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwid2hpdGVcIilcclxuICAgICAgICAuc3R5bGUoXCJmb250LXNpemVcIiwgMTApXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGQgPT4gYHRyYW5zbGF0ZSgke2NyZWF0ZUFyYy5jZW50cm9pZChkKX0pYClcclxuICAgICAgICAudHdlZW4oXCJ0ZXh0XCIsIChkLCBpLCBub2RlcykgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaW50ZXJwb2xhdG9yID0gZDMuaW50ZXJwb2xhdGUocHJldkRhdGFbaV0sIGQpO1xyXG5cclxuICAgICAgICAgIHJldHVybiB0ID0+IGQzLnNlbGVjdChub2Rlc1tpXSkudGV4dChmb3JtYXQoaW50ZXJwb2xhdG9yKHQpLnZhbHVlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICBjYWNoZS5jdXJyZW50ID0gcHJvcHMuZGF0YTtcclxuICAgIH0sXHJcbiAgICBbcHJvcHMuZGF0YV1cclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fT5cclxuICAgICAgPGdcclxuICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtwcm9wcy5vdXRlclJhZGl1c30gJHtwcm9wcy5vdXRlclJhZGl1c30pYH1cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5pbXBvcnQgQW5pbWF0ZWRQaWVIb29rcyBmcm9tIFwiLi4vY29tcG9uZW50L0RvbnV0Q2hhcnRcIjtcclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IGdlbmVyYXRlRGF0YSA9ICh2YWx1ZSwgbGVuZ3RoID0gNSkgPT5cclxuICAgICAgZDMucmFuZ2UobGVuZ3RoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGRhdGU6IGluZGV4LFxyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gTWF0aC5yYW5kb20oKSAqIDEwMCA6IHZhbHVlXHJcbiAgICAgIH0pKTtcclxuICBcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGdlbmVyYXRlRGF0YSgwKSk7XHJcbiAgICBjb25zdCBjaGFuZ2VEYXRhID0gKCkgPT4ge1xyXG4gICAgICBzZXREYXRhKGdlbmVyYXRlRGF0YSgpKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzZXREYXRhKGdlbmVyYXRlRGF0YSgpKTtcclxuICAgICAgfSxcclxuICAgICAgWyFkYXRhXVxyXG4gICAgKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlRGF0YX0+VHJhbnNmb3JtPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+QW5pbWF0ZWQgUGllIEhvb2tzIChEMyBhbmltYXRpb25zKTwvc3Bhbj5cclxuICAgICAgICAgIDxBbmltYXRlZFBpZUhvb2tzXHJcbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XHJcbiAgICAgICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICBpbm5lclJhZGl1cz17NjB9XHJcbiAgICAgICAgICAgIG91dGVyUmFkaXVzPXsxMDB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=