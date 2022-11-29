"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: external "react-intl"
const external_react_intl_namespaceObject = require("react-intl");
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "@mui/styles"
var external_mui_styles_ = __webpack_require__(484);
;// CONCATENATED MODULE: ./src/mainlayout/Footer/footerStyle.tsx



const Boxes = (0,styles_.styled)(material_.Box)(({ theme  })=>({
        marginTop: "5rem",
        paddingTop: "4rem",
        background: "#1F1D2B",
        color: "white",
        height: "55vh",
        [theme.breakpoints.down("md")]: {
            height: "100%"
        }
    }));
const TitleBox = (0,styles_.styled)(material_.Box)({
    display: "flex",
    justifyContent: "start",
    paddingLeft: "6.813rem",
    fontSize: "1.25rem",
    textTransform: "uppercase",
    fontFamily: "Poppins",
    alignItems: "center",
    paddingBottom: "2rem",
    fontWeight: 500
});
const TitleBox1 = (0,styles_.styled)(material_.Box)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingLeft: "2rem",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    paddingBottom: "1rem"
});
const TitleBox3 = (0,styles_.styled)(material_.Box)({
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    width: 500,
    maxWidth: "100%",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    paddingBottom: "2rem",
    color: "#FFFFFF"
});
const TextFieldStyle = (0,styles_.styled)(material_.TextField)(({ theme  })=>({
        background: "rgba(145, 158, 171, 0.08)",
        border: "1px solid #FFFFFF",
        borderRadius: "0.5rem",
        color: "#FFFFFF",
        width: "50vh",
        [theme.breakpoints.down("md")]: {
            width: "100%"
        }
    }));
const TitleBox2 = (0,styles_.styled)(material_.Box)({
    display: "flex",
    justifyContent: "start",
    paddingLeft: "2rem",
    fontSize: "1.25rem",
    fontFamily: "Poppins",
    alignItems: "center",
    paddingBottom: "2rem"
});
const TextBox = (0,styles_.styled)(material_.Box)({
    display: "flex",
    fontFamily: "Poppins",
    justifyContent: "start",
    alignItems: "start",
    fontSize: "0.663rem"
});
const IconBox = (0,styles_.styled)(material_.Box)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    paddingTop: "5rem"
});
const useStyles = (0,external_mui_styles_.makeStyles)({
    main: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "start"
    },
    button: {
        fontSize: "1rem",
        fontWeight: "25rem"
    }
});
const Heading = (0,styles_.styled)(material_.Typography)(()=>({
        marginLeft: "1.2rem"
    }));
const BottomHeading = (0,styles_.styled)(material_.Typography)({
    marginTop: "6.4rem"
});
const ImageBox = (0,styles_.styled)(material_.Typography)({
    margin: "0rem 0.5rem 0rem 0.5rem",
    color: "white",
    zIndex: 4
});
const BoxIcon = (0,styles_.styled)(material_.Box)({
    display: "flex",
    paddingRight: "1rem",
    justifyContent: "center",
    alignItems: "center"
});
const BoxIcons = (0,styles_.styled)(material_.Box)({
    paddingRight: "0.2rem"
});
const GridItem = (0,styles_.styled)(material_.Grid)({
    marginLeft: "5rem"
});
const GridElemnt = (0,styles_.styled)(material_.Grid)({
    marginLeft: "1rem"
});
const GridCom = (0,styles_.styled)(material_.Grid)({
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    marginRight: "2rem"
});

;// CONCATENATED MODULE: ./src/mainlayout/Footer/index.tsx
/* eslint-disable @next/next/no-img-element */ 



// import { useSelector } from "react-redux";
// import { selectTranslations } from "redux/slices/i18nSlice";
const Footer = ()=>{
    // const t = useSelector(selectTranslations);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Boxes, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(TitleBox, {
                children: "MarkTronic"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                container: true,
                justifyContent: "space-around",
                rowSpacing: 1,
                columnSpacing: 1,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridItem, {
                        item: true,
                        sm: 12,
                        lg: 2,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(TextBox, {
                                children: "Lorem ipsum dolor sit amet, elitestelit adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconBox, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ImageBox, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/facebookk.jpg",
                                            alt: "",
                                            width: 18,
                                            height: 15
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ImageBox, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/instaa.jpg",
                                            alt: "",
                                            width: 18,
                                            height: 15
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ImageBox, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/linkk.jpg",
                                            alt: "",
                                            width: 18,
                                            height: 15
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ImageBox, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/twiter.jpg",
                                            alt: "",
                                            width: 18,
                                            height: 15
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridElemnt, {
                        item: true,
                        sm: 12,
                        lg: 3,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleBox1, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxIcon, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/messages.jpg",
                                            alt: "",
                                            height: 23,
                                            width: 27
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        children: "info@example.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleBox2, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(BoxIcon, {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/locationss.jpg",
                                            alt: "",
                                            height: 23,
                                            width: 27
                                        })
                                    }),
                                    "xyz xyz"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(GridCom, {
                        item: true,
                        sm: 12,
                        lg: 5,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TitleBox3, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(BoxIcons, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(TextFieldStyle, {
                                        placeholder: "Email address"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/Buttons.png",
                                    alt: "",
                                    height: 50,
                                    width: 54
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const mainlayout_Footer = (Footer);

// EXTERNAL MODULE: ./src/theme.ts
var theme = __webpack_require__(668);
// EXTERNAL MODULE: ./src/createEmotionCache.ts
var createEmotionCache = __webpack_require__(221);
;// CONCATENATED MODULE: ./i18n/locales/ar/translations.json
const translations_namespaceObject = JSON.parse('{"language":"عربي","logo":"نظام إدارة تخطيط موارد المؤسسات","Login":"تسجيل الدخول","loginDescription":"الرجاء إدخال تسجيل الدخول وكلمة المرور الخاصة بك","account":"ليس لديك حساب؟","forgot":"هل نسيت كلمة السر؟","Password":"كلمة المرور","ConfirmPassword":"تأكيد كلمة المرور","signGoogle":"الدخول مع جوجل","UserName":"اسم المستخدم أو البريد الالكتروني","Register":"يسجل!","started":"هيا بنا نبدأ","Create":"انشاء حساب جديد ","Submit":"يُقدِّم","Verification":"سوف نرسل رمز التحقق الخاص بك","Next":"التالي","Back":"خلف","SignIn":"تسجيل الدخول!","SignUp":"اشتراك","haveAccount":"لديك حساب؟","Or":"أو","Fill":"املأ نموذج ملف التعريف الخاص بك","Owner":"المعلومات الشخصية للمالك","CompanyName":"اسم الشركة / نوع المشروع","CompanyLogo":"شعار الشركة","CompanyRegisterNumber":"رقم تسجيل الشركة","CompanyDate":"تاريخ انتهاء الشركة","CompanyURL":"عنوان URL للشركة","OwnerID":"رقم هوية المالك","EmailAddress":"عنوان البريد الإلكتروني / رقم الهاتف","ServiceTitle":"عنوان الخدمة","ServiceDescription":"وصف الخدمة","ServicePrice":"سعر الخدمة (اختياري)","Branches":"الفروع","Basic":"أساسي","Details":"تفاصيل","continue":"يكمل","cancel":"لا إلغاء","ContinueAlert":"هل تريد ملء نموذج الملف الشخصي لمزيد من الإجراءات؟","ContinueAlertDescription":"بيانات الموقع إلى Google ، حتى في حالة عدم تشغيل أي تطبيقات. بيانات الموقع إلى Google ، حتى في حالة عدم تشغيل أي تطبيقات.","RecentAddedJobs":"الوظائف المضافة الأخيرة","Attendance":"حضور","Shortlisted":"قائمة المرشحين المختصرة","Total":"إجمالي التطبيقات","Onboarding":"المرشحين على متن الطائرة","Rejected":"المرشحون المرفوضون","View":"عرض المزيد","Transaction":"تحليلات المعاملات","Dashboard":"لوحة القيادة","Customer":"عملاء","Invoice":"الفواتير","Payment":"دفع","Finance":"تمويل","Messages":"رسائل","Employment":"توظيف","Profile":"الملف الشخصي","Setting":"إعدادات","Hr":"الموارد البشرية","Pos":"نقاط البيع","Theme":"سمة","Logout":"تسجيل خروج"}');
;// CONCATENATED MODULE: ./i18n/locales/en/translations.json
const en_translations_namespaceObject = JSON.parse('{"language":"English","logo":"MARKTRONIC","Login":"Login","loginDescription":"Please enter you Login and your Password","account":"Don’t have an account?","forgot":"Forgot Password?","Password":"Password","ConfirmPassword":"Confirm Password","signGoogle":"sign-in with Google","UserName":"UserName or Email","Register":"Register!","started":"Let’s Get Started","Create":"Create a new Account ","Submit":"Submit","Verification":"We will send your Verification Code","Next":"Next","Back":"Back","SignIn":" SignIn!","SignUp":" SignUp","haveAccount":"Have an Account?","Or":"Or","Fill":"Fill Your Profile Form","Owner":"Owner Personal Information","CompanyName":"Company Name / Project Type","CompanyLogo":"Company Logo","CompanyRegisterNumber":"Company Register Number","CompanyDate":"Company Date of Expiry","CompanyURL":"Company URL","OwnerID":"Owner ID Number","EmailAddress":"Email Address / Phone Number","ServiceTitle":"Service Title","ServiceDescription":"Service Description","ServicePrice":"Service Price (Optional)","Branches":"Branches","Basic":"Basic","Details":"Details","continue":"Continue","cancel":"No, Cancel","ContinueAlert":"Do you want to fill the Profile Form for further procedure?","ContinueAlertDescription":"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.","RecentAddedJobs":"Recent Added Jobs","Attendance":"Attendance","Shortlisted":"Shortlisted Candidates","Total":"Total Applications","Onboarding":"Onboarding Candidates","Rejected":"Rejected Candidates","View":"View More","Transaction":"Transaction Analytics","Dashboard":"Dashboard","Customer":"Customers","Invoice":"Invoices","Payment":"Payment","Finance":"Finance","Messages":"Messages","Employment":"Employment","Profile":"Profile","Setting":"Settings","Hr":"HR","Pos":"POS","Theme":"Theme","Logout":"Logout"}');
;// CONCATENATED MODULE: ./pages/_app.tsx














// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps ,  } = props;
    const { locale  } = (0,router_namespaceObject.useRouter)();
    const messages = {
        ar: translations_namespaceObject,
        en: en_translations_namespaceObject
    };
    // function getDirection(locale: any) {
    //     if (locale === "ar") {
    //         return "rtl";
    //     }
    //     return "ltr";
    // }
    external_react_default().useEffect(()=>{
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles?.parentElement?.removeChild(jssStyles);
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_intl_namespaceObject.IntlProvider, {
        locale: locale,
        messages: messages[locale],
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
            value: emotionCache,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                    theme: theme/* default */.Z,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(mainlayout_Footer, {})
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 484:
/***/ ((module) => {

module.exports = require("@mui/styles");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,886], () => (__webpack_exec__(335)));
module.exports = __webpack_exports__;

})();