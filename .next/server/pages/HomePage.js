"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_HomePage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/backgroundvideo.tsx



const BackgroundVideo = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "This is a video!!!"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("video", {
                controls: true,
                width: "1000",
                height: "800",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: "${process.env.PUBLIC_URL}/my_video.mp4",
                        type: "video/mp4"
                    }),
                    "您的浏览器不支持视频播放。"
                ]
            })
        ]
    });
};
/* harmony default export */ const backgroundvideo = (BackgroundVideo);

;// CONCATENATED MODULE: ./src/pages/HomePage.tsx


 // 确保你有这个CSS文件来处理样式

const HomePage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "homepage-container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "video-container",
            children: /*#__PURE__*/ jsx_runtime_.jsx(backgroundvideo, {})
        })
    });
};
/* harmony default export */ const pages_HomePage = (HomePage);


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
var __webpack_exports__ = (__webpack_exec__(860));
module.exports = __webpack_exports__;

})();