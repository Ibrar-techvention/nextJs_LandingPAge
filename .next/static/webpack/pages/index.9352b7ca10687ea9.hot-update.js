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

/***/ "./src/LandingPage/services/style.tsx":
/*!********************************************!*\
  !*** ./src/LandingPage/services/style.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Heading\": function() { return /* binding */ Heading; },\n/* harmony export */   \"MainBox\": function() { return /* binding */ MainBox; },\n/* harmony export */   \"MiniHeading\": function() { return /* binding */ MiniHeading; },\n/* harmony export */   \"Paragraph\": function() { return /* binding */ Paragraph; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n\n\n\nvar Container = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    width: \"100%\",\n    margin: \"auto\",\n    padding: \"3rem 0rem 3rem 0rem\"\n});\nvar MainBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    display: \"flex\",\n    width: \"100%\",\n    margin: \"auto\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    flexDirection: \"column\",\n    paddingBottom: \"0.5rem\"\n});\nvar Heading = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontWeight: 600,\n        fontSize: \"2.625rem\",\n        textAlign: \"center\",\n        letterSpacing: \"-0.03em\",\n        color: \"#000000\"\n    }, theme.breakpoints.down(\"md\"), {\n        fontSize: \"1.7rem\"\n    });\n});\nvar MiniHeading = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontWeight: 550,\n        fontSize: \"1.125rem\",\n        fontFamily: \"Inter\",\n        fontStyle: \"normal\",\n        textAlign: \"center\",\n        color: \"#000000\"\n    }, theme.breakpoints.down(\"md\"), {\n        display: \"none\"\n    });\n});\nvar Paragraph = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontSize: \"1.1rem\",\n        width: \"38.938rem\",\n        color: \"#5B5B5B\"\n    }, theme.breakpoints.down(\"md\"), {\n        fontSize: \"0.8rem\",\n        width: \"22rem\",\n        paddingTop: \"2rem\"\n    });\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTGFuZGluZ1BhZ2Uvc2VydmljZXMvc3R5bGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFDRjtBQUV2QyxJQUFNRyxTQUFTLEdBQUdELDREQUFNLENBQUNGLDhDQUFHLENBQUMsQ0FBQztJQUNuQ0ksS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLE1BQU07SUFDZEMsT0FBTyxFQUFFLHFCQUFxQjtDQUMvQixDQUFDLENBQUM7QUFDSSxJQUFNQyxPQUFPLEdBQUdMLDREQUFNLENBQUNGLDhDQUFHLENBQUMsQ0FBQztJQUNqQ1EsT0FBTyxFQUFFLE1BQU07SUFDZkosS0FBSyxFQUFFLE1BQU07SUFDYkMsTUFBTSxFQUFFLE1BQU07SUFDZEksY0FBYyxFQUFFLFFBQVE7SUFDeEJDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsYUFBYSxFQUFFLFFBQVE7Q0FDeEIsQ0FBQyxDQUFDO0FBQ0ksSUFBTUMsT0FBTyxHQUFHWCw0REFBTSxDQUFDRCxxREFBVSxDQUFDLENBQUM7UUFBR2EsS0FBSyxTQUFMQSxLQUFLO1dBTWhEO1FBTEFDLFVBQVUsRUFBRSxHQUFHO1FBQ2ZDLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxTQUFTLEVBQUUsUUFBUTtRQUNuQkMsYUFBYSxFQUFFLFNBQVM7UUFDeEJDLEtBQUssRUFBRSxTQUFTO09BQ2ZMLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUc7UUFDOUJMLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0NBQ0QsQ0FBQyxDQUFDO0FBQ0csSUFBTU0sV0FBVyxHQUFHcEIsNERBQU0sQ0FBQ0QscURBQVUsQ0FBQyxDQUFDO1FBQUdhLEtBQUssU0FBTEEsS0FBSztXQU9wRDtRQU5BQyxVQUFVLEVBQUUsR0FBRztRQUNmQyxRQUFRLEVBQUUsVUFBVTtRQUNwQk8sVUFBVSxFQUFFLE9BQU87UUFDbkJDLFNBQVMsRUFBRSxRQUFRO1FBQ25CUCxTQUFTLEVBQUUsUUFBUTtRQUNuQkUsS0FBSyxFQUFFLFNBQVM7T0FDZkwsS0FBSyxDQUFDTSxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRztRQUM5QmIsT0FBTyxFQUFFLE1BQU07S0FDaEI7Q0FDRCxDQUFDLENBQUM7QUFDRyxJQUFNaUIsU0FBUyxHQUFHdkIsNERBQU0sQ0FBQ0QscURBQVUsQ0FBQyxDQUFDO1FBQUdhLEtBQUssU0FBTEEsS0FBSztXQUtsRDtRQUpBRSxRQUFRLEVBQUUsUUFBUTtRQUNsQlosS0FBSyxFQUFFLFdBQVc7UUFDbEJlLEtBQUssRUFBRSxTQUFTO09BRWZMLEtBQUssQ0FBQ00sV0FBVyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUc7UUFDOUJMLFFBQVEsRUFBRSxRQUFRO1FBQ2xCWixLQUFLLEVBQUUsT0FBTztRQUNkc0IsVUFBVSxFQUFFLE1BQU07S0FDbkI7Q0FDRCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xhbmRpbmdQYWdlL3NlcnZpY2VzL3N0eWxlLnRzeD81NGE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpKHtcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcImF1dG9cIixcclxuICBwYWRkaW5nOiBcIjNyZW0gMHJlbSAzcmVtIDByZW1cIixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBNYWluQm94ID0gc3R5bGVkKEJveCkoe1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBwYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQoVHlwb2dyYXBoeSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgZm9udFNpemU6IFwiMi42MjVyZW1cIixcclxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgbGV0dGVyU3BhY2luZzogXCItMC4wM2VtXCIsXHJcbiAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjdyZW1cIixcclxuICB9LFxyXG59KSk7XHJcbmV4cG9ydCBjb25zdCBNaW5pSGVhZGluZyA9IHN0eWxlZChUeXBvZ3JhcGh5KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGZvbnRXZWlnaHQ6IDU1MCxcclxuICBmb250U2l6ZTogXCIxLjEyNXJlbVwiLFxyXG4gIGZvbnRGYW1pbHk6IFwiSW50ZXJcIixcclxuICBmb250U3R5bGU6IFwibm9ybWFsXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfSxcclxufSkpO1xyXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFR5cG9ncmFwaHkpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgd2lkdGg6IFwiMzguOTM4cmVtXCIsXHJcbiAgY29sb3I6IFwiIzVCNUI1QlwiLFxyXG5cclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICB3aWR0aDogXCIyMnJlbVwiLFxyXG4gICAgcGFkZGluZ1RvcDogXCIycmVtXCIsXHJcbiAgfSxcclxufSkpO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkNvbnRhaW5lciIsIndpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsIk1haW5Cb3giLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmdCb3R0b20iLCJIZWFkaW5nIiwidGhlbWUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJ0ZXh0QWxpZ24iLCJsZXR0ZXJTcGFjaW5nIiwiY29sb3IiLCJicmVha3BvaW50cyIsImRvd24iLCJNaW5pSGVhZGluZyIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJQYXJhZ3JhcGgiLCJwYWRkaW5nVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/LandingPage/services/style.tsx\n"));

/***/ })

});