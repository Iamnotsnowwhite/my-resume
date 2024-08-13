"use strict";
(() => {
var exports = {};
exports.id = 666;
exports.ids = [666];
exports.modules = {

/***/ 81:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ContactPage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Contact.tsx


// 这个文件不用翻译
const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "contact",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "E-mail: weizhaoguo@hotmail.com"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "LinkedIn: ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/in/zhaoguo-wei-282473306",
                        children: "zhaoguo_Wei"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "GitHub: ",
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/Iamnotsnowwhite",
                        children: "Iamnotsnowwhite"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Contact = (Contact);

;// CONCATENATED MODULE: ./src/pages/ContactPage.tsx
// src/pages/ContactPage.tsx




const ContactPage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Contact me"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Contact, {})
            ]
        })
    });
};
/* harmony default export */ const pages_ContactPage = (ContactPage);


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(81));
module.exports = __webpack_exports__;

})();