"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _footerInside = _interopRequireDefault(require("../Elements/footerInside"));

var _navbarOutside = _interopRequireDefault(require("../Elements/navbarOutside"));

var _navbar = _interopRequireDefault(require("../Elements/navbar"));

var _auth = _interopRequireDefault(require("./../../Services/auth.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**

 * This is the homepage view component if we have an user we return a navbar with the options of 

 * the logged users else we show the outside nav

 */
var HomePage = function HomePage() {
  var _useState = (0, _react.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  (0, _react.useEffect)(function () {
    var user = _auth.default.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentUser ? /*#__PURE__*/_react.default.createElement(_navbar.default, null) : /*#__PURE__*/_react.default.createElement(_navbarOutside.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner__overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner__container"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "banner__title"
  }, "Emotionner"), /*#__PURE__*/_react.default.createElement("p", {
    className: "banner__text"
  }, "Creado por Amanda Gonzalez, Andrea Charles y Orly Dahan"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/login",
    className: "btn btn--opacity homepagebutton"
  }, "Inicia Sesi\xF3n")), /*#__PURE__*/_react.default.createElement("img", {
    className: "banner__scroll-down",
    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0xMjEuMywzNC42Yy0xLjYtMS42LTQuMi0xLjYtNS44LDBsLTUxLDUxLjEtNTEuMS01MS4xYy0xLjYtMS42LTQuMi0xLjYtNS44LDAtMS42LDEuNi0xLjYsNC4yIDAsNS44bDUzLjksNTMuOWMwLjgsMC44IDEuOCwxLjIgMi45LDEuMiAxLDAgMi4xLTAuNCAyLjktMS4ybDUzLjktNTMuOWMxLjctMS42IDEuNy00LjIgMC4xLTUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+Cjwvc3ZnPgo="
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "sect sect--type"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", _defineProperty({
    className: "row row--center"
  }, "className", "d-flex justify-content-center"), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-5 col-xs-8 col-sm-6 col--inbl "
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "sect__title"
  }, "Creemos que el bienestar emocional es lo m\xE1s importante"), /*#__PURE__*/_react.default.createElement("p", {
    className: " pHomepage sect__subtitle"
  }, "La ciencia nos ayuda a comprender cada d\xEDa lo importante que son las emociones para nuestro desarrollo personal. Por ello, emotionner decide prestar suma atenci\xF3n a las mismas y ayudarte constantemente a aceptar y manejar estos sentimientos."))), /*#__PURE__*/_react.default.createElement("div", {
    className: "row row--small row--margin row--center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 col-sm-4 coffee"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://miro.medium.com/max/4408/1*Dahjzk4_GsaFH-kRXHfaiw.png",
    className: "coffee__img"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "coffee__name"
  }, "Conocete mejor"), /*#__PURE__*/_react.default.createElement("p", {
    className: "pHomepage coffee__descr"
  }, "Conoce que efectos tienen las emociones en tu cuerpo, lleva un registro de las mismas y controla aquellas emociones que invaden tu cabeza.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 col-sm-4 coffee"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://cdn4.iconfinder.com/data/icons/startup-90/64/34-512.png",
    style: {
      maxHeight: '210px',
      maxWidth: '200px'
    },
    className: "coffee__img"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "coffee__name"
  }, "Estamos contigo"), /*#__PURE__*/_react.default.createElement("p", {
    className: "pHomepage coffee__descr"
  }, "Emotionner no solo te permite llevar un diario de tus tareas y emociones; buscamos aconsejarte y guiarte a trav\xE9s de los d\xEDas buenos y no tan buenos.")), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-4 col-sm-4 coffee"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://img.icons8.com/cotton/2x/task-planning.png",
    style: {
      maxHeight: '200px'
    },
    className: "coffee__img"
  }), /*#__PURE__*/_react.default.createElement("h2", {
    className: "coffee__name"
  }, "Organizate"), /*#__PURE__*/_react.default.createElement("p", {
    className: "pHomepage coffee__descr"
  }, "Sabemos lo importante que es administrar tu tiempo eficientemente. \xA1Organiza y planifica tus tareas en el d\xEDa a d\xEDa con nosotros y podr\xE1s as\xED disminuir tus niveles de estr\xE9s y ansiedad!"))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "half-sect"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "half half-sect__first"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "description__title"
  }, "\xABC'est la vie\xBB"), /*#__PURE__*/_react.default.createElement("p", {
    className: "description__p"
  }, "Creemos fielmente en que todo es posible cuando asumimos el control de nuestras vidas. Recuerda concentrate en las peque\xF1as cosas por las que vale la pena alegrarse y no te quedes estancada en los malos pensamientos. "))), /*#__PURE__*/_react.default.createElement("div", {
    className: "half half-sect__second"
  }, "  ")), /*#__PURE__*/_react.default.createElement("div", {
    className: "sect sect--great d-flex justify-content-end"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-8 col-sm-7 col-sm-offset-4 col-md-offset-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "description__title"
  }, "\xA1Comienza en Emotionner ya!"), /*#__PURE__*/_react.default.createElement("a", {
    href: "/singup",
    className: "btn btn--opacity homepagebutton d-flex justify-content-center"
  }, "Registrate"))))), /*#__PURE__*/_react.default.createElement(_footerInside.default, null));
};

var _default = HomePage;
exports.default = _default;

//# sourceMappingURL=homePage.js.map