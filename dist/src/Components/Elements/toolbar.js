"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.views = exports.navigateContants = void 0;

var _react = _interopRequireDefault(require("react"));

var _Toolbar2 = _interopRequireDefault(require("react-big-calendar/lib/Toolbar"));

require("./../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/**

 * This are the const to navigate the dates in the libary

 */
var navigateContants = {
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  TODAY: 'TODAY',
  DATE: 'DATE'
};
/**

 * This are the const to change the view of tha calendar

 */

exports.navigateContants = navigateContants;
var views = {
  MONTH: 'month',
  WEEK: 'week',
  WORK_WEEK: 'work_week',
  DAY: 'day',
  AGENDA: 'agenda'
};
/**

 * We created a custom responsive toolbar for the calendar

 */

exports.views = views;

var CalendarToolbar = /*#__PURE__*/function (_Toolbar) {
  _inherits(CalendarToolbar, _Toolbar);

  var _super = _createSuper(CalendarToolbar);

  function CalendarToolbar() {
    _classCallCheck(this, CalendarToolbar);

    return _super.apply(this, arguments);
  }

  _createClass(CalendarToolbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var view = this.props.view;
      console.log(view);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var now = new Date();
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: " row d-none d-sm-flex d-md-none calendar-header"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "col col-sm-4 p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('PREV');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-arrow-left"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "col col-sm-4 p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('TODAY');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-circle"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "col col-sm-4 p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('NEXT');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-arrow-right"
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: " row d-none d-flex d-sm-none calendar-header "
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "col col-sm-4 p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('PREV');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-arrow-left"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "col col-sm-4 p-1 calendar-sm-toolbar "
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('TODAY');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-circle"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "col col-sm-4 p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('NEXT');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-arrow-right"
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "row d-none d-md-flex p-1 calendar-header"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "col-sm p-1 calendar-sm-toolbar "
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('PREV');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-arrow-left"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "col-sm p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('TODAY');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-circle"
      }))), /*#__PURE__*/_react.default.createElement("span", {
        className: "col-sm p-1 calendar-sm-toolbar"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this.navigate('NEXT');
        }
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-arrow-right"
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "row  d-none d-md-flex p-1 calendar-header"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "col-sm p-1 text-center calendar-button"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.view.bind(null, 'month')
      }, "MES")), /*#__PURE__*/_react.default.createElement("span", {
        className: "col-sm p-1 text-center calendar-button"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.view.bind(null, 'week')
      }, "SEMANA")), /*#__PURE__*/_react.default.createElement("span", {
        className: "col-sm p-1 text-center calendar-button"
      }, /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: this.view.bind(null, 'day')
      }, "DIA"))), /*#__PURE__*/_react.default.createElement("div", {
        className: "row  d-sm-flex p-1 calendar-header"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "col-sm p-1 text-center calendar-text"
      }, /*#__PURE__*/_react.default.createElement("h2", null, this.props.label)))));
    }
  }]);

  return CalendarToolbar;
}(_Toolbar2.default);

exports.default = CalendarToolbar;

//# sourceMappingURL=toolbar.js.map