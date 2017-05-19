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

var IconMasqueradeLine = function (_Component) {
  _inherits(IconMasqueradeLine, _Component);

  function IconMasqueradeLine() {
    _classCallCheck(this, IconMasqueradeLine);

    return _possibleConstructorReturn(this, (IconMasqueradeLine.__proto__ || Object.getPrototypeOf(IconMasqueradeLine)).apply(this, arguments));
  }

  _createClass(IconMasqueradeLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SVGIcon2.default, _extends({}, this.props, {
        name: 'IconMasqueradeLine',
        viewBox: '0 0 1920 1920',
        src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1080.904 933.435c-20.695-1.774-27.721-10.574-28-32.278-1.46-115.479 88.73-223.93 203.653-237.948 84.034-10.296 168.66-15.861 257.773-23.966-3.86 16.87-5.67 39.166-13.947 58.748-80.348 190.122-235.479 251.166-419.479 235.444m-273.704 0c-184 15.722-339.13-45.322-419.478-235.444-8.279-19.582-10.087-41.878-13.948-58.748 89.113 8.105 173.704 13.67 257.774 23.966C746.47 677.226 836.66 785.679 835.2 901.157c-.278 21.704-7.304 30.504-28 32.278m647.165-808.418c-11.687 18.957-21.67 38.992-35.026 56.696-35.791 47.34-70.713 95.026-109.843 139.548-10.992 12.522-33.357 22.017-49.879 20.243-73.878-7.93-130.713 20.105-164.174 87.966-67.756-29.357-123.86-6.574-158.643 54.365-34.783-60.94-83.617-83.722-151.409-54.365-33.426-67.861-83.06-95.896-156.904-87.966-16.522 1.774-38.887-7.721-49.878-20.243-39.13-44.522-74.052-92.209-109.844-139.548-13.391-17.704-23.339-37.74-35.026-56.696-520.487 553.635-138.782 843.166-138.782 843.166 12.278 6.608 28.07 16.278 31.686 27.86 12.035 38.54 39.061 51.166 75.305 56.627 15.095 2.26 32.939 9.182 42.609 20.104 27.895 31.513 60.695 38.643 98.052 25.739 23.06-7.965 41.217-6.156 61.078 8.591 32.974 24.418 67.478 19.861 102.087.661 32.73-18.191 65.67-36.452 99.93-51.408 26.157-11.374 43.687-4.383 61.705 20.834 21.704 30.435 34.608 58.818 69.391 93.879 34.783-35.061 54.957-63.444 76.66-93.879 17.983-25.217 39.166-32.208 65.323-20.834 34.26 14.956 68.974 33.217 101.739 51.408 34.608 19.2 70.017 23.757 102.956-.66 19.896-14.748 39.965-16.557 62.992-8.592 27.79 9.6 42.504 8.07 77.287-6.296v626.957c0 38.26 31.304 69.565 69.565 69.565 38.26 0 69.565-31.304 69.565-69.565V999.696c0-1.287-.417-2.33-.035-3.653 3.618-11.582 18.713-21.252 30.991-27.86 0 0 380.974-289.53-139.478-843.166" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
      }));
    }
  }]);

  return IconMasqueradeLine;
}(_react.Component);

exports.default = IconMasqueradeLine;