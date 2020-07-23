"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**

 * Form for CRUD operations in Tasks table

 */
var AddEditFormE = /*#__PURE__*/function (_React$Component) {
  _inherits(AddEditFormE, _React$Component);

  var _super = _createSuper(AddEditFormE);

  function AddEditFormE(props) {
    var _this;

    _classCallCheck(this, AddEditFormE);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "changeEmotion", function (e) {
      _this.setState({
        emotionId: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitFormAdd", function (e) {
      e.preventDefault();

      if (_this.state.emotionId === '') {
        alert('Por favor elija una emoción');
      } else {
        var currentUser = _auth.default.getCurrentUser();

        var id = currentUser.id;
        fetch('https://emotionner.herokuapp.com/users/registerEmotion', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: id,
            emotion_id: parseInt(_this.state.emotionId),
            description: _this.state.description
          })
        }).then(function (response) {
          return response.json();
        }).then(function (item) {
          console.log(item.data);
          window.location.reload();
        }).catch(function (err) {
          return console.log(err);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "submitFormEdit", function (e) {
      e.preventDefault();

      if (_this.state.emotionId === undefined) {
        _this.state.emotionId = _this.props.item.emotion_id;
        console.log("".concat(_this.state.emotionId));
      }

      var currentUser = _auth.default.getCurrentUser();

      var user = currentUser.id;
      var id = _this.state.id;
      var data = {
        id: _this.state.id,
        user_id: user,
        emotion_id: parseInt(_this.state.emotionId),
        description: _this.state.description
      };
      console.log(data);
      fetch("https://emotionner.herokuapp.com/users/updateRegister", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(function (response) {
        return response.json();
      }).then(function (item) {
        console.log(item.data);
        window.location.reload();
      }).catch(function (err) {
        return console.log(err);
      });
    });

    _this.state = {
      id: '',
      userId: '',
      emotionId: '',
      description: ''
    };
    return _this;
  }
  /**

   * Listen to the value changes on the table

   * @param {*} e 

   */


  _createClass(AddEditFormE, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if item exists, populate the state with proper data
      if (this.props.item) {
        var _this$props$item = this.props.item,
            id = _this$props$item.id,
            userId = _this$props$item.userId,
            emotionId = _this$props$item.emotionId,
            description = _this$props$item.description;
        this.setState({
          id: id,
          userId: userId,
          emotionId: emotionId,
          description: description
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "styleLetters"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "try"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
        onSubmit: this.props.item ? this.submitFormEdit : this.submitFormAdd,
        autoComplete: "off"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        tag: "fieldset"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, /*#__PURE__*/_react.default.createElement("h2", {
        style: {
          fontWeight: 'lighter',
          fontFamily: 'Roboto, Sans Serif'
        }
      }, "\xBFC\xF3mo te sientes?")), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        check: true,
        className: "d-flex justify-content-start"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "radio",
        name: "increible",
        value: "1",
        checked: this.state.emotionId === '1',
        onChange: this.changeEmotion
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "increible far fa-grin-stars"
      }), /*#__PURE__*/_react.default.createElement("p", null, "Increible"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        check: true,
        className: "d-flex justify-content-start"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        check: true
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "radio",
        name: "bien",
        value: "11",
        checked: this.state.emotionId === '11',
        onChange: this.changeEmotion
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "bien far fa-smile"
      }), /*#__PURE__*/_react.default.createElement("p", null, "Bien")))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        check: true,
        className: "d-flex justify-content-start"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        check: true
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "radio",
        name: "triste",
        value: "21",
        checked: this.state.emotionId === '21',
        onChange: this.changeEmotion
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "triste far fa-sad-tear"
      }), /*#__PURE__*/_react.default.createElement("p", null, "Triste"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        check: true,
        className: "d-flex justify-content-start"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        check: true
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "radio",
        name: "enojado",
        value: "31",
        checked: this.state.emotionId === '31',
        onChange: this.changeEmotion
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "enojado far fa-angry"
      }), /*#__PURE__*/_react.default.createElement("p", null, "Enojado")))))), /*#__PURE__*/_react.default.createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        check: true,
        className: "d-flex justify-content-start"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        check: true
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "radio",
        name: "ansioso",
        value: "41",
        checked: this.state.emotionId === '41',
        onChange: this.changeEmotion
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "ansioso far fa-grimace"
      }), /*#__PURE__*/_react.default.createElement("p", null, "Ansioso"))))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, {
        check: true,
        className: "d-flex justify-content-start"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        check: true
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "radio",
        name: "estresado",
        value: "51",
        checked: this.state.emotionId === '51',
        onChange: this.changeEmotion
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: "text-center"
      }, /*#__PURE__*/_react.default.createElement("i", {
        className: "estresado far fa-tired"
      }), /*#__PURE__*/_react.default.createElement("p", null, "Estresado"))))))), /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        for: "last"
      }, /*#__PURE__*/_react.default.createElement("h4", {
        style: {
          fontWeight: 'lighter',
          fontFamily: 'Roboto, Sans Serif'
        }
      }, "\xBFQuieres expresarte mejor?")), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "textarea",
        name: "description",
        id: "description",
        onChange: this.onChange,
        value: this.state.description === null ? '' : this.state.description
      })), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-end"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        className: "btn btn--opacity homepagebutton",
        style: {
          marginTop: '20px',
          width: '50%'
        }
      }, "Submit"))))));
    }
  }]);

  return AddEditFormE;
}(_react.default.Component);

var _default = AddEditFormE;
exports.default = _default;

//# sourceMappingURL=emotionsEdit.js.map