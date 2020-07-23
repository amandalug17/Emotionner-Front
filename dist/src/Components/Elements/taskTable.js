"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _tasksModal = _interopRequireDefault(require("../Forms/tasksModal"));

require("./../../App.css");

var _moment = _interopRequireDefault(require("moment"));

var _reactNotifications = require("react-notifications");

require("react-notifications/lib/notifications.css");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * This is the task table component

 */
var TaskTable = /*#__PURE__*/function (_Component) {
  _inherits(TaskTable, _Component);

  var _super = _createSuper(TaskTable);

  function TaskTable() {
    var _this;

    _classCallCheck(this, TaskTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: '',
      title: '',
      description: '',
      completed: '',
      start: '',
      end: '',
      time: '',
      enabled: '',
      userId: ''
    });

    _defineProperty(_assertThisInitialized(_this), "deleteItem", function (item) {
      //First we ask for a confirmation to delete the task
      var confirmDelete = window.confirm('¿Quiere eliminar esta tarea? Esta acción no se puede deshacer'); //If it's true we delete the task 

      if (confirmDelete) {
        //We change the value of enable to 0 meaning its false
        var data = {
          id: item.id,
          title: item.title,
          description: item.description,
          completed: false,
          start: item.start,
          end: item.start,
          time: item.time,
          enabled: 0
        }; //Then we do a PUT or UPDATE call the database passing the new task information

        fetch("https://emotionner.herokuapp.com/users/updateTask", {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(function (response) {
          return response.json();
        }).then(function (item) {
          //Then we update the view
          window.location.reload();
        }).catch(function (err) {
          return console.log(err);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "completeTask", function (item) {
      //We change the value of completed to the opposite value
      var itemStatus = !item.completed;
      var data = {
        id: item.id,
        title: item.title,
        description: item.description,
        completed: itemStatus,
        start: item.start,
        end: item.start,
        time: item.time,
        enabled: 1
      }; //Then we do a PUT or UPDATE call the database passing the new task information

      fetch("https://emotionner.herokuapp.com/users/updateTask", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response.json();
      }).then(function (item) {
        window.location.reload();
      }).catch(function (err) {
        return console.log(err);
      });
    });

    return _this;
  }

  _createClass(TaskTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var date = (0, _moment.default)(_moment.default.now()).format("YYYY-MM-DD");
      /**

       * We iterate across the items or tasks and we show them in the table to show the notification

       * were the task date match the current date

       */

      var items = this.props.items.map(function (item) {
        if ("".concat(item.start) === date && item.enabled === 1 && item.completed === false) {
          _reactNotifications.NotificationManager.info('Para hoy tienes planeado: ' + "".concat(item.title), 'Recuerda tu tarea!', 80000);
        }

        return /*#__PURE__*/_react.default.createElement("tr", {
          className: item.completed ? "td-completed" : "",
          key: item.id
        }, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
          className: "completed"
        }, /*#__PURE__*/_react.default.createElement("a", {
          onClick: function onClick() {
            return _this2.completeTask(item);
          },
          title: "Marcar como completado"
        }, item.completed ? /*#__PURE__*/_react.default.createElement("i", {
          className: "far fa-check-square marked"
        }) : /*#__PURE__*/_react.default.createElement("i", {
          className: "far fa-square marked"
        })))), /*#__PURE__*/_react.default.createElement("td", null, item.title), /*#__PURE__*/_react.default.createElement("td", null, item.description), /*#__PURE__*/_react.default.createElement("td", null, item.start), /*#__PURE__*/_react.default.createElement("td", null, item.time), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_tasksModal.default, {
          buttonLabel: !item.completed ? "Editar" : " ",
          item: item,
          updateState: _this2.props.updateState
        })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("div", {
          className: "buttonArrow"
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: "link",
          style: {
            textTransform: 'uppercase'
          },
          onClick: function onClick() {
            return _this2.deleteItem(item);
          },
          title: "Eliminar"
        }, "Eliminar"))));
      });
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Table, {
        bordered: true,
        responsive: true,
        hover: true,
        style: {
          backgroundColor: '#fff'
        }
      }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", {
        style: {
          width: '5%'
        }
      }), /*#__PURE__*/_react.default.createElement("th", null, "Tarea"), /*#__PURE__*/_react.default.createElement("th", null, "Descripcion"), /*#__PURE__*/_react.default.createElement("th", null, "Fecha"), /*#__PURE__*/_react.default.createElement("th", null, "Hora"), /*#__PURE__*/_react.default.createElement("th", {
        style: {
          width: '15%'
        }
      }), /*#__PURE__*/_react.default.createElement("th", {
        style: {
          width: '15%'
        }
      }))), /*#__PURE__*/_react.default.createElement("tbody", null, items)), /*#__PURE__*/_react.default.createElement(_reactNotifications.NotificationContainer, null));
    }
  }]);

  return TaskTable;
}(_react.Component);

var _default = TaskTable;
exports.default = _default;

//# sourceMappingURL=taskTable.js.map