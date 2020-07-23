"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _auth = _interopRequireDefault(require("./auth.service"));

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var admin = _auth.default.getCurrentAdmin();
/**

 * Protects the routes of the app you need to be logged to

 * navigate the routes.

 * @param {*} param0 

 */


var PrivateRouteA = function PrivateRouteA(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return (
    /*#__PURE__*/

    /**

     * If the user is logged we load the view

     */
    _react.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
      render: function render(props) {
        return _auth.default.isAuth(admin) === true ? /*#__PURE__*/_react.default.createElement(Component, props) : /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
          to: "/"
        }) //else we redirect
        ;
      }
    }))
  );
};

var _default = PrivateRouteA;
exports.default = _default;

//# sourceMappingURL=privateRouteA.js.map