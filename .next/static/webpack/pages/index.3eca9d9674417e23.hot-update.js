"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.js */ \"./pages/layout.js\");\nvar _this = undefined;\n\n\n\n\nvar __N_SSP = true;\nfunction Index(param) {\n    var contracts = param.contracts;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/newcampaign\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2\",\n                    children: \"Create Campaign\"\n                }, void 0, false, {\n                    fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                role: \"list\",\n                class: \"divide-y divide-gray-100\",\n                children: contracts.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListItem, {\n                        contract: item\n                    }, void 0, false, {\n                        fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Index;\nvar ListItem = function(props) {\n    var contract = props.contract;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        class: \"flex justify-between gap-x-6 py-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"flex gap-x-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"min-w-0 flex-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"text-sm font-semibold leading-6 text-gray-900\",\n                            children: contract\n                        }, void 0, false, {\n                            fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/campaign/\".concat(contract),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                class: \"mt-1 truncate text-xs leading-5 text-gray-500\",\n                                children: \"View Detial\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"hidden sm:flex sm:flex-col sm:items-end\"\n            }, void 0, false, {\n                fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dh/Documents/Demos/kickstarter-react-web3/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = ListItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"Index\");\n$RefreshReg$(_c1, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFRztBQUNROztBQUV0QixTQUFTRyxLQUFLLENBQUMsS0FBYSxFQUFFO1FBQWYsU0FBVyxHQUFYLEtBQWEsQ0FBWEMsU0FBUzs7SUFDdkMscUJBQ0UsOERBQUNGLGtEQUFVOzswQkFDVCw4REFBQ0Qsa0RBQUk7Z0JBQUNJLElBQUksRUFBRyxjQUFZOzBCQUN2Qiw0RUFBQ0MsUUFBTTtvQkFDTEMsSUFBSSxFQUFDLFFBQVE7b0JBQ2JDLFNBQVMsRUFBQywyT0FBMk87OEJBQ3RQLGlCQUVEOzs7Ozt3QkFBUzs7Ozs7b0JBQ0o7MEJBQ1AsOERBQUNDLElBQUU7Z0JBQUNDLElBQUksRUFBQyxNQUFNO2dCQUFDQyxLQUFLLEVBQUMsMEJBQTBCOzBCQUM3Q1AsU0FBUyxDQUFDUSxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDbEIsOERBQUNDLFFBQVE7d0JBQUNDLFFBQVEsRUFBRUYsSUFBSTs7Ozs7NkJBQWE7aUJBQ3RDLENBQUM7Ozs7O29CQUNDOzs7Ozs7WUFDTSxDQUNiO0FBQ0osQ0FBQztBQWxCdUJWLEtBQUFBLEtBQUs7QUFvQjdCLElBQU1XLFFBQVEsR0FBRyxTQUFDRSxLQUFLLEVBQUs7SUFDMUIsSUFBTSxRQUFVLEdBQUtBLEtBQUssQ0FBbEJELFFBQVE7SUFDaEIscUJBQ0UsOERBQUNFLElBQUU7UUFBQ04sS0FBSyxFQUFDLG1DQUFtQzs7MEJBQzNDLDhEQUFDTyxLQUFHO2dCQUFDUCxLQUFLLEVBQUMsY0FBYzswQkFDdkIsNEVBQUNPLEtBQUc7b0JBQUNQLEtBQUssRUFBQyxtQkFBbUI7O3NDQUM1Qiw4REFBQ1EsR0FBQzs0QkFBQ1IsS0FBSyxFQUFDLCtDQUErQztzQ0FDckRJLFFBQVE7Ozs7O2lDQUNQO3NDQUNKLDhEQUFDZCxrREFBSTs0QkFBQ0ksSUFBSSxFQUFFLFlBQVcsQ0FBVyxPQUFUVSxRQUFRLENBQUU7c0NBQ2pDLDRFQUFDSyxHQUFDO2dDQUFDVCxLQUFLLEVBQUMsK0NBQStDOzBDQUFDLGFBRXpEOzs7OztxQ0FBSTs7Ozs7aUNBQ0M7Ozs7Ozt5QkFDSDs7Ozs7cUJBQ0Y7MEJBQ04sOERBQUNPLEtBQUc7Z0JBQUNQLEtBQUssRUFBQyx5Q0FBeUM7Ozs7O3FCQUFPOzs7Ozs7YUFDeEQsQ0FDTDtBQUNKLENBQUM7QUFuQktHLE1BQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJvb3RMYXlvdXQgZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KHsgY29udHJhY3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Um9vdExheW91dD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvbmV3Y2FtcGFpZ25gfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEwIGZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgYmctaW5kaWdvLTYwMCBweC04IHB5LTMgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6YmctaW5kaWdvLTcwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTUwMCBmb2N1czpyaW5nLW9mZnNldC0yXCJcbiAgICAgICAgPlxuICAgICAgICAgIENyZWF0ZSBDYW1wYWlnblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDx1bCByb2xlPVwibGlzdFwiIGNsYXNzPVwiZGl2aWRlLXkgZGl2aWRlLWdyYXktMTAwXCI+XG4gICAgICAgIHtjb250cmFjdHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPExpc3RJdGVtIGNvbnRyYWN0PXtpdGVtfT48L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9Sb290TGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBMaXN0SXRlbSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNvbnRyYWN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBnYXAteC02IHB5LTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGdhcC14LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1pbi13LTAgZmxleC1hdXRvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIHtjb250cmFjdH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbi8ke2NvbnRyYWN0fWB9PlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJtdC0xIHRydW5jYXRlIHRleHQteHMgbGVhZGluZy01IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgVmlldyBEZXRpYWxcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGlkZGVuIHNtOmZsZXggc206ZmxleC1jb2wgc206aXRlbXMtZW5kXCI+PC9kaXY+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XG4gIGNvbnN0IGNvbnRyYWN0cyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgY29udHJhY3RzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiUm9vdExheW91dCIsIkluZGV4IiwiY29udHJhY3RzIiwiaHJlZiIsImJ1dHRvbiIsInR5cGUiLCJjbGFzc05hbWUiLCJ1bCIsInJvbGUiLCJjbGFzcyIsIm1hcCIsIml0ZW0iLCJMaXN0SXRlbSIsImNvbnRyYWN0IiwicHJvcHMiLCJsaSIsImRpdiIsInAiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});