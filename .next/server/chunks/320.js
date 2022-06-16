exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 5392:
/***/ ((module) => {

// Exports
module.exports = {
	"Navbar": "Navbar_Navbar__gJ05l",
	"LogoContainer": "Navbar_LogoContainer__G79_G",
	"SmallLogo": "Navbar_SmallLogo__dOjze",
	"SearchBarContainer": "Navbar_SearchBarContainer__SsmQF",
	"SearchBar": "Navbar_SearchBar__q7fgQ",
	"SearchButton": "Navbar_SearchButton__fJpqY",
	"BigLogo": "Navbar_BigLogo__126yk"
};


/***/ }),

/***/ 5320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5392);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






const Navbar = (props)=>{
    const { 0: searchQuery , 1: updateSearchQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const handleSearch = (e)=>{
        if (props.search) props.search(e.target.value);
        updateSearchQuery(e.target.value);
    };
    const handleSubmit = (e)=>{
        if (e.key === "Enter" && e.target.value.length > 0) {
            window.location.href = `/?query=${e.target.value}`;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const queryParams = new URLSearchParams(window.location.search);
        const query = queryParams.get("query");
        if (query) {
            updateSearchQuery(query);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Navbar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                href: "/",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().LogoContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.png",
                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().BigLogo)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/icon.png",
                                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().SmallLogo)
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().SearchBarContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        onKeyUp: handleSubmit,
                        value: searchQuery,
                        type: "text",
                        placeholder: "Szukaj",
                        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().SearchBar),
                        onChange: (e)=>handleSearch(e)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: `/?query=${searchQuery}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().SearchButton),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faSearch
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ })

};
;