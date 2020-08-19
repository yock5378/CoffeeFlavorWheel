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
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("g", {
    ref: ref,
    transform: "translate(".concat(props.outerRadius, " ").concat(props.outerRadius, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  })));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0RvbnV0Q2hhcnQuanMiXSwibmFtZXMiOlsiUGllIiwicHJvcHMiLCJyZWYiLCJ1c2VSZWYiLCJjYWNoZSIsImRhdGEiLCJjcmVhdGVQaWUiLCJkMyIsInZhbHVlIiwiZCIsInNvcnQiLCJjcmVhdGVBcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwiY29sb3JzIiwiZm9ybWF0IiwidXNlRWZmZWN0IiwicHJldkRhdGEiLCJjdXJyZW50IiwiZ3JvdXAiLCJncm91cFdpdGhEYXRhIiwic2VsZWN0QWxsIiwiZXhpdCIsInJlbW92ZSIsImdyb3VwV2l0aFVwZGF0ZSIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsInBhdGgiLCJtZXJnZSIsInNlbGVjdCIsImFyY1R3ZWVuIiwiaSIsImludGVycG9sYXRvciIsInQiLCJ0cmFuc2l0aW9uIiwiYXR0clR3ZWVuIiwidGV4dCIsInN0eWxlIiwiY2VudHJvaWQiLCJ0d2VlbiIsIm5vZGVzIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUFDLEtBQUssRUFBSTtBQUFBOztBQUNuQixNQUFNQyxHQUFHLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUFsQjtBQUNBLE1BQU1DLEtBQUssR0FBR0Qsb0RBQU0sQ0FBQ0YsS0FBSyxDQUFDSSxJQUFQLENBQXBCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxzQ0FBQSxHQUVmQyxLQUZlLENBRVQsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0QsS0FBTjtBQUFBLEdBRlEsRUFHZkUsSUFIZSxDQUdWLElBSFUsQ0FBbEI7QUFJQSxNQUFNQyxTQUFTLEdBQUdKLHNDQUFBLEdBRWZLLFdBRmUsQ0FFSFgsS0FBSyxDQUFDVyxXQUZILEVBR2ZDLFdBSGUsQ0FHSFosS0FBSyxDQUFDWSxXQUhILENBQWxC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LFNBQ0U7QUFBSyxTQUFLLEVBQUVKLEtBQUssQ0FBQ3lDLEtBQWxCO0FBQXlCLFVBQU0sRUFBRXpDLEtBQUssQ0FBQzBDLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWTtBQUNWLE9BQUcsRUFBRXpDLEdBREs7QUFFVixhQUFTLHNCQUFlRCxLQUFLLENBQUNZLFdBQXJCLGNBQW9DWixLQUFLLENBQUNZLFdBQTFDLE1BRkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFaLENBREYsQ0FERjtBQVFELENBMUVEOztHQUFNYixHOztLQUFBQSxHO0FBNEVTQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDI2ZDdmOTI4Y2Q2ODA1Y2Q5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5cclxuY29uc3QgUGllID0gcHJvcHMgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBjYWNoZSA9IHVzZVJlZihwcm9wcy5kYXRhKTtcclxuICBjb25zdCBjcmVhdGVQaWUgPSBkM1xyXG4gICAgLnBpZSgpXHJcbiAgICAudmFsdWUoZCA9PiBkLnZhbHVlKVxyXG4gICAgLnNvcnQobnVsbCk7XHJcbiAgY29uc3QgY3JlYXRlQXJjID0gZDNcclxuICAgIC5hcmMoKVxyXG4gICAgLmlubmVyUmFkaXVzKHByb3BzLmlubmVyUmFkaXVzKVxyXG4gICAgLm91dGVyUmFkaXVzKHByb3BzLm91dGVyUmFkaXVzKTtcclxuICBjb25zdCBjb2xvcnMgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XHJcbiAgY29uc3QgZm9ybWF0ID0gZDMuZm9ybWF0KFwiLjJmXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjcmVhdGVQaWUocHJvcHMuZGF0YSk7XHJcbiAgICAgIGNvbnN0IHByZXZEYXRhID0gY3JlYXRlUGllKGNhY2hlLmN1cnJlbnQpO1xyXG4gICAgICBjb25zdCBncm91cCA9IGQzLnNlbGVjdChyZWYuY3VycmVudCk7XHJcbiAgICAgIGNvbnN0IGdyb3VwV2l0aERhdGEgPSBncm91cC5zZWxlY3RBbGwoXCJnLmFyY1wiKS5kYXRhKGRhdGEpO1xyXG5cclxuICAgICAgZ3JvdXBXaXRoRGF0YS5leGl0KCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICBjb25zdCBncm91cFdpdGhVcGRhdGUgPSBncm91cFdpdGhEYXRhXHJcbiAgICAgICAgLmVudGVyKClcclxuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxyXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIik7XHJcblxyXG4gICAgICBjb25zdCBwYXRoID0gZ3JvdXBXaXRoVXBkYXRlXHJcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAubWVyZ2UoZ3JvdXBXaXRoRGF0YS5zZWxlY3QoXCJwYXRoLmFyY1wiKSk7XHJcblxyXG4gICAgICBjb25zdCBhcmNUd2VlbiA9IChkLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW50ZXJwb2xhdG9yID0gZDMuaW50ZXJwb2xhdGUocHJldkRhdGFbaV0sIGQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdCA9PiBjcmVhdGVBcmMoaW50ZXJwb2xhdG9yKHQpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHBhdGhcclxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXHJcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIChkLCBpKSA9PiBjb2xvcnMoaSkpXHJcbiAgICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVuKTtcclxuXHJcbiAgICAgIGNvbnN0IHRleHQgPSBncm91cFdpdGhVcGRhdGVcclxuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxyXG4gICAgICAgIC5tZXJnZShncm91cFdpdGhEYXRhLnNlbGVjdChcInRleHRcIikpO1xyXG5cclxuICAgICAgdGV4dFxyXG4gICAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcclxuICAgICAgICAuYXR0cihcImFsaWdubWVudC1iYXNlbGluZVwiLCBcIm1pZGRsZVwiKVxyXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCJ3aGl0ZVwiKVxyXG4gICAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCAxMClcclxuICAgICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZCA9PiBgdHJhbnNsYXRlKCR7Y3JlYXRlQXJjLmNlbnRyb2lkKGQpfSlgKVxyXG4gICAgICAgIC50d2VlbihcInRleHRcIiwgKGQsIGksIG5vZGVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0b3IgPSBkMy5pbnRlcnBvbGF0ZShwcmV2RGF0YVtpXSwgZCk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHQgPT4gZDMuc2VsZWN0KG5vZGVzW2ldKS50ZXh0KGZvcm1hdChpbnRlcnBvbGF0b3IodCkudmFsdWUpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIGNhY2hlLmN1cnJlbnQgPSBwcm9wcy5kYXRhO1xyXG4gICAgfSxcclxuICAgIFtwcm9wcy5kYXRhXVxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPXtwcm9wcy53aWR0aH0gaGVpZ2h0PXtwcm9wcy5oZWlnaHR9PlxyXG4gICAgICA8YSBocmVmPVwiI1wiPjxnXHJcbiAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7cHJvcHMub3V0ZXJSYWRpdXN9ICR7cHJvcHMub3V0ZXJSYWRpdXN9KWB9XHJcbiAgICAgIC8+PC9hPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==