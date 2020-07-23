"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBigCalendar = require("react-big-calendar");

var _moment = _interopRequireDefault(require("moment"));

require("react-big-calendar/lib/css/react-big-calendar.css");

var _toolbar = _interopRequireDefault(require("./toolbar"));

var _axios = _interopRequireDefault(require("axios"));

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _reactNotifications = require("react-notifications");

require("react-notifications/lib/notifications.css");

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('moment/locale/es.js'); //We use moment locale library to manage the time in the calendar


_moment.default.locale('es');

var localizer = (0, _reactBigCalendar.momentLocalizer)(_moment.default);
/**

 * This class renders the calendar component

 * we use Ract Big Calendar library for the calendar

 */

var Calendario = /*#__PURE__*/function (_Component) {
  _inherits(Calendario, _Component);

  var _super = _createSuper(Calendario);

  function Calendario(props) {
    var _this;

    _classCallCheck(this, Calendario);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "convertDate", function (date) {
      return _moment.default.utc(date).toDate();
    });

    _this.state = {
      tasks: [//State is updated via componentDidMount
      ]
    };
    return _this;
  }
  /**

   * We use this function to convert the date in a format that the calendar needs to display it

   * @param date as a date as a string

   * @returns a date converted

   */


  _createClass(Calendario, [{
    key: "componentDidMount",

    /**

     * We use componentDidMount() to render the task that we get from the database

     */
    value: function componentDidMount() {
      var _this2 = this;

      //We get the current user
      var currentUser = _auth.default.getCurrentUser(); //Then we get its id


      var id = currentUser.id; //We make the axios call

      _axios.default.get("https://emotionner.herokuapp.com/users/tasks/".concat(id)).then(function (response) {
        var aux = response.data.tasks.tasks; //We filter through enabled tasks only

        var appointments = aux.filter(function (x) {
          return x.enabled === 1;
        });

        for (var i = 0; i < appointments.length; i++) {
          //We convert each date that the database returns as a string to a date 
          appointments[i].start = _this2.convertDate(appointments[i].start);
          var dias = 1; // Number of days to add

          appointments[i].start.setDate(appointments[i].start.getDate() + dias);
          appointments[i].end = _this2.convertDate(appointments[i].end);
          appointments[i].end.setDate(appointments[i].end.getDate() + dias);
        } //Then we update the state with the task in the database


        _this2.setState({
          tasks: appointments
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      /**

       * Here we desplay the notifications 

       */
      //We get the tasks in the state
      var tasks = this.state.tasks; //We get the current date

      var date = (0, _moment.default)(_moment.default.now()).format("YYYY-MM-DD"); //We show the notification if the task date match the current date

      for (var i = 0; i < tasks.length; i++) {
        if ((0, _moment.default)(tasks[i].start).format("YYYY-MM-DD") === date && tasks[i].enabled === 1 && tasks[i].completed === false) {
          _reactNotifications.NotificationManager.info('Para hoy tienes planeado: ' + tasks[i].title, 'Recuerda tu tarea!', 80000);
        }
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "calendar-container"
      }, /*#__PURE__*/_react.default.createElement(_reactBigCalendar.Calendar, {
        popup: true,
        selectable: true,
        localizer: localizer,
        events: tasks,
        defaultView: _reactBigCalendar.Views.MONTH,
        scrollToTime: new Date(1970, 1, 1, 6),
        onSelectEvent: function onSelectEvent(event) {
          return alert('Tarea: ' + event.title + '\n' + 'Descripcion: ' + event.description);
        },
        components: {
          toolbar: _toolbar.default
        },
        onSelectSlot: this.handleSelect,
        dayLayoutAlgorithm: this.state.dayLayoutAlgorithm,
        defaultDate: new Date(),
        eventPropGetter: function eventPropGetter(event) {
          var newStyle = {
            backgroundColor: "#d7ade996",
            color: 'black',
            borderRadius: "0px",
            border: "none"
          };

          if (event.completed) {
            newStyle.backgroundColor = "#EFE7F3";
          }

          return {
            className: "",
            style: newStyle
          };
        }
      }), /*#__PURE__*/_react.default.createElement(_reactNotifications.NotificationContainer, null));
    }
  }]);

  return Calendario;
}(_react.Component);

var _default = Calendario;
exports.default = _default;

//# sourceMappingURL=calendar.js.map