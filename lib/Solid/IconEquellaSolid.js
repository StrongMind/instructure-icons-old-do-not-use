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

var IconEquellaSolid = function (_Component) {
  _inherits(IconEquellaSolid, _Component);

  function IconEquellaSolid() {
    _classCallCheck(this, IconEquellaSolid);

    return _possibleConstructorReturn(this, (IconEquellaSolid.__proto__ || Object.getPrototypeOf(IconEquellaSolid)).apply(this, arguments));
  }

  _createClass(IconEquellaSolid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _SVGIcon2.default,
        _extends({}, this.props, {
          name: 'IconEquellaSolid',
          viewBox: '0 0 1920 1920'
        }),
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 1920 1920' },
          _react2.default.createElement('path', { d: 'M878.722 1814.601c1.569-8.451 10.381-15.333 19.676-15.333h74.482c9.174 0 15.21 6.882 13.52 15.333l-14.486 70.507c-1.69 8.452-10.502 15.454-19.797 15.454h-74.602c-9.054 0-15.09-7.002-13.28-15.454l14.487-70.507zM159.62 1834.16c1.69-8.452 10.503-15.454 19.677-15.454h74.602c9.174 0 15.21 7.002 13.279 15.454l-14.245 70.507c-1.81 8.451-10.623 15.333-19.797 15.333h-74.481c-9.175 0-15.21-6.882-13.52-15.333l14.485-70.507zM131.01 591.828c1.69-8.451 10.503-15.454 19.677-15.454h74.482c9.174 0 15.21 7.003 13.279 15.454l-14.245 70.507c-1.931 8.452-10.864 15.333-19.918 15.333h-74.481c-9.175 0-15.21-6.881-13.52-15.333l14.485-70.507h.242zM630.049 15.333C631.858 6.882 640.671 0 649.845 0h74.482c9.295 0 15.33 7.002 13.64 15.333l-14.485 70.628c-1.69 8.451-10.623 15.454-19.798 15.454h-74.602c-9.174 0-15.21-7.244-13.278-15.454l14.244-70.628zm784.167 0C1415.905 6.882 1424.717 0 1433.892 0h74.481c9.174 0 15.21 7.002 13.279 15.333l-14.245 70.628c-1.81 8.451-10.623 15.333-19.918 15.333h-74.481c-9.174 0-15.21-7.244-13.52-15.454l14.486-70.628.241.121zM930.63 397.208c1.932-8.693 10.865-15.695 19.918-15.695h74.482c9.174 0 15.21 7.244 13.52 15.695l-14.486 70.387c-1.69 8.451-10.502 15.333-19.797 15.333h-74.482c-9.174 0-15.09-6.882-13.278-15.333l14.244-70.508-.12.121zm-209.2-140.411c1.811-8.451 10.865-15.212 19.677-15.212h132.546c9.174 0 15.09 7.002 13.278 15.333l-25.108 125.078c-1.811 8.451-10.865 15.212-19.798 15.212H709.237c-9.053 0-15.089-6.882-13.278-15.212l25.35-125.2h.12zM381.375 1479.57c1.811-8.451 10.865-15.212 19.677-15.212h132.425c9.295 0 15.21 6.76 13.52 15.091l-25.592 125.2c-1.69 8.45-10.623 15.211-19.556 15.211H369.062c-8.933 0-14.97-6.881-13.28-15.212l25.592-125.199v.12zm535.615 128.58c1.81-8.452 10.864-15.334 19.676-15.334h132.546c9.174 0 15.089 6.882 13.278 15.213l-25.35 125.199c-1.81 8.45-10.864 15.091-19.797 15.091H904.796c-9.053 0-15.09-6.882-13.278-15.091l25.35-125.32.12.241zm348.988-97.793c5.19-25.354 31.627-45.879 58.909-45.879h207.268c27.402 0 45.389 20.525 40.198 45.879l-40.077 196.068c-5.191 25.354-31.748 45.878-59.15 45.878h-206.907c-27.402 0-45.389-20.283-40.077-45.878l40.077-196.068h-.241zm-964.275-467.233c5.191-25.354 31.628-46.12 58.91-46.12H567.88c27.402 0 45.389 20.525 40.198 45.878L568 1239.192c-5.19 25.354-31.748 45.879-59.15 45.879H301.702c-27.281 0-45.389-20.525-40.077-45.878l40.077-196.07zm66.394-405.176c5.07-25.354 31.386-45.879 58.909-45.879h207.147c27.403 0 45.39 20.525 40.199 45.879l-40.078 196.31c-5.19 25.353-31.748 45.878-59.15 45.878H368.096c-27.403 0-45.51-20.525-40.198-45.878l40.077-196.31h.12zM1494.61 240.86c5.191-25.353 31.749-45.878 59.151-45.878h207.148c27.402 0 45.389 20.525 40.198 45.878l-39.957 196.19c-5.19 25.353-31.627 45.878-58.91 45.878h-207.267c-27.403 0-45.39-20.525-40.199-45.878l40.078-196.19h-.242zM853.613 699.038c12.071-59.159 73.878-107.09 137.857-107.09h629.651c63.98 0 106.23 47.931 94.158 107.21l-121.922 595.813c-12.072 59.158-73.878 107.21-137.857 107.21H825.848c-63.979 0-106.23-47.93-94.158-107.21l121.923-595.692v-.241z', stroke: 'none', strokeWidth: '1' })
        )
      );
    }
  }]);

  return IconEquellaSolid;
}(_react.Component);

exports.default = IconEquellaSolid;