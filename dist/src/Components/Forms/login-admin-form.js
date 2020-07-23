"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactstrap = require("reactstrap");

var _react = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

require("./../../App.css");

var _footerOutside = _interopRequireDefault(require("../Elements/footerOutside"));

var _auth = _interopRequireDefault(require("./../../Services/auth.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * Login admin componet 

 */
var LoginAdminForm = /*#__PURE__*/function (_Component) {
  _inherits(LoginAdminForm, _Component);

  var _super = _createSuper(LoginAdminForm);

  function LoginAdminForm(props) {
    var _this;

    _classCallCheck(this, LoginAdminForm);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_objectSpread({}, _this.state, _defineProperty({}, name, value)));
    });

    _this.state = {
      username: '',
      campPassword: '',
      redirect: false
    };
    return _this;
  }
  /**

   * Handle change made in the form

   * @param {*} e as a event 

   */


  _createClass(LoginAdminForm, [{
    key: "singIn",

    /**

     * Singin method, when the user clicks the button on the form 

     */
    value: function singIn() {
      var _this2 = this;

      /**

       * Validations

       */
      if (this.state.username === "") {
        alert("Introduzca su usuario");
      } else if (this.state.campPassword === "") {
        alert("La contraseña ingresada no es valida");
      } else {
        //If the info is valid
        //We call the authService function to validate the data
        _auth.default.loginA(this.state.username, this.state.campPassword).then(function () {
          // if is valid
          _this2.redirect(); // we redirect the user

        }, function (error) {
          var resMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
          alert(resMessage);
        });
      }
    }
    /**

     * Function to redirect to the admin view

     */

  }, {
    key: "redirect",
    value: function redirect() {
      var link = window.location.href + '/dashboard';
      console.log(link);
      return window.location.replace(link);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "blanco"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "row "
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm-9 col-md-7 col-lg-5 mx-auto"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card card-signin my-5"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "form-icon"
      }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUser
      }))), /*#__PURE__*/_react.default.createElement("h5", {
        className: "card-title text-center text-uppercase"
      }, "Bienvenido Administrador"), /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
        className: "form-singin"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "Email"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        className: "form-control",
        type: "email",
        value: this.state.username,
        onChange: function onChange(value) {
          return _this3.setState({
            username: value.target.value
          });
        },
        placeholder: "Introduzca su usuario "
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        className: "art-label"
      }, "Contrase\xF1a"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        className: "form-control",
        type: "password",
        value: this.state.campPassword,
        onChange: function onChange(value) {
          return _this3.setState({
            campPassword: value.target.value
          });
        },
        placeholder: "Introduzca su contrase\xF1a",
        required: true
      })), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          margin: '20px'
        }
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "btn btn-lg btn-block text-uppercase btn-light",
        onClick: function onClick() {
          return _this3.singIn();
        }
      }, "Iniciar Sesi\xF3n")))))))), /*#__PURE__*/_react.default.createElement(_footerOutside.default, null));
    }
  }]);

  return LoginAdminForm;
}(_react.Component);

var _default = LoginAdminForm;
exports.default = _default;

//# sourceMappingURL=login-admin-form.js.map