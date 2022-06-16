exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 7421:
/***/ ((module) => {

// Exports
module.exports = {
	"Container": "Pagination_Container__gkiaH",
	"button": "Pagination_button__lGaoL",
	"activeButton": "Pagination_activeButton__MMnFN"
};


/***/ }),

/***/ 1446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7421);
/* harmony import */ var _styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_helpers_ApiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8051);




const Pagination = (props)=>{
    let { 0: buttons , 1: updateButtons  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    let { 0: currentPage , 1: updateCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const _buttons = [];
        for(let i = 1; i <= Math.ceil(props.items / _src_helpers_ApiConfig__WEBPACK_IMPORTED_MODULE_2__/* .VideosPerPage */ .G); i += 1){
            _buttons.push(i);
        }
        updateButtons(_buttons);
        updateCurrentPage(1);
    }, [
        props.items
    ]);
    const changePage = (page)=>{
        updateCurrentPage(page);
        props.changePage(page);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().Container),
        children: buttons.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>changePage(i)
                ,
                className: i === currentPage ? (_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeButton) : (_styles_Pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                children: i
            }, i)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 8051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ VideosPerPage),
/* harmony export */   "l": () => (/* binding */ ApiUrl)
/* harmony export */ });
const ApiUrl = "https://photon-recruitment-app.herokuapp.com/api";
const VideosPerPage = 10;


/***/ })

};
;