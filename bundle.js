/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-clr: #5eb1bf;
  --brighter-clr: #cdedf6;
  --darker-clr: #042a2b;
  --neutral-clr: #deb49e;
  --flashy-clr: #ef7b45;
  --flashy-secondry: #d84727;
  --big-text-size: 1.8rem;
  --header-text-size: 3rem;
  --normal-text-size: 1.3rem;

  background-color: var(--darker-clr);
  position: relative;
  font-size: 16px;
  flex-direction: column;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

:root > * {
  font-size: var(--normal-text-size);
  color: var(--brighter-clr);
}
.header {
  position: absolute;
  top: 10px;
}
.info-box {
  height: 5vh;
  display: flex;
  justify-content: center;
  font-size: var(--big-text-size);
}
.playground {
  display: flex;
  justify-content: space-around;
}
.board-container {
  width: 20vw;
  height: 20vw;
  display: grid;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  background-color: var(--primary-clr);
  box-shadow: 5px 5px 30px black;
}
.cell {
  border: 1px solid var(--darker-clr);
  box-sizing: border-box;
}
.cell.ship {
  background-color: rgb(68, 68, 68);
}
.cell.attacked {
  background-color: aqua;
}
.cell.hit {
  background-color: red;
}
.cell.hit.sunk {
  background-color: black;
}

.error-div.invisible {
  display: none;
}
.error-div {
  display: flex;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid var(--flashy-secondry);
  box-shadow: 20px 20px 20px black;
  background-color: var(--flashy-clr);
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  padding: 20px 20px;
}
.error-div p {
  font-size: 2rem;
}
.error-div button {
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--neutral-clr);
  transition: all 0.2s;
}
.error-div button:hover {
  background-color: var(--brighter-clr);
}
.place-ship-cont {
  font-size: 1rem;
  padding: 15px 30px;
  height: 30vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  background-color: var(--primary-clr);
  color: var(--darker-clr);
  border-radius: 5px;
  align-self: center;
}
.place-ship-cont.hidden {
  display: none;
}
.length-direction-cont {
  display: flex;
  gap: 40px;
}
.place-ship-cont input,
.place-ship-cont select {
  font-size: 1rem;
  width: 60px;
  box-sizing: border-box;
  height: 30px;
  background-color: var(--darker-clr);
  color: var(--brighter-clr);
  border: none;
  border-radius: 5px;
}
.place-ship-cont button {
  font-size: 1rem;
  border: none;
  align-self: center;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: var(--darker-clr);
  color: var(--brighter-clr);
  transition: all 0.2s;
}
.place-ship-cont button:hover {
  box-shadow: 5px 5px 10px black;
}
.start-game-btn {
  background-color: var(--neutral-clr);
  border: none;
  color: var(--darker-clr);
  padding: 20px 40px;
  border-radius: 5px;
  align-self: center;
  font-size: 1rem;
  transition: all 0.2s;
}
.start-game-btn.hidden {
  display: none;
}
.start-game-btn:hover {
  background-color: var(--flashy-clr);
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;EACrB,0BAA0B;EAC1B,uBAAuB;EACvB,wBAAwB;EACxB,0BAA0B;;EAE1B,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,kCAAkC;EAClC,0BAA0B;AAC5B;AACA;EACE,kBAAkB;EAClB,SAAS;AACX;AACA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mCAAmC;EACnC,sCAAsC;EACtC,oCAAoC;EACpC,8BAA8B;AAChC;AACA;EACE,mCAAmC;EACnC,sBAAsB;AACxB;AACA;EACE,iCAAiC;AACnC;AACA;EACE,sBAAsB;AACxB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,wCAAwC;EACxC,gCAAgC;EAChC,mCAAmC;EACnC,mBAAmB;EACnB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,oCAAoC;EACpC,oBAAoB;AACtB;AACA;EACE,qCAAqC;AACvC;AACA;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,oCAAoC;EACpC,wBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;;EAEE,eAAe;EACf,WAAW;EACX,sBAAsB;EACtB,YAAY;EACZ,mCAAmC;EACnC,0BAA0B;EAC1B,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,mCAAmC;EACnC,0BAA0B;EAC1B,oBAAoB;AACtB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,oCAAoC;EACpC,YAAY;EACZ,wBAAwB;EACxB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;AACA;EACE,aAAa;AACf;AACA;EACE,mCAAmC;AACrC","sourcesContent":[":root {\n  --primary-clr: #5eb1bf;\n  --brighter-clr: #cdedf6;\n  --darker-clr: #042a2b;\n  --neutral-clr: #deb49e;\n  --flashy-clr: #ef7b45;\n  --flashy-secondry: #d84727;\n  --big-text-size: 1.8rem;\n  --header-text-size: 3rem;\n  --normal-text-size: 1.3rem;\n\n  background-color: var(--darker-clr);\n  position: relative;\n  font-size: 16px;\n  flex-direction: column;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n:root > * {\n  font-size: var(--normal-text-size);\n  color: var(--brighter-clr);\n}\n.header {\n  position: absolute;\n  top: 10px;\n}\n.info-box {\n  height: 5vh;\n  display: flex;\n  justify-content: center;\n  font-size: var(--big-text-size);\n}\n.playground {\n  display: flex;\n  justify-content: space-around;\n}\n.board-container {\n  width: 20vw;\n  height: 20vw;\n  display: grid;\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-columns: repeat(10, 1fr);\n  background-color: var(--primary-clr);\n  box-shadow: 5px 5px 30px black;\n}\n.cell {\n  border: 1px solid var(--darker-clr);\n  box-sizing: border-box;\n}\n.cell.ship {\n  background-color: rgb(68, 68, 68);\n}\n.cell.attacked {\n  background-color: aqua;\n}\n.cell.hit {\n  background-color: red;\n}\n.cell.hit.sunk {\n  background-color: black;\n}\n\n.error-div.invisible {\n  display: none;\n}\n.error-div {\n  display: flex;\n  width: 50%;\n  height: 50%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 5px solid var(--flashy-secondry);\n  box-shadow: 20px 20px 20px black;\n  background-color: var(--flashy-clr);\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n  border-radius: 5px;\n  padding: 20px 20px;\n}\n.error-div p {\n  font-size: 2rem;\n}\n.error-div button {\n  padding: 15px 30px;\n  border: none;\n  border-radius: 5px;\n  background-color: var(--neutral-clr);\n  transition: all 0.2s;\n}\n.error-div button:hover {\n  background-color: var(--brighter-clr);\n}\n.place-ship-cont {\n  font-size: 1rem;\n  padding: 15px 30px;\n  height: 30vh;\n  width: 50vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: start;\n  background-color: var(--primary-clr);\n  color: var(--darker-clr);\n  border-radius: 5px;\n  align-self: center;\n}\n.place-ship-cont.hidden {\n  display: none;\n}\n.length-direction-cont {\n  display: flex;\n  gap: 40px;\n}\n.place-ship-cont input,\n.place-ship-cont select {\n  font-size: 1rem;\n  width: 60px;\n  box-sizing: border-box;\n  height: 30px;\n  background-color: var(--darker-clr);\n  color: var(--brighter-clr);\n  border: none;\n  border-radius: 5px;\n}\n.place-ship-cont button {\n  font-size: 1rem;\n  border: none;\n  align-self: center;\n  padding: 15px 30px;\n  border-radius: 5px;\n  background-color: var(--darker-clr);\n  color: var(--brighter-clr);\n  transition: all 0.2s;\n}\n.place-ship-cont button:hover {\n  box-shadow: 5px 5px 10px black;\n}\n.start-game-btn {\n  background-color: var(--neutral-clr);\n  border: none;\n  color: var(--darker-clr);\n  padding: 20px 40px;\n  border-radius: 5px;\n  align-self: center;\n  font-size: 1rem;\n  transition: all 0.2s;\n}\n.start-game-btn.hidden {\n  display: none;\n}\n.start-game-btn:hover {\n  background-color: var(--flashy-clr);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/Gameboard/gameboard.js":
/*!********************************************!*\
  !*** ./src/modules/Gameboard/gameboard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoard: () => (/* binding */ GameBoard)
/* harmony export */ });
/* harmony import */ var _Ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship/ship */ "./src/modules/Ship/ship.js");

class GameBoard {
  #ships = [];
  #missedCords = [];
  #hittedCords = [];
  // for attacking phase:
  #horizontalAttackQueue = [];
  #verticalAttackQueue = [];
  #attackDirection = null;
  // 0: nix;  1: hit
  #attackComboState = 0;
  shipLengths = [2, 3, 3, 4, 5];
  addShip(ship) {
    if (this.checkShipCorrectnes(ship)) {
      this.#ships.push(ship);
      return true;
    }
    return false;
  }
  // returns null: wrong input, 0: miss, 1: hit, 2: shipSunk, 3: flotte sunk
  receiveAttack(cords) {
    if (!this.areValidAttackCords(cords)) {
      return null;
    }
    for (let i = 0; i < this.#ships.length; i++) {
      const ship = this.#ships[i];
      const hit = ship.cords.some((c) => {
        return c[0] === cords[0] && c[1] === cords[1];
      });
      if (hit) {
        ship.hit();
        this.#hittedCords.push(cords);
        if (ship.isSunk()) {
          if (this.fleetSunk()) {
            return 3;
          }
          return 2;
        }
        return 1;
      }
    }
    this.#missedCords.push(cords);
    return 0;
  }
  checkShipCorrectnes(ship) {
    if (ship.length > 5 || ship.length < 2) {
      return false;
    }
    for (let i = 0; i < ship.cords.length; i++) {
      if (
        ship.cords[i][0] > 9 ||
        ship.cords[i][1] > 9 ||
        ship.cords[i][0] < 0 ||
        ship.cords[i][1] < 0
      ) {
        return false;
      }
    }

    for (let i = 0; i < this.#ships.length; i++) {
      const s = this.#ships[i];
      const cordsExist = s.cords.some((c) => {
        for (let y = 0; y < ship.cords.length; y++) {
          return c[0] === ship.cords[y][0] && c[1] === ship.cords[y][1];
        }
      });
      if (cordsExist) {
        return false;
      }
    }

    return true;
  }
  getMissedCords() {
    return this.#missedCords;
  }
  getHittedCords() {
    return this.#hittedCords;
  }
  fleetSunk() {
    return !this.#ships.some((ship) => !ship.isSunk());
  }
  getShips() {
    return this.#ships;
  }
  get shipsQuantity() {
    return this.#ships.length;
  }
  static randomShipInfo() {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let dir = ['horizontal', 'vertical'];
    return { xy: [x, y], direction: dir[Math.floor(Math.random() * 2)] };
  }
  addRandomShips() {
    let isAdded = false;
    let i = 0;
    while (this.shipsQuantity < 5) {
      while (!isAdded) {
        let info = GameBoard.randomShipInfo();
        info.length = this.shipLengths[i];
        let cords = _Ship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship.calcCords(info);
        isAdded = this.addShip(new _Ship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(info.length, cords));
      }
      isAdded = false;
      i++;
    }
  }
  setPotentialTargets([x, y]) {
    const potentialTargets = [
      [x + 1, y], // Right
      [x - 1, y], // Left
      [x, y + 1], // Down
      [x, y - 1], // Up
    ];
    for (let i = 0; i < 2; i++) {
      const element = potentialTargets[i];
      if (this.areValidAttackCords(element)) {
        this.#horizontalAttackQueue.push(element);
      }
    }
    for (let i = 2; i < 4; i++) {
      const element = potentialTargets[i];
      if (this.areValidAttackCords(element)) {
        this.#verticalAttackQueue.push(element);
      }
    }
  }
  aiAttack() {
    let attack;
    let direction = null;
    if (
      this.#horizontalAttackQueue.length > 0 ||
      this.#verticalAttackQueue.length > 0
    ) {
      if (this.#attackDirection === 'vertical') {
        attack = this.#verticalAttackQueue.shift();
        direction = 'vertical';
      } else if (this.#attackDirection === 'horizontal') {
        attack = this.#horizontalAttackQueue.shift();
        direction = 'horizontal';
      } else {
        // case, where we have hit the ship, but don't yet know the attacking direction
        let hor = this.#horizontalAttackQueue.shift();
        if (hor) {
          attack = hor;
          direction = 'horizontal';
        } else {
          let ver = this.#verticalAttackQueue.shift();
          attack = ver;
          direction = 'vertical';
        }
      }
    }
    if (!attack) {
      attack = this.getRandomAttackCords();
      while (!this.areValidAttackCords(attack)) {
        attack = this.getRandomAttackCords();
      }
    }
    const receivedAtt = this.receiveAttack(attack);
    if (receivedAtt === 1) {
      this.setPotentialTargets(attack);
      this.#attackDirection = direction;
    } else if (receivedAtt === 2) {
      this.clearQueues();
      this.#attackDirection = null;
    } else if (receivedAtt === 0) {
    }
    return receivedAtt;
  }
  getRandomAttackCords() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
  clearQueues() {
    this.#verticalAttackQueue = [];
    this.#horizontalAttackQueue = [];
    this.#attackDirection = null;
  }
  areValidAttackCords(cords) {
    if (cords[0] > 9 || cords[1] > 9 || cords[0] < 0 || cords[1] < 0) {
      return false;
    } else if (
      this.#missedCords
        .concat(this.#hittedCords)
        .some((coord) => coord[0] === cords[0] && coord[1] === cords[1])
    ) {
      return false;
    }
    return true;
  }
}



/***/ }),

/***/ "./src/modules/Player/player.js":
/*!**************************************!*\
  !*** ./src/modules/Player/player.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
  constructor(gameBoard, isAI) {
    this.gameBoard = gameBoard;
    this.isAI = isAI;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/modules/Ship/ship.js":
/*!**********************************!*\
  !*** ./src/modules/Ship/ship.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
  constructor(length, cords) {
    this.length = length;
    this.cords = cords;
  }
  #hits = 0;
  hit() {
    this.#hits += 1;
  }
  isSunk() {
    if (this.length <= this.#hits) {
      return true;
    }
    return false;
  }
  static calcCords({ xy, length, direction }) {
    let cords = [];
    let [x, y] = xy;

    if (direction === 'vertical') {
      for (let i = 0; i < length; i++) {
        cords.push([x, y + i]);
      }
      return cords;
    } else if (direction === 'horizontal') {
      for (let i = 0; i < length; i++) {
        cords.push([x + i, y]);
      }
      return cords;
    } else {
      return null;
    }
  }
}




/***/ }),

/***/ "./src/modules/UI/GameManager.js":
/*!***************************************!*\
  !*** ./src/modules/UI/GameManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Ship_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship/ship */ "./src/modules/Ship/ship.js");
/* harmony import */ var _createBoardUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBoardUI */ "./src/modules/UI/createBoardUI.js");
/* harmony import */ var _getShipInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getShipInfo */ "./src/modules/UI/getShipInfo.js");
/* harmony import */ var _displayShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayShips */ "./src/modules/UI/displayShips.js");
/* harmony import */ var _Player_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Player/player */ "./src/modules/Player/player.js");
/* harmony import */ var _Gameboard_gameboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Gameboard/gameboard */ "./src/modules/Gameboard/gameboard.js");
/* harmony import */ var _toggleDirectionOnBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggleDirectionOnBtn */ "./src/modules/UI/toggleDirectionOnBtn.js");
/* harmony import */ var _displayError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./displayError */ "./src/modules/UI/displayError.js");
/* harmony import */ var _writeToInfoBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./writeToInfoBox */ "./src/modules/UI/writeToInfoBox.js");









class GameManager {
  #addShipBtn = document.querySelector('#addShipBtn');
  #startGameBtn = document.querySelector('#startGameBtn');
  #changeDirectionBtn = document.querySelector('#shipDirectionBtn');
  #errorOKBtn = document.querySelector('#errorOKBtn');
  constructor(player, ai, gameBoardUIUser, gameBoardUIAI) {
    this.player = player;
    this.ai = ai;
    this.gameBoardUIUser = gameBoardUIUser;
    this.gameBoardUIAI = gameBoardUIAI;
  }
  handlePlayerShips() {
    this.#changeDirectionBtn.addEventListener('click', _toggleDirectionOnBtn__WEBPACK_IMPORTED_MODULE_6__["default"]);
    this.#addShipBtn.addEventListener('click', () => {
      const info = (0,_getShipInfo__WEBPACK_IMPORTED_MODULE_2__["default"])();
      const cords = _Ship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship.calcCords(info);
      const ship = new _Ship_ship__WEBPACK_IMPORTED_MODULE_0__.Ship(info.length, cords);
      const shipIsAdded = this.player.gameBoard.addShip(ship);
      if (!shipIsAdded) {
        return; // Error msg
      }
      (0,_displayShips__WEBPACK_IMPORTED_MODULE_3__.displayShips)(this.player.gameBoard.getShips(), this.gameBoardUIUser);
      removeSelectItem();
    });
  }

  startGame() {
    this.#errorOKBtn.addEventListener('click', _displayError__WEBPACK_IMPORTED_MODULE_7__.toggleErrorClass);
    this.#startGameBtn.addEventListener('click', () => {
      if (this.player.gameBoard.shipsQuantity < 5) {
        // Error handling...
        (0,_displayError__WEBPACK_IMPORTED_MODULE_7__["default"])('Make sure all your ships have been placed!');
        return;
      }
      this.ai.gameBoard.addRandomShips();
      this.prepareEnemyFields();
      // remove ship info form
      removeShipForm();
      // showcase text, that tells user to attack
      (0,_writeToInfoBox__WEBPACK_IMPORTED_MODULE_8__["default"])('Click on an enemy field to launch your attack!');
    });
  }
  prepareEnemyFields() {
    const boardUI = this.gameBoardUIAI;
    boardUI.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.classList.contains('cell')) {
        return;
      }
      const attackedIndex = Array.from(boardUI.children).indexOf(target);
      const attackCords = indexToCords(attackedIndex);
      const attack = this.ai.gameBoard.receiveAttack(attackCords);
      if (attack === null) {
        return;
      } else if (attack === 2) {
        (0,_writeToInfoBox__WEBPACK_IMPORTED_MODULE_8__["default"])('You sunk an enemy Ship!');
      } else if (attack === 3) {
        (0,_writeToInfoBox__WEBPACK_IMPORTED_MODULE_8__["default"])('You won, congrats (:');
      }
      // AI's attack:
      const aiAttack = this.player.gameBoard.aiAttack();
      if (aiAttack === null) {
        return;
      } else if (aiAttack === 2) {
        (0,_writeToInfoBox__WEBPACK_IMPORTED_MODULE_8__["default"])('Your enemy has sunken one of your ships!');
      } else if (aiAttack === 3) {
        (0,_writeToInfoBox__WEBPACK_IMPORTED_MODULE_8__["default"])('your fleet was sunk ): L');
      }
      (0,_displayShips__WEBPACK_IMPORTED_MODULE_3__.displayShotsOnBoard)(this.ai.gameBoard, this.gameBoardUIAI);
      (0,_displayShips__WEBPACK_IMPORTED_MODULE_3__.displayShotsOnBoard)(this.player.gameBoard, this.gameBoardUIUser);

      (0,_displayShips__WEBPACK_IMPORTED_MODULE_3__.displayShips)(
        this.player.gameBoard.getShips(),
        this.gameBoardUIUser,
        true
      );

      (0,_displayShips__WEBPACK_IMPORTED_MODULE_3__.displayShips)(this.ai.gameBoard.getShips(), this.gameBoardUIAI, true);
    });
  }
}

function indexToCords(index) {
  const splitted = index.toString().split('');
  if (splitted.length < 2) {
    splitted.unshift(0);
  }
  return [Number(splitted[1]), Number(9 - splitted[0])];
}
function removeSelectItem() {
  const x = document.querySelector('#shipLength');
  x.remove(x.selectedIndex);
}
function removeShipForm() {
  const form = document.querySelector('#placeShipCont');
  startGameBtn.classList.toggle('hidden');
  form.classList.toggle('hidden');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameManager);


/***/ }),

/***/ "./src/modules/UI/createBoardUI.js":
/*!*****************************************!*\
  !*** ./src/modules/UI/createBoardUI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBoard(cont) {
  const container = cont;
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);


/***/ }),

/***/ "./src/modules/UI/displayError.js":
/*!****************************************!*\
  !*** ./src/modules/UI/displayError.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayError),
/* harmony export */   toggleErrorClass: () => (/* binding */ toggleErrorClass)
/* harmony export */ });
function displayError(msg) {
  const errorMsgP = document.querySelector('#errorMsgP');
  errorMsgP.innerText = msg;
  toggleErrorClass();
}

function toggleErrorClass() {
  const errorDiv = document.querySelector('#errorDiv');
  errorDiv.classList.toggle('invisible');
}


/***/ }),

/***/ "./src/modules/UI/displayShips.js":
/*!****************************************!*\
  !*** ./src/modules/UI/displayShips.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayShips: () => (/* binding */ displayShips),
/* harmony export */   displayShotsOnBoard: () => (/* binding */ displayShotsOnBoard)
/* harmony export */ });
function displayShips(ships, containerDOM, onlySunken) {
  const nodes = containerDOM.children;
  ships.forEach((ship) => {
    let cls = 'ship';
    if (onlySunken) {
      if (ship.isSunk()) {
        cls = 'sunk';
      } else {
        return;
      }
    }

    for (let i = 0; i < ship.cords.length; i++) {
      const c = ship.cords[i];
      const index = cordsToIndex(c);
      addClass(nodes[index], cls);
    }
  });
}
function displayShotsOnBoard(board, containerDOM) {
  const nodes = containerDOM.children;
  const hits = board.getHittedCords();
  const misses = board.getMissedCords();

  misses.forEach((cords) => {
    const index = cordsToIndex(cords);
    addClass(nodes[index], 'attacked');
  });

  hits.forEach((cords) => {
    const index = cordsToIndex(cords);
    addClass(nodes[index], 'hit');
  });
}

function addClass(el, c) {
  el.classList.add(c);
}
function cordsToIndex(cords) {
  return (9 - cords[1]) * 10 + cords[0];
}




/***/ }),

/***/ "./src/modules/UI/getShipInfo.js":
/*!***************************************!*\
  !*** ./src/modules/UI/getShipInfo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shiplength = document.querySelector('#shipLength');
const cordsX = document.querySelector('#xCords');
const cordsY = document.querySelector('#yCords');
const direction = document.querySelector('#shipDirectionBtn');
function getShipInfo() {
  return {
    length: shiplength.value,
    xy: [Number(cordsX.value), Number(cordsY.value)],
    direction: direction.innerText,
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getShipInfo);


/***/ }),

/***/ "./src/modules/UI/toggleDirectionOnBtn.js":
/*!************************************************!*\
  !*** ./src/modules/UI/toggleDirectionOnBtn.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleDirectionOnBtn)
/* harmony export */ });
function toggleDirectionOnBtn(e) {
  if (e.target.innerText === 'horizontal') {
    e.target.innerText = 'vertical';
    return;
  }
  e.target.innerText = 'horizontal';
}


/***/ }),

/***/ "./src/modules/UI/writeToInfoBox.js":
/*!******************************************!*\
  !*** ./src/modules/UI/writeToInfoBox.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ writeToInfoBox)
/* harmony export */ });
const infoTextEl = document.querySelector('#infoText');
function writeToInfoBox(msg) {
  infoTextEl.innerText = msg;
  setTimeout(resetInfoBox, 3000);
}

function resetInfoBox() {
  infoTextEl.innerText = '';
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _modules_UI_createBoardUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI/createBoardUI */ "./src/modules/UI/createBoardUI.js");
/* harmony import */ var _modules_UI_getShipInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI/getShipInfo */ "./src/modules/UI/getShipInfo.js");
/* harmony import */ var _modules_UI_displayShips__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/UI/displayShips */ "./src/modules/UI/displayShips.js");
/* harmony import */ var _modules_Player_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Player/player */ "./src/modules/Player/player.js");
/* harmony import */ var _modules_Gameboard_gameboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Gameboard/gameboard */ "./src/modules/Gameboard/gameboard.js");
/* harmony import */ var _modules_Ship_ship__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/Ship/ship */ "./src/modules/Ship/ship.js");
/* harmony import */ var _modules_UI_GameManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/UI/GameManager */ "./src/modules/UI/GameManager.js");









const userGameBoardUI = document.querySelector('#container1');
const aiGameBoardUI = document.querySelector('#container2');

(0,_modules_UI_createBoardUI__WEBPACK_IMPORTED_MODULE_1__["default"])(container1);
(0,_modules_UI_createBoardUI__WEBPACK_IMPORTED_MODULE_1__["default"])(container2);

const player = new _modules_Player_player__WEBPACK_IMPORTED_MODULE_4__["default"](new _modules_Gameboard_gameboard__WEBPACK_IMPORTED_MODULE_5__.GameBoard(), false);
const ai = new _modules_Player_player__WEBPACK_IMPORTED_MODULE_4__["default"](new _modules_Gameboard_gameboard__WEBPACK_IMPORTED_MODULE_5__.GameBoard(), true);

const gameManager = new _modules_UI_GameManager__WEBPACK_IMPORTED_MODULE_7__["default"](player, ai, userGameBoardUI, aiGameBoardUI);
// gameManager.player.gameBoard.addShip(new Ship(2, [[0, 1]]));
// gameManager.player.gameBoard.addShip(new Ship(3, [[0, 2]]));
// gameManager.player.gameBoard.addShip(new Ship(2, [[0, 3]]));
// gameManager.player.gameBoard.addShip(new Ship(2, [[0, 4]]));
// gameManager.player.gameBoard.addShip(new Ship(2, [[0, 5]]));

gameManager.handlePlayerShips();
gameManager.startGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dDO0FBQ0Y7QUFDRTtBQUNSO0FBQ2E7QUFDZjtBQUNROztBQUVuRDtBQUNBOztBQUVBLHFFQUFXO0FBQ1gscUVBQVc7O0FBRVgsbUJBQW1CLDhEQUFNLEtBQUssbUVBQVM7QUFDdkMsZUFBZSw4REFBTSxLQUFLLG1FQUFTOztBQUVuQyx3QkFBd0IsK0RBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvR2FtZWJvYXJkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvU2hpcC9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS9HYW1lTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvVUkvY3JlYXRlQm9hcmRVSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvVUkvZGlzcGxheUVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS9kaXNwbGF5U2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1VJL2dldFNoaXBJbmZvLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS90b2dnbGVEaXJlY3Rpb25PbkJ0bi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvVUkvd3JpdGVUb0luZm9Cb3guanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLXByaW1hcnktY2xyOiAjNWViMWJmO1xuICAtLWJyaWdodGVyLWNscjogI2NkZWRmNjtcbiAgLS1kYXJrZXItY2xyOiAjMDQyYTJiO1xuICAtLW5ldXRyYWwtY2xyOiAjZGViNDllO1xuICAtLWZsYXNoeS1jbHI6ICNlZjdiNDU7XG4gIC0tZmxhc2h5LXNlY29uZHJ5OiAjZDg0NzI3O1xuICAtLWJpZy10ZXh0LXNpemU6IDEuOHJlbTtcbiAgLS1oZWFkZXItdGV4dC1zaXplOiAzcmVtO1xuICAtLW5vcm1hbC10ZXh0LXNpemU6IDEuM3JlbTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY2xyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuOnJvb3QgPiAqIHtcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtdGV4dC1zaXplKTtcbiAgY29sb3I6IHZhcigtLWJyaWdodGVyLWNscik7XG59XG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG59XG4uaW5mby1ib3gge1xuICBoZWlnaHQ6IDV2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogdmFyKC0tYmlnLXRleHQtc2l6ZSk7XG59XG4ucGxheWdyb3VuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmJvYXJkLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IDIwdnc7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jbHIpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggYmxhY2s7XG59XG4uY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1jbHIpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmNlbGwuc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcbn1cbi5jZWxsLmF0dGFja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5jZWxsLmhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5jZWxsLmhpdC5zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5lcnJvci1kaXYuaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5lcnJvci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZmxhc2h5LXNlY29uZHJ5KTtcbiAgYm94LXNoYWRvdzogMjBweCAyMHB4IDIwcHggYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZsYXNoeS1jbHIpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG4uZXJyb3ItZGl2IHAge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uZXJyb3ItZGl2IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY2xyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uZXJyb3ItZGl2IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyaWdodGVyLWNscik7XG59XG4ucGxhY2Utc2hpcC1jb250IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gIGhlaWdodDogMzB2aDtcbiAgd2lkdGg6IDUwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY2xyKTtcbiAgY29sb3I6IHZhcigtLWRhcmtlci1jbHIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5wbGFjZS1zaGlwLWNvbnQuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5sZW5ndGgtZGlyZWN0aW9uLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDQwcHg7XG59XG4ucGxhY2Utc2hpcC1jb250IGlucHV0LFxuLnBsYWNlLXNoaXAtY29udCBzZWxlY3Qge1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1jbHIpO1xuICBjb2xvcjogdmFyKC0tYnJpZ2h0ZXItY2xyKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGxhY2Utc2hpcC1jb250IGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY2xyKTtcbiAgY29sb3I6IHZhcigtLWJyaWdodGVyLWNscik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLnBsYWNlLXNoaXAtY29udCBidXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggYmxhY2s7XG59XG4uc3RhcnQtZ2FtZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNscik7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWRhcmtlci1jbHIpO1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuLnN0YXJ0LWdhbWUtYnRuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3RhcnQtZ2FtZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mbGFzaHktY2xyKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsMEJBQTBCOztFQUUxQixtQ0FBbUM7RUFDbkMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztFQUNuQyxzQ0FBc0M7RUFDdEMsb0NBQW9DO0VBQ3BDLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsd0NBQXdDO0VBQ3hDLGdDQUFnQztFQUNoQyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7O0VBRUUsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsMEJBQTBCO0VBQzFCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1DQUFtQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLXByaW1hcnktY2xyOiAjNWViMWJmO1xcbiAgLS1icmlnaHRlci1jbHI6ICNjZGVkZjY7XFxuICAtLWRhcmtlci1jbHI6ICMwNDJhMmI7XFxuICAtLW5ldXRyYWwtY2xyOiAjZGViNDllO1xcbiAgLS1mbGFzaHktY2xyOiAjZWY3YjQ1O1xcbiAgLS1mbGFzaHktc2Vjb25kcnk6ICNkODQ3Mjc7XFxuICAtLWJpZy10ZXh0LXNpemU6IDEuOHJlbTtcXG4gIC0taGVhZGVyLXRleHQtc2l6ZTogM3JlbTtcXG4gIC0tbm9ybWFsLXRleHQtc2l6ZTogMS4zcmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya2VyLWNscik7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG46cm9vdCA+ICoge1xcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtdGV4dC1zaXplKTtcXG4gIGNvbG9yOiB2YXIoLS1icmlnaHRlci1jbHIpO1xcbn1cXG4uaGVhZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTBweDtcXG59XFxuLmluZm8tYm94IHtcXG4gIGhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctdGV4dC1zaXplKTtcXG59XFxuLnBsYXlncm91bmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAyMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDMwcHggYmxhY2s7XFxufVxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWRhcmtlci1jbHIpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmNlbGwuc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XFxufVxcbi5jZWxsLmF0dGFja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcbi5jZWxsLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcbi5jZWxsLmhpdC5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZXJyb3ItZGl2LmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZXJyb3ItZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZmxhc2h5LXNlY29uZHJ5KTtcXG4gIGJveC1zaGFkb3c6IDIwcHggMjBweCAyMHB4IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmxhc2h5LWNscik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMjBweCAyMHB4O1xcbn1cXG4uZXJyb3ItZGl2IHAge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4uZXJyb3ItZGl2IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXV0cmFsLWNscik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuLmVycm9yLWRpdiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJpZ2h0ZXItY2xyKTtcXG59XFxuLnBsYWNlLXNoaXAtY29udCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBoZWlnaHQ6IDMwdmg7XFxuICB3aWR0aDogNTB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNscik7XFxuICBjb2xvcjogdmFyKC0tZGFya2VyLWNscik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5wbGFjZS1zaGlwLWNvbnQuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5sZW5ndGgtZGlyZWN0aW9uLWNvbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG59XFxuLnBsYWNlLXNoaXAtY29udCBpbnB1dCxcXG4ucGxhY2Utc2hpcC1jb250IHNlbGVjdCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogNjBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1icmlnaHRlci1jbHIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ucGxhY2Utc2hpcC1jb250IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItY2xyKTtcXG4gIGNvbG9yOiB2YXIoLS1icmlnaHRlci1jbHIpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XFxufVxcbi5wbGFjZS1zaGlwLWNvbnQgYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCBibGFjaztcXG59XFxuLnN0YXJ0LWdhbWUtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldXRyYWwtY2xyKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrZXItY2xyKTtcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG4uc3RhcnQtZ2FtZS1idG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zdGFydC1nYW1lLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mbGFzaHktY2xyKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi4vU2hpcC9zaGlwJztcbmNsYXNzIEdhbWVCb2FyZCB7XG4gICNzaGlwcyA9IFtdO1xuICAjbWlzc2VkQ29yZHMgPSBbXTtcbiAgI2hpdHRlZENvcmRzID0gW107XG4gIC8vIGZvciBhdHRhY2tpbmcgcGhhc2U6XG4gICNob3Jpem9udGFsQXR0YWNrUXVldWUgPSBbXTtcbiAgI3ZlcnRpY2FsQXR0YWNrUXVldWUgPSBbXTtcbiAgI2F0dGFja0RpcmVjdGlvbiA9IG51bGw7XG4gIC8vIDA6IG5peDsgIDE6IGhpdFxuICAjYXR0YWNrQ29tYm9TdGF0ZSA9IDA7XG4gIHNoaXBMZW5ndGhzID0gWzIsIDMsIDMsIDQsIDVdO1xuICBhZGRTaGlwKHNoaXApIHtcbiAgICBpZiAodGhpcy5jaGVja1NoaXBDb3JyZWN0bmVzKHNoaXApKSB7XG4gICAgICB0aGlzLiNzaGlwcy5wdXNoKHNoaXApO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyByZXR1cm5zIG51bGw6IHdyb25nIGlucHV0LCAwOiBtaXNzLCAxOiBoaXQsIDI6IHNoaXBTdW5rLCAzOiBmbG90dGUgc3Vua1xuICByZWNlaXZlQXR0YWNrKGNvcmRzKSB7XG4gICAgaWYgKCF0aGlzLmFyZVZhbGlkQXR0YWNrQ29yZHMoY29yZHMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2hpcCA9IHRoaXMuI3NoaXBzW2ldO1xuICAgICAgY29uc3QgaGl0ID0gc2hpcC5jb3Jkcy5zb21lKChjKSA9PiB7XG4gICAgICAgIHJldHVybiBjWzBdID09PSBjb3Jkc1swXSAmJiBjWzFdID09PSBjb3Jkc1sxXTtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhpdCkge1xuICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICB0aGlzLiNoaXR0ZWRDb3Jkcy5wdXNoKGNvcmRzKTtcbiAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICBpZiAodGhpcy5mbGVldFN1bmsoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLiNtaXNzZWRDb3Jkcy5wdXNoKGNvcmRzKTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBjaGVja1NoaXBDb3JyZWN0bmVzKHNoaXApIHtcbiAgICBpZiAoc2hpcC5sZW5ndGggPiA1IHx8IHNoaXAubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuY29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2hpcC5jb3Jkc1tpXVswXSA+IDkgfHxcbiAgICAgICAgc2hpcC5jb3Jkc1tpXVsxXSA+IDkgfHxcbiAgICAgICAgc2hpcC5jb3Jkc1tpXVswXSA8IDAgfHxcbiAgICAgICAgc2hpcC5jb3Jkc1tpXVsxXSA8IDBcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcyA9IHRoaXMuI3NoaXBzW2ldO1xuICAgICAgY29uc3QgY29yZHNFeGlzdCA9IHMuY29yZHMuc29tZSgoYykgPT4ge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHNoaXAuY29yZHMubGVuZ3RoOyB5KyspIHtcbiAgICAgICAgICByZXR1cm4gY1swXSA9PT0gc2hpcC5jb3Jkc1t5XVswXSAmJiBjWzFdID09PSBzaGlwLmNvcmRzW3ldWzFdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmIChjb3Jkc0V4aXN0KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBnZXRNaXNzZWRDb3JkcygpIHtcbiAgICByZXR1cm4gdGhpcy4jbWlzc2VkQ29yZHM7XG4gIH1cbiAgZ2V0SGl0dGVkQ29yZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdHRlZENvcmRzO1xuICB9XG4gIGZsZWV0U3VuaygpIHtcbiAgICByZXR1cm4gIXRoaXMuI3NoaXBzLnNvbWUoKHNoaXApID0+ICFzaGlwLmlzU3VuaygpKTtcbiAgfVxuICBnZXRTaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHM7XG4gIH1cbiAgZ2V0IHNoaXBzUXVhbnRpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBzLmxlbmd0aDtcbiAgfVxuICBzdGF0aWMgcmFuZG9tU2hpcEluZm8oKSB7XG4gICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgbGV0IGRpciA9IFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddO1xuICAgIHJldHVybiB7IHh5OiBbeCwgeV0sIGRpcmVjdGlvbjogZGlyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSB9O1xuICB9XG4gIGFkZFJhbmRvbVNoaXBzKCkge1xuICAgIGxldCBpc0FkZGVkID0gZmFsc2U7XG4gICAgbGV0IGkgPSAwO1xuICAgIHdoaWxlICh0aGlzLnNoaXBzUXVhbnRpdHkgPCA1KSB7XG4gICAgICB3aGlsZSAoIWlzQWRkZWQpIHtcbiAgICAgICAgbGV0IGluZm8gPSBHYW1lQm9hcmQucmFuZG9tU2hpcEluZm8oKTtcbiAgICAgICAgaW5mby5sZW5ndGggPSB0aGlzLnNoaXBMZW5ndGhzW2ldO1xuICAgICAgICBsZXQgY29yZHMgPSBTaGlwLmNhbGNDb3JkcyhpbmZvKTtcbiAgICAgICAgaXNBZGRlZCA9IHRoaXMuYWRkU2hpcChuZXcgU2hpcChpbmZvLmxlbmd0aCwgY29yZHMpKTtcbiAgICAgIH1cbiAgICAgIGlzQWRkZWQgPSBmYWxzZTtcbiAgICAgIGkrKztcbiAgICB9XG4gIH1cbiAgc2V0UG90ZW50aWFsVGFyZ2V0cyhbeCwgeV0pIHtcbiAgICBjb25zdCBwb3RlbnRpYWxUYXJnZXRzID0gW1xuICAgICAgW3ggKyAxLCB5XSwgLy8gUmlnaHRcbiAgICAgIFt4IC0gMSwgeV0sIC8vIExlZnRcbiAgICAgIFt4LCB5ICsgMV0sIC8vIERvd25cbiAgICAgIFt4LCB5IC0gMV0sIC8vIFVwXG4gICAgXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHBvdGVudGlhbFRhcmdldHNbaV07XG4gICAgICBpZiAodGhpcy5hcmVWYWxpZEF0dGFja0NvcmRzKGVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuI2hvcml6b250YWxBdHRhY2tRdWV1ZS5wdXNoKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IDQ7IGkrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHBvdGVudGlhbFRhcmdldHNbaV07XG4gICAgICBpZiAodGhpcy5hcmVWYWxpZEF0dGFja0NvcmRzKGVsZW1lbnQpKSB7XG4gICAgICAgIHRoaXMuI3ZlcnRpY2FsQXR0YWNrUXVldWUucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWlBdHRhY2soKSB7XG4gICAgbGV0IGF0dGFjaztcbiAgICBsZXQgZGlyZWN0aW9uID0gbnVsbDtcbiAgICBpZiAoXG4gICAgICB0aGlzLiNob3Jpem9udGFsQXR0YWNrUXVldWUubGVuZ3RoID4gMCB8fFxuICAgICAgdGhpcy4jdmVydGljYWxBdHRhY2tRdWV1ZS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBpZiAodGhpcy4jYXR0YWNrRGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICAgIGF0dGFjayA9IHRoaXMuI3ZlcnRpY2FsQXR0YWNrUXVldWUuc2hpZnQoKTtcbiAgICAgICAgZGlyZWN0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4jYXR0YWNrRGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgYXR0YWNrID0gdGhpcy4jaG9yaXpvbnRhbEF0dGFja1F1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhc2UsIHdoZXJlIHdlIGhhdmUgaGl0IHRoZSBzaGlwLCBidXQgZG9uJ3QgeWV0IGtub3cgdGhlIGF0dGFja2luZyBkaXJlY3Rpb25cbiAgICAgICAgbGV0IGhvciA9IHRoaXMuI2hvcml6b250YWxBdHRhY2tRdWV1ZS5zaGlmdCgpO1xuICAgICAgICBpZiAoaG9yKSB7XG4gICAgICAgICAgYXR0YWNrID0gaG9yO1xuICAgICAgICAgIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgdmVyID0gdGhpcy4jdmVydGljYWxBdHRhY2tRdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgIGF0dGFjayA9IHZlcjtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAndmVydGljYWwnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghYXR0YWNrKSB7XG4gICAgICBhdHRhY2sgPSB0aGlzLmdldFJhbmRvbUF0dGFja0NvcmRzKCk7XG4gICAgICB3aGlsZSAoIXRoaXMuYXJlVmFsaWRBdHRhY2tDb3JkcyhhdHRhY2spKSB7XG4gICAgICAgIGF0dGFjayA9IHRoaXMuZ2V0UmFuZG9tQXR0YWNrQ29yZHMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcmVjZWl2ZWRBdHQgPSB0aGlzLnJlY2VpdmVBdHRhY2soYXR0YWNrKTtcbiAgICBpZiAocmVjZWl2ZWRBdHQgPT09IDEpIHtcbiAgICAgIHRoaXMuc2V0UG90ZW50aWFsVGFyZ2V0cyhhdHRhY2spO1xuICAgICAgdGhpcy4jYXR0YWNrRGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH0gZWxzZSBpZiAocmVjZWl2ZWRBdHQgPT09IDIpIHtcbiAgICAgIHRoaXMuY2xlYXJRdWV1ZXMoKTtcbiAgICAgIHRoaXMuI2F0dGFja0RpcmVjdGlvbiA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChyZWNlaXZlZEF0dCA9PT0gMCkge1xuICAgIH1cbiAgICByZXR1cm4gcmVjZWl2ZWRBdHQ7XG4gIH1cbiAgZ2V0UmFuZG9tQXR0YWNrQ29yZHMoKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cbiAgY2xlYXJRdWV1ZXMoKSB7XG4gICAgdGhpcy4jdmVydGljYWxBdHRhY2tRdWV1ZSA9IFtdO1xuICAgIHRoaXMuI2hvcml6b250YWxBdHRhY2tRdWV1ZSA9IFtdO1xuICAgIHRoaXMuI2F0dGFja0RpcmVjdGlvbiA9IG51bGw7XG4gIH1cbiAgYXJlVmFsaWRBdHRhY2tDb3Jkcyhjb3Jkcykge1xuICAgIGlmIChjb3Jkc1swXSA+IDkgfHwgY29yZHNbMV0gPiA5IHx8IGNvcmRzWzBdIDwgMCB8fCBjb3Jkc1sxXSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy4jbWlzc2VkQ29yZHNcbiAgICAgICAgLmNvbmNhdCh0aGlzLiNoaXR0ZWRDb3JkcylcbiAgICAgICAgLnNvbWUoKGNvb3JkKSA9PiBjb29yZFswXSA9PT0gY29yZHNbMF0gJiYgY29vcmRbMV0gPT09IGNvcmRzWzFdKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IHsgR2FtZUJvYXJkIH07XG4iLCJjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lQm9hcmQsIGlzQUkpIHtcbiAgICB0aGlzLmdhbWVCb2FyZCA9IGdhbWVCb2FyZDtcbiAgICB0aGlzLmlzQUkgPSBpc0FJO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCBjb3Jkcykge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY29yZHMgPSBjb3JkcztcbiAgfVxuICAjaGl0cyA9IDA7XG4gIGhpdCgpIHtcbiAgICB0aGlzLiNoaXRzICs9IDE7XG4gIH1cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA8PSB0aGlzLiNoaXRzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YXRpYyBjYWxjQ29yZHMoeyB4eSwgbGVuZ3RoLCBkaXJlY3Rpb24gfSkge1xuICAgIGxldCBjb3JkcyA9IFtdO1xuICAgIGxldCBbeCwgeV0gPSB4eTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29yZHMucHVzaChbeCwgeSArIGldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb3JkcztcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvcmRzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29yZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi4vU2hpcC9zaGlwJztcbmltcG9ydCBjcmVhdGVCb2FyZCBmcm9tICcuL2NyZWF0ZUJvYXJkVUknO1xuaW1wb3J0IGdldFNoaXBJbmZvIGZyb20gJy4vZ2V0U2hpcEluZm8nO1xuaW1wb3J0IHsgZGlzcGxheVNoaXBzLCBkaXNwbGF5U2hvdHNPbkJvYXJkIH0gZnJvbSAnLi9kaXNwbGF5U2hpcHMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9QbGF5ZXIvcGxheWVyJztcbmltcG9ydCB7IEdhbWVCb2FyZCB9IGZyb20gJy4uL0dhbWVib2FyZC9nYW1lYm9hcmQnO1xuaW1wb3J0IHRvZ2dsZURpcmVjdGlvbk9uQnRuIGZyb20gJy4vdG9nZ2xlRGlyZWN0aW9uT25CdG4nO1xuaW1wb3J0IGRpc3BsYXlFcnJvciwgeyB0b2dnbGVFcnJvckNsYXNzIH0gZnJvbSAnLi9kaXNwbGF5RXJyb3InO1xuaW1wb3J0IHdyaXRlVG9JbmZvQm94IGZyb20gJy4vd3JpdGVUb0luZm9Cb3gnO1xuY2xhc3MgR2FtZU1hbmFnZXIge1xuICAjYWRkU2hpcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRTaGlwQnRuJyk7XG4gICNzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhcnRHYW1lQnRuJyk7XG4gICNjaGFuZ2VEaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hpcERpcmVjdGlvbkJ0bicpO1xuICAjZXJyb3JPS0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvck9LQnRuJyk7XG4gIGNvbnN0cnVjdG9yKHBsYXllciwgYWksIGdhbWVCb2FyZFVJVXNlciwgZ2FtZUJvYXJkVUlBSSkge1xuICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgIHRoaXMuYWkgPSBhaTtcbiAgICB0aGlzLmdhbWVCb2FyZFVJVXNlciA9IGdhbWVCb2FyZFVJVXNlcjtcbiAgICB0aGlzLmdhbWVCb2FyZFVJQUkgPSBnYW1lQm9hcmRVSUFJO1xuICB9XG4gIGhhbmRsZVBsYXllclNoaXBzKCkge1xuICAgIHRoaXMuI2NoYW5nZURpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZURpcmVjdGlvbk9uQnRuKTtcbiAgICB0aGlzLiNhZGRTaGlwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgaW5mbyA9IGdldFNoaXBJbmZvKCk7XG4gICAgICBjb25zdCBjb3JkcyA9IFNoaXAuY2FsY0NvcmRzKGluZm8pO1xuICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGluZm8ubGVuZ3RoLCBjb3Jkcyk7XG4gICAgICBjb25zdCBzaGlwSXNBZGRlZCA9IHRoaXMucGxheWVyLmdhbWVCb2FyZC5hZGRTaGlwKHNoaXApO1xuICAgICAgaWYgKCFzaGlwSXNBZGRlZCkge1xuICAgICAgICByZXR1cm47IC8vIEVycm9yIG1zZ1xuICAgICAgfVxuICAgICAgZGlzcGxheVNoaXBzKHRoaXMucGxheWVyLmdhbWVCb2FyZC5nZXRTaGlwcygpLCB0aGlzLmdhbWVCb2FyZFVJVXNlcik7XG4gICAgICByZW1vdmVTZWxlY3RJdGVtKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGFydEdhbWUoKSB7XG4gICAgdGhpcy4jZXJyb3JPS0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUVycm9yQ2xhc3MpO1xuICAgIHRoaXMuI3N0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBsYXllci5nYW1lQm9hcmQuc2hpcHNRdWFudGl0eSA8IDUpIHtcbiAgICAgICAgLy8gRXJyb3IgaGFuZGxpbmcuLi5cbiAgICAgICAgZGlzcGxheUVycm9yKCdNYWtlIHN1cmUgYWxsIHlvdXIgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5haS5nYW1lQm9hcmQuYWRkUmFuZG9tU2hpcHMoKTtcbiAgICAgIHRoaXMucHJlcGFyZUVuZW15RmllbGRzKCk7XG4gICAgICAvLyByZW1vdmUgc2hpcCBpbmZvIGZvcm1cbiAgICAgIHJlbW92ZVNoaXBGb3JtKCk7XG4gICAgICAvLyBzaG93Y2FzZSB0ZXh0LCB0aGF0IHRlbGxzIHVzZXIgdG8gYXR0YWNrXG4gICAgICB3cml0ZVRvSW5mb0JveCgnQ2xpY2sgb24gYW4gZW5lbXkgZmllbGQgdG8gbGF1bmNoIHlvdXIgYXR0YWNrIScpO1xuICAgIH0pO1xuICB9XG4gIHByZXBhcmVFbmVteUZpZWxkcygpIHtcbiAgICBjb25zdCBib2FyZFVJID0gdGhpcy5nYW1lQm9hcmRVSUFJO1xuICAgIGJvYXJkVUkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICBpZiAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhdHRhY2tlZEluZGV4ID0gQXJyYXkuZnJvbShib2FyZFVJLmNoaWxkcmVuKS5pbmRleE9mKHRhcmdldCk7XG4gICAgICBjb25zdCBhdHRhY2tDb3JkcyA9IGluZGV4VG9Db3JkcyhhdHRhY2tlZEluZGV4KTtcbiAgICAgIGNvbnN0IGF0dGFjayA9IHRoaXMuYWkuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrQ29yZHMpO1xuICAgICAgaWYgKGF0dGFjayA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2UgaWYgKGF0dGFjayA9PT0gMikge1xuICAgICAgICB3cml0ZVRvSW5mb0JveCgnWW91IHN1bmsgYW4gZW5lbXkgU2hpcCEnKTtcbiAgICAgIH0gZWxzZSBpZiAoYXR0YWNrID09PSAzKSB7XG4gICAgICAgIHdyaXRlVG9JbmZvQm94KCdZb3Ugd29uLCBjb25ncmF0cyAoOicpO1xuICAgICAgfVxuICAgICAgLy8gQUkncyBhdHRhY2s6XG4gICAgICBjb25zdCBhaUF0dGFjayA9IHRoaXMucGxheWVyLmdhbWVCb2FyZC5haUF0dGFjaygpO1xuICAgICAgaWYgKGFpQXR0YWNrID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoYWlBdHRhY2sgPT09IDIpIHtcbiAgICAgICAgd3JpdGVUb0luZm9Cb3goJ1lvdXIgZW5lbXkgaGFzIHN1bmtlbiBvbmUgb2YgeW91ciBzaGlwcyEnKTtcbiAgICAgIH0gZWxzZSBpZiAoYWlBdHRhY2sgPT09IDMpIHtcbiAgICAgICAgd3JpdGVUb0luZm9Cb3goJ3lvdXIgZmxlZXQgd2FzIHN1bmsgKTogTCcpO1xuICAgICAgfVxuICAgICAgZGlzcGxheVNob3RzT25Cb2FyZCh0aGlzLmFpLmdhbWVCb2FyZCwgdGhpcy5nYW1lQm9hcmRVSUFJKTtcbiAgICAgIGRpc3BsYXlTaG90c09uQm9hcmQodGhpcy5wbGF5ZXIuZ2FtZUJvYXJkLCB0aGlzLmdhbWVCb2FyZFVJVXNlcik7XG5cbiAgICAgIGRpc3BsYXlTaGlwcyhcbiAgICAgICAgdGhpcy5wbGF5ZXIuZ2FtZUJvYXJkLmdldFNoaXBzKCksXG4gICAgICAgIHRoaXMuZ2FtZUJvYXJkVUlVc2VyLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuXG4gICAgICBkaXNwbGF5U2hpcHModGhpcy5haS5nYW1lQm9hcmQuZ2V0U2hpcHMoKSwgdGhpcy5nYW1lQm9hcmRVSUFJLCB0cnVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleFRvQ29yZHMoaW5kZXgpIHtcbiAgY29uc3Qgc3BsaXR0ZWQgPSBpbmRleC50b1N0cmluZygpLnNwbGl0KCcnKTtcbiAgaWYgKHNwbGl0dGVkLmxlbmd0aCA8IDIpIHtcbiAgICBzcGxpdHRlZC51bnNoaWZ0KDApO1xuICB9XG4gIHJldHVybiBbTnVtYmVyKHNwbGl0dGVkWzFdKSwgTnVtYmVyKDkgLSBzcGxpdHRlZFswXSldO1xufVxuZnVuY3Rpb24gcmVtb3ZlU2VsZWN0SXRlbSgpIHtcbiAgY29uc3QgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwTGVuZ3RoJyk7XG4gIHgucmVtb3ZlKHguc2VsZWN0ZWRJbmRleCk7XG59XG5mdW5jdGlvbiByZW1vdmVTaGlwRm9ybSgpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZVNoaXBDb250Jyk7XG4gIHN0YXJ0R2FtZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZU1hbmFnZXI7XG4iLCJmdW5jdGlvbiBjcmVhdGVCb2FyZChjb250KSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGNvbnQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2FyZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlFcnJvcihtc2cpIHtcbiAgY29uc3QgZXJyb3JNc2dQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yTXNnUCcpO1xuICBlcnJvck1zZ1AuaW5uZXJUZXh0ID0gbXNnO1xuICB0b2dnbGVFcnJvckNsYXNzKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVFcnJvckNsYXNzKCkge1xuICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvckRpdicpO1xuICBlcnJvckRpdi5jbGFzc0xpc3QudG9nZ2xlKCdpbnZpc2libGUnKTtcbn1cbiIsImZ1bmN0aW9uIGRpc3BsYXlTaGlwcyhzaGlwcywgY29udGFpbmVyRE9NLCBvbmx5U3Vua2VuKSB7XG4gIGNvbnN0IG5vZGVzID0gY29udGFpbmVyRE9NLmNoaWxkcmVuO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgbGV0IGNscyA9ICdzaGlwJztcbiAgICBpZiAob25seVN1bmtlbikge1xuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgY2xzID0gJ3N1bmsnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5jb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYyA9IHNoaXAuY29yZHNbaV07XG4gICAgICBjb25zdCBpbmRleCA9IGNvcmRzVG9JbmRleChjKTtcbiAgICAgIGFkZENsYXNzKG5vZGVzW2luZGV4XSwgY2xzKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzcGxheVNob3RzT25Cb2FyZChib2FyZCwgY29udGFpbmVyRE9NKSB7XG4gIGNvbnN0IG5vZGVzID0gY29udGFpbmVyRE9NLmNoaWxkcmVuO1xuICBjb25zdCBoaXRzID0gYm9hcmQuZ2V0SGl0dGVkQ29yZHMoKTtcbiAgY29uc3QgbWlzc2VzID0gYm9hcmQuZ2V0TWlzc2VkQ29yZHMoKTtcblxuICBtaXNzZXMuZm9yRWFjaCgoY29yZHMpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IGNvcmRzVG9JbmRleChjb3Jkcyk7XG4gICAgYWRkQ2xhc3Mobm9kZXNbaW5kZXhdLCAnYXR0YWNrZWQnKTtcbiAgfSk7XG5cbiAgaGl0cy5mb3JFYWNoKChjb3JkcykgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gY29yZHNUb0luZGV4KGNvcmRzKTtcbiAgICBhZGRDbGFzcyhub2Rlc1tpbmRleF0sICdoaXQnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjKSB7XG4gIGVsLmNsYXNzTGlzdC5hZGQoYyk7XG59XG5mdW5jdGlvbiBjb3Jkc1RvSW5kZXgoY29yZHMpIHtcbiAgcmV0dXJuICg5IC0gY29yZHNbMV0pICogMTAgKyBjb3Jkc1swXTtcbn1cblxuZXhwb3J0IHsgZGlzcGxheVNoaXBzLCBkaXNwbGF5U2hvdHNPbkJvYXJkIH07XG4iLCJjb25zdCBzaGlwbGVuZ3RoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoaXBMZW5ndGgnKTtcbmNvbnN0IGNvcmRzWCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN4Q29yZHMnKTtcbmNvbnN0IGNvcmRzWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5Q29yZHMnKTtcbmNvbnN0IGRpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaGlwRGlyZWN0aW9uQnRuJyk7XG5mdW5jdGlvbiBnZXRTaGlwSW5mbygpIHtcbiAgcmV0dXJuIHtcbiAgICBsZW5ndGg6IHNoaXBsZW5ndGgudmFsdWUsXG4gICAgeHk6IFtOdW1iZXIoY29yZHNYLnZhbHVlKSwgTnVtYmVyKGNvcmRzWS52YWx1ZSldLFxuICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLmlubmVyVGV4dCxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGdldFNoaXBJbmZvO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlRGlyZWN0aW9uT25CdG4oZSkge1xuICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBlLnRhcmdldC5pbm5lclRleHQgPSAndmVydGljYWwnO1xuICAgIHJldHVybjtcbiAgfVxuICBlLnRhcmdldC5pbm5lclRleHQgPSAnaG9yaXpvbnRhbCc7XG59XG4iLCJjb25zdCBpbmZvVGV4dEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luZm9UZXh0Jyk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3cml0ZVRvSW5mb0JveChtc2cpIHtcbiAgaW5mb1RleHRFbC5pbm5lclRleHQgPSBtc2c7XG4gIHNldFRpbWVvdXQocmVzZXRJbmZvQm94LCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRJbmZvQm94KCkge1xuICBpbmZvVGV4dEVsLmlubmVyVGV4dCA9ICcnO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgY3JlYXRlQm9hcmQgZnJvbSAnLi9tb2R1bGVzL1VJL2NyZWF0ZUJvYXJkVUknO1xuaW1wb3J0IGdldFNoaXBJbmZvIGZyb20gJy4vbW9kdWxlcy9VSS9nZXRTaGlwSW5mbyc7XG5pbXBvcnQgZGlzcGxheVNoaXBzIGZyb20gJy4vbW9kdWxlcy9VSS9kaXNwbGF5U2hpcHMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL21vZHVsZXMvUGxheWVyL3BsYXllcic7XG5pbXBvcnQgeyBHYW1lQm9hcmQgfSBmcm9tICcuL21vZHVsZXMvR2FtZWJvYXJkL2dhbWVib2FyZCc7XG5pbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9tb2R1bGVzL1NoaXAvc2hpcCc7XG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL1VJL0dhbWVNYW5hZ2VyJztcblxuY29uc3QgdXNlckdhbWVCb2FyZFVJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcjEnKTtcbmNvbnN0IGFpR2FtZUJvYXJkVUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyMicpO1xuXG5jcmVhdGVCb2FyZChjb250YWluZXIxKTtcbmNyZWF0ZUJvYXJkKGNvbnRhaW5lcjIpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKG5ldyBHYW1lQm9hcmQoKSwgZmFsc2UpO1xuY29uc3QgYWkgPSBuZXcgUGxheWVyKG5ldyBHYW1lQm9hcmQoKSwgdHJ1ZSk7XG5cbmNvbnN0IGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKHBsYXllciwgYWksIHVzZXJHYW1lQm9hcmRVSSwgYWlHYW1lQm9hcmRVSSk7XG4vLyBnYW1lTWFuYWdlci5wbGF5ZXIuZ2FtZUJvYXJkLmFkZFNoaXAobmV3IFNoaXAoMiwgW1swLCAxXV0pKTtcbi8vIGdhbWVNYW5hZ2VyLnBsYXllci5nYW1lQm9hcmQuYWRkU2hpcChuZXcgU2hpcCgzLCBbWzAsIDJdXSkpO1xuLy8gZ2FtZU1hbmFnZXIucGxheWVyLmdhbWVCb2FyZC5hZGRTaGlwKG5ldyBTaGlwKDIsIFtbMCwgM11dKSk7XG4vLyBnYW1lTWFuYWdlci5wbGF5ZXIuZ2FtZUJvYXJkLmFkZFNoaXAobmV3IFNoaXAoMiwgW1swLCA0XV0pKTtcbi8vIGdhbWVNYW5hZ2VyLnBsYXllci5nYW1lQm9hcmQuYWRkU2hpcChuZXcgU2hpcCgyLCBbWzAsIDVdXSkpO1xuXG5nYW1lTWFuYWdlci5oYW5kbGVQbGF5ZXJTaGlwcygpO1xuZ2FtZU1hbmFnZXIuc3RhcnRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=