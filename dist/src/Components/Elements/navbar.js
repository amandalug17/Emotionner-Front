"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _auth = _interopRequireDefault(require("./../../Services/auth.service"));

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

 * This is the navbar component

 */
var Navbar_ = function Navbar_(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      currentUser = _useState4[0],
      setCurrentUser = _useState4[1];

  (0, _react.useEffect)(function () {
    var user = _auth.default.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  /**

   * This is the fuction to logout of the app, onClick, we call the function from authService logout 

   * that removes the current user from the locale storage of the browser

   */

  var logOut = function logOut() {
    _auth.default.logout();
  };
  /**

   * Function to toggle the navbar , we set the state to false

   */


  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactstrap.Navbar, {
    color: "light",
    light: true,
    expand: "md"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.NavbarBrand, {
    href: "/"
  }, "Emotionner"), /*#__PURE__*/_react.default.createElement(_reactstrap.NavbarToggler, {
    onClick: toggle
  }), /*#__PURE__*/_react.default.createElement(_reactstrap.Collapse, {
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Nav, {
    className: "mr-auto",
    navbar: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactstrap.NavLink, {
    href: "/profile"
  }, "Mi calendario")), /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactstrap.NavLink, {
    href: "/agenda"
  }, "Mi agenda")), /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactstrap.NavLink, {
    href: "/mood"
  }, "Mi Mood Journal")), /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactstrap.NavLink, {
    href: "/articles"
  }, "Articulos")), /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactstrap.NavLink, {
    href: "/stats"
  }, "Estad\xEDsticas")), /*#__PURE__*/_react.default.createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react.default.createElement(_reactstrap.NavLink, {
    href: "/",
    type: "button",
    style: ({
      fontWeight: 'lighter'
    }, {
      fontSize: '16px'
    }),
    className: "btn-md btn-light",
    onClick: logOut
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-user"
  }), "   Cerrar Sesi\xF3n"))))));
};

var _default = Navbar_;
exports.default = _default;

//# sourceMappingURL=navbar.js.map