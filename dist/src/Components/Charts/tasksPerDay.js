"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _axios = _interopRequireDefault(require("axios"));

require("./../../App.css");

var _reactChartjs = require("react-chartjs-2");

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

 *  This class is the task per day, we can see the data of all the emotions that 

 * an user stored in the aplication. We used the ChartJS library.

 */
var TasksPerDay = /*#__PURE__*/function (_Component) {
  _inherits(TasksPerDay, _Component);

  var _super = _createSuper(TasksPerDay);

  function TasksPerDay(props) {
    var _this;

    _classCallCheck(this, TasksPerDay);

    _this = _super.call(this, props);
    _this.state = {
      Data: {}
    };
    return _this;
  }

  _createClass(TasksPerDay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var currentUser = _auth.default.getCurrentUser();

      var id = currentUser.id; //Hacemos la llamada a axios para obtener las emociones registradas de un usuario

      _axios.default.get("https://emotionner.herokuapp.com/users/tasksPerDay/".concat(id)).then(function (res) {
        //luego 
        console.log(res); //console.log del resultado

        var chartData = res.data.tasksPerDay; //guardamos el array de objetos devuelto

        var days = []; //creamos los arrays para las labels, es decir los dias

        var count = []; //y el array de la data, es decir la cuenta de las tareas completadas por día

        /**

         * Por cada record que me responde mi llamada axios voy a guardar los datos en su array correspondiente

         */

        chartData.forEach(function (record) {
          days.push(record.date);
          count.push(record.count);
        }); //lo guardamos todo en el estado

        _this2.setState({
          Data: {
            labels: days,
            datasets: [{
              label: 'Tareas completadas',
              data: count,
              backgroundColor: "#A288E3",
              fill: false,
              borderColor: "#A288E3",
              lineTension: 0.5,
              pointRadius: 5
            }]
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "card rounded"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/_react.default.createElement("h5", {
        className: "card-title"
      }, "Revisa tu progreso"), /*#__PURE__*/_react.default.createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, "\xA1Comprom\xE9tete a lograr m\xE1s cada d\xEDa!"), /*#__PURE__*/_react.default.createElement("div", {
        className: "chart-container",
        style: {
          position: "relative",
          height: " 60vh"
        }
      }, /*#__PURE__*/_react.default.createElement(_reactChartjs.Line, {
        data: this.state.Data,
        options: {
          maintainAspectRatio: false
        }
      }))));
    }
  }]);

  return TasksPerDay;
}(_react.Component);

var _default = TasksPerDay;
exports.default = _default;

//# sourceMappingURL=tasksPerDay.js.map