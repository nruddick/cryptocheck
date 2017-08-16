'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CurrencyMap = require('../CurrencyMap');

var _CurrencyMap2 = _interopRequireDefault(_CurrencyMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, null, [{
    key: 'round',

    /**
     * Round price to two decimal places
     *
     * @param {string} price Price to Round
     * @return {string}
     */
    value: function round(price) {
      // If price is below 0, do not round and show all decimal places
      if (String(price).split('.')[0] === '0') return price;
      return Number(price).toFixed(2);
    }

    /**
     * Gets associated information about currency from symbol
     *
     * @param {string} symbol User inputted symbol
     * @return {object}
     */

  }, {
    key: 'mapCurrency',
    value: function mapCurrency(symbol) {
      var returnData = null;
      var keys = _CurrencyMap2.default.keys();
      for (var i = 0; i < _CurrencyMap2.default.size; i++) {
        var val = keys.next().value;
        if (val.indexOf(symbol.toUpperCase()) > -1) {
          returnData = {
            symbols: val,
            name: _CurrencyMap2.default.get(val)
          };
        }
      }
      return returnData;
    }
  }]);

  return _class;
}();

exports.default = _class;