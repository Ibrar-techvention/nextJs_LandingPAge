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

/***/ "./src/LandingPage/Questions/style.tsx":
/*!*********************************************!*\
  !*** ./src/LandingPage/Questions/style.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Haeding\": function() { return /* binding */ Haeding; },\n/* harmony export */   \"MainBox\": function() { return /* binding */ MainBox; },\n/* harmony export */   \"OneSide\": function() { return /* binding */ OneSide; },\n/* harmony export */   \"Papers\": function() { return /* binding */ Papers; },\n/* harmony export */   \"TextTypo\": function() { return /* binding */ TextTypo; },\n/* harmony export */   \"TypographyText\": function() { return /* binding */ TypographyText; },\n/* harmony export */   \"useStyles\": function() { return /* binding */ useStyles; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/styles */ \"./node_modules/@mui/styles/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/esm/styles/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\n\n\n\nvar useStyles = (0,_mui_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)({\n    itemss: {\n        display: \"flex\",\n        flexDirection: \"column\"\n    },\n    hidden: {\n        display: \"none\"\n    },\n    PlusShow: {\n        color: \"orange\",\n        fontSize: \"2rem\",\n        marginLeft: \"1rem\"\n    },\n    minusShow: {\n        color: \"green\",\n        fontSize: \"2rem\",\n        marginLeft: \"1rem\"\n    },\n    showText: {\n        display: \"block\",\n        fontSize: \"0.8rem\",\n        paddingLeft: \"3rem\"\n    }\n});\nvar Haeding = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography)(function(param) {\n    var theme = param.theme;\n    return (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        textAlign: \"center\",\n        fontWeight: \"bold\",\n        fontSize: \"3rem\",\n        paddingBottom: \"4rem\"\n    }, theme.breakpoints.down(\"sm\"), {\n        fontSize: \"1.8rem\"\n    });\n});\nvar MainBox = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)({\n    padding: \"4rem 0rem 3rem 0rem\",\n    background: \"#F8F8FC\",\n    marginBottom: \"-5rem\"\n});\nvar OneSide = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box)({\n    display: \"flex\",\n    alignItems: \"center\"\n});\nvar TypographyText = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography)({\n    padding: \"0.6rem 0rem 3rem 5rem\",\n    alignItems: \"center\",\n    color: \"#757897\",\n    opacity: 0.7\n});\nvar TextTypo = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography)({\n    fontWeight: \"bold\",\n    padding: \"2rem\",\n    fontSize: \"0.8rem\",\n    marginLeft: \"0.5rem\",\n    display: \"flex\"\n});\nvar Papers = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper)({\n    marginBottom: \"0.8rem\",\n    boxShadow: \"0px 24.5562px 32.7416px -14.7337px rgba(149, 149, 149, 0.25)\",\n    borderRadius: \"0.25rem\"\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTGFuZGluZ1BhZ2UvUXVlc3Rpb25zL3N0eWxlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ0s7QUFDUztBQUVoRCxJQUFNSyxTQUFTLEdBQUdMLHVEQUFVLENBQUM7SUFDbENNLE1BQU0sRUFBRTtRQUNOQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxhQUFhLEVBQUUsUUFBUTtLQUN4QjtJQUNEQyxNQUFNLEVBQUU7UUFDTkYsT0FBTyxFQUFFLE1BQU07S0FDaEI7SUFDREcsUUFBUSxFQUFFO1FBQ1JDLEtBQUssRUFBRSxRQUFRO1FBQ2ZDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCQyxVQUFVLEVBQUUsTUFBTTtLQUNuQjtJQUNEQyxTQUFTLEVBQUU7UUFDVEgsS0FBSyxFQUFFLE9BQU87UUFDZEMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFVBQVUsRUFBRSxNQUFNO0tBQ25CO0lBRURFLFFBQVEsRUFBRTtRQUNSUixPQUFPLEVBQUUsT0FBTztRQUNoQkssUUFBUSxFQUFFLFFBQVE7UUFDbEJJLFdBQVcsRUFBRSxNQUFNO0tBQ3BCO0NBQ0YsQ0FBQyxDQUFDO0FBRUksSUFBTUMsT0FBTyxHQUFHaEIsNERBQU0sQ0FBQ0UscURBQVUsQ0FBQyxDQUFDO1FBQUdlLEtBQUssU0FBTEEsS0FBSztXQUtoRDtRQUpBQyxTQUFTLEVBQUUsUUFBUTtRQUNuQkMsVUFBVSxFQUFFLE1BQU07UUFDbEJSLFFBQVEsRUFBRSxNQUFNO1FBQ2hCUyxhQUFhLEVBQUUsTUFBTTtPQUNwQkgsS0FBSyxDQUFDSSxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRztRQUM5QlgsUUFBUSxFQUFFLFFBQVE7S0FDbkI7Q0FDRCxDQUFDLENBQUM7QUFDRyxJQUFNWSxPQUFPLEdBQUd2Qiw0REFBTSxDQUFDQyw4Q0FBRyxDQUFDLENBQUM7SUFDakN1QixPQUFPLEVBQUUscUJBQXFCO0lBQzlCQyxVQUFVLEVBQUUsU0FBUztJQUNyQkMsWUFBWSxFQUFFLE9BQU87Q0FDdEIsQ0FBQyxDQUFDO0FBQ0ksSUFBTUMsT0FBTyxHQUFHM0IsNERBQU0sQ0FBQ0MsOENBQUcsQ0FBQyxDQUFDO0lBQ2pDSyxPQUFPLEVBQUUsTUFBTTtJQUNmc0IsVUFBVSxFQUFFLFFBQVE7Q0FDckIsQ0FBQyxDQUFDO0FBQ0ksSUFBTUMsY0FBYyxHQUFHN0IsNERBQU0sQ0FBQ0UscURBQVUsQ0FBQyxDQUFDO0lBQy9Dc0IsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0ksVUFBVSxFQUFFLFFBQVE7SUFDcEJsQixLQUFLLEVBQUUsU0FBUztJQUNoQm9CLE9BQU8sRUFBRSxHQUFHO0NBQ2IsQ0FBQyxDQUFDO0FBQ0ksSUFBTUMsUUFBUSxHQUFHL0IsNERBQU0sQ0FBQ0UscURBQVUsQ0FBQyxDQUFDO0lBQ3pDaUIsVUFBVSxFQUFFLE1BQU07SUFDbEJLLE9BQU8sRUFBRSxNQUFNO0lBQ2ZiLFFBQVEsRUFBRSxRQUFRO0lBQ2xCQyxVQUFVLEVBQUUsUUFBUTtJQUNwQk4sT0FBTyxFQUFFLE1BQU07Q0FDaEIsQ0FBQyxDQUFDO0FBRUksSUFBTTBCLE1BQU0sR0FBR2hDLDREQUFNLENBQUNHLGdEQUFLLENBQUMsQ0FBQztJQUNsQ3VCLFlBQVksRUFBRSxRQUFRO0lBQ3RCTyxTQUFTLEVBQUUsOERBQThEO0lBQ3pFQyxZQUFZLEVBQUUsU0FBUztDQUN4QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xhbmRpbmdQYWdlL1F1ZXN0aW9ucy9zdHlsZS50c3g/NjI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtdWkvc3R5bGVzXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBCb3gsIFR5cG9ncmFwaHksIFBhcGVyIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICBpdGVtc3M6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICB9LFxyXG4gIGhpZGRlbjoge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfSxcclxuICBQbHVzU2hvdzoge1xyXG4gICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICBmb250U2l6ZTogXCIycmVtXCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjFyZW1cIixcclxuICB9LFxyXG4gIG1pbnVzU2hvdzoge1xyXG4gICAgY29sb3I6IFwiZ3JlZW5cIixcclxuICAgIGZvbnRTaXplOiBcIjJyZW1cIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMXJlbVwiLFxyXG4gIH0sXHJcblxyXG4gIHNob3dUZXh0OiB7XHJcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXHJcbiAgICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICAgIHBhZGRpbmdMZWZ0OiBcIjNyZW1cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBIYWVkaW5nID0gc3R5bGVkKFR5cG9ncmFwaHkpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gIGZvbnRTaXplOiBcIjNyZW1cIixcclxuICBwYWRkaW5nQm90dG9tOiBcIjRyZW1cIixcclxuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgZm9udFNpemU6IFwiMS44cmVtXCIsXHJcbiAgfSxcclxufSkpO1xyXG5leHBvcnQgY29uc3QgTWFpbkJveCA9IHN0eWxlZChCb3gpKHtcclxuICBwYWRkaW5nOiBcIjRyZW0gMHJlbSAzcmVtIDByZW1cIixcclxuICBiYWNrZ3JvdW5kOiBcIiNGOEY4RkNcIixcclxuICBtYXJnaW5Cb3R0b206IFwiLTVyZW1cIixcclxufSk7XHJcbmV4cG9ydCBjb25zdCBPbmVTaWRlID0gc3R5bGVkKEJveCkoe1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbn0pO1xyXG5leHBvcnQgY29uc3QgVHlwb2dyYXBoeVRleHQgPSBzdHlsZWQoVHlwb2dyYXBoeSkoe1xyXG4gIHBhZGRpbmc6IFwiMC42cmVtIDByZW0gM3JlbSA1cmVtXCIsXHJcbiAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICBjb2xvcjogXCIjNzU3ODk3XCIsXHJcbiAgb3BhY2l0eTogMC43LFxyXG59KTtcclxuZXhwb3J0IGNvbnN0IFRleHRUeXBvID0gc3R5bGVkKFR5cG9ncmFwaHkpKHtcclxuICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICBwYWRkaW5nOiBcIjJyZW1cIixcclxuICBmb250U2l6ZTogXCIwLjhyZW1cIixcclxuICBtYXJnaW5MZWZ0OiBcIjAuNXJlbVwiLFxyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQYXBlcnMgPSBzdHlsZWQoUGFwZXIpKHtcclxuICBtYXJnaW5Cb3R0b206IFwiMC44cmVtXCIsXHJcbiAgYm94U2hhZG93OiBcIjBweCAyNC41NTYycHggMzIuNzQxNnB4IC0xNC43MzM3cHggcmdiYSgxNDksIDE0OSwgMTQ5LCAwLjI1KVwiLFxyXG4gIGJvcmRlclJhZGl1czogXCIwLjI1cmVtXCIsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsibWFrZVN0eWxlcyIsInN0eWxlZCIsIkJveCIsIlR5cG9ncmFwaHkiLCJQYXBlciIsInVzZVN0eWxlcyIsIml0ZW1zcyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiaGlkZGVuIiwiUGx1c1Nob3ciLCJjb2xvciIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsIm1pbnVzU2hvdyIsInNob3dUZXh0IiwicGFkZGluZ0xlZnQiLCJIYWVkaW5nIiwidGhlbWUiLCJ0ZXh0QWxpZ24iLCJmb250V2VpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImJyZWFrcG9pbnRzIiwiZG93biIsIk1haW5Cb3giLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsIm1hcmdpbkJvdHRvbSIsIk9uZVNpZGUiLCJhbGlnbkl0ZW1zIiwiVHlwb2dyYXBoeVRleHQiLCJvcGFjaXR5IiwiVGV4dFR5cG8iLCJQYXBlcnMiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/LandingPage/Questions/style.tsx\n"));

/***/ })

});