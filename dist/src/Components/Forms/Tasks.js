"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));

var _reactstrap = require("reactstrap");

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _axios = _interopRequireDefault(require("axios"));

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

var Task = function Task() {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var currentUser = _auth.default.getCurrentUser();

  var id = currentUser.id;
  console.log(id);
  /**

   * Form fields

   */

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      start = _useState6[0],
      setStart = _useState6[1];

  var _useState7 = (0, _react.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      end = _useState8[0],
      setEnd = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 1),
      completed = _useState10[0];

  var _useState11 = (0, _react.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      time = _useState12[0],
      setHour = _useState12[1];
  /**

  * Requeried method verifies that all the fields are filled in

  * @param {*} value 

  */

  /**

  * Const values changes

  * @param {*} e 

  */


  var onChangeTitle = function onChangeTitle(e) {
    var title = e.target.value;
    setTitle(title);
  };

  var onChangeDescription = function onChangeDescription(e) {
    var description = e.target.value;
    setDescription(description);
  };

  var onChangeStart = function onChangeStart(e) {
    var start = e.target.value;
    setStart(start);
    setEnd(start);
  };

  var onChangeHour = function onChangeHour(e) {
    var hour = e.target.value;
    setHour(hour);
  };
  /**

   * Form registration function

   * @param {*} e 

   */


  var handleRegister = function handleRegister() {
    var currentUser = _auth.default.getCurrentUser();

    var userId = currentUser.id;

    if (title === "") {
      alert("Porfavor ingrese todos los campos requeridos");
    }

    var data = {
      title: title,
      description: description,
      completed: completed,
      start: start,
      end: end,
      time: time,
      userId: userId
    };

    _axios.default.post("https://emotionner.herokuapp.com/users/createTask", data).then(function (response) {
      hideModal();
    }).catch(function (error) {
      console.log(error);
    });
  };
  /**

   * Modal const

   */


  var showModal = function showModal() {
    setIsOpen(true);
  };

  var hideModal = function hideModal() {
    setIsOpen(false);
    window.location.reload();
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonArrow"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "link",
    onClick: showModal,
    style: {
      textTransform: 'uppercase'
    }
  }, "Nueva Tarea")), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: isOpen,
    onHide: hideModal
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, null, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, {
    style: ({
      letterSpacing: '4px'
    }, {
      fontWeight: 'lighter'
    })
  }, "PLANEA TU D\xCDA")), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "styleLetters"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "try"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    htmlFor: "title"
  }, "T\xEDtulo de la tarea"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "text",
    name: "title",
    id: "title",
    placeholder: "Tarea",
    value: title,
    onChange: onChangeTitle,
    required: true
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    htmlFor: "description"
  }, "Descripci\xF3n (Opcional) "), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "text",
    name: "description",
    id: "description",
    placeholder: "Descripci\xF3n",
    value: description,
    onChange: onChangeDescription,
    required: true
  })), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    form: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    htmlFor: "exampleEmail"
  }, "Fecha"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "date",
    name: "start",
    id: "start",
    placeholder: "Fecha de inicio",
    value: start,
    onChange: onChangeStart,
    required: true
  })))), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
    for: "exampleEmail"
  }, "Horas (Opcional)"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "time",
    name: "time",
    id: "time",
    placeholder: "Hora",
    value: time,
    onChange: onChangeHour
  })))))), /*#__PURE__*/_react.default.createElement(_Modal.default.Footer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "btn-horizontal",
    onClick: function onClick() {
      return handleRegister();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, "Guardar"))))));
};

var _default = Task;
exports.default = _default;

//# sourceMappingURL=Tasks.js.map