/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data_providers/base.js":
/*!********************************!*\
  !*** ./data_providers/base.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BaseDataProvider; });\nclass BaseDataProvider {\n  getLocation(name) {\n    if (typeof name === 'string') {\n      if (!this.locations || this.locations.length === 0) {\n        throw new Error('Location data could not be found');\n      }\n\n      const data = this.locations.find(l => l.name === name);\n      if (!data) {\n        throw new Error(`Could not load location data for ${name}`);\n      }\n      return data;\n    }\n    throw new Error(`We don't current support locations requested like: ${name}`);\n  }\n}\n\n\n//# sourceURL=webpack:///./data_providers/base.js?");

/***/ }),

/***/ "./data_providers/local.js":
/*!*********************************!*\
  !*** ./data_providers/local.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LocalDataProvider; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./data_providers/base.js\");\n\n\nclass LocalDataProvider extends _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(locationData) {\n    super();\n    if (!locationData.locations) {\n      throw new Error('LocalDataProvider expects first argument to have a key of Locations');\n    }\n    this.locations = locationData.locations;\n  }\n}\n\n\n//# sourceURL=webpack:///./data_providers/local.js?");

/***/ }),

/***/ "./engine/action.js":
/*!**************************!*\
  !*** ./engine/action.js ***!
  \**************************/
/*! exports provided: process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"process\", function() { return process; });\nfunction process(textInput, situation) {\n  const context = situation.objectsAndActions;\n\n  // have a list of object to interact with\n  // check to see if any of the words are the objects\n  // check to see if any of the actions are on that object\n  // if not return a falsey something\n}\n\n\n//# sourceURL=webpack:///./engine/action.js?");

/***/ }),

/***/ "./engine/dice.js":
/*!************************!*\
  !*** ./engine/dice.js ***!
  \************************/
/*! exports provided: skillAdjustment, didHappen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"skillAdjustment\", function() { return skillAdjustment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"didHappen\", function() { return didHappen; });\nconst multipliers = {\n  perception: 100,\n};\n\nfunction skillAdjustment(skill) {\n  return multipliers[skill] / 100;\n}\n\nfunction didHappen(probability, skill = 'perception') {\n  const success = probability * skillAdjustment(skill);\n  return Math.ceil(Math.random() * 100) <= success;\n}\n\n\n//# sourceURL=webpack:///./engine/dice.js?");

/***/ }),

/***/ "./engine/game.js":
/*!************************!*\
  !*** ./engine/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameEngine; });\n/* harmony import */ var _situation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./situation */ \"./engine/situation.js\");\n/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ \"./engine/action.js\");\n\n\n\nclass GameEngine {\n  constructor(api, locationName) {\n    this.api = api;\n    this.situation = null; // Situation;\n    this.load(locationName);\n  }\n\n  processCommand(command) {\n    Object(_action__WEBPACK_IMPORTED_MODULE_1__[\"process\"])(command, this.situation);\n  }\n\n  load(locationName) {\n    this.situation = new _situation__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.api.getLocation(locationName));\n  }\n}\n\n\n//# sourceURL=webpack:///./engine/game.js?");

/***/ }),

/***/ "./engine/item.js":
/*!************************!*\
  !*** ./engine/item.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/**\n * Item example structure:\n * {\n *   short: String - Identifying name\n *   type: String - Category of item\n *   describe: String - Displayed\n *   actions: Array - [Objects] that describe the programatic and story outcome\n *     of an action performed on the item\n *   items: Array - [String|Object] of items\n *   hasSeen: Boolean (false) - Indicates if the item was described before\n *   isVisible: Boolean (false) - Indicates if the item has been discovered or not\n *   visiblity: Integer - Chance out of 100 that item is seen\n *   stats: Object {\n *    weight: (optional) Number - lbs the item weighs if movable\n *    measurements: (optional) Array - [w, h, d] this is to figure out the volume of an item\n *   }\n * }\n */\nclass Item {\n  constructor(data) {\n    this.data = data;\n  }\n\n  set data(data) {\n    this.loadedData = data;\n    this.hasSeen = data.hasSeen || false;\n    this.isVisible = data.isVisible || false;\n    this.items = [];\n\n    (data.items || []).forEach((itemData) => {\n      this.items.push(new Item(itemData));\n    });\n  }\n\n  get data() {\n    return {\n      ...this.loadedData,\n      hasSeen: this.hasSeen,\n      isVisible: this.isVisible,\n    };\n  }\n\n  get describe() {\n    return this.loadedData.describe;\n  }\n\n  get itemDesciptions() {\n    return this.items.filter(item => item.isVisible).map(item => ({\n      isNew: !item.hasSeen,\n      overview: item.describe,\n    }));\n  }\n\n  get visibility() {\n    return this.loadedData.visibility || 100;\n  }\n\n  markVisible() {\n    this.isVisible = true;\n  }\n}\n\n\n//# sourceURL=webpack:///./engine/item.js?");

/***/ }),

/***/ "./engine/location.js":
/*!****************************!*\
  !*** ./engine/location.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Location; });\n/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room */ \"./engine/room.js\");\n/**\n * Location Example Structure:\n * {\n *   name: String - name of the location\n *   startRoom: Boolean - only used when it is the first location of the game\n *   rooms: Array - Room class data\n *   gridLocation: Array - X, Y coordinates of location in world\n *   area: Array - Number of times the location goes 51 units in the X, Y directions\n *   hasVisited: Boolean - Indicates if the location was described before\n * }\n *\n */\n\n\nclass Location {\n  constructor(data, startRoom) {\n    this.data = data;\n    this.startRoom = startRoom;\n  }\n\n  set data(data) {\n    this.loadedData = data;\n    this.hasSeen = data.hasSeen || false;\n    this.rooms = [];\n\n    data.rooms.forEach((roomData) => {\n      const room = new _room__WEBPACK_IMPORTED_MODULE_0__[\"default\"](roomData);\n      this.rooms.push(room);\n\n      if (this.isCurrentRoom(room)) {\n        this.currentRoom = room;\n      }\n    });\n  }\n\n  get data() {\n    return {\n      ...this.loadedData,\n      currentRoom: this.currentRoom.name,\n      rooms: this.rooms.map(room => room.data),\n      hasVisited: this.hasVisited,\n    };\n  }\n\n  isCurrentRoom(room) {\n    this.blah = room;\n    // Only have one room at the moment, but need to change this\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack:///./engine/location.js?");

/***/ }),

/***/ "./engine/room.js":
/*!************************!*\
  !*** ./engine/room.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Room; });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./engine/item.js\");\n/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice */ \"./engine/dice.js\");\n/**\n * Room example structure:\n * {\n *   id: String - Identifying name\n *   describe: String - Displayed\n *   coordinate: Array - [x, y] units inside parent Location, lower right of room\n *   dimensions: Array - [x, y, z] units inside of parent location\n *   items: Array - [String|Object] of items\n *   hasSeen: Boolean - Indicates if the room was described before\n * }\n */\n\n\n\nclass Room {\n  constructor(data) {\n    this.data = data;\n  }\n\n  set data(data) {\n    this.loadedData = data;\n    this.hasSeen = data.hasSeen || false;\n    this.items = [];\n\n    data.items.forEach((itemData) => {\n      this.items.push(new _item__WEBPACK_IMPORTED_MODULE_0__[\"default\"](itemData));\n    });\n  }\n\n  get data() {\n    return {\n      ...this.loadedData,\n      hasSeen: this.hasSeen,\n    };\n  }\n\n  get describe() {\n    this.calculateItemVisibility();\n\n    return this.loadedData.describe;\n  }\n\n  get itemDescriptions() {\n    return this.items.filter(item => item.isVisible).map(item => ({\n      isNew: !item.hasSeen,\n      overview: item.describe,\n    }));\n  }\n\n  calculateItemVisibility() {\n    this.items.forEach((item) => {\n      if (!item.isVisible) {\n        if (Object(_dice__WEBPACK_IMPORTED_MODULE_1__[\"didHappen\"])(item.visibility)) {\n          item.markVisible();\n        }\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack:///./engine/room.js?");

/***/ }),

/***/ "./engine/situation.js":
/*!*****************************!*\
  !*** ./engine/situation.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./engine/location.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n  constructor(location) {\n    this.location = new _location__WEBPACK_IMPORTED_MODULE_0__[\"default\"](location);\n    this.room = this.location.currentRoom;\n    this.focus = this.currentRoom;\n  }\n\n  set room(room) {\n    this.currentRoom = room;\n  }\n\n  get objectsAndActions() {\n    return [];\n  }\n\n  describe() {\n    return {\n      focus: this.current,\n      // enteredRoom: this.room.newItems,\n    };\n  }\n\n  get current() {\n    return {\n      isNew: !this.focus.hasSeen,\n      overview: this.focus.describe,\n      items: this.focus.itemDescriptions,\n    };\n  }\n});\n\n\n//# sourceURL=webpack:///./engine/situation.js?");

/***/ }),

/***/ "./public.js":
/*!*******************!*\
  !*** ./public.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine/game */ \"./engine/game.js\");\n/* harmony import */ var _data_providers_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data_providers/local */ \"./data_providers/local.js\");\n\n\n\nexports.Game = {\n  Engine: _engine_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  dataProviders: {\n    Local: _data_providers_local__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  }\n};\n\n// module.exports = Engine;\n\n\n//# sourceURL=webpack:///./public.js?");

/***/ })

/******/ });