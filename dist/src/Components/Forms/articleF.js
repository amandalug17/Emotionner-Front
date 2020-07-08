"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _auth = _interopRequireDefault(require("../../Services/auth.service"));

var _axios = _interopRequireDefault(require("axios"));

var _articleCard = _interopRequireDefault(require("../Forms/articleCard"));

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

/**

 * We call all the articles in here

 */
var ArticleView = /*#__PURE__*/function (_Component) {
  _inherits(ArticleView, _Component);

  var _super = _createSuper(ArticleView);

  function ArticleView() {
    var _this;

    _classCallCheck(this, ArticleView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      items: []
    });

    return _this;
  }

  _createClass(ArticleView, [{
    key: "getItems",

    /**

     * GetItems()

     * @returns articles in the database based in the last registered emotion that the user registered in the page

     */
    value: function getItems() {
      var _this2 = this;

      var currentUser = _auth.default.getCurrentUser();

      var id = currentUser.id;
      var emotionid = '';
      /**

       * First we return the last emotion that the user registered 

       */

      _axios.default.get("https://emotionner.herokuapp.com/users/getLastEmotion/".concat(id)).then(function (response) {
        var emotionArray = response.data.emotion;
        /**

         * Then we do another axios call to get all the articles that match the emotion id

         * if the user has registered an emotion we only fetch the articles that are linked to thar emotion

         * else we fetch all the articles.

         */

        if (Array.isArray(emotionArray) && emotionArray.length) {
          var emotionid = response.data.emotion[0].emotion_id;
          var id2 = parseInt(emotionid);

          _axios.default.get("https://emotionner.herokuapp.com/articles/selectArticle/".concat(id2)).then(function (response) {
            var articles = response.data.article;

            _this2.setState({
              items: articles
            });
          }).catch(function (error) {
            console.log(error);
          });
        } else {
          //else

          /**

           * We validate that we reciving an array from the bd

           */
          _axios.default.get("https://emotionner.herokuapp.com/articles/findAll").then(function (response) {
            var resArray = response.data;

            if (Array.isArray(resArray) && resArray.length) {
              var articles = response.data;

              _this2.setState({
                items: articles
              });
            } else {
              //If we recive a null object because we dont have articles in our bd the array will be null
              var _articles = [];

              _this2.setState({
                items: _articles
              });
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getItems();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Container, {
        className: "container"
      }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, null, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, null, /*#__PURE__*/_react.default.createElement(_articleCard.default, {
        items: this.state.items
      })))));
    }
  }]);

  return ArticleView;
}(_react.Component);

var _default = ArticleView;
exports.default = _default;

//# sourceMappingURL=articleF.js.map