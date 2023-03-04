'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Module = /*#__PURE__*/function () {
  function Module() {
    _classCallCheck(this, Module);

    this.name = 'uniswap';
    this.global = null; // put by global on registration

    this.isready = false;
    this.isloading = false;
    this.web3providers = [];
  }

  _createClass(Module, [{
    key: "init",
    value: function init() {
      console.log('module init called for ' + this.name);
      var global = this.global;
      this.isready = true;
    }
  }, {
    key: "loadModule",
    value: function loadModule(parentscriptloader, callback) {
      console.log('loadModule called for module ' + this.name);
      if (this.isloading) return;
      this.isloading = true;
      var self = this;
      var global = this.global; // wallet module script loader

      var modulescriptloader; // look if uniswaploader already created (e.g. for loading in node.js)

      modulescriptloader = global.findScriptLoader('uniswaploader'); // if not, create on as child as parent script loader passed in argument

      if (!modulescriptloader) modulescriptloader = global.getScriptLoader('uniswaploader', parentscriptloader);
      var xtraroot = './includes';
      var interfaceroot = xtraroot + '/interface'; //modulescriptloader.push_script( interfaceroot + '/wallet-server-access.js');

      var moduleroot = xtraroot + '/modules/uniswap';
      modulescriptloader.push_script(moduleroot + '/model/uniswap-access.js');
      modulescriptloader.push_script(moduleroot + '/model/interface/v2/factory-contract-interface.js');
      modulescriptloader.push_script(moduleroot + '/model/interface/v2/pair-contract-interface.js');
      modulescriptloader.push_script(moduleroot + '/model/interface/v2/router02-contract-interface.js');
      modulescriptloader.load_scripts(function () {
        self.init();
        if (callback) callback(null, self);
      });
      return modulescriptloader;
    }
  }, {
    key: "_getGlobalObject",
    value: function _getGlobalObject() {
      var _global = this.global ? this.global : null;

      if (!_global) {
        var _GlobalClass2;

        if (typeof window !== 'undefined') {
          _GlobalClass2 = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
        } else if (typeof global !== 'undefined') {
          // we are in node js
          _GlobalClass2 = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
        }

        _global = _GlobalClass2.getGlobalObject();
      }

      return _global;
    }
  }, {
    key: "isReady",
    value: function isReady() {
      return this.isready;
    }
  }, {
    key: "hasLoadStarted",
    value: function hasLoadStarted() {
      return this.isloading;
    } // optional  module functions

  }, {
    key: "registerHooks",
    value: function registerHooks() {
      console.log('module registerHooks called for ' + this.name);
      var global = this.global; // signal module is ready

      var rootscriptloader = global.getRootScriptLoader();
      rootscriptloader.signalEvent('on_uniswap_module_ready');
    }
  }, {
    key: "postRegisterModule",
    value: function postRegisterModule() {
      console.log('postRegisterModule called for ' + this.name);

      if (!this.isloading) {
        var global = this.global;
        var self = this;
        var rootscriptloader = global.getRootScriptLoader();
        this.loadModule(rootscriptloader, function () {
          if (self.registerHooks) self.registerHooks();
        });
      }
    } //
    // hooks
    //
    // functions

  }, {
    key: "findWeb3Provider",
    value: function findWeb3Provider(networkid) {
      var web3providers_arr = Object.values(this.web3providers);

      for (var i = 0; i < web3providers_arr.length; i++) {
        var web3provider = web3providers_arr[i];
        if (web3provider.networkid == networkid) return web3provider;
      }
    }
  }, {
    key: "addWeb3Provider",
    value: function addWeb3Provider(scheme) {
      var schemeuuid = scheme.getSchemeUUID();
      this.web3providers[schemeuuid] = scheme.getEthNodeServerConfig();
    }
  }, {
    key: "getPriceForOutput",
    value: function () {
      var _getPriceForOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(session, scheme, token1, token2, token2amount, uniswap_conf) {
        var global, UniswapAccessClass, uniswapaccessinstance;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                global = this.global;
                UniswapAccessClass = global.getModuleClass('uniswap', 'UniswapAccess');
                uniswapaccessinstance = new UniswapAccessClass(session, this);
                return _context.abrupt("return", uniswapaccessinstance.getPriceForOutput(scheme, token1, token2, token2amount, uniswap_conf));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getPriceForOutput(_x, _x2, _x3, _x4, _x5, _x6) {
        return _getPriceForOutput.apply(this, arguments);
      }

      return getPriceForOutput;
    }()
  }, {
    key: "buyEthOnOutput",
    value: function () {
      var _buyEthOnOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(session, scheme, token1, token1amountmax, weth, ethamount, uniswap_conf, ethtx) {
        var global, UniswapAccessClass, uniswapaccessinstance;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                global = this.global;
                UniswapAccessClass = global.getModuleClass('uniswap', 'UniswapAccess');
                uniswapaccessinstance = new UniswapAccessClass(session, this);
                return _context2.abrupt("return", uniswapaccessinstance.buyEthOnOutput(scheme, token1, token1amountmax, weth, ethamount, uniswap_conf, ethtx));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function buyEthOnOutput(_x7, _x8, _x9, _x10, _x11, _x12, _x13, _x14) {
        return _buyEthOnOutput.apply(this, arguments);
      }

      return buyEthOnOutput;
    }()
  }, {
    key: "buyTokensOnOutput",
    value: function () {
      var _buyTokensOnOutput = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(session, scheme, token1, token1amountmax, token2, token2amount, uniswap_conf, ethtx) {
        var global, UniswapAccessClass, uniswapaccessinstance;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                global = this.global;
                UniswapAccessClass = global.getModuleClass('uniswap', 'UniswapAccess');
                uniswapaccessinstance = new UniswapAccessClass(session, this);
                return _context3.abrupt("return", uniswapaccessinstance.buyTokensOnOutput(scheme, token1, token1amountmax, token2, token2amount, uniswap_conf, ethtx));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function buyTokensOnOutput(_x15, _x16, _x17, _x18, _x19, _x20, _x21, _x22) {
        return _buyTokensOnOutput.apply(this, arguments);
      }

      return buyTokensOnOutput;
    }()
  }]);

  return Module;
}();

if (typeof window !== 'undefined' && typeof window.GlobalClass !== 'undefined' && window.GlobalClass) {
  var _GlobalClass = window.GlobalClass;
} else if (typeof window !== 'undefined') {
  var _GlobalClass = window && window.simplestore && window.simplestore.Global ? window.simplestore.Global : null;
} else if (typeof global !== 'undefined') {
  // we are in node js
  var _GlobalClass = global && global.simplestore && global.simplestore.Global ? global.simplestore.Global : null;
}

_GlobalClass.getGlobalObject().registerModuleObject(new Module()); // dependencies


_GlobalClass.getGlobalObject().registerModuleDepency('uniswap', 'common');