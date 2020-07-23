"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

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

 *  This class is the emotion of the month component, we can see the data of all the emotions that 

 * an user stored in the aplication. We used the ChartJS library.

 */
var MothEmotion = /*#__PURE__*/function (_Component) {
  _inherits(MothEmotion, _Component);

  var _super = _createSuper(MothEmotion);

  function MothEmotion(props) {
    var _this;

    _classCallCheck(this, MothEmotion);

    _this = _super.call(this, props); //We pass the data through the state

    _this.state = {
      emotionMonth: '',
      iconE: ''
    };
    return _this;
  }
  /**

  *  We are updating the state of the component through componentDidMount()

  */


  _createClass(MothEmotion, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //We need the current user and its id
      var currentUser = _auth.default.getCurrentUser();

      var id = currentUser.id;
      /**

      * We get the data for the graphic through an axios get call

      */

      _axios.default.get("https://emotionner.herokuapp.com/users/emotionOfTheMonth/".concat(id)).then(function (res) {
        //Then
        var array = res.data.ofTheMonth;
        var emotion = '';
        /**

         * We recive an array from the backend, if the array lenght is 0 

         * we are reciving an empty array so the user has not entered an emotion 

         * that month. Else we get the first element in the array.

         */

        if (array.length === 0) {
          emotion = '';
        } else {
          emotion = array[0].emotion;
        }
        /**

         * Since the data base returns the emotions with their id we need to cast the id number to

         * the emotion

         */


        var icon = '';
        var emotionL = '';

        if (emotion === 1) {
          emotionL = 'INCREIBLE';
          icon = "increible far fa-grin-stars";
        } else if (emotion === 11) {
          emotionL = 'BIEN';
          icon = "bien far fa-smile";
        } else if (emotion === 21) {
          emotionL = 'TRISTE';
          icon = "triste far fa-sad-tear";
          console.log(icon);
        } else if (emotion === 31) {
          emotionL = 'ENOJADO';
          icon = "enojado far fa-angry";
        } else if (emotion === 41) {
          emotionL = 'ANSIOSO';
          icon = "ansioso far fa-grimace";
        } else if (emotion === 51) {
          emotionL = 'ESTRESADO';
          icon = "estresado far fa-tired";
        } //We store the info in our state


        _this2.setState({
          emotionMonth: emotionL,
          iconE: icon
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
      }, "Este Mes te has sentido..."), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("h3", {
        className: this.state.emotionMonth === 'INCREIBLE' ? "emotionI" : this.state.emotionMonth === 'BIEN' ? "emotionB" : this.state.emotionMonth === 'TRISTE' ? "emotionT" : this.state.emotionMonth === 'ENOJADO' ? "emotionE" : this.state.emotionMonth === 'ANSIOSO' ? "emotionA" : this.state.emotionMonth === 'ESTRESADO' ? "emotionEs" : " "
      }, this.state.emotionMonth), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", {
        className: " d-flex justify-content-center"
      }, /*#__PURE__*/_react.default.createElement("h6", {
        className: "card-subtitle mb-2 text-muted"
      }, this.state.emotionMonth === 'INCREIBLE' ? "¡Estás teniendo una muy buena racha este mes! Sigue así." : this.state.emotionMonth === 'BIEN' ? "¡Cada día es una oportunidad para sentirse mucho mejor, sigue así!" : this.state.emotionMonth === 'TRISTE' ? "¿Estás teniendo un mes difícil?. No te preocupes siempre hay luz al final del tunel" : this.state.emotionMonth === 'ENOJADO' ? "Deja de lado aquellas cosas que solo te traen disgustos" : this.state.emotionMonth === 'ANSIOSO' ? "Es importante aprender a manejar tu ansiedad, busca un hobbie que te guste o relajate unos minutos." : this.state.emotionMonth === 'ESTRESADO' ? "Es importante controlar los niveles de estrés por tu salud. No te procupes que todo saldra bien!" : "¿Eres nuevo?. Ingresa una emoción para conocer tus estadisticas"))));
    }
  }]);

  return MothEmotion;
}(_react.Component);

var _default = MothEmotion;
exports.default = _default;

//# sourceMappingURL=monthEmotion.js.map