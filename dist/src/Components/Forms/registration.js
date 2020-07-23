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

var _validator = require("validator");

require("./../../App.css");

var _footerInside = _interopRequireDefault(require("../Elements/footerInside"));

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _navbarOutside = _interopRequireDefault(require("../Elements/navbarOutside"));

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

 * Requeried method verifies that all the fields are filled in

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

 * Email validation method, validates if an email is a valid format

 * @param {*} value 

 */


var validEmail = function validEmail(value) {
  if (!(0, _validator.isEmail)(value)) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "Este no es un email v\xE1lido, porfavor ingrese una direcci\xF3n valida.");
  }
};
/**

 * Password validator, validates if the leght of the password is correct it 

 * must be between 6 and 40 characters

 * @param {*} value 

 */


var vpassword = function vpassword(value) {
  if (value.length < 6 || value.length > 40) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "alert alert-danger",
      role: "alert"
    }, "La contrase\xF1a debe tener de 6 a 40 caracteres.");
  }
};
/**

 * Registration Hook

 * @param {*} props 

 */


var Register = function Register(props) {
  var form = (0, _react.useRef)();
  var checkBtn = (0, _react.useRef)();
  /**

   * Variables

   */

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      lastname = _useState4[0],
      setLastname = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      email = _useState6[0],
      setEmail = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      birthdate = _useState8[0],
      setBirthdate = _useState8[1];

  var _useState9 = (0, _react.useState)(""),
      _useState10 = _slicedToArray(_useState9, 1),
      ocupation = _useState10[0];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 1),
      premium = _useState12[0];

  var _useState13 = (0, _react.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      password = _useState14[0],
      setPassword = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      successful = _useState16[0],
      setSuccessful = _useState16[1];

  var _useState17 = (0, _react.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      message = _useState18[0],
      setMessage = _useState18[1];
  /**

   * Const values changes

   * @param {*} e 

   */


  var onChangeName = function onChangeName(e) {
    var name = e.target.value;
    setName(name);
  };

  var onChangeLastName = function onChangeLastName(e) {
    var lastname = e.target.value;
    setLastname(lastname);
  };

  var onChangeEmail = function onChangeEmail(e) {
    var email = e.target.value;
    setEmail(email);
  };

  var onChangeBirthdate = function onChangeBirthdate(e) {
    var birthdate = e.target.value;
    setBirthdate(birthdate);
  };

  var onChangePassword = function onChangePassword(e) {
    var password = e.target.value;
    setPassword(password);
  };

  var handleRegister = function handleRegister(e) {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      _auth.default.register(name, lastname, email, birthdate, ocupation, premium, password).then(function (response) {
        alert(response.data.message);
        setSuccessful(true);
        props.history.push("/login");
      }, function (error) {
        var resMessage = error.response && error.response.data && error.response.data.message || error.message || error.toString();
        alert(resMessage);
        setSuccessful(false);
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbarOutside.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "cont-reg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img-reg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "img__text m--in"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "motiv-reg-ph reg-h2"
  }, "Hoy puede ser el comienzo de todo lo que te propongas")), /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-text"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-reg sign-up"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "h2"
  }, "\xA1Reg\xEDstrate ya!"), /*#__PURE__*/_react.default.createElement(_form.default, {
    onSubmit: handleRegister,
    ref: form,
    autocomplete: "off"
  }, !successful && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "label-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "name"
  }, "Nombre"), /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: "Introduzca su nombre",
    type: "text",
    className: "form-control input-1 input-2",
    name: "name",
    value: name,
    onChange: onChangeName,
    validations: [required]
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "label-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "lastname"
  }, "Apellido"), /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: "Introduzca su apellido",
    type: "text",
    className: "form-control input-1 input-2",
    name: "lastname",
    value: lastname,
    onChange: onChangeLastName,
    validations: [required]
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "label-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, "Correo Electr\xF3nico"), /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: "Introduzca su correo",
    type: "text",
    className: "form-control input-1 input-2",
    name: "email",
    value: email,
    onChange: onChangeEmail,
    validations: [required, validEmail]
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "label-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password"
  }, "Contrase\xF1a"), /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: "Introduzca su contrase\xF1a",
    type: "password",
    className: "form-control input-1 input-2",
    name: "password",
    value: password,
    onChange: onChangePassword,
    validations: [required, vpassword]
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "label-1"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "birthdate"
  }, "Fecha de Nacimiento"), /*#__PURE__*/_react.default.createElement(_input.default, {
    placeholder: "Introduzca su fecha de nacimiento",
    type: "date",
    className: "form-control input-1 input-2",
    name: "birthdate",
    value: birthdate,
    onChange: onChangeBirthdate,
    validations: [required]
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "label-1"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary btn-block submitreg"
  }, "Registrarse"))), message && /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: successful ? "alert alert-success" : "alert alert-danger",
    role: "alert"
  }, message)), /*#__PURE__*/_react.default.createElement(_button.default, {
    style: {
      display: "none"
    },
    ref: checkBtn
  }))))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "."), /*#__PURE__*/_react.default.createElement("p", null, "."), /*#__PURE__*/_react.default.createElement("p", null, "."), /*#__PURE__*/_react.default.createElement("p", null, ".")), /*#__PURE__*/_react.default.createElement(_footerInside.default, null));
};

var _default = Register;
exports.default = _default;

//# sourceMappingURL=registration.js.map