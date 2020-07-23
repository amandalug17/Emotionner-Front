"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _emotionsModal = _interopRequireDefault(require("../Forms/emotionsModal"));

var _all = _interopRequireDefault(require("../Forms/all"));

require("./../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

 * This class renders the emotions table

 */
var EmotionsTable = /*#__PURE__*/function (_Component) {
  _inherits(EmotionsTable, _Component);

  var _super = _createSuper(EmotionsTable);

  function EmotionsTable() {
    _classCallCheck(this, EmotionsTable);

    return _super.apply(this, arguments);
  }

  _createClass(EmotionsTable, [{
    key: "setMood",

    /**

     * We recive an id so we need to asign a value to the variable

     * @param item 

     */
    value: function setMood(item) {
      var mood = '';

      if (item === 1) {
        mood = 'Increible';
      } else if (item === 11) {
        mood = 'Bien';
      } else if (item === 21) {
        mood = 'Triste';
      } else if (item === 31) {
        mood = 'Enojado';
      } else if (item === 41) {
        mood = 'Ansioso';
      } else {
        mood = 'Estresado';
      }

      return mood.toUpperCase();
    }
    /**

     * Function to assing the icon to the table

     * @param item as a string

     * @returns icon as a string

     */

  }, {
    key: "setIcon",
    value: function setIcon(item) {
      var icon = '';

      if (item === 1) {
        icon = "increible far fa-grin-stars";
      } else if (item === 11) {
        icon = "bien far fa-smile";
      } else if (item === 21) {
        icon = "triste far fa-sad-tear";
      } else if (item === 31) {
        icon = "enojado far fa-angry";
      } else if (item === 41) {
        icon = "ansioso far fa-grimace";
      } else {
        icon = "estresado far fa-tired";
      }

      return icon;
    }
    /**

     * We cast the date to a YY-MM-DD string date

     * @param item as a string

     */

  }, {
    key: "toDate",
    value: function toDate(item) {
      var date = new Date(item);
      var fecha = date.toLocaleString('es');
      return fecha.toString();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      /**

       * We iterate across the items or tasks and we show them in the table

       */
      var items = this.props.items.map(function (item) {
        return /*#__PURE__*/_react.default.createElement("tr", {
          key: item.id
        }, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("a", {
          className: " d-flex justify-content-center",
          role: "button"
        }, /*#__PURE__*/_react.default.createElement("i", {
          className: _this.setIcon(item.emotion_id)
        })), /*#__PURE__*/_react.default.createElement("p", {
          className: "text-center"
        }, _this.setMood(item.emotion_id))), /*#__PURE__*/_react.default.createElement("td", null, item.description), /*#__PURE__*/_react.default.createElement("td", null, _this.toDate(item.createdAt)), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_emotionsModal.default, {
          buttonLabel: "Editar",
          item: item,
          updateState: _this.props.updateState
        })));
      });
      return /*#__PURE__*/_react.default.createElement(_reactstrap.Table, {
        bordered: true,
        responsive: true,
        hover: true,
        style: {
          backgroundColor: '#fff'
        }
      }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Mood"), /*#__PURE__*/_react.default.createElement("th", null, "Descripcion"), /*#__PURE__*/_react.default.createElement("th", null, "Fecha"), /*#__PURE__*/_react.default.createElement("th", {
        style: {
          width: '15%'
        }
      }))), /*#__PURE__*/_react.default.createElement("tbody", null, items));
    }
  }]);

  return EmotionsTable;
}(_react.Component);

var _default = EmotionsTable;
exports.default = _default;

//# sourceMappingURL=emotionsTable.js.map