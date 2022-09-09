"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Provider = /*#__PURE__*/function () {
  function Provider(session, currency) {
    _classCallCheck(this, Provider);

    this.session = session;
    this.currency = currency;
  }

  _createClass(Provider, [{
    key: "getOps",
    value: function getOps() {
      return this.currency.ops;
    }
  }, {
    key: "getPaymentUrl",
    value: function getPaymentUrl(txhash) {
      if (!this.currency.explorerurl) return;
      var paymenturl = this.currency.explorerurl; //paymenturl += this.currency.tx_path;

      paymenturl += '/web3/tx/';
      paymenturl += txhash;
      return paymenturl;
    }
  }]);

  return Provider;
}();

var _default = Provider;
exports["default"] = _default;
//# sourceMappingURL=provider.js.map