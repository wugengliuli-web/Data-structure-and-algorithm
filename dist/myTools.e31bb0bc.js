// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/lib/getDateType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 判断类型的函数
 * @param {需要判断类型的变量 any} date
 * @returns {类型 String} 
 */
function getDateType(date) {
  return Object.prototype.toString.call(date).slice(8, -1);
}

var _default = getDateType;
exports.default = _default;
},{}],"src/lib/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getDateType", {
  enumerable: true,
  get: function () {
    return _getDateType.default;
  }
});

var _getDateType = _interopRequireDefault(require("./getDateType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./getDateType":"src/lib/getDateType.js"}],"src/myTool.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("./lib/index");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var myTool =
/*#__PURE__*/
function () {
  function myTool() {
    _classCallCheck(this, myTool);
  }

  _createClass(myTool, null, [{
    key: "removeRepeat",

    /**
     * 数组去重方法
     * @param {需要去重的数组 Array} array 
     * @param {是否含有引用类型,默认含有true Boolean} hasObject
     * @returns {去重后新的数组 Array}
     */
    value: function removeRepeat(array) {
      var hasObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      //如果不是一个数组,返回undefined
      if (!Array.isArray(array)) return void 0; //如果只包含基本类型

      if (!hasObject) {
        return _toConsumableArray(new Set(array));
      } else {
        var obj = {};
        var newArray = []; //返回的新数组

        array.forEach(function (item) {
          var s = JSON.stringify(item); //如果不在对象中，则插入新数组

          if (!(s in obj)) {
            newArray.push(item);
            obj[s] = true;
          }
        });
        return newArray;
      }
    }
    /**
     * 用于对象的取值
     * @param {需要索引的对象 Object} obj
     * @param {取值的内容 String} index
     * @param {如果是undefined,或者没找到,则返回的值,默认undefined any} defaultValue
     * @returns {如果值存在,返回取到的值,否则返回默认值 any}
     */

  }, {
    key: "objectIndex",
    value: function objectIndex(obj, index) {
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : void 0;
      var type = (0, _index.getDateType)(obj); //如果不是对象或者字符串,直接返回

      if (type !== 'Object' || typeof index !== 'string') {
        return defaultValue;
      } else {
        index = index.split('.');
        var ans = obj;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = index[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;

            //判断是不是对象
            if (type === 'Object') {
              //如果值存在就继续往下读取,并对除了undefined的几个为false的情况进行兼容
              if (ans[item] || Number.isNaN(ans[item]) || ans[item] === '' || ans[item] === 0 || ans[item] === false || ans[item] === 0.0 || ans[item] === null) {
                ans = ans[item];
              } else {
                return defaultValue;
              }
            } else {
              return defaultValue;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return ans;
      }
    }
    /**
     * 变量深拷贝的方法
     * @param {需要克隆的变量 any} oldSource
     * @returns {拷贝后的变量 any} 
     */

  }, {
    key: "clone",
    value: function clone(oldSource) {
      var newSource; //对变量进行类型判断
      //如果为null undefined string number boolean,直接返回

      if (typeof oldSource === null || _typeof(oldSource) !== 'object') {
        newSource = oldSource;
        return newSource;
      } else {
        var type = (0, _index.getDateType)(oldSource); //如果为对象

        if (type === 'Object') {
          newSource = JSON.parse(JSON.stringify(oldSource));
          return newSource;
        } else if (type === 'Array') {
          //如果为数组
          newSource = _toConsumableArray(oldSource);
          return newSource;
        } else if (type === 'Function') {
          newSource = oldSource;
          return newSource;
        } else if (type === 'Date') {
          newSource = new Date(oldSource.getTime());
          return newSource;
        } else {
          //如果为正则表达式
          var attrs = '';
          if (oldSource.global) attrs += 'g';
          if (oldSource.ignoreCase) attrs += 'i';
          if (oldSource.multiline) attrs += 'm';

          var _newSource = new RegExp(oldSource, attrs);

          _newSource.lastIndex = oldSource.lastIndex;
          return _newSource;
        }
      }
    }
    /**
     * 数组的扁平化
     * @param {需要扁平化的数组 Array} array 
     * @returns {扁平化之后的数组 Array}
     */

  }, {
    key: "flat",
    value: function flat(array) {
      var type = (0, _index.getDateType)(array); //如果不是数组返回undefined

      if (type !== 'Array') return void 0;else {
        //如果内部存在数组,就展开一次
        while (array.some(function (item) {
          return Array.isArray(item);
        })) {
          var _ref;

          array = (_ref = []).concat.apply(_ref, _toConsumableArray(array));
        }

        return array;
      }
    }
  }]);

  return myTool;
}();

var _default = myTool;
exports.default = _default;
},{"./lib/index":"src/lib/index.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _myTool = _interopRequireDefault(require("./src/myTool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arr = [1, 2, 3, [1, 2, 3, [1, 2, 3]], {
  name: 'aa'
}];
console.log(_myTool.default.flat(arr));
console.log(arr);
},{"./src/myTool":"src/myTool.js"}],"C:/Users/DELL/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "2237" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/DELL/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/myTools.e31bb0bc.js.map