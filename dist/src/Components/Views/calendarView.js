"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _calendar = _interopRequireDefault(require("../Elements/calendar"));

var _footerInside = _interopRequireDefault(require("../Elements/footerInside"));

require("./../../App.css");

var _navbar = _interopRequireDefault(require("../Elements/navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * Imports

 */

/**

 * This hook renders the view for the calendar

 */
var CalendarView = function CalendarView() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbar.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-4",
    style: {
      paddingTop: '25px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonArrow"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "link",
    href: "/agenda",
    style: {
      textTransform: 'uppercase'
    }
  }, "Nueva Tarea"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-1"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-5",
    style: {
      paddingTop: '25px'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonArrow fit-to-content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "link",
    href: "/mood",
    style: {
      textTransform: 'uppercase'
    }
  }, "\xBFC\xD3MO TE SIENTES HOY?"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-1"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_calendar.default, null))), /*#__PURE__*/_react.default.createElement(_footerInside.default, null));
};

var _default = CalendarView;
exports.default = _default;

//# sourceMappingURL=calendarView.js.map