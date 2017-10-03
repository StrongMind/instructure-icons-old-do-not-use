'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconAnnotateLine = function (_Component) {
  _inherits(IconAnnotateLine, _Component);

  function IconAnnotateLine() {
    _classCallCheck(this, IconAnnotateLine);

    return _possibleConstructorReturn(this, (IconAnnotateLine.__proto__ || Object.getPrototypeOf(IconAnnotateLine)).apply(this, arguments));
  }

  _createClass(IconAnnotateLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconAnnotateLine',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement(
            'g',
            { stroke: 'none', strokeWidth: '1' },
            _react2.default.createElement('path', { d: 'M1355.294 1694.176v-438.211l112.941-112.941v664.094H0V113h1468.235v99.388l-112.94 112.941v-99.388H112.94v1468.235h1242.353zm-557.93-338.823c16.53-26.51 51.42-34.6 77.93-18.07 26.51 16.529 34.6 51.42 18.07 77.929-9.035 16.94-92.611 160.376-205.552 160.376h-9.036c-70.023-4.517-121.976-48.564-169.411-166.023-47.436-117.46-77.93-127.624-77.93-127.624a484.518 484.518 0 0 0-97.13 225.883c-6.549 31.187-37.14 51.16-68.329 44.611-31.187-6.55-51.16-37.141-44.611-68.33 20.33-94.87 79.059-310.587 199.906-320.752 96-9.035 154.729 108.423 190.87 197.647 28.235 68.894 38.4 92.612 72.283 96 33.882 3.388 89.223-58.73 112.94-101.647zm-458.54-903.53h564.705v112.942H338.824V451.824zm0 225.883h338.823v112.941H338.824V677.706z' }),
            _react2.default.createElement('path', { d: 'M1903.059 468.765l-225.883-225.883a56.47 56.47 0 0 0-80.188 0L919.341 920.53a56.47 56.47 0 0 0-15.812 39.53v282.353h282.353a56.47 56.47 0 0 0 39.53-16.941l677.647-677.647c21.523-21.959 21.523-57.101 0-79.06zm-740.894 660.706H1016.47V983.776l451.764-451.764 145.694 145.694-451.764 451.765zm531.953-531.953l-145.694-145.694 89.223-89.224 145.694 145.694-89.223 89.224z' })
          )
        )
      );
    }
  }]);

  return IconAnnotateLine;
}(_react.Component);

exports.default = IconAnnotateLine;