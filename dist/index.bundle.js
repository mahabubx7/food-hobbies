"use strict";
(self["webpackChunkjs_capstone"] = self["webpackChunkjs_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  background-color: #f1f1f1;\n  color: #da729f;\n  font-family: \"Fira Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\n\nsmall {\n  color: #4183c4;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n\nheader {\n  background-color: #da729f;\n  color: white;\n}\nheader .header-nav {\n  display: flex;\n  align-items: center;\n}\nheader .header-nav nav #logo {\n  font-size: 2.25rem;\n  font-weight: 600;\n}\nheader .header-nav nav #hamberger {\n  display: none;\n  font-size: 2.25rem;\n}\nheader .header-nav ul {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  list-style: none;\n  padding-left: 0;\n  margin-left: auto;\n  gap: 0.85rem 1.75rem;\n  text-transform: capitalize;\n  font-size: 1.15rem;\n}\nheader .header-nav ul li a {\n  color: white;\n}\nheader .header-nav ul li:hover > a {\n  color: #d4fffb;\n}\n\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n.question {\n  text-align: center;\n  color: #4183c4;\n}\n.question .question-button {\n  background-color: #4183c4;\n  color: #fff;\n  padding: 5px 10px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.805);\n}\n.question .question-button:hover {\n  background-color: #458de4;\n}\n.question .question-button:active {\n  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.705);\n  transform: translateY(4px);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n}\n.card .img-food {\n  cursor: pointer;\n  max-width: 25vw;\n  min-width: 25vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.card .img-food:hover {\n  transform: scale(1.1);\n}\n.card .food-info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: #3e3e3e;\n}\n.card .food-info .food-name {\n  cursor: pointer;\n  margin-left: 0.5vw;\n  flex-wrap: nowrap;\n  max-width: 25vw;\n  min-width: 25vw;\n  width: 80%;\n}\n.card .food-info .love {\n  align-self: flex-end;\n  margin-right: 0.75vw;\n  margin-top: -4vw;\n  padding: 10px;\n  cursor: pointer;\n  font-size: x-large;\n  color: #da729f;\n  transition: all 0.3s ease-in-out;\n}\n.card .food-info .love:hover {\n  transform: scale(1.3);\n  color: rgb(233, 54, 54);\n}\n.card .food-info .comment-box {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 99;\n}\n.card .food-info .comment-box .box-area {\n  display: flex;\n  width: calc(100% - 1rem);\n  max-width: 500px;\n  margin: 2rem auto;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: white;\n  color: #3e3e3e;\n  padding: 1rem 0.5rem;\n  z-index: 999;\n  border-radius: 0.4rem;\n  overflow-y: scroll;\n  max-height: 70vh;\n}\n.card .food-info .comment-box .box-area .btn-close {\n  display: inline-block;\n  margin-left: auto;\n  font-size: 1.5rem;\n  color: #da729f;\n  margin-right: 1rem;\n}\n.card .food-info .comment-box .box-area h3 {\n  text-align: center;\n}\n.card .food-info .comment-box .box-area h3,\n.card .food-info .comment-box .box-area h4 {\n  margin: 1rem;\n}\n.card .food-info .comment-box .box-area img {\n  display: inline-block;\n  margin: 0.35rem auto;\n  width: calc(100% - 1rem);\n  object-fit: cover;\n}\n.card .food-info .comment-box .box-area .comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n.card .food-info .comment-box .box-area .comment-form input,\n.card .food-info .comment-box .box-area .comment-form textarea {\n  padding: 0.35rem;\n  outline: 0;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit] {\n  display: inline-block;\n  text-transform: capitalize;\n  outline: 0;\n  border: 1px solid #da729f;\n  padding: 0.35rem 0.85rem;\n  cursor: pointer;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit]:hover {\n  background-color: #da729f;\n  color: white;\n}\n.card .food-info .comment-box .box-area .comments {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  list-style: none;\n}\n.card .food-info .comment-box .box-area p {\n  margin: 1rem;\n  color: #6e6666;\n}\n.card .likes {\n  align-self: flex-end;\n  margin-top: -2vw;\n  margin-right: 0.5vw;\n  color: #3e3e3e;\n}\n.card .button {\n  width: fit-content;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 1px #da729f;\n  margin-top: 10px;\n  margin-left: 0.5vw;\n  transition: all 0.2s ease-in-out;\n  border-color: #da729f;\n}\n.card .button:hover {\n  background-color: #da729f;\n  color: #fff;\n  border-color: rgba(0, 0, 0, 0.148);\n  box-shadow: 3px 3px 3px 1px #bcb6b6;\n}\n\nfooter {\n  border-top: 1px solid rgba(218, 114, 159, 0.1647058824);\n  border-bottom: 1px solid rgba(218, 114, 159, 0.1647058824);\n  background-color: rgba(46, 45, 45, 0.0588235294);\n  color: rgb(57, 56, 56);\n}\nfooter .footer-text {\n  text-align: center;\n}\nfooter .footer-name {\n  text-decoration: none;\n  color: #da729f;\n}\nfooter .love-created {\n  color: rgb(228, 40, 40);\n  font-size: 1.2em;\n}\n\n@media screen and (max-width: 767.9px) {\n  .container {\n    width: calc(100% - 1rem);\n  }\n  header .header-nav nav {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  header .header-nav nav #hamberger {\n    display: inline-block;\n  }\n  header .header-nav #menu {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$themeDark: #3e3e3e;\n$themeBlue: #4183c4;\n// $theme: #e6573e;\n$theme: #da729f;\n$bg: #f1f1f1;\n$scroll: #6e6666;\n// import fonts @googleFonts\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: $bg;\n  color: $theme;\n  font-family: 'Fira Sans', sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\nsmall { color: $themeBlue; }\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n.hidden { display: none !important; }\n// container\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n// header\nheader {\n  background-color: $theme;\n  color: white;\n\n  .header-nav {\n    display: flex;\n    align-items: center;\n    // first-nav-part\n    nav {\n      // logo\n      #logo {\n        font-size: 2.25rem;\n        font-weight: 600;\n      }\n      // mobile-menu\n      #hamberger {\n        display: none;\n        font-size: 2.25rem;\n      }\n    }\n    // ul#menu\n    ul {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      list-style: none;\n      padding-left: 0;\n      margin-left: auto;\n      gap: 0.85rem 1.75rem;\n      text-transform: capitalize;\n      font-size: 1.15rem;\n      // links\n      li {\n        a { color: white; }\n\n        &:hover {\n          & > a {\n            color: #d4fffb;\n          }\n        }\n      }\n    }\n  }\n}\n// homepage\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n// options\n.question {\n  text-align: center;\n  color: $themeBlue;\n\n  .question-button {\n    background-color: $themeBlue;\n    color: #fff;\n    padding: 5px 10px;\n    border: none;\n    cursor: pointer;\n    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.805);\n  }\n\n  .question-button:hover {\n    background-color: #458de4;\n  }\n\n  .question-button:active {\n    box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.705);\n    transform: translateY(4px);\n  }\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n\n  .img-food {\n    cursor: pointer;\n    max-width: 25vw;\n    min-width: 25vw;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    transition: all 0.3s ease-in-out;\n  }\n\n  .img-food:hover {\n    transform: scale(1.1);\n  }\n\n  .food-info {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-top: 10px;\n    color: $themeDark;\n\n    .food-name {\n      cursor: pointer;\n      margin-left: 0.5vw;\n      flex-wrap: nowrap;\n      max-width: 25vw;\n      min-width: 25vw;\n      width: 80%;\n    }\n\n    .love {\n      align-self: flex-end;\n      margin-right: 0.75vw;\n      margin-top: -4vw;\n      padding: 10px;\n      cursor: pointer;\n      font-size: x-large;\n      color: $theme;\n      transition: all 0.3s ease-in-out;\n    }\n\n    .love:hover {\n      transform: scale(1.3);\n      color: rgb(233, 54, 54);\n    }\n    // comments\n    .comment-box {\n      display: flex;\n      align-items: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      min-height: 100vh;\n      background-color: rgba(0, 0, 0, 0.35);\n      z-index: 99;\n\n      .box-area {\n        display: flex;\n        width: calc(100% - 1rem);\n        max-width: 500px;\n        margin: 2rem auto;\n        flex-direction: column;\n        gap: 1rem;\n        background-color: white;\n        color: #3e3e3e;\n        padding: 1rem 0.5rem;\n        z-index: 999;\n        border-radius: 0.4rem;\n        overflow-y: scroll;\n        max-height: 70vh;\n\n        .btn-close {\n          display: inline-block;\n          margin-left: auto;\n          font-size: 1.5rem;\n          color: $theme;\n          margin-right: 1rem;\n        }\n\n        h3 { text-align: center; }\n\n        h3,\n        h4 {\n          margin: 1rem;\n        }\n\n        // img\n        img {\n          display: inline-block;\n          margin: 0.35rem auto;\n          width: calc(100% - 1rem);\n          object-fit: cover;\n        }\n\n        // comment-form\n        .comment-form {\n          display: flex;\n          flex-direction: column;\n          gap: 0.5rem;\n          padding: 0.5rem;\n\n          input,\n          textarea {\n            padding: 0.35rem;\n            outline: 0;\n          }\n\n          button[type=\"submit\"] {\n            display: inline-block;\n            text-transform: capitalize;\n            outline: 0;\n            border: 1px solid $theme;\n            padding: 0.35rem 0.85rem;\n            cursor: pointer;\n\n            &:hover {\n              background-color: $theme;\n              color: white;\n            }\n          }\n        }\n\n        .comments {\n          display: flex;\n          flex-direction: column;\n          gap: 1rem;\n          list-style: none;\n        }\n\n        // p\n        p {\n          margin: 1rem;\n          color: #6e6666;\n        }\n      }\n    }\n  }\n\n  .likes {\n    align-self: flex-end;\n    margin-top: -2vw;\n    margin-right: 0.5vw;\n    color: $themeDark;\n  }\n\n  .button {\n    width: fit-content;\n    padding: 5px 10px;\n    cursor: pointer;\n    box-shadow: 3px 3px 3px 1px $theme;\n    margin-top: 10px;\n    margin-left: 0.5vw;\n    transition: all 0.2s ease-in-out;\n    border-color: $theme;\n  }\n\n  .button:hover {\n    background-color: $theme;\n    color: #fff;\n    border-color: rgba(0, 0, 0, 0.148);\n    box-shadow: 3px 3px 3px 1px #bcb6b6;\n  }\n}\n// footer\nfooter {\n  border-top: 1px solid #da729f2a;\n  border-bottom: 1px solid #da729f2a;\n  background-color: #2e2d2d0f;\n  color: rgb(57, 56, 56);\n\n  .footer-text {\n    text-align: center;\n  }\n\n  .footer-name {\n    text-decoration: none;\n    color: $theme;\n  }\n\n  .love-created {\n    color: rgb(228, 40, 40);\n    font-size: 1.2em;\n  }\n}\n// RESPONSIVE CSS\n@media screen and (max-width: 767.9px) {\n  // Generics\n  .container { width: calc(100% - 1rem); }\n  // header-component\n  header {\n    .header-nav {\n      nav {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        #hamberger { display: inline-block; }\n      }\n      #menu { display: none; }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./src/modules/index.js");
/* eslint-disable import/extensions */
 // styles -> css or scss


(0,_modules__WEBPACK_IMPORTED_MODULE_1__.setupApp)(); // mounting our app


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footerComponent = (parentElement) => {
  const markups = `
    <h5 class="footer-text">Created with <span class="love-created">&hearts;</span> by 
      <a href="https://github.com/fickryiman" class="footer-name">Fickry Bil Iman</a> 
      && <a href="https://github.com/mahabubx7" class="footer-name">Mahabub</a>
      under CC License.
    </h5>
  `;

  parentElement.innerHTML = `${markups}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerComponent);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable import/extensions */

const headerComponent = (parentElement) => {
  const markups = `
  <nav class="container header-nav">
    <nav>
      <span id='logo'>food hobbies.</span>
      <span id='hamberger'><i class="ri-menu-3-line"></i></span>
    </nav>
    <ul id='menu'>
      <li><a href='#' data-page='areas'>meal areas</a></li>
      <li><a href='#' data-page='categories'>meal categories</a></li>
      <li><a href='#' data-page='ingredients'>meal ingredients</a></li>
    </ul>
  </nav>
  `;

  // return/DOM-update
  parentElement.innerHTML = `${markups}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerComponent);


/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_commentCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/commentCounter */ "./src/modules/commentCounter.js");
/* harmony import */ var _modules_itemCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/itemCounter */ "./src/modules/itemCounter.js");
/* eslint-disable array-callback-return */
/* eslint-disable no-await-in-loop */




const homepageComponent = async (element) => {
  const meals = [];
  let count = 0;
  const isLocalStorage = JSON.parse(localStorage.getItem('MEALS'));

  const questionButton = document.querySelector('.question-button');
  questionButton.addEventListener('click', () => {
    localStorage.removeItem('MEALS');
    window.location.reload();
  });

  const getResponse = async () => {
    const mealAPI = 'https://www.themealdb.com/api/json/v1/1/random.php';

    if (isLocalStorage) {
      return isLocalStorage;
    }

    while (count < 15) {
      const response = await fetch(mealAPI,
        {
          method: 'GET',
        });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      meals.push(data.meals);
      count += 1;
    }
    localStorage.setItem('MEALS', JSON.stringify(meals));
    return meals;
  };

  const getComments = async (itemId) => {
    let comments = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/comments?item_id=${itemId}`,
      {
        method: 'GET',
      },
    );

    comments = await comments.json();
    return comments.error ? [] : comments;
  };

  getResponse().then((meals) => {
    const MealsData = meals;
    MealsData.map((meal) => {
      element.innerHTML += `
      <div class="card">
        <img src="${meal[0].strMealThumb}" class="img-food">
        <div class="food-info">
          <p class="food-name">${meal[0].strMeal}</p>
          <input type="button" class="button" value="Comments" data-item="${meal[0].idMeal}">
          <div class="comment-box hidden" data-id="${meal[0].idMeal}">
            <div class="box-area">
            <span class="btn-close">
              <i class="ri-close-circle-line"></i>
            </span>
            <img src="${meal[0].strMealThumb}" alt="${meal[0].idMeal}" />
            <h3>${meal[0].strMeal}</h3>
            <p>
              <strong>${meal[0].strCategory}</strong>
              <i class="ri-git-commit-line"></i>
              <strong>${meal[0].strArea}</strong>
            </p>
            <h4>Top 3 Ingredients</h4>
            <p>
              <span>${meal[0].strIngredient1}</span>
              <i class="ri-git-commit-line"></i>
              <span>${meal[0].strIngredient2}</span>
              <i class="ri-git-commit-line"></i>
              <span>${meal[0].strIngredient3}</span>
            </p>
            <h4>Add a comments</h4>
            <form class="comment-form" data-id=${meal[0].idMeal}>
              <input name="username" type="text" placeholder="Your name." />
              <textarea name="comment" rows="5" placeholder="Your insights."></textarea>
              <button type="submit">add comment</button>
            </form>
            <h4 class="comment-count"></h4>
            <ul class="comments" data-id=${meal[0].idMeal}>
              <li>2023-04-19 Mahabub: This is delicious!</li>
            </ul>
            <small>source: ${meal[0].strSource}</small>
            </div>
          </div>
          <p class="love" data-id="${meal[0].idMeal}">&#10084;</p>
        </div>
        <p class="likes" >
          <span class="likes-counter" data-id="${meal[0].idMeal}">0</span>
          likes
        </p>
      </div>
      `;
    });
  }).then(async () => {
    // for comments [details pop-up]
    const commentBtns = element.querySelectorAll('.button');

    async function renderComment(element) {
      // form
      let list = await getComments(element.dataset.id);

      async function renderComments() {
        // comment-list
        list = await getComments(element.dataset.id);
        const commentList = element.parentElement.querySelector('ul.comments');
        // const comments = commentList.parentElement.querySelector('[data-counter="comments"]');
        commentList.innerHTML = ''; // reset-first
        if (list.length > 0) {
          list.forEach((comment) => {
            commentList.innerHTML += `<li><i>${comment.creation_date}</i> <b>${comment.username}</b>: ${comment.comment}</li>`;
          });
        }
        const countHead = element.parentElement.querySelector('h4.comment-count');
        // console.log(countHead);
        await (0,_modules_commentCounter__WEBPACK_IMPORTED_MODULE_0__["default"])(list, countHead);
      }
      async function handleForm(itemId) {
        const newCommentObj = {
          username: element.querySelector('input').value,
          comment: element.querySelector('textarea').value,
        };
        await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/comments',
          {
            method: 'POST',
            body: JSON.stringify({ ...newCommentObj, item_id: `${itemId}` }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          },
        ).then(() => {
          // fields reset
          element.querySelector('input').value = '';
          element.querySelector('textarea').value = '';
          renderComments(); // re-render comment list
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });
      }

      renderComments(); // initial render

      element.querySelector('button[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
        handleForm(e.target.parentElement.dataset.id);
      });
    }
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.comment-box').forEach((box) => box.classList.add('hidden'));
        document.querySelectorAll('.comment-box').forEach(async (box) => box.classList.add('hidden'));
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.remove('hidden');
        renderComment(document.querySelector(`[data-id="${btn.dataset.item}"]`));
      });

      document.querySelector(`[data-id="${btn.dataset.item}"] .btn-close`).addEventListener('click', () => {
        document.querySelector(`[data-id="${btn.dataset.item}"]`).classList.add('hidden');
      });
    });

    // get likes-counter
    const likesAPI = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/likes')
      .then((response) => response.json())
      .then((data) => data);

    const likesCounter = element.querySelectorAll('.likes-counter');
    likesCounter.forEach((likeCounter) => {
      const likesId = likeCounter.getAttribute('data-id');
      const element = likeCounter;
      likesAPI.forEach((likeAPI) => {
        if (likesId === likeAPI.item_id) {
          element.innerHTML = likeAPI.likes;
        }
      });
    });

    // add or post likes-counter
    const likesButton = element.querySelectorAll('.love');

    likesButton.forEach((likeButton) => {
      likeButton.addEventListener('click', (e) => {
        const targetCounter = e.target.parentElement.nextSibling.nextSibling.children[0].innerText;
        e.target.parentElement.nextSibling.nextSibling.children[0].innerText = (+targetCounter) + 1;

        fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/McIsZOf3EP2NPcJIfiBs/likes', {
          method: 'POST',
          body: JSON.stringify({
            item_id: likeButton.getAttribute('data-id'),
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      });
    });

    // item counter
    const itemCounter = document.querySelector('.item-counter');
    (0,_modules_itemCounter__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON.parse(localStorage.getItem('MEALS')), itemCounter);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageComponent);


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentCounter = async (comment, header) => {
  if (comment.length === 0) header.innerHTML = 'Comments (0)';
  else {
    header.innerHTML = `Comments (${comment.length})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupApp": () => (/* reexport safe */ _setup_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setup.js */ "./src/modules/setup.js");
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */





/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemCounterFunction = async (item, element) => {
  if (item.length === 0 || !item) {
    element.innerHTML = ' (0)';
  } else {
    element.innerHTML = ` (${item.length})`;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounterFunction);

/***/ }),

/***/ "./src/modules/setup.js":
/*!******************************!*\
  !*** ./src/modules/setup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/homepage */ "./src/components/homepage.js");
/* eslint-disable import/extensions */





const renderApp = async () => {
  const { body } = document;
  // header-init
  body.insertBefore(document.createElement('header'), document.querySelector('main'));
  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])(body.querySelector('header')); // header-component-render

  const cardsContainer = document.querySelector('.items');
  const cards = document.createElement('div');
  cards.classList.add('cards');
  await (0,_components_homepage__WEBPACK_IMPORTED_MODULE_2__["default"])(cards);
  cardsContainer.appendChild(cards);
  // console.log(cards.innerHTML);
  // document.addEventListener('DOMContentLoaded', () => console.log('LOADED...!'));

  body.appendChild(document.createElement('footer'), document.querySelector('main'));
  (0,_components_footer__WEBPACK_IMPORTED_MODULE_1__["default"])(body.querySelector('footer')); // footer-component-render
};

const setupApp = async () => {
  await renderApp(); // render first-initial DOM
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupApp);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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K0IsS0FBSyw0QkFBNEIsa0JBQWtCLG9CQUFvQixxQ0FBcUMsS0FBSyx1Q0FBdUMsNEJBQTRCLEtBQUssOEJBQThCLG9CQUFvQixLQUFLLEdBQUcsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFX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O0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLCtDQUErQztBQUMvQyxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QixHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3ZOakM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7QUNQN0I7QUFDQTtBQUNrQzs7QUFFZDs7Ozs7Ozs7Ozs7Ozs7O0FDSnBCO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiw2QkFBNkIsWUFBWTtBQUN6QztBQUNBOztBQUVBLGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSbEM7O0FBRW1EO0FBQ0E7QUFDSTs7QUFFdkQ7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBLEVBQUUsOERBQWUsZ0NBQWdDOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhEQUFlLGdDQUFnQztBQUNqRDs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnRlci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaXRlbUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9zZXR1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBjb2xvcjogI2RhNzI5ZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYSBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbnNtYWxsIHtcXG4gIGNvbG9yOiAjNDE4M2M0O1xcbn1cXG5cXG5hIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1heC13aWR0aDogMTE0MHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE3MjlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiBuYXYgI2xvZ28ge1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IG5hdiAjaGFtYmVyZ2VyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBnYXA6IDAuODVyZW0gMS43NXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgdWwgbGkgYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiB1bCBsaTpob3ZlciA+IGEge1xcbiAgY29sb3I6ICNkNGZmZmI7XFxufVxcblxcbm1haW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dnc7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA1dnc7XFxufVxcblxcbi5xdWVzdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzQxODNjNDtcXG59XFxuLnF1ZXN0aW9uIC5xdWVzdGlvbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxODNjNDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAycHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuODA1KTtcXG59XFxuLnF1ZXN0aW9uIC5xdWVzdGlvbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1OGRlNDtcXG59XFxuLnF1ZXN0aW9uIC5xdWVzdGlvbi1idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMC41cHggMCByZ2JhKDAsIDAsIDAsIDAuNzA1KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmNhcmQgLmltZy1mb29kIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1heC13aWR0aDogMjV2dztcXG4gIG1pbi13aWR0aDogMjV2dztcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY2FyZCAuaW1nLWZvb2Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiAjM2UzZTNlO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5mb29kLW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4td2lkdGg6IDI1dnc7XFxuICB3aWR0aDogODAlO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5sb3ZlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1dnc7XFxuICBtYXJnaW4tdG9wOiAtNHZ3O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gIGNvbG9yOiAjZGE3MjlmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmxvdmU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgY29sb3I6IHJnYigyMzMsIDU0LCA1NCk7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6ICMzZTNlM2U7XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuYnRuLWNsb3NlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogI2RhNzI5ZjtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIGgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIGgzLFxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBoNCB7XFxuICBtYXJnaW46IDFyZW07XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBpbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwLjM1cmVtIGF1dG87XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50LWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50LWZvcm0gaW5wdXQsXFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50LWZvcm0gdGV4dGFyZWEge1xcbiAgcGFkZGluZzogMC4zNXJlbTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RhNzI5ZjtcXG4gIHBhZGRpbmc6IDAuMzVyZW0gMC44NXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50LWZvcm0gYnV0dG9uW3R5cGU9c3VibWl0XTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE3MjlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIHAge1xcbiAgbWFyZ2luOiAxcmVtO1xcbiAgY29sb3I6ICM2ZTY2NjY7XFxufVxcbi5jYXJkIC5saWtlcyB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IC0ydnc7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcbiAgY29sb3I6ICMzZTNlM2U7XFxufVxcbi5jYXJkIC5idXR0b24ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAxcHggI2RhNzI5ZjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMC41dnc7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gIGJvcmRlci1jb2xvcjogI2RhNzI5ZjtcXG59XFxuLmNhcmQgLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGE3MjlmO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNDgpO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICNiY2I2YjY7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTgsIDExNCwgMTU5LCAwLjE2NDcwNTg4MjQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE4LCAxMTQsIDE1OSwgMC4xNjQ3MDU4ODI0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDQ1LCA0NSwgMC4wNTg4MjM1Mjk0KTtcXG4gIGNvbG9yOiByZ2IoNTcsIDU2LCA1Nik7XFxufVxcbmZvb3RlciAuZm9vdGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1uYW1lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZGE3MjlmO1xcbn1cXG5mb290ZXIgLmxvdmUtY3JlYXRlZCB7XFxuICBjb2xvcjogcmdiKDIyOCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICB9XFxuICBoZWFkZXIgLmhlYWRlci1uYXYgbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiBuYXYgI2hhbWJlcmdlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiAjbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBUkc7RUFTSCxjQVZNO0VBV04sb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVNBO0VBQVEsY0FwQkk7QUFlWjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQUpGOztBQU1BO0VBQVUsd0JBQUE7QUFGVjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHlCQWpDTTtFQWtDTixZQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUpSO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTk47QUFTUTtFQUFJLFlBQUE7QUFOWjtBQVNVO0VB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QUE7RUEzQ047RUE0Q007SUFBYSxxQkFBQTtFQXpDbkI7RUEyQ0k7SUFBUSxhQUFBO0VBeENaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHRoZW1lRGFyazogIzNlM2UzZTtcXG4kdGhlbWVCbHVlOiAjNDE4M2M0O1xcbi8vICR0aGVtZTogI2U2NTczZTtcXG4kdGhlbWU6ICNkYTcyOWY7XFxuJGJnOiAjZjFmMWYxO1xcbiRzY3JvbGw6ICM2ZTY2NjY7XFxuLy8gaW1wb3J0IGZvbnRzIEBnb29nbGVGb250c1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2Fuczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7OTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcXG4gIGNvbG9yOiAkdGhlbWU7XFxuICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5zbWFsbCB7IGNvbG9yOiAkdGhlbWVCbHVlOyB9XFxuXFxuYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5oaWRkZW4geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG4vLyBjb250YWluZXJcXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDExNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4vLyBoZWFkZXJcXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgLmhlYWRlci1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvLyBmaXJzdC1uYXYtcGFydFxcbiAgICBuYXYge1xcbiAgICAgIC8vIGxvZ29cXG4gICAgICAjbG9nbyB7XFxuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIH1cXG4gICAgICAvLyBtb2JpbGUtbWVudVxcbiAgICAgICNoYW1iZXJnZXIge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLy8gdWwjbWVudVxcbiAgICB1bCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgZ2FwOiAwLjg1cmVtIDEuNzVyZW07XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xcbiAgICAgIC8vIGxpbmtzXFxuICAgICAgbGkge1xcbiAgICAgICAgYSB7IGNvbG9yOiB3aGl0ZTsgfVxcblxcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICYgPiBhIHtcXG4gICAgICAgICAgICBjb2xvcjogI2Q0ZmZmYjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG4vLyBob21lcGFnZVxcbm1haW4ge1xcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbn1cXG5cXG4uY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA1dnc7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW4tdG9wOiA1dnc7XFxufVxcblxcbi8vIG9wdGlvbnNcXG4ucXVlc3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICR0aGVtZUJsdWU7XFxuXFxuICAucXVlc3Rpb24tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lQmx1ZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjgwNSk7XFxuICB9XFxuXFxuICAucXVlc3Rpb24tYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1OGRlNDtcXG4gIH1cXG5cXG4gIC5xdWVzdGlvbi1idXR0b246YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMCAwLjVweCAwIHJnYmEoMCwgMCwgMCwgMC43MDUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG4gIH1cXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAuaW1nLWZvb2Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgLmltZy1mb29kOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcblxcbiAgLmZvb2QtaW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogJHRoZW1lRGFyaztcXG5cXG4gICAgLmZvb2QtbmFtZSB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gICAgICBtYXgtd2lkdGg6IDI1dnc7XFxuICAgICAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG5cXG4gICAgLmxvdmUge1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC43NXZ3O1xcbiAgICAgIG1hcmdpbi10b3A6IC00dnc7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICAgIGNvbG9yOiAkdGhlbWU7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgLmxvdmU6aG92ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gICAgICBjb2xvcjogcmdiKDIzMywgNTQsIDU0KTtcXG4gICAgfVxcbiAgICAvLyBjb21tZW50c1xcbiAgICAuY29tbWVudC1ib3gge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gICAgICB6LWluZGV4OiA5OTtcXG5cXG4gICAgICAuYm94LWFyZWEge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgICAgICBtYXJnaW46IDJyZW0gYXV0bztcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGNvbG9yOiAjM2UzZTNlO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICAgICAgICB6LWluZGV4OiA5OTk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgICAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcblxcbiAgICAgICAgLmJ0bi1jbG9zZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICBjb2xvcjogJHRoZW1lO1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICBoMyB7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbiAgICAgICAgaDMsXFxuICAgICAgICBoNCB7XFxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIGltZ1xcbiAgICAgICAgaW1nIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBtYXJnaW46IDAuMzVyZW0gYXV0bztcXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIGNvbW1lbnQtZm9ybVxcbiAgICAgICAgLmNvbW1lbnQtZm9ybSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGdhcDogMC41cmVtO1xcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuXFxuICAgICAgICAgIGlucHV0LFxcbiAgICAgICAgICB0ZXh0YXJlYSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC4zNXJlbTtcXG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzVyZW0gMC44NXJlbTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWU7XFxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY29tbWVudHMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBnYXA6IDFyZW07XFxuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAvLyBwXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICAgICAgICBjb2xvcjogIzZlNjY2NjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5saWtlcyB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBtYXJnaW4tdG9wOiAtMnZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXZ3O1xcbiAgICBjb2xvcjogJHRoZW1lRGFyaztcXG4gIH1cXG5cXG4gIC5idXR0b24ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAkdGhlbWU7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIGJvcmRlci1jb2xvcjogJHRoZW1lO1xcbiAgfVxcblxcbiAgLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE0OCk7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAjYmNiNmI2O1xcbiAgfVxcbn1cXG4vLyBmb290ZXJcXG5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYTcyOWYyYTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGE3MjlmMmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkMGY7XFxuICBjb2xvcjogcmdiKDU3LCA1NiwgNTYpO1xcblxcbiAgLmZvb3Rlci10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1uYW1lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogJHRoZW1lO1xcbiAgfVxcblxcbiAgLmxvdmUtY3JlYXRlZCB7XFxuICAgIGNvbG9yOiByZ2IoMjI4LCA0MCwgNDApO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG4vLyBSRVNQT05TSVZFIENTU1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcXG4gIC8vIEdlbmVyaWNzXFxuICAuY29udGFpbmVyIHsgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pOyB9XFxuICAvLyBoZWFkZXItY29tcG9uZW50XFxuICBoZWFkZXIge1xcbiAgICAuaGVhZGVyLW5hdiB7XFxuICAgICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICNoYW1iZXJnZXIgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgICB9XFxuICAgICAgI21lbnUgeyBkaXNwbGF5OiBub25lOyB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyAvLyBzdHlsZXMgLT4gY3NzIG9yIHNjc3NcbmltcG9ydCB7IHNldHVwQXBwIH0gZnJvbSAnLi9tb2R1bGVzJztcblxuc2V0dXBBcHAoKTsgLy8gbW91bnRpbmcgb3VyIGFwcFxuIiwiY29uc3QgZm9vdGVyQ29tcG9uZW50ID0gKHBhcmVudEVsZW1lbnQpID0+IHtcbiAgY29uc3QgbWFya3VwcyA9IGBcbiAgICA8aDUgY2xhc3M9XCJmb290ZXItdGV4dFwiPkNyZWF0ZWQgd2l0aCA8c3BhbiBjbGFzcz1cImxvdmUtY3JlYXRlZFwiPiZoZWFydHM7PC9zcGFuPiBieSBcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmlja3J5aW1hblwiIGNsYXNzPVwiZm9vdGVyLW5hbWVcIj5GaWNrcnkgQmlsIEltYW48L2E+IFxuICAgICAgJiYgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYWhhYnVieDdcIiBjbGFzcz1cImZvb3Rlci1uYW1lXCI+TWFoYWJ1YjwvYT5cbiAgICAgIHVuZGVyIENDIExpY2Vuc2UuXG4gICAgPC9oNT5cbiAgYDtcblxuICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGAke21hcmt1cHN9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlckNvbXBvbmVudDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5jb25zdCBoZWFkZXJDb21wb25lbnQgPSAocGFyZW50RWxlbWVudCkgPT4ge1xuICBjb25zdCBtYXJrdXBzID0gYFxuICA8bmF2IGNsYXNzPVwiY29udGFpbmVyIGhlYWRlci1uYXZcIj5cbiAgICA8bmF2PlxuICAgICAgPHNwYW4gaWQ9J2xvZ28nPmZvb2QgaG9iYmllcy48L3NwYW4+XG4gICAgICA8c3BhbiBpZD0naGFtYmVyZ2VyJz48aSBjbGFzcz1cInJpLW1lbnUtMy1saW5lXCI+PC9pPjwvc3Bhbj5cbiAgICA8L25hdj5cbiAgICA8dWwgaWQ9J21lbnUnPlxuICAgICAgPGxpPjxhIGhyZWY9JyMnIGRhdGEtcGFnZT0nYXJlYXMnPm1lYWwgYXJlYXM8L2E+PC9saT5cbiAgICAgIDxsaT48YSBocmVmPScjJyBkYXRhLXBhZ2U9J2NhdGVnb3JpZXMnPm1lYWwgY2F0ZWdvcmllczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9JyMnIGRhdGEtcGFnZT0naW5ncmVkaWVudHMnPm1lYWwgaW5ncmVkaWVudHM8L2E+PC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbiAgYDtcblxuICAvLyByZXR1cm4vRE9NLXVwZGF0ZVxuICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGAke21hcmt1cHN9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckNvbXBvbmVudDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuXG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi4vbW9kdWxlcy9jb21tZW50Q291bnRlcic7XG5pbXBvcnQgaXRlbUNvdW50ZXJGdW5jdGlvbiBmcm9tICcuLi9tb2R1bGVzL2l0ZW1Db3VudGVyJztcblxuY29uc3QgaG9tZXBhZ2VDb21wb25lbnQgPSBhc3luYyAoZWxlbWVudCkgPT4ge1xuICBjb25zdCBtZWFscyA9IFtdO1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBpc0xvY2FsU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01FQUxTJykpO1xuXG4gIGNvbnN0IHF1ZXN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1ZXN0aW9uLWJ1dHRvbicpO1xuICBxdWVzdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnTUVBTFMnKTtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFJlc3BvbnNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1lYWxBUEkgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3JhbmRvbS5waHAnO1xuXG4gICAgaWYgKGlzTG9jYWxTdG9yYWdlKSB7XG4gICAgICByZXR1cm4gaXNMb2NhbFN0b3JhZ2U7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNvdW50IDwgMTUpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobWVhbEFQSSxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIG1lYWxzLnB1c2goZGF0YS5tZWFscyk7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTUVBTFMnLCBKU09OLnN0cmluZ2lmeShtZWFscykpO1xuICAgIHJldHVybiBtZWFscztcbiAgfTtcblxuICBjb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgICBsZXQgY29tbWVudHMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9NY0lzWk9mM0VQMk5QY0pJZmlCcy9jb21tZW50cz9pdGVtX2lkPSR7aXRlbUlkfWAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBjb21tZW50cyA9IGF3YWl0IGNvbW1lbnRzLmpzb24oKTtcbiAgICByZXR1cm4gY29tbWVudHMuZXJyb3IgPyBbXSA6IGNvbW1lbnRzO1xuICB9O1xuXG4gIGdldFJlc3BvbnNlKCkudGhlbigobWVhbHMpID0+IHtcbiAgICBjb25zdCBNZWFsc0RhdGEgPSBtZWFscztcbiAgICBNZWFsc0RhdGEubWFwKChtZWFsKSA9PiB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbFswXS5zdHJNZWFsVGh1bWJ9XCIgY2xhc3M9XCJpbWctZm9vZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vZC1pbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmb29kLW5hbWVcIj4ke21lYWxbMF0uc3RyTWVhbH08L3A+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIHZhbHVlPVwiQ29tbWVudHNcIiBkYXRhLWl0ZW09XCIke21lYWxbMF0uaWRNZWFsfVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50LWJveCBoaWRkZW5cIiBkYXRhLWlkPVwiJHttZWFsWzBdLmlkTWVhbH1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtYXJlYVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidG4tY2xvc2VcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1jbG9zZS1jaXJjbGUtbGluZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsWzBdLnN0ck1lYWxUaHVtYn1cIiBhbHQ9XCIke21lYWxbMF0uaWRNZWFsfVwiIC8+XG4gICAgICAgICAgICA8aDM+JHttZWFsWzBdLnN0ck1lYWx9PC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPiR7bWVhbFswXS5zdHJDYXRlZ29yeX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1naXQtY29tbWl0LWxpbmVcIj48L2k+XG4gICAgICAgICAgICAgIDxzdHJvbmc+JHttZWFsWzBdLnN0ckFyZWF9PC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDQ+VG9wIDMgSW5ncmVkaWVudHM8L2g0PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuPiR7bWVhbFswXS5zdHJJbmdyZWRpZW50MX08L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktZ2l0LWNvbW1pdC1saW5lXCI+PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj4ke21lYWxbMF0uc3RySW5ncmVkaWVudDJ9PC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWdpdC1jb21taXQtbGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+JHttZWFsWzBdLnN0ckluZ3JlZGllbnQzfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoND5BZGQgYSBjb21tZW50czwvaDQ+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImNvbW1lbnQtZm9ybVwiIGRhdGEtaWQ9JHttZWFsWzBdLmlkTWVhbH0+XG4gICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lLlwiIC8+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29tbWVudFwiIHJvd3M9XCI1XCIgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzLlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPmFkZCBjb21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8aDQgY2xhc3M9XCJjb21tZW50LWNvdW50XCI+PC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzXCIgZGF0YS1pZD0ke21lYWxbMF0uaWRNZWFsfT5cbiAgICAgICAgICAgICAgPGxpPjIwMjMtMDQtMTkgTWFoYWJ1YjogVGhpcyBpcyBkZWxpY2lvdXMhPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c21hbGw+c291cmNlOiAke21lYWxbMF0uc3RyU291cmNlfTwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzcz1cImxvdmVcIiBkYXRhLWlkPVwiJHttZWFsWzBdLmlkTWVhbH1cIj4mIzEwMDg0OzwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIiA+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaWtlcy1jb3VudGVyXCIgZGF0YS1pZD1cIiR7bWVhbFswXS5pZE1lYWx9XCI+MDwvc3Bhbj5cbiAgICAgICAgICBsaWtlc1xuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gICAgfSk7XG4gIH0pLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgIC8vIGZvciBjb21tZW50cyBbZGV0YWlscyBwb3AtdXBdXG4gICAgY29uc3QgY29tbWVudEJ0bnMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24nKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIHJlbmRlckNvbW1lbnQoZWxlbWVudCkge1xuICAgICAgLy8gZm9ybVxuICAgICAgbGV0IGxpc3QgPSBhd2FpdCBnZXRDb21tZW50cyhlbGVtZW50LmRhdGFzZXQuaWQpO1xuXG4gICAgICBhc3luYyBmdW5jdGlvbiByZW5kZXJDb21tZW50cygpIHtcbiAgICAgICAgLy8gY29tbWVudC1saXN0XG4gICAgICAgIGxpc3QgPSBhd2FpdCBnZXRDb21tZW50cyhlbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgICBjb25zdCBjb21tZW50TGlzdCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCd1bC5jb21tZW50cycpO1xuICAgICAgICAvLyBjb25zdCBjb21tZW50cyA9IGNvbW1lbnRMaXN0LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY291bnRlcj1cImNvbW1lbnRzXCJdJyk7XG4gICAgICAgIGNvbW1lbnRMaXN0LmlubmVySFRNTCA9ICcnOyAvLyByZXNldC1maXJzdFxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGlzdC5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgKz0gYDxsaT48aT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L2k+IDxiPiR7Y29tbWVudC51c2VybmFtZX08L2I+OiAke2NvbW1lbnQuY29tbWVudH08L2xpPmA7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnRIZWFkID0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0LmNvbW1lbnQtY291bnQnKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coY291bnRIZWFkKTtcbiAgICAgICAgYXdhaXQgY29tbWVudENvdW50ZXIobGlzdCwgY291bnRIZWFkKTtcbiAgICAgIH1cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZvcm0oaXRlbUlkKSB7XG4gICAgICAgIGNvbnN0IG5ld0NvbW1lbnRPYmogPSB7XG4gICAgICAgICAgdXNlcm5hbWU6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSxcbiAgICAgICAgICBjb21tZW50OiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IGZldGNoKFxuICAgICAgICAgICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9NY0lzWk9mM0VQMk5QY0pJZmlCcy9jb21tZW50cycsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IC4uLm5ld0NvbW1lbnRPYmosIGl0ZW1faWQ6IGAke2l0ZW1JZH1gIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIGZpZWxkcyByZXNldFxuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKS52YWx1ZSA9ICcnO1xuICAgICAgICAgIHJlbmRlckNvbW1lbnRzKCk7IC8vIHJlLXJlbmRlciBjb21tZW50IGxpc3RcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyQ29tbWVudHMoKTsgLy8gaW5pdGlhbCByZW5kZXJcblxuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoYW5kbGVGb3JtKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29tbWVudEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJveCcpLmZvckVhY2goKGJveCkgPT4gYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnQtYm94JykuZm9yRWFjaChhc3luYyAoYm94KSA9PiBib3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7YnRuLmRhdGFzZXQuaXRlbX1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgcmVuZGVyQ29tbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7YnRuLmRhdGFzZXQuaXRlbX1cIl1gKSk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdIC5idG4tY2xvc2VgKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGdldCBsaWtlcy1jb3VudGVyXG4gICAgY29uc3QgbGlrZXNBUEkgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTWNJc1pPZjNFUDJOUGNKSWZpQnMvbGlrZXMnKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG5cbiAgICBjb25zdCBsaWtlc0NvdW50ZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlcy1jb3VudGVyJyk7XG4gICAgbGlrZXNDb3VudGVyLmZvckVhY2goKGxpa2VDb3VudGVyKSA9PiB7XG4gICAgICBjb25zdCBsaWtlc0lkID0gbGlrZUNvdW50ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICBjb25zdCBlbGVtZW50ID0gbGlrZUNvdW50ZXI7XG4gICAgICBsaWtlc0FQSS5mb3JFYWNoKChsaWtlQVBJKSA9PiB7XG4gICAgICAgIGlmIChsaWtlc0lkID09PSBsaWtlQVBJLml0ZW1faWQpIHtcbiAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGxpa2VBUEkubGlrZXM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gYWRkIG9yIHBvc3QgbGlrZXMtY291bnRlclxuICAgIGNvbnN0IGxpa2VzQnV0dG9uID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubG92ZScpO1xuXG4gICAgbGlrZXNCdXR0b24uZm9yRWFjaCgobGlrZUJ1dHRvbikgPT4ge1xuICAgICAgbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldENvdW50ZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLm5leHRTaWJsaW5nLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5jaGlsZHJlblswXS5pbm5lclRleHQgPSAoK3RhcmdldENvdW50ZXIpICsgMTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTWNJc1pPZjNFUDJOUGNKSWZpQnMvbGlrZXMnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaXRlbV9pZDogbGlrZUJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBpdGVtIGNvdW50ZXJcbiAgICBjb25zdCBpdGVtQ291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWNvdW50ZXInKTtcbiAgICBpdGVtQ291bnRlckZ1bmN0aW9uKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01FQUxTJykpLCBpdGVtQ291bnRlcik7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZXBhZ2VDb21wb25lbnQ7XG4iLCJjb25zdCBjb21tZW50Q291bnRlciA9IGFzeW5jIChjb21tZW50LCBoZWFkZXIpID0+IHtcbiAgaWYgKGNvbW1lbnQubGVuZ3RoID09PSAwKSBoZWFkZXIuaW5uZXJIVE1MID0gJ0NvbW1lbnRzICgwKSc7XG4gIGVsc2Uge1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudC5sZW5ndGh9KWA7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbW1lbnRDb3VudGVyOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgc2V0dXBBcHAgZnJvbSAnLi9zZXR1cC5qcyc7XG5cbmV4cG9ydCB7IHNldHVwQXBwIH07XG4iLCJjb25zdCBpdGVtQ291bnRlckZ1bmN0aW9uID0gYXN5bmMgKGl0ZW0sIGVsZW1lbnQpID0+IHtcbiAgaWYgKGl0ZW0ubGVuZ3RoID09PSAwIHx8ICFpdGVtKSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnICgwKSc7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgICgke2l0ZW0ubGVuZ3RofSlgO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpdGVtQ291bnRlckZ1bmN0aW9uOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5cbmltcG9ydCBoZWFkZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IGZvb3RlckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlcic7XG5pbXBvcnQgaG9tZXBhZ2VDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lcGFnZSc7XG5cbmNvbnN0IHJlbmRlckFwcCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcbiAgLy8gaGVhZGVyLWluaXRcbiAgYm9keS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XG4gIGhlYWRlckNvbXBvbmVudChib2R5LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpKTsgLy8gaGVhZGVyLWNvbXBvbmVudC1yZW5kZXJcblxuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtcycpO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjYXJkcy5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuICBhd2FpdCBob21lcGFnZUNvbXBvbmVudChjYXJkcyk7XG4gIGNhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzKTtcbiAgLy8gY29uc29sZS5sb2coY2FyZHMuaW5uZXJIVE1MKTtcbiAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IGNvbnNvbGUubG9nKCdMT0FERUQuLi4hJykpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XG4gIGZvb3RlckNvbXBvbmVudChib2R5LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpKTsgLy8gZm9vdGVyLWNvbXBvbmVudC1yZW5kZXJcbn07XG5cbmNvbnN0IHNldHVwQXBwID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCByZW5kZXJBcHAoKTsgLy8gcmVuZGVyIGZpcnN0LWluaXRpYWwgRE9NXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZXR1cEFwcDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==