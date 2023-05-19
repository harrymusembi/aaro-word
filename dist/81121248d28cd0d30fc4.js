function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// import { exit } from "process";

/* global document, Office, Word */

// eslint-disable-next-line office-addins/no-office-initialize
Office.initialize = function () {};
Office.onReady(function (info) {
  if (info.host === Office.HostType.Word) {
    document.getElementById("noteThree").onclick = insertTable;
    document.getElementById("consolidatedBalance").onclick = consolidatedBalanceProcess;
    document.getElementById("noteEight").onclick = insertTableNoteEightProcess;
    document.getElementById("PotraitNoteEight").onclick = changePageOrientationToPotrait;
    document.getElementById("LandscapeNoteEight").onclick = changePageOrientationToLandscape;
  }
});
function changePageOrientationToLandscape() {
  return _changePageOrientationToLandscape.apply(this, arguments);
}
function _changePageOrientationToLandscape() {
  _changePageOrientationToLandscape = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Word.run( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(context) {
              var sections, _iterator6, _step6, section;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    sections = context.document.sections;
                    sections.load("items");

                    // Synchronize with the document
                    _context.next = 4;
                    return context.sync();
                  case 4:
                    // Load the pageSetup property for each section and change the orientation to landscape
                    _iterator6 = _createForOfIteratorHelper(sections.items);
                    _context.prev = 5;
                    _iterator6.s();
                  case 7:
                    if ((_step6 = _iterator6.n()).done) {
                      _context.next = 15;
                      break;
                    }
                    section = _step6.value;
                    section.load("pageSetup");
                    _context.next = 12;
                    return context.sync();
                  case 12:
                    section.pageSetup.orientation = 'landscape';
                  case 13:
                    _context.next = 7;
                    break;
                  case 15:
                    _context.next = 20;
                    break;
                  case 17:
                    _context.prev = 17;
                    _context.t0 = _context["catch"](5);
                    _iterator6.e(_context.t0);
                  case 20:
                    _context.prev = 20;
                    _iterator6.f();
                    return _context.finish(20);
                  case 23:
                    _context.next = 25;
                    return context.sync();
                  case 25:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[5, 17, 20, 23]]);
            }));
            return function (_x) {
              return _ref.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _changePageOrientationToLandscape.apply(this, arguments);
}
function changePageOrientationToPotrait() {
  return _changePageOrientationToPotrait.apply(this, arguments);
} // function getCss() {
//   const cssParser = require('css-parser');
//   // const fs = require('fs');
//   const cssUrl = document.querySelector('link[rel="stylesheet"]').href;
//   console.log(cssUrl);
//   fetch(cssUrl)
//     .then(res => res.text())
//     .then(css => {
//       const parsedCss = cssParser(css);
//       const cssRules = parsedCss.stylesheet.rules;
//       // Print out each CSS rule
//       for (const rule of cssRules) {
//         console.log(rule.selector);
//         for (const declaration of rule.declarations) {
//           console.log(`  ${declaration.property}: ${declaration.value};`);
//         }
//       }
//     })
//     .catch(err => console.error(err));
// }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function _changePageOrientationToPotrait() {
  _changePageOrientationToPotrait = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Word.run( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(context) {
              var sections, _iterator7, _step7, section;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    // Load the sections and pageSetup
                    sections = context.document.sections;
                    sections.load("pageSetup");

                    // Synchronize with the document
                    _context3.next = 4;
                    return context.sync();
                  case 4:
                    // Change the orientation of each section to landscape
                    _iterator7 = _createForOfIteratorHelper(sections.items);
                    try {
                      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                        section = _step7.value;
                        section.pageSetup.orientation = Word.Orientation.portrait;
                      }

                      // Synchronize the changes
                    } catch (err) {
                      _iterator7.e(err);
                    } finally {
                      _iterator7.f();
                    }
                    _context3.next = 8;
                    return context.sync();
                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }());
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _changePageOrientationToPotrait.apply(this, arguments);
}
function consolidatedBalance() {
  var data = {
    "headers": [[{
      "code": "",
      "codeVector": null,
      "description": "",
      "dimension": "",
      "indentation": 0,
      "span": 1,
      "column": 0
    }, {
      "code": "2023",
      "codeVector": null,
      "description": "",
      "dimension": "Year",
      "indentation": 0,
      "span": 1,
      "column": 1
    }, {
      "code": "2022",
      "codeVector": null,
      "description": "",
      "dimension": "Year",
      "indentation": 0,
      "span": 1,
      "column": 2
    }]],
    "rows": [{
      "header": {
        "code": "ASSETS",
        "codeVector": null,
        "description": "",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "1099",
        "codeVector": null,
        "description": "Immaterial assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2784370.284099999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2722491.656499999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1199",
        "codeVector": null,
        "description": "Land and buildings",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 3672367.8959,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3553843.8897999995,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1299",
        "codeVector": null,
        "description": "Tangible fixed assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 4938422.7688,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 4710700.190399999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1399",
        "codeVector": null,
        "description": "Financial fixed assets",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1227453.1841000002,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 7719189.613299999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1499",
        "codeVector": null,
        "description": "Inventories and prod/work in progress",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 530428.7646,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1023793.2161,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1599",
        "codeVector": null,
        "description": "Accounts receivable",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5476167.5607,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2439469.66,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1699",
        "codeVector": null,
        "description": "Other current receivables",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 624037.702,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1849449.3997,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1799",
        "codeVector": null,
        "description": "Prepaid expenses and accrued income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 863263.0499999999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2311087.4335000003,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1899",
        "codeVector": null,
        "description": "Short-term investments",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 240438.24000000002,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 879121.29,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1999",
        "codeVector": null,
        "description": "Cash and bank",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 8839193.112200001,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 6166926.1796,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "1TA",
        "codeVector": null,
        "description": "TOTAL ASSETS",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.919614256240001E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3.3376072528900005E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "LIABILITIES",
        "codeVector": null,
        "description": "",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2081",
        "codeVector": null,
        "description": "Share capital",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5000.3515,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 5000.3515,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2082",
        "codeVector": null,
        "description": "Unregistered share capital",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2085",
        "codeVector": null,
        "description": "Revaluation reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -42636.839,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -42636.839,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2086",
        "codeVector": null,
        "description": "Statutory reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -19137.7374,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -19137.7374,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2087",
        "codeVector": null,
        "description": "Equity share, associated companies",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -1066.6447000000007,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -11850.144799999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20RE",
        "codeVector": null,
        "description": "Restricted equity",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -64971.891,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -64430.51509999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2091",
        "codeVector": null,
        "description": "Retained profit",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1356545.3476,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 918665.3622,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2094",
        "codeVector": null,
        "description": "Own shares",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2096",
        "codeVector": null,
        "description": "Reserves (not IS)",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 280.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 280.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2097",
        "codeVector": null,
        "description": "Share premium reserve",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2099",
        "codeVector": null,
        "description": "Net income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 299857.7942,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 419490.7998999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20UE",
        "codeVector": null,
        "description": "Unrestricted equity",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1878792.5190999997,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1563028.4264,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "20SE",
        "codeVector": null,
        "description": "EQUITY",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1813820.6280999999,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1498597.9113000007,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2100",
        "codeVector": null,
        "description": "Minority interest",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 81599.3391,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 84842.6517,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2199",
        "codeVector": null,
        "description": "Untaxed reserves",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2299",
        "codeVector": null,
        "description": "Provisions",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 182568.1147,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 908241.5651000001,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2399",
        "codeVector": null,
        "description": "Long-term liabilities",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 303540.8893,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2444254.8075,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2499",
        "codeVector": null,
        "description": "Current liabilities to cred inst, cust and suppl",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2244564.9480999997,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1716403.7736000002,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2599",
        "codeVector": null,
        "description": "Income tax liability",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 223704.0,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 413639.15,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2699",
        "codeVector": null,
        "description": "VAT and excise duty",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "2799",
        "codeVector": null,
        "description": "Employee withholding taxes etc",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 350510.5,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 359343.3,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2899",
        "codeVector": null,
        "description": "Other current liabilities",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.2049037679999996E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 2.1874456019899998E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2999",
        "codeVector": null,
        "description": "Accrued expenses & deferred income",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 1946796.4016999998,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 4076293.3749,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2TLE",
        "codeVector": null,
        "description": "EQUITY AND LIABILITIES",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 2.9196142500999987E7,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 3.3376072553999998E7,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }],
    "inputAvailability": {
      "enabled": false,
      "preValidation": null,
      "rowSpec": null
    },
    "staticAxis": {
      "criteria": [{
        "dimension": "Currency",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "TSEK",
          "label": ""
        }]
      }, {
        "dimension": "PeriodType",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "Actual",
          "label": ""
        }]
      }, {
        "dimension": "PeriodIndex",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "12",
          "label": ""
        }]
      }],
      "expand": [],
      "topN": null,
      "removeEmpty": true,
      "compactLayout": false,
      "expandPaths": [],
      "collapsePaths": []
    }
  };
  var tableHeaders = "<tr class='table-dark'>";
  var _iterator = _createForOfIteratorHelper(data.headers[0]),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var header = _step.value;
      tableHeaders += "<th>" + header.code + "</th>";
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  tableHeaders += "</tr>";
  var tableRows = "";
  var _iterator2 = _createForOfIteratorHelper(data.rows),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var row = _step2.value;
      tableRows += "<tr>";
      tableRows += "<td>" + row.header.description + "</td>";
      if (row.values.length === 0) {
        // tableRows += "<td></td>";
        console.log(data.headers[0].length);
        for (var i = 1; i < data.headers[0].length; i++) {
          tableRows += "<td></td>";
        }
      } else {
        var _iterator3 = _createForOfIteratorHelper(row.values),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var value = _step3.value;
            tableRows += "<td>" + value.value.toFixed(2) + "</td>";
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      tableRows += "</tr>";
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var tableHTML = "<table class='table table-bordered table-condensed' style='border: 1px solid #ddd' id='tableTest'>" + tableHeaders + tableRows + "</table>";

  // var resp = document.getElementById("jsonTable").innerHTML = tableHTML;
  return tableHTML;
}
function noteEight() {
  var data = {
    "headers": [[{
      "code": "",
      "codeVector": null,
      "description": "",
      "dimension": "",
      "indentation": 0,
      "span": 1,
      "column": 0
    }, {
      "code": "GROUP",
      "codeVector": null,
      "description": "Group",
      "dimension": "Group7",
      "indentation": 0,
      "span": 8,
      "column": 1
    }], [{
      "code": "",
      "codeVector": null,
      "description": "",
      "dimension": "",
      "indentation": 0,
      "span": 1,
      "column": 0
    }, {
      "code": null,
      "codeVector": ["101001", "101011", "101015", "101021", "101031", "101049", "1010A", "101051", "101065", "101071", "101081", "101061", "101089", "1010D", "10109001", "10109015", "10109021", "10109031", "10109061", "10109018", "10109019", "10109049", "1010WU", "10109551", "10109565", "10109571", "10109541", "10109581", "10109585", "10109586", "10109589", "1010WD", "1010"],
      "description": "1010 Capitalised#expenditure",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 2
    }, {
      "code": null,
      "codeVector": ["103001", "103011", "103015", "103021", "103031", "103049", "1030A", "103051", "103065", "103071", "103081", "103061", "103089", "1030D", "10309001", "10309015", "10309021", "10309031", "10309061", "10309018", "10309019", "10309049", "1030WU", "10309551", "10309565", "10309571", "10309541", "10309581", "10309585", "10309586", "10309589", "1030WD", "1030"],
      "description": "1030 Patents",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 3
    }, {
      "code": null,
      "codeVector": ["104001", "104011", "104015", "104021", "104031", "104049", "1040A", "104051", "104065", "104071", "104081", "104061", "104089", "1040D", "10409001", "10409015", "10409021", "10409031", "10409061", "10409018", "10409019", "10409049", "1040WU", "10409551", "10409565", "10409571", "10409541", "10409581", "10409585", "10409586", "10409589", "1040WD", "1040"],
      "description": "1040 Licenses",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 4
    }, {
      "code": null,
      "codeVector": ["105001", "105011", "105015", "105021", "105031", "105049", "1050A", "105051", "105065", "105071", "105081", "105061", "105089", "1050D", "10509001", "10509015", "10509021", "10509031", "10509061", "10509018", "10509019", "10509049", "1050WU", "10509551", "10509565", "10509571", "10509541", "10509581", "10509585", "10509586", "10509589", "1050WD", "1050"],
      "description": "1050 Trademarks",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 5
    }, {
      "code": null,
      "codeVector": ["107001", "107011", "107015", "107021", "107031", "107049", "1070A", "107051", "107065", "107071", "107081", "107061", "107089", "1070D", "10709001", "10709015", "10709021", "10709031", "10709061", "10709018", "10709019", "10709049", "1070WU", "10709551", "10709565", "10709571", "10709541", "10709581", "10709585", "10709586", "10709589", "1070WD", "1070"],
      "description": "1070 Goodwill",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 6
    }, {
      "code": null,
      "codeVector": ["108001", "108011", "108015", "108021", "108031", "108049", "1080A", "1080"],
      "description": "1080 Advance#payments",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 7
    }, {
      "code": null,
      "codeVector": ["109001", "109011", "109015", "109021", "109031", "109049", "1090A", "109051", "109065", "109071", "109081", "109061", "109089", "1090D", "10909001", "10909015", "10909021", "10909031", "10909061", "10909018", "10909019", "10909049", "1090WU", "10909551", "10909565", "10909571", "10909541", "10909581", "10909585", "10909586", "10909589", "1090WD", "1090"],
      "description": "1090 Other#intangible#fixed assets",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 8
    }, {
      "code": null,
      "codeVector": ["10XX01", "10XX11", "10XX15", "10XX21", "10XX31", "10XX49", "10XXA", "10XX51", "10XX65", "10XX71", "10XX81", "10XX61", "10XX89", "10XXD", "10XX9001", "10XX9015", "10XX9021", "10XX9031", "10XX9061", "10XX9018", "10XX9019", "10XX9049", "10XXWU", "10XX9551", "10XX9565", "10XX9571", "10XX9541", "10XX9581", "10XX9585", "10XX9586", "10XX9589", "10XXWD", "1099", "1090SP", "1090TSS", "1090R", "3971R", "7971R", "1090DIFF"],
      "description": "TOTAL#Intangible#fixed assets",
      "dimension": "Code",
      "indentation": 1,
      "span": 1,
      "column": 9
    }]],
    "rows": [{
      "header": {
        "code": "2023",
        "codeVector": null,
        "description": "",
        "dimension": "Year",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "ACQUISITIONS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101001", "103001", "104001", "105001", "107001", "108001", "109001", "10XX01"],
        "description": "Opening accumulated acquisition values",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 564466.2812,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 256049.89670000004,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 749079.8308,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 99932.0956,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 212420.6393,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 929682.2173,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2811630.9609000003,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101011", "103011", "104011", "105011", "107011", "108011", "109011", "10XX11"],
        "description": "This year´s gross investments",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 8116.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 3677.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 10713.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 6818.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 13391.0,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 42715.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101015", "103015", "104015", "105015", "107015", "108015", "109015", "10XX15"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 25000.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -32250.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -7250.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101021", "103021", "104021", "105021", "107021", "108021", "109021", "10XX21"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -97.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -43.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -127.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -81.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -159.0,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": -507.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101031", "103031", "104031", "105031", "107031", "108031", "109031", "10XX31"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 11.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 5.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 14.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 52259.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 18.0,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 52307.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101049", "103049", "104049", "105049", "107049", "108049", "109049", "10XX49"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -1317.4829,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -596.815,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -1729.4126,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 101.99,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 50.6,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -2175.5545,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": -5666.674999999999,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010A", "1030A", "1040A", "1050A", "1070A", "1080A", "1090A", "10XXA"],
        "description": "Closing accumulated acquisition value",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 571178.7983,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 284092.08170000004,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 757950.4182,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 100034.0856,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 239217.23930000002,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 940756.6628,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2893229.2859000005,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "AMORTIZATION",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101051", "103051", "104051", "105051", "107051", "109051", "10XX51"],
        "description": "Opening accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -65849.99799999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -29908.7113,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -87408.3223,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -11997.4995,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -17982.3264,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -213146.85749999998,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101065", "103065", "104065", "105065", "107065", "109065", "10XX65"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101071", "103071", "104071", "105071", "107071", "109071", "10XX71"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 14.2994,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 14.2994,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101081", "103081", "104081", "105081", "107081", "109081", "10XX81"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -14.2994,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -14.2994,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101061", "103061", "104061", "105061", "107061", "109061", "10XX61"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7973.921200000001,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -3657.3732,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -5775.570599999999,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -2060.9656999999997,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -7905.1979,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -27373.0286,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101089", "103089", "104089", "105089", "107089", "109089", "10XX89"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 119.7245,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 54.076699999999995,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 184.99569999999997,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -22.1585,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -12.090300000000001,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 324.5480999999999,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010D", "1030D", "1040D", "1050D", "1070D", "1090D", "10XXD"],
        "description": "Closing accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -73704.1947,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -33512.0078,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -92998.8972,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -14080.6237,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -25899.6146,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -240195.33800000002,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-UPS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109001", "10309001", "10409001", "10509001", "10709001", "10909001", "10XX9001"],
        "description": "Opening accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 43344.076700000005,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 19600.5508,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 57164.4272,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7200.7,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 2070.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 129379.7547,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109015", "10309015", "10409015", "10509015", "10709015", "10909015", "10XX9015"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 618.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 279.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 814.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 519.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 2230.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109021", "10309021", "10409021", "10509021", "10709021", "10909021", "10XX9021"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109031", "10309031", "10409031", "10509031", "10709031", "10909031", "10XX9031"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109061", "10309061", "10409061", "10509061", "10709061", "10909061", "10XX9061"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109018", "10309018", "10409018", "10509018", "10709018", "10909018", "10XX9018"],
        "description": "Write-ups for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109019", "10309019", "10409019", "10509019", "10709019", "10909019", "10XX9019"],
        "description": "Write-down of write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109049", "10309049", "10409049", "10509049", "10709049", "10909049", "10XX9049"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -101.39359999999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -45.844899999999996,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -133.72,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7.54,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -139.6985,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WU", "1030WU", "1040WU", "1050WU", "1070WU", "1090WU", "10XXWU"],
        "description": "Closing accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 43860.6831,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 19833.7059,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 57844.7072,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7208.24,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 2589.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 131336.33620000002,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-DOWNS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109551", "10309551", "10409551", "10509551", "10709551", "10909551", "10XX9551"],
        "description": "Opening accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109565", "10309565", "10409565", "10509565", "10709565", "10909565", "10XX9565"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109571", "10309571", "10409571", "10509571", "10709571", "10909571", "10XX9571"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109541", "10309541", "10409541", "10509541", "10709541", "10909541", "10XX9541"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109581", "10309581", "10409581", "10509581", "10709581", "10909581", "10XX9581"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109585", "10309585", "10409585", "10509585", "10709585", "10909585", "10XX9585"],
        "description": "Write-downs for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109586", "10309586", "10409586", "10509586", "10709586", "10909586", "10XX9586"],
        "description": "Write-up of write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109589", "10309589", "10409589", "10509589", "10709589", "10909589", "10XX9589"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WD", "1030WD", "1040WD", "1050WD", "1070WD", "1090WD", "10XXWD"],
        "description": "Closing accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010", "1030", "1040", "1050", "1070", "1080", "1090", "1099"],
        "description": "Closing residual value according to plan",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 541335.2866999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 270413.7798000001,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 722796.2282,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 93161.7019,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 215906.62470000001,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 940756.6628,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2784370.2841,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090SP"],
        "description": "Sales price",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090TSS"],
        "description": "Total sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -492.7006,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090R"],
        "description": "Realization result, this year specification",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -492.7006,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["3971R"],
        "description": "Realization income",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["7971R"],
        "description": "Realization loss",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090DIFF"],
        "description": "Difference in specification vs IS_ALL",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -492.7006,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "2022",
        "codeVector": null,
        "description": "",
        "dimension": "Year",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "ACQUISITIONS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101001", "103001", "104001", "105001", "107001", "108001", "109001", "10XX01"],
        "description": "Opening accumulated acquisition values",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 280267.761,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 127256.92880000001,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 369652.9275,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 99280.8721,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 144372.91,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 460759.7485,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 1481591.1479,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101011", "103011", "104011", "105011", "107011", "108011", "109011", "10XX11"],
        "description": "This year´s gross investments",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 289060.61,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 130945.32,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 381585.36000000004,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 20378.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 476960.72000000003,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 1298930.01,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101015", "103015", "104015", "105015", "107015", "108015", "109015", "10XX15"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 48041.1393,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 48041.1393,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101021", "103021", "104021", "105021", "107021", "108021", "109021", "10XX21"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -10476.519999999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -4720.95,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -13837.4,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -129.0,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -241.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -17295.75,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": -46700.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101031", "103031", "104031", "105031", "107031", "108031", "109031", "10XX31"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 385.10999999999996,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 196.79999999999998,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -1175.76,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 9.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 641.85,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 56.99999999999994,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101049", "103049", "104049", "105049", "107049", "108049", "109049", "10XX49"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5229.3202,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 2371.7979,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 6885.953300000001,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 780.2235000000001,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -139.41,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 8615.6488,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 23743.5337,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010A", "1030A", "1040A", "1050A", "1070A", "1080A", "1090A", "10XXA"],
        "description": "Closing accumulated acquisition value",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 564466.2812,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 256049.8967,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 743111.0808000001,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 99932.0956,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 212420.6393,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 929682.2173,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2805662.2109000003,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "AMORTIZATION",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101051", "103051", "104051", "105051", "107051", "109051", "10XX51"],
        "description": "Opening accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -32616.7047,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -14825.9244,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -43006.98569999999,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -11376.6799,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -28710.3236,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -130536.6183,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101065", "103065", "104065", "105065", "107065", "109065", "10XX65"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101071", "103071", "104071", "105071", "107071", "109071", "10XX71"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 821.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 372.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 1083.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 20.0,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 15000.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 17296.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101081", "103081", "104081", "105081", "107081", "109081", "10XX81"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["101061", "103061", "104061", "105061", "107061", "109061", "10XX61"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -33444.4673,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -15177.938699999999,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -44083.6872,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -548.076,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -4259.2216,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -97513.3908,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["101089", "103089", "104089", "105089", "107089", "109089", "10XX89"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -609.826,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -276.8482,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -804.101,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -92.7436,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -12.7812,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -1796.3000000000002,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010D", "1030D", "1040D", "1050D", "1070D", "1090D", "10XXD"],
        "description": "Closing accumulated amortization",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -65849.99799999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -29908.7113,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -86811.7739,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -11997.4995,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -17982.326399999998,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -212550.30909999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-UPS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109001", "10309001", "10409001", "10509001", "10709001", "10909001", "10XX9001"],
        "description": "Opening accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 21485.2515,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 9716.012,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 28333.15,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7243.019,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 519.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 67296.4325,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109015", "10309015", "10409015", "10509015", "10709015", "10909015", "10XX9015"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 21999.21,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 9947.92,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 29015.600000000002,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 1551.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 62513.729999999996,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109021", "10309021", "10409021", "10509021", "10709021", "10909021", "10XX9021"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -542.0,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": -245.0,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": -714.0,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": -100.0,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": -1601.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109031", "10309031", "10409031", "10509031", "10709031", "10909031", "10XX9031"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109061", "10309061", "10409061", "10509061", "10709061", "10909061", "10XX9061"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109018", "10309018", "10409018", "10509018", "10709018", "10909018", "10XX9018"],
        "description": "Write-ups for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109019", "10309019", "10409019", "10509019", "10709019", "10909019", "10XX9019"],
        "description": "Write-down of write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109049", "10309049", "10409049", "10509049", "10709049", "10909049", "10XX9049"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 401.61519999999996,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 181.6188,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 529.6772,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 57.681,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 640.915,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WU", "1030WU", "1040WU", "1050WU", "1070WU", "1090WU", "10XXWU"],
        "description": "Closing accumulated write-ups",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 43344.0767,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 19600.5508,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 57164.427200000006,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 7200.7,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 2070.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 129379.75469999999,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "WRITE-DOWNS",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109551", "10309551", "10409551", "10509551", "10709551", "10909551", "10XX9551"],
        "description": "Opening accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -5000.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": -5000.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109565", "10309565", "10409565", "10509565", "10709565", "10909565", "10XX9565"],
        "description": "Acquisitions",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109571", "10309571", "10409571", "10509571", "10709571", "10909571", "10XX9571"],
        "description": "Sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 5000.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 5000.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109541", "10309541", "10409541", "10509541", "10709541", "10909541", "10XX9541"],
        "description": "Reclassification/internal transfers",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109581", "10309581", "10409581", "10509581", "10709581", "10909581", "10XX9581"],
        "description": "Amortization for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109585", "10309585", "10409585", "10509585", "10709585", "10909585", "10XX9585"],
        "description": "Write-downs for the year",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109586", "10309586", "10409586", "10509586", "10709586", "10909586", "10XX9586"],
        "description": "Write-up of write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["10109589", "10309589", "10409589", "10509589", "10709589", "10909589", "10XX9589"],
        "description": "Translation difference",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010WD", "1030WD", "1040WD", "1050WD", "1070WD", "1090WD", "10XXWD"],
        "description": "Closing accumulated write-downs",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 0.0,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 0.0,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1010", "1030", "1040", "1050", "1070", "1080", "1090", "1099"],
        "description": "Closing residual value according to plan",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": 541960.3598999999,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }, {
        "value": 245741.7362,
        "format": "#,##0",
        "column": 3,
        "inputValidationErrors": null
      }, {
        "value": 713463.7341,
        "format": "#,##0",
        "column": 4,
        "inputValidationErrors": null
      }, {
        "value": 95135.29609999999,
        "format": "#,##0",
        "column": 5,
        "inputValidationErrors": null
      }, {
        "value": 196508.3129,
        "format": "#,##0",
        "column": 6,
        "inputValidationErrors": null
      }, {
        "value": 929682.2173,
        "format": "#,##0",
        "column": 7,
        "inputValidationErrors": null
      }, {
        "value": 2722491.6565,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": [],
        "description": "",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090SP"],
        "description": "Sales price",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090TSS"],
        "description": "Total sold/scrapped",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -26005.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090R"],
        "description": "Realization result, this year specification",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -26005.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": null,
        "codeVector": ["3971R"],
        "description": "Realization income",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["7971R"],
        "description": "Realization loss",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": null,
        "codeVector": ["1090DIFF"],
        "description": "Difference in specification vs IS_ALL",
        "dimension": "Code",
        "indentation": 1,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -26005.619999999995,
        "format": "#,##0",
        "column": 9,
        "inputValidationErrors": null
      }]
    }],
    "inputAvailability": {
      "enabled": false,
      "preValidation": null,
      "rowSpec": null
    },
    "staticAxis": {
      "criteria": [{
        "dimension": "Currency",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "TSEK",
          "label": ""
        }]
      }, {
        "dimension": "PeriodType",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "Actual",
          "label": ""
        }]
      }, {
        "dimension": "PeriodIndex",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "12",
          "label": ""
        }]
      }],
      "expand": [],
      "topN": null,
      "removeEmpty": false,
      "compactLayout": false,
      "expandPaths": [],
      "collapsePaths": []
    }
  };
  var tableData = [];
  var columnIndex = {};
  var currentColumn = 1;

  // Build header row
  data.headers.forEach(function (row) {
    var headerRow = new Array(data.headers[1].length + 1).fill('');
    row.forEach(function (header) {
      var span = header.span || 1;
      if (header.code) {
        for (var i = 0; i < span; i++) {
          headerRow[header.column - 1 + i] = header.description;
        }
      }
    });
    tableData.push(headerRow);
  });

  // Add row data
  data.rows.forEach(function (row) {
    var rowData = [row.header.description];
    var currentColumn = 2;
    Object.values(columnIndex).forEach(function (columnHeader) {
      if (columnHeader !== 'Group') {
        rowData.push('');
      }
    });
    row.values.forEach(function (value) {
      var span = value.header ? value.header.span || 1 : 1;
      for (var i = 0; i < span; i++) {
        var columnHeader = columnIndex[currentColumn];
        if (columnHeader !== undefined && columnHeader !== null && columnHeader !== 'Group') {
          rowData[currentColumn - 1] = value.value.toFixed(2);
        }
        currentColumn++;
      }
    });
    tableData.push(rowData);
  });
  return tableData;
}

// function noteEight() {

//   const tableData = [];

//   // Build column index dictionary
//   const columnIndex = {};
//   console.log(data.headers)
//   buildColumnIndex(data.headers, columnIndex);

//   // Add headers to tableData
//   const headerRow = buildHeaderRow(data.headers);
//   tableData.push(headerRow);

//   // Add rows to tableData
//   data.rows.forEach((row) => {
//     const rowData = [row.header.description];
//     if (row.values.length === 0) {
//       // If row has no values, add empty cells
//       for (let i = 1; i < headerRow.length; i++) {
//         rowData.push('');
//       }
//     } else {
//       // Add values to corresponding columns
//       let currentIndex = 0;
//       row.values.forEach((value) => {
//         const span = value.header ? value.header.span || 1 : 1;
//         for (let i = 0; i < span; i++) {
//           const columnIndexValue = columnIndex[currentIndex];
//           if (columnIndexValue !== undefined && columnIndexValue !== null) {
//             rowData[columnIndexValue] = value.value.toFixed(2);
//           }
//           currentIndex++;
//         }
//       });
//     }
//     tableData.push(rowData);
//   });

//   return tableData;
// }

function get_data() {
  var data = {
    "headers": [[{
      "code": "Year",
      "codeVector": null,
      "description": "",
      "dimension": "",
      "indentation": 0,
      "span": 1,
      "column": 0
    }, {
      "code": "2023",
      "codeVector": null,
      "description": "",
      "dimension": "Year",
      "indentation": 0,
      "span": 1,
      "column": 1
    }, {
      "code": "2022",
      "codeVector": null,
      "description": "",
      "dimension": "Year",
      "indentation": 0,
      "span": 1,
      "column": 2
    }]],
    "rows": [{
      "header": {
        "code": "5010",
        "codeVector": null,
        "description": "Rented premises",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -18835.1954,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -18749.2282,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5110",
        "codeVector": null,
        "description": "Property costs",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -27274.236,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -23945.4796,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5210",
        "codeVector": null,
        "description": "Hire of plant and machinery",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7615.68,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -10154.3,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5310",
        "codeVector": null,
        "description": "Energy costs",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7387.2661,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -4378.9705,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5410",
        "codeVector": null,
        "description": "Consumable equipment and supplies",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -24774.1218,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -21924.2238,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5510",
        "codeVector": null,
        "description": "Repairs and maintenance",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -2898.85,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": 1252.8062,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5610",
        "codeVector": null,
        "description": "Transport equipment costs",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -21109.4475,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -16813.2712,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5710",
        "codeVector": null,
        "description": "Freight and transportation",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -18683.321,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -19149.2453,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5810",
        "codeVector": null,
        "description": "Travel expenses",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -7761.305,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }]
    }, {
      "header": {
        "code": "5910",
        "codeVector": null,
        "description": "Advertising and PR",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": []
    }, {
      "header": {
        "code": "5999",
        "codeVector": null,
        "description": "Operating expenses",
        "dimension": "Code",
        "indentation": 0,
        "span": 1,
        "column": 0
      },
      "values": [{
        "value": -169614.1928,
        "format": "#,##0",
        "column": 1,
        "inputValidationErrors": null
      }, {
        "value": -133531.97269999998,
        "format": "#,##0",
        "column": 2,
        "inputValidationErrors": null
      }]
    }],
    "inputAvailability": {
      "enabled": false,
      "preValidation": null,
      "rowSpec": null
    },
    "staticAxis": {
      "criteria": [{
        "dimension": "Currency",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "TSEK",
          "label": ""
        }]
      }, {
        "dimension": "PeriodType",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "Actual",
          "label": ""
        }]
      }, {
        "dimension": "PeriodIndex",
        "sort": "SelectionOrder",
        "ascending": true,
        "total": false,
        "reportTotal": false,
        "showCode": true,
        "showDescription": false,
        "exclude": false,
        "selection": [{
          "type": "Member",
          "value": "12",
          "label": ""
        }]
      }],
      "expand": [],
      "topN": null,
      "removeEmpty": true,
      "compactLayout": false,
      "expandPaths": [],
      "collapsePaths": []
    }
  };

  // let tableHeaders = "<tr class='table-dark'>";
  // for (let header of data.headers[0]) {
  //   tableHeaders += "<th>" + header.code + "</th>";
  // }

  // tableHeaders += "</tr>";
  // let tableRows = "";
  // for (let row of data.rows) {
  //   tableRows += "<tr>";
  //   tableRows += "<td>" + row.header.description + "</td>";
  //   if (row.values.length === 0) {
  //     // tableRows += "<td></td>";
  //     console.log(data.headers[0].length)
  //     for (let i = 1; i < data.headers[0].length; i++) {
  //       tableRows += "<td></td>";
  //     }
  //   } else {
  //     for (let value of row.values) {
  //       tableRows += "<td>" + value.value.toFixed(2) + "</td>";
  //     }
  //   }
  //   tableRows += "</tr>";
  // }
  // let tableHTML = "<table class='table table-bordered table-condensed' style='border: 1px solid #ddd' id='tableTest'>" + tableHeaders + tableRows + "</table>";

  // var resp = document.getElementById("jsonTable").innerHTML = tableHTML;

  var tableData = [];
  tableData.push(data.headers[0].map(function (header) {
    return header.code;
  }));
  var _iterator4 = _createForOfIteratorHelper(data.rows),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var row = _step4.value;
      var rowData = [row.header.description];
      if (row.values.length === 0) {
        for (var i = 1; i < data.headers[0].length; i++) {
          rowData.push("");
        }
      } else {
        var _iterator5 = _createForOfIteratorHelper(row.values),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var value = _step5.value;
            var val = value.value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });
            rowData.push(val);
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      }
      tableData.push(rowData);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return tableData;
}
export function run() {
  return _run.apply(this, arguments);
}
function _run() {
  _run = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", Word.run( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(context) {
              var cssLink, htmlDiv, htmlString, htmldata, range;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    cssLink = document.createElement("link");
                    cssLink.rel = "stylesheet";
                    cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
                    htmlDiv = get_data();
                    htmlString = "\n\n    <style>\n      table {\n        border-collapse: collapse;\n        width: 100%;\n        border: 1px solid #ddd;\n\n        overflow: hidden;\n      }\n\n      table td,\n      table th {\n        border: 1px solid #ddd;\n        text-align: left;\n        font-family: 'Motnserrat', sans-serif;\n        font-size: 12px;\n        padding: 2px 10px;\n      }\n\n      table th {\n        // background-color: #4b4b4b;\n        font-weight: bold;\n      }\n\n      .table-dark {\n        background-color: #4b4b4b;\n        color: #fff;\n        border-color: #6f6f6f;\n      }\n\n      tbody tr:nth-child(even) {\n        background-color: rgba(241, 196, 15, 1.0);\n      }\n  </style>\n  ";
                    htmldata = htmlString + htmlDiv;
                    console.log(htmldata);
                    range = context.document.body;
                    range.insertHtml(htmldata, "End");

                    // console.log(table)
                    // // Set cell borders
                    // table.style.borderCollapse = "collapse";
                    // const cells = table.getElementsByTagName("td");
                    // for (let i = 0; i < cells.length; i++) {
                    //   cells[i].style.border = "1px solid #ddd";
                    // }

                    // // Set cell shading
                    // const rows = table.getElementsByTagName("tr");
                    // for (let i = 0; i < rows.length; i++) {
                    //   const cells = rows[i].getElementsByTagName("td");
                    //   for (let j = 0; j < cells.length; j++) {
                    //     cells[j].style.backgroundColor = "#f2f2f2";
                    //   }
                    // }

                    // Execute the queued commands and return a promise
                    return _context5.abrupt("return", context.sync().then(function () {
                      console.log("HTML added successfully.");
                    }));
                  case 10:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x3) {
              return _ref3.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _run.apply(this, arguments);
}
export function noteEightProcess() {
  return _noteEightProcess.apply(this, arguments);
}
function _noteEightProcess() {
  _noteEightProcess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          return _context8.abrupt("return", Word.run( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(context) {
              var cssLink, htmlDiv, htmlString, htmldata, range;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    cssLink = document.createElement("link");
                    cssLink.rel = "stylesheet";
                    cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
                    htmlDiv = noteEight();
                    htmlString = "\n\n    <style>\n      table {\n        border-collapse: collapse;\n        width: 100%;\n        border: 1px solid #ddd;\n\n        overflow: hidden;\n      }\n\n      table td,\n      table th {\n        border: 1px solid #ddd;\n        text-align: left;\n        font-family: 'Motnserrat', sans-serif;\n        font-size: 12px;\n        padding: 2px 10px;\n      }\n\n      table th {\n        // background-color: #4b4b4b;\n        font-weight: bold;\n      }\n\n      .table-dark {\n        background-color: #4b4b4b;\n        color: #fff;\n        border-color: #6f6f6f;\n      }\n\n      tbody tr:nth-child(even) {\n        background-color: rgba(241, 196, 15, 1.0);\n      }\n  </style>\n  ";
                    htmldata = htmlString + htmlDiv;
                    console.log(htmldata);
                    range = context.document.body;
                    range.insertHtml(htmldata, "End");

                    // console.log(table)
                    // // Set cell borders
                    // table.style.borderCollapse = "collapse";
                    // const cells = table.getElementsByTagName("td");
                    // for (let i = 0; i < cells.length; i++) {
                    //   cells[i].style.border = "1px solid #ddd";
                    // }

                    // // Set cell shading
                    // const rows = table.getElementsByTagName("tr");
                    // for (let i = 0; i < rows.length; i++) {
                    //   const cells = rows[i].getElementsByTagName("td");
                    //   for (let j = 0; j < cells.length; j++) {
                    //     cells[j].style.backgroundColor = "#f2f2f2";
                    //   }
                    // }

                    // Execute the queued commands and return a promise
                    return _context7.abrupt("return", context.sync().then(function () {
                      console.log("HTML added successfully.");
                    }));
                  case 10:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x4) {
              return _ref4.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _noteEightProcess.apply(this, arguments);
}
export function consolidatedBalanceProcess() {
  return _consolidatedBalanceProcess.apply(this, arguments);
}
function _consolidatedBalanceProcess() {
  _consolidatedBalanceProcess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          return _context10.abrupt("return", Word.run( /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(context) {
              var cssLink, htmlDiv, htmlString, htmldata, range;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    cssLink = document.createElement("link");
                    cssLink.rel = "stylesheet";
                    cssLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css";
                    htmlDiv = noteEight();
                    htmlString = "\n\n    <style>\n      table {\n        border-collapse: collapse;\n        width: 100%;\n        border: 1px solid #ddd;\n\n        overflow: hidden;\n      }\n\n      table td,\n      table th {\n        border: 1px solid #ddd;\n        text-align: left;\n        font-family: 'Motnserrat', sans-serif;\n        font-size: 12px;\n        padding: 2px 10px;\n      }\n\n      table th {\n        // background-color: #4b4b4b;\n        font-weight: bold;\n      }\n\n      .table-dark {\n        background-color: #4b4b4b;\n        color: #fff;\n        border-color: #6f6f6f;\n      }\n\n      tbody tr:nth-child(even) {\n        background-color: rgba(241, 196, 15, 1.0);\n      }\n  </style>\n  ";
                    htmldata = htmlString + htmlDiv;
                    console.log(htmldata);
                    range = context.document.body;
                    range.insertHtml(htmldata, "End");

                    // console.log(table)
                    // // Set cell borders
                    // table.style.borderCollapse = "collapse";
                    // const cells = table.getElementsByTagName("td");
                    // for (let i = 0; i < cells.length; i++) {
                    //   cells[i].style.border = "1px solid #ddd";
                    // }

                    // // Set cell shading
                    // const rows = table.getElementsByTagName("tr");
                    // for (let i = 0; i < rows.length; i++) {
                    //   const cells = rows[i].getElementsByTagName("td");
                    //   for (let j = 0; j < cells.length; j++) {
                    //     cells[j].style.backgroundColor = "#f2f2f2";
                    //   }
                    // }

                    // Execute the queued commands and return a promise
                    return _context9.abrupt("return", context.sync().then(function () {
                      console.log("HTML added successfully.");
                    }));
                  case 10:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9);
            }));
            return function (_x5) {
              return _ref5.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _consolidatedBalanceProcess.apply(this, arguments);
}
function insertTable() {
  return _insertTable.apply(this, arguments);
}
function _insertTable() {
  _insertTable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var data;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          data = get_data();
          _context12.next = 3;
          return Word.run( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(context) {
              var table, _iterator8, _step8, row, _iterator9, _step9, _step9$value, index, cell;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
                    table.styleBuiltIn = Word.Style.gridTable4_Accent5;
                    table.rows.load("items");
                    _context11.next = 5;
                    return context.sync();
                  case 5:
                    // Iterate through the table rows and cells, changing the font color to black
                    // and aligning the second and third columns to the right
                    _iterator8 = _createForOfIteratorHelper(table.rows.items);
                    _context11.prev = 6;
                    _iterator8.s();
                  case 8:
                    if ((_step8 = _iterator8.n()).done) {
                      _context11.next = 35;
                      break;
                    }
                    row = _step8.value;
                    row.cells.load("items");
                    _context11.next = 13;
                    return context.sync();
                  case 13:
                    _iterator9 = _createForOfIteratorHelper(row.cells.items.entries());
                    _context11.prev = 14;
                    _iterator9.s();
                  case 16:
                    if ((_step9 = _iterator9.n()).done) {
                      _context11.next = 25;
                      break;
                    }
                    _step9$value = _slicedToArray(_step9.value, 2), index = _step9$value[0], cell = _step9$value[1];
                    cell.load("font");
                    _context11.next = 21;
                    return context.sync();
                  case 21:
                    cell.font.color = 'black'; // Set the font color to black

                    if (index === 1 || index === 2) {
                      // Check if it's the second or third column
                      cell.horizontalAlignment = Word.Alignment.right; // Align to the right
                    }
                  case 23:
                    _context11.next = 16;
                    break;
                  case 25:
                    _context11.next = 30;
                    break;
                  case 27:
                    _context11.prev = 27;
                    _context11.t0 = _context11["catch"](14);
                    _iterator9.e(_context11.t0);
                  case 30:
                    _context11.prev = 30;
                    _iterator9.f();
                    return _context11.finish(30);
                  case 33:
                    _context11.next = 8;
                    break;
                  case 35:
                    _context11.next = 40;
                    break;
                  case 37:
                    _context11.prev = 37;
                    _context11.t1 = _context11["catch"](6);
                    _iterator8.e(_context11.t1);
                  case 40:
                    _context11.prev = 40;
                    _iterator8.f();
                    return _context11.finish(40);
                  case 43:
                    _context11.next = 45;
                    return context.sync();
                  case 45:
                    _context11.next = 47;
                    return context.sync();
                  case 47:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, null, [[6, 37, 40, 43], [14, 27, 30, 33]]);
            }));
            return function (_x6) {
              return _ref6.apply(this, arguments);
            };
          }());
        case 3:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _insertTable.apply(this, arguments);
}
function insertTableNoteEightProcess() {
  return _insertTableNoteEightProcess.apply(this, arguments);
}
function _insertTableNoteEightProcess() {
  _insertTableNoteEightProcess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          data = noteEight();
          _context14.next = 3;
          return Word.run( /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(context) {
              var table;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    table = context.document.body.insertTable(data.length, data[0].length, "Start", data);
                    table.styleBuiltIn = Word.Style.gridTable2_Accent3;
                    // table.styleFirstColumn = false;
                    _context13.next = 4;
                    return context.sync();
                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
            return function (_x7) {
              return _ref7.apply(this, arguments);
            };
          }());
        case 3:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _insertTableNoteEightProcess.apply(this, arguments);
}
Office.onReady(function (info) {
  if (info.host === Office.HostType.Word) {
    document.getElementById("templateSubmit").onclick = submitForm;
  }
});
function submitForm() {
  return _submitForm.apply(this, arguments);
} // async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;
//     // Create the table
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);
//     // Insert the headers
//     const cells = table.tableRows.getFirst().getCells();
//     for (let i = 0; i < headers.length; i++) {
//       cells.items[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }
//     // Insert the data rows
//     for (let i = 0; i < rows.length; i++) {
//       const row = rows[i];
//       const newRow = table.insertRow(Word.InsertLocation.end);
//       const newCells = newRow.getCells();
//       for (let j = 0; j < row.values.length; j++) {
//         newCells.items[j].insertText(row.values[j].value.toString(), Word.InsertLocation.end);
//       }
//     }
//     // Select the table and insert it into the document
//     table.select();
//     const tableElement = table.getHtml();
//     Office.context.document.setSelectedDataAsync(
//       tableElement, {
//         coercionType: Office.CoercionType.Table,
//       },
//       function (asyncResult) {
//         if (asyncResult.status === Office.AsyncResultStatus.Failed) {
//           console.error(asyncResult.error.message);
//         } else {
//           console.log("Table inserted successfully");
//         }
//       }
//     );
//     await context.sync();
//   });
// }
// async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;
//     // Insert the table at the end of the document
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);
//     // Insert the header row
//     const headerRow = table.headerRow;
//     for (let i = 0; i < headers.length; i++) {
//       headerRow.getRange().getTableCells()[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }
//     // Insert the data rows
//     for (let i = 0; i < rows.length; i++) {
//       const rowValues = rows[i].values;
//       const row = table.insertRow(Word.InsertLocation.end);
//       for (let j = 0; j < rowValues.length; j++) {
//         row.getRange().getTableCells()[j].insertText(rowValues[j].value.toString(), Word.InsertLocation.end);
//       }
//     }
//     await context.sync();
//     console.log("Table inserted successfully");
//   });
// }
// async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);
//     const cells = table.tableRows.getFirst().getCells();
//     for (let i = 0; i < headers.length; i++) {
//       cells.items[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }
//     for (let i = 0; i < rows.length; i++) {
//       const row = rows[i];
//       const newRow = table.insertRow(Word.InsertLocation.end);
//       const newCells = newRow.getCells();
//       newCells.items[0].insertText(row.header.description, Word.InsertLocation.end);
//       for (let j = 0; j < row.values.length; j++) {
//         newCells.items[j + 1].insertText(row.values[j].value.toString(), Word.InsertLocation.end);
//       }
//     }
//     await context.sync();
//     console.log("Table inserted successfully");
//   });
// }
// async function insertTextIntoDocument(data) {
//   return Word.run(async (context) => {
//     const headers = data.headers[0];
//     const rows = data.rows;
//     const table = context.document.body.insertTable(rows.length + 1, headers.length, Word.InsertLocation.end);
//     const cells = table.tableRows.getFirst().getCells();
//     for (let i = 0; i < headers.length; i++) {
//       cells.items[i].insertText(headers[i].description, Word.InsertLocation.end);
//     }
//     for (let i = 0; i < rows.length; i++) {
//       const row = rows[i];
//       const newRow = table.insertRow(Word.InsertLocation.end);
//       const newCells = newRow.getCells();
//       newCells.items[0].insertText(row.header.description, Word.InsertLocation.end);
//       for (let j = 0; j < row.values.length; j++) {
//         newCells.items[j + 1].insertText(row.values[j].value.toString(), Word.InsertLocation.end);
//       }
//     }
//     await context.sync();
//     console.log("Table inserted successfully");
//   });
// }
function _submitForm() {
  _submitForm = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var fileInput, file, reader, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          fileInput = document.getElementById("bs-validation-upload-file");
          file = fileInput.files[0];
          console.log(file);
          if (!file) {
            _context15.next = 12;
            break;
          }
          reader = new FileReader();
          reader.readAsText(file);
          _context15.next = 8;
          return new Promise(function (resolve, reject) {
            reader.onload = function () {
              var jsonData = JSON.parse(reader.result);
              console.log(jsonData);
              resolve(jsonData);
            };
            reader.onerror = function () {
              console.log("Error reading file.");
              reject();
            };
          });
        case 8:
          data = _context15.sent;
          console.log(data);
          _context15.next = 12;
          return insertTextIntoDocument(data);
        case 12:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _submitForm.apply(this, arguments);
}