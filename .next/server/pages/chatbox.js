"use strict";
(() => {
var exports = {};
exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_chatbox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/chatbox.tsx
// src/components/ChatBox.tsx



const ChatBox = ()=>{
    const { 0: messages , 1: setMessages  } = (0,external_react_.useState)([]);
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)("");
    const { 0: senderName , 1: setSenderName  } = (0,external_react_.useState)("");
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    const handleSendMessage = ()=>{
        if (inputValue.trim() !== "" || image) {
            const newMessages = [];
            if (inputValue.trim() !== "") {
                newMessages.push({
                    sender: senderName || "Anonymous",
                    content: inputValue,
                    type: "text"
                });
            }
            if (image) {
                newMessages.push({
                    sender: senderName || "Anonymous",
                    content: URL.createObjectURL(image),
                    type: "image"
                });
            }
            setMessages([
                ...messages,
                ...newMessages
            ]);
            setInputValue("");
            setImage(null);
        }
    };
    const handleImageChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "chat-box",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "chat-messages",
                children: messages.map((message, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "chat-message",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                children: [
                                    message.sender,
                                    ":"
                                ]
                            }),
                            message.type === "text" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: message.content
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: message.content,
                                alt: "sent",
                                className: "chat-image"
                            })
                        ]
                    }, index))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "chat-input",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: senderName,
                        onChange: (e)=>setSenderName(e.target.value),
                        placeholder: "Your name"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        value: inputValue,
                        onChange: (e)=>setInputValue(e.target.value),
                        placeholder: "Type your message here..."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "chat-input-buttons",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                className: "image-upload-button",
                                children: [
                                    "Upload Image",
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "file",
                                        accept: "image/*",
                                        onChange: handleImageChange
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: handleSendMessage,
                                children: "Send"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const chatbox = (ChatBox);

;// CONCATENATED MODULE: ./src/pages/chatbox.tsx
Object(function webpackMissingModule() { var e = new Error("Cannot find module '/Users/guoguo/Desktop/my-resume/src/components/chatbox.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// src/pages/HomePage.tsx




const HomePage = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(chatbox, {})
    });
};
/* harmony default export */ const pages_chatbox = (HomePage);


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
var __webpack_exports__ = (__webpack_exec__(537));
module.exports = __webpack_exports__;

})();