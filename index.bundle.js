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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  margin: 0;\n  padding: 0;\n  background-color: #f1f1f1;\n  color: #da729f;\n  font-family: \"Fira Sans\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\n\nsmall {\n  color: #4183c4;\n}\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n\nheader {\n  background-color: #da729f;\n  color: white;\n}\nheader .header-nav {\n  display: flex;\n  align-items: center;\n}\nheader .header-nav nav #logo {\n  font-size: 2.25rem;\n  font-weight: 600;\n}\nheader .header-nav nav #hamberger {\n  display: none;\n  font-size: 2.25rem;\n}\nheader .header-nav ul {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  list-style: none;\n  padding-left: 0;\n  margin-left: auto;\n  gap: 0.85rem 1.75rem;\n  text-transform: capitalize;\n  font-size: 1.15rem;\n}\nheader .header-nav ul li a {\n  color: white;\n}\nheader .header-nav ul li:hover > a {\n  color: #d4fffb;\n}\n\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n.question {\n  text-align: center;\n  color: #4183c4;\n}\n.question .question-button {\n  background-color: #4183c4;\n  color: #fff;\n  padding: 5px 10px;\n  border: none;\n  cursor: pointer;\n  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.805);\n}\n.question .question-button:active {\n  box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.705);\n  transform: translateY(4px);\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n}\n.card .img-food {\n  cursor: pointer;\n  max-width: 25vw;\n  min-width: 25vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease-in-out;\n}\n.card .img-food:hover {\n  transform: scale(1.1);\n}\n.card .food-info {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 10px;\n  color: #3e3e3e;\n}\n.card .food-info .food-name {\n  cursor: pointer;\n  margin-left: 0.5vw;\n  flex-wrap: nowrap;\n  max-width: 25vw;\n  min-width: 25vw;\n  width: 80%;\n}\n.card .food-info .love {\n  align-self: flex-end;\n  margin-right: 0.75vw;\n  margin-top: -4vw;\n  padding: 10px;\n  cursor: pointer;\n  font-size: x-large;\n  color: #da729f;\n  transition: all 0.3s ease-in-out;\n}\n.card .food-info .love:hover {\n  transform: scale(1.3);\n  color: rgb(233, 54, 54);\n}\n.card .food-info .comment-box {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgba(0, 0, 0, 0.35);\n  z-index: 99;\n}\n.card .food-info .comment-box .box-area {\n  display: flex;\n  width: calc(100% - 1rem);\n  max-width: 500px;\n  margin: 2rem auto;\n  flex-direction: column;\n  gap: 1rem;\n  background-color: white;\n  color: #3e3e3e;\n  padding: 1rem 0.5rem;\n  z-index: 999;\n  border-radius: 0.4rem;\n  overflow-y: scroll;\n  max-height: 70vh;\n}\n.card .food-info .comment-box .box-area .btn-close {\n  display: inline-block;\n  margin-left: auto;\n  font-size: 1.5rem;\n  color: #da729f;\n  margin-right: 1rem;\n}\n.card .food-info .comment-box .box-area h3 {\n  text-align: center;\n}\n.card .food-info .comment-box .box-area h3,\n.card .food-info .comment-box .box-area h4 {\n  margin: 1rem;\n}\n.card .food-info .comment-box .box-area img {\n  display: inline-block;\n  margin: 0.35rem auto;\n  width: calc(100% - 1rem);\n  object-fit: cover;\n}\n.card .food-info .comment-box .box-area .comment-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  padding: 0.5rem;\n}\n.card .food-info .comment-box .box-area .comment-form input,\n.card .food-info .comment-box .box-area .comment-form textarea {\n  padding: 0.35rem;\n  outline: 0;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit] {\n  display: inline-block;\n  text-transform: capitalize;\n  outline: 0;\n  border: 1px solid #da729f;\n  padding: 0.35rem 0.85rem;\n  cursor: pointer;\n}\n.card .food-info .comment-box .box-area .comment-form button[type=submit]:hover {\n  background-color: #da729f;\n  color: white;\n}\n.card .food-info .comment-box .box-area .comments {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  list-style: none;\n}\n.card .food-info .comment-box .box-area p {\n  margin: 1rem;\n  color: #6e6666;\n}\n.card .likes {\n  align-self: flex-end;\n  margin-top: -2vw;\n  margin-right: 0.5vw;\n  color: #3e3e3e;\n}\n.card .button {\n  width: fit-content;\n  padding: 5px 10px;\n  cursor: pointer;\n  box-shadow: 3px 3px 3px 1px #da729f;\n  margin-top: 10px;\n  margin-left: 0.5vw;\n  transition: all 0.2s ease-in-out;\n  border-color: #da729f;\n}\n.card .button:hover {\n  background-color: #da729f;\n  color: #fff;\n  transform: scale(1.1);\n  border: none;\n  box-shadow: 3px 3px 3px 1px #bcb6b6;\n}\n\nfooter {\n  border-top: 1px solid rgba(218, 114, 159, 0.1647058824);\n  border-bottom: 1px solid rgba(218, 114, 159, 0.1647058824);\n  background-color: rgba(46, 45, 45, 0.0588235294);\n  color: rgb(57, 56, 56);\n}\nfooter .footer-text {\n  text-align: center;\n}\nfooter .footer-name {\n  text-decoration: none;\n  color: #da729f;\n}\nfooter .love-created {\n  color: rgb(228, 40, 40);\n  font-size: 1.2em;\n}\n\n@media screen and (max-width: 767.9px) {\n  .container {\n    width: calc(100% - 1rem);\n  }\n  header .header-nav nav {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n  }\n  header .header-nav nav #hamberger {\n    display: inline-block;\n  }\n  header .header-nav #menu {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["$themeDark: #3e3e3e;\n$themeBlue: #4183c4;\n// $theme: #e6573e;\n$theme: #da729f;\n$bg: #f1f1f1;\n$scroll: #6e6666;\n// import fonts @googleFonts\n@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;900&display=swap');\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: $bg;\n  color: $theme;\n  font-family: 'Fira Sans', sans-serif;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  min-height: 100vh;\n}\nsmall { color: $themeBlue; }\n\na {\n  cursor: pointer;\n  text-decoration: none;\n}\n.hidden { display: none !important; }\n// container\n.container {\n  width: 80%;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n// header\nheader {\n  background-color: $theme;\n  color: white;\n\n  .header-nav {\n    display: flex;\n    align-items: center;\n    // first-nav-part\n    nav {\n      // logo\n      #logo {\n        font-size: 2.25rem;\n        font-weight: 600;\n      }\n      // mobile-menu\n      #hamberger {\n        display: none;\n        font-size: 2.25rem;\n      }\n    }\n    // ul#menu\n    ul {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      list-style: none;\n      padding-left: 0;\n      margin-left: auto;\n      gap: 0.85rem 1.75rem;\n      text-transform: capitalize;\n      font-size: 1.15rem;\n      // links\n      li {\n        a { color: white; }\n\n        &:hover {\n          & > a {\n            color: #d4fffb;\n          }\n        }\n      }\n    }\n  }\n}\n// homepage\nmain {\n  margin-bottom: 5vw;\n}\n\n.cards {\n  display: flex;\n  justify-content: center;\n  gap: 5vw;\n  flex-wrap: wrap;\n  margin-top: 5vw;\n}\n\n// options\n.question {\n  text-align: center;\n  color: $themeBlue;\n\n  .question-button {\n    background-color: $themeBlue;\n    color: #fff;\n    padding: 5px 10px;\n    border: none;\n    cursor: pointer;\n    box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.805);\n  }\n\n  .question-button:active {\n    box-shadow: 0 0.5px 0 rgba(0, 0, 0, 0.705);\n    transform: translateY(4px);\n  }\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n\n  .img-food {\n    cursor: pointer;\n    max-width: 25vw;\n    min-width: 25vw;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    transition: all 0.3s ease-in-out;\n  }\n\n  .img-food:hover {\n    transform: scale(1.1);\n  }\n\n  .food-info {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin-top: 10px;\n    color: $themeDark;\n\n    .food-name {\n      cursor: pointer;\n      margin-left: 0.5vw;\n      flex-wrap: nowrap;\n      max-width: 25vw;\n      min-width: 25vw;\n      width: 80%;\n    }\n\n    .love {\n      align-self: flex-end;\n      margin-right: 0.75vw;\n      margin-top: -4vw;\n      padding: 10px;\n      cursor: pointer;\n      font-size: x-large;\n      color: $theme;\n      transition: all 0.3s ease-in-out;\n    }\n\n    .love:hover {\n      transform: scale(1.3);\n      color: rgb(233, 54, 54);\n    }\n    // comments\n    .comment-box {\n      display: flex;\n      align-items: center;\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      min-height: 100vh;\n      background-color: rgba(0, 0, 0, 0.35);\n      z-index: 99;\n\n      .box-area {\n        display: flex;\n        width: calc(100% - 1rem);\n        max-width: 500px;\n        margin: 2rem auto;\n        flex-direction: column;\n        gap: 1rem;\n        background-color: white;\n        color: #3e3e3e;\n        padding: 1rem 0.5rem;\n        z-index: 999;\n        border-radius: 0.4rem;\n        overflow-y: scroll;\n        max-height: 70vh;\n\n        .btn-close {\n          display: inline-block;\n          margin-left: auto;\n          font-size: 1.5rem;\n          color: $theme;\n          margin-right: 1rem;\n        }\n\n        h3 { text-align: center; }\n\n        h3,\n        h4 {\n          margin: 1rem;\n        }\n\n        // img\n        img {\n          display: inline-block;\n          margin: 0.35rem auto;\n          width: calc(100% - 1rem);\n          object-fit: cover;\n        }\n\n        // comment-form\n        .comment-form {\n          display: flex;\n          flex-direction: column;\n          gap: 0.5rem;\n          padding: 0.5rem;\n\n          input,\n          textarea {\n            padding: 0.35rem;\n            outline: 0;\n          }\n\n          button[type=\"submit\"] {\n            display: inline-block;\n            text-transform: capitalize;\n            outline: 0;\n            border: 1px solid $theme;\n            padding: 0.35rem 0.85rem;\n            cursor: pointer;\n\n            &:hover {\n              background-color: $theme;\n              color: white;\n            }\n          }\n        }\n\n        .comments {\n          display: flex;\n          flex-direction: column;\n          gap: 1rem;\n          list-style: none;\n        }\n\n        // p\n        p {\n          margin: 1rem;\n          color: #6e6666;\n        }\n      }\n    }\n  }\n\n  .likes {\n    align-self: flex-end;\n    margin-top: -2vw;\n    margin-right: 0.5vw;\n    color: $themeDark;\n  }\n\n  .button {\n    width: fit-content;\n    padding: 5px 10px;\n    cursor: pointer;\n    box-shadow: 3px 3px 3px 1px $theme;\n    margin-top: 10px;\n    margin-left: 0.5vw;\n    transition: all 0.2s ease-in-out;\n    border-color: $theme;\n  }\n\n  .button:hover {\n    background-color: $theme;\n    color: #fff;\n    transform: scale(1.1);\n    border: none;\n    box-shadow: 3px 3px 3px 1px #bcb6b6;\n  }\n}\n// footer\nfooter {\n  border-top: 1px solid #da729f2a;\n  border-bottom: 1px solid #da729f2a;\n  background-color: #2e2d2d0f;\n  color: rgb(57, 56, 56);\n\n  .footer-text {\n    text-align: center;\n  }\n\n  .footer-name {\n    text-decoration: none;\n    color: $theme;\n  }\n\n  .love-created {\n    color: rgb(228, 40, 40);\n    font-size: 1.2em;\n  }\n}\n// RESPONSIVE CSS\n@media screen and (max-width: 767.9px) {\n  // Generics\n  .container { width: calc(100% - 1rem); }\n  // header-component\n  header {\n    .header-nav {\n      nav {\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        #hamberger { display: inline-block; }\n      }\n      #menu { display: none; }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
      <li><a href='#' data-page='home'>home</a></li>
      <li><a href='#' data-page='categories'>categories</a></li>
      <li><a href='#' data-page='search'>search meals</a></li>
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (comment, header) => {
  if (comment.length === 0) header.innerHTML = 'Comments (0)';
  else {
    header.innerHTML = `Comments (${comment.length})`;
  }
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsa0JBQWtCLG9CQUFvQixxQ0FBcUMsS0FBSyx1Q0FBdUMsNEJBQTRCLEtBQUssOEJBQThCLG9CQUFvQixLQUFLLEdBQUcsT0FBTyxrRkFBa0YsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLE1BQU0sTUFBTSxX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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsK0NBQStDO0FBQy9DLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2xOakMsaUVBQWU7QUFDZjtBQUNBO0FBQ0Esb0NBQW9DLGVBQWU7QUFDbkQ7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRjtBQUNBO0FBQ2tDOztBQUVkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKcEI7O0FBRW1EO0FBQ0E7QUFDSTs7QUFFdkQ7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBLEVBQUUsOERBQWUsZ0NBQWdDOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDhEQUFlLGdDQUFnQztBQUNqRDs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL2NvbXBvbmVudHMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vanMtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnRlci5qcyIsIndlYnBhY2s6Ly9qcy1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2pzLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvc2V0dXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgY29sb3I6ICNkYTcyOWY7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmEgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5zbWFsbCB7XFxuICBjb2xvcjogIzQxODNjNDtcXG59XFxuXFxuYSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXgtd2lkdGg6IDExNDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzI5ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgbmF2ICNsb2dvIHtcXG4gIGZvbnQtc2l6ZTogMi4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdiBuYXYgI2hhbWJlcmdlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZ2FwOiAwLjg1cmVtIDEuNzVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHVsIGxpIGEge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgdWwgbGk6aG92ZXIgPiBhIHtcXG4gIGNvbG9yOiAjZDRmZmZiO1xcbn1cXG5cXG5tYWluIHtcXG4gIG1hcmdpbi1ib3R0b206IDV2dztcXG59XFxuXFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXZ3O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogNXZ3O1xcbn1cXG5cXG4ucXVlc3Rpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM0MTgzYzQ7XFxufVxcbi5xdWVzdGlvbiAucXVlc3Rpb24tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTgzYzQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjgwNSk7XFxufVxcbi5xdWVzdGlvbiAucXVlc3Rpb24tYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiAwIDAuNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcXG59XFxuXFxuLmNhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jYXJkIC5pbWctZm9vZCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtd2lkdGg6IDI1dnc7XFxuICBtaW4td2lkdGg6IDI1dnc7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmNhcmQgLmltZy1mb29kOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogIzNlM2UzZTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuZm9vZC1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAwLjV2dztcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgbWluLXdpZHRoOiAyNXZ3O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAubG92ZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogMC43NXZ3O1xcbiAgbWFyZ2luLXRvcDogLTR2dztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICBjb2xvcjogI2RhNzI5ZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5sb3ZlOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIGNvbG9yOiByZ2IoMjMzLCA1NCwgNTQpO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiAjM2UzZTNlO1xcbiAgcGFkZGluZzogMXJlbSAwLjVyZW07XFxuICB6LWluZGV4OiA5OTk7XFxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmJ0bi1jbG9zZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6ICNkYTcyOWY7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBoMyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBoMyxcXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgaDQge1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgaW1nIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMC4zNXJlbSBhdXRvO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIGlucHV0LFxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIHRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDAuMzVyZW07XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uY2FyZCAuZm9vZC1pbmZvIC5jb21tZW50LWJveCAuYm94LWFyZWEgLmNvbW1lbnQtZm9ybSBidXR0b25bdHlwZT1zdWJtaXRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYTcyOWY7XFxuICBwYWRkaW5nOiAwLjM1cmVtIDAuODVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSAuY29tbWVudC1mb3JtIGJ1dHRvblt0eXBlPXN1Ym1pdF06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzI5ZjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNhcmQgLmZvb2QtaW5mbyAuY29tbWVudC1ib3ggLmJveC1hcmVhIC5jb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5jYXJkIC5mb29kLWluZm8gLmNvbW1lbnQtYm94IC5ib3gtYXJlYSBwIHtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGNvbG9yOiAjNmU2NjY2O1xcbn1cXG4uY2FyZCAubGlrZXMge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiAtMnZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjV2dztcXG4gIGNvbG9yOiAjM2UzZTNlO1xcbn1cXG4uY2FyZCAuYnV0dG9uIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICNkYTcyOWY7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICBib3JkZXItY29sb3I6ICNkYTcyOWY7XFxufVxcbi5jYXJkIC5idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhNzI5ZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICNiY2I2YjY7XFxufVxcblxcbmZvb3RlciB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTgsIDExNCwgMTU5LCAwLjE2NDcwNTg4MjQpO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjE4LCAxMTQsIDE1OSwgMC4xNjQ3MDU4ODI0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDYsIDQ1LCA0NSwgMC4wNTg4MjM1Mjk0KTtcXG4gIGNvbG9yOiByZ2IoNTcsIDU2LCA1Nik7XFxufVxcbmZvb3RlciAuZm9vdGVyLXRleHQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5mb290ZXIgLmZvb3Rlci1uYW1lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZGE3MjlmO1xcbn1cXG5mb290ZXIgLmxvdmUtY3JlYXRlZCB7XFxuICBjb2xvcjogcmdiKDIyOCwgNDAsIDQwKTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICB9XFxuICBoZWFkZXIgLmhlYWRlci1uYXYgbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiBuYXYgI2hhbWJlcmdlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIH1cXG4gIGhlYWRlciAuaGVhZGVyLW5hdiAjbWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFTQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBUkc7RUFTSCxjQVZNO0VBV04sb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVBGOztBQVNBO0VBQVEsY0FwQkk7QUFlWjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQUpGOztBQU1BO0VBQVUsd0JBQUE7QUFGVjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHlCQWpDTTtFQWtDTixZQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBSFI7QUFNTTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQUpSO0FBUUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBTk47QUFTUTtFQUFJLFlBQUE7QUFOWjtBQVNVO0VBQ0UsY0FBQTtBQVBaOztBQWVBO0VBQ0Usa0JBQUE7QUFaRjs7QUFlQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsY0E5RlU7QUFpRlo7QUFlRTtFQUNFLHlCQWpHUTtFQWtHUixXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FBYko7QUFnQkU7RUFDRSwwQ0FBQTtFQUNBLDBCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBZkY7QUFpQkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0FBZko7QUFrQkU7RUFDRSxxQkFBQTtBQWhCSjtBQW1CRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0F0SVE7QUFxSFo7QUFtQkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWpCTjtBQW9CSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXJKRTtFQXNKRixnQ0FBQTtBQWxCTjtBQXFCSTtFQUNFLHFCQUFBO0VBQ0EsdUJBQUE7QUFuQk47QUFzQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFdBQUE7QUFwQk47QUFzQk07RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcEJSO0FBc0JRO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0E1TEY7RUE2TEUsa0JBQUE7QUFwQlY7QUF1QlE7RUFBSyxrQkFBQTtBQXBCYjtBQXNCUTs7RUFFRSxZQUFBO0FBcEJWO0FBd0JRO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUF0QlY7QUEwQlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXhCVjtBQTBCVTs7RUFFRSxnQkFBQTtFQUNBLFVBQUE7QUF4Qlo7QUEyQlU7RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBekJaO0FBMkJZO0VBQ0UseUJBck9OO0VBc09NLFlBQUE7QUF6QmQ7QUE4QlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUE1QlY7QUFnQ1E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQTlCVjtBQW9DRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBbFFRO0FBZ09aO0FBcUNFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQTFRSTtBQXVPUjtBQXNDRTtFQUNFLHlCQTlRSTtFQStRSixXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUFwQ0o7O0FBd0NBO0VBQ0UsdURBQUE7RUFDQSwwREFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7QUFyQ0Y7QUF1Q0U7RUFDRSxrQkFBQTtBQXJDSjtBQXdDRTtFQUNFLHFCQUFBO0VBQ0EsY0FsU0k7QUE0UFI7QUF5Q0U7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FBdkNKOztBQTJDQTtFQUVFO0lBQWEsd0JBQUE7RUF4Q2I7RUE0Q0k7SUFDRSxXQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0VBMUNOO0VBMkNNO0lBQWEscUJBQUE7RUF4Q25CO0VBMENJO0lBQVEsYUFBQTtFQXZDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiR0aGVtZURhcms6ICMzZTNlM2U7XFxuJHRoZW1lQmx1ZTogIzQxODNjNDtcXG4vLyAkdGhlbWU6ICNlNjU3M2U7XFxuJHRoZW1lOiAjZGE3MjlmO1xcbiRiZzogI2YxZjFmMTtcXG4kc2Nyb2xsOiAjNmU2NjY2O1xcbi8vIGltcG9ydCBmb250cyBAZ29vZ2xlRm9udHNcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK1NhbnM6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XFxuICBjb2xvcjogJHRoZW1lO1xcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuc21hbGwgeyBjb2xvcjogJHRoZW1lQmx1ZTsgfVxcblxcbmEge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uaGlkZGVuIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuLy8gY29udGFpbmVyXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODAlO1xcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuLy8gaGVhZGVyXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIC5oZWFkZXItbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLy8gZmlyc3QtbmF2LXBhcnRcXG4gICAgbmF2IHtcXG4gICAgICAvLyBsb2dvXFxuICAgICAgI2xvZ28ge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICB9XFxuICAgICAgLy8gbW9iaWxlLW1lbnVcXG4gICAgICAjaGFtYmVyZ2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDIuMjVyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICAgIC8vIHVsI21lbnVcXG4gICAgdWwge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIGdhcDogMC44NXJlbSAxLjc1cmVtO1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcXG4gICAgICAvLyBsaW5rc1xcbiAgICAgIGxpIHtcXG4gICAgICAgIGEgeyBjb2xvcjogd2hpdGU7IH1cXG5cXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAmID4gYSB7XFxuICAgICAgICAgICAgY29sb3I6ICNkNGZmZmI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuLy8gaG9tZXBhZ2VcXG5tYWluIHtcXG4gIG1hcmdpbi1ib3R0b206IDV2dztcXG59XFxuXFxuLmNhcmRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNXZ3O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luLXRvcDogNXZ3O1xcbn1cXG5cXG4vLyBvcHRpb25zXFxuLnF1ZXN0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAkdGhlbWVCbHVlO1xcblxcbiAgLnF1ZXN0aW9uLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZUJsdWU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDJweCAzcHggMnB4IHJnYmEoMCwgMCwgMCwgMC44MDUpO1xcbiAgfVxcblxcbiAgLnF1ZXN0aW9uLWJ1dHRvbjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAwIDAuNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjcwNSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcbiAgfVxcbn1cXG5cXG4uY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gIC5pbWctZm9vZCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcbiAgICBtaW4td2lkdGg6IDI1dnc7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICAuaW1nLWZvb2Q6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAuZm9vZC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiAkdGhlbWVEYXJrO1xcblxcbiAgICAuZm9vZC1uYW1lIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICAgIG1heC13aWR0aDogMjV2dztcXG4gICAgICBtaW4td2lkdGg6IDI1dnc7XFxuICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcblxcbiAgICAubG92ZSB7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1dnc7XFxuICAgICAgbWFyZ2luLXRvcDogLTR2dztcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgICAgY29sb3I6ICR0aGVtZTtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAubG92ZTpob3ZlciB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgICAgIGNvbG9yOiByZ2IoMjMzLCA1NCwgNTQpO1xcbiAgICB9XFxuICAgIC8vIGNvbW1lbnRzXFxuICAgIC5jb21tZW50LWJveCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xcbiAgICAgIHotaW5kZXg6IDk5O1xcblxcbiAgICAgIC5ib3gtYXJlYSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pO1xcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgY29sb3I6ICMzZTNlM2U7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG4gICAgICAgIHotaW5kZXg6IDk5OTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNHJlbTtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuXFxuICAgICAgICAuYnRuLWNsb3NlIHtcXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgIGNvbG9yOiAkdGhlbWU7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGgzIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuICAgICAgICBoMyxcXG4gICAgICAgIGg0IHtcXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLy8gaW1nXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIG1hcmdpbjogMC4zNXJlbSBhdXRvO1xcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLy8gY29tbWVudC1mb3JtXFxuICAgICAgICAuY29tbWVudC1mb3JtIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZ2FwOiAwLjVyZW07XFxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG5cXG4gICAgICAgICAgaW5wdXQsXFxuICAgICAgICAgIHRleHRhcmVhIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM1cmVtO1xcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWU7XFxuICAgICAgICAgICAgcGFkZGluZzogMC4zNXJlbSAwLjg1cmVtO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZTtcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jb21tZW50cyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGdhcDogMXJlbTtcXG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC8vIHBcXG4gICAgICAgIHAge1xcbiAgICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgICAgICAgIGNvbG9yOiAjNmU2NjY2O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmxpa2VzIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIG1hcmdpbi10b3A6IC0ydnc7XFxuICAgIG1hcmdpbi1yaWdodDogMC41dnc7XFxuICAgIGNvbG9yOiAkdGhlbWVEYXJrO1xcbiAgfVxcblxcbiAgLmJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggMXB4ICR0aGVtZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLWNvbG9yOiAkdGhlbWU7XFxuICB9XFxuXFxuICAuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDFweCAjYmNiNmI2O1xcbiAgfVxcbn1cXG4vLyBmb290ZXJcXG5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkYTcyOWYyYTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGE3MjlmMmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUyZDJkMGY7XFxuICBjb2xvcjogcmdiKDU3LCA1NiwgNTYpO1xcblxcbiAgLmZvb3Rlci10ZXh0IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmZvb3Rlci1uYW1lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogJHRoZW1lO1xcbiAgfVxcblxcbiAgLmxvdmUtY3JlYXRlZCB7XFxuICAgIGNvbG9yOiByZ2IoMjI4LCA0MCwgNDApO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgfVxcbn1cXG4vLyBSRVNQT05TSVZFIENTU1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45cHgpIHtcXG4gIC8vIEdlbmVyaWNzXFxuICAuY29udGFpbmVyIHsgd2lkdGg6IGNhbGMoMTAwJSAtIDFyZW0pOyB9XFxuICAvLyBoZWFkZXItY29tcG9uZW50XFxuICBoZWFkZXIge1xcbiAgICAuaGVhZGVyLW5hdiB7XFxuICAgICAgbmF2IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICNoYW1iZXJnZXIgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG4gICAgICB9XFxuICAgICAgI21lbnUgeyBkaXNwbGF5OiBub25lOyB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnOyAvLyBzdHlsZXMgLT4gY3NzIG9yIHNjc3NcbmltcG9ydCB7IHNldHVwQXBwIH0gZnJvbSAnLi9tb2R1bGVzJztcblxuc2V0dXBBcHAoKTsgLy8gbW91bnRpbmcgb3VyIGFwcFxuIiwiY29uc3QgZm9vdGVyQ29tcG9uZW50ID0gKHBhcmVudEVsZW1lbnQpID0+IHtcbiAgY29uc3QgbWFya3VwcyA9IGBcbiAgICA8aDUgY2xhc3M9XCJmb290ZXItdGV4dFwiPkNyZWF0ZWQgd2l0aCA8c3BhbiBjbGFzcz1cImxvdmUtY3JlYXRlZFwiPiZoZWFydHM7PC9zcGFuPiBieSBcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmlja3J5aW1hblwiIGNsYXNzPVwiZm9vdGVyLW5hbWVcIj5GaWNrcnkgQmlsIEltYW48L2E+IFxuICAgICAgJiYgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYWhhYnVieDdcIiBjbGFzcz1cImZvb3Rlci1uYW1lXCI+TWFoYWJ1YjwvYT5cbiAgICAgIHVuZGVyIENDIExpY2Vuc2UuXG4gICAgPC9oNT5cbiAgYDtcblxuICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGAke21hcmt1cHN9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlckNvbXBvbmVudDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5jb25zdCBoZWFkZXJDb21wb25lbnQgPSAocGFyZW50RWxlbWVudCkgPT4ge1xuICBjb25zdCBtYXJrdXBzID0gYFxuICA8bmF2IGNsYXNzPVwiY29udGFpbmVyIGhlYWRlci1uYXZcIj5cbiAgICA8bmF2PlxuICAgICAgPHNwYW4gaWQ9J2xvZ28nPmZvb2QgaG9iYmllcy48L3NwYW4+XG4gICAgICA8c3BhbiBpZD0naGFtYmVyZ2VyJz48aSBjbGFzcz1cInJpLW1lbnUtMy1saW5lXCI+PC9pPjwvc3Bhbj5cbiAgICA8L25hdj5cbiAgICA8dWwgaWQ9J21lbnUnPlxuICAgICAgPGxpPjxhIGhyZWY9JyMnIGRhdGEtcGFnZT0naG9tZSc+aG9tZTwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9JyMnIGRhdGEtcGFnZT0nY2F0ZWdvcmllcyc+Y2F0ZWdvcmllczwvYT48L2xpPlxuICAgICAgPGxpPjxhIGhyZWY9JyMnIGRhdGEtcGFnZT0nc2VhcmNoJz5zZWFyY2ggbWVhbHM8L2E+PC9saT5cbiAgICA8L3VsPlxuICA8L25hdj5cbiAgYDtcblxuICAvLyByZXR1cm4vRE9NLXVwZGF0ZVxuICBwYXJlbnRFbGVtZW50LmlubmVySFRNTCA9IGAke21hcmt1cHN9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckNvbXBvbmVudDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGFycmF5LWNhbGxiYWNrLXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xuXG5pbXBvcnQgY29tbWVudENvdW50ZXIgZnJvbSAnLi4vbW9kdWxlcy9jb21tZW50Q291bnRlcic7XG5cbmNvbnN0IGhvbWVwYWdlQ29tcG9uZW50ID0gYXN5bmMgKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgbWVhbHMgPSBbXTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgY29uc3QgaXNMb2NhbFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdNRUFMUycpKTtcblxuICBjb25zdCBxdWVzdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdGlvbi1idXR0b24nKTtcbiAgcXVlc3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ01FQUxTJyk7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBjb25zdCBnZXRSZXNwb25zZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZWFsQVBJID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwJztcblxuICAgIGlmIChpc0xvY2FsU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIGlzTG9jYWxTdG9yYWdlO1xuICAgIH1cblxuICAgIHdoaWxlIChjb3VudCA8IDE1KSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1lYWxBUEksXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBtZWFscy5wdXNoKGRhdGEubWVhbHMpO1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01FQUxTJywgSlNPTi5zdHJpbmdpZnkobWVhbHMpKTtcbiAgICByZXR1cm4gbWVhbHM7XG4gIH07XG5cbiAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoaXRlbUlkKSA9PiB7XG4gICAgbGV0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTWNJc1pPZjNFUDJOUGNKSWZpQnMvY29tbWVudHM/aXRlbV9pZD0ke2l0ZW1JZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgfSxcbiAgICApO1xuXG4gICAgY29tbWVudHMgPSBhd2FpdCBjb21tZW50cy5qc29uKCk7XG4gICAgcmV0dXJuIGNvbW1lbnRzLmVycm9yID8gW10gOiBjb21tZW50cztcbiAgfTtcblxuICBnZXRSZXNwb25zZSgpLnRoZW4oKG1lYWxzKSA9PiB7XG4gICAgY29uc3QgTWVhbHNEYXRhID0gbWVhbHM7XG4gICAgTWVhbHNEYXRhLm1hcCgobWVhbCkgPT4ge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke21lYWxbMF0uc3RyTWVhbFRodW1ifVwiIGNsYXNzPVwiaW1nLWZvb2RcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtaW5mb1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9vZC1uYW1lXCI+JHttZWFsWzBdLnN0ck1lYWx9PC9wPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIiB2YWx1ZT1cIkNvbW1lbnRzXCIgZGF0YS1pdGVtPVwiJHttZWFsWzBdLmlkTWVhbH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudC1ib3ggaGlkZGVuXCIgZGF0YS1pZD1cIiR7bWVhbFswXS5pZE1lYWx9XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWFyZWFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnRuLWNsb3NlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktY2xvc2UtY2lyY2xlLWxpbmVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbFswXS5zdHJNZWFsVGh1bWJ9XCIgYWx0PVwiJHttZWFsWzBdLmlkTWVhbH1cIiAvPlxuICAgICAgICAgICAgPGgzPiR7bWVhbFswXS5zdHJNZWFsfTwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHN0cm9uZz4ke21lYWxbMF0uc3RyQ2F0ZWdvcnl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwicmktZ2l0LWNvbW1pdC1saW5lXCI+PC9pPlxuICAgICAgICAgICAgICA8c3Ryb25nPiR7bWVhbFswXS5zdHJBcmVhfTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGg0PlRvcCAzIEluZ3JlZGllbnRzPC9oND5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Bhbj4ke21lYWxbMF0uc3RySW5ncmVkaWVudDF9PC9zcGFuPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cInJpLWdpdC1jb21taXQtbGluZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+JHttZWFsWzBdLnN0ckluZ3JlZGllbnQyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJyaS1naXQtY29tbWl0LWxpbmVcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPiR7bWVhbFswXS5zdHJJbmdyZWRpZW50M308L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aDQ+QWRkIGEgY29tbWVudHM8L2g0PlxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJjb21tZW50LWZvcm1cIiBkYXRhLWlkPSR7bWVhbFswXS5pZE1lYWx9PlxuICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZS5cIiAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImNvbW1lbnRcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiWW91ciBpbnNpZ2h0cy5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5hZGQgY29tbWVudDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiY29tbWVudC1jb3VudFwiPjwvaDQ+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJjb21tZW50c1wiIGRhdGEtaWQ9JHttZWFsWzBdLmlkTWVhbH0+XG4gICAgICAgICAgICAgIDxsaT4yMDIzLTA0LTE5IE1haGFidWI6IFRoaXMgaXMgZGVsaWNpb3VzITwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPHNtYWxsPnNvdXJjZTogJHttZWFsWzBdLnN0clNvdXJjZX08L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJsb3ZlXCIgZGF0YS1pZD1cIiR7bWVhbFswXS5pZE1lYWx9XCI+JiMxMDA4NDs8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzcz1cImxpa2VzXCIgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXMtY291bnRlclwiIGRhdGEtaWQ9XCIke21lYWxbMF0uaWRNZWFsfVwiPjA8L3NwYW4+XG4gICAgICAgICAgbGlrZXNcbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICBgO1xuICAgIH0pO1xuICB9KS50aGVuKGFzeW5jICgpID0+IHtcbiAgICAvLyBmb3IgY29tbWVudHMgW2RldGFpbHMgcG9wLXVwXVxuICAgIGNvbnN0IGNvbW1lbnRCdG5zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uJyk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiByZW5kZXJDb21tZW50KGVsZW1lbnQpIHtcbiAgICAgIC8vIGZvcm1cbiAgICAgIGxldCBsaXN0ID0gYXdhaXQgZ2V0Q29tbWVudHMoZWxlbWVudC5kYXRhc2V0LmlkKTtcblxuICAgICAgYXN5bmMgZnVuY3Rpb24gcmVuZGVyQ29tbWVudHMoKSB7XG4gICAgICAgIC8vIGNvbW1lbnQtbGlzdFxuICAgICAgICBsaXN0ID0gYXdhaXQgZ2V0Q29tbWVudHMoZWxlbWVudC5kYXRhc2V0LmlkKTtcbiAgICAgICAgY29uc3QgY29tbWVudExpc3QgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcigndWwuY29tbWVudHMnKTtcbiAgICAgICAgLy8gY29uc3QgY29tbWVudHMgPSBjb21tZW50TGlzdC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvdW50ZXI9XCJjb21tZW50c1wiXScpO1xuICAgICAgICBjb21tZW50TGlzdC5pbm5lckhUTUwgPSAnJzsgLy8gcmVzZXQtZmlyc3RcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpc3QuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgICAgY29tbWVudExpc3QuaW5uZXJIVE1MICs9IGA8bGk+PGk+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9pPiA8Yj4ke2NvbW1lbnQudXNlcm5hbWV9PC9iPjogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvdW50SGVhZCA9IGVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoNC5jb21tZW50LWNvdW50Jyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50SGVhZCk7XG4gICAgICAgIGF3YWl0IGNvbW1lbnRDb3VudGVyKGxpc3QsIGNvdW50SGVhZCk7XG4gICAgICB9XG4gICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGb3JtKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBuZXdDb21tZW50T2JqID0ge1xuICAgICAgICAgIHVzZXJuYW1lOiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUsXG4gICAgICAgICAgY29tbWVudDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCBmZXRjaChcbiAgICAgICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTWNJc1pPZjNFUDJOUGNKSWZpQnMvY29tbWVudHMnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyAuLi5uZXdDb21tZW50T2JqLCBpdGVtX2lkOiBgJHtpdGVtSWR9YCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAvLyBmaWVsZHMgcmVzZXRcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWUgPSAnJztcbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPSAnJztcbiAgICAgICAgICByZW5kZXJDb21tZW50cygpOyAvLyByZS1yZW5kZXIgY29tbWVudCBsaXN0XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlckNvbW1lbnRzKCk7IC8vIGluaXRpYWwgcmVuZGVyXG5cbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGFuZGxlRm9ybShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbW1lbnRCdG5zLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1ib3gnKS5mb3JFYWNoKChib3gpID0+IGJveC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJveCcpLmZvckVhY2goYXN5bmMgKGJveCkgPT4gYm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHJlbmRlckNvbW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2J0bi5kYXRhc2V0Lml0ZW19XCJdYCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtidG4uZGF0YXNldC5pdGVtfVwiXSAuYnRuLWNsb3NlYCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtidG4uZGF0YXNldC5pdGVtfVwiXWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBnZXQgbGlrZXMtY291bnRlclxuICAgIGNvbnN0IGxpa2VzQVBJID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2xpa2VzJylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xuXG4gICAgY29uc3QgbGlrZXNDb3VudGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlrZXMtY291bnRlcicpO1xuICAgIGxpa2VzQ291bnRlci5mb3JFYWNoKChsaWtlQ291bnRlcikgPT4ge1xuICAgICAgY29uc3QgbGlrZXNJZCA9IGxpa2VDb3VudGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgY29uc3QgZWxlbWVudCA9IGxpa2VDb3VudGVyO1xuICAgICAgbGlrZXNBUEkuZm9yRWFjaCgobGlrZUFQSSkgPT4ge1xuICAgICAgICBpZiAobGlrZXNJZCA9PT0gbGlrZUFQSS5pdGVtX2lkKSB7XG4gICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBsaWtlQVBJLmxpa2VzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGFkZCBvciBwb3N0IGxpa2VzLWNvdW50ZXJcbiAgICBjb25zdCBsaWtlc0J1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxvdmUnKTtcblxuICAgIGxpa2VzQnV0dG9uLmZvckVhY2goKGxpa2VCdXR0b24pID0+IHtcbiAgICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRDb3VudGVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5uZXh0U2libGluZy5jaGlsZHJlblswXS5pbm5lclRleHQ7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQubmV4dFNpYmxpbmcubmV4dFNpYmxpbmcuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gKCt0YXJnZXRDb3VudGVyKSArIDE7XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL01jSXNaT2YzRVAyTlBjSklmaUJzL2xpa2VzJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGl0ZW1faWQ6IGxpa2VCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyksXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVwYWdlQ29tcG9uZW50O1xuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGNvbW1lbnQsIGhlYWRlcikgPT4ge1xuICBpZiAoY29tbWVudC5sZW5ndGggPT09IDApIGhlYWRlci5pbm5lckhUTUwgPSAnQ29tbWVudHMgKDApJztcbiAgZWxzZSB7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IGBDb21tZW50cyAoJHtjb21tZW50Lmxlbmd0aH0pYDtcbiAgfVxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgc2V0dXBBcHAgZnJvbSAnLi9zZXR1cC5qcyc7XG5cbmV4cG9ydCB7IHNldHVwQXBwIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuXG5pbXBvcnQgaGVhZGVyQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBmb290ZXJDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xuaW1wb3J0IGhvbWVwYWdlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZXBhZ2UnO1xuXG5jb25zdCByZW5kZXJBcHAgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gIC8vIGhlYWRlci1pbml0XG4gIGJvZHkuaW5zZXJ0QmVmb3JlKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpO1xuICBoZWFkZXJDb21wb25lbnQoYm9keS5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSk7IC8vIGhlYWRlci1jb21wb25lbnQtcmVuZGVyXG5cbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbXMnKTtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2FyZHMuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgYXdhaXQgaG9tZXBhZ2VDb21wb25lbnQoY2FyZHMpO1xuICBjYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkcyk7XG4gIC8vIGNvbnNvbGUubG9nKGNhcmRzLmlubmVySFRNTCk7XG4gIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiBjb25zb2xlLmxvZygnTE9BREVELi4uIScpKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJykpO1xuICBmb290ZXJDb21wb25lbnQoYm9keS5xdWVyeVNlbGVjdG9yKCdmb290ZXInKSk7IC8vIGZvb3Rlci1jb21wb25lbnQtcmVuZGVyXG59O1xuXG5jb25zdCBzZXR1cEFwcCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcmVuZGVyQXBwKCk7IC8vIHJlbmRlciBmaXJzdC1pbml0aWFsIERPTVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0dXBBcHA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=