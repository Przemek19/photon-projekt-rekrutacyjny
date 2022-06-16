exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 6910:
/***/ ((module) => {

// Exports
module.exports = {
	"Container": "VideoPreview_Container__e4880",
	"VideoPreviewImage": "VideoPreview_VideoPreviewImage__0DK8f",
	"VideoPreviewTitle": "VideoPreview_VideoPreviewTitle__zFbcd",
	"VideoPreviewAuthor": "VideoPreview_VideoPreviewAuthor__6FFgN",
	"VideoPreviewInfo": "VideoPreview_VideoPreviewInfo__d_qhP"
};


/***/ }),

/***/ 4867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6910);
/* harmony import */ var _styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137);



const VideoPreview = (props)=>{
    if (!props.video) {
        props.video = {
            id: 0,
            title: "",
            attributes: {
                youTubeVideoId: "",
                title: "",
                description: "",
                fullUrl: "",
                viewCount: "",
                likeCount: "",
                dislikeCount: "",
                publishedDate: "",
                createdAt: "",
                updatedAt: ""
            }
        };
    }
    const attributes = props.video.attributes;
    const publishedDate = new Date(attributes.publishedDate).getTime();
    const now = new Date().getTime();
    const timeSinceUpload = (0,_src_helpers_utils__WEBPACK_IMPORTED_MODULE_1__/* .millisecondsToTime */ ._)(now - publishedDate);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2___default().Container),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: `/video/${props.video.id}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2___default().VideoPreviewImage),
                    src: `https://img.youtube.com/vi/${attributes.youTubeVideoId}/hqdefault.jpg`,
                    alt: props.video.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2___default().VideoPreviewTitle),
                    children: attributes.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2___default().VideoPreviewAuthor),
                    children: "Photon Education"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: (_styles_VideoPreview_module_css__WEBPACK_IMPORTED_MODULE_2___default().VideoPreviewInfo),
                    children: [
                        attributes.viewCount,
                        " wy\u015Bwietle\u0144 \u2022 ",
                        timeSinceUpload
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoPreview);


/***/ })

};
;