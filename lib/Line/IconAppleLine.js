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

var IconAppleLine = function (_Component) {
  _inherits(IconAppleLine, _Component);

  function IconAppleLine() {
    _classCallCheck(this, IconAppleLine);

    return _possibleConstructorReturn(this, (IconAppleLine.__proto__ || Object.getPrototypeOf(IconAppleLine)).apply(this, arguments));
  }

  _createClass(IconAppleLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconAppleLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1280.125 504.302c-126.642 0-244.163 82-308.964 82-68.401 0-173.923-76.56-285.924-76.56h-4.48c-149.362 2.24-287.124 86.961-364.165 220.723-155.042 269.284-39.68 668.249 111.681 886.812C500.834 1722.238 587.235 1840 700.037 1840c2 0 4 0 6-.08 111.442-4.4 153.602-72.081 288.324-72.081 132.642 0 171.442 69.921 285.284 69.921 1.76 0 3.52 0 5.28-.08 119.922-2.16 195.923-108.882 269.364-216.163 84.88-124.082 119.921-244.163 121.921-250.323-2.64-1.28-233.923-89.762-236.243-356.085v.08c-2.16-222.963 181.843-329.765 190.003-335.125-103.362-151.282-264.484-172.002-321.765-174.402-9.36-.88-18.8-1.36-28.08-1.36m0 160.002c3.92 0 7.92.16 11.92.56l4.8.48 4.8.24c19.2.8 52.72 4.48 89.201 19.12-60 77.921-112.241 187.443-110.881 331.845 1.68 190.802 91.361 331.124 197.843 419.285-14.64 29.6-33.04 62.401-55.521 95.282-39.76 58.08-99.842 145.842-142.642 146.642-20.56 0-33.36-5.12-67.441-19.84-48.88-21.12-115.842-50.081-217.843-50.081-104.801 0-173.922 29.44-224.403 50.88-33.2 14.16-48.72 20.48-69.921 21.28-12.64 0-47.68-20-140.242-153.841-135.682-195.923-214.243-525.367-104.481-715.93 49.12-85.281 136.402-139.122 229.923-140.482 32.24 0 75.92 17.28 118.081 34 52.721 20.96 107.282 42.561 167.843 42.561 57.44 0 109.201-20.4 164.082-42 47.6-18.72 101.441-40.001 144.882-40.001zm-61.785-303.26c61.52-74.561 103.041-177.923 91.601-281.044-88.48 3.6-195.762 58.96-259.203 133.282-56.961 66-106.802 171.202-93.522 272.244 98.882 7.68 199.683-50.161 261.204-124.482h-.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconAppleLine;
}(_react.Component);

exports.default = IconAppleLine;