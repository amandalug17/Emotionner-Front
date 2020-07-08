"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactstrap = require("reactstrap");

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _axios = _interopRequireDefault(require("axios"));

var _reactBootstrap = require("react-bootstrap");

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

var CreatePhrase = /*#__PURE__*/function (_Component) {
  _inherits(CreatePhrase, _Component);

  var _super = _createSuper(CreatePhrase);

  function CreatePhrase(props) {
    var _this;

    _classCallCheck(this, CreatePhrase);

    _this = _super.call(this, props);
    _this.state = {
      campPhrase: "",
      campEmotion: ""
    };
    return _this;
  }

  _createClass(CreatePhrase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
        fluid: "md"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "card card-signin my-5"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "form-icon"
      }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPenFancy
      }))), /*#__PURE__*/_react.default.createElement("h5", {
        className: "card-title text-center text-uppercase"
      }, "Sube una frase"), /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
        className: "form-singin"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, "Frase"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        className: "form-control",
        type: "title",
        placeholder: "Introduzca una frase ",
        value: this.state.campPhrase,
        onChange: function onChange(value) {
          return _this2.setState({
            campPhrase: value.target.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, "\xC1nimo"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "select",
        id: "exampleCustomSelect",
        name: "customSelect",
        value: this.state.campEmotion,
        onChange: function onChange(value) {
          return _this2.setState({
            campEmotion: value.target.value
          });
        }
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, "\xC1nimo"), /*#__PURE__*/_react.default.createElement("option", null, "Feliz"), /*#__PURE__*/_react.default.createElement("option", null, "Bien"), /*#__PURE__*/_react.default.createElement("option", null, "Triste"), /*#__PURE__*/_react.default.createElement("option", null, "Enojado"), /*#__PURE__*/_react.default.createElement("option", null, "Ansioso"), /*#__PURE__*/_react.default.createElement("option", null, "Estresado"))), /*#__PURE__*/_react.default.createElement("label", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "btn btn-md text-uppercase btn-light ",
        type: "button",
        style: {
          backgroundColor: '#b79ced'
        },
        onClick: function onClick() {
          return _this2.sendSave();
        }
      }, "Guardar art\xEDculo")))))))));
    }
  }, {
    key: "sendSave",
    value: function sendSave() {
      if (this.state.campPhrase == "") {
        alert("Introduzca una frase");
      } else if (this.state.campEmotion === "") {
        alert("Introduzca una emoción asociada al artículo");
      } else if (this.state.campEmotion === "Feliz") {
        this.state.campEmotion = 1;
      } else if (this.state.campEmotion === "Bien") {
        this.state.campEmotion = 11;
      } else if (this.state.campEmotion === "Triste") {
        this.state.campEmotion = 21;
      } else if (this.state.campEmotion === "Enojado") {
        this.state.campEmotion = 31;
      } else if (this.state.campEmotion === "Ansioso") {
        this.state.campEmotion = 41;
      } else if (this.state.campEmotion === "Estresado") {
        this.state.campEmotion = 51;
      } else {
        var baseUrl = "https://emotionner.herokuapp.com/articles/createArticle";
        var datapost = {
          phrase: this.state.campPhrase,
          emotionId: this.state.campEmotion
        };
        console.log(datapost);

        _axios.default.post(baseUrl, datapost).then(function (response) {
          if (response.data.success === true) {
            alert(response.data.message);
            window.location.reload();
          } else {
            alert(response.data.message);
          }
        }).catch(function (error) {
          alert("" + error);
        });
      }
    }
  }]);

  return CreatePhrase;
}(_react.Component);

var _default = CreatePhrase;
exports.default = _default;

//# sourceMappingURL=createPhrase.js.map