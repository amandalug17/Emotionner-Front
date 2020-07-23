"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _footerInside = _interopRequireDefault(require("../Elements/footerInside"));

var _recomendadoHero = _interopRequireDefault(require("../Elements/recomendadoHero"));

var _articleF = _interopRequireDefault(require("../Forms/articleF"));

var _PhraseF = _interopRequireDefault(require("../Forms/PhraseF"));

var _navbar = _interopRequireDefault(require("../Elements/navbar"));

require("./../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**

 * This class renders the recomendatiosn view, we render the articles based in user emotions

 * and the motivational phrase component.

 */
var RecomendationView = /*#__PURE__*/function (_Component) {
  _inherits(RecomendationView, _Component);

  var _super = _createSuper(RecomendationView);

  function RecomendationView() {
    _classCallCheck(this, RecomendationView);

    return _super.apply(this, arguments);
  }

  _createClass(RecomendationView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbar.default, null), /*#__PURE__*/_react.default.createElement(_recomendadoHero.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Container, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("h1", {
        className: "d-flex justify-content-center",
        style: {
          margin: "20px",
          fontWeight: 'lighter',
          letterSpacing: '5px',
          fontSize: '40px',
          fontFamily: 'Montserrat'
        }
      }, " Art\xEDculos recomendados"))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_articleF.default, null))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
        style: {
          backgroundColor: '#c6a7c7'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("h1", {
        className: "d-flex justify-content-center",
        style: {
          margin: "20px",
          fontFamily: 'Montserrat',
          fontSize: '25px'
        }
      }, " Tu frase de hoy"))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
        style: {
          backgroundColor: '#c6a7c7'
        }
      }, /*#__PURE__*/_react.default.createElement(_PhraseF.default, null)), /*#__PURE__*/_react.default.createElement("div", {
        className: "section-container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "left-banner"
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "right-banner"
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
        style: {
          fontFamily: 'Dancing Script',
          fontSize: '40px'
        }
      }, "Tu espacio seguro"), /*#__PURE__*/_react.default.createElement("p", {
        style: {
          fontFamily: 'Montserrat'
        }
      }, "\xA1Recuerda registrar todas tu tareas y emociones", /*#__PURE__*/_react.default.createElement("br", null), "para recibir m\xE1s recomendaciones como esta!")))), /*#__PURE__*/_react.default.createElement(_footerInside.default, null));
    }
  }]);

  return RecomendationView;
}(_react.Component);

var _default = RecomendationView;
exports.default = _default;

//# sourceMappingURL=recomendations.js.map