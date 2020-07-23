"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

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
var AddEditForm = /*#__PURE__*/function (_React$Component) {
  _inherits(AddEditForm, _React$Component);

  var _super = _createSuper(AddEditForm);

  function AddEditForm() {
    var _this;

    _classCallCheck(this, AddEditForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: '',
      title: '',
      description: '',
      content: '',
      author: '',
      image: '',
      emotion: '',
      premium: ''
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(_defineProperty({}, e.target.name, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "submitFormEdit", function (e) {
      e.preventDefault();
      var data = {
        id: _this.state.id,
        phrase: _this.state.phrase
      };
      console.log(data);
      fetch("https://emotionner.herokuapp.com/phrases/updatePhrase", {
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

    return _this;
  }

  _createClass(AddEditForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if item exists, populate the state with proper data
      if (this.props.item) {
        var _this$props$item = this.props.item,
            id = _this$props$item.id,
            phrase = _this$props$item.phrase;
        this.setState({
          id: id,
          phrase: phrase
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "styleLetters"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, {
        onSubmit: this.props.item ? this.submitFormEdit : this.submitFormAdd,
        autoComplete: "off"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "try"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Label, {
        for: "first",
        style: {
          marginBottom: '10px'
        }
      }, "Ingrese una nueva frase"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
        type: "textarea",
        name: "phrase",
        id: "phrase",
        onChange: this.onChange,
        value: this.state.phrase === null ? '' : this.state.phrase
      }))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "d-flex justify-content-end"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Button, {
        className: "btn btn--opacity homepagebutton",
        style: {
          marginTop: '20px',
          width: '50%'
        }
      }, "Submit")))));
    }
  }]);

  return AddEditForm;
}(_react.default.Component);

var _default = AddEditForm;
exports.default = _default;

//# sourceMappingURL=PhraseEdit.js.map