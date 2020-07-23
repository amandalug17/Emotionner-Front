"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./../../App.css");

var _auth = _interopRequireDefault(require("./../../Services/auth.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * This is the admin side bar component

 */
var Sidebar_ = function Sidebar_(props) {
  var $button = document.querySelector('#sidebar-toggle');
  var $wrapper = document.querySelector('#wrapper');

  if ($button && $wrapper) {
    $button.addEventListener('click', function (e) {
      e.preventDefault();
      $wrapper.classList.toggle('toggled');
    });
  }
  /**

  * This is the fuction to logout of the app, onClick, we call the function from authService logout 

  * that removes the current user from the locale storage of the browser

  */


  var logOut = function logOut() {
    _auth.default.logoutA();
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    id: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("aside", {
    id: "sidebar-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "sidebar-brand"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Emotionner")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "sidebar-nav"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/admin/dashboard"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-home",
    style: {
      marginLeft: '7px',
      fontSize: '25px',
      marginRight: '20px'
    }
  }), "Home")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/admin/createArticle"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-edit",
    style: {
      marginLeft: '7px',
      fontSize: '25px',
      marginRight: '20px'
    }
  }), "Art\xEDculo")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/admin/createPhrase"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-pen-nib",
    style: {
      marginLeft: '7px',
      fontSize: '25px',
      marginRight: '20px'
    }
  }), "Frases")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/",
    onClick: logOut
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-user",
    style: {
      marginLeft: '7px',
      fontSize: '25px',
      marginRight: '20px'
    }
  }), "Cerrar Sesi\xF3n")))), /*#__PURE__*/_react.default.createElement("div", {
    id: "navbar-wrapper"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-inverse"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-header"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "navbar-brand",
    id: "sidebar-toggle"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-bars"
  })))))));
};

var _default = Sidebar_;
exports.default = _default;

//# sourceMappingURL=sidebar.js.map