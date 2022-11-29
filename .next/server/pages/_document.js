"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
// EXTERNAL MODULE: external "@mui/styles"
var styles_ = __webpack_require__(484);
// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/createEmotionCache.ts
var createEmotionCache = __webpack_require__(221);
;// CONCATENATED MODULE: ./pages/_document.tsx







class MyDocument extends next_document["default"] {
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            lang: "en",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "theme-color",
                            content: theme/* default.palette.primary.main */.Z.palette.primary.main
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: "/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
                        }),
                        this.props.emotionStyleTags
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                    ]
                })
            ]
        });
    }
}
// You can find a benchmark of the available CSS minifiers under
// https://github.com/GoalSmashers/css-minification-benchmark
// We have found that clean-css is faster than cssnano but the output is larger.
// Waiting for https://github.com/cssinjs/jss/issues/279
// 4% slower but 12% smaller output than doing it in a single step.
//
// It's using .browserslistrc
let prefixer;
let cleanCSS;
if (true) {
    /* eslint-disable global-require */ const postcss = __webpack_require__(261);
    const autoprefixer = __webpack_require__(796);
    const CleanCSS = __webpack_require__(275);
    /* eslint-enable global-require */ prefixer = postcss([
        autoprefixer
    ]);
    cleanCSS = new CleanCSS();
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    const originalRenderPage = ctx.renderPage;
    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = (0,createEmotionCache/* default */.Z)();
    const { extractCriticalToChunks  } = create_instance_default()(cache);
    const jssSheets = new styles_.ServerStyleSheets();
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return jssSheets.collect(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                        emotionCache: cache,
                        ...props
                    }));
                }
        });
    const initialProps = await next_document["default"].getInitialProps(ctx);
    // Generate style tags for the styles coming from Emotion
    // This is important. It prevents Emotion from rendering invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    // Generate the css string for the styles coming from jss
    let css = jssSheets.toString();
    // It might be undefined, e.g. after an error.
    if (css && "production" === "production") {
        const result1 = await prefixer.process(css, {
            from: undefined
        });
        css = result1.css;
        css = cleanCSS.minify(css).styles;
    }
    return {
        ...initialProps,
        styles: [
            ...emotionStyleTags,
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                id: "jss-server-side",
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML: {
                    __html: css
                }
            }, "jss-server-side"),
            ...external_react_.Children.toArray(initialProps.styles), 
        ]
    };
};


/***/ }),

/***/ 913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("autoprefixer");

/***/ }),

/***/ 275:
/***/ ((module) => {

module.exports = require("clean-css");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = require("postcss");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [859,886], () => (__webpack_exec__(745)));
module.exports = __webpack_exports__;

})();