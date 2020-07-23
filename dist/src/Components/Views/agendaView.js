"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _tasksModal = _interopRequireDefault(require("../Forms/tasksModal"));

var _taskTable = _interopRequireDefault(require("../Elements/taskTable"));

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _axios = _interopRequireDefault(require("axios"));

var _footerInside = _interopRequireDefault(require("../Elements/footerInside"));

var _taskHero = _interopRequireDefault(require("../Elements/taskHero"));

var _taskQuote = _interopRequireDefault(require("../Elements/taskQuote"));

require("./../../App.css");

var _navbar = _interopRequireDefault(require("../Elements/navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * Agenda View where all agenda components are called

 * We render the task tables and the add a Task Button

 */
var agendaView = /*#__PURE__*/function (_Component) {
  _inherits(agendaView, _Component);

  var _super = _createSuper(agendaView);

  function agendaView() {
    var _this;

    _classCallCheck(this, agendaView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: []
    });

    _defineProperty(_assertThisInitialized(_this), "addItemToState", function (item) {
      _this.setState(function (prevState) {
        return {
          items: [].concat(_toConsumableArray(prevState.items), [item])
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateState", function (item) {
      var itemIndex = _this.state.items.findIndex(function (data) {
        return data.id === item.id;
      });

      var newArray = [].concat(_toConsumableArray(_this.state.items.slice(0, itemIndex)), [// add the updated item to the array
      item], _toConsumableArray(_this.state.items.slice(itemIndex + 1)));

      _this.setState({
        items: newArray
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteItemFromState", function (id) {
      var updatedItems = _this.state.items.filter(function (item) {
        return item.id !== id;
      });

      _this.setState({
        items: updatedItems
      });
    });

    return _this;
  }

  _createClass(agendaView, [{
    key: "getItems",

    /**

     * GetItems()

     * @return tasks in the database

     */
    value: function getItems() {
      var _this2 = this;

      //We get the current user
      var currentUser = _auth.default.getCurrentUser(); //We get its id


      var id = currentUser.id; //Then we execute the axios call to the API

      _axios.default.get("https://emotionner.herokuapp.com/users/tasks/".concat(id)).then(function (response) {
        var aux = response.data.tasks.tasks; //We filter through enabled tasks only

        var appointments = aux.filter(function (x) {
          return x.enabled === 1;
        });

        _this2.setState({
          items: appointments
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
    /***

     * Adds a new item to the state of the component

     * @param item as an object of a task

     */

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_navbar.default, null), /*#__PURE__*/_react.default.createElement(_taskHero.default, null), /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
        className: "container",
        style: {
          marginBottom: '20px'
        }
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("h1", {
        style: {
          margin: "20px",
          fontWeight: 'lighter',
          letterSpacing: '5px',
          fontSize: '25px'
        }
      }, " \xA1DISFRUTA DE TUS PEQUE\xD1OS LOGROS!"))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_taskTable.default, {
        items: this.state.items,
        updateState: this.updateState,
        deleteItemFromState: this.deleteItemFromState
      }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
        className: "d-flex justify-content-end"
      }, /*#__PURE__*/_react.default.createElement(_tasksModal.default, {
        buttonLabel: "A\xF1adir tarea",
        addItemToState: this.addItemToState
      })))), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement(_taskQuote.default, null)), /*#__PURE__*/_react.default.createElement(_footerInside.default, null));
    }
  }]);

  return agendaView;
}(_react.Component);

var _default = agendaView;
exports.default = _default;

//# sourceMappingURL=agendaView.js.map