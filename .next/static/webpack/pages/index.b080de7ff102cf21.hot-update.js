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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Heading\": function() { return /* binding */ Heading; },\n/* harmony export */   \"ImageBox\": function() { return /* binding */ ImageBox; },\n/* harmony export */   \"MainBox\": function() { return /* binding */ MainBox; },\n/* harmony export */   \"MiniHeading\": function() { return /* binding */ MiniHeading; },\n/* harmony export */   \"Next\": function() { return /* binding */ Next; },\n/* harmony export */   \"Paperr\": function() { return /* binding */ Paperr; },\n/* harmony export */   \"Paragraph\": function() { return /* binding */ Paragraph; },\n/* harmony export */   \"Previous\": function() { return /* binding */ Previous; },\n/* harmony export */   \"ReadButton\": function() { return /* binding */ ReadButton; },\n/* harmony export */   \"TypoGraphyy\": function() { return /* binding */ TypoGraphyy; },\n/* harmony export */   \"settings\": function() { return /* binding */ settings; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n\n\n\nvar Container = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    width: \"100%\",\n    margin: \"auto\",\n    padding: \"3rem 0rem 3rem 0rem\"\n});\nvar MainBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    display: \"flex\",\n    width: \"80%\",\n    margin: \"auto\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    flexDirection: \"column\",\n    paddingBottom: \"0.5rem\"\n});\nvar Heading = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontWeight: 600,\n        fontSize: \"2.625rem\",\n        textAlign: \"center\",\n        letterSpacing: \"-0.03em\",\n        color: \"#000000\"\n    }, theme.breakpoints.down(\"md\"), {\n        fontSize: \"1.7rem\"\n    });\n});\nvar MiniHeading = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontWeight: 550,\n        fontSize: \"1.125rem\",\n        fontFamily: \"Inter\",\n        fontStyle: \"normal\",\n        textAlign: \"center\",\n        color: \"#000000\"\n    }, theme.breakpoints.down(\"md\"), {\n        display: \"none\"\n    });\n});\nvar Paragraph = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontSize: \"1.1rem\",\n        width: \"38.938rem\",\n        display: \"flex\",\n        color: \"#5B5B5B\"\n    }, theme.breakpoints.down(\"md\"), {\n        fontSize: \"0.8rem\",\n        width: \"22rem\",\n        paddingTop: \"2rem\"\n    });\n});\nvar Paperr = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper)({\n    padding: \"1rem\",\n    margin: \"1rem\",\n    boxShadow: \"0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.28)\",\n    borderRadius: \"0.25\",\n    \"&:hover\": {\n        border: \"0.125rem solid #7F01FC\"\n    }\n});\nvar ReadButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)({\n    padding: \"0.2rem\"\n});\nvar TypoGraphyy = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({\n    fontSize: \"1.7rem\",\n    fontWeight: \"bold\",\n    textAlign: \"center\"\n});\nvar ImageBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(\"img\")({\n    objectFit: \"cover\",\n    width: \"100%\"\n});\nvar Previous = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    position: \"absolute\",\n    top: \"40%\",\n    left: \"-3rem\",\n    zIndex: 10,\n    cursor: \"pointer\"\n});\nvar Next = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    position: \"absolute\",\n    top: \"40%\",\n    right: \"-3rem\",\n    zIndex: 10,\n    cursor: \"pointer\"\n});\nvar settings = {\n    infinite: true,\n    speed: 500,\n    slidesToShow: 3,\n    autoplay: true,\n    slidesToScroll: 1,\n    arrows: false,\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 2,\n                autoplay: true,\n                slidesToScroll: 1,\n                infinite: true\n            }\n        },\n        {\n            breakpoint: 600,\n            settings: {\n                slidesToShow: 1,\n                autoplay: true,\n                slidesToScroll: 1\n            }\n        },\n        {\n            breakpoint: 480,\n            settings: {\n                slidesToShow: 1,\n                autoplay: true,\n                slidesToScroll: 1\n            }\n        }, \n    ]\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7Z0JBQ1JHLFlBQVksRUFBRSxDQUFDO2dCQUNmQyxRQUFRLEVBQUUsSUFBSTtnQkFDZEMsY0FBYyxFQUFFLENBQUM7YUFDbEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvTGFuZGluZ1BhZ2Uvc2VydmljZXMvc3R5bGUudHN4PzU0YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUeXBvZ3JhcGh5LCBCdXR0b24sIFBhcGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkKEJveCkoe1xyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gIHBhZGRpbmc6IFwiM3JlbSAwcmVtIDNyZW0gMHJlbVwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE1haW5Cb3ggPSBzdHlsZWQoQm94KSh7XHJcbiAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgd2lkdGg6IFwiODAlXCIsXHJcbiAgbWFyZ2luOiBcImF1dG9cIixcclxuICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgcGFkZGluZ0JvdHRvbTogXCIwLjVyZW1cIixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBIZWFkaW5nID0gc3R5bGVkKFR5cG9ncmFwaHkpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZm9udFdlaWdodDogNjAwLFxyXG4gIGZvbnRTaXplOiBcIjIuNjI1cmVtXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIGxldHRlclNwYWNpbmc6IFwiLTAuMDNlbVwiLFxyXG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgZm9udFNpemU6IFwiMS43cmVtXCIsXHJcbiAgfSxcclxufSkpO1xyXG5leHBvcnQgY29uc3QgTWluaUhlYWRpbmcgPSBzdHlsZWQoVHlwb2dyYXBoeSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBmb250V2VpZ2h0OiA1NTAsXHJcbiAgZm9udFNpemU6IFwiMS4xMjVyZW1cIixcclxuICBmb250RmFtaWx5OiBcIkludGVyXCIsXHJcbiAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxyXG4gIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZChUeXBvZ3JhcGh5KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGZvbnRTaXplOiBcIjEuMXJlbVwiLFxyXG4gIHdpZHRoOiBcIjM4LjkzOHJlbVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGNvbG9yOiBcIiM1QjVCNUJcIixcclxuXHJcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJtZFwiKV06IHtcclxuICAgIGZvbnRTaXplOiBcIjAuOHJlbVwiLFxyXG4gICAgd2lkdGg6IFwiMjJyZW1cIixcclxuICAgIHBhZGRpbmdUb3A6IFwiMnJlbVwiLFxyXG4gIH0sXHJcbn0pKTtcclxuZXhwb3J0IGNvbnN0IFBhcGVyciA9IHN0eWxlZChQYXBlcikoe1xyXG4gIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gIG1hcmdpbjogXCIxcmVtXCIsXHJcbiAgYm94U2hhZG93OiBcIjByZW0gMC4yNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yOClcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMC4yNVwiLFxyXG4gIFwiJjpob3ZlclwiOiB7XHJcbiAgICBib3JkZXI6IFwiMC4xMjVyZW0gc29saWQgIzdGMDFGQ1wiLFxyXG4gIH0sXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgUmVhZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pKHtcclxuICBwYWRkaW5nOiBcIjAuMnJlbVwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IFR5cG9HcmFwaHl5ID0gc3R5bGVkKFR5cG9ncmFwaHkpKHtcclxuICBmb250U2l6ZTogXCIxLjdyZW1cIixcclxuICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgSW1hZ2VCb3ggPSBzdHlsZWQoXCJpbWdcIikoe1xyXG4gIG9iamVjdEZpdDogXCJjb3ZlclwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBQcmV2aW91cyA9IHN0eWxlZChCb3gpKHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHRvcDogXCI0MCVcIixcclxuICBsZWZ0OiBcIi0zcmVtXCIsXHJcbiAgekluZGV4OiAxMCxcclxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IE5leHQgPSBzdHlsZWQoQm94KSh7XHJcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICB0b3A6IFwiNDAlXCIsXHJcbiAgcmlnaHQ6IFwiLTNyZW1cIixcclxuICB6SW5kZXg6IDEwLFxyXG4gIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbn0pO1xyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgYXJyb3dzOiBmYWxzZSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiUGFwZXIiLCJzdHlsZWQiLCJDb250YWluZXIiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJNYWluQm94IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nQm90dG9tIiwiSGVhZGluZyIsInRoZW1lIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiTWluaUhlYWRpbmciLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiUGFyYWdyYXBoIiwicGFkZGluZ1RvcCIsIlBhcGVyciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIlJlYWRCdXR0b24iLCJUeXBvR3JhcGh5eSIsIkltYWdlQm94Iiwib2JqZWN0Rml0IiwiUHJldmlvdXMiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJjdXJzb3IiLCJOZXh0IiwicmlnaHQiLCJzZXR0aW5ncyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhdXRvcGxheSIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/LandingPage/services/style.tsx\n"));

/***/ })

});