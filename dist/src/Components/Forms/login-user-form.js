"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _form = _interopRequireDefault(require("react-validation/build/form"));

var _input = _interopRequireDefault(require("react-validation/build/input"));

var _button = _interopRequireDefault(require("react-validation/build/button"));

var _footerOutside = _interopRequireDefault(require("../Elements/footerOutside"));

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _reactstrap = require("reactstrap");

var _navbarOutside = _interopRequireDefault(require("../Elements/navbarOutside"));

require("./../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**

 * Validation function for react validators, returns if the input is null

 * @param {*} value 

 */
var required = function required(value) {
  if (!value) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "Este campo es requerido!");
  }
};
/**

 * Login hook component

 */


var Login = function Login(props) {
  var form = (0, _react.useRef)();
  var checkBtn = (0, _react.useRef)();

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];
  /**

   * OnChange functions for validating changes in inputs

   * @param {*} e 

   */


  var onChangeEmail = function onChangeEmail(e) {
    var email = e.target.value;
    setEmail(email);
  };

  var onChangePassword = function onChangePassword(e) {
    var password = e.target.value;
    setPassword(password);
  };
  /**

   * Hnadle login function when user submits the form

   * @param {*} e 

   */


  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll(); //If all the values are validated

    if (checkBtn.current.context._errors.length === 0) {
      //We call the auth service method
      _auth.default.login(email, password).then(function () {
        //If the user is correct we push to the user profile
        props.history.push("/profile");
        window.location.reload();
      }, function (error) {
        var resMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        setLoading(false);
        setMessage(resMessage);
      });
    } else {
      setLoading(false);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbarOutside.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "blanco"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cont"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form sign-in"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontWeight: "inherit"
    }
  }, "\xA1Bienvenido de Vuelta!"), /*#__PURE__*/_react.default.createElement(_form.default, {
    onSubmit: handleLogin,
    ref: form
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", null, "Correo Electr\xF3nico"), /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "text",
    className: "form-control input-1 input-2",
    placeholder: "Introduzca su correo",
    name: "email",
    value: email,
    onChange: onChangeEmail,
    validations: [required],
    autocomplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", null, "Contrase\xF1a"), /*#__PURE__*/_react.default.createElement(_input.default, {
    type: "password",
    className: "form-control input-1 input-2",
    placeholder: "Introduzca su contrase\xF1a",
    name: "password",
    value: password,
    onChange: onChangePassword,
    validations: [required],
    autocomplete: "off"
  }))), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary submit",
    disabled: loading
  }, loading && /*#__PURE__*/_react.default.createElement("span", {
    className: "spinner-border spinner-border-sm"
  }), "Iniciar Sesi\xF3n"))), message && /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger",
    role: "alert"
  }, message)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_button.default, {
    style: {
      display: "none"
    },
    ref: checkBtn
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub-cont"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img__text m--up"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      fontStyle: 'oblique'
    }
  }, "\xBFNuevo por Aqu\xED?"), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      letterSpacing: '1px'
    }
  }, "\xA1Reg\xEDstrate Ahora!")), /*#__PURE__*/_react.default.createElement("div", {
    className: "img__btn"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "m--up"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "a-link-color",
    href: "/singUp",
    style: {
      borderWidth: '1.5px'
    }
  }, "Registrarse"))))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      color: '#ededed'
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, "."), /*#__PURE__*/_react.default.createElement("p", null, "."), /*#__PURE__*/_react.default.createElement("p", null, "."), /*#__PURE__*/_react.default.createElement("p", null, "."))), /*#__PURE__*/_react.default.createElement(_footerOutside.default, null));
};

var _default = Login;
exports.default = _default;

//# sourceMappingURL=login-user-form.js.map