'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStarSolid;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = require('../SVGIcon');

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStarSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStarSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1439.99 1758.35c-15.439 0-30.879-4.48-44.398-13.44L960 1454.516 524.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}