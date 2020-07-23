"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * This is a hero component

 */
var TasksHero = function TasksHero() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-nav-task"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-nav__inner"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      fontWeight: 'lighter'
    }
  }, "Mi Agenda"), /*#__PURE__*/_react.default.createElement("div", {
    className: "hero-nav__button"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "btn"
  })))));
};

var _default = TasksHero;
exports.default = _default;

//# sourceMappingURL=taskHero.js.map