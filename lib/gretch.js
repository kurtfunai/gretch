"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = "https://api.gretch.io";

var Gretch = function () {
  function Gretch(apiKey) {
    _classCallCheck(this, Gretch);

    this.apiKey = apiKey;
  }

  _createClass(Gretch, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url) {
      return fetch(baseUrl + "/fetch?url=" + url, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-GRETCH-API-KEY": this.apiKey
        }
      }).then(function (response) {
        if (!response.ok) {
          throw Error("[Gretch] " + response.statusText);
        }
        return response;
      }).then(function (response) {
        return response.json();
      });
    })
  }]);

  return Gretch;
}();

exports.default = Gretch;