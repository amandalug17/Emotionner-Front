"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactstrap = require("reactstrap");

var _react = _interopRequireWildcard(require("react"));

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

/**

 * This class is the create article component in the administrator view

 */
var CreateArticle = /*#__PURE__*/function (_Component) {
  _inherits(CreateArticle, _Component);

  var _super = _createSuper(CreateArticle);

  function CreateArticle(props) {
    var _this;

    _classCallCheck(this, CreateArticle);

    _this = _super.call(this, props);
    _this.state = {
      campTitle: "",
      campContent: "",
      campDescription: "",
      campAuthor: "",
      campPremium: "",
      campEmotion: "",
      campImagen: ""
    };
    return _this;
  }

  _createClass(CreateArticle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {
        fluid: "md"
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Col, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "card card-signin my-5"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react.default.createElement("h5", {
        className: "card-title text-center text-uppercase"
      }, "CREAR ART\xCDCULO"), /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
        className: "form-singin"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "T\xCDTULO"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        className: "form-control",
        type: "title",
        placeholder: "Introduzca el t\xEDtulo del art\xEDculo ",
        value: this.state.campTitle,
        onChange: function onChange(value) {
          return _this2.setState({
            campTitle: value.target.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label",
        for: "exampleText"
      }, "DESCRIPCI\xD3N"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "textarea",
        name: "text",
        id: "exampleText",
        rows: "8",
        cols: "80",
        value: this.state.campDescription,
        onChange: function onChange(value) {
          return _this2.setState({
            campDescription: value.target.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label",
        for: "exampleText"
      }, "CONTENIDO"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "textarea",
        name: "text",
        id: "exampleText",
        rows: "30",
        cols: "80",
        value: this.state.campContent,
        onChange: function onChange(value) {
          return _this2.setState({
            campContent: value.target.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "AUTOR"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        className: "form-control",
        type: "title",
        placeholder: "Introduzca el autor del art\xEDculo ",
        value: this.state.campAuthor,
        onChange: function onChange(value) {
          return _this2.setState({
            campAuthor: value.target.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "\xC1NIMO"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
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
      }, "\xC1nimo"), /*#__PURE__*/_react.default.createElement("option", null, "Feliz"), /*#__PURE__*/_react.default.createElement("option", null, "Bien"), /*#__PURE__*/_react.default.createElement("option", null, "Triste"), /*#__PURE__*/_react.default.createElement("option", null, "Enojado"), /*#__PURE__*/_react.default.createElement("option", null, "Ansioso"), /*#__PURE__*/_react.default.createElement("option", null, "Estresado"))), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "IM\xC1GEN"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        className: "form-control",
        type: "Im\xE1gen",
        placeholder: "Introduzca una im\xE1gen para el art\xEDculo",
        value: this.state.campImagen,
        onChange: function onChange(value) {
          return _this2.setState({
            campImagen: value.target.value
          });
        }
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "PREMIUM"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "select",
        id: "exampleCustomSelect",
        name: "customSelect",
        value: this.state.campPremium,
        onChange: function onChange(value) {
          return _this2.setState({
            campPremium: value.target.value
          });
        }
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, " Seleccione"), /*#__PURE__*/_react.default.createElement("option", null, "Premium"), /*#__PURE__*/_react.default.createElement("option", null, "No premium"))), /*#__PURE__*/_react.default.createElement("label", null), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-center"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: "anim",
        onClick: function onClick() {
          return _this2.sendSave();
        }
      }, /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), /*#__PURE__*/_react.default.createElement("span", null), "Guardar art\xEDculo")))))))));
    }
    /**

     * This function is to submit our article to the db, on click on the submit button on the form

     */

  }, {
    key: "sendSave",
    value: function sendSave() {
      /**

       * Form validations

       */
      if (this.state.campTitle === "") {
        alert("Introduzca el título");
      } else if (this.state.campDescription === "") {
        alert("Introduzca una descripción");
      } else if (this.state.campContent === "") {
        alert("Introduzca el contenido");
      } else if (this.state.campAuthor === "") {
        alert("Introduzca el autor");
      } else if (this.state.campPremium === "") {
        alert("Introduzca el tipo de usuario en premium");
      } else if (this.state.campPremium === "Premium") {
        this.state.campPremium = "true";
      } else if (this.state.campPremium === "No premium") {
        this.state.campPremium = "false";
      } else if (this.state.campEmotion === "") {
        alert("Introduzca una emoción asociada al artículo");
      } //Emotion cast to the equivalent id
      else if (this.state.campEmotion === "Feliz") {
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
          // If the info is valid
          var datapost = {
            title: this.state.campTitle,
            content: this.state.campContent,
            description: this.state.campDescription,
            author: this.state.campAuthor,
            image: this.state.campImagen,
            premium: this.state.campPremium,
            emotionId: this.state.campEmotion
          };
          /**

           * Axios cal to create an article

           */

          _axios.default.post("https://emotionner.herokuapp.com/articles/createArticle", datapost).then(function (response) {
            //Then
            //If the post was a success we reload the page
            if (response.data.success) {
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

  return CreateArticle;
}(_react.Component);

var _default = CreateArticle;
exports.default = _default;

//# sourceMappingURL=articulo-form.js.map