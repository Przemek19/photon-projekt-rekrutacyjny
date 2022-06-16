exports.id = 531;
exports.ids = [531];
exports.modules = {

/***/ 1269:
/***/ ((module) => {

// Exports
module.exports = {
	"Container": "Video_Container__NLBGe",
	"LeftContainer": "Video_LeftContainer__O0p7D",
	"FrameContainer": "Video_FrameContainer__b6TWR",
	"Frame": "Video_Frame__7VwpK",
	"Title": "Video_Title__ccptz",
	"ViewsAndLikesContainer": "Video_ViewsAndLikesContainer__yBeh_",
	"ViewsContainer": "Video_ViewsContainer__g5IW1",
	"LikesContainer": "Video_LikesContainer__VsMVa",
	"Likes": "Video_Likes__8cmrm",
	"Dislikes": "Video_Dislikes__gs3Ty",
	"Views": "Video_Views__CXaUx",
	"AuthorContainer": "Video_AuthorContainer__3zOUZ",
	"AuthorAvatar": "Video_AuthorAvatar__zuW4_",
	"Author": "Video_Author__edCfp",
	"AuthorName": "Video_AuthorName__cU_AA",
	"Subscriptions": "Video_Subscriptions__1lgXv",
	"DescriptionContainer": "Video_DescriptionContainer__YNVEe",
	"WriteCommentContainer": "Video_WriteCommentContainer__2pAGT",
	"CommentAvatar": "Video_CommentAvatar__VZtb5",
	"RightContainer": "Video_RightContainer___3v_V",
	"CommentContainer": "Video_CommentContainer__J24Hc",
	"CommentAvatarContainer": "Video_CommentAvatarContainer__IZ61T",
	"CommentData": "Video_CommentData__1dsjB",
	"CommentAuthor": "Video_CommentAuthor__Wt8bi",
	"CommentDate": "Video_CommentDate__PHYNt"
};


/***/ }),

/***/ 1531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1269);
/* harmony import */ var _styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(137);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);




const Comment = (props)=>{
    if (!props.data) props.data = {
        id: 0,
        author: "Undefined",
        content: "",
        timestamp: 0,
        avatar: "/user.png"
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentAvatarContainer),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: props.data.avatar,
                    width: 48,
                    height: 48
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentData),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentTop),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentAuthor),
                                children: props.data.author
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentDate),
                                children: (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_3__/* .millisecondsToTime */ ._)(Date.now() - props.data.timestamp)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Video_module_css__WEBPACK_IMPORTED_MODULE_2___default().CommentBottom),
                        children: props.data.content
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);


/***/ })

};
;