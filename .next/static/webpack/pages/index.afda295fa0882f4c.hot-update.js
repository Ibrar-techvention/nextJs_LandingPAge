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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Heading\": function() { return /* binding */ Heading; },\n/* harmony export */   \"ImageBox\": function() { return /* binding */ ImageBox; },\n/* harmony export */   \"MainBox\": function() { return /* binding */ MainBox; },\n/* harmony export */   \"MiniHeading\": function() { return /* binding */ MiniHeading; },\n/* harmony export */   \"Paperr\": function() { return /* binding */ Paperr; },\n/* harmony export */   \"Paragraph\": function() { return /* binding */ Paragraph; },\n/* harmony export */   \"ReadButton\": function() { return /* binding */ ReadButton; },\n/* harmony export */   \"TypoGraphyy\": function() { return /* binding */ TypoGraphyy; },\n/* harmony export */   \"settings\": function() { return /* binding */ settings; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n\n\n\n\nvar Container = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    width: \"100%\",\n    margin: \"auto\",\n    padding: \"3rem 0rem 3rem 0rem\"\n});\nvar MainBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)({\n    display: \"flex\",\n    width: \"100%\",\n    margin: \"auto\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    flexDirection: \"column\",\n    paddingBottom: \"0.5rem\"\n});\nvar Heading = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontWeight: 600,\n        fontSize: \"2.625rem\",\n        textAlign: \"center\",\n        letterSpacing: \"-0.03em\",\n        color: \"#000000\"\n    }, theme.breakpoints.down(\"md\"), {\n        fontSize: \"1.7rem\"\n    });\n});\nvar MiniHeading = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontWeight: 550,\n        fontSize: \"1.125rem\",\n        fontFamily: \"Inter\",\n        fontStyle: \"normal\",\n        textAlign: \"center\",\n        color: \"#000000\"\n    }, theme.breakpoints.down(\"md\"), {\n        display: \"none\"\n    });\n});\nvar Paragraph = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        fontSize: \"1.1rem\",\n        width: \"38.938rem\",\n        color: \"#5B5B5B\"\n    }, theme.breakpoints.down(\"md\"), {\n        fontSize: \"0.8rem\",\n        width: \"22rem\",\n        paddingTop: \"2rem\"\n    });\n});\nvar Paperr = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Paper)({\n    padding: \"1rem\",\n    border: \"2px solid #7F01FC\",\n    boxShadow: \"0px 4px 4px rgba(0, 0, 0, 0.28)\",\n    borderRadius: \"0.25\"\n});\nvar ReadButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button)({\n    padding: \"0.2rem\"\n});\nvar TypoGraphyy = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography)({\n    fontSize: \"1.7rem\",\n    fontWeight: \"bold\",\n    textAlign: \"center\"\n});\nvar ImageBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)(\"img\")({\n    objectFit: \"cover\",\n    width: \"100%\"\n});\nvar prev = {\n    display: \"block\",\n    background: \"blue\",\n    color: \"Blue\",\n    borderRadius: \"10px\",\n    marign: \"5rem\"\n};\nvar next = {\n    display: \"block\",\n    background: \"blue\",\n    color: \"Blue\",\n    borderRadius: \"10px\"\n};\nfunction SampleNextArrow(props) {\n    var className = props.className, onClick = props.onClick;\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        className: className,\n        style: next,\n        onClick: onClick\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\FFT\\\\Desktop\\\\techvent\\\\src\\\\LandingPage\\\\services\\\\style.tsx\",\n        lineNumber: 83,\n        columnNumber: 10\n    }, this);\n}\n_c = SampleNextArrow;\nfunction SamplePrevArrow(props) {\n    var className = props.className, onClick = props.onClick;\n    return /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        className: className,\n        style: prev,\n        onClick: onClick\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\FFT\\\\Desktop\\\\techvent\\\\src\\\\LandingPage\\\\services\\\\style.tsx\",\n        lineNumber: 88,\n        columnNumber: 10\n    }, this);\n}\n_c1 = SamplePrevArrow;\nvar settings = {\n    infinite: true,\n    speed: 500,\n    slidesToShow: 3,\n    autoplay: true,\n    slidesToScroll: 1,\n    nextArrow: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SampleNextArrow, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\FFT\\\\Desktop\\\\techvent\\\\src\\\\LandingPage\\\\services\\\\style.tsx\",\n        lineNumber: 96,\n        columnNumber: 14\n    }, undefined),\n    prevArrow: /*#__PURE__*/ (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(SamplePrevArrow, {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\FFT\\\\Desktop\\\\techvent\\\\src\\\\LandingPage\\\\services\\\\style.tsx\",\n        lineNumber: 97,\n        columnNumber: 14\n    }, undefined),\n    responsive: [\n        {\n            breakpoint: 1024,\n            settings: {\n                slidesToShow: 2,\n                autoplay: true,\n                slidesToScroll: 1,\n                infinite: true\n            }\n        },\n        {\n            breakpoint: 600,\n            settings: {\n                slidesToShow: 1,\n                autoplay: true,\n                slidesToScroll: 1\n            }\n        },\n        {\n            breakpoint: 480,\n            settings: {\n                slidesToShow: 1,\n                autoplay: true,\n                slidesToScroll: 1\n            }\n        }, \n    ]\n};\nvar _c, _c1;\n$RefreshReg$(_c, \"SampleNextArrow\");\n$RefreshReg$(_c1, \"SamplePrevArrow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxnQkFBRSx1RUFBQ1osZUFBZTs7OztpQkFBRztJQUM5QmEsU0FBUyxnQkFBRSx1RUFBQ1IsZUFBZTs7OztpQkFBRztJQUM5QlMsVUFBVSxFQUFFO1FBQ1Y7WUFDRUMsVUFBVSxFQUFFLElBQUk7WUFDaEJULFFBQVEsRUFBRTtnQkFDUkcsWUFBWSxFQUFFLENBQUM7Z0JBQ2ZDLFFBQVEsRUFBRSxJQUFJO2dCQUNkQyxjQUFjLEVBQUUsQ0FBQztnQkFDakJKLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRjtRQUNEO1lBQ0VRLFVBQVUsRUFBRSxHQUFHO1lBQ2ZULFFBQVEsRUFBRTtnQkFDUkcsWUFBWSxFQUFFLENBQUM7Z0JBQ2ZDLFFBQVEsRUFBRSxJQUFJO2dCQUNkQyxjQUFjLEVBQUUsQ0FBQzthQUNsQjtTQUNGO1FBQ0Q7WUFDRUksVUFBVSxFQUFFLEdBQUc7WUFDZlQsUUFBUSxFQUFFO2dCQUNSRyxZQUFZLEVBQUUsQ0FBQztnQkFDZkMsUUFBUSxFQUFFLElBQUk7Z0JBQ2RDLGNBQWMsRUFBRSxDQUFDO2FBQ2xCO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xhbmRpbmdQYWdlL3NlcnZpY2VzL3N0eWxlLnRzeD81NGE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgQnV0dG9uLCBQYXBlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZChCb3gpKHtcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgbWFyZ2luOiBcImF1dG9cIixcclxuICBwYWRkaW5nOiBcIjNyZW0gMHJlbSAzcmVtIDByZW1cIixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBNYWluQm94ID0gc3R5bGVkKEJveCkoe1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIHdpZHRoOiBcIjEwMCVcIixcclxuICBtYXJnaW46IFwiYXV0b1wiLFxyXG4gIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICBwYWRkaW5nQm90dG9tOiBcIjAuNXJlbVwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEhlYWRpbmcgPSBzdHlsZWQoVHlwb2dyYXBoeSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgZm9udFNpemU6IFwiMi42MjVyZW1cIixcclxuICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgbGV0dGVyU3BhY2luZzogXCItMC4wM2VtXCIsXHJcbiAgY29sb3I6IFwiIzAwMDAwMFwiLFxyXG4gIFt0aGVtZS5icmVha3BvaW50cy5kb3duKFwibWRcIildOiB7XHJcbiAgICBmb250U2l6ZTogXCIxLjdyZW1cIixcclxuICB9LFxyXG59KSk7XHJcbmV4cG9ydCBjb25zdCBNaW5pSGVhZGluZyA9IHN0eWxlZChUeXBvZ3JhcGh5KSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIGZvbnRXZWlnaHQ6IDU1MCxcclxuICBmb250U2l6ZTogXCIxLjEyNXJlbVwiLFxyXG4gIGZvbnRGYW1pbHk6IFwiSW50ZXJcIixcclxuICBmb250U3R5bGU6IFwibm9ybWFsXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfSxcclxufSkpO1xyXG5leHBvcnQgY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFR5cG9ncmFwaHkpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgZm9udFNpemU6IFwiMS4xcmVtXCIsXHJcbiAgd2lkdGg6IFwiMzguOTM4cmVtXCIsXHJcbiAgY29sb3I6IFwiIzVCNUI1QlwiLFxyXG5cclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcIm1kXCIpXToge1xyXG4gICAgZm9udFNpemU6IFwiMC44cmVtXCIsXHJcbiAgICB3aWR0aDogXCIyMnJlbVwiLFxyXG4gICAgcGFkZGluZ1RvcDogXCIycmVtXCIsXHJcbiAgfSxcclxufSkpO1xyXG5leHBvcnQgY29uc3QgUGFwZXJyID0gc3R5bGVkKFBhcGVyKSh7XHJcbiAgcGFkZGluZzogXCIxcmVtXCIsXHJcbiAgYm9yZGVyOiBcIjJweCBzb2xpZCAjN0YwMUZDXCIsXHJcbiAgYm94U2hhZG93OiBcIjBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yOClcIixcclxuICBib3JkZXJSYWRpdXM6IFwiMC4yNVwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IFJlYWRCdXR0b24gPSBzdHlsZWQoQnV0dG9uKSh7XHJcbiAgcGFkZGluZzogXCIwLjJyZW1cIixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBUeXBvR3JhcGh5eSA9IHN0eWxlZChUeXBvZ3JhcGh5KSh7XHJcbiAgZm9udFNpemU6IFwiMS43cmVtXCIsXHJcbiAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IEltYWdlQm94ID0gc3R5bGVkKFwiaW1nXCIpKHtcclxuICBvYmplY3RGaXQ6IFwiY292ZXJcIixcclxuICB3aWR0aDogXCIxMDAlXCIsXHJcbn0pO1xyXG5jb25zdCBwcmV2ID0ge1xyXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICBiYWNrZ3JvdW5kOiBcImJsdWVcIixcclxuICBjb2xvcjogXCJCbHVlXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxuICBtYXJpZ246IFwiNXJlbVwiLFxyXG59O1xyXG5jb25zdCBuZXh0ID0ge1xyXG4gIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICBiYWNrZ3JvdW5kOiBcImJsdWVcIixcclxuICBjb2xvcjogXCJCbHVlXCIsXHJcbiAgYm9yZGVyUmFkaXVzOiBcIjEwcHhcIixcclxufTtcclxuZnVuY3Rpb24gU2FtcGxlTmV4dEFycm93KHByb3BzOiBhbnkpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxCb3ggY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtuZXh0fSBvbkNsaWNrPXtvbkNsaWNrfSAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gU2FtcGxlUHJldkFycm93KHByb3BzOiBhbnkpIHtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgb25DbGljayB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIDxCb3ggY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtwcmV2fSBvbkNsaWNrPXtvbkNsaWNrfSAvPjtcclxufVxyXG5leHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgbmV4dEFycm93OiA8U2FtcGxlTmV4dEFycm93IC8+LFxyXG4gIHByZXZBcnJvdzogPFNhbXBsZVByZXZBcnJvdyAvPixcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUeXBvZ3JhcGh5IiwiQnV0dG9uIiwiUGFwZXIiLCJzdHlsZWQiLCJDb250YWluZXIiLCJ3aWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJNYWluQm94IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nQm90dG9tIiwiSGVhZGluZyIsInRoZW1lIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsImNvbG9yIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiTWluaUhlYWRpbmciLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiUGFyYWdyYXBoIiwicGFkZGluZ1RvcCIsIlBhcGVyciIsImJvcmRlciIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsIlJlYWRCdXR0b24iLCJUeXBvR3JhcGh5eSIsIkltYWdlQm94Iiwib2JqZWN0Rml0IiwicHJldiIsImJhY2tncm91bmQiLCJtYXJpZ24iLCJuZXh0IiwiU2FtcGxlTmV4dEFycm93IiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3R5bGUiLCJTYW1wbGVQcmV2QXJyb3ciLCJzZXR0aW5ncyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJhdXRvcGxheSIsInNsaWRlc1RvU2Nyb2xsIiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/LandingPage/services/style.tsx\n"));

/***/ })

});