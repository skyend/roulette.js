(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("rouletter", [], factory);
	else if(typeof exports === 'object')
		exports["rouletter"] = factory();
	else
		root["rouletter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Roulette.js":
/*!*************************!*\
  !*** ./src/Roulette.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Roulette = void 0;

var _part = _interopRequireDefault(__webpack_require__(/*! ./part */ "./src/part.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Roulette =
/*#__PURE__*/
function () {
  function Roulette(targetElementSelector) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$translateXPerSec = _ref.translateXPerSecond,
        translateXPerSecond = _ref$translateXPerSec === void 0 ? 1000 : _ref$translateXPerSec,
        _ref$minTranslateXPer = _ref.minTranslateXPerSecond,
        minTranslateXPerSecond = _ref$minTranslateXPer === void 0 ? 10 : _ref$minTranslateXPer,
        _ref$fps = _ref.fps,
        fps = _ref$fps === void 0 ? 60 : _ref$fps,
        partWidth = _ref.partWidth,
        _ref$xReductionPercen = _ref.xReductionPercentagePerSecond,
        xReductionPercentagePerSecond = _ref$xReductionPercen === void 0 ? 0 : _ref$xReductionPercen,
        _ref$marginX = _ref.marginX,
        marginX = _ref$marginX === void 0 ? 0 : _ref$marginX,
        cursorElement = _ref.cursorElement,
        _ref$onStop = _ref.onStop,
        onStop = _ref$onStop === void 0 ? null : _ref$onStop;

    _classCallCheck(this, Roulette);

    this.translateXPerSecond = translateXPerSecond;
    this.minTranslateXPerSecond = minTranslateXPerSecond;
    this.fps = 60;
    this.targetElement = document.querySelector(targetElementSelector);
    this.partWidth = partWidth;
    this.xReductionPercentagePerSecond = xReductionPercentagePerSecond;
    this.marginX = marginX;
    this.centerCursorElement = cursorElement;
    this.onStop = onStop;
    this.parts = [];
  }

  _createClass(Roulette, [{
    key: "init",
    value: function init() {
      this.destroy();
      var pane = this.targetElement.querySelector('.roulette-pane');
      var partElements = pane.querySelectorAll('.roulette-part');
      var worldRect = {
        width: this.partWidth * partElements.length + this.marginX * 2 * (partElements.length + 0.5),
        height: 60
      };
      pane.style.width = worldRect.width + 'px';
      pane.style.overflow = 'hidden';

      for (var i = 0; i < partElements.length; i++) {
        var part = new _part.default(partElements[i], worldRect);
        part.xReductionPercentagePerSecond = this.xReductionPercentagePerSecond;
        part.marginX = this.marginX;
        part.x = this.partWidth * i + this.marginX * i + this.marginX * (i + 1);
        this.parts.push(part);
        this.render();
      }

      if (this.centerCursorElement) {
        var width = this.centerCursorElement.offsetWidth;
        this.centerCursorElement.style.left = worldRect.width / 2 - width / 2 + 'px';
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      for (var i = 0; i < this.parts.length; i++) {
        this.parts[i].destroy();
      }

      this.parts = [];
    }
  }, {
    key: "start",
    value: function start(_ref2) {
      var _this = this;

      var stopTarget = _ref2.stopTarget;
      this.stopTarget = stopTarget;
      this.stop();
      this.startTime = Date.now();
      this.prevTime = this.startTime;

      for (var i = 0; i < this.parts.length; i++) {
        this.parts[i].translateXPerSecond = this.translateXPerSecond;
        this.parts[i].minTranslateXPerSecond = this.minTranslateXPerSecond;

        if (this.parts[i].partElement === this.stopTarget) {
          this.parts[i].isTarget = true;

          this.parts[i].onStopRequest = function (stopElement) {
            return _this.onArrival(stopElement);
          };
        } else {
          this.parts[i].isTarget = false;
        }
      }

      this.itv = setInterval(this.loop.bind(this), 1000 / this.fps);
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.itv) {
        clearInterval(this.itv);
      }
    }
  }, {
    key: "onArrival",
    value: function onArrival(stopElement) {
      this.stop();

      if (typeof this.onStop === 'function') {
        this.onStop(stopElement);
      }
    }
  }, {
    key: "loop",
    value: function loop() {
      var current = Date.now();
      var elapsed = current - this.startTime;
      var delta = current - this.prevTime;
      this.prevTime = current;
      this.processing(elapsed, delta, current);
      this.render();
    }
  }, {
    key: "processing",
    value: function processing(elapsed, delta, current) {
      for (var i = 0; i < this.parts.length; i++) {
        this.parts[i].processing(elapsed, delta, current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      for (var i = 0; i < this.parts.length; i++) {
        this.parts[i].render();
      }
    }
  }]);

  return Roulette;
}();

exports.Roulette = Roulette;
Roulette.Author = 'Seung Hun Han ( skyend@github, theskyend0@gmail.com )';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Roulette", {
  enumerable: true,
  get: function get() {
    return _Roulette.Roulette;
  }
});

var _Roulette = __webpack_require__(/*! ./Roulette */ "./src/Roulette.js");

/**
 * @author Seung Hun Han ( skyend@github.com, theskyend0@gmail.com )
 */
global.Rouletter = _Roulette.Roulette;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/part.js":
/*!*********************!*\
  !*** ./src/part.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Part =
/*#__PURE__*/
function () {
  function Part(partElement, worldRect) {
    _classCallCheck(this, Part);

    this.partElement = partElement;
    this.x = 0;
    this.y = 0;
    this.translateXPerSecond = 0;
    this.marginX = 0;
    this.xReductionPercentagePerSecond = 0;
    this.minTranslateXPerSecond = 0;
    this.isTarget = false;
    this.onStopRequest = null;
    this.worldRect = worldRect;
    this.paddingElement = partElement.cloneNode();
    this.paddingElement.innerHTML = this.partElement.innerHTML;
    this.paddingElement.style.display = 'none';
    this.partElement.parentNode.appendChild(this.paddingElement);
    this.width = this.partElement.offsetWidth;
    this.paddingX = 0;
    this.enabledPadding = false;
  }

  _createClass(Part, [{
    key: "processing",
    value: function processing(elapsed, delta, current) {
      var velocity = this.translateXPerSecond / 1000;
      var stride = velocity * delta;

      if (this.worldRect.width < this.x + this.marginX) {
        this.x = this.x + this.marginX - this.worldRect.width;
      }

      if (this.x + this.marginX + this.width > this.worldRect.width) {
        this.enabledPadding = true;
        this.paddingX = this.width - (this.worldRect.width - this.x + this.width + this.marginX) + this.marginX;
      } else {
        this.enabledPadding = false;
      }

      this.x += stride;
      this.translateXPerSecond = Math.max(this.minTranslateXPerSecond, this.translateXPerSecond * (1 - this.xReductionPercentagePerSecond / 1000 * delta));

      if (this.translateXPerSecond === this.minTranslateXPerSecond && this.isTarget) {
        if (this.x + this.marginX > this.worldRect.width / 2 - this.width / 2 && this.x + this.marginX < this.worldRect.width / 2 + this.width / 2) {
          if (typeof this.onStopRequest === 'function') {
            this.onStopRequest(this.partElement);
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.partElement.style.transform = 'translatex(' + this.x + 'px)';

      if (this.enabledPadding) {
        this.paddingElement.style.display = 'inline-block';
        this.paddingElement.style.transform = 'translatex(' + this.paddingX + 'px)';
      } else {
        this.paddingElement.style.display = 'none';
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.partElement.parentNode.removeChild(this.paddingElement);
    }
  }]);

  return Part;
}();

exports.default = Part;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=rouletter.js.map