"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaign/[address]",{

/***/ "./pages/campaign/[address].js":
/*!*************************************!*\
  !*** ./pages/campaign/[address].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ethereum_campaign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ethereum/campaign.js */ \"./ethereum/campaign.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Detail = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var address = router.query.address;\n    var currentCampagin = (0,_ethereum_campaign_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(address);\n    console.log(currentCampagin);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        currentCampagin && fetch();\n    }, [\n        currentCampagin\n    ]);\n    var fetch = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var manager, minimumContribution;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            currentCampagin.methods.manager().call()\n                        ];\n                    case 1:\n                        manager = _state.sent();\n                        return [\n                            4,\n                            currentCampagin.methods.minimumContribution().call()\n                        ];\n                    case 2:\n                        minimumContribution = _state.sent();\n                        console.log(manager, \"---\", minimumContribution);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function fetch() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Detail: \",\n            address\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/campaign/[address].js\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, _this);\n};\n_s(Detail, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Detail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbi9bYWRkcmVzc10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OztBQUF3QztBQUNVO0FBQ2hCO0FBRWxDLElBQU1HLE1BQU0sR0FBRyxXQUFNOztJQUNuQixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBTSxPQUFTLEdBQUtJLE1BQU0sQ0FBQ0UsS0FBSyxDQUF4QkQsT0FBTztJQUNmLElBQU1FLGVBQWUsR0FBR04saUVBQVEsQ0FBQ0ksT0FBTyxDQUFDO0lBQ3pDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsZUFBZSxDQUFDLENBQUM7SUFDN0JMLGdEQUFTLENBQUMsV0FBTTtRQUNkSyxlQUFlLElBQUlHLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUMsRUFBRTtRQUFDSCxlQUFlO0tBQUMsQ0FBQyxDQUFDO0lBRXRCLElBQU1HLEtBQUs7bUJBQUcsK0ZBQVk7Z0JBQ2xCQyxPQUFPLEVBQ1BDLG1CQUFtQjs7Ozt3QkFEVDs7NEJBQU1MLGVBQWUsQ0FBQ00sT0FBTyxDQUFDRixPQUFPLEVBQUUsQ0FBQ0csSUFBSSxFQUFFOzBCQUFBOzt3QkFBeERILE9BQU8sR0FBRyxhQUE4Qzt3QkFDbEM7OzRCQUFNSixlQUFlLENBQUNNLE9BQU8sQ0FDdERELG1CQUFtQixFQUFFLENBQ3JCRSxJQUFJLEVBQUU7MEJBQUE7O3dCQUZIRixtQkFBbUIsR0FBRyxhQUVuQjt3QkFDVEosT0FBTyxDQUFDQyxHQUFHLENBQUNFLE9BQU8sRUFBRSxLQUFLLEVBQUVDLG1CQUFtQixDQUFDLENBQUM7Ozs7OztRQUNuRCxDQUFDO3dCQU5LRixLQUFLOzs7T0FNVjtJQUNELHFCQUFPLDhEQUFDSyxLQUFHOztZQUFDLFVBQVE7WUFBQ1YsT0FBTzs7Ozs7O2FBQU8sQ0FBQztBQUN0QyxDQUFDO0dBakJLRixNQUFNOztRQUNLSCxrREFBUzs7O0FBRHBCRyxLQUFBQSxNQUFNO0FBbUJaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ24vW2FkZHJlc3NdLmpzP2RmMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgY2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduLmpzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRGV0YWlsID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IGN1cnJlbnRDYW1wYWdpbiA9IGNhbXBhaWduKGFkZHJlc3MpO1xuICBjb25zb2xlLmxvZyhjdXJyZW50Q2FtcGFnaW4pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGN1cnJlbnRDYW1wYWdpbiAmJiBmZXRjaCgpO1xuICB9LCBbY3VycmVudENhbXBhZ2luXSk7XG5cbiAgY29uc3QgZmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbWFuYWdlciA9IGF3YWl0IGN1cnJlbnRDYW1wYWdpbi5tZXRob2RzLm1hbmFnZXIoKS5jYWxsKCk7XG4gICAgY29uc3QgbWluaW11bUNvbnRyaWJ1dGlvbiA9IGF3YWl0IGN1cnJlbnRDYW1wYWdpbi5tZXRob2RzXG4gICAgICAubWluaW11bUNvbnRyaWJ1dGlvbigpXG4gICAgICAuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKG1hbmFnZXIsIFwiLS0tXCIsIG1pbmltdW1Db250cmlidXRpb24pO1xuICB9O1xuICByZXR1cm4gPGRpdj5EZXRhaWw6IHthZGRyZXNzfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJjYW1wYWlnbiIsInVzZUVmZmVjdCIsIkRldGFpbCIsInJvdXRlciIsImFkZHJlc3MiLCJxdWVyeSIsImN1cnJlbnRDYW1wYWdpbiIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwibWV0aG9kcyIsImNhbGwiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaign/[address].js\n"));

/***/ })

});