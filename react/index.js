(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["InstructureIcons"] = factory(require("react"));
	else
		root["InstructureIcons"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 452);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineSVG = __webpack_require__(4);

var _InlineSVG2 = _interopRequireDefault(_InlineSVG);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGIcon = function (_Component) {
  _inherits(SVGIcon, _Component);

  function SVGIcon() {
    _classCallCheck(this, SVGIcon);

    return _possibleConstructorReturn(this, (SVGIcon.__proto__ || Object.getPrototypeOf(SVGIcon)).apply(this, arguments));
  }

  _createClass(SVGIcon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          style = _props.style,
          props = _objectWithoutProperties(_props, ['width', 'height', 'style']);

      return _react2.default.createElement(_InlineSVG2.default, _extends({}, props, {
        style: _extends({}, style, { fill: 'currentColor', width: width, height: height }),
        width: width,
        height: height
      }));
    }
  }]);

  return SVGIcon;
}(_react.Component);

SVGIcon.propTypes = _extends({}, _InlineSVG2.default.propTypes, {
  width: _react.PropTypes.string,
  height: _react.PropTypes.string
});
SVGIcon.defaultProps = {
  width: '1em',
  height: '1em'
};
exports.default = SVGIcon;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomFromSeed = __webpack_require__(11);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

module.exports = {
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var randomByte = __webpack_require__(10);

function encode(lookup, number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = encode;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _shortid = __webpack_require__(5);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineSVG = function (_React$Component) {
  _inherits(InlineSVG, _React$Component);

  function InlineSVG(props) {
    _classCallCheck(this, InlineSVG);

    var _this = _possibleConstructorReturn(this, (InlineSVG.__proto__ || Object.getPrototypeOf(InlineSVG)).call(this));

    _this.titleId = _shortid2.default.generate();
    _this.descId = _shortid2.default.generate();
    return _this;
  }

  _createClass(InlineSVG, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = this.props.title;

      return title ? _react2.default.createElement(
        'title',
        { id: this.titleId },
        title
      ) : null;
    }
  }, {
    key: 'renderDesc',
    value: function renderDesc(desc) {
      return desc ? _react2.default.createElement(
        'desc',
        { id: this.descId },
        desc
      ) : null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent(children, src) {
      if (src) {
        return _react2.default.createElement('g', { role: 'presentation', dangerouslySetInnerHTML: { __html: clean(src) } });
      } else {
        return _react2.default.createElement(
          'g',
          { role: 'presentation' },
          children
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          desc = _props.desc,
          focusable = _props.focusable,
          children = _props.children,
          src = _props.src,
          props = _objectWithoutProperties(_props, ['title', 'desc', 'focusable', 'children', 'src']);

      return _react2.default.createElement(
        'svg',
        _extends({}, parseAttributes(src), props, {
          'aria-hidden': title ? null : 'true',
          'aria-labelledby': this.labelledBy,
          role: this.role,
          focusable: focusable }),
        this.renderTitle(),
        this.renderDesc(desc),
        this.renderContent(children, src)
      );
    }
  }, {
    key: 'role',
    get: function get() {
      if (this.props.title) {
        return 'img';
      } else {
        return 'presentation';
      }
    }
  }, {
    key: 'labelledBy',
    get: function get() {
      var ids = [];

      if (this.props.title) {
        ids.push(this.titleId);
      }

      if (this.props.desc) {
        ids.push(this.descId);
      }

      return ids.length > 0 ? ids.join(' ') : null;
    }
  }]);

  return InlineSVG;
}(_react2.default.Component);

InlineSVG.propTypes = {
  children: _react.PropTypes.node,
  src: _react.PropTypes.string,
  title: _react.PropTypes.string,
  desc: _react.PropTypes.string,
  focusable: _react.PropTypes.bool
};
InlineSVG.defaultProps = {
  focusable: false
};
exports.default = InlineSVG;


function camelizeAttrs(svg) {
  /* eslint-disable max-len */
  var pattern = /(fill-rule|clip-path|fill-opacity|font-family|font-size|marker-end|marker-mid|marker-start|stop-color|stop-opacity|stroke-width|stroke-linecap|stroke-dasharray|stroke-opacity|text-anchor|xlink:href)=/g;
  /* eslint-enable max-len */

  return svg.replace(pattern, function (line, attr) {
    return toCamelCase(attr) + '=';
  });
}

// remove outer svg elements
function clean(src) {
  var pattern = /<svg[^>]*>((.|[\n\r])*)<\/svg>/;
  var matches = pattern.exec(src);

  return camelizeAttrs(matches[1]);
}

function parseAttributes(src) {
  var attributes = {};
  var SVGAttributesRegExp = /<svg\s+([^>]*)\s*>/;
  var namesAndValuesRegExp = /\s+([\w\-.:]+)(\s*=\s*(?:"([^"]*)"|'([^']*)'|([\w\-.:]+)))?/g;

  if (typeof src === 'string') {
    var attributesMatches = SVGAttributesRegExp.exec(src);
    var attributesString = attributesMatches ? attributesMatches[1] : '';

    var match = namesAndValuesRegExp.exec(attributesString);

    while (match != null) {
      attributes[match[1]] = match[2] || (match[3] ? match[3] : match[4] ? match[4] : match[5]) || match[1];
      match = namesAndValuesRegExp.exec(attributesString);
    }
  }

  return attributes;
}

function toCamelCase(string) {
  return string.replace(/([-:]\w)/g, function ($1) {
    return $1.toUpperCase().replace('-', '').replace(':', '');
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(8);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var encode = __webpack_require__(3);
var alphabet = __webpack_require__(2);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1459707606518;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 6;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {

    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + encode(alphabet.lookup, version);
    str = str + encode(alphabet.lookup, clusterWorkerId);
    if (counter > 0) {
        str = str + encode(alphabet.lookup, counter);
    }
    str = str + encode(alphabet.lookup, seconds);

    return str;
}

module.exports = build;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(2);

/**
 * Decode the id to get the version and worker
 * Mainly for debugging and testing.
 * @param id - the shortid-generated id.
 */
function decode(id) {
    var characters = alphabet.shuffled();
    return {
        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
    };
}

module.exports = decode;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = __webpack_require__(2);
var encode = __webpack_require__(3);
var decode = __webpack_require__(7);
var build = __webpack_require__(6);
var isValid = __webpack_require__(9);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(12) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.decode = decode;
module.exports.isValid = isValid;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var alphabet = __webpack_require__(2);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var characters = alphabet.characters();
    var len = id.length;
    for(var i = 0; i < len;i++) {
        if (characters.indexOf(id[i]) === -1) {
            return false;
        }
    }
    return true;
}

module.exports = isShortId;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

function randomByte() {
    if (!crypto || !crypto.getRandomValues) {
        return Math.floor(Math.random() * 256) & 0x30;
    }
    var dest = new Uint8Array(1);
    crypto.getRandomValues(dest);
    return dest[0] & 0x30;
}

module.exports = randomByte;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 0;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconZoomOutSolid = exports.IconZoomInSolid = exports.IconZippedSolid = exports.IconXSolid = exports.IconWordpressSolid = exports.IconWindowsSolid = exports.IconWarningSolid = exports.IconVideoSolid = exports.IconUserSolid = exports.IconUserAddSolid = exports.IconUploadSolid = exports.IconUpdownSolid = exports.IconUnpublishSolid = exports.IconUnpublishedSolid = exports.IconUnmutedSolid = exports.IconUnlockSolid = exports.IconTwitterSolid = exports.IconTwitterBoxedSolid = exports.IconTroubleSolid = exports.IconTrashSolid = exports.IconToggleRightSolid = exports.IconToggleLeftSolid = exports.IconTimerSolid = exports.IconTextSolid = exports.IconTextRightSolid = exports.IconTextLeftSolid = exports.IconTextCenteredSolid = exports.IconTextareaSolid = exports.IconTargetSolid = exports.IconTagSolid = exports.IconTableSolid = exports.IconSyllabusSolid = exports.IconStudentViewSolid = exports.IconStrikethroughSolid = exports.IconStatsSolid = exports.IconStarSolid = undefined;
exports.IconStarLightSolid = exports.IconStandardsSolid = exports.IconSpeedGraderSolid = exports.IconSkypeSolid = exports.IconSisSyncedSolid = exports.IconSisNotSyncedSolid = exports.IconSisImportedSolid = exports.IconSettingsSolid = exports.IconSettings2Solid = exports.IconSearchSolid = exports.IconSearchAddressBookSolid = exports.IconRubricSolid = exports.IconRubricDarkSolid = exports.IconRssSolid = exports.IconRssAddSolid = exports.IconResetSolid = exports.IconReplySolid = exports.IconReplyAll2Solid = exports.IconReply2Solid = exports.IconRepliedSolid = exports.IconRemoveFromCollectionSolid = exports.IconRemoveBookmarkSolid = exports.IconRefreshSolid = exports.IconQuizStatsTimeSolid = exports.IconQuizStatsLowSolid = exports.IconQuizStatsHighSolid = exports.IconQuizStatsDeviationSolid = exports.IconQuizStatsAvgSolid = exports.IconQuizSolid = exports.IconQuestionSolid = exports.IconPublishSolid = exports.IconPrinterSolid = exports.IconPrerequisiteSolid = exports.IconPostToSisSolid = exports.IconPlusSolid = exports.IconPinterestSolid = exports.IconPinSolid = exports.IconPeerReviewSolid = exports.IconPeerGradedSolid = exports.IconPdfSolid = exports.IconPartialSolid = exports.IconPaperclipSolid = exports.IconPaintSolid = exports.IconOutdentSolid = exports.IconOutdent2Solid = exports.IconOutcomesSolid = exports.IconOffSolid = exports.IconNotGradedSolid = exports.IconNoteLightSolid = exports.IconNoteDarkSolid = exports.IconNextUnreadSolid = exports.IconMutedSolid = exports.IconMsWordSolid = exports.IconMsPptSolid = exports.IconMsExcelSolid = exports.IconMoveUpTopSolid = exports.IconMoveUpSolid = exports.IconMoveRightSolid = exports.IconMoveLeftSolid = exports.IconMoveDownSolid = exports.IconMoveDownBottomSolid = exports.IconMoreSolid = exports.IconModuleSolid = exports.IconMinimizeSolid = exports.IconMiniArrowUpSolid = exports.IconMiniArrowRightSolid = exports.IconMiniArrowLeftSolid = exports.IconMiniArrowDownSolid = exports.IconMessageSolid = exports.IconMediaSolid = exports.IconMatureSolid = exports.IconMatureLightSolid = exports.IconMaterialsRequiredSolid = exports.IconMaterialsRequiredLightSolid = exports.IconMasteryPathSolid = exports.IconMasqueradeSolid = exports.IconMarkerSolid = exports.IconMarkAsReadSolid = exports.IconLtiSolid = exports.IconLockSolid = exports.IconLinkSolid = exports.IconLinkedinSolid = exports.IconLikeSolid = exports.IconKeyboardShortcutsSolid = exports.IconInvitationSolid = exports.IconIntegrationsSolid = exports.IconInstructureSolid = exports.IconInfoSolid = exports.IconIndentSolid = exports.IconIndent2Solid = exports.IconImportSolid = exports.IconImportContentSolid = exports.IconImageSolid = exports.IconHourGlassSolid = exports.IconHomeSolid = exports.IconHighlighterSolid = exports.IconHeartSolid = exports.IconHamburgerSolid = exports.IconGroupSolid = exports.IconGroupNewSolid = undefined;
exports.IconGroupDarkNewSolid = exports.IconGradebookSolid = exports.IconGradebookImportSolid = exports.IconGradebookExportSolid = exports.IconGithubSolid = exports.IconForwardSolid = exports.IconFolderSolid = exports.IconFolderLockedSolid = exports.IconFlagSolid = exports.IconFilmstripSolid = exports.IconFilesPublicDomainSolid = exports.IconFilesObtainedPermissionSolid = exports.IconFilesFairUseSolid = exports.IconFilesCreativeCommonsSolid = exports.IconFilesCopyrightSolid = exports.IconFacebookSolid = exports.IconFacebookBoxedSolid = exports.IconEyeSolid = exports.IconExternalLinkSolid = exports.IconExportSolid = exports.IconExportContentSolid = exports.IconExpandSolid = exports.IconExpandItemsSolid = exports.IconEquellaSolid = exports.IconEquationSolid = exports.IconEndSolid = exports.IconEmptySolid = exports.IconEmailSolid = exports.IconEducatorsSolid = exports.IconEditSolid = exports.IconDropDownSolid = exports.IconDragHandleSolid = exports.IconDownloadSolid = exports.IconDocumentSolid = exports.IconDiscussionXSolid = exports.IconDiscussionSolid = exports.IconDiscussionSearchSolid = exports.IconDiscussionReplySolid = exports.IconDiscussionReplyDarkSolid = exports.IconDiscussionReply2Solid = exports.IconDiscussionNewSolid = exports.IconDiscussionCheckSolid = exports.IconCoursesSolid = exports.IconCopySolid = exports.IconCopyCourseSolid = exports.IconComposeSolid = exports.IconCompleteSolid = exports.IconCommonsSolid = exports.IconCollectionSolid = exports.IconCollectionSaveSolid = exports.IconCollapseSolid = exports.IconCloudLockSolid = exports.IconClockSolid = exports.IconCheckSolid = exports.IconCheckPlusSolid = exports.IconCheckMarkSolid = exports.IconCheckDarkSolid = exports.IconChatSolid = exports.IconCalendarReservedSolid = exports.IconCalendarMonthSolid = exports.IconCalendarDaysSolid = exports.IconCalendarDaySolid = exports.IconCalendarAddSolid = exports.IconBoxSolid = exports.IconBookmarkSolid = exports.IconAudioSolid = exports.IconAssignmentSolid = exports.IconArrowUpSolid = exports.IconArrowRightSolid = exports.IconArrowOpenUpSolid = exports.IconArrowOpenRightSolid = exports.IconArrowOpenLeftSolid = exports.IconArrowOpenDownSolid = exports.IconArrowLeftSolid = exports.IconArrowDownSolid = exports.IconAppleSolid = exports.IconAnnouncementSolid = exports.IconAndroidSolid = exports.IconAnalyticsSolid = exports.IconAlertSolid = exports.IconAddSolid = exports.IconAddressBookSolid = exports.IconZoomOutLine = exports.IconZoomInLine = exports.IconZippedLine = exports.IconXLine = exports.IconWordpressLine = exports.IconWindowsLine = exports.IconWarningLine = exports.IconVideoLine = exports.IconUserLine = exports.IconUserAddLine = exports.IconUploadLine = exports.IconUpdownLine = exports.IconUnpublishLine = exports.IconUnpublishedLine = exports.IconUnmutedLine = exports.IconUnlockLine = exports.IconTwitterLine = exports.IconTwitterBoxedLine = undefined;
exports.IconTroubleLine = exports.IconTrashLine = exports.IconToggleRightLine = exports.IconToggleLeftLine = exports.IconTimerLine = exports.IconTextRightLine = exports.IconTextLine = exports.IconTextLeftLine = exports.IconTextCenteredLine = exports.IconTextareaLine = exports.IconTargetLine = exports.IconTagLine = exports.IconTableLine = exports.IconSyllabusLine = exports.IconStudentViewLine = exports.IconStrikethroughLine = exports.IconStatsLine = exports.IconStarLine = exports.IconStarLightLine = exports.IconStandardsLine = exports.IconSpeedGraderLine = exports.IconSkypeLine = exports.IconSisSyncedLine = exports.IconSisNotSyncedLine = exports.IconSisImportedLine = exports.IconSettingsLine = exports.IconSettings2Line = exports.IconSearchLine = exports.IconSearchAddressBookLine = exports.IconRubricLine = exports.IconRubricDarkLine = exports.IconRssLine = exports.IconRssAddLine = exports.IconResetLine = exports.IconReplyLine = exports.IconReplyAll2Line = exports.IconReply2Line = exports.IconRepliedLine = exports.IconRemoveFromCollectionLine = exports.IconRemoveBookmarkLine = exports.IconRefreshLine = exports.IconQuizStatsTimeLine = exports.IconQuizStatsLowLine = exports.IconQuizStatsHighLine = exports.IconQuizStatsDeviationLine = exports.IconQuizStatsAvgLine = exports.IconQuizLine = exports.IconQuestionLine = exports.IconPublishLine = exports.IconPrinterLine = exports.IconPrerequisiteLine = exports.IconPostToSisLine = exports.IconPlusLine = exports.IconPinterestLine = exports.IconPinLine = exports.IconPeerReviewLine = exports.IconPeerGradedLine = exports.IconPdfLine = exports.IconPartialLine = exports.IconPaperclipLine = exports.IconPaintLine = exports.IconOutdentLine = exports.IconOutdent2Line = exports.IconOutcomesLine = exports.IconOffLine = exports.IconNotGradedLine = exports.IconNoteLightLine = exports.IconNoteDarkLine = exports.IconNextUnreadLine = exports.IconMutedLine = exports.IconMsWordLine = exports.IconMsPptLine = exports.IconMsExcelLine = exports.IconMoveUpTopLine = exports.IconMoveUpLine = exports.IconMoveRightLine = exports.IconMoveLeftLine = exports.IconMoveDownLine = exports.IconMoveDownBottomLine = exports.IconMoreLine = exports.IconModuleLine = exports.IconMinimizeLine = exports.IconMiniArrowUpLine = exports.IconMiniArrowRightLine = exports.IconMiniArrowLeftLine = exports.IconMiniArrowDownLine = exports.IconMessageLine = exports.IconMediaLine = exports.IconMatureLine = exports.IconMatureLightLine = exports.IconMaterialsRequiredLine = exports.IconMaterialsRequiredLightLine = exports.IconMasteryPathLine = exports.IconMasqueradeLine = exports.IconMarkerLine = exports.IconMarkAsReadLine = exports.IconLtiLine = exports.IconLockLine = exports.IconLinkLine = exports.IconLinkedinLine = undefined;
exports.IconLikeLine = exports.IconKeyboardShortcutsLine = exports.IconInvitationLine = exports.IconIntegrationsLine = exports.IconInstructureLine = exports.IconInfoLine = exports.IconIndentLine = exports.IconIndent2Line = exports.IconImportLine = exports.IconImportContentLine = exports.IconImageLine = exports.IconHourGlassLine = exports.IconHomeLine = exports.IconHighlighterLine = exports.IconHeartLine = exports.IconHamburgerLine = exports.IconGroupNewLine = exports.IconGroupLine = exports.IconGroupDarkNewLine = exports.IconGradebookLine = exports.IconGradebookImportLine = exports.IconGradebookExportLine = exports.IconGithubLine = exports.IconForwardLine = exports.IconFolderLockedLine = exports.IconFolderLine = exports.IconFlagLine = exports.IconFilmstripLine = exports.IconFilesPublicDomainLine = exports.IconFilesObtainedPermissionLine = exports.IconFilesFairUseLine = exports.IconFilesCreativeCommonsLine = exports.IconFilesCopyrightLine = exports.IconFacebookLine = exports.IconFacebookBoxedLine = exports.IconEyeLine = exports.IconExternalLinkLine = exports.IconExportLine = exports.IconExportContentLine = exports.IconExpandLine = exports.IconExpandItemsLine = exports.IconEquellaLine = exports.IconEquationLine = exports.IconEndLine = exports.IconEmptyLine = exports.IconEmailLine = exports.IconEducatorsLine = exports.IconEditLine = exports.IconDropDownLine = exports.IconDragHandleLine = exports.IconDownloadLine = exports.IconDocumentLine = exports.IconDiscussionXLine = exports.IconDiscussionSearchLine = exports.IconDiscussionReplyLine = exports.IconDiscussionReplyDarkLine = exports.IconDiscussionReply2Line = exports.IconDiscussionNewLine = exports.IconDiscussionLine = exports.IconDiscussionCheckLine = exports.IconCoursesLine = exports.IconCopyLine = exports.IconCopyCourseLine = exports.IconComposeLine = exports.IconCompleteLine = exports.IconCommonsLine = exports.IconCollectionSaveLine = exports.IconCollectionLine = exports.IconCollapseLine = exports.IconCloudLockLine = exports.IconClockLine = exports.IconCheckPlusLine = exports.IconCheckMarkLine = exports.IconCheckLine = exports.IconCheckDarkLine = exports.IconChatLine = exports.IconCalendarReservedLine = exports.IconCalendarMonthLine = exports.IconCalendarDaysLine = exports.IconCalendarDayLine = exports.IconCalendarAddLine = exports.IconBoxLine = exports.IconBookmarkLine = exports.IconAudioLine = exports.IconAssignmentLine = exports.IconArrowUpLine = exports.IconArrowRightLine = exports.IconArrowOpenUpLine = exports.IconArrowOpenRightLine = exports.IconArrowOpenLeftLine = exports.IconArrowOpenDownLine = exports.IconArrowLeftLine = exports.IconArrowDownLine = exports.IconAppleLine = exports.IconAnnouncementLine = exports.IconAndroidLine = exports.IconAnalyticsLine = exports.IconAlertLine = exports.IconAddressBookLine = exports.IconAddLine = undefined;

var _IconAddLine2 = __webpack_require__(14);

var _IconAddLine3 = _interopRequireDefault(_IconAddLine2);

var _IconAddressBookLine2 = __webpack_require__(15);

var _IconAddressBookLine3 = _interopRequireDefault(_IconAddressBookLine2);

var _IconAlertLine2 = __webpack_require__(16);

var _IconAlertLine3 = _interopRequireDefault(_IconAlertLine2);

var _IconAnalyticsLine2 = __webpack_require__(17);

var _IconAnalyticsLine3 = _interopRequireDefault(_IconAnalyticsLine2);

var _IconAndroidLine2 = __webpack_require__(18);

var _IconAndroidLine3 = _interopRequireDefault(_IconAndroidLine2);

var _IconAnnouncementLine2 = __webpack_require__(19);

var _IconAnnouncementLine3 = _interopRequireDefault(_IconAnnouncementLine2);

var _IconAppleLine2 = __webpack_require__(20);

var _IconAppleLine3 = _interopRequireDefault(_IconAppleLine2);

var _IconArrowDownLine2 = __webpack_require__(21);

var _IconArrowDownLine3 = _interopRequireDefault(_IconArrowDownLine2);

var _IconArrowLeftLine2 = __webpack_require__(22);

var _IconArrowLeftLine3 = _interopRequireDefault(_IconArrowLeftLine2);

var _IconArrowOpenDownLine2 = __webpack_require__(23);

var _IconArrowOpenDownLine3 = _interopRequireDefault(_IconArrowOpenDownLine2);

var _IconArrowOpenLeftLine2 = __webpack_require__(24);

var _IconArrowOpenLeftLine3 = _interopRequireDefault(_IconArrowOpenLeftLine2);

var _IconArrowOpenRightLine2 = __webpack_require__(25);

var _IconArrowOpenRightLine3 = _interopRequireDefault(_IconArrowOpenRightLine2);

var _IconArrowOpenUpLine2 = __webpack_require__(26);

var _IconArrowOpenUpLine3 = _interopRequireDefault(_IconArrowOpenUpLine2);

var _IconArrowRightLine2 = __webpack_require__(27);

var _IconArrowRightLine3 = _interopRequireDefault(_IconArrowRightLine2);

var _IconArrowUpLine2 = __webpack_require__(28);

var _IconArrowUpLine3 = _interopRequireDefault(_IconArrowUpLine2);

var _IconAssignmentLine2 = __webpack_require__(29);

var _IconAssignmentLine3 = _interopRequireDefault(_IconAssignmentLine2);

var _IconAudioLine2 = __webpack_require__(30);

var _IconAudioLine3 = _interopRequireDefault(_IconAudioLine2);

var _IconBookmarkLine2 = __webpack_require__(31);

var _IconBookmarkLine3 = _interopRequireDefault(_IconBookmarkLine2);

var _IconBoxLine2 = __webpack_require__(32);

var _IconBoxLine3 = _interopRequireDefault(_IconBoxLine2);

var _IconCalendarAddLine2 = __webpack_require__(33);

var _IconCalendarAddLine3 = _interopRequireDefault(_IconCalendarAddLine2);

var _IconCalendarDayLine2 = __webpack_require__(34);

var _IconCalendarDayLine3 = _interopRequireDefault(_IconCalendarDayLine2);

var _IconCalendarDaysLine2 = __webpack_require__(35);

var _IconCalendarDaysLine3 = _interopRequireDefault(_IconCalendarDaysLine2);

var _IconCalendarMonthLine2 = __webpack_require__(36);

var _IconCalendarMonthLine3 = _interopRequireDefault(_IconCalendarMonthLine2);

var _IconCalendarReservedLine2 = __webpack_require__(37);

var _IconCalendarReservedLine3 = _interopRequireDefault(_IconCalendarReservedLine2);

var _IconChatLine2 = __webpack_require__(38);

var _IconChatLine3 = _interopRequireDefault(_IconChatLine2);

var _IconCheckDarkLine2 = __webpack_require__(39);

var _IconCheckDarkLine3 = _interopRequireDefault(_IconCheckDarkLine2);

var _IconCheckLine2 = __webpack_require__(40);

var _IconCheckLine3 = _interopRequireDefault(_IconCheckLine2);

var _IconCheckMarkLine2 = __webpack_require__(41);

var _IconCheckMarkLine3 = _interopRequireDefault(_IconCheckMarkLine2);

var _IconCheckPlusLine2 = __webpack_require__(42);

var _IconCheckPlusLine3 = _interopRequireDefault(_IconCheckPlusLine2);

var _IconClockLine2 = __webpack_require__(43);

var _IconClockLine3 = _interopRequireDefault(_IconClockLine2);

var _IconCloudLockLine2 = __webpack_require__(44);

var _IconCloudLockLine3 = _interopRequireDefault(_IconCloudLockLine2);

var _IconCollapseLine2 = __webpack_require__(45);

var _IconCollapseLine3 = _interopRequireDefault(_IconCollapseLine2);

var _IconCollectionLine2 = __webpack_require__(46);

var _IconCollectionLine3 = _interopRequireDefault(_IconCollectionLine2);

var _IconCollectionSaveLine2 = __webpack_require__(47);

var _IconCollectionSaveLine3 = _interopRequireDefault(_IconCollectionSaveLine2);

var _IconCommonsLine2 = __webpack_require__(48);

var _IconCommonsLine3 = _interopRequireDefault(_IconCommonsLine2);

var _IconCompleteLine2 = __webpack_require__(49);

var _IconCompleteLine3 = _interopRequireDefault(_IconCompleteLine2);

var _IconComposeLine2 = __webpack_require__(50);

var _IconComposeLine3 = _interopRequireDefault(_IconComposeLine2);

var _IconCopyCourseLine2 = __webpack_require__(51);

var _IconCopyCourseLine3 = _interopRequireDefault(_IconCopyCourseLine2);

var _IconCopyLine2 = __webpack_require__(52);

var _IconCopyLine3 = _interopRequireDefault(_IconCopyLine2);

var _IconCoursesLine2 = __webpack_require__(53);

var _IconCoursesLine3 = _interopRequireDefault(_IconCoursesLine2);

var _IconDiscussionCheckLine2 = __webpack_require__(54);

var _IconDiscussionCheckLine3 = _interopRequireDefault(_IconDiscussionCheckLine2);

var _IconDiscussionLine2 = __webpack_require__(55);

var _IconDiscussionLine3 = _interopRequireDefault(_IconDiscussionLine2);

var _IconDiscussionNewLine2 = __webpack_require__(56);

var _IconDiscussionNewLine3 = _interopRequireDefault(_IconDiscussionNewLine2);

var _IconDiscussionReply2Line2 = __webpack_require__(57);

var _IconDiscussionReply2Line3 = _interopRequireDefault(_IconDiscussionReply2Line2);

var _IconDiscussionReplyDarkLine2 = __webpack_require__(58);

var _IconDiscussionReplyDarkLine3 = _interopRequireDefault(_IconDiscussionReplyDarkLine2);

var _IconDiscussionReplyLine2 = __webpack_require__(59);

var _IconDiscussionReplyLine3 = _interopRequireDefault(_IconDiscussionReplyLine2);

var _IconDiscussionSearchLine2 = __webpack_require__(60);

var _IconDiscussionSearchLine3 = _interopRequireDefault(_IconDiscussionSearchLine2);

var _IconDiscussionXLine2 = __webpack_require__(61);

var _IconDiscussionXLine3 = _interopRequireDefault(_IconDiscussionXLine2);

var _IconDocumentLine2 = __webpack_require__(62);

var _IconDocumentLine3 = _interopRequireDefault(_IconDocumentLine2);

var _IconDownloadLine2 = __webpack_require__(63);

var _IconDownloadLine3 = _interopRequireDefault(_IconDownloadLine2);

var _IconDragHandleLine2 = __webpack_require__(64);

var _IconDragHandleLine3 = _interopRequireDefault(_IconDragHandleLine2);

var _IconDropDownLine2 = __webpack_require__(65);

var _IconDropDownLine3 = _interopRequireDefault(_IconDropDownLine2);

var _IconEditLine2 = __webpack_require__(66);

var _IconEditLine3 = _interopRequireDefault(_IconEditLine2);

var _IconEducatorsLine2 = __webpack_require__(67);

var _IconEducatorsLine3 = _interopRequireDefault(_IconEducatorsLine2);

var _IconEmailLine2 = __webpack_require__(68);

var _IconEmailLine3 = _interopRequireDefault(_IconEmailLine2);

var _IconEmptyLine2 = __webpack_require__(69);

var _IconEmptyLine3 = _interopRequireDefault(_IconEmptyLine2);

var _IconEndLine2 = __webpack_require__(70);

var _IconEndLine3 = _interopRequireDefault(_IconEndLine2);

var _IconEquationLine2 = __webpack_require__(71);

var _IconEquationLine3 = _interopRequireDefault(_IconEquationLine2);

var _IconEquellaLine2 = __webpack_require__(72);

var _IconEquellaLine3 = _interopRequireDefault(_IconEquellaLine2);

var _IconExpandItemsLine2 = __webpack_require__(73);

var _IconExpandItemsLine3 = _interopRequireDefault(_IconExpandItemsLine2);

var _IconExpandLine2 = __webpack_require__(74);

var _IconExpandLine3 = _interopRequireDefault(_IconExpandLine2);

var _IconExportContentLine2 = __webpack_require__(75);

var _IconExportContentLine3 = _interopRequireDefault(_IconExportContentLine2);

var _IconExportLine2 = __webpack_require__(76);

var _IconExportLine3 = _interopRequireDefault(_IconExportLine2);

var _IconExternalLinkLine2 = __webpack_require__(77);

var _IconExternalLinkLine3 = _interopRequireDefault(_IconExternalLinkLine2);

var _IconEyeLine2 = __webpack_require__(78);

var _IconEyeLine3 = _interopRequireDefault(_IconEyeLine2);

var _IconFacebookBoxedLine2 = __webpack_require__(79);

var _IconFacebookBoxedLine3 = _interopRequireDefault(_IconFacebookBoxedLine2);

var _IconFacebookLine2 = __webpack_require__(80);

var _IconFacebookLine3 = _interopRequireDefault(_IconFacebookLine2);

var _IconFilesCopyrightLine2 = __webpack_require__(81);

var _IconFilesCopyrightLine3 = _interopRequireDefault(_IconFilesCopyrightLine2);

var _IconFilesCreativeCommonsLine2 = __webpack_require__(82);

var _IconFilesCreativeCommonsLine3 = _interopRequireDefault(_IconFilesCreativeCommonsLine2);

var _IconFilesFairUseLine2 = __webpack_require__(83);

var _IconFilesFairUseLine3 = _interopRequireDefault(_IconFilesFairUseLine2);

var _IconFilesObtainedPermissionLine2 = __webpack_require__(84);

var _IconFilesObtainedPermissionLine3 = _interopRequireDefault(_IconFilesObtainedPermissionLine2);

var _IconFilesPublicDomainLine2 = __webpack_require__(85);

var _IconFilesPublicDomainLine3 = _interopRequireDefault(_IconFilesPublicDomainLine2);

var _IconFilmstripLine2 = __webpack_require__(86);

var _IconFilmstripLine3 = _interopRequireDefault(_IconFilmstripLine2);

var _IconFlagLine2 = __webpack_require__(87);

var _IconFlagLine3 = _interopRequireDefault(_IconFlagLine2);

var _IconFolderLine2 = __webpack_require__(88);

var _IconFolderLine3 = _interopRequireDefault(_IconFolderLine2);

var _IconFolderLockedLine2 = __webpack_require__(89);

var _IconFolderLockedLine3 = _interopRequireDefault(_IconFolderLockedLine2);

var _IconForwardLine2 = __webpack_require__(90);

var _IconForwardLine3 = _interopRequireDefault(_IconForwardLine2);

var _IconGithubLine2 = __webpack_require__(91);

var _IconGithubLine3 = _interopRequireDefault(_IconGithubLine2);

var _IconGradebookExportLine2 = __webpack_require__(92);

var _IconGradebookExportLine3 = _interopRequireDefault(_IconGradebookExportLine2);

var _IconGradebookImportLine2 = __webpack_require__(93);

var _IconGradebookImportLine3 = _interopRequireDefault(_IconGradebookImportLine2);

var _IconGradebookLine2 = __webpack_require__(94);

var _IconGradebookLine3 = _interopRequireDefault(_IconGradebookLine2);

var _IconGroupDarkNewLine2 = __webpack_require__(95);

var _IconGroupDarkNewLine3 = _interopRequireDefault(_IconGroupDarkNewLine2);

var _IconGroupLine2 = __webpack_require__(96);

var _IconGroupLine3 = _interopRequireDefault(_IconGroupLine2);

var _IconGroupNewLine2 = __webpack_require__(97);

var _IconGroupNewLine3 = _interopRequireDefault(_IconGroupNewLine2);

var _IconHamburgerLine2 = __webpack_require__(98);

var _IconHamburgerLine3 = _interopRequireDefault(_IconHamburgerLine2);

var _IconHeartLine2 = __webpack_require__(99);

var _IconHeartLine3 = _interopRequireDefault(_IconHeartLine2);

var _IconHighlighterLine2 = __webpack_require__(100);

var _IconHighlighterLine3 = _interopRequireDefault(_IconHighlighterLine2);

var _IconHomeLine2 = __webpack_require__(101);

var _IconHomeLine3 = _interopRequireDefault(_IconHomeLine2);

var _IconHourGlassLine2 = __webpack_require__(102);

var _IconHourGlassLine3 = _interopRequireDefault(_IconHourGlassLine2);

var _IconImageLine2 = __webpack_require__(103);

var _IconImageLine3 = _interopRequireDefault(_IconImageLine2);

var _IconImportContentLine2 = __webpack_require__(104);

var _IconImportContentLine3 = _interopRequireDefault(_IconImportContentLine2);

var _IconImportLine2 = __webpack_require__(105);

var _IconImportLine3 = _interopRequireDefault(_IconImportLine2);

var _IconIndent2Line2 = __webpack_require__(106);

var _IconIndent2Line3 = _interopRequireDefault(_IconIndent2Line2);

var _IconIndentLine2 = __webpack_require__(107);

var _IconIndentLine3 = _interopRequireDefault(_IconIndentLine2);

var _IconInfoLine2 = __webpack_require__(108);

var _IconInfoLine3 = _interopRequireDefault(_IconInfoLine2);

var _IconInstructureLine2 = __webpack_require__(109);

var _IconInstructureLine3 = _interopRequireDefault(_IconInstructureLine2);

var _IconIntegrationsLine2 = __webpack_require__(110);

var _IconIntegrationsLine3 = _interopRequireDefault(_IconIntegrationsLine2);

var _IconInvitationLine2 = __webpack_require__(111);

var _IconInvitationLine3 = _interopRequireDefault(_IconInvitationLine2);

var _IconKeyboardShortcutsLine2 = __webpack_require__(112);

var _IconKeyboardShortcutsLine3 = _interopRequireDefault(_IconKeyboardShortcutsLine2);

var _IconLikeLine2 = __webpack_require__(113);

var _IconLikeLine3 = _interopRequireDefault(_IconLikeLine2);

var _IconLinkedinLine2 = __webpack_require__(115);

var _IconLinkedinLine3 = _interopRequireDefault(_IconLinkedinLine2);

var _IconLinkLine2 = __webpack_require__(114);

var _IconLinkLine3 = _interopRequireDefault(_IconLinkLine2);

var _IconLockLine2 = __webpack_require__(116);

var _IconLockLine3 = _interopRequireDefault(_IconLockLine2);

var _IconLtiLine2 = __webpack_require__(117);

var _IconLtiLine3 = _interopRequireDefault(_IconLtiLine2);

var _IconMarkAsReadLine2 = __webpack_require__(118);

var _IconMarkAsReadLine3 = _interopRequireDefault(_IconMarkAsReadLine2);

var _IconMarkerLine2 = __webpack_require__(119);

var _IconMarkerLine3 = _interopRequireDefault(_IconMarkerLine2);

var _IconMasqueradeLine2 = __webpack_require__(120);

var _IconMasqueradeLine3 = _interopRequireDefault(_IconMasqueradeLine2);

var _IconMasteryPathLine2 = __webpack_require__(121);

var _IconMasteryPathLine3 = _interopRequireDefault(_IconMasteryPathLine2);

var _IconMaterialsRequiredLightLine2 = __webpack_require__(122);

var _IconMaterialsRequiredLightLine3 = _interopRequireDefault(_IconMaterialsRequiredLightLine2);

var _IconMaterialsRequiredLine2 = __webpack_require__(123);

var _IconMaterialsRequiredLine3 = _interopRequireDefault(_IconMaterialsRequiredLine2);

var _IconMatureLightLine2 = __webpack_require__(124);

var _IconMatureLightLine3 = _interopRequireDefault(_IconMatureLightLine2);

var _IconMatureLine2 = __webpack_require__(125);

var _IconMatureLine3 = _interopRequireDefault(_IconMatureLine2);

var _IconMediaLine2 = __webpack_require__(126);

var _IconMediaLine3 = _interopRequireDefault(_IconMediaLine2);

var _IconMessageLine2 = __webpack_require__(127);

var _IconMessageLine3 = _interopRequireDefault(_IconMessageLine2);

var _IconMiniArrowDownLine2 = __webpack_require__(128);

var _IconMiniArrowDownLine3 = _interopRequireDefault(_IconMiniArrowDownLine2);

var _IconMiniArrowLeftLine2 = __webpack_require__(129);

var _IconMiniArrowLeftLine3 = _interopRequireDefault(_IconMiniArrowLeftLine2);

var _IconMiniArrowRightLine2 = __webpack_require__(130);

var _IconMiniArrowRightLine3 = _interopRequireDefault(_IconMiniArrowRightLine2);

var _IconMiniArrowUpLine2 = __webpack_require__(131);

var _IconMiniArrowUpLine3 = _interopRequireDefault(_IconMiniArrowUpLine2);

var _IconMinimizeLine2 = __webpack_require__(132);

var _IconMinimizeLine3 = _interopRequireDefault(_IconMinimizeLine2);

var _IconModuleLine2 = __webpack_require__(133);

var _IconModuleLine3 = _interopRequireDefault(_IconModuleLine2);

var _IconMoreLine2 = __webpack_require__(134);

var _IconMoreLine3 = _interopRequireDefault(_IconMoreLine2);

var _IconMoveDownBottomLine2 = __webpack_require__(135);

var _IconMoveDownBottomLine3 = _interopRequireDefault(_IconMoveDownBottomLine2);

var _IconMoveDownLine2 = __webpack_require__(136);

var _IconMoveDownLine3 = _interopRequireDefault(_IconMoveDownLine2);

var _IconMoveLeftLine2 = __webpack_require__(137);

var _IconMoveLeftLine3 = _interopRequireDefault(_IconMoveLeftLine2);

var _IconMoveRightLine2 = __webpack_require__(138);

var _IconMoveRightLine3 = _interopRequireDefault(_IconMoveRightLine2);

var _IconMoveUpLine2 = __webpack_require__(139);

var _IconMoveUpLine3 = _interopRequireDefault(_IconMoveUpLine2);

var _IconMoveUpTopLine2 = __webpack_require__(140);

var _IconMoveUpTopLine3 = _interopRequireDefault(_IconMoveUpTopLine2);

var _IconMsExcelLine2 = __webpack_require__(141);

var _IconMsExcelLine3 = _interopRequireDefault(_IconMsExcelLine2);

var _IconMsPptLine2 = __webpack_require__(142);

var _IconMsPptLine3 = _interopRequireDefault(_IconMsPptLine2);

var _IconMsWordLine2 = __webpack_require__(143);

var _IconMsWordLine3 = _interopRequireDefault(_IconMsWordLine2);

var _IconMutedLine2 = __webpack_require__(144);

var _IconMutedLine3 = _interopRequireDefault(_IconMutedLine2);

var _IconNextUnreadLine2 = __webpack_require__(145);

var _IconNextUnreadLine3 = _interopRequireDefault(_IconNextUnreadLine2);

var _IconNoteDarkLine2 = __webpack_require__(147);

var _IconNoteDarkLine3 = _interopRequireDefault(_IconNoteDarkLine2);

var _IconNoteLightLine2 = __webpack_require__(148);

var _IconNoteLightLine3 = _interopRequireDefault(_IconNoteLightLine2);

var _IconNotGradedLine2 = __webpack_require__(146);

var _IconNotGradedLine3 = _interopRequireDefault(_IconNotGradedLine2);

var _IconOffLine2 = __webpack_require__(149);

var _IconOffLine3 = _interopRequireDefault(_IconOffLine2);

var _IconOutcomesLine2 = __webpack_require__(150);

var _IconOutcomesLine3 = _interopRequireDefault(_IconOutcomesLine2);

var _IconOutdent2Line2 = __webpack_require__(151);

var _IconOutdent2Line3 = _interopRequireDefault(_IconOutdent2Line2);

var _IconOutdentLine2 = __webpack_require__(152);

var _IconOutdentLine3 = _interopRequireDefault(_IconOutdentLine2);

var _IconPaintLine2 = __webpack_require__(153);

var _IconPaintLine3 = _interopRequireDefault(_IconPaintLine2);

var _IconPaperclipLine2 = __webpack_require__(154);

var _IconPaperclipLine3 = _interopRequireDefault(_IconPaperclipLine2);

var _IconPartialLine2 = __webpack_require__(155);

var _IconPartialLine3 = _interopRequireDefault(_IconPartialLine2);

var _IconPdfLine2 = __webpack_require__(156);

var _IconPdfLine3 = _interopRequireDefault(_IconPdfLine2);

var _IconPeerGradedLine2 = __webpack_require__(157);

var _IconPeerGradedLine3 = _interopRequireDefault(_IconPeerGradedLine2);

var _IconPeerReviewLine2 = __webpack_require__(158);

var _IconPeerReviewLine3 = _interopRequireDefault(_IconPeerReviewLine2);

var _IconPinLine2 = __webpack_require__(159);

var _IconPinLine3 = _interopRequireDefault(_IconPinLine2);

var _IconPinterestLine2 = __webpack_require__(160);

var _IconPinterestLine3 = _interopRequireDefault(_IconPinterestLine2);

var _IconPlusLine2 = __webpack_require__(161);

var _IconPlusLine3 = _interopRequireDefault(_IconPlusLine2);

var _IconPostToSisLine2 = __webpack_require__(162);

var _IconPostToSisLine3 = _interopRequireDefault(_IconPostToSisLine2);

var _IconPrerequisiteLine2 = __webpack_require__(163);

var _IconPrerequisiteLine3 = _interopRequireDefault(_IconPrerequisiteLine2);

var _IconPrinterLine2 = __webpack_require__(164);

var _IconPrinterLine3 = _interopRequireDefault(_IconPrinterLine2);

var _IconPublishLine2 = __webpack_require__(165);

var _IconPublishLine3 = _interopRequireDefault(_IconPublishLine2);

var _IconQuestionLine2 = __webpack_require__(166);

var _IconQuestionLine3 = _interopRequireDefault(_IconQuestionLine2);

var _IconQuizLine2 = __webpack_require__(167);

var _IconQuizLine3 = _interopRequireDefault(_IconQuizLine2);

var _IconQuizStatsAvgLine2 = __webpack_require__(168);

var _IconQuizStatsAvgLine3 = _interopRequireDefault(_IconQuizStatsAvgLine2);

var _IconQuizStatsDeviationLine2 = __webpack_require__(169);

var _IconQuizStatsDeviationLine3 = _interopRequireDefault(_IconQuizStatsDeviationLine2);

var _IconQuizStatsHighLine2 = __webpack_require__(170);

var _IconQuizStatsHighLine3 = _interopRequireDefault(_IconQuizStatsHighLine2);

var _IconQuizStatsLowLine2 = __webpack_require__(171);

var _IconQuizStatsLowLine3 = _interopRequireDefault(_IconQuizStatsLowLine2);

var _IconQuizStatsTimeLine2 = __webpack_require__(172);

var _IconQuizStatsTimeLine3 = _interopRequireDefault(_IconQuizStatsTimeLine2);

var _IconRefreshLine2 = __webpack_require__(173);

var _IconRefreshLine3 = _interopRequireDefault(_IconRefreshLine2);

var _IconRemoveBookmarkLine2 = __webpack_require__(174);

var _IconRemoveBookmarkLine3 = _interopRequireDefault(_IconRemoveBookmarkLine2);

var _IconRemoveFromCollectionLine2 = __webpack_require__(175);

var _IconRemoveFromCollectionLine3 = _interopRequireDefault(_IconRemoveFromCollectionLine2);

var _IconRepliedLine2 = __webpack_require__(176);

var _IconRepliedLine3 = _interopRequireDefault(_IconRepliedLine2);

var _IconReply2Line2 = __webpack_require__(177);

var _IconReply2Line3 = _interopRequireDefault(_IconReply2Line2);

var _IconReplyAll2Line2 = __webpack_require__(178);

var _IconReplyAll2Line3 = _interopRequireDefault(_IconReplyAll2Line2);

var _IconReplyLine2 = __webpack_require__(179);

var _IconReplyLine3 = _interopRequireDefault(_IconReplyLine2);

var _IconResetLine2 = __webpack_require__(180);

var _IconResetLine3 = _interopRequireDefault(_IconResetLine2);

var _IconRssAddLine2 = __webpack_require__(181);

var _IconRssAddLine3 = _interopRequireDefault(_IconRssAddLine2);

var _IconRssLine2 = __webpack_require__(182);

var _IconRssLine3 = _interopRequireDefault(_IconRssLine2);

var _IconRubricDarkLine2 = __webpack_require__(183);

var _IconRubricDarkLine3 = _interopRequireDefault(_IconRubricDarkLine2);

var _IconRubricLine2 = __webpack_require__(184);

var _IconRubricLine3 = _interopRequireDefault(_IconRubricLine2);

var _IconSearchAddressBookLine2 = __webpack_require__(185);

var _IconSearchAddressBookLine3 = _interopRequireDefault(_IconSearchAddressBookLine2);

var _IconSearchLine2 = __webpack_require__(186);

var _IconSearchLine3 = _interopRequireDefault(_IconSearchLine2);

var _IconSettings2Line2 = __webpack_require__(187);

var _IconSettings2Line3 = _interopRequireDefault(_IconSettings2Line2);

var _IconSettingsLine2 = __webpack_require__(188);

var _IconSettingsLine3 = _interopRequireDefault(_IconSettingsLine2);

var _IconSisImportedLine2 = __webpack_require__(189);

var _IconSisImportedLine3 = _interopRequireDefault(_IconSisImportedLine2);

var _IconSisNotSyncedLine2 = __webpack_require__(190);

var _IconSisNotSyncedLine3 = _interopRequireDefault(_IconSisNotSyncedLine2);

var _IconSisSyncedLine2 = __webpack_require__(191);

var _IconSisSyncedLine3 = _interopRequireDefault(_IconSisSyncedLine2);

var _IconSkypeLine2 = __webpack_require__(192);

var _IconSkypeLine3 = _interopRequireDefault(_IconSkypeLine2);

var _IconSpeedGraderLine2 = __webpack_require__(193);

var _IconSpeedGraderLine3 = _interopRequireDefault(_IconSpeedGraderLine2);

var _IconStandardsLine2 = __webpack_require__(194);

var _IconStandardsLine3 = _interopRequireDefault(_IconStandardsLine2);

var _IconStarLightLine2 = __webpack_require__(195);

var _IconStarLightLine3 = _interopRequireDefault(_IconStarLightLine2);

var _IconStarLine2 = __webpack_require__(196);

var _IconStarLine3 = _interopRequireDefault(_IconStarLine2);

var _IconStatsLine2 = __webpack_require__(197);

var _IconStatsLine3 = _interopRequireDefault(_IconStatsLine2);

var _IconStrikethroughLine2 = __webpack_require__(198);

var _IconStrikethroughLine3 = _interopRequireDefault(_IconStrikethroughLine2);

var _IconStudentViewLine2 = __webpack_require__(199);

var _IconStudentViewLine3 = _interopRequireDefault(_IconStudentViewLine2);

var _IconSyllabusLine2 = __webpack_require__(200);

var _IconSyllabusLine3 = _interopRequireDefault(_IconSyllabusLine2);

var _IconTableLine2 = __webpack_require__(201);

var _IconTableLine3 = _interopRequireDefault(_IconTableLine2);

var _IconTagLine2 = __webpack_require__(202);

var _IconTagLine3 = _interopRequireDefault(_IconTagLine2);

var _IconTargetLine2 = __webpack_require__(203);

var _IconTargetLine3 = _interopRequireDefault(_IconTargetLine2);

var _IconTextareaLine2 = __webpack_require__(208);

var _IconTextareaLine3 = _interopRequireDefault(_IconTextareaLine2);

var _IconTextCenteredLine2 = __webpack_require__(204);

var _IconTextCenteredLine3 = _interopRequireDefault(_IconTextCenteredLine2);

var _IconTextLeftLine2 = __webpack_require__(205);

var _IconTextLeftLine3 = _interopRequireDefault(_IconTextLeftLine2);

var _IconTextLine2 = __webpack_require__(206);

var _IconTextLine3 = _interopRequireDefault(_IconTextLine2);

var _IconTextRightLine2 = __webpack_require__(207);

var _IconTextRightLine3 = _interopRequireDefault(_IconTextRightLine2);

var _IconTimerLine2 = __webpack_require__(209);

var _IconTimerLine3 = _interopRequireDefault(_IconTimerLine2);

var _IconToggleLeftLine2 = __webpack_require__(210);

var _IconToggleLeftLine3 = _interopRequireDefault(_IconToggleLeftLine2);

var _IconToggleRightLine2 = __webpack_require__(211);

var _IconToggleRightLine3 = _interopRequireDefault(_IconToggleRightLine2);

var _IconTrashLine2 = __webpack_require__(212);

var _IconTrashLine3 = _interopRequireDefault(_IconTrashLine2);

var _IconTroubleLine2 = __webpack_require__(213);

var _IconTroubleLine3 = _interopRequireDefault(_IconTroubleLine2);

var _IconTwitterBoxedLine2 = __webpack_require__(214);

var _IconTwitterBoxedLine3 = _interopRequireDefault(_IconTwitterBoxedLine2);

var _IconTwitterLine2 = __webpack_require__(215);

var _IconTwitterLine3 = _interopRequireDefault(_IconTwitterLine2);

var _IconUnlockLine2 = __webpack_require__(216);

var _IconUnlockLine3 = _interopRequireDefault(_IconUnlockLine2);

var _IconUnmutedLine2 = __webpack_require__(217);

var _IconUnmutedLine3 = _interopRequireDefault(_IconUnmutedLine2);

var _IconUnpublishedLine2 = __webpack_require__(219);

var _IconUnpublishedLine3 = _interopRequireDefault(_IconUnpublishedLine2);

var _IconUnpublishLine2 = __webpack_require__(218);

var _IconUnpublishLine3 = _interopRequireDefault(_IconUnpublishLine2);

var _IconUpdownLine2 = __webpack_require__(220);

var _IconUpdownLine3 = _interopRequireDefault(_IconUpdownLine2);

var _IconUploadLine2 = __webpack_require__(221);

var _IconUploadLine3 = _interopRequireDefault(_IconUploadLine2);

var _IconUserAddLine2 = __webpack_require__(222);

var _IconUserAddLine3 = _interopRequireDefault(_IconUserAddLine2);

var _IconUserLine2 = __webpack_require__(223);

var _IconUserLine3 = _interopRequireDefault(_IconUserLine2);

var _IconVideoLine2 = __webpack_require__(224);

var _IconVideoLine3 = _interopRequireDefault(_IconVideoLine2);

var _IconWarningLine2 = __webpack_require__(225);

var _IconWarningLine3 = _interopRequireDefault(_IconWarningLine2);

var _IconWindowsLine2 = __webpack_require__(226);

var _IconWindowsLine3 = _interopRequireDefault(_IconWindowsLine2);

var _IconWordpressLine2 = __webpack_require__(227);

var _IconWordpressLine3 = _interopRequireDefault(_IconWordpressLine2);

var _IconXLine2 = __webpack_require__(228);

var _IconXLine3 = _interopRequireDefault(_IconXLine2);

var _IconZippedLine2 = __webpack_require__(229);

var _IconZippedLine3 = _interopRequireDefault(_IconZippedLine2);

var _IconZoomInLine2 = __webpack_require__(230);

var _IconZoomInLine3 = _interopRequireDefault(_IconZoomInLine2);

var _IconZoomOutLine2 = __webpack_require__(231);

var _IconZoomOutLine3 = _interopRequireDefault(_IconZoomOutLine2);

var _IconAddressBookSolid2 = __webpack_require__(233);

var _IconAddressBookSolid3 = _interopRequireDefault(_IconAddressBookSolid2);

var _IconAddSolid2 = __webpack_require__(232);

var _IconAddSolid3 = _interopRequireDefault(_IconAddSolid2);

var _IconAlertSolid2 = __webpack_require__(234);

var _IconAlertSolid3 = _interopRequireDefault(_IconAlertSolid2);

var _IconAnalyticsSolid2 = __webpack_require__(235);

var _IconAnalyticsSolid3 = _interopRequireDefault(_IconAnalyticsSolid2);

var _IconAndroidSolid2 = __webpack_require__(236);

var _IconAndroidSolid3 = _interopRequireDefault(_IconAndroidSolid2);

var _IconAnnouncementSolid2 = __webpack_require__(237);

var _IconAnnouncementSolid3 = _interopRequireDefault(_IconAnnouncementSolid2);

var _IconAppleSolid2 = __webpack_require__(238);

var _IconAppleSolid3 = _interopRequireDefault(_IconAppleSolid2);

var _IconArrowDownSolid2 = __webpack_require__(239);

var _IconArrowDownSolid3 = _interopRequireDefault(_IconArrowDownSolid2);

var _IconArrowLeftSolid2 = __webpack_require__(240);

var _IconArrowLeftSolid3 = _interopRequireDefault(_IconArrowLeftSolid2);

var _IconArrowOpenDownSolid2 = __webpack_require__(241);

var _IconArrowOpenDownSolid3 = _interopRequireDefault(_IconArrowOpenDownSolid2);

var _IconArrowOpenLeftSolid2 = __webpack_require__(242);

var _IconArrowOpenLeftSolid3 = _interopRequireDefault(_IconArrowOpenLeftSolid2);

var _IconArrowOpenRightSolid2 = __webpack_require__(243);

var _IconArrowOpenRightSolid3 = _interopRequireDefault(_IconArrowOpenRightSolid2);

var _IconArrowOpenUpSolid2 = __webpack_require__(244);

var _IconArrowOpenUpSolid3 = _interopRequireDefault(_IconArrowOpenUpSolid2);

var _IconArrowRightSolid2 = __webpack_require__(245);

var _IconArrowRightSolid3 = _interopRequireDefault(_IconArrowRightSolid2);

var _IconArrowUpSolid2 = __webpack_require__(246);

var _IconArrowUpSolid3 = _interopRequireDefault(_IconArrowUpSolid2);

var _IconAssignmentSolid2 = __webpack_require__(247);

var _IconAssignmentSolid3 = _interopRequireDefault(_IconAssignmentSolid2);

var _IconAudioSolid2 = __webpack_require__(248);

var _IconAudioSolid3 = _interopRequireDefault(_IconAudioSolid2);

var _IconBookmarkSolid2 = __webpack_require__(249);

var _IconBookmarkSolid3 = _interopRequireDefault(_IconBookmarkSolid2);

var _IconBoxSolid2 = __webpack_require__(250);

var _IconBoxSolid3 = _interopRequireDefault(_IconBoxSolid2);

var _IconCalendarAddSolid2 = __webpack_require__(251);

var _IconCalendarAddSolid3 = _interopRequireDefault(_IconCalendarAddSolid2);

var _IconCalendarDaySolid2 = __webpack_require__(252);

var _IconCalendarDaySolid3 = _interopRequireDefault(_IconCalendarDaySolid2);

var _IconCalendarDaysSolid2 = __webpack_require__(253);

var _IconCalendarDaysSolid3 = _interopRequireDefault(_IconCalendarDaysSolid2);

var _IconCalendarMonthSolid2 = __webpack_require__(254);

var _IconCalendarMonthSolid3 = _interopRequireDefault(_IconCalendarMonthSolid2);

var _IconCalendarReservedSolid2 = __webpack_require__(255);

var _IconCalendarReservedSolid3 = _interopRequireDefault(_IconCalendarReservedSolid2);

var _IconChatSolid2 = __webpack_require__(256);

var _IconChatSolid3 = _interopRequireDefault(_IconChatSolid2);

var _IconCheckDarkSolid2 = __webpack_require__(257);

var _IconCheckDarkSolid3 = _interopRequireDefault(_IconCheckDarkSolid2);

var _IconCheckMarkSolid2 = __webpack_require__(258);

var _IconCheckMarkSolid3 = _interopRequireDefault(_IconCheckMarkSolid2);

var _IconCheckPlusSolid2 = __webpack_require__(259);

var _IconCheckPlusSolid3 = _interopRequireDefault(_IconCheckPlusSolid2);

var _IconCheckSolid2 = __webpack_require__(260);

var _IconCheckSolid3 = _interopRequireDefault(_IconCheckSolid2);

var _IconClockSolid2 = __webpack_require__(261);

var _IconClockSolid3 = _interopRequireDefault(_IconClockSolid2);

var _IconCloudLockSolid2 = __webpack_require__(262);

var _IconCloudLockSolid3 = _interopRequireDefault(_IconCloudLockSolid2);

var _IconCollapseSolid2 = __webpack_require__(263);

var _IconCollapseSolid3 = _interopRequireDefault(_IconCollapseSolid2);

var _IconCollectionSaveSolid2 = __webpack_require__(264);

var _IconCollectionSaveSolid3 = _interopRequireDefault(_IconCollectionSaveSolid2);

var _IconCollectionSolid2 = __webpack_require__(265);

var _IconCollectionSolid3 = _interopRequireDefault(_IconCollectionSolid2);

var _IconCommonsSolid2 = __webpack_require__(266);

var _IconCommonsSolid3 = _interopRequireDefault(_IconCommonsSolid2);

var _IconCompleteSolid2 = __webpack_require__(267);

var _IconCompleteSolid3 = _interopRequireDefault(_IconCompleteSolid2);

var _IconComposeSolid2 = __webpack_require__(268);

var _IconComposeSolid3 = _interopRequireDefault(_IconComposeSolid2);

var _IconCopyCourseSolid2 = __webpack_require__(269);

var _IconCopyCourseSolid3 = _interopRequireDefault(_IconCopyCourseSolid2);

var _IconCopySolid2 = __webpack_require__(270);

var _IconCopySolid3 = _interopRequireDefault(_IconCopySolid2);

var _IconCoursesSolid2 = __webpack_require__(271);

var _IconCoursesSolid3 = _interopRequireDefault(_IconCoursesSolid2);

var _IconDiscussionCheckSolid2 = __webpack_require__(272);

var _IconDiscussionCheckSolid3 = _interopRequireDefault(_IconDiscussionCheckSolid2);

var _IconDiscussionNewSolid2 = __webpack_require__(273);

var _IconDiscussionNewSolid3 = _interopRequireDefault(_IconDiscussionNewSolid2);

var _IconDiscussionReply2Solid2 = __webpack_require__(274);

var _IconDiscussionReply2Solid3 = _interopRequireDefault(_IconDiscussionReply2Solid2);

var _IconDiscussionReplyDarkSolid2 = __webpack_require__(275);

var _IconDiscussionReplyDarkSolid3 = _interopRequireDefault(_IconDiscussionReplyDarkSolid2);

var _IconDiscussionReplySolid2 = __webpack_require__(276);

var _IconDiscussionReplySolid3 = _interopRequireDefault(_IconDiscussionReplySolid2);

var _IconDiscussionSearchSolid2 = __webpack_require__(277);

var _IconDiscussionSearchSolid3 = _interopRequireDefault(_IconDiscussionSearchSolid2);

var _IconDiscussionSolid2 = __webpack_require__(278);

var _IconDiscussionSolid3 = _interopRequireDefault(_IconDiscussionSolid2);

var _IconDiscussionXSolid2 = __webpack_require__(279);

var _IconDiscussionXSolid3 = _interopRequireDefault(_IconDiscussionXSolid2);

var _IconDocumentSolid2 = __webpack_require__(280);

var _IconDocumentSolid3 = _interopRequireDefault(_IconDocumentSolid2);

var _IconDownloadSolid2 = __webpack_require__(281);

var _IconDownloadSolid3 = _interopRequireDefault(_IconDownloadSolid2);

var _IconDragHandleSolid2 = __webpack_require__(282);

var _IconDragHandleSolid3 = _interopRequireDefault(_IconDragHandleSolid2);

var _IconDropDownSolid2 = __webpack_require__(283);

var _IconDropDownSolid3 = _interopRequireDefault(_IconDropDownSolid2);

var _IconEditSolid2 = __webpack_require__(284);

var _IconEditSolid3 = _interopRequireDefault(_IconEditSolid2);

var _IconEducatorsSolid2 = __webpack_require__(285);

var _IconEducatorsSolid3 = _interopRequireDefault(_IconEducatorsSolid2);

var _IconEmailSolid2 = __webpack_require__(286);

var _IconEmailSolid3 = _interopRequireDefault(_IconEmailSolid2);

var _IconEmptySolid2 = __webpack_require__(287);

var _IconEmptySolid3 = _interopRequireDefault(_IconEmptySolid2);

var _IconEndSolid2 = __webpack_require__(288);

var _IconEndSolid3 = _interopRequireDefault(_IconEndSolid2);

var _IconEquationSolid2 = __webpack_require__(289);

var _IconEquationSolid3 = _interopRequireDefault(_IconEquationSolid2);

var _IconEquellaSolid2 = __webpack_require__(290);

var _IconEquellaSolid3 = _interopRequireDefault(_IconEquellaSolid2);

var _IconExpandItemsSolid2 = __webpack_require__(291);

var _IconExpandItemsSolid3 = _interopRequireDefault(_IconExpandItemsSolid2);

var _IconExpandSolid2 = __webpack_require__(292);

var _IconExpandSolid3 = _interopRequireDefault(_IconExpandSolid2);

var _IconExportContentSolid2 = __webpack_require__(293);

var _IconExportContentSolid3 = _interopRequireDefault(_IconExportContentSolid2);

var _IconExportSolid2 = __webpack_require__(294);

var _IconExportSolid3 = _interopRequireDefault(_IconExportSolid2);

var _IconExternalLinkSolid2 = __webpack_require__(295);

var _IconExternalLinkSolid3 = _interopRequireDefault(_IconExternalLinkSolid2);

var _IconEyeSolid2 = __webpack_require__(296);

var _IconEyeSolid3 = _interopRequireDefault(_IconEyeSolid2);

var _IconFacebookBoxedSolid2 = __webpack_require__(297);

var _IconFacebookBoxedSolid3 = _interopRequireDefault(_IconFacebookBoxedSolid2);

var _IconFacebookSolid2 = __webpack_require__(298);

var _IconFacebookSolid3 = _interopRequireDefault(_IconFacebookSolid2);

var _IconFilesCopyrightSolid2 = __webpack_require__(299);

var _IconFilesCopyrightSolid3 = _interopRequireDefault(_IconFilesCopyrightSolid2);

var _IconFilesCreativeCommonsSolid2 = __webpack_require__(300);

var _IconFilesCreativeCommonsSolid3 = _interopRequireDefault(_IconFilesCreativeCommonsSolid2);

var _IconFilesFairUseSolid2 = __webpack_require__(301);

var _IconFilesFairUseSolid3 = _interopRequireDefault(_IconFilesFairUseSolid2);

var _IconFilesObtainedPermissionSolid2 = __webpack_require__(302);

var _IconFilesObtainedPermissionSolid3 = _interopRequireDefault(_IconFilesObtainedPermissionSolid2);

var _IconFilesPublicDomainSolid2 = __webpack_require__(303);

var _IconFilesPublicDomainSolid3 = _interopRequireDefault(_IconFilesPublicDomainSolid2);

var _IconFilmstripSolid2 = __webpack_require__(304);

var _IconFilmstripSolid3 = _interopRequireDefault(_IconFilmstripSolid2);

var _IconFlagSolid2 = __webpack_require__(305);

var _IconFlagSolid3 = _interopRequireDefault(_IconFlagSolid2);

var _IconFolderLockedSolid2 = __webpack_require__(306);

var _IconFolderLockedSolid3 = _interopRequireDefault(_IconFolderLockedSolid2);

var _IconFolderSolid2 = __webpack_require__(307);

var _IconFolderSolid3 = _interopRequireDefault(_IconFolderSolid2);

var _IconForwardSolid2 = __webpack_require__(308);

var _IconForwardSolid3 = _interopRequireDefault(_IconForwardSolid2);

var _IconGithubSolid2 = __webpack_require__(309);

var _IconGithubSolid3 = _interopRequireDefault(_IconGithubSolid2);

var _IconGradebookExportSolid2 = __webpack_require__(310);

var _IconGradebookExportSolid3 = _interopRequireDefault(_IconGradebookExportSolid2);

var _IconGradebookImportSolid2 = __webpack_require__(311);

var _IconGradebookImportSolid3 = _interopRequireDefault(_IconGradebookImportSolid2);

var _IconGradebookSolid2 = __webpack_require__(312);

var _IconGradebookSolid3 = _interopRequireDefault(_IconGradebookSolid2);

var _IconGroupDarkNewSolid2 = __webpack_require__(313);

var _IconGroupDarkNewSolid3 = _interopRequireDefault(_IconGroupDarkNewSolid2);

var _IconGroupNewSolid2 = __webpack_require__(314);

var _IconGroupNewSolid3 = _interopRequireDefault(_IconGroupNewSolid2);

var _IconGroupSolid2 = __webpack_require__(315);

var _IconGroupSolid3 = _interopRequireDefault(_IconGroupSolid2);

var _IconHamburgerSolid2 = __webpack_require__(316);

var _IconHamburgerSolid3 = _interopRequireDefault(_IconHamburgerSolid2);

var _IconHeartSolid2 = __webpack_require__(317);

var _IconHeartSolid3 = _interopRequireDefault(_IconHeartSolid2);

var _IconHighlighterSolid2 = __webpack_require__(318);

var _IconHighlighterSolid3 = _interopRequireDefault(_IconHighlighterSolid2);

var _IconHomeSolid2 = __webpack_require__(319);

var _IconHomeSolid3 = _interopRequireDefault(_IconHomeSolid2);

var _IconHourGlassSolid2 = __webpack_require__(320);

var _IconHourGlassSolid3 = _interopRequireDefault(_IconHourGlassSolid2);

var _IconImageSolid2 = __webpack_require__(321);

var _IconImageSolid3 = _interopRequireDefault(_IconImageSolid2);

var _IconImportContentSolid2 = __webpack_require__(322);

var _IconImportContentSolid3 = _interopRequireDefault(_IconImportContentSolid2);

var _IconImportSolid2 = __webpack_require__(323);

var _IconImportSolid3 = _interopRequireDefault(_IconImportSolid2);

var _IconIndent2Solid2 = __webpack_require__(324);

var _IconIndent2Solid3 = _interopRequireDefault(_IconIndent2Solid2);

var _IconIndentSolid2 = __webpack_require__(325);

var _IconIndentSolid3 = _interopRequireDefault(_IconIndentSolid2);

var _IconInfoSolid2 = __webpack_require__(326);

var _IconInfoSolid3 = _interopRequireDefault(_IconInfoSolid2);

var _IconInstructureSolid2 = __webpack_require__(327);

var _IconInstructureSolid3 = _interopRequireDefault(_IconInstructureSolid2);

var _IconIntegrationsSolid2 = __webpack_require__(328);

var _IconIntegrationsSolid3 = _interopRequireDefault(_IconIntegrationsSolid2);

var _IconInvitationSolid2 = __webpack_require__(329);

var _IconInvitationSolid3 = _interopRequireDefault(_IconInvitationSolid2);

var _IconKeyboardShortcutsSolid2 = __webpack_require__(330);

var _IconKeyboardShortcutsSolid3 = _interopRequireDefault(_IconKeyboardShortcutsSolid2);

var _IconLikeSolid2 = __webpack_require__(331);

var _IconLikeSolid3 = _interopRequireDefault(_IconLikeSolid2);

var _IconLinkedinSolid2 = __webpack_require__(333);

var _IconLinkedinSolid3 = _interopRequireDefault(_IconLinkedinSolid2);

var _IconLinkSolid2 = __webpack_require__(332);

var _IconLinkSolid3 = _interopRequireDefault(_IconLinkSolid2);

var _IconLockSolid2 = __webpack_require__(334);

var _IconLockSolid3 = _interopRequireDefault(_IconLockSolid2);

var _IconLtiSolid2 = __webpack_require__(335);

var _IconLtiSolid3 = _interopRequireDefault(_IconLtiSolid2);

var _IconMarkAsReadSolid2 = __webpack_require__(336);

var _IconMarkAsReadSolid3 = _interopRequireDefault(_IconMarkAsReadSolid2);

var _IconMarkerSolid2 = __webpack_require__(337);

var _IconMarkerSolid3 = _interopRequireDefault(_IconMarkerSolid2);

var _IconMasqueradeSolid2 = __webpack_require__(338);

var _IconMasqueradeSolid3 = _interopRequireDefault(_IconMasqueradeSolid2);

var _IconMasteryPathSolid2 = __webpack_require__(339);

var _IconMasteryPathSolid3 = _interopRequireDefault(_IconMasteryPathSolid2);

var _IconMaterialsRequiredLightSolid2 = __webpack_require__(340);

var _IconMaterialsRequiredLightSolid3 = _interopRequireDefault(_IconMaterialsRequiredLightSolid2);

var _IconMaterialsRequiredSolid2 = __webpack_require__(341);

var _IconMaterialsRequiredSolid3 = _interopRequireDefault(_IconMaterialsRequiredSolid2);

var _IconMatureLightSolid2 = __webpack_require__(342);

var _IconMatureLightSolid3 = _interopRequireDefault(_IconMatureLightSolid2);

var _IconMatureSolid2 = __webpack_require__(343);

var _IconMatureSolid3 = _interopRequireDefault(_IconMatureSolid2);

var _IconMediaSolid2 = __webpack_require__(344);

var _IconMediaSolid3 = _interopRequireDefault(_IconMediaSolid2);

var _IconMessageSolid2 = __webpack_require__(345);

var _IconMessageSolid3 = _interopRequireDefault(_IconMessageSolid2);

var _IconMiniArrowDownSolid2 = __webpack_require__(346);

var _IconMiniArrowDownSolid3 = _interopRequireDefault(_IconMiniArrowDownSolid2);

var _IconMiniArrowLeftSolid2 = __webpack_require__(347);

var _IconMiniArrowLeftSolid3 = _interopRequireDefault(_IconMiniArrowLeftSolid2);

var _IconMiniArrowRightSolid2 = __webpack_require__(348);

var _IconMiniArrowRightSolid3 = _interopRequireDefault(_IconMiniArrowRightSolid2);

var _IconMiniArrowUpSolid2 = __webpack_require__(349);

var _IconMiniArrowUpSolid3 = _interopRequireDefault(_IconMiniArrowUpSolid2);

var _IconMinimizeSolid2 = __webpack_require__(350);

var _IconMinimizeSolid3 = _interopRequireDefault(_IconMinimizeSolid2);

var _IconModuleSolid2 = __webpack_require__(351);

var _IconModuleSolid3 = _interopRequireDefault(_IconModuleSolid2);

var _IconMoreSolid2 = __webpack_require__(352);

var _IconMoreSolid3 = _interopRequireDefault(_IconMoreSolid2);

var _IconMoveDownBottomSolid2 = __webpack_require__(353);

var _IconMoveDownBottomSolid3 = _interopRequireDefault(_IconMoveDownBottomSolid2);

var _IconMoveDownSolid2 = __webpack_require__(354);

var _IconMoveDownSolid3 = _interopRequireDefault(_IconMoveDownSolid2);

var _IconMoveLeftSolid2 = __webpack_require__(355);

var _IconMoveLeftSolid3 = _interopRequireDefault(_IconMoveLeftSolid2);

var _IconMoveRightSolid2 = __webpack_require__(356);

var _IconMoveRightSolid3 = _interopRequireDefault(_IconMoveRightSolid2);

var _IconMoveUpSolid2 = __webpack_require__(357);

var _IconMoveUpSolid3 = _interopRequireDefault(_IconMoveUpSolid2);

var _IconMoveUpTopSolid2 = __webpack_require__(358);

var _IconMoveUpTopSolid3 = _interopRequireDefault(_IconMoveUpTopSolid2);

var _IconMsExcelSolid2 = __webpack_require__(359);

var _IconMsExcelSolid3 = _interopRequireDefault(_IconMsExcelSolid2);

var _IconMsPptSolid2 = __webpack_require__(360);

var _IconMsPptSolid3 = _interopRequireDefault(_IconMsPptSolid2);

var _IconMsWordSolid2 = __webpack_require__(361);

var _IconMsWordSolid3 = _interopRequireDefault(_IconMsWordSolid2);

var _IconMutedSolid2 = __webpack_require__(362);

var _IconMutedSolid3 = _interopRequireDefault(_IconMutedSolid2);

var _IconNextUnreadSolid2 = __webpack_require__(363);

var _IconNextUnreadSolid3 = _interopRequireDefault(_IconNextUnreadSolid2);

var _IconNoteDarkSolid2 = __webpack_require__(365);

var _IconNoteDarkSolid3 = _interopRequireDefault(_IconNoteDarkSolid2);

var _IconNoteLightSolid2 = __webpack_require__(366);

var _IconNoteLightSolid3 = _interopRequireDefault(_IconNoteLightSolid2);

var _IconNotGradedSolid2 = __webpack_require__(364);

var _IconNotGradedSolid3 = _interopRequireDefault(_IconNotGradedSolid2);

var _IconOffSolid2 = __webpack_require__(367);

var _IconOffSolid3 = _interopRequireDefault(_IconOffSolid2);

var _IconOutcomesSolid2 = __webpack_require__(368);

var _IconOutcomesSolid3 = _interopRequireDefault(_IconOutcomesSolid2);

var _IconOutdent2Solid2 = __webpack_require__(369);

var _IconOutdent2Solid3 = _interopRequireDefault(_IconOutdent2Solid2);

var _IconOutdentSolid2 = __webpack_require__(370);

var _IconOutdentSolid3 = _interopRequireDefault(_IconOutdentSolid2);

var _IconPaintSolid2 = __webpack_require__(371);

var _IconPaintSolid3 = _interopRequireDefault(_IconPaintSolid2);

var _IconPaperclipSolid2 = __webpack_require__(372);

var _IconPaperclipSolid3 = _interopRequireDefault(_IconPaperclipSolid2);

var _IconPartialSolid2 = __webpack_require__(373);

var _IconPartialSolid3 = _interopRequireDefault(_IconPartialSolid2);

var _IconPdfSolid2 = __webpack_require__(374);

var _IconPdfSolid3 = _interopRequireDefault(_IconPdfSolid2);

var _IconPeerGradedSolid2 = __webpack_require__(375);

var _IconPeerGradedSolid3 = _interopRequireDefault(_IconPeerGradedSolid2);

var _IconPeerReviewSolid2 = __webpack_require__(376);

var _IconPeerReviewSolid3 = _interopRequireDefault(_IconPeerReviewSolid2);

var _IconPinSolid2 = __webpack_require__(377);

var _IconPinSolid3 = _interopRequireDefault(_IconPinSolid2);

var _IconPinterestSolid2 = __webpack_require__(378);

var _IconPinterestSolid3 = _interopRequireDefault(_IconPinterestSolid2);

var _IconPlusSolid2 = __webpack_require__(379);

var _IconPlusSolid3 = _interopRequireDefault(_IconPlusSolid2);

var _IconPostToSisSolid2 = __webpack_require__(380);

var _IconPostToSisSolid3 = _interopRequireDefault(_IconPostToSisSolid2);

var _IconPrerequisiteSolid2 = __webpack_require__(381);

var _IconPrerequisiteSolid3 = _interopRequireDefault(_IconPrerequisiteSolid2);

var _IconPrinterSolid2 = __webpack_require__(382);

var _IconPrinterSolid3 = _interopRequireDefault(_IconPrinterSolid2);

var _IconPublishSolid2 = __webpack_require__(383);

var _IconPublishSolid3 = _interopRequireDefault(_IconPublishSolid2);

var _IconQuestionSolid2 = __webpack_require__(384);

var _IconQuestionSolid3 = _interopRequireDefault(_IconQuestionSolid2);

var _IconQuizSolid2 = __webpack_require__(385);

var _IconQuizSolid3 = _interopRequireDefault(_IconQuizSolid2);

var _IconQuizStatsAvgSolid2 = __webpack_require__(386);

var _IconQuizStatsAvgSolid3 = _interopRequireDefault(_IconQuizStatsAvgSolid2);

var _IconQuizStatsDeviationSolid2 = __webpack_require__(387);

var _IconQuizStatsDeviationSolid3 = _interopRequireDefault(_IconQuizStatsDeviationSolid2);

var _IconQuizStatsHighSolid2 = __webpack_require__(388);

var _IconQuizStatsHighSolid3 = _interopRequireDefault(_IconQuizStatsHighSolid2);

var _IconQuizStatsLowSolid2 = __webpack_require__(389);

var _IconQuizStatsLowSolid3 = _interopRequireDefault(_IconQuizStatsLowSolid2);

var _IconQuizStatsTimeSolid2 = __webpack_require__(390);

var _IconQuizStatsTimeSolid3 = _interopRequireDefault(_IconQuizStatsTimeSolid2);

var _IconRefreshSolid2 = __webpack_require__(391);

var _IconRefreshSolid3 = _interopRequireDefault(_IconRefreshSolid2);

var _IconRemoveBookmarkSolid2 = __webpack_require__(392);

var _IconRemoveBookmarkSolid3 = _interopRequireDefault(_IconRemoveBookmarkSolid2);

var _IconRemoveFromCollectionSolid2 = __webpack_require__(393);

var _IconRemoveFromCollectionSolid3 = _interopRequireDefault(_IconRemoveFromCollectionSolid2);

var _IconRepliedSolid2 = __webpack_require__(394);

var _IconRepliedSolid3 = _interopRequireDefault(_IconRepliedSolid2);

var _IconReply2Solid2 = __webpack_require__(395);

var _IconReply2Solid3 = _interopRequireDefault(_IconReply2Solid2);

var _IconReplyAll2Solid2 = __webpack_require__(396);

var _IconReplyAll2Solid3 = _interopRequireDefault(_IconReplyAll2Solid2);

var _IconReplySolid2 = __webpack_require__(397);

var _IconReplySolid3 = _interopRequireDefault(_IconReplySolid2);

var _IconResetSolid2 = __webpack_require__(398);

var _IconResetSolid3 = _interopRequireDefault(_IconResetSolid2);

var _IconRssAddSolid2 = __webpack_require__(399);

var _IconRssAddSolid3 = _interopRequireDefault(_IconRssAddSolid2);

var _IconRssSolid2 = __webpack_require__(400);

var _IconRssSolid3 = _interopRequireDefault(_IconRssSolid2);

var _IconRubricDarkSolid2 = __webpack_require__(401);

var _IconRubricDarkSolid3 = _interopRequireDefault(_IconRubricDarkSolid2);

var _IconRubricSolid2 = __webpack_require__(402);

var _IconRubricSolid3 = _interopRequireDefault(_IconRubricSolid2);

var _IconSearchAddressBookSolid2 = __webpack_require__(403);

var _IconSearchAddressBookSolid3 = _interopRequireDefault(_IconSearchAddressBookSolid2);

var _IconSearchSolid2 = __webpack_require__(404);

var _IconSearchSolid3 = _interopRequireDefault(_IconSearchSolid2);

var _IconSettings2Solid2 = __webpack_require__(405);

var _IconSettings2Solid3 = _interopRequireDefault(_IconSettings2Solid2);

var _IconSettingsSolid2 = __webpack_require__(406);

var _IconSettingsSolid3 = _interopRequireDefault(_IconSettingsSolid2);

var _IconSisImportedSolid2 = __webpack_require__(407);

var _IconSisImportedSolid3 = _interopRequireDefault(_IconSisImportedSolid2);

var _IconSisNotSyncedSolid2 = __webpack_require__(408);

var _IconSisNotSyncedSolid3 = _interopRequireDefault(_IconSisNotSyncedSolid2);

var _IconSisSyncedSolid2 = __webpack_require__(409);

var _IconSisSyncedSolid3 = _interopRequireDefault(_IconSisSyncedSolid2);

var _IconSkypeSolid2 = __webpack_require__(410);

var _IconSkypeSolid3 = _interopRequireDefault(_IconSkypeSolid2);

var _IconSpeedGraderSolid2 = __webpack_require__(411);

var _IconSpeedGraderSolid3 = _interopRequireDefault(_IconSpeedGraderSolid2);

var _IconStandardsSolid2 = __webpack_require__(412);

var _IconStandardsSolid3 = _interopRequireDefault(_IconStandardsSolid2);

var _IconStarLightSolid2 = __webpack_require__(413);

var _IconStarLightSolid3 = _interopRequireDefault(_IconStarLightSolid2);

var _IconStarSolid2 = __webpack_require__(414);

var _IconStarSolid3 = _interopRequireDefault(_IconStarSolid2);

var _IconStatsSolid2 = __webpack_require__(415);

var _IconStatsSolid3 = _interopRequireDefault(_IconStatsSolid2);

var _IconStrikethroughSolid2 = __webpack_require__(416);

var _IconStrikethroughSolid3 = _interopRequireDefault(_IconStrikethroughSolid2);

var _IconStudentViewSolid2 = __webpack_require__(417);

var _IconStudentViewSolid3 = _interopRequireDefault(_IconStudentViewSolid2);

var _IconSyllabusSolid2 = __webpack_require__(418);

var _IconSyllabusSolid3 = _interopRequireDefault(_IconSyllabusSolid2);

var _IconTableSolid2 = __webpack_require__(419);

var _IconTableSolid3 = _interopRequireDefault(_IconTableSolid2);

var _IconTagSolid2 = __webpack_require__(420);

var _IconTagSolid3 = _interopRequireDefault(_IconTagSolid2);

var _IconTargetSolid2 = __webpack_require__(421);

var _IconTargetSolid3 = _interopRequireDefault(_IconTargetSolid2);

var _IconTextareaSolid2 = __webpack_require__(426);

var _IconTextareaSolid3 = _interopRequireDefault(_IconTextareaSolid2);

var _IconTextCenteredSolid2 = __webpack_require__(422);

var _IconTextCenteredSolid3 = _interopRequireDefault(_IconTextCenteredSolid2);

var _IconTextLeftSolid2 = __webpack_require__(423);

var _IconTextLeftSolid3 = _interopRequireDefault(_IconTextLeftSolid2);

var _IconTextRightSolid2 = __webpack_require__(424);

var _IconTextRightSolid3 = _interopRequireDefault(_IconTextRightSolid2);

var _IconTextSolid2 = __webpack_require__(425);

var _IconTextSolid3 = _interopRequireDefault(_IconTextSolid2);

var _IconTimerSolid2 = __webpack_require__(427);

var _IconTimerSolid3 = _interopRequireDefault(_IconTimerSolid2);

var _IconToggleLeftSolid2 = __webpack_require__(428);

var _IconToggleLeftSolid3 = _interopRequireDefault(_IconToggleLeftSolid2);

var _IconToggleRightSolid2 = __webpack_require__(429);

var _IconToggleRightSolid3 = _interopRequireDefault(_IconToggleRightSolid2);

var _IconTrashSolid2 = __webpack_require__(430);

var _IconTrashSolid3 = _interopRequireDefault(_IconTrashSolid2);

var _IconTroubleSolid2 = __webpack_require__(431);

var _IconTroubleSolid3 = _interopRequireDefault(_IconTroubleSolid2);

var _IconTwitterBoxedSolid2 = __webpack_require__(432);

var _IconTwitterBoxedSolid3 = _interopRequireDefault(_IconTwitterBoxedSolid2);

var _IconTwitterSolid2 = __webpack_require__(433);

var _IconTwitterSolid3 = _interopRequireDefault(_IconTwitterSolid2);

var _IconUnlockSolid2 = __webpack_require__(434);

var _IconUnlockSolid3 = _interopRequireDefault(_IconUnlockSolid2);

var _IconUnmutedSolid2 = __webpack_require__(435);

var _IconUnmutedSolid3 = _interopRequireDefault(_IconUnmutedSolid2);

var _IconUnpublishedSolid2 = __webpack_require__(437);

var _IconUnpublishedSolid3 = _interopRequireDefault(_IconUnpublishedSolid2);

var _IconUnpublishSolid2 = __webpack_require__(436);

var _IconUnpublishSolid3 = _interopRequireDefault(_IconUnpublishSolid2);

var _IconUpdownSolid2 = __webpack_require__(438);

var _IconUpdownSolid3 = _interopRequireDefault(_IconUpdownSolid2);

var _IconUploadSolid2 = __webpack_require__(439);

var _IconUploadSolid3 = _interopRequireDefault(_IconUploadSolid2);

var _IconUserAddSolid2 = __webpack_require__(440);

var _IconUserAddSolid3 = _interopRequireDefault(_IconUserAddSolid2);

var _IconUserSolid2 = __webpack_require__(441);

var _IconUserSolid3 = _interopRequireDefault(_IconUserSolid2);

var _IconVideoSolid2 = __webpack_require__(442);

var _IconVideoSolid3 = _interopRequireDefault(_IconVideoSolid2);

var _IconWarningSolid2 = __webpack_require__(443);

var _IconWarningSolid3 = _interopRequireDefault(_IconWarningSolid2);

var _IconWindowsSolid2 = __webpack_require__(444);

var _IconWindowsSolid3 = _interopRequireDefault(_IconWindowsSolid2);

var _IconWordpressSolid2 = __webpack_require__(445);

var _IconWordpressSolid3 = _interopRequireDefault(_IconWordpressSolid2);

var _IconXSolid2 = __webpack_require__(446);

var _IconXSolid3 = _interopRequireDefault(_IconXSolid2);

var _IconZippedSolid2 = __webpack_require__(447);

var _IconZippedSolid3 = _interopRequireDefault(_IconZippedSolid2);

var _IconZoomInSolid2 = __webpack_require__(448);

var _IconZoomInSolid3 = _interopRequireDefault(_IconZoomInSolid2);

var _IconZoomOutSolid2 = __webpack_require__(449);

var _IconZoomOutSolid3 = _interopRequireDefault(_IconZoomOutSolid2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.IconAddLine = _IconAddLine3.default;
exports.IconAddressBookLine = _IconAddressBookLine3.default;
exports.IconAlertLine = _IconAlertLine3.default;
exports.IconAnalyticsLine = _IconAnalyticsLine3.default;
exports.IconAndroidLine = _IconAndroidLine3.default;
exports.IconAnnouncementLine = _IconAnnouncementLine3.default;
exports.IconAppleLine = _IconAppleLine3.default;
exports.IconArrowDownLine = _IconArrowDownLine3.default;
exports.IconArrowLeftLine = _IconArrowLeftLine3.default;
exports.IconArrowOpenDownLine = _IconArrowOpenDownLine3.default;
exports.IconArrowOpenLeftLine = _IconArrowOpenLeftLine3.default;
exports.IconArrowOpenRightLine = _IconArrowOpenRightLine3.default;
exports.IconArrowOpenUpLine = _IconArrowOpenUpLine3.default;
exports.IconArrowRightLine = _IconArrowRightLine3.default;
exports.IconArrowUpLine = _IconArrowUpLine3.default;
exports.IconAssignmentLine = _IconAssignmentLine3.default;
exports.IconAudioLine = _IconAudioLine3.default;
exports.IconBookmarkLine = _IconBookmarkLine3.default;
exports.IconBoxLine = _IconBoxLine3.default;
exports.IconCalendarAddLine = _IconCalendarAddLine3.default;
exports.IconCalendarDayLine = _IconCalendarDayLine3.default;
exports.IconCalendarDaysLine = _IconCalendarDaysLine3.default;
exports.IconCalendarMonthLine = _IconCalendarMonthLine3.default;
exports.IconCalendarReservedLine = _IconCalendarReservedLine3.default;
exports.IconChatLine = _IconChatLine3.default;
exports.IconCheckDarkLine = _IconCheckDarkLine3.default;
exports.IconCheckLine = _IconCheckLine3.default;
exports.IconCheckMarkLine = _IconCheckMarkLine3.default;
exports.IconCheckPlusLine = _IconCheckPlusLine3.default;
exports.IconClockLine = _IconClockLine3.default;
exports.IconCloudLockLine = _IconCloudLockLine3.default;
exports.IconCollapseLine = _IconCollapseLine3.default;
exports.IconCollectionLine = _IconCollectionLine3.default;
exports.IconCollectionSaveLine = _IconCollectionSaveLine3.default;
exports.IconCommonsLine = _IconCommonsLine3.default;
exports.IconCompleteLine = _IconCompleteLine3.default;
exports.IconComposeLine = _IconComposeLine3.default;
exports.IconCopyCourseLine = _IconCopyCourseLine3.default;
exports.IconCopyLine = _IconCopyLine3.default;
exports.IconCoursesLine = _IconCoursesLine3.default;
exports.IconDiscussionCheckLine = _IconDiscussionCheckLine3.default;
exports.IconDiscussionLine = _IconDiscussionLine3.default;
exports.IconDiscussionNewLine = _IconDiscussionNewLine3.default;
exports.IconDiscussionReply2Line = _IconDiscussionReply2Line3.default;
exports.IconDiscussionReplyDarkLine = _IconDiscussionReplyDarkLine3.default;
exports.IconDiscussionReplyLine = _IconDiscussionReplyLine3.default;
exports.IconDiscussionSearchLine = _IconDiscussionSearchLine3.default;
exports.IconDiscussionXLine = _IconDiscussionXLine3.default;
exports.IconDocumentLine = _IconDocumentLine3.default;
exports.IconDownloadLine = _IconDownloadLine3.default;
exports.IconDragHandleLine = _IconDragHandleLine3.default;
exports.IconDropDownLine = _IconDropDownLine3.default;
exports.IconEditLine = _IconEditLine3.default;
exports.IconEducatorsLine = _IconEducatorsLine3.default;
exports.IconEmailLine = _IconEmailLine3.default;
exports.IconEmptyLine = _IconEmptyLine3.default;
exports.IconEndLine = _IconEndLine3.default;
exports.IconEquationLine = _IconEquationLine3.default;
exports.IconEquellaLine = _IconEquellaLine3.default;
exports.IconExpandItemsLine = _IconExpandItemsLine3.default;
exports.IconExpandLine = _IconExpandLine3.default;
exports.IconExportContentLine = _IconExportContentLine3.default;
exports.IconExportLine = _IconExportLine3.default;
exports.IconExternalLinkLine = _IconExternalLinkLine3.default;
exports.IconEyeLine = _IconEyeLine3.default;
exports.IconFacebookBoxedLine = _IconFacebookBoxedLine3.default;
exports.IconFacebookLine = _IconFacebookLine3.default;
exports.IconFilesCopyrightLine = _IconFilesCopyrightLine3.default;
exports.IconFilesCreativeCommonsLine = _IconFilesCreativeCommonsLine3.default;
exports.IconFilesFairUseLine = _IconFilesFairUseLine3.default;
exports.IconFilesObtainedPermissionLine = _IconFilesObtainedPermissionLine3.default;
exports.IconFilesPublicDomainLine = _IconFilesPublicDomainLine3.default;
exports.IconFilmstripLine = _IconFilmstripLine3.default;
exports.IconFlagLine = _IconFlagLine3.default;
exports.IconFolderLine = _IconFolderLine3.default;
exports.IconFolderLockedLine = _IconFolderLockedLine3.default;
exports.IconForwardLine = _IconForwardLine3.default;
exports.IconGithubLine = _IconGithubLine3.default;
exports.IconGradebookExportLine = _IconGradebookExportLine3.default;
exports.IconGradebookImportLine = _IconGradebookImportLine3.default;
exports.IconGradebookLine = _IconGradebookLine3.default;
exports.IconGroupDarkNewLine = _IconGroupDarkNewLine3.default;
exports.IconGroupLine = _IconGroupLine3.default;
exports.IconGroupNewLine = _IconGroupNewLine3.default;
exports.IconHamburgerLine = _IconHamburgerLine3.default;
exports.IconHeartLine = _IconHeartLine3.default;
exports.IconHighlighterLine = _IconHighlighterLine3.default;
exports.IconHomeLine = _IconHomeLine3.default;
exports.IconHourGlassLine = _IconHourGlassLine3.default;
exports.IconImageLine = _IconImageLine3.default;
exports.IconImportContentLine = _IconImportContentLine3.default;
exports.IconImportLine = _IconImportLine3.default;
exports.IconIndent2Line = _IconIndent2Line3.default;
exports.IconIndentLine = _IconIndentLine3.default;
exports.IconInfoLine = _IconInfoLine3.default;
exports.IconInstructureLine = _IconInstructureLine3.default;
exports.IconIntegrationsLine = _IconIntegrationsLine3.default;
exports.IconInvitationLine = _IconInvitationLine3.default;
exports.IconKeyboardShortcutsLine = _IconKeyboardShortcutsLine3.default;
exports.IconLikeLine = _IconLikeLine3.default;
exports.IconLinkedinLine = _IconLinkedinLine3.default;
exports.IconLinkLine = _IconLinkLine3.default;
exports.IconLockLine = _IconLockLine3.default;
exports.IconLtiLine = _IconLtiLine3.default;
exports.IconMarkAsReadLine = _IconMarkAsReadLine3.default;
exports.IconMarkerLine = _IconMarkerLine3.default;
exports.IconMasqueradeLine = _IconMasqueradeLine3.default;
exports.IconMasteryPathLine = _IconMasteryPathLine3.default;
exports.IconMaterialsRequiredLightLine = _IconMaterialsRequiredLightLine3.default;
exports.IconMaterialsRequiredLine = _IconMaterialsRequiredLine3.default;
exports.IconMatureLightLine = _IconMatureLightLine3.default;
exports.IconMatureLine = _IconMatureLine3.default;
exports.IconMediaLine = _IconMediaLine3.default;
exports.IconMessageLine = _IconMessageLine3.default;
exports.IconMiniArrowDownLine = _IconMiniArrowDownLine3.default;
exports.IconMiniArrowLeftLine = _IconMiniArrowLeftLine3.default;
exports.IconMiniArrowRightLine = _IconMiniArrowRightLine3.default;
exports.IconMiniArrowUpLine = _IconMiniArrowUpLine3.default;
exports.IconMinimizeLine = _IconMinimizeLine3.default;
exports.IconModuleLine = _IconModuleLine3.default;
exports.IconMoreLine = _IconMoreLine3.default;
exports.IconMoveDownBottomLine = _IconMoveDownBottomLine3.default;
exports.IconMoveDownLine = _IconMoveDownLine3.default;
exports.IconMoveLeftLine = _IconMoveLeftLine3.default;
exports.IconMoveRightLine = _IconMoveRightLine3.default;
exports.IconMoveUpLine = _IconMoveUpLine3.default;
exports.IconMoveUpTopLine = _IconMoveUpTopLine3.default;
exports.IconMsExcelLine = _IconMsExcelLine3.default;
exports.IconMsPptLine = _IconMsPptLine3.default;
exports.IconMsWordLine = _IconMsWordLine3.default;
exports.IconMutedLine = _IconMutedLine3.default;
exports.IconNextUnreadLine = _IconNextUnreadLine3.default;
exports.IconNoteDarkLine = _IconNoteDarkLine3.default;
exports.IconNoteLightLine = _IconNoteLightLine3.default;
exports.IconNotGradedLine = _IconNotGradedLine3.default;
exports.IconOffLine = _IconOffLine3.default;
exports.IconOutcomesLine = _IconOutcomesLine3.default;
exports.IconOutdent2Line = _IconOutdent2Line3.default;
exports.IconOutdentLine = _IconOutdentLine3.default;
exports.IconPaintLine = _IconPaintLine3.default;
exports.IconPaperclipLine = _IconPaperclipLine3.default;
exports.IconPartialLine = _IconPartialLine3.default;
exports.IconPdfLine = _IconPdfLine3.default;
exports.IconPeerGradedLine = _IconPeerGradedLine3.default;
exports.IconPeerReviewLine = _IconPeerReviewLine3.default;
exports.IconPinLine = _IconPinLine3.default;
exports.IconPinterestLine = _IconPinterestLine3.default;
exports.IconPlusLine = _IconPlusLine3.default;
exports.IconPostToSisLine = _IconPostToSisLine3.default;
exports.IconPrerequisiteLine = _IconPrerequisiteLine3.default;
exports.IconPrinterLine = _IconPrinterLine3.default;
exports.IconPublishLine = _IconPublishLine3.default;
exports.IconQuestionLine = _IconQuestionLine3.default;
exports.IconQuizLine = _IconQuizLine3.default;
exports.IconQuizStatsAvgLine = _IconQuizStatsAvgLine3.default;
exports.IconQuizStatsDeviationLine = _IconQuizStatsDeviationLine3.default;
exports.IconQuizStatsHighLine = _IconQuizStatsHighLine3.default;
exports.IconQuizStatsLowLine = _IconQuizStatsLowLine3.default;
exports.IconQuizStatsTimeLine = _IconQuizStatsTimeLine3.default;
exports.IconRefreshLine = _IconRefreshLine3.default;
exports.IconRemoveBookmarkLine = _IconRemoveBookmarkLine3.default;
exports.IconRemoveFromCollectionLine = _IconRemoveFromCollectionLine3.default;
exports.IconRepliedLine = _IconRepliedLine3.default;
exports.IconReply2Line = _IconReply2Line3.default;
exports.IconReplyAll2Line = _IconReplyAll2Line3.default;
exports.IconReplyLine = _IconReplyLine3.default;
exports.IconResetLine = _IconResetLine3.default;
exports.IconRssAddLine = _IconRssAddLine3.default;
exports.IconRssLine = _IconRssLine3.default;
exports.IconRubricDarkLine = _IconRubricDarkLine3.default;
exports.IconRubricLine = _IconRubricLine3.default;
exports.IconSearchAddressBookLine = _IconSearchAddressBookLine3.default;
exports.IconSearchLine = _IconSearchLine3.default;
exports.IconSettings2Line = _IconSettings2Line3.default;
exports.IconSettingsLine = _IconSettingsLine3.default;
exports.IconSisImportedLine = _IconSisImportedLine3.default;
exports.IconSisNotSyncedLine = _IconSisNotSyncedLine3.default;
exports.IconSisSyncedLine = _IconSisSyncedLine3.default;
exports.IconSkypeLine = _IconSkypeLine3.default;
exports.IconSpeedGraderLine = _IconSpeedGraderLine3.default;
exports.IconStandardsLine = _IconStandardsLine3.default;
exports.IconStarLightLine = _IconStarLightLine3.default;
exports.IconStarLine = _IconStarLine3.default;
exports.IconStatsLine = _IconStatsLine3.default;
exports.IconStrikethroughLine = _IconStrikethroughLine3.default;
exports.IconStudentViewLine = _IconStudentViewLine3.default;
exports.IconSyllabusLine = _IconSyllabusLine3.default;
exports.IconTableLine = _IconTableLine3.default;
exports.IconTagLine = _IconTagLine3.default;
exports.IconTargetLine = _IconTargetLine3.default;
exports.IconTextareaLine = _IconTextareaLine3.default;
exports.IconTextCenteredLine = _IconTextCenteredLine3.default;
exports.IconTextLeftLine = _IconTextLeftLine3.default;
exports.IconTextLine = _IconTextLine3.default;
exports.IconTextRightLine = _IconTextRightLine3.default;
exports.IconTimerLine = _IconTimerLine3.default;
exports.IconToggleLeftLine = _IconToggleLeftLine3.default;
exports.IconToggleRightLine = _IconToggleRightLine3.default;
exports.IconTrashLine = _IconTrashLine3.default;
exports.IconTroubleLine = _IconTroubleLine3.default;
exports.IconTwitterBoxedLine = _IconTwitterBoxedLine3.default;
exports.IconTwitterLine = _IconTwitterLine3.default;
exports.IconUnlockLine = _IconUnlockLine3.default;
exports.IconUnmutedLine = _IconUnmutedLine3.default;
exports.IconUnpublishedLine = _IconUnpublishedLine3.default;
exports.IconUnpublishLine = _IconUnpublishLine3.default;
exports.IconUpdownLine = _IconUpdownLine3.default;
exports.IconUploadLine = _IconUploadLine3.default;
exports.IconUserAddLine = _IconUserAddLine3.default;
exports.IconUserLine = _IconUserLine3.default;
exports.IconVideoLine = _IconVideoLine3.default;
exports.IconWarningLine = _IconWarningLine3.default;
exports.IconWindowsLine = _IconWindowsLine3.default;
exports.IconWordpressLine = _IconWordpressLine3.default;
exports.IconXLine = _IconXLine3.default;
exports.IconZippedLine = _IconZippedLine3.default;
exports.IconZoomInLine = _IconZoomInLine3.default;
exports.IconZoomOutLine = _IconZoomOutLine3.default;
exports.IconAddressBookSolid = _IconAddressBookSolid3.default;
exports.IconAddSolid = _IconAddSolid3.default;
exports.IconAlertSolid = _IconAlertSolid3.default;
exports.IconAnalyticsSolid = _IconAnalyticsSolid3.default;
exports.IconAndroidSolid = _IconAndroidSolid3.default;
exports.IconAnnouncementSolid = _IconAnnouncementSolid3.default;
exports.IconAppleSolid = _IconAppleSolid3.default;
exports.IconArrowDownSolid = _IconArrowDownSolid3.default;
exports.IconArrowLeftSolid = _IconArrowLeftSolid3.default;
exports.IconArrowOpenDownSolid = _IconArrowOpenDownSolid3.default;
exports.IconArrowOpenLeftSolid = _IconArrowOpenLeftSolid3.default;
exports.IconArrowOpenRightSolid = _IconArrowOpenRightSolid3.default;
exports.IconArrowOpenUpSolid = _IconArrowOpenUpSolid3.default;
exports.IconArrowRightSolid = _IconArrowRightSolid3.default;
exports.IconArrowUpSolid = _IconArrowUpSolid3.default;
exports.IconAssignmentSolid = _IconAssignmentSolid3.default;
exports.IconAudioSolid = _IconAudioSolid3.default;
exports.IconBookmarkSolid = _IconBookmarkSolid3.default;
exports.IconBoxSolid = _IconBoxSolid3.default;
exports.IconCalendarAddSolid = _IconCalendarAddSolid3.default;
exports.IconCalendarDaySolid = _IconCalendarDaySolid3.default;
exports.IconCalendarDaysSolid = _IconCalendarDaysSolid3.default;
exports.IconCalendarMonthSolid = _IconCalendarMonthSolid3.default;
exports.IconCalendarReservedSolid = _IconCalendarReservedSolid3.default;
exports.IconChatSolid = _IconChatSolid3.default;
exports.IconCheckDarkSolid = _IconCheckDarkSolid3.default;
exports.IconCheckMarkSolid = _IconCheckMarkSolid3.default;
exports.IconCheckPlusSolid = _IconCheckPlusSolid3.default;
exports.IconCheckSolid = _IconCheckSolid3.default;
exports.IconClockSolid = _IconClockSolid3.default;
exports.IconCloudLockSolid = _IconCloudLockSolid3.default;
exports.IconCollapseSolid = _IconCollapseSolid3.default;
exports.IconCollectionSaveSolid = _IconCollectionSaveSolid3.default;
exports.IconCollectionSolid = _IconCollectionSolid3.default;
exports.IconCommonsSolid = _IconCommonsSolid3.default;
exports.IconCompleteSolid = _IconCompleteSolid3.default;
exports.IconComposeSolid = _IconComposeSolid3.default;
exports.IconCopyCourseSolid = _IconCopyCourseSolid3.default;
exports.IconCopySolid = _IconCopySolid3.default;
exports.IconCoursesSolid = _IconCoursesSolid3.default;
exports.IconDiscussionCheckSolid = _IconDiscussionCheckSolid3.default;
exports.IconDiscussionNewSolid = _IconDiscussionNewSolid3.default;
exports.IconDiscussionReply2Solid = _IconDiscussionReply2Solid3.default;
exports.IconDiscussionReplyDarkSolid = _IconDiscussionReplyDarkSolid3.default;
exports.IconDiscussionReplySolid = _IconDiscussionReplySolid3.default;
exports.IconDiscussionSearchSolid = _IconDiscussionSearchSolid3.default;
exports.IconDiscussionSolid = _IconDiscussionSolid3.default;
exports.IconDiscussionXSolid = _IconDiscussionXSolid3.default;
exports.IconDocumentSolid = _IconDocumentSolid3.default;
exports.IconDownloadSolid = _IconDownloadSolid3.default;
exports.IconDragHandleSolid = _IconDragHandleSolid3.default;
exports.IconDropDownSolid = _IconDropDownSolid3.default;
exports.IconEditSolid = _IconEditSolid3.default;
exports.IconEducatorsSolid = _IconEducatorsSolid3.default;
exports.IconEmailSolid = _IconEmailSolid3.default;
exports.IconEmptySolid = _IconEmptySolid3.default;
exports.IconEndSolid = _IconEndSolid3.default;
exports.IconEquationSolid = _IconEquationSolid3.default;
exports.IconEquellaSolid = _IconEquellaSolid3.default;
exports.IconExpandItemsSolid = _IconExpandItemsSolid3.default;
exports.IconExpandSolid = _IconExpandSolid3.default;
exports.IconExportContentSolid = _IconExportContentSolid3.default;
exports.IconExportSolid = _IconExportSolid3.default;
exports.IconExternalLinkSolid = _IconExternalLinkSolid3.default;
exports.IconEyeSolid = _IconEyeSolid3.default;
exports.IconFacebookBoxedSolid = _IconFacebookBoxedSolid3.default;
exports.IconFacebookSolid = _IconFacebookSolid3.default;
exports.IconFilesCopyrightSolid = _IconFilesCopyrightSolid3.default;
exports.IconFilesCreativeCommonsSolid = _IconFilesCreativeCommonsSolid3.default;
exports.IconFilesFairUseSolid = _IconFilesFairUseSolid3.default;
exports.IconFilesObtainedPermissionSolid = _IconFilesObtainedPermissionSolid3.default;
exports.IconFilesPublicDomainSolid = _IconFilesPublicDomainSolid3.default;
exports.IconFilmstripSolid = _IconFilmstripSolid3.default;
exports.IconFlagSolid = _IconFlagSolid3.default;
exports.IconFolderLockedSolid = _IconFolderLockedSolid3.default;
exports.IconFolderSolid = _IconFolderSolid3.default;
exports.IconForwardSolid = _IconForwardSolid3.default;
exports.IconGithubSolid = _IconGithubSolid3.default;
exports.IconGradebookExportSolid = _IconGradebookExportSolid3.default;
exports.IconGradebookImportSolid = _IconGradebookImportSolid3.default;
exports.IconGradebookSolid = _IconGradebookSolid3.default;
exports.IconGroupDarkNewSolid = _IconGroupDarkNewSolid3.default;
exports.IconGroupNewSolid = _IconGroupNewSolid3.default;
exports.IconGroupSolid = _IconGroupSolid3.default;
exports.IconHamburgerSolid = _IconHamburgerSolid3.default;
exports.IconHeartSolid = _IconHeartSolid3.default;
exports.IconHighlighterSolid = _IconHighlighterSolid3.default;
exports.IconHomeSolid = _IconHomeSolid3.default;
exports.IconHourGlassSolid = _IconHourGlassSolid3.default;
exports.IconImageSolid = _IconImageSolid3.default;
exports.IconImportContentSolid = _IconImportContentSolid3.default;
exports.IconImportSolid = _IconImportSolid3.default;
exports.IconIndent2Solid = _IconIndent2Solid3.default;
exports.IconIndentSolid = _IconIndentSolid3.default;
exports.IconInfoSolid = _IconInfoSolid3.default;
exports.IconInstructureSolid = _IconInstructureSolid3.default;
exports.IconIntegrationsSolid = _IconIntegrationsSolid3.default;
exports.IconInvitationSolid = _IconInvitationSolid3.default;
exports.IconKeyboardShortcutsSolid = _IconKeyboardShortcutsSolid3.default;
exports.IconLikeSolid = _IconLikeSolid3.default;
exports.IconLinkedinSolid = _IconLinkedinSolid3.default;
exports.IconLinkSolid = _IconLinkSolid3.default;
exports.IconLockSolid = _IconLockSolid3.default;
exports.IconLtiSolid = _IconLtiSolid3.default;
exports.IconMarkAsReadSolid = _IconMarkAsReadSolid3.default;
exports.IconMarkerSolid = _IconMarkerSolid3.default;
exports.IconMasqueradeSolid = _IconMasqueradeSolid3.default;
exports.IconMasteryPathSolid = _IconMasteryPathSolid3.default;
exports.IconMaterialsRequiredLightSolid = _IconMaterialsRequiredLightSolid3.default;
exports.IconMaterialsRequiredSolid = _IconMaterialsRequiredSolid3.default;
exports.IconMatureLightSolid = _IconMatureLightSolid3.default;
exports.IconMatureSolid = _IconMatureSolid3.default;
exports.IconMediaSolid = _IconMediaSolid3.default;
exports.IconMessageSolid = _IconMessageSolid3.default;
exports.IconMiniArrowDownSolid = _IconMiniArrowDownSolid3.default;
exports.IconMiniArrowLeftSolid = _IconMiniArrowLeftSolid3.default;
exports.IconMiniArrowRightSolid = _IconMiniArrowRightSolid3.default;
exports.IconMiniArrowUpSolid = _IconMiniArrowUpSolid3.default;
exports.IconMinimizeSolid = _IconMinimizeSolid3.default;
exports.IconModuleSolid = _IconModuleSolid3.default;
exports.IconMoreSolid = _IconMoreSolid3.default;
exports.IconMoveDownBottomSolid = _IconMoveDownBottomSolid3.default;
exports.IconMoveDownSolid = _IconMoveDownSolid3.default;
exports.IconMoveLeftSolid = _IconMoveLeftSolid3.default;
exports.IconMoveRightSolid = _IconMoveRightSolid3.default;
exports.IconMoveUpSolid = _IconMoveUpSolid3.default;
exports.IconMoveUpTopSolid = _IconMoveUpTopSolid3.default;
exports.IconMsExcelSolid = _IconMsExcelSolid3.default;
exports.IconMsPptSolid = _IconMsPptSolid3.default;
exports.IconMsWordSolid = _IconMsWordSolid3.default;
exports.IconMutedSolid = _IconMutedSolid3.default;
exports.IconNextUnreadSolid = _IconNextUnreadSolid3.default;
exports.IconNoteDarkSolid = _IconNoteDarkSolid3.default;
exports.IconNoteLightSolid = _IconNoteLightSolid3.default;
exports.IconNotGradedSolid = _IconNotGradedSolid3.default;
exports.IconOffSolid = _IconOffSolid3.default;
exports.IconOutcomesSolid = _IconOutcomesSolid3.default;
exports.IconOutdent2Solid = _IconOutdent2Solid3.default;
exports.IconOutdentSolid = _IconOutdentSolid3.default;
exports.IconPaintSolid = _IconPaintSolid3.default;
exports.IconPaperclipSolid = _IconPaperclipSolid3.default;
exports.IconPartialSolid = _IconPartialSolid3.default;
exports.IconPdfSolid = _IconPdfSolid3.default;
exports.IconPeerGradedSolid = _IconPeerGradedSolid3.default;
exports.IconPeerReviewSolid = _IconPeerReviewSolid3.default;
exports.IconPinSolid = _IconPinSolid3.default;
exports.IconPinterestSolid = _IconPinterestSolid3.default;
exports.IconPlusSolid = _IconPlusSolid3.default;
exports.IconPostToSisSolid = _IconPostToSisSolid3.default;
exports.IconPrerequisiteSolid = _IconPrerequisiteSolid3.default;
exports.IconPrinterSolid = _IconPrinterSolid3.default;
exports.IconPublishSolid = _IconPublishSolid3.default;
exports.IconQuestionSolid = _IconQuestionSolid3.default;
exports.IconQuizSolid = _IconQuizSolid3.default;
exports.IconQuizStatsAvgSolid = _IconQuizStatsAvgSolid3.default;
exports.IconQuizStatsDeviationSolid = _IconQuizStatsDeviationSolid3.default;
exports.IconQuizStatsHighSolid = _IconQuizStatsHighSolid3.default;
exports.IconQuizStatsLowSolid = _IconQuizStatsLowSolid3.default;
exports.IconQuizStatsTimeSolid = _IconQuizStatsTimeSolid3.default;
exports.IconRefreshSolid = _IconRefreshSolid3.default;
exports.IconRemoveBookmarkSolid = _IconRemoveBookmarkSolid3.default;
exports.IconRemoveFromCollectionSolid = _IconRemoveFromCollectionSolid3.default;
exports.IconRepliedSolid = _IconRepliedSolid3.default;
exports.IconReply2Solid = _IconReply2Solid3.default;
exports.IconReplyAll2Solid = _IconReplyAll2Solid3.default;
exports.IconReplySolid = _IconReplySolid3.default;
exports.IconResetSolid = _IconResetSolid3.default;
exports.IconRssAddSolid = _IconRssAddSolid3.default;
exports.IconRssSolid = _IconRssSolid3.default;
exports.IconRubricDarkSolid = _IconRubricDarkSolid3.default;
exports.IconRubricSolid = _IconRubricSolid3.default;
exports.IconSearchAddressBookSolid = _IconSearchAddressBookSolid3.default;
exports.IconSearchSolid = _IconSearchSolid3.default;
exports.IconSettings2Solid = _IconSettings2Solid3.default;
exports.IconSettingsSolid = _IconSettingsSolid3.default;
exports.IconSisImportedSolid = _IconSisImportedSolid3.default;
exports.IconSisNotSyncedSolid = _IconSisNotSyncedSolid3.default;
exports.IconSisSyncedSolid = _IconSisSyncedSolid3.default;
exports.IconSkypeSolid = _IconSkypeSolid3.default;
exports.IconSpeedGraderSolid = _IconSpeedGraderSolid3.default;
exports.IconStandardsSolid = _IconStandardsSolid3.default;
exports.IconStarLightSolid = _IconStarLightSolid3.default;
exports.IconStarSolid = _IconStarSolid3.default;
exports.IconStatsSolid = _IconStatsSolid3.default;
exports.IconStrikethroughSolid = _IconStrikethroughSolid3.default;
exports.IconStudentViewSolid = _IconStudentViewSolid3.default;
exports.IconSyllabusSolid = _IconSyllabusSolid3.default;
exports.IconTableSolid = _IconTableSolid3.default;
exports.IconTagSolid = _IconTagSolid3.default;
exports.IconTargetSolid = _IconTargetSolid3.default;
exports.IconTextareaSolid = _IconTextareaSolid3.default;
exports.IconTextCenteredSolid = _IconTextCenteredSolid3.default;
exports.IconTextLeftSolid = _IconTextLeftSolid3.default;
exports.IconTextRightSolid = _IconTextRightSolid3.default;
exports.IconTextSolid = _IconTextSolid3.default;
exports.IconTimerSolid = _IconTimerSolid3.default;
exports.IconToggleLeftSolid = _IconToggleLeftSolid3.default;
exports.IconToggleRightSolid = _IconToggleRightSolid3.default;
exports.IconTrashSolid = _IconTrashSolid3.default;
exports.IconTroubleSolid = _IconTroubleSolid3.default;
exports.IconTwitterBoxedSolid = _IconTwitterBoxedSolid3.default;
exports.IconTwitterSolid = _IconTwitterSolid3.default;
exports.IconUnlockSolid = _IconUnlockSolid3.default;
exports.IconUnmutedSolid = _IconUnmutedSolid3.default;
exports.IconUnpublishedSolid = _IconUnpublishedSolid3.default;
exports.IconUnpublishSolid = _IconUnpublishSolid3.default;
exports.IconUpdownSolid = _IconUpdownSolid3.default;
exports.IconUploadSolid = _IconUploadSolid3.default;
exports.IconUserAddSolid = _IconUserAddSolid3.default;
exports.IconUserSolid = _IconUserSolid3.default;
exports.IconVideoSolid = _IconVideoSolid3.default;
exports.IconWarningSolid = _IconWarningSolid3.default;
exports.IconWindowsSolid = _IconWindowsSolid3.default;
exports.IconWordpressSolid = _IconWordpressSolid3.default;
exports.IconXSolid = _IconXSolid3.default;
exports.IconZippedSolid = _IconZippedSolid3.default;
exports.IconZoomInSolid = _IconZoomInSolid3.default;
exports.IconZoomOutSolid = _IconZoomOutSolid3.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAddLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAddLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M962 1600c-352.88 0-640-287.12-640-640s287.12-640 640-640 640 287.12 640 640-287.12 640-640 640m0-1440c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800m80 400H882v320H562v160h320v320h160v-320h320V880h-320V560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAddressBookLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddressBookLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAddressBookLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1280 480V160H320v320c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160h-320zM480 320h240v160H480V320zm400 0h240v160H880V320zM320 640h1280v960H320V640z"/>\n        <path d="M751 1120c-106 5.333-191 98.133-191 213.333V1440h800v-106.667c0-115.2-84-208-191-213.333-54 65.067-128 106.667-209 106.667s-155-41.6-209-106.667zM960 800c-88 0-160 71.68-160 160s72 160 160 160 160-71.68 160-160-72-160-160-160z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAlertLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAlertLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAlertLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 240c-265.12 0-480 214.88-480 480v80c0 88.4-71.6 160-160 160H160v400h1600V960h-160c-88.4 0-160-71.6-160-160v-80c0-265.12-214.88-480-480-480m0 160c176.48 0 320 143.52 320 320v80c0 176.48 143.52 320 320 320v80H320v-80c176.48 0 320-143.52 320-320v-80c0-176.48 143.52-320 320-320zm0 1309.464c151.28 0 273.76-119.76 280-269.44H680c6.24 149.68 128.72 269.44 280 269.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAnalyticsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAnalyticsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAnalyticsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.983 764.832v-682.8c-182.804 16.48-348.967 89.52-482.33 200.48l482.33 482.32zM1039.985 82v956c0 21.2-8.4 41.52-23.44 56.56l-574.25 574.16C587.657 1774.8 766.3 1838 959.984 1838 1445.993 1838 1840 1444 1840 958c0-459.04-351.526-835.52-800.015-876zm160.003 196.8c282.966 98.48 480.01 365.44 480.01 679.2 0 396.96-322.967 720-720.014 720-87.842 0-173.603-15.84-254.165-46.48l423.848-423.84c45.36-45.36 70.321-105.6 70.321-169.68V278.8zM249.763 440.88C143.601 586.08 80 764.24 80 958c0 214.16 76.641 410.32 203.844 562.96L806.894 998l-557.13-557.12zm36.96 263.28L580.57 998l-270.165 270.16c-46-96.24-70.401-202.32-70.401-310.16 0-87.68 15.92-173.28 46.72-253.84z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAndroidLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAndroidLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAndroidLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1203.084 1354.053H715.947V948.106h487.137v405.947zm324.757-568.326H391.19c-44.816 0-81.189 36.373-81.189 81.19v568.325h162.379V948.106h81.19v487.136c0 44.817 36.372 81.19 81.189 81.19h81.19V1760h162.378v-243.568h162.379V1760h162.379v-243.568h81.19c44.816 0 81.189-36.373 81.189-81.19V948.106h81.189v487.136h162.379V866.916c0-44.816-36.373-81.19-81.19-81.19zM553.568 623.348c0 44.817 36.373 81.19 81.19 81.19h649.515c44.817 0 81.19-36.373 81.19-81.19 0-82.65-25.088-159.294-67.631-223.514l125.031-125.032L1308.062 160 1183.03 285.032c-64.22-42.462-140.864-67.631-223.515-67.631-82.65 0-159.293 25.169-223.514 67.63L610.969 160 496.167 274.802 621.2 399.834c-42.543 64.22-67.63 140.863-67.63 223.514zM959.515 379.78c105.871 0 196.154 67.874 229.685 162.379H729.83c33.532-94.505 123.814-162.38 229.685-162.38" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAnnouncementLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAnnouncementLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAnnouncementLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1568.992 1221.373l-827.163-343.75c-42.483-16.96-88.325-18.8-106.086-18.8H351.008V689.947h284.735c17.761 0 63.603-1.84 108.086-19.6l825.163-342.951v893.977zM1648.996 159h-91.605L682.386 522.59c-12.241 4.88-31.922 7.36-46.643 7.36H271.004c-44.162 0-80.004 35.84-80.004 79.999V938.82c0 44.238 35.842 79.998 80.004 79.998h152.328l253.453 665.903C695.026 1732.56 740.63 1762 788.951 1762c14.24 0 28.642-2.48 42.722-7.84 61.924-23.6 93.045-92.877 69.444-154.876l-218.091-572.786 874.365 363.351h91.605c44.162 0 80.004-35.839 80.004-79.998V238.998c0-44.159-35.842-79.998-80.004-79.998z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAppleLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAppleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAppleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1280.125 504.302c-126.642 0-244.163 82-308.964 82-68.401 0-173.923-76.56-285.924-76.56h-4.48c-149.362 2.24-287.124 86.961-364.165 220.723-155.042 269.284-39.68 668.249 111.681 886.812C500.834 1722.238 587.235 1840 700.037 1840c2 0 4 0 6-.08 111.442-4.4 153.602-72.081 288.324-72.081 132.642 0 171.442 69.921 285.284 69.921 1.76 0 3.52 0 5.28-.08 119.922-2.16 195.923-108.882 269.364-216.163 84.88-124.082 119.921-244.163 121.921-250.323-2.64-1.28-233.923-89.762-236.243-356.085v.08c-2.16-222.963 181.843-329.765 190.003-335.125-103.362-151.282-264.484-172.002-321.765-174.402-9.36-.88-18.8-1.36-28.08-1.36m0 160.002c3.92 0 7.92.16 11.92.56l4.8.48 4.8.24c19.2.8 52.72 4.48 89.201 19.12-60 77.921-112.241 187.443-110.881 331.845 1.68 190.802 91.361 331.124 197.843 419.285-14.64 29.6-33.04 62.401-55.521 95.282-39.76 58.08-99.842 145.842-142.642 146.642-20.56 0-33.36-5.12-67.441-19.84-48.88-21.12-115.842-50.081-217.843-50.081-104.801 0-173.922 29.44-224.403 50.88-33.2 14.16-48.72 20.48-69.921 21.28-12.64 0-47.68-20-140.242-153.841-135.682-195.923-214.243-525.367-104.481-715.93 49.12-85.281 136.402-139.122 229.923-140.482 32.24 0 75.92 17.28 118.081 34 52.721 20.96 107.282 42.561 167.843 42.561 57.44 0 109.201-20.4 164.082-42 47.6-18.72 101.441-40.001 144.882-40.001zm-61.785-303.26c61.52-74.561 103.041-177.923 91.601-281.044-88.48 3.6-195.762 58.96-259.203 133.282-56.961 66-106.802 171.202-93.522 272.244 98.882 7.68 199.683-50.161 261.204-124.482h-.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowDownLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowDownLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowDownLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1642.354 360H277.876c-110.96 0-150.88 73.445-88.16 165.531l657.68 965.584c31.2 45.843 71.919 68.885 112.799 68.885 40.64 0 81.36-22.882 112.64-68.885l657.679-965.584c62.24-91.446 22.72-165.531-88.16-165.531m-101.68 160.01l-580.559 852.457-580.56-852.456h1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowLeftLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowLeftLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowLeftLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1559.918 1642.354V277.876c0-110.96-73.44-150.88-165.52-88.16L428.88 847.396c-45.84 31.2-68.88 71.919-68.88 112.799 0 40.64 22.88 81.36 68.88 112.64l965.518 657.679c91.44 62.24 165.52 22.72 165.52-88.16m-160-101.68L547.52 960.115l852.398-580.56v1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenDownLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenDownLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenDownLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1056.43L440.043 536.402c-64.444-64.453-168.117-64.45-232.062-.497-64.39 64.4-63.722 167.867.497 232.095l616.513 616.6c37.041 37.046 87.042 52.798 135.009 47.352 47.967 5.446 97.968-10.306 135.009-47.352l616.513-616.6c64.22-64.228 64.887-167.695.497-232.095-63.945-63.953-167.618-63.956-232.062.497L960 1056.431z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenLeftLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenLeftLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenLeftLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M863.702 960l520.212-519.957c64.477-64.444 64.474-168.117.498-232.062-64.423-64.39-167.926-63.722-232.177.497L535.42 824.991c-37.06 37.041-52.817 87.042-47.37 135.009-5.447 47.967 10.31 97.968 47.37 135.009l616.816 616.513c64.251 64.22 167.754 64.887 232.177.497 63.976-63.945 63.979-167.618-.498-232.062L863.702 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenRightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1050.631 960L530.42 440.043c-64.477-64.444-64.474-168.117-.498-232.062 64.423-64.39 167.926-63.722 232.177.497l616.816 616.513c37.06 37.041 52.817 87.042 47.37 135.009 5.447 47.967-10.31 97.968-47.37 135.009l-616.816 616.513c-64.251 64.22-167.754 64.887-232.177.497-63.976-63.945-63.979-167.618.498-232.062L1050.63 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenUpLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenUpLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenUpLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 863.702l-519.957 520.212c-64.444 64.477-168.117 64.474-232.062.498-64.39-64.423-63.722-167.926.497-232.177L824.991 535.42c37.041-37.06 87.042-52.817 135.009-47.37 47.967-5.447 97.968 10.31 135.009 47.37l616.513 616.816c64.22 64.251 64.887 167.754.497 232.177-63.945 63.976-167.618 63.979-232.062-.498L960 863.702z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowRightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M360 1642.354V277.876c0-110.96 73.445-150.88 165.531-88.16l965.584 657.68c45.843 31.2 68.885 71.919 68.885 112.799 0 40.64-22.882 81.36-68.885 112.64l-965.584 657.679c-91.446 62.24-165.531 22.72-165.531-88.16m160.01-101.68l852.457-580.559-852.456-580.56v1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowUpLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowUpLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowUpLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1642.354 1560H277.876c-110.96 0-150.88-73.445-88.16-165.531l657.68-965.584C878.595 383.042 919.314 360 960.194 360c40.64 0 81.36 22.882 112.64 68.885l657.679 965.584c62.24 91.446 22.72 165.531-88.16 165.531m-101.68-160.01L960.115 547.532l-580.56 852.456h1161.12" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAssignmentLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAssignmentLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAssignmentLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1647.727 1388v76.364c0 42.152-34.287 76.363-76.363 76.363-42.077 0-76.364-34.21-76.364-76.363V1388h152.727zm-76.818 282.865c126.306 0 229.091-102.785 229.091-229.09V578.636L1570.91 235l-229.092 343.636v863.139c0 126.305 102.786 229.09 229.091 229.09zM1036.364 311.364H272.727C188.498 311.364 120 379.862 120 464.09v1069.09c0 84.23 68.498 152.728 152.727 152.728h763.637c84.229 0 152.727-68.498 152.727-152.727V464.09c0-84.23-68.498-152.727-152.727-152.727zM272.727 1533.182V464.09h763.637l.152 1069.09H272.727zm152.728-763.637h458.181V616.818H425.455v152.727zm0 305.455h458.181V922.273H425.455V1075zm0 305.455h305.454v-152.728H425.455v152.728zm1069.09-766.728l76.364-114.545 76.364 114.545v587.848h-152.728V613.727z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAudioLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAudioLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAudioLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 880c-176.48 0-320-143.52-320-320 0-176.4 143.52-320 320-320s320 143.6 320 320c0 176.48-143.52 320-320 320zm93.52 727.2c-3.76 41.52-38 72.8-79.6 72.8h-27.84c-41.68 0-75.92-31.28-79.68-72.72l-53.6-590.56c46.4 14.96 95.84 23.28 147.2 23.28 51.36 0 100.8-8.32 147.2-23.28l-53.68 590.48zM1440 560c0-264.72-215.28-480-480-480S480 295.28 480 560c0 143.28 63.36 271.68 163.28 359.76l63.76 701.92C718.32 1746.16 821.12 1840 946.08 1840h27.84c124.88 0 227.6-93.84 238.96-218.32l63.84-701.92C1376.56 831.68 1440 703.28 1440 560zm-560.04 640c0 44.24 35.84 80 80 80s80-35.76 80-80c0-44.16-35.84-80-80-80s-80 35.84-80 80" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconBookmarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBookmarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconBookmarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1520 720h-320V480c0-88.24 71.76-160 160-160s160 71.76 160 160v240zm-480-240v1006.88l-263.44-263.44c-15.6-15.6-36.08-23.44-56.56-23.44-20.48 0-40.96 7.84-56.56 23.44L400 1486.88V480c0-88.24 71.76-160 160-160h522.96C1055.6 367.12 1040 421.76 1040 480zm320-320H560c-176.48 0-320 143.52-320 320v1200c0 32.32 19.52 61.52 49.36 73.92 29.92 12.32 64.32 5.44 87.2-17.36L720 1393.12l343.44 343.44A80.027 80.027 0 0 0 1120 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92V880h400c44.16 0 80-35.84 80-80V480c0-176.48-143.52-320-320-320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconBoxLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBoxLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconBoxLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M400 0H80C35.84 0 0 35.84 0 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zM400 1440H80c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm-1680-80h160V560H160v800zM560 320h800V160H560v160zm1040 1040h160V560h-160v800zM560 1760h800v-160H560v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarAddLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarAddLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarAddLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h640v-160H320V800h1280v280h160V480c0-88.4-71.6-160-160-160zm-80 960h-160v240h-240v160h240v240h160v-240h240v-160h-240v-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarDayLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarDayLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarDayLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160zM320 720h1280v1040H320V720z"/>\n        <path d="M1173.4 1051.2c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4L978.2 1428.8c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H817.4c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarDaysLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarDaysLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarDaysLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160zM320 720h1280v1040H320V720z"/>\n        <path d="M1173.4 1051.2c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4L978.2 1428.8c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H817.4c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarMonthLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarMonthLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarMonthLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160zM320 720h1280v1040H320V720z"/>\n        <path d="M880 1240h240v-240H880zM1280 1240h240v-240h-240zM880 1640h240v-240H880zM480 1640h240v-240H480zM1280 1640h240v-240h-240z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarReservedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarReservedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarReservedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M789.995 800h959.993V480c0-88.4-71.6-160-159.999-160H1469.99V120c0-66.32-53.76-120-120-120-66.239 0-119.998 53.68-119.998 120v200H669.996V120c0-66.32-53.76-120-119.999-120-66.24 0-120 53.68-120 120v200H310C221.599 320 150 391.6 150 480v1280c0 88.4 71.6 160 159.999 160h479.996v-160H310V800h479.996zm946.161 311.68c-41.52-36.56-104.72-32.64-141.199 8.8l-333.597 378.08-164.96-146.64c-41.119-36.64-104.398-33.12-141.198 8.32-36.64 41.28-32.96 104.48 8.4 141.2l239.998 213.28A99.732 99.732 0 0 0 1270 1740c2 0 4.08-.08 6.08-.16 26.48-1.6 51.36-13.76 68.879-33.68l399.997-453.28c36.56-41.44 32.64-104.64-8.8-141.2z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconChatLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconChatLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconChatLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1919.84 1760H1250.4c-286.72 0-520-215.28-520-480s233.28-480 520-480 520 215.28 520 480c0 65.76-14.8 131.04-43.12 191.12L1919.84 1760zM1250.4 960c-198.48 0-360 143.6-360 320s161.52 320 360 320h370.56l-81.92-122.96 27.04-43.68c29.44-47.6 44.32-99.12 44.32-153.36 0-176.4-161.52-320-360-320zm-680 400H57.28l302-301.92C287.84 956.72 250.4 841.2 250.4 720c0-352.88 323.04-640 720-640 357.44 0 664 236.88 713.12 551.12l-158.08 24.72C1488.4 418.72 1249.76 240 970.4 240c-308.8 0-560 215.28-560 480 0 105.6 40 206.24 115.52 290.88l50.4 56.4L443.52 1200H570.4v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckDarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckDarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckDarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M937.152 1320c-31.68 0-62.24-12.56-84.88-35.12l-377.12-377.12c-46.88-46.88-46.88-122.8 0-169.68 46.8-46.88 122.8-46.88 169.68 0l277.04 276.88 546.16-764.72c38.56-53.84 113.44-66.32 167.44-27.92 53.92 38.56 66.4 113.44 27.92 167.44l-628.56 880c-20.56 28.64-52.64 46.96-87.76 49.84-3.28.24-6.64.4-9.92.4zM1600 880v720H320V320h891.44V160H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V880h-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M799.967 1680c-42.24 0-83.039-16.72-113.118-46.88l-479.99-479.993c-62.479-62.48-62.479-163.758 0-226.237 62.479-62.48 163.757-62.48 226.235 0l346.473 346.395 690.146-966.227c51.359-72 151.437-88.56 223.195-37.28 71.999 51.44 88.638 151.358 37.28 223.197L930.203 1612.961c-27.36 38.32-70.159 62.56-117.038 66.479-4.48.4-8.8.56-13.2.56" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckMarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckMarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckMarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M937.152 1320c-31.68 0-62.24-12.56-84.88-35.12l-377.12-377.12c-46.88-46.88-46.88-122.8 0-169.68 46.8-46.88 122.8-46.88 169.68 0l277.04 276.88 546.16-764.72c38.56-53.84 113.44-66.32 167.44-27.92 53.92 38.56 66.4 113.44 27.92 167.44l-628.56 880c-20.56 28.64-52.64 46.96-87.76 49.84-3.28.24-6.64.4-9.92.4zM1600 880v720H320V320h891.44V160H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V880h-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckPlusLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckPlusLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckPlusLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1840 1400.004h-240.003v-239.997h-160.002v239.997h-240.002v159.999h240.002V1800h160.002v-239.997H1840v-159.999zM719.987 1560.003c-42.24 0-83.04-16.72-113.121-46.88l-480.005-479.995c-62.481-62.479-62.481-163.758 0-226.237 62.48-62.48 163.761-62.48 226.242 0l346.484 346.396 690.168-966.23c51.36-71.998 151.442-88.558 223.202-37.279 72.001 51.44 88.641 151.359 37.28 223.198L850.23 1492.963c-27.36 38.32-70.161 62.56-117.042 66.48-4.48.4-8.8.56-13.2.56z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconClockLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconClockLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconClockLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M962 160c441.067 0 799.911 358.933 799.911 800S1403.067 1760 962 1760c-441.156 0-800-358.933-800-800s358.844-800 800-800zm0 160c-352.757 0-640 287.265-640 640s287.243 640 640 640c352.679 0 639.911-287.276 639.911-640S1314.68 320 962 320zm239.067 996.907L864.222 1092.31v-541.2h195.556V987.69l249.724 166.515-108.435 162.703z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCloudLockLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCloudLockLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCloudLockLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040.016 853.009c61.712 0 112 50.232 112 112h-224c0-61.768 50.288-112 112-112m0-112c-123.536 0-224 100.464-224 224-30.968 0-56 25.032-56 56v312c0 30.968 25.032 56 56 56h448c30.968 0 56-25.032 56-56v-312c0-30.968-25.032-56-56-56 0-123.536-100.464-224-224-224m573.817 9.142c.43-7.345.586-14.534.586-21.684 0-257.782-210.312-467.47-468.915-467.47-187.496 0-354.597 112.326-428.478 277.943-11.84-1.212-23.638-1.758-35.476-1.758-199.373 0-363.036 155.614-375.226 351.51C191.38 966.207 120 1096.7 120 1236.96c0 209.96 155.732 390.62 362.177 420.274l802.454.976c284.155 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37m-329.202 712.712H503.705c-107.833-18.637-188.356-114.631-188.356-225.902 0-87.125 51.885-167.258 132.095-204.296l64.739-29.85-10.002-80.522c-.47-3.4-1.172-6.72-1.25-10.12 0-99.08 81.069-179.642 180.619-179.642 21.41 0 43.329 4.259 65.13 12.698l107.754 41.727 23.207-113.186c25.786-126 138.464-217.423 267.863-217.423 150.887 0 273.566 122.054 273.566 272.12 0 14.69-1.602 30.28-5.001 48.916l-11.955 64.505 55.245 35.475c92.243 59.152 147.292 159.014 147.292 267.159 0 175.54-143.542 318.34-320.02 318.34" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCollapseLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCollapseLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCollapseLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M585.44 1303.44l113.12 113.12L882 1233.12V1760h160v-526.88l183.44 183.44 113.12-113.12L962 926.88l-376.56 376.56zM482 800h960V640H482v160zm0-240h960V400H482v160zm0-240h960V160H482v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCollectionLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCollectionLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCollectionLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 920h-400c0-88.16-71.76-160-160-160H800c-88.24 0-160 71.84-160 160H240V760c0-44.16 35.92-80 80-80h1280c44.08 0 80 35.84 80 80v160zm-880 160V920h320l-.24 160H800zm800 400c0 44.16-35.92 80-80 80H400c-44.08 0-80-35.84-80-80v-400h320c0 88.24 71.76 160 160 160h320c88.24 0 160-71.76 160-160h320v400zM720 360h480v160H720V360zm880 160h-240V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H320C187.68 520 80 627.68 80 760v320h80v400c0 132.32 107.68 240 240 240h1120c132.32 0 240-107.68 240-240v-400h80V760c0-132.32-107.68-240-240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCollectionSaveLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCollectionSaveLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCollectionSaveLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1336.619 776.56l-113.126-113.12-183.449 183.44V160H880.036v686.88l-183.45-183.44-113.125 113.12L960.04 1153.2l376.579-376.64zM1360.06 1040v320H560.02v-320H160v720h1600v-720h-399.94zm-800.04 480h960.048v-320h80.004v400H319.928v-400h80.004v320H560.02z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCommonsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCommonsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCommonsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M670.22 960.444c0-41.213 32.145-73.367 73.32-73.367h621.185V679.04l318.613 281.404-318.613 281.404v-208.037H743.54c-41.176 0-73.32-32.154-73.32-73.367zm537.838-628.799V730.41H743.54c-127.711 0-229.987 102.307-229.987 230.034 0 127.727 102.276 230.034 229.987 230.034h464.517v398.764L1920 960.444l-711.942-628.799z"/>\n        <path d="M156.667 960.444c0-307.63 251.943-557.779 561.024-557.779h237.037v96.744H719.414c-256.538 0-466.084 207.04-466.084 461.035 0 254.212 208.043 461.035 464.36 461.035h235.315v96.744H717.69c-309.08 0-561.024-250.151-561.024-557.779zm561.024 304.368c-170 0-307.694-136.888-307.694-304.368 0-167.045 138.985-304.368 309.417-304.368h391.98V245.998H717.692C322.335 245.998 0 566.038 0 960.444c0 394.404 322.336 714.446 717.69 714.446h391.98v-410.078H717.69z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCompleteLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCompleteLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCompleteLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m-67.224-405.824l-323.52-323.44 141.44-141.44 156.56 156.56 331.36-463.92 162.72 116.16-468.56 656.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconComposeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconComposeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconComposeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1480.022 1760H360.002C271.763 1760 200 1688.239 200 1599.997V479.977c0-88.16 71.761-160.002 160.003-160.002h560.01v160.003h-560.01v1120.02h1120.02V879.984h160.002v720.012c0 88.242-71.761 160.003-160.003 160.003zM824.62 829.16l226.244 226.244-282.805 56.56 56.56-282.804zm848.535-396.055c62.48-62.481 62.48-163.763 0-226.244-62.481-62.481-163.763-62.481-226.244 0L937.78 715.99l226.245 226.244 509.129-509.13z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCopyCourseLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCopyCourseLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCopyCourseLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 400v-80h-640v160h480v1440h160V400zM400 1760H0V0h1440v160H160v1600h240v-480h160v480h240-240v160H400v-160zm160 0h960v160H560v-160zM743.44 696.56L846.88 800H560V400H400v480c0 44.16 35.84 80 80 80h366.88l-103.44 103.44 113.12 113.12L1153.12 880 856.56 583.44 743.44 696.56z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCopyLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCopyLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCopyLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M480 1920h1280V319.987H480V1920zm160-160.001h960.08V479.988H640v1280.01zm800-719.99h-240V800.007h-160v240.002H800v160.001h240v240.002h160V1200.01h240v-160.001zM160 0v1600.013h160V160.001h1040V0H160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCoursesLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCoursesLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCoursesLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 1600h-320V480h320v1120zM800 640h320v960H800V640zM320 320h320v1280H320V320zm1360 0h-480c-44.16 0-80 35.84-80 80v80H800V240c0-44.16-35.84-80-80-80H240c-44.16 0-80 35.84-80 80v1440c0 44.16 35.84 80 80 80h1440c44.16 0 80-35.84 80-80V400c0-44.16-35.84-80-80-80zM400 1040h160V400H400v640zm480 160h160V720H880v480zm640-640h-160v560h160V560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionCheckLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionCheckLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionCheckLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1444.818 1680H320.602C232.03 1680 160 1607.598 160 1518.57V549.987c0-88.948 72.03-161.43 160.602-161.43h803.012v161.43H320.602v968.583h1124.216v-403.577h160.602v403.577c0 89.028-72.03 161.43-160.602 161.43zm-558.655-338.156L490.52 944.24l141.973-142.704 246.765 248.038L1611.443 240 1760 375.682l-873.837 966.162z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M383.453 1519.988h616.554c352.877 0 639.994-251.197 639.994-559.995 0-308.797-287.117-559.994-639.994-559.994-352.876 0-639.994 251.197-639.994 559.994 0 122.96 45.44 239.998 131.359 338.557 26.8 30.88 26.16 77.04-1.68 107.04l-106.239 114.398zm616.554 159.999H200.015c-31.84 0-60.64-18.88-73.36-48-12.72-29.2-6.88-63.12 14.72-86.399l184.479-198.718c-82.56-115.52-125.84-248.078-125.84-386.877C200.015 563.037 558.892 240 1000.008 240 1441.123 240 1800 563.037 1800 959.993c0 396.957-358.877 719.994-799.993 719.994z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionNewLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionNewLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionNewLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1682 880h-640V240H882v640H242v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionReply2Line;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionReply2Line(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionReply2Line',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.94 160c-20.8 0-41.2 8.16-56.48 23.44l-720 720c-31.28 31.28-31.28 81.84 0 113.12l720 720a80.027 80.027 0 0 0 56.56 23.44c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92v-240h800.72c43.2 0 79.28-35.84 79.28-80.16v-799.6c0-43.76-35.44-80.24-79.28-80.24H960.02V240c0-32.32-19.52-61.52-49.36-73.92-10-4.08-20.4-6.08-30.72-6.08m-79.92 273.2V640h880v640h-880v206.88L273.22 960l526.8-526.8" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionReplyDarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionReplyDarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionReplyDarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M240 1200c132.548 0 240-107.452 240-240S372.548 720 240 720 0 827.452 0 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionReplyLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionReplyLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionReplyLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M240 1200c132.548 0 240-107.452 240-240S372.548 720 240 720 0 827.452 0 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionSearchLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionSearchLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionSearchLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1795.266 1567.007l-316.747-316.747c78.807-121.61 121.45-263.143 121.45-411.315C1599.89 419.549 1260.42 80 840.945 80 421.549 80 82 419.469 82 838.945c0 419.315 339.469 758.944 758.945 758.944 148.252 0 289.784-42.643 411.235-121.37l316.667 316.667c62.725 62.885 163.934 62.725 226.339.08 62.405-62.405 62.405-163.934.08-226.26zM242.014 838.945c0-330.989 267.862-598.851 598.93-598.851 330.829 0 598.932 267.782 598.932 598.85 0 159.934-62.326 310.347-175.535 423.397-113.13 113.21-263.463 175.455-423.476 175.455-330.749.08-598.851-267.863-598.851-598.851z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionXLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionXLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionXLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m376.56-1063.48L1223.44 583.4 960 846.84 696.56 583.4 583.44 696.52l263.44 263.44-263.44 263.44 113.12 113.12L960 1073.16l263.44 263.36 113.12-113.12-263.44-263.44 263.44-263.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDocumentLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDocumentLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDocumentLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440.08 1600H480V320h640v320h320l.08 960zM1233.12 160H480c-88.24 0-160 71.84-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V526.88L1233.12 160zM1280 880H640v160h640V880zM960 560H640v160h320V560zm-320 800h640v-160H640v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDownloadLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDownloadLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDownloadLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1284.63 1462.864H503.705c-107.832-18.636-188.355-114.63-188.355-225.901 0-87.126 51.884-167.258 132.095-204.296l64.738-29.85-10.002-80.522c-.468-3.4-1.172-6.72-1.25-10.12 0-99.08 81.07-179.642 180.62-179.642 21.41 0 43.328 4.259 65.13 12.698l107.753 41.726 23.208-113.185c25.786-126 138.463-217.423 267.862-217.423 150.888 0 273.567 122.054 273.567 272.12 0 14.691-1.602 30.28-5.001 48.916l-11.956 64.504 55.245 35.476c92.244 59.151 147.293 159.014 147.293 267.159 0 175.54-143.542 318.34-320.02 318.34m329.202-712.71c.43-7.346.586-14.534.586-21.684 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C191.38 966.21 120 1096.703 120 1236.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37m-237.257 334.299l-376.56 376.56-376.56-376.56 113.12-113.12 183.44 183.44v-446.96h160v446.96l183.44-183.44 113.12 113.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDragHandleLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDragHandleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDragHandleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M642 480h240V240H642v240zm400 0h240V240h-240v240zM642 880h240V640H642v240zm400 0h240V640h-240v240zm-400 400h240v-240H642v240zm400 0h240v-240h-240v240zm-400 400h240v-240H642v240zm400 0h240v-240h-240v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDropDownLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDropDownLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDropDownLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.754 0-640 287.246-640 640s287.246 640 640 640 640-287.246 640-640-287.246-640-640-640zm0-160c441.12 0 800 358.88 800 800s-358.88 800-800 800-800-358.88-800-800 358.88-800 800-800zm0 1313.12l-376.56-376.56 113.12-113.12L880 1166.88V480h160v686.88l183.44-183.44 113.12 113.12L960 1473.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEditLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEditLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEditLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1514.299 619.918l-214.24-214.24 214.24-214.238 214.24 214.239-214.24 214.24zm-856.883 856.877l-214.24-214.239 749.762-749.758 214.24 214.24-749.762 749.757zm-413.041 198.8l106.8-290.8 184 184-290.8 106.8zM1835.66 298.559L1621.42 84.4c-59.201-59.199-155.041-59.199-214.241 0L259.655 1231.837c-20.08 20.08-34.08 45.44-40.48 73.04l-177.2 482.318c-6.24 27.28 2.8 53.12 20.24 70.56 17.52 17.44 43.36 26.56 70.64 20.24l482.241-177.2c27.68-6.4 52.96-20.4 73.04-40.48L1835.66 512.799c59.12-59.12 59.12-155.039 0-214.239z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEducatorsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEducatorsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEducatorsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1147.84 1598c-38.32-30.96-109.6-78-187.84-78-78.32 0-149.52 47.04-187.84 78C589.52 1571.68 400 1294 400 1040c0-171.36 126.8-370.56 290.24-370.56 70.32 0 142.08 36.08 213.2 107.12 31.28 31.28 81.84 31.28 113.12 0 71.12-71.04 142.88-107.12 213.12-107.12 163.52 0 290.32 199.2 290.32 370.56 0 254-189.52 531.68-372.16 558m81.84-1088.56c-63.92 0-127.84 18.24-189.68 51.52V400c0-132.32-107.68-240-240-240H640v160h160c44.08 0 80 36 80 80v160.96c-61.84-33.28-125.76-51.52-189.76-51.52C424.88 509.44 240 789.04 240 1040c0 363.36 277.36 720 560 720 20.96 0 41.36-8.48 56.32-23.2 23.28-22.88 72.32-56.8 103.68-56.8 31.28 0 80.24 33.84 103.6 56.72 14.96 14.96 35.28 23.28 56.4 23.28 282.64 0 560-356.64 560-720 0-250.96-184.96-530.56-450.32-530.56zm210.312-349.408s-160 0-240 80-80 240-80 240 160 0 240-80 80-240 80-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEmailLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEmailLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEmailLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 1320V694.32l597.6 373.52A80.132 80.132 0 0 0 960 1080c14.72 0 29.44-4.08 42.4-12.16L1600 694.32l.08 625.68H320zm1129.04-720L960 905.68 470.96 600h978.08zM1600 440H320c-88.24 0-160 71.76-160 160v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160V600c0-88.24-71.76-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEmptyLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEmptyLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEmptyLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1559.972c-331.318 0-599.972-268.542-599.972-599.916 0-331.374 268.654-599.972 599.972-599.972S1559.972 628.626 1559.972 960c0 331.374-268.654 599.916-599.972 599.916v.056zM960 160c-441.738 0-800 358.318-800 800s358.318 800 800 800 800-358.318 800-800c0-441.738-358.318-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEndLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEndLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEndLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m376.56-1063.48L1223.44 583.4 960 846.84 696.56 583.4 583.44 696.52l263.44 263.44-263.44 263.44 113.12 113.12L960 1073.16l263.44 263.36 113.12-113.12-263.44-263.44 263.44-263.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEquationLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEquationLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEquationLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M567.744 1350.826c39.456-85.786 70.857-190.249 94.206-313.617 23.345-123.139 35.017-253.627 35.017-391.351 0-25.446-.346-54.858-1.164-87.888-.812-33.147-1.979-61.278-3.496-84.036h-75.294c-42.61 0-76.814 7.47-102.73 22.758-25.683 15.174-46.928 35.249-63.856 59.877-13.658 19.492-24.515 44.588-31.984 75.165-7.59 30.581-12.84 63.73-16.342 99.443h-75.88c-2.335-23.927-4.668-47.505-6.066-70.846-1.64-23.344-2.338-49.954-2.338-79.718 0-28.831 5.137-57.775 15.525-86.72 10.508-28.832 28.014-57.195 52.065-85.203 21.01-25.68 49.493-47.149 85.799-64.539C507.392 326.634 547.783 318 592.024 318H1627v155.583h-271.643v833.826c0 51.003 15.178 91.503 45.293 121.733 30.352 30.113 73.544 45.286 129.926 45.286 11.325 0 24.75-.469 40.51-1.167 15.64-1.166 29.533-1.867 41.673-2.682v81.702c-37.939 13.538-75.88 24.977-113.584 34.314-37.821 9.337-84.867 14.004-141.25 14.004-76.466 0-133.9-24.743-172.067-73.998-38.298-49.37-57.434-116.482-57.434-201.455V473.703H810.902l2.335 80.884c.818 31.86 1.172 66.18 1.172 102.71 0 105.394-8.993 220.592-27.087 345.481-18.094 124.884-44.942 232.5-80.313 322.605-34.669 88.356-74.128 156.398-118.37 204.606-44.358 47.847-95.723 72.011-154.557 72.011-48.329 0-83.698-16.34-106.228-49.021-22.529-32.681-33.854-66.995-33.854-102.71 0-30.581 10.505-60.694 31.984-89.872 21.365-29.18 53-44.002 94.794-44.002 25.679 0 52.526 4.435 80.31 13.423 27.78 8.868 50.197 15.872 67.008 21.008h-.357.005z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEquellaLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEquellaLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEquellaLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M894.689 1672.168c1.308-7.043 8.652-12.778 16.4-12.778h62.076c7.646 0 12.676 5.735 11.268 12.778l-12.073 58.756c-1.409 7.042-8.753 12.878-16.5 12.878h-62.177c-7.546 0-12.577-5.836-11.067-12.878l12.073-58.756zm-599.334 16.298c1.409-7.042 8.753-12.878 16.4-12.878h62.177c7.646 0 12.677 5.836 11.067 12.878l-11.872 58.757c-1.51 7.042-8.854 12.777-16.5 12.777H294.55c-7.646 0-12.676-5.735-11.268-12.777l12.073-58.757zM271.511 653.19c1.408-7.043 8.753-12.878 16.4-12.878h62.076c7.646 0 12.676 5.835 11.067 12.878l-11.872 58.756c-1.61 7.043-9.055 12.778-16.601 12.778h-62.076c-7.647 0-12.677-5.735-11.269-12.778l12.074-58.756h.2zm415.921-480.413c1.51-7.042 8.854-12.777 16.5-12.777h62.077c7.747 0 12.777 5.835 11.369 12.777l-12.074 58.857c-1.408 7.043-8.853 12.878-16.5 12.878h-62.177c-7.646 0-12.676-6.036-11.067-12.878l11.872-58.857zm653.563 0c1.408-7.042 8.753-12.777 16.399-12.777h62.076c7.647 0 12.677 5.835 11.067 12.777l-11.872 58.857c-1.509 7.043-8.853 12.778-16.6 12.778h-62.077c-7.646 0-12.676-6.037-11.268-12.878l12.073-58.857.202.1zM937.95 491.007c1.61-7.244 9.055-13.08 16.6-13.08h62.077c7.646 0 12.677 6.037 11.268 13.08l-12.073 58.655c-1.408 7.043-8.753 12.778-16.5 12.778h-62.076c-7.647 0-12.576-5.735-11.067-12.778l11.872-58.756-.1.1zm-174.357-117.01c1.51-7.042 9.055-12.676 16.4-12.676h110.47c7.646 0 12.575 5.835 11.066 12.777L880.603 478.33c-1.509 7.043-9.055 12.677-16.5 12.677h-110.67c-7.546 0-12.577-5.735-11.068-12.677l21.128-104.333h.101zM480.176 1392.975c1.509-7.043 9.055-12.677 16.4-12.677h110.368c7.747 0 12.677 5.634 11.269 12.576l-21.33 104.333c-1.408 7.043-8.853 12.677-16.298 12.677H469.914c-7.446 0-12.476-5.735-11.068-12.677l21.33-104.333v.1zm446.406 107.15c1.51-7.043 9.055-12.778 16.4-12.778h110.47c7.646 0 12.576 5.735 11.066 12.677l-21.128 104.332c-1.509 7.043-9.055 12.577-16.5 12.577H916.42c-7.545 0-12.576-5.735-11.067-12.577l21.129-104.433.1.201zm290.863-81.495c4.327-21.128 26.36-38.231 49.098-38.231h172.747c22.839 0 37.83 17.103 33.504 38.231l-33.403 163.391c-4.326 21.128-26.46 38.232-49.299 38.232h-172.445c-22.839 0-37.83-16.903-33.403-38.232l33.403-163.39h-.202zm-803.672-389.36c4.326-21.128 26.36-38.433 49.098-38.433h172.747c22.839 0 37.83 17.104 33.503 38.232L635.72 1192.66c-4.326 21.129-26.46 38.232-49.3 38.232H413.774c-22.738 0-37.83-17.103-33.402-38.232l33.402-163.39zm55.336-337.647c4.225-21.128 26.158-38.232 49.097-38.232h172.647c22.838 0 37.83 17.104 33.503 38.232l-33.402 163.592c-4.327 21.128-26.46 38.232-49.3 38.232H469.11c-22.839 0-37.93-17.104-33.503-38.232l33.402-163.592h.1zM1408 360.717c4.326-21.128 26.46-38.232 49.299-38.232h172.646c22.839 0 37.83 17.104 33.503 38.232l-33.302 163.491c-4.326 21.128-26.36 38.232-49.097 38.232h-172.747c-22.839 0-37.83-17.104-33.504-38.232l33.403-163.491h-.201zM873.76 742.532c10.062-49.3 61.574-89.241 114.897-89.241h524.782c53.323 0 88.537 39.942 78.476 89.341l-101.616 496.51c-10.061 49.3-61.574 89.342-114.897 89.342H850.622c-53.324 0-88.537-39.942-78.476-89.342l101.616-496.41v-.2z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExpandItemsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExpandItemsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExpandItemsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1112.841 741.29l93.943-93.913L960.5 401.17 714.216 647.377l93.943 93.913 85.904-85.877v609.174l-85.904-85.877-93.943 93.913L960.5 1518.83l246.284-246.207-93.943-93.913-85.904 85.877V655.413zM429 163h1063v132.833H429zM429 1624.167h1063V1757H429z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExpandLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExpandLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExpandLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1039.667 1405.196V959.992H880.333v445.204l-182.675-182.752-112.649 112.696L960 1710.288l374.991-375.148-112.649-112.696zM482 800.6h956V641.2H482zM482 561.5h956V402.1H482zM482 322.4h956V163H482z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExportContentLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExportContentLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExportContentLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1360 446.872l-113.12 113.12 160 160H960c-176.48 0-320 143.52-320 320v80h160v-80c0-88.16 71.76-160 160-160h446.88l-160 160 113.12 113.12 353.12-353.12L1360 446.872z"/>\n        <path d="M1040 1440H320V480h880V320H160v1280h1040v-400h-160z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExportLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExportLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExportLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1360 446.872l-113.12 113.12 160 160H960c-176.48 0-320 143.52-320 320v80h160v-80c0-88.16 71.76-160 160-160h446.88l-160 160 113.12 113.12 353.12-353.12L1360 446.872z"/>\n        <path d="M1040 1440H320V480h880V320H160v1280h1040v-400h-160z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExternalLinkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExternalLinkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExternalLinkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1579.892 517.69L811.62 1285.96l-142.758-142.757 767.45-767.45H994.123V187.96h773.564v187.793h-1.177v636.282h-186.618V517.689zM165.724 1730.97L163 1731V509.568h611.611V696.62H351.968v846.557h844.8V1354.74h187.793v188.438h.456v187.793H165.724z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEyeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEyeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEyeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1322.143c-301.773 0-546.96-259.005-632.6-362.215 85.423-103.284 329.74-362.07 632.6-362.07 301.773 0 546.96 259.004 632.6 362.214-85.423 103.284-329.74 362.07-632.6 362.07m783.74-403.86C1730.41 899.304 1410.813 453 960 453S189.59 899.305 176.26 918.281a72.262 72.262 0 0 0 0 83.438C189.59 1020.695 509.187 1467 960 1467s770.41-446.305 783.74-465.281a72.262 72.262 0 0 0 0-83.438"/>\n        <path d="M960 670.286c-159.835 0-289.818 129.937-289.818 289.714S800.165 1249.714 960 1249.714c159.835 0 289.818-129.937 289.818-289.714S1119.835 670.286 960 670.286"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFacebookBoxedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFacebookBoxedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFacebookBoxedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1540 305.321c49.199 19.515 84 67.543 84 123.679v1062c0 73.44-59.56 133-133 133h-235V960h247l38-218h-285V624c.046-61.529 7.751-94.532 71-94h213V305.321zM970 1624H429c-73.44 0-133-59.56-133-133V429c0-73.44 59.56-133 133-133h800.555C1041.091 311.98 970.395 422.928 970 600v142H833v218h137v664zm521-1461H429c-146.45 0-266 119.55-266 266v1062c0 146.516 119.55 266 266 266h1062c146.45 0 266-119.484 266-266V429c0-146.45-119.55-266-266-266z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFacebookLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFacebookLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFacebookLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1111.242 1920h-360.05V960H511V629.2l240.193-.16-.4-194.88C750.792 164.24 824.05 0 1142.306 0h264.772v330.88h-165.493c-123.94 0-129.864 46.24-129.864 132.64l-.48 165.6h297.839l-35.148 330.8-262.451.08-.16 960h-.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesCopyrightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesCopyrightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesCopyrightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M987.206 1104.293c-35.865 0-62.963-13.084-81.294-39.32-18.331-26.168-27.563-61.035-27.563-104.671 0-95.972 36.33-143.926 108.857-143.926 14.479 0 30.153 4.849 47.156 14.546 16.87 9.697 31.083 26.66 42.772 50.836l108.79-56.76h-.066c-43.503-78-115.498-117.784-216.12-117.718-68.608 0-125.461 22.802-170.358 68.43-45.031 45.495-67.48 107.073-67.48 184.647 0 79.502 22.25 141.54 66.683 186.039 44.499 44.631 102.946 66.95 175.472 66.95 45.496 0 87.073-11.355 124.797-34.204 37.725-22.714 67.214-53.995 88.467-93.779l-100.09-50.875c-19.327 46.558-52.734 69.804-100.023 69.804"/>\n        <path d="M960.5 1598C608.418 1598 323 1312.582 323 960.5S608.418 323 960.5 323 1598 608.418 1598 960.5 1312.582 1598 960.5 1598M960 163c-440.171 0-797 356.829-797 797s356.829 797 797 797 797-356.829 797-797-356.829-797-797-797"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesCreativeCommonsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesCreativeCommonsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesCreativeCommonsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M748.981 1108.747c-37.459 0-65.779-13.655-85.013-41.02-19.208-27.336-28.852-63.732-28.852-109.268 0-100.21 37.991-150.287 113.865-150.287 15.196 0 31.641 5.1 49.361 15.196 17.667 10.095 32.597 27.842 44.765 53.133l113.891-59.244.053-.026c-45.562-82.012-120.931-122.977-226.215-122.924-71.863 0-131.372 23.803-178.395 71.358-47.05 47.58-70.588 111.819-70.588 192.794 0 82.942 23.273 147.764 69.817 194.256 46.545 46.624 107.808 69.87 183.709 69.87 47.581 0 91.123-11.875 130.549-35.68 39.478-23.803 70.348-56.4 92.611-97.924l-104.752-53.133c-20.271 48.564-55.18 72.899-104.806 72.899M1344.021 1035.848c-20.244 48.564-55.152 72.899-104.726 72.899-37.459 0-65.805-13.655-85.013-41.02-19.208-27.336-28.851-63.732-28.851-109.268 0-100.21 37.99-150.287 113.891-150.287 16.126 0 33.075 5.1 50.875 15.196 17.667 10.095 32.651 27.842 44.765 53.133l112.377-59.243c-44.499-82.012-119.444-122.978-224.701-122.925-71.889 0-131.319 23.804-178.368 71.332-47.103 47.58-70.615 111.819-70.615 192.794 0 82.942 23.007 147.764 69.153 194.256 45.961 46.624 107.436 69.87 184.373 69.87a245.01 245.01 0 0 0 129.061-35.68c39.398-23.803 70.8-56.4 94.046-97.924l-106.267-53.133z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesFairUseLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesFairUseLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesFairUseLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M773.947 1204h112V993h213v-87h-213V788h246v-94h-358z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesObtainedPermissionLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesObtainedPermissionLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesObtainedPermissionLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M1159.319 717.488c-10.441-9.83-22.332-14.49-35.615-14.49H796.35c-13.603-1-26.787 4.847-36.377 14.49-9.936 9.803-15.017 21.45-15.017 35.478v321.032h91v381h248v-381h91V752.966c0-14.001-5.276-25.648-15.637-35.478M960.002 660.514c73.988 0 110.994-36.45 110.994-109.348 0-73.803-36.952-110.677-110.993-110.677-74.042 0-111.048 36.927-111.048 110.65v.053c0 72.872 37.06 109.322 111.047 109.322"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesPublicDomainLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesPublicDomainLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesPublicDomainLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M840.477 920.212c-11.424 12.593-28.506 18.792-51.274 18.792h-94.254V807.587l.368.417h91.07c47.475 0 71.199 21.647 71.199 65.56 0 18.704-5.686 34.055-17.11 46.648m-35.625-194.208H585.949v435h111v-140h86.595c35.095 0 65.46-5.131 91.044-14.881 25.637-9.803 44.845-22.517 57.65-37.925 12.805-15.462 21.838-30.918 27.045-46.327 5.207-15.41 7.81-31.716 7.81-48.56 0-98.11-54.116-147.307-162.242-147.307M1255.315 1035.471c-17.56 22.954-45.774 34.532-84.694 34.532h-63.672V817.416l-.177-.026 62.542.08c39.85 0 68.505 11.423 86.039 34.27 17.534 22.928 26.282 53.583 26.282 91.892 0 38.31-8.786 68.938-26.32 91.84m77.575-256.07c-39.903-35.494-94.95-53.399-165.086-53.399H996.949v434.734l.032.266h170.823c70.163 0 125.183-17.893 165.086-53.386 39.797-35.44 59.722-90.279 59.722-164.135 0-73.775-19.925-128.588-59.722-164.08"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilmstripLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilmstripLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilmstripLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1032.447 579.94l217.364-289.73H887.538L670.175 579.94zM1467.175 290.21L1249.81 579.94h507.182V290.21zM815.084 869.67l434.727 289.73-434.727 289.729v-579.46zm-652.091 579.459c0 79.965 64.847 144.865 144.909 144.865h1304.182c79.99 0 144.909-64.9 144.909-144.865V724.805h-1594v724.324zM670.175 290.21H162.993v289.73H452.81z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFlagLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlagLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFlagLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M243 1757h159.333V163H243zM1625.926 566.792l-1035.667-398.5c-24.458-9.325-52.022-6.137-73.692 8.687a79.727 79.727 0 0 0-34.575 65.753v797c0 26.221 12.906 50.769 34.575 65.673 13.464 9.245 29.238 14.027 45.092 14.027 9.64 0 19.359-1.833 28.6-5.34l1035.667-398.5c30.751-11.796 51.066-41.444 51.066-74.36 0-32.996-20.315-62.565-51.066-74.44"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFolderLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFolderLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFolderLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M851.68 240H320c-88.32 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240m0 160l55.76 139.44C931.76 600.16 990.56 640 1056 640h544v880H320V400h531.68" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFolderLockedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFolderLockedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFolderLockedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M851.68 240H320c-88.32 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240m0 160l55.76 139.44C931.76 600.16 990.56 640 1056 640h544v880H320V400h531.68M733.333 902.857v91.429h-16.525c-42.42 0-76.808 34.385-76.808 76.805v212.104c0 42.418 34.384 76.805 76.801 76.805H1123.2c42.416 0 76.801-34.385 76.801-76.805v-212.104c0-42.419-34.39-76.805-76.808-76.805h-16.525v-91.429c0-100.571-84-182.857-186.667-182.857s-186.667 82.286-186.667 182.857zM920 811.43c52.267 0 93.333 40.228 93.333 91.428v91.429H826.667v-91.429c0-51.2 41.066-91.428 93.333-91.428z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconForwardLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconForwardLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconForwardLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040.08 160c20.8 0 41.2 8.16 56.48 23.44l720 720c31.28 31.28 31.28 81.84 0 113.12l-720 720A80.027 80.027 0 0 1 1040 1760c-10.32 0-20.72-2-30.64-6.08-29.84-12.4-49.36-41.6-49.36-73.92v-240H159.28c-43.2 0-79.28-35.84-79.28-80.16v-799.6c0-43.76 35.44-80.24 79.28-80.24H960V240c0-32.32 19.52-61.52 49.36-73.92 10-4.08 20.4-6.08 30.72-6.08M1120 433.2V640H240v640h880v206.88L1646.8 960 1120 433.2" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGithubLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGithubLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGithubLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1089.2 1189.574c0-49 11.75-91 35.2-125.9 23.45-34.9 51.65-52.4 84.5-52.4 33.4 0 61.8 17.5 85.3 52.4s35.2 77 35.2 126-11.75 91-35.2 125.9c-23.45 34.9-51.9 52.4-85.3 52.4-32.85 0-61-17.5-84.5-52.4s-35.2-77-35.2-126zm-503.15 0c0-49 11.8-91 35.25-125.9 23.45-34.9 51.9-52.4 85.3-52.4 33.5 0 61.75 17.35 85 52s34.75 76.85 34.75 126.4c0 49.55-11.6 91.65-34.8 126.35-23.2 34.7-51.5 52-85 52-33.35 0-61.75-17.5-85.25-52.4s-35.2-77-35.2-126l-.05-.05zm-227.65-13.3c0 44.85 5.6 84.65 16.8 119.3 11.2 34.65 25.5 63.8 43 87.3s41.8 43.5 72.8 59.85 61.3 29.1 90.75 38c29.5 8.8 67.3 15.75 113.5 20.7 46.2 4.95 87.3 8 123.5 9 36.3 1 82.35 1.5 138.15 1.5 55.8 0 101.85-.5 138.1-1.5s77.5-4 123.6-9c46.1-5 84-11.85 113.5-20.75 29.4-8.85 59.65-21.5 90.7-38 31.05-16.5 55.3-36.35 72.75-59.8 17.45-23.45 31.85-52.5 43.1-87.25 11.2-34.65 16.8-74.4 16.8-119.25 0-76.15-34.15-145-102.5-206.5-20.35-18.85-44-33-71.2-42.7-27.2-9.7-57.75-15-92-16.4-34.1-1.3-66.85-1-98.15.8-31.3 1.8-69.85 4.3-115.75 7.5-45.9 3.1-85.5 4.65-118.9 4.65-33.4 0-73-1.5-118.9-4.65-46-3.15-84.5-5.6-115.85-7.5-31.35-1.9-64-2-98.2-.75-34.2 1.3-64.85 6.8-92 16.5-27.15 9.7-50.85 23.8-71.2 42.6-68.35 62.6-102.5 131.5-102.5 206.5l.1-.15zM162 979.924c0-129.35 43.3-241.25 129.9-335.65-4.7-12.5-9-26.75-12.9-42.65-3.9-15.9-7.5-38.6-11-68s-2-63.5 4-102.15c6-38.65 17-78 33.2-118.2 3.15-1 7.5-2 12.9-2.75s18.65-.1 39.5 2 43.3 6.65 67.3 13.7c24 7.05 56.2 20.6 96.65 40.7s82.85 45.25 127.2 75.5c76.15-20.85 180.5-31.3 313-31.3 133 0 237.5 10.5 313.7 31.3 44.35-30.25 86.5-55.4 126.35-75.5 39.85-20.1 72.5-33.65 97.8-40.7 25.35-7 47.5-11.75 66.5-14.1 19-2.35 32.8-2.75 41.15-1.2l11.75 2.35c16.15 40.15 27.25 79.5 33.25 118.15 6 38.65 7.3 72.65 3.9 102.1-3.4 29.45-7 52.15-10.9 68-3.9 15.85-8.2 30.15-12.9 42.7 86.45 94.4 129.65 206.3 129.65 335.65 0 72.5-6.75 138.1-20.3 196.75-13.55 58.65-32.5 109.65-56.7 153-24.2 43.35-55 81.3-92.3 114.2-37.3 32.85-77.7 59.7-121.25 80.6-43.55 20.9-93.3 37.8-149.1 50.85-55.8 13.05-112.65 22.15-170.5 27.4-63.75 5.45-127.75 8.05-191.75 7.8-69.35 0-133-2.65-190.9-7.85-57.9-5.2-114.6-14.35-170.15-27.4-55.5-13-105-30-148.25-50.85s-83.5-47.7-120.5-80.6c-37-32.85-67.5-71-91.5-114.25s-42.8-94.2-56.4-152.85c-13.55-58.75-20.4-124.3-20.4-196.8v.05z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGradebookExportLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGradebookExportLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGradebookExportLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1384.907 446.872l-113.111 113.12 159.988 160H984.938c-176.466 0-319.975 143.52-319.975 320v80H824.95v-80c0-88.16 71.754-160 159.987-160h446.846l-159.988 160 113.111 113.12L1738 799.992l-353.093-353.12zM1064.932 1440H344.988V480h879.932V320H185v1280h1039.92v-400h-159.988v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGradebookImportLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGradebookImportLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGradebookImportLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M538.093 446.872l113.111 113.12-159.988 160h446.846c176.466 0 319.975 143.52 319.975 320v80H1098.05v-80c0-88.16-71.754-160-159.987-160H491.216l159.988 160-113.111 113.12L185 799.992l353.093-353.12zM858.068 1440h719.944V480H698.08V320H1738v1280H698.08v-400h159.988v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGradebookLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGradebookLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGradebookLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 80H240c-44.16 0-80 35.84-80 80v1600c0 44.24 35.84 80 80 80h1440c44.16 0 80-35.76 80-80V160c0-44.16-35.84-80-80-80zM320 240h160v1440H320V240zm1280 1440H640V240h960v1440zm-540-950h110v110h110V455.04c0-30.4-24.64-55.04-54.96-55.04h-220c-30.4 0-55.04 24.64-55.04 55.04V840h110V730zm110-220v110h-110V510h110zm-257.52 930c75.84 0 137.52-61.68 137.52-137.52 0-31.04-10.72-59.44-28.16-82.48 17.44-23.04 28.16-51.44 28.16-82.48 0-75.84-61.68-137.52-137.52-137.52H720v440h192.48zm0-330c15.12 0 27.52 12.32 27.52 27.52s-12.32 27.52-27.52 27.52H830V1110h82.48zm0 220H830v-55.04h82.48c15.12 0 27.52 12.4 27.52 27.52 0 15.2-12.32 27.52-27.52 27.52zM1190 1165.04v110c0 91.04 74 165.04 165.04 165.04H1520v-110h-165.04c-30.32 0-55.04-24.56-55.04-55.04v-110c0-30.32 24.64-55.04 55.04-55.04H1520v-110h-165.04c-90.96 0-164.96 74.08-164.96 165.04z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupDarkNewLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupDarkNewLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupDarkNewLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1682 880h-640V240H882v640H242v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 960v140h560v254.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260h-400v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260H480v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1100h560V960H555V858.667c0-109.44 86.063-197.6 193.388-202.667 54.674 61.813 129.6 101.333 211.612 101.333 82.013 0 156.938-39.52 211.612-101.333C1279.95 661.067 1365 749.227 1365 858.667V960h-325zm-79.5-693C849.125 267 758 357.72 758 469.5S849.125 672 960.5 672 1163 581.28 1163 469.5 1071.875 267 960.5 267z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupNewLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupNewLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupNewLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1682 880h-640V240H882v640H242v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHamburgerLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHamburgerLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHamburgerLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1522 1480H402v-240h1120v240zm0-400H402V840h1120v240zm0-400H402V440h1120v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHeartLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHeartLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHeartLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M640 480c-132.32 0-240 107.68-240 240 0 269.04 371.44 576.56 560 704.48 188.56-127.92 560-435.44 560-704.48 0-132.32-107.68-240-240-240-135.12 0-240 129.04-240 240 0 44.16-35.84 80-80 80s-80-35.84-80-80c0-110.96-104.88-240-240-240m320 1120c-14.72 0-29.44-4.08-42.4-12.16C889.92 1570.56 240 1159.28 240 720c0-220.56 179.44-400 400-400 127.52 0 245.68 66.96 320 166.4 74.32-99.44 192.48-166.4 320-166.4 220.56 0 400 179.44 400 400 0 439.28-649.92 850.56-677.6 867.84A80.132 80.132 0 0 1 960 1600" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHighlighterLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHighlighterLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHighlighterLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M912.26 1343.056l-276.092-275.968 792.314-686.744 166.684 174.783-682.907 787.93zM1760 551.105c0-43.032-16.733-83.41-47.141-113.894l-170.627-170.6c-60.817-60.808-170.947-56.867-223.318-3.861L400.22 1058.642l520.406 520.246 792.152-914.13c30.409-30.324 47.142-70.701 47.222-113.653zM1116.4 1699h643.568v-160.868h-643.569V1699zM160 1618.566h437.868l121.071-121.053-218.893-218.86L160 1618.566z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHomeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHomeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHomeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1439.99 920.006c-44.158 0-79.998 35.84-79.998 79.999l.16 559.99h-160.157V1240c0-44.159-35.839-79.998-79.998-79.998H800.003c-44.16 0-79.998 35.84-79.998 79.998v319.994H560.008v-559.99c0-44.158-35.84-79.998-79.999-79.998H433.13L960 393.136l526.87 526.87h-46.88zm-159.996-479.99h79.998v126.877l-79.998-79.998v-46.88zm456.551 503.43L1519.99 726.89V360.017c0-44.16-35.839-79.999-79.998-79.999h-239.996c-34.399 0-63.118 21.92-74.398 52.4L1016.559 223.46c-31.28-31.28-81.839-31.28-113.118 0L183.455 943.446c-22.88 22.88-29.76 57.279-17.36 87.198 12.4 29.84 41.6 49.36 73.919 49.36H400.01v479.99c0 88.239 71.758 159.997 159.997 159.997h159.997c88.238 0 159.997-71.758 159.997-159.997V1320h159.996v239.995c0 88.239 71.76 159.997 159.997 159.997h159.997c88.239 0 159.997-71.758 159.997-159.997v-479.99h159.997c32.32 0 61.52-19.52 73.919-49.36 12.4-29.92 5.52-64.319-17.36-87.198z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHourGlassLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHourGlassLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHourGlassLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.84 837.36l-35.28-23.84C841.68 811.68 560 618.4 560 320h800c0 298.4-281.68 491.68-284.4 493.44L1040 837.2v245.6l35.6 23.76c2.88 1.92 284.4 193.04 284.4 493.44H560c0-298.24 281.68-491.6 284.4-493.44l35.6-23.76-.16-245.44zM400 1600h-80c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h1280c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80h-80c0-315.76-229.44-528.48-320-600.24v-79.52c90.56-71.6 320-284.32 320-600.24h80c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80H320c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h80c0 315.92 229.44 528.64 320 600.24v79.52c-90.56 71.76-320 284.48-320 600.24zm560-879.968s132.08-88.24 200.24-240H759.76c68.16 151.76 200.24 240 200.24 240" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImageLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImageLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImageLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M160 399.607C160 311.46 231.857 240 319.264 240h1281.472c87.96 0 159.264 71.41 159.264 159.607v1120.786c0 88.148-71.857 159.607-159.264 159.607H319.264C231.304 1680 160 1608.59 160 1520.393V399.607zm160 0v1120.786c0-.116-.277-.393-.736-.393h1281.472c-.76 0-.736-.023-.736.393V399.607c0 .116.277.393.736.393H319.264c.76 0 .736.023.736-.393zM480 1360l240-320 160 160 320-400 240 560H480zm200-800c110.32 0 200 89.52 200 200 0 110.56-89.68 200-200 200-110.56 0-200-89.44-200-200 0-110.48 89.44-200 200-200z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImportContentLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImportContentLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImportContentLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1362 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H915.12l160-160L962 526.88 608.88 880 962 1233.12 1075.12 1120l-160-160H1362zm-80-640v160H402v960h720v-240h160v400H242V320h1040z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImportLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImportLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImportLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1362 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H915.12l160-160L962 526.88 608.88 880 962 1233.12 1075.12 1120l-160-160H1362zm-80-640v160H402v960h720v-240h160v400H242V320h1040z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconIndent2Line;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconIndent2Line(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconIndent2Line',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M322 400h1440V240H322v160zm480 320h960V560H802v160zm0 320h960V880H802v160zm0 320h960v-160H802v160zm-480 320h1440v-160H322v160zM162 480l480 480-480 480V480z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconIndentLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconIndentLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconIndentLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M322 400h1440V240H322v160zm480 320h960V560H802v160zm0 320h960V880H802v160zm0 320h960v-160H802v160zm-480 320h1440v-160H322v160zM162 480l480 480-480 480V480z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInfoLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInfoLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInfoLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960.175 1603.365c-354.283 0-642.544-288.26-642.544-642.544 0-354.276 288.26-642.537 642.544-642.537s642.545 288.261 642.545 642.537c0 354.283-288.261 642.544-642.545 642.544m0-1445.719c-442.874 0-803.174 360.308-803.174 803.175 0 442.954 360.3 803.182 803.174 803.182 442.875 0 803.175-360.228 803.175-803.182 0-442.867-360.3-803.175-803.175-803.175"/>\n        <path d="M812 937.007C812 906.075 837.077 881 868.002 881h183.996c30.93 0 56.002 25.08 56.002 56.007v506.986c0 30.932-25.077 56.007-56.002 56.007H868.002c-30.93 0-56.002-25.08-56.002-56.007V937.007zM960 733c86.156 0 156-69.844 156-156s-69.844-156-156-156-156 69.844-156 156 69.844 156 156 156z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInstructureLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInstructureLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInstructureLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M393.447 960c0 115.723-90.566 216.352-201.258 226.415C172.063 1110.943 162 1035.472 162 960c0-75.472 10.063-155.975 30.189-226.415C307.912 743.648 393.447 844.277 393.447 960zm135.849-70.44c38.893 0 70.44 31.547 70.44 70.44s-31.547 70.44-70.44 70.44-70.44-31.547-70.44-70.44 31.547-70.44 70.44-70.44zm75.471 322.012c-30.188 30.189-30.188 75.472 0 100.63 30.189 25.156 75.472 30.188 100.63 0 30.188-30.19 30.188-75.472 0-100.63-25.158-25.157-75.472-25.157-100.63 0zm-45.283 145.912c-80.503-80.503-211.32-90.566-306.918-20.126 80.503 135.85 191.195 246.541 322.013 322.013 75.471-85.535 65.408-216.352-15.095-301.887zm45.283-759.748c-30.188 30.189-30.188 75.472 0 100.629 30.189 25.157 75.472 30.188 100.63 0 30.188-30.189 25.156-75.472 0-100.63-30.19-25.156-75.472-25.156-100.63 0zm603.774 618.868c-30.189 25.157-30.189 70.44-5.032 100.629 25.158 30.188 70.44 30.188 100.63 5.031 0 0 5.03 0 5.03-5.031 25.158-30.189 25.158-75.472-5.03-100.63-25.158-25.156-65.41-25.156-95.598 0zm110.692-513.208c25.157-30.188 25.157-75.471-5.032-100.629-25.157-25.157-70.44-25.157-95.597 0-25.157 30.189-25.157 75.472 5.031 100.63 25.157 25.156 65.409 25.156 95.598 0zm40.251-145.912c80.503 80.503 211.321 90.566 306.919 20.126-80.504-135.849-191.195-246.54-322.013-322.013-75.472 90.567-65.409 221.384 15.094 301.887zm-800 0c85.535-80.503 90.566-211.32 20.126-301.887C443.761 331.07 333.07 441.761 257.597 577.61c90.567 70.44 221.384 60.377 301.887-20.126zm800 800c-80.503 80.503-90.566 211.321-20.126 306.919 135.85-80.504 246.541-191.195 322.013-322.013-85.535-75.472-216.352-65.409-301.887 15.094zM962 456.855c-40.252 0-70.44 30.189-70.44 70.44 0 40.252 30.188 70.44 70.44 70.44 40.252 0 70.44-35.22 70.44-75.47 0-35.221-35.22-65.41-70.44-65.41zm0-65.408c115.723 0 216.352-90.566 231.447-201.258C1117.975 170.063 1042.503 160 962 160c-80.503 0-155.975 10.063-231.447 30.189C745.648 305.912 846.277 391.447 962 391.447zm0 930.817c-40.252 0-75.472 30.189-75.472 70.44 0 40.252 30.189 75.472 70.44 75.472H962c40.252 0 70.44-35.22 70.44-75.472-5.031-40.251-35.22-70.44-70.44-70.44zm0 206.29c-115.723 0-216.352 85.534-226.415 201.257C811.057 1749.937 886.528 1760 962 1760c75.472 0 155.975-10.063 226.415-30.189-15.094-115.723-110.692-201.258-226.415-201.258zm432.704-644.026c-40.251 0-70.44 30.189-70.44 70.44 0 40.252 30.189 70.44 70.44 70.44 40.252 0 70.44-30.188 70.44-70.44 0-35.22-30.188-70.44-70.44-70.44zM1530.554 960c0 115.723 90.565 216.352 201.257 226.415C1751.937 1110.943 1762 1035.472 1762 960c0-75.472-10.063-155.975-30.189-226.415-115.723 10.063-201.258 110.692-201.258 226.415z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconIntegrationsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconIntegrationsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconIntegrationsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1792 512h-256V128c0-70.4-57.6-128-128-128h-128c-70.4 0-128 57.6-128 128v384H768V128C768 57.6 710.4 0 640 0H512c-70.4 0-128 57.6-128 128v384H128C57.6 512 0 569.6 0 640v256c0 70.4 57.6 128 128 128h64v441.6c0 76.8 83.2 134.4 192 134.4h320v128c0 108.8 83.2 192 192 192h128c108.8 0 192-83.2 192-192v-128h320c108.8 0 192-57.6 192-134.4V1024h64c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128zm-512 0V128h128v384h-128zm-768 0V128h128v384H512zm512 1280H896c-38.4 0-64-25.6-64-64v-128h256v128c0 38.4-25.6 64-64 64zm576-364.8c0 25.6-25.6 44.8-64 44.8H384c-32 0-64-19.2-64-44.8V1024h1280v403.2zm64-531.2H128V640h1664v256h-128z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInvitationLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInvitationLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInvitationLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M640.024 880h480.024V720H640.024v160zm0-240h640.032V480H640.024v160zm-160.008 80H320.008V160h1280.064v560h-160.008V320H480.016v400zm-160.008 880v-549.2l348.817 290.72c14.401 11.92 32.562 18.48 51.203 18.48h480.024c18.72 0 36.882-6.56 51.283-18.48l348.817-290.72.08 549.2H320.008zm1393.99-792.48c-28.162-13.12-61.283-8.88-85.125 10.96L1171.091 1200H748.989L291.207 818.56c-23.762-19.84-57.123-24.16-85.125-10.96C178.001 820.72 160 848.96 160 880v720c0 88.24 71.764 160 160.008 160h1280.064c88.324 0 160.008-71.76 159.928-160.08v-720c0-30.96-17.921-59.28-46.002-72.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconKeyboardShortcutsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconKeyboardShortcutsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconKeyboardShortcutsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1693.417 599.8h-659.625v-73.3c0-40.49 32.806-73.3 73.291-73.3h73.292c121.106 0 219.875-98.78 219.875-219.9V160h-146.583v73.3c0 40.49-32.807 73.3-73.292 73.3h-73.292c-121.105 0-219.875 98.78-219.875 219.9v73.3H227.583C146.613 599.8 81 665.421 81 746.4v733c0 80.979 65.613 146.6 146.583 146.6h1465.834c80.97 0 146.583-65.62 146.583-146.6v-733c0-80.979-65.613-146.6-146.583-146.6zM1400 820h147v147h-147V820zm-220 0h147v147h-147V820zm221 220v147h-147v-147h147zM961 820h147v147H961V820zm220 220v147h-147v-147h147zm-220 0v147H814v-147h147zM741 820h147v147H741V820zm-220 0h147v147H521V820zm220 220v147H594v-147h147zM301 820h147v147H301V820zm220 220v147H374v-147h147zm-73 367H301v-147h147v147zm879 0H521v-147h806v147zm220 0h-147v-147h147v147zm74-220h-147v-147h147v147z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLikeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLikeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLikeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1263.959 160c-91.22 0-175.477 57.68-182.599 152.08-15.603 208.88-193.24 307.52-261.095 359.76-67.935 52.24-322.148 121.84-322.148 301.68v562.8C510.119 1701.2 910.364 1760 1204.186 1760c88.819 0 167.876-5.36 223.567-14.8 240.291-40.64 400.325-713.68 395.124-812.32-5.281-98.56-201.883-197.2-368.958-197.2 0 0 46.97-52.24 46.97-284.32-5.681-206.64-126.427-291.36-236.93-291.36m.08 160c45.37 0 74.095 49.92 76.816 133.68-.16 128.48-16.564 182.24-21.045 194.56-29.366 45.04-34.407 102.4-12.082 152.48 25.685 57.76 82.977 94.96 146.19 94.96 85.779 0 172.837 38.16 206.605 65.44-8.322 58-37.848 194.4-90.9 338-79.136 214-151.472 281.92-168.515 288.32-47.13 8-118.905 12.56-196.922 12.56-279.82 0-489.544-52.56-546.036-93.36V973.52c0-37.44 110.664-92.72 157.874-116.32 39.208-19.6 73.135-36.48 101.781-58.56 7.042-5.36 15.444-11.28 24.806-18 90.579-64.4 279.019-198.56 296.782-453.68 2.08-2.16 11.043-6.96 24.646-6.96zM178.017 1760H338.05c44.17 0 80.017-35.84 80.017-80V880c0-44.16-35.848-80-80.017-80H178.017C133.847 800 98 835.84 98 880v800c0 44.16 35.848 80 80.017 80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLinkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLinkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLinkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M791.396 1015.028l-561.762 562.647 112.337 112.402 561.761-562.647-112.336-112.402zm337.089-112.402l561.762-562.488-112.416-112.482-561.762 562.488 112.416 112.482zm561.762-224.884l-56.248-56.241-112.337 112.482 56.248 56.24c15.015 15.035 23.198 34.922 23.198 56.241 0 21.16-8.262 41.127-23.198 56.162l-674.098 675.049c-30.03 29.99-82.385 29.99-112.416 0l-56.168-56.241-112.337 112.402 56.169 56.24C724.105 1735.182 783.928 1760 847.644 1760c63.636 0 123.459-24.82 168.504-69.923l674.099-674.97C1735.213 970.083 1760 910.183 1760 846.464c0-63.718-24.787-123.698-69.753-168.722zM229.714 1240.07c-92.952-93.072-92.952-244.453 0-337.525l674.098-674.89c89.933-90.208 246.997-90.208 337.089 0l56.088 56.24L1184.732 396.3l-56.168-56.24c-15.094-15.036-34.956-23.309-56.247-23.309-21.292 0-41.233 8.273-56.169 23.308l-674.177 674.97c-30.984 31.103-30.984 81.537 0 112.56l56.168 56.242-112.336 112.481-56.09-56.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLinkedinLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLinkedinLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLinkedinLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 1082.52v355.04H1234.12v-331.24c0-83.2-29.76-139.96-104.16-139.96-56.84 0-90.76 38.28-105.6 75.24-5.44 13.2-6.8 31.68-6.8 50.2v345.68h-205.8s2.8-560.96 0-619.08h205.8v87.76c27.4-42.2 76.24-102.28 185.52-102.28 135.4 0 236.92 88.52 236.92 278.64zm-728.52-455.6c0 59.44-44.64 107.04-116.44 107.04h-1.36c-69.04 0-113.68-47.64-113.68-107.04C480 566.2 526 520 596.4 520c70.44 0 113.72 46.2 115.08 106.92zM492.16 818.48h205.8v619.08H492.16V818.48zM1600 1504c0 53-43 96-96 96H416c-53 0-96-43-96-96V416c0-53.04 43-96 96-96h1088c53 0 96 42.96 96 96v1088zm0-1344H320c-88.36 0-160 71.64-160 160v1280c0 88.36 71.64 160 160 160h1280c88.36 0 160-71.64 160-160V320c0-88.36-71.64-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLockLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLockLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLockLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1570 1684H351V922h1219v762zM1189 617.143V846H732V617.143c0-128 100.54-228.572 228.5-228.572S1189 489.143 1189 617.143zM1582.508 846H1418V617.143C1418 365.714 1212.35 160 961 160S504 365.714 504 617.143V846H339.492c-31.501 0-58.063 22.541-63.469 52.467-.044.239-.089.477-.13.716a61.017 61.017 0 0 0-.466 3.282 61.95 61.95 0 0 0-.125 1.148 62.381 62.381 0 0 0-.228 3.209 62.853 62.853 0 0 0-.074 2.888v786.294c0 35.344 29.155 63.996 64.502 63.996h1242.996c35.347 0 63.502-28.65 63.502-63.996V909.71c0-35.344-28.151-63.71-63.492-63.71z"/>\n        <path d="M961.436 1519c-113.183 0-204.936-91.781-204.936-205s91.753-205 204.936-205c113.182 0 204.936 91.781 204.936 205s-91.754 205-204.936 205m0-486c-75.045 0-145.598 29.232-198.66 82.311C709.72 1168.384 680.5 1238.947 680.5 1314c0 75.052 29.22 145.615 82.276 198.688 53.062 53.079 123.615 82.312 198.66 82.312s145.597-29.233 198.66-82.312c53.056-53.073 82.276-123.636 82.276-198.688 0-75.053-29.22-145.616-82.276-198.689-53.063-53.079-123.615-82.311-198.66-82.311"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLtiLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLtiLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLtiLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1320 320H680c-66.24 0-120 53.76-120 120 0 66.24 53.76 120 120 120h200v920c0 66.24 53.76 120 120 120 66.24 0 120-53.76 120-120V560h200c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120M600 1360H320V440c0-66.24-53.76-120-120-120-66.24 0-120 53.76-120 120v1040c0 66.24 53.76 120 120 120h400c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120m1240-920v1040c0 66.24-53.76 120-120 120-66.24 0-120-53.76-120-120V440c0-66.24 53.76-120 120-120 66.24 0 120 53.76 120 120" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMarkAsReadLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMarkAsReadLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMarkAsReadLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMarkerLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMarkerLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMarkerLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1016.56 1816.55l479.994-480c15.6-15.6 23.44-36.08 23.44-56.56v-1120c0-44.16-35.84-80-80-80H480.006c-44.159 0-79.999 35.84-79.999 80v1120c0 20.48 7.84 40.96 23.44 56.56l479.995 480c31.28 31.28 81.839 31.28 113.118 0zM560 239.998h800v959.99l-400 399.995-400-399.996V239.998z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMasqueradeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMasqueradeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMasqueradeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1080.904 933.435c-20.695-1.774-27.721-10.574-28-32.278-1.46-115.479 88.73-223.93 203.653-237.948 84.034-10.296 168.66-15.861 257.773-23.966-3.86 16.87-5.67 39.166-13.947 58.748-80.348 190.122-235.479 251.166-419.479 235.444m-273.704 0c-184 15.722-339.13-45.322-419.478-235.444-8.279-19.582-10.087-41.878-13.948-58.748 89.113 8.105 173.704 13.67 257.774 23.966C746.47 677.226 836.66 785.679 835.2 901.157c-.278 21.704-7.304 30.504-28 32.278m647.165-808.418c-11.687 18.957-21.67 38.992-35.026 56.696-35.791 47.34-70.713 95.026-109.843 139.548-10.992 12.522-33.357 22.017-49.879 20.243-73.878-7.93-130.713 20.105-164.174 87.966-67.756-29.357-123.86-6.574-158.643 54.365-34.783-60.94-83.617-83.722-151.409-54.365-33.426-67.861-83.06-95.896-156.904-87.966-16.522 1.774-38.887-7.721-49.878-20.243-39.13-44.522-74.052-92.209-109.844-139.548-13.391-17.704-23.339-37.74-35.026-56.696-520.487 553.635-138.782 843.166-138.782 843.166 12.278 6.608 28.07 16.278 31.686 27.86 12.035 38.54 39.061 51.166 75.305 56.627 15.095 2.26 32.939 9.182 42.609 20.104 27.895 31.513 60.695 38.643 98.052 25.739 23.06-7.965 41.217-6.156 61.078 8.591 32.974 24.418 67.478 19.861 102.087.661 32.73-18.191 65.67-36.452 99.93-51.408 26.157-11.374 43.687-4.383 61.705 20.834 21.704 30.435 34.608 58.818 69.391 93.879 34.783-35.061 54.957-63.444 76.66-93.879 17.983-25.217 39.166-32.208 65.323-20.834 34.26 14.956 68.974 33.217 101.739 51.408 34.608 19.2 70.017 23.757 102.956-.66 19.896-14.748 39.965-16.557 62.992-8.592 27.79 9.6 42.504 8.07 77.287-6.296v626.957c0 38.26 31.304 69.565 69.565 69.565 38.26 0 69.565-31.304 69.565-69.565V999.696c0-1.287-.417-2.33-.035-3.653 3.618-11.582 18.713-21.252 30.991-27.86 0 0 380.974-289.53-139.478-843.166" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMasteryPathLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMasteryPathLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMasteryPathLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1601.459 857.069L1898 560.534 1601.459 264l-113.113 113.11 103.434 103.431h-206.867c-312.38 0-395.415 119.11-468.61 224.221-65.676 94.312-122.472 175.745-411.334 175.745H25v159.986h479.97c288.86 0 345.657 81.433 411.333 175.745 73.195 105.11 156.23 224.22 468.61 224.22h206.867l-103.434 103.432L1601.46 1657 1898 1360.466l-296.541-296.535-113.113 113.11 103.434 103.431h-206.867c-228.865 0-274.383-65.274-337.339-155.666-38.237-54.955-81.274-116.63-162.31-164.306 81.036-47.676 124.073-109.35 162.31-164.306 62.956-90.392 108.474-155.666 337.339-155.666h206.867l-103.434 103.43 113.113 113.11z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMaterialsRequiredLightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMaterialsRequiredLightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMaterialsRequiredLightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1712.806 461.086s0 .114-.114.114l.286-.743c0 .286 0 .457-.172.572v.057zm-580.574 912.171c-6.971 21.143-19.485 41.714-37.657 61.943-18.229 20.171-41.886 38.114-72.286 53.829-30.514 15.714-72 25.142-116.686 28.4v78.114h-57.486v-78.057c-70.115-5.086-126.458-25.657-166.515-64.115-40-38.514-63.143-98.4-69.372-168.057h134.172c-.571 31.6 8.8 63.143 28.515 83.886 19.657 20.8 41.257 32.914 73.143 38.629V1210.17c0-1.2-7.314-2.628-12.743-4.171-5.371-1.543-11.2-2.971-17.543-4.286-23.543-6.343-46.686-13.657-69.543-22.228-22.857-8.572-43.315-19.829-61.429-34-18.057-14.286-32.514-31.829-43.314-52.857-10.743-21.029-16.172-47.486-16.172-78.972 0-32.057 6.114-60.514 18.572-85.028 12.457-24.572 28.743-45.143 49.086-61.943C715.202 850.057 738.63 836.97 765.26 828c26.628-9.029 57.143-14.686 82.686-16.514V740.57h57.486v70.915c25.542 3.143 54.857 9.314 79.943 18.4 25.028 9.085 46.857 21.714 65.943 37.828 19.028 16.115 34.457 36.172 46.514 60.115 12.115 23.942 18.915 53.428 20.858 85.142H983.432c-.572-25.371-8.057-46.742-23.315-64.342-15.257-17.658-35.6-26.572-54.743-26.572v167.257c6.458 1.886 14.915 3.772 22.858 5.657 7.885 1.829 16.114 4.115 24.971 6.515 46.972 12.628 83.086 28.228 108.515 46.914 25.429 18.629 44.057 37.829 56.114 58.057 12.172 20.172 19.143 40.343 21.543 60.514 2.4 20.229 3.315 38 3.315 53.829 0 13.829-3.6 31.314-10.572 52.4l.114.057zM883.946 277.143c139.543 0 259.086 115.2 307.658 279.828H576.23c48.572-164.628 168.172-279.828 307.716-279.828zm829.66 181.314V460c.286-10.457-42.343-17.029-105.315-17.029h-271.086a859.832 859.832 0 0 1 14.457 38h256.572c3.2 0 6.286.8 9.258.858l-76.515 59.542c-12.743 5.715-67.543 15.6-137.372 15.6h-119.258C1232.176 328.914 1072.404 160 883.946 160c-188.515 0-348.402 168.857-400.573 396.857H265.372c-3.143 0-6.286.229-9.257.229l76.4-59.257c9.2-4.172 40.343-10.343 83.2-13.486 4.4-14.572 9.372-28.914 14.686-42.972-57.886 2.972-108.915 11.886-122.458 22.4L163.486 576.114c-2.857 2.172-3.772 4.172-3.2 6.286-.115-.343-.286-.629-.286-.971 7.771 192.914 15.429 385.885 23.143 579.028l23.143 579.029c0 .628.228 1.314.571 1.943.115.285.343.457.572.628.285.457.628.857 1.028 1.2l1.086.8c.629.343 1.029.743 1.6 1.029l1.6.8 1.943.971c.629.229 1.314.572 2 .743l2.4.914 2.4.743c1.829.572 3.714 1.086 5.657 1.372l3.257.742 3.2.572 3.6.743 1.543.285 1.943.286 5.086.743c.571 0 1.314.171 1.943.286l1.828.171 3.372.343 2.514.286c.743 0 1.657 0 2.4.228l3.029.286 1.657.114c1.6.115 3.257.286 4.971.343l1.6.114h.114l6.458.4c.628 0 1.2 0 1.828.115.743 0 1.543 0 2.4.171.8.114 1.486 1.486 2.229 1.486 2.114.114 4.228 1.657 6.343 1.657h.114c.457 0 .914-1.429 1.429-1.429 1.6 0 3.2-.628 4.742-.628 1.429 0 2.915-.343 4.229-.343.571 0 .971-.171 1.429-.114.342 0 .571-.115.857 0 2.114 0 4.228 1.2 6.343 1.2 1.314 0 2.685 1.2 4 1.2h1140.804c2 0 4.057-1.2 5.943-1.315 1.829 0 3.429.572 5.086.572.171 0 .285.743.4.743h.285c1.772 0 3.6-1.372 5.372-1.429 1.657 0 3.314-.743 4.971-.8.743 0 1.486-.4 2.286-.4l1.086-.171 1.371-.115c1.543 0 3.143-.114 4.8-.285l4.515-.286c.628 0 1.2 0 1.714-.114h.971c.629-.115 1.315-.115 2-.172 1.772-.114 3.6-1.2 5.257-1.314 1.658-.114 3.6-1.371 5.258-1.371.171 0 .342.971.628.971 2.629-.114 5.257.171 7.886 0 .457 0 .914.114 1.371 0 6.115-.4 11.943-.914 17.772-1.486h1.086l5.657-.743 3.485-.4h.858l8.343-1.2c.342 0 .628 0 .914-.114l2.514-.343c1.657-.228 3.486-.571 5.143-.743l1.943-.342 4-.572 2.971-.571 2.629-.629 3.486-.571 2.057-.457 3.657-.858 2.4-.571c.286 0 .629 0 .857-.114 1.886-.457 3.772-.972 5.6-1.429l.743-.228 1.2-.4c.914-.286 1.771-.572 2.743-.743l3.257-1.029.571-.171h.172a86.745 86.745 0 0 0 5.371-2.057c.229 0 .4-.172.629-.286l.457-.114 2.629-1.143c.457-.286.8-.515 1.2-.629l.628-.343.457-.228 2-1.2 1.2-.915 144.515-112.285c.114 0 .286-.172.4-.286.457-.4.914-.8 1.314-1.2l.8-1.086s0-.114.115-.114c.114 0 0 0 0-.114.228-.4.457-.915.571-1.315.114-.4 0-.685 0-1.2L1713.72 458.114l-.114.343zM789.374 941.371c-8.229 6.515-14.743 14.858-19.486 24.572-4.743 9.714-7.2 21.257-7.2 34.457 0 20.743 6.572 36.914 20 48.229 13.372 11.371 33.657 20.457 65.6 27.314v-154c-12.742 0-21.2 1.6-31.371 4.743-10.172 3.143-19.257 8.057-27.543 14.685zm195.315 318.515c-15.543-12.286-40.686-23.486-78.972-33.543v181.428c12.743-1.2 22.743-3.942 35.2-8.114 12.4-4.114 23.2-9.886 33.086-17.428 9.772-7.543 17.772-16.858 24.172-27.886 6.4-11.086 9.543-24.057 9.543-39.2 0-24.572-7.543-42.972-23.086-55.2l.057-.057z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMaterialsRequiredLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMaterialsRequiredLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMaterialsRequiredLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M754.057 574.686c7.6-12.343 15.886-23.829 24.743-34.115h245.371c8.972 10.343 17.143 21.772 24.743 34.115H754.057zM901.486 407.77c-112.8.058-209.429 94.629-248.743 228h497.6c-39.429-133.371-136.057-227.942-248.857-228zm670.057 149.6c.171-.171.171-.457.343-.685-.057.228-.057.343-.172.514l-.114.114-.057.057zm38.057 942.458c0 .342-.229.685-.4 1.085v.115c0 .114-.114 0-.114.114a8.429 8.429 0 0 1-1.657 1.828l-.343.286-116.743 91.543-.972.629-1.542.914-.343.171-.4.172c-.172 0-.686.4-1.143.571-.514.343-1.314.572-2.057.914l-.457.172c-.172 0-.229.114-.4.171l-1.543.572c-.915.4-1.829.743-2.8 1.143h-.172l-.571.171-2.572.743c-.742.228-1.485.457-2.228.571l-.972.343-.571.172c-1.486.4-2.971.8-4.514 1.142-.229 0-.515.115-.686.172l-1.943.4-3.086.686-1.657.342-2.8.572-2.228.4-2.343.343-3.257.514c-.572 0-1.029.171-1.543.286-1.372.285-2.8.571-4.229.685l-2 .343c-.228 0-.457 0-.685.115l-6.686.914h-.8l-2.8.343-4.572.571h-.914c-4.628.572-9.428 1.029-14.343 1.429-.4 0-.743 0-1.085.114l-6.458.514h-.342c-1.429 0-2.8.172-4.286.229l-4.286.228c-.457 0-.971 0-1.486.115h-.8l-1.371.171-3.771.172c-1.315 0-2.515.114-3.829.171h-3.829c-1.314.114-2.685.114-4.057.171-1.371 0-2.8 0-4.285.115h-4.515l-4.857.114H429.83c-.4 0-.743 0-1.143-.114h-3.315l-3.942-.172h-1.315l-5.143-.228c-.514 0-1.085 0-1.828-.115-.743-.114-1.257 0-1.886-.114-.571 0-1.028 0-1.486-.114l-5.257-.343h-.114c-.4 0-.743 0-1.086-.114-1.428-.115-2.8-.172-4.114-.343l-1.314-.057c-.857 0-1.715-.172-2.457-.229-.743 0-1.429-.114-2.058-.171l-2-.286-2.8-.343-1.428-.228c-.572 0-1.143-.172-1.714-.229l-4.058-.571-1.714-.229c-.514 0-.686-.171-1.086-.229l-2.971-.514-2.629-.457a35.49 35.49 0 0 1-2.628-.571c-.743-.172-1.486-.343-2.229-.572l-2.4-.743-1.885-.514-1.943-.686c-.515-.171-1.086-.343-1.6-.571l-1.657-.8-1.143-.514-1.257-.915-.915-.571c-.285-.343-.571-.686-.8-1.086a1.796 1.796 0 0 1-.571-.571 2.874 2.874 0 0 1-.457-1.543c-6.172-157.257-12.457-314.514-18.686-471.829l-18.571-471.771c0 .343.171.571.228.857-.571-1.657.172-3.371 2.514-5.143l116.8-91.486c10.915-8.571 52.058-15.885 99.029-18.228a587.813 587.813 0 0 0-11.943 35.028c-34.628 2.515-59.771 7.658-67.2 10.972L393.83 635.6c2.457.114 5.028.114 7.542.114h176.343c42.115-186.971 171.257-323.543 323.772-323.543 152.514 0 281.657 136.572 323.828 323.543h96.457c56.4 0 100.743-7.943 110.972-12.685l61.771-48.4H1279.6c-3.543-11.658-7.543-22.972-11.714-34.115h219.143c50.914 0 85.485 6.286 85.085 14.8l.115-.228 37.485 943.828c0 .343-.114.572-.171.972l.057-.057zM1664.457 160H255.543C202.8 160 160 202.743 160 255.543v1408.914c0 52.8 42.743 95.543 95.543 95.543h1408.914c52.8 0 95.543-42.743 95.543-95.543V255.543c0-52.743-42.743-95.543-95.543-95.543zM901.543 407.771h-.114.114zm92.286 877.315h-.058c-5.142 8.971-11.771 16.571-19.6 22.743-7.828 6.171-17.028 10.971-27.028 14.342-10.057 3.372-19.6 5.6-28.857 6.515v-147.943c30.343 8.286 51.771 17.314 64.343 27.428 12.571 10.058 18.857 24.972 18.857 45.029 0 12.343-2.572 22.971-7.657 31.886zm-120.972-226.8c-24.628-5.6-42.343-13.086-53.143-22.286-10.8-9.257-16.114-22.4-16.114-39.314 0-10.8 1.886-20.115 5.771-28.115 3.829-7.942 9.086-14.628 15.772-20 6.686-5.371 14.114-9.371 22.4-11.942 8.286-2.572 16.628-3.886 25.314-3.886v125.543zm218.057 106.457l-.171-.114c-9.714-16.458-24.857-32.286-45.429-47.372-20.514-15.086-49.828-27.886-87.771-38.057-7.257-2.114-14-3.943-20.343-5.429l-18.857-4.628V932.857c17.486 0 32.457 7.257 44.743 21.543 12.343 14.229 18.685 31.886 19.2 52.343h109.371c-1.543-26.686-7.257-49.772-16.971-69.257-9.657-19.486-22.343-35.829-37.715-48.915-15.371-13.028-33.257-23.314-53.485-30.8-20.286-7.485-42-12.285-65.029-14.914v-59.371h-45.486v59.371c-23.085 1.486-45.428 6-66.971 13.429-21.543 7.371-40.571 18-56.971 31.6-16.458 13.6-29.658 30.457-39.772 50.4-10.057 19.885-14.914 43.2-14.914 69.371 0 25.657 4.343 47.029 13.086 64.286 8.742 17.2 20.457 31.543 35.028 43.086 14.686 11.542 31.2 20.8 49.657 27.771 18.457 6.914 37.2 12.971 56.229 18.057 8.4 1.657 16.628 4 24.628 6.914v160.858c-23.485-4.572-43.314-15.372-59.2-32.343-15.885-16.972-23.6-40-23.085-69.257H682.057c5.086 60.571 23.886 106.571 56.172 137.828 32.285 31.314 77.2 49.086 134.742 53.2v65.486h45.543v-65.486c38.515-2.571 70.057-10.343 94.686-23.143 24.629-12.8 44.229-27.428 58.857-43.885 14.572-16.458 24.743-33.258 30.4-50.343 5.657-17.143 8.514-31.543 8.514-42.857 0-12.858-.914-27.429-2.685-43.886-1.772-16.4-7.543-32.857-17.372-49.2z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMatureLightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMatureLightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMatureLightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1429.843 160L1760 1413.782l-341.087 92.987-223.5-848.696 71.762 890.015-284.33 77.466-375.032-807.236 223.43 848.625L490.09 1760 160 506.288l530.708-144.724 295.736 704.881-87.24-761.721L1429.843 160" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMatureLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMatureLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMatureLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1610 160H310c-150 0-150 151.493-150 151.493v1300S160 1760 310 1760h1300c150 0 150-148.507 150-148.507v-1300S1760 160 1610 160zm-244.85 1288.657l-196.568-725 63.209 760.298-250.15 66.194-329.925-689.627 196.568 725L548.134 1665 257.761 594.03l466.866-123.657 260.224 602.164-76.791-650.746 466.865-123.657 290.448 1071.045-300.074 79.478h-.15z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMediaLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMediaLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMediaLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 1520h160v-160h-160v160zm-320 0h160v-160h-160v160zm-320 0h160v-160H720v160zm-320 0h160v-160H400v160zm960-960h160V400h-160v160zm-320 0h160V400h-160v160zm-320 0h160V400H720v160zm-320 0h160V400H400v160zm1280.08 1040L1680 320H240v1280h1440.08zM1840 320v1280c0 88.24-71.76 160-160 160H240c-88.24 0-160-71.76-160-160V320c0-88.32 71.76-160 160-160h1440c88.24 0 160 71.68 160 160zM800 720l480 240-480 240V720z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMessageLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMessageLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMessageLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 1321V695.32l597.6 373.52A80.132 80.132 0 0 0 960 1081c14.72 0 29.44-4.08 42.4-12.16l597.6-373.6.08 625.76H320zm1129.04-720L960 906.6 470.96 601h978.08zM1600 441H320c-88.24 0-160 71.76-160 160v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160V601c0-88.24-71.76-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowDownLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowDownLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowDownLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowLeftLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowLeftLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowLeftLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M694.018 926.244c-27.296 18.796-27.3 49.268 0 68.067l509.835 351.074c27.297 18.796 49.425 7.18 49.425-25.96V601.13c0-33.133-22.125-44.758-49.425-25.96L694.018 926.245z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowRightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowUpLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowUpLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowUpLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M994.034 694.296c-18.796-27.297-49.269-27.3-68.067 0L574.893 1204.13c-18.797 27.296-7.18 49.424 25.959 49.424h718.297c33.133 0 44.757-22.124 25.959-49.424L994.034 694.296z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMinimizeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMinimizeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMinimizeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797"/>\n        <path d="M1358.5 1039.7h-797V880.3h797z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconModuleLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconModuleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconModuleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M441.395 645.5l518.137 230.338L1477.589 645.5 959.532 415.16 441.395 645.5zm518.137 396.315c-11.016 0-21.953-2.298-32.255-6.816l-713.25-317.053c-28.53-12.761-46.995-41.058-46.995-72.446 0-31.389 18.465-59.686 46.995-72.368l713.25-317.052a79.321 79.321 0 0 1 64.43 0l713.25 317.052a79.09 79.09 0 0 1 47.075 72.368c0 31.388-18.466 59.685-47.075 72.446L991.707 1035c-10.302 4.518-21.239 6.816-32.175 6.816z"/>\n        <path d="M1752 832.434L958.073 1193.24 167 863.584v171.605l761.989 317.687c9.747 4.2 20.13 6.024 30.511 6.024 11.174 0 22.348-2.299 32.73-6.975l759.77-345.35V832.434z"/>\n        <path d="M1752 1149.487l-793.927 360.805L167 1180.637v171.605l761.989 317.686c9.747 4.201 20.13 6.024 30.511 6.024 11.174 0 22.348-2.298 32.73-6.975l759.77-345.35v-174.14z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoreLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoreLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoreLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M982.111 517.222c-97.82 0-176.889-79.346-176.889-177.11 0-97.855 79.07-177.112 176.89-177.112 97.73 0 176.888 79.257 176.888 177.111 0 97.765-79.158 177.111-176.889 177.111M982.111 1137.111c-97.82 0-176.889-79.346-176.889-177.111 0-97.854 79.07-177.111 176.89-177.111 97.73 0 176.888 79.257 176.888 177.111 0 97.765-79.158 177.111-176.889 177.111M982.111 1757c-97.82 0-176.889-79.346-176.889-177.111 0-97.854 79.07-177.111 176.89-177.111 97.73 0 176.888 79.257 176.888 177.11 0 97.766-79.158 177.112-176.889 177.112"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveDownBottomLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveDownBottomLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveDownBottomLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M880 160v1006.88L696.56 983.44l-113.12 113.12L960 1473.12l376.56-376.56-113.12-113.12L1040 1166.88V160H880zM320 1760h1280v-160H320v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveDownLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveDownLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveDownLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1239.839 1185.847L1040 1370.962V160H880v1210.962l-199.839-185.115L560 1300l400 380 400-380z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveLeftLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveLeftLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveLeftLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M941.675 696.03l-90.85-113.56L548.4 960.5l302.425 378.03 90.85-113.56-147.325-184.158H1603V880.188H794.35L941.675 696.03zM318 1603h128.5V318H318v1285z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveRightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M979.325 696.03l90.85-113.56L1372.6 960.5l-302.425 378.03-90.85-113.56 147.326-184.158H318V880.188h808.65L979.326 696.03zM1603 1603h-128.5V318H1603v1285z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveUpLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveUpLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveUpLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 616.56L960 240 560 616.56l120.161 113.12L880 546.24V1760h160V546.24l199.839 183.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveUpTopLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveUpTopLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveUpTopLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 1760V753.12l183.44 183.44 113.12-113.12L960 446.88 583.44 823.44l113.12 113.12L880 753.12V1760h160zm560-1600H320v160h1280V160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMsExcelLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMsExcelLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMsExcelLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M898 894v299.91h181.657v-74.978H970.663V894zM1206.828 968.977h127.16V894h-127.16c-50.064 0-90.828 42.062-90.828 93.722 0 51.659 40.764 93.721 90.828 93.721h36.332c10.027 0 18.165 8.435 18.165 18.744 0 10.31-8.138 18.745-18.165 18.745H1116v74.977h127.16c50.064 0 90.828-42.062 90.828-93.722 0-51.659-40.764-93.721-90.828-93.721h-36.332c-10.027 0-18.165-8.435-18.165-18.744 0-10.31 8.138-18.745 18.165-18.745M687.761 1193.91l44.796-77.078 44.833 77.077h84.761l-87.231-149.954L862.15 894h-84.76l-44.834 77.077L687.761 894H603l87.195 149.955L603 1193.909zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>\n        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMsPptLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMsPptLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMsPptLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1133 879v74.977h83.578v224.932h83.577V953.977h83.578V879zM631.578 953.977h41.788c23.026 0 41.79 16.795 41.79 37.489 0 20.694-18.764 37.489-41.79 37.489h-41.788v-74.978zm0 149.955h41.788c69.119 0 125.367-50.46 125.367-112.466C798.733 929.46 742.485 879 673.366 879H548v299.91h83.578v-74.978zM1007.155 991.466c0 20.694-18.763 37.489-41.789 37.489h-41.788v-74.978h41.788c23.026 0 41.79 16.795 41.79 37.489zM840 879v299.91h83.578v-74.978h41.788c69.119 0 125.367-50.46 125.367-112.466 0-62.006-56.248-112.466-125.367-112.466H840zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>\n        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMsWordLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMsWordLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMsWordLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1271.165 964.73h125.252v-82.273h-125.252c-68.996 0-125.165 55.427-125.165 123.302v82.058c0 67.874 56.169 123.258 125.165 123.258h125.252v-82.272h-125.252c-22.994 0-41.533-18.33-41.533-40.986v-82.058c0-22.64 18.54-41.03 41.533-41.03zm-458.792 82.036c0-90.494-74.839-164.309-166.828-164.309H562v328.618h83.545c91.989 0 166.828-73.815 166.828-164.309zM646 965.457c45.878 0 83.415 36.84 83.415 82.058 0 45.235-37.537 82.059-83.415 82.059V965.457zm208 40.088v82.058c0 67.875 56.212 123.088 125.208 123.088s125.209-55.213 125.209-123.088v-82.058c0-67.875-56.213-123.088-125.209-123.088-68.996 0-125.208 55.213-125.208 123.088zm167.154.941v82.059c0 22.656-18.584 41.029-41.577 41.029-22.994 0-41.577-18.373-41.577-41.03v-82.058c0-22.64 18.583-41.029 41.577-41.029 22.993 0 41.577 18.39 41.577 41.03zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>\n        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMutedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMutedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMutedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1088.099 1503.269l-227.439-325.26L1088.1 950.57v552.699zM1732.41 306.175l-118.627-118.627-1426.21 1426.21L306.2 1732.385l433.904-433.82 219.804 314.186c34.984 41.612 80.455 60.32 128.107 60.32 22.064 0 43.625-4.194 64.096-12.667 63.005-26.008 103.693-86.915 103.693-155.122V782.865l476.606-476.69zM500.71 1063.392V750.297h295.393l291.87-417.209v143.04l164.853-164.852c-7.047-59.901-43.96-112.168-100.757-135.49-61.999-25.672-135.49-10.99-182.723 36.41L708.685 582.507H500.71c-92.536 0-167.79 75.254-167.79 167.79v335.579c0 40.52 15.018 77.183 39.011 106.294l128.779-128.778z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNextUnreadLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNextUnreadLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNextUnreadLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M639.5 801L160 1040.75V1760h959v-719.25L639.5 801zm0 135L999 1115.816v225.368L639.5 1521 280 1341.184v-225.368L639.5 936zM400 1162v120l240 120 240-120v-120H400zM1272.552 322.696l182.752 182.752H771v159.4h684.304L1272.552 847.6l112.696 112.696 375.227-375.148L1385.248 210z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNotGradedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNotGradedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNotGradedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M615.871 423.458C715.205 359.523 833.351 322.4 960 322.4c351.557 0 637.6 286.043 637.6 637.6 0 126.649-37.123 244.795-101.058 344.129l-1.986-1.985-329.85-329.85 195.125-273.216-162.11-115.724-175.81 246.143-406.04-406.039zM493.16 526.172C387.256 640.054 322.4 792.6 322.4 960c0 351.557 286.043 637.6 637.6 637.6 167.4 0 319.946-64.856 433.828-170.76l-11.984-11.984-311.057-311.057-177.759 248.899-322.307-322.227 140.91-140.91 155.973 155.973 60.38-84.536L493.16 526.172zM960 1757c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNoteDarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoteDarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNoteDarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1438.2 720.9H481.8V561.5h956.4v159.4zm0 318.8H481.8V880.3h956.4v159.4zm-239.1 318.8H481.8v-159.4h717.3v159.4zM1597.6 163H322.4C234.49 163 163 234.49 163 322.4v1275.2c0 87.91 71.49 159.4 159.4 159.4h1275.2c87.91 0 159.4-71.49 159.4-159.4V322.4c0-87.91-71.49-159.4-159.4-159.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNoteLightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoteLightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNoteLightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1691.835 1691.76H228.909V228.903h1463.2l-.274 1462.857zm.274-1645.714H228.91c-100.87 0-182.9 82.011-182.9 182.857V1691.76c0 100.846 82.03 182.857 182.9 182.857h1463.2c100.87 0 182.9-82.011 182.9-182.857V228.903c0-100.846-82.03-182.857-182.9-182.857z"/>\n        <path d="M1509.2 503.143H411.8V686h1097.4zM1509.2 868.857H411.8v182.857h1097.4zM1234.85 1234.571H411.8v182.858h823.05z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOffLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOffLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOffLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1226.188 392.261v196.86c158.615 92.009 265.687 263.275 265.687 459.426 0 293.03-238.322 531.333-531.375 531.333s-531.375-238.303-531.375-531.333c0-196.15 107.072-367.417 265.688-459.427V392.261C435.5 497.643 252 751.886 252 1048.547c0 390.618 317.85 708.444 708.5 708.444s708.5-317.826 708.5-708.444c0-296.661-183.502-550.904-442.813-656.286"/>\n        <path d="M1049.063 871.444H871.937V163h177.125z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOutcomesLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOutcomesLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOutcomesLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M783.95 1057.053c0 44.077 35.757 79.994 79.994 79.994 44.236 0 79.993-35.917 79.993-79.994 0-44.237-35.757-79.994-79.993-79.994-44.237 0-79.994 35.757-79.994 79.994zM1777 257.112L1663.889 144l-336.534 336.535-223.422-223.423V817.07h559.956l-223.423-223.424L1777 257.112zm-1153.038 799.94c0-132.31 107.672-239.981 239.982-239.981V657.082c-220.543 0-399.97 179.427-399.97 399.97 0 220.545 179.427 399.972 399.97 399.972 220.542 0 399.968-179.427 399.968-399.971h-159.987c0 132.31-107.672 239.982-239.981 239.982-132.31 0-239.982-107.672-239.982-239.982zm239.982 559.96c-308.776 0-559.957-251.182-559.957-559.96 0-308.776 251.18-559.958 559.957-559.958V337.106C467.014 337.106 144 660.042 144 1057.053 144 1454.063 467.015 1777 863.944 1777c396.928 0 719.943-322.936 719.943-719.947H1423.9c0 308.777-251.18 559.959-559.956 559.959z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOutdent2Line;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOutdent2Line(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOutdent2Line',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M239.4 402.333H1674V243H239.4zM717.6 721H1674V561.667H717.6zM717.6 1039.667H1674V880.333H717.6zM717.6 1358.333H1674V1199H717.6zM239.4 1677H1674v-159.333H239.4zM558.2 482L80 960l478.2 478z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOutdentLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOutdentLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOutdentLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M239.4 402.333H1674V243H239.4zM717.6 721H1674V561.667H717.6zM717.6 1039.667H1674V880.333H717.6zM717.6 1358.333H1674V1199H717.6zM239.4 1677H1674v-159.333H239.4zM558.2 482L80 960l478.2 478z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPaintLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPaintLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPaintLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1636.756 455.68L894.11 1202.831c-13.585-23.236-29.088-45.346-48.508-64.883-19.419-19.537-41.795-34.813-65.13-48.079l743.285-747.876c30.128-30.31 82.791-30.31 112.999 0 15.104 15.196 23.415 35.456 23.415 56.843 0 21.466-8.311 41.647-23.415 56.842M732.603 1479.084c-83.35 83.857-212.173 110.47-308.87 117.705 30.288-70.59 27.331-131.051 24.934-180.175-6.953-141.503 86.547-212.094 170.937-212.094 42.674 0 82.792 16.723 113 47.114 62.572 62.872 62.652 164.337 0 227.45M1820 398.837c0-64.4-24.933-124.941-70.165-170.447-90.543-91.173-248.534-91.173-339.077-.08L594.91 1049.107c-74.32 5.467-146.963 34.17-201.305 88.841-113.08 113.685-108.364 209.521-104.608 286.544 3.276 66.169 5.674 113.926-73.761 193.843L100 1734.272C245.125 1752.844 279.328 1760 359.243 1760h.08c119.552 0 341.714-21.708 486.28-167.23 55.3-55.557 86.467-128.238 91.581-205.904l812.571-817.422C1795.067 523.858 1820 463.317 1820 398.837" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPaperclipLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPaperclipLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPaperclipLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M846.615 1757C626.666 1757 467 1581.432 467 1339.524v-645.19C467 391.396 679.13 163 960.5 163S1454 391.397 1454 694.333v531.334h-151.846V694.333c0-219.896-143.723-379.523-341.654-379.523-197.931 0-341.654 159.627-341.654 379.523v645.19c0 132.303 70.457 265.667 227.77 265.667 157.312 0 227.769-133.364 227.769-265.666V770.238c0-45.695-11.085-151.81-113.885-151.81-102.8 0-113.885 106.115-113.885 151.81v531.333H694.77V770.238c0-181.64 106.824-303.619 265.731-303.619 158.907 0 265.73 121.979 265.73 303.62v569.285c0 241.908-159.665 417.476-379.615 417.476" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPartialLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPartialLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPartialLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797"/>\n        <path d="M1358.5 1039.7h-797V880.3h797z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPdfLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPdfLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPdfLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M670 1038.92h36.341c20.025 0 36.342-18.126 36.342-40.46S726.366 958 706.34 958H670v80.92zm-.333 161.08H597V877h109c60.095 0 109 54.345 109 121.125s-48.905 121.125-109 121.125h-36.333V1200zM1324 957.75V877h-145.333c-40.076 0-72.667 36.257-72.667 80.75V1200h72.667v-121.125h109v-80.75h-109V957.75H1324zM924 958v161.84c40.085 0 72.683-36.293 72.683-80.92 0-44.587-32.598-80.92-72.683-80.92zm-.333-81c80.151 0 145.333 72.433 145.333 161.5S1003.818 1200 923.667 1200H851V877h72.667zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80zm-1120-80H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPeerGradedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPeerGradedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPeerGradedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1840 231.986L1727.959 120l-340.165 339.999-181.69-181.602-112.042 111.986 293.732 293.589zM593.222 736c88.292 0 164.465 41.1 211.208 103.337-77.904 63.412-124.647 150.309-124.647 250.123 0 34.055 5.194 64.586 15.58 95.118-32.892 12.917-65.785 22.311-102.14 22.311-143.691 0-259.682-105.686-259.682-234.857 0-129.172 115.991-234.858 259.681-234.858V736zm432.561 159.703c130.28 0 235.445 105.95 235.445 235.445 0 129.494-105.165 235.444-235.445 235.444-130.28 0-235.444-105.95-235.444-235.444 0-129.495 105.165-235.445 235.444-235.445zm-747.79 258.728c67.648 80.235 160.468 129.005 265.875 132.151-42.478 59.783-69.222 132.151-69.222 210.813v103.833H160v-261.156c0-81.808 48.77-152.603 117.992-187.214v1.573zm1022.597 157.323c69.222 34.61 117.992 105.406 117.992 187.214v261.156H631.968v-261.156c0-81.808 48.77-152.603 117.992-187.214 70.796 83.38 166.763 132.151 275.315 132.151 108.553 0 204.52-50.343 275.315-132.151z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPeerReviewLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPeerReviewLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPeerReviewLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1642.607 277.398C1568.012 202.399 1467.952 160 1360.025 160c-220.586 0-399.975 179.463-399.975 399.992h133.325c0-147.064 119.593-266.661 266.65-266.661 71.862 0 137.658 29.399 187.388 79.265l-120.726 120.73H1760V160l-117.393 117.398zM1360.025 826.686c-71.796 0-137.591-29.333-187.388-79.265l120.726-120.73H960.05v333.326l117.593-117.598c74.528 74.265 176.322 117.598 282.382 117.598 220.586 0 399.975-179.397 399.975-399.992h-133.325c0 147.064-119.593 266.661-266.65 266.661zM447.82 921c71.906 0 133.942 33.472 172.01 84.159-63.447 51.643-101.514 122.412-101.514 203.702 0 27.734 4.23 52.6 12.689 77.464-26.789 10.52-53.577 18.171-83.185 18.171-117.023 0-211.487-86.071-211.487-191.27 0-105.198 94.464-191.27 211.487-191.27V921zm352.281 130.064c106.1 0 191.748 86.286 191.748 191.748 0 105.461-85.647 191.748-191.748 191.748-106.1 0-191.748-86.287-191.748-191.748 0-105.462 85.648-191.748 191.748-191.748zm-609.007 210.71c55.094 65.344 130.687 105.062 216.531 107.625-34.594 48.687-56.375 107.625-56.375 171.687v84.563H95V1412.96c0-66.625 39.719-124.281 96.094-152.468v1.28zm832.812 128.125c56.375 28.187 96.094 85.844 96.094 152.469v212.687H479.375v-212.687c0-66.625 39.719-124.282 96.094-152.47 57.656 67.907 135.812 107.626 224.218 107.626 88.407 0 166.563-41 224.22-107.625z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPinLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPinLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPinLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1086.95 1149.79l-35.355-35.355-35.356 35.355-420.417 420.418c-32.79-63.098-22.823-143.235 29.91-195.968l153.74-153.739 35.355-35.356-35.355-35.355-307.479-307.479-35.355-35.355-35.356 35.355-76.869 76.87-5.142 6.03c-19.465 26.881-57.036 32.892-83.917 13.427-26.077-18.884-32.51-54.806-15.1-81.478l.127-.131a58.555 58.555 0 0 1 4.982-4.982l5.223-5.383a58.621 58.621 0 0 1 7.473-7.473l618.282-617.995c22.928-22.928 60.101-22.928 83.03 0 22.927 22.927 22.927 60.101 0 83.028l-76.87 76.87-35.356 35.355 35.355 35.356 307.478 307.478 35.356 35.355 35.355-35.355 153.74-153.739c52.733-52.734 132.87-62.701 195.967-29.911l-420.418 420.418-35.355 35.355 35.355 35.355 451.993 451.993 36.88 130.754-118.117-45.935-453.784-453.783zm695.37 569.094l-67.646-239.833-3.542-12.557-9.225-9.226-425.863-425.862 425.863-425.862 35.355-35.355-35.355-35.356c-104.083-104.083-274.106-104.083-378.189 0l-118.384 118.384-236.768-236.768 41.514-41.514c61.981-61.98 61.981-162.47 0-224.45-61.98-61.98-162.469-61.98-224.45 0L172.037 764.078a158.839 158.839 0 0 0-15.86 15.743 159.194 159.194 0 0 0-9.274 9.391l-3.638 3.639c-54.189 74.832-38.174 174.924 33.44 226.781 70.432 51.003 168.412 36.349 220.958-32.279l38.71-38.711 235.71 235.18 1.323 1.323-118.384 118.384c-104.083 104.083-104.083 274.107 0 378.189l35.355 35.356 35.355-35.356 425.863-425.862 425.862 425.862 7.434 7.435 9.8 3.81 221.383 86.094 93.47 36.349-27.225-96.522z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPinterestLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPinterestLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPinterestLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600.02 0H319.98C143.25.033 0 143.31 0 320.04v1279.92A319.98 319.98 0 0 0 319.98 1920h1280.04c176.73-.033 319.98-143.31 319.98-320.04V320.04A319.98 319.98 0 0 0 1600.02 0zM1053 1282.8c-87.18-6.84-123.78-50.04-192.12-91.56-37.62 197.22-83.58 386.28-219.6 485.04-42-298.08 61.62-522 109.8-759.6-82.2-138.18 9.84-416.4 183-347.76 213 84.3-184.5 513.78 82.38 567.42 278.7 55.92 392.4-483.6 219.72-658.98-249.6-253.32-726.72-5.76-668.1 357 14.28 88.62 105.9 115.5 36.6 237.9-159.78-35.4-207.48-161.4-201.36-329.4 9.96-275.1 247.2-467.64 485.1-494.22 300.9-33.6 583.32 110.4 622.32 393.6 43.92 319.44-135.84 665.4-457.62 640.56h-.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPlusLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPlusLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPlusLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPostToSisLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPostToSisLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPostToSisLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M961.12 1106.68l331.04 331.44-99.44 99.6-161.28-161.48V1840H890.8v-463.76l-161.28 161.48-99.44-99.6 331.04-331.44zM1540.84 768c-10.12 22.4-25.2 41.76-45.2 58-20 16.28-44.8 28.96-74.4 38-29.6 9.08-63.84 13.6-102.8 13.6-31.48 0-62-3.84-91.6-11.6-29.6-7.72-55.72-19.84-78.4-36.4-22.64-16.52-40.64-37.6-54-63.2-13.32-25.6-19.72-56-19.2-91.2h121.6c0 19.2 3.48 35.48 10.4 48.8 6.96 13.36 16.16 24.16 27.6 32.4 11.48 8.28 24.96 14.4 40.4 18.4 15.48 4 31.48 6 48 6 11.2 0 23.2-.92 36-2.8 12.8-1.84 24.8-5.44 36-10.8 11.2-5.32 20.56-12.64 28-22 7.48-9.32 11.2-21.2 11.2-35.6 0-15.44-4.92-28-14.8-37.6-9.84-9.6-22.8-17.6-38.8-24-16-6.4-34.12-12-54.4-16.8-20.24-4.8-40.8-10.12-61.6-16-21.32-5.32-42.12-11.84-62.4-19.6-20.24-7.72-38.4-17.72-54.4-30-16-12.24-28.92-27.6-38.8-46-9.84-18.4-14.8-40.64-14.8-66.8 0-29.32 6.28-54.8 18.8-76.4 12.56-21.6 28.96-39.6 49.2-54 20.28-14.4 43.2-25.04 68.8-32 25.6-6.92 51.2-10.4 76.8-10.4 29.88 0 58.56 3.36 86 10 27.48 6.68 51.88 17.48 73.2 32.4 21.36 14.96 38.28 34 50.8 57.2 12.56 23.2 18.8 51.36 18.8 84.4h-121.6c-1.04-17.04-4.64-31.2-10.8-42.4-6.12-11.2-14.24-20-24.4-26.4-10.12-6.4-21.72-10.92-34.8-13.6-13.04-2.64-27.32-4-42.8-4-10.12 0-20.24 1.08-30.4 3.2-10.12 2.16-19.32 5.88-27.6 11.2-8.24 5.36-15.04 12-20.4 20-5.32 8-8 18.16-8 30.4 0 11.2 2.16 20.28 6.4 27.2 4.28 6.96 12.68 13.36 25.2 19.2 12.56 5.88 29.88 11.76 52 17.6 22.16 5.88 51.08 13.36 86.8 22.4 10.68 2.16 25.48 6 44.4 11.6 18.96 5.6 37.76 14.56 56.4 26.8 18.68 12.28 34.8 28.68 48.4 49.2 13.6 20.56 20.4 46.8 20.4 78.8 0 26.16-5.04 50.4-15.2 72.8zm-645.6 96.8h125.6V293.6h-125.6v571.2zm-69.6-96.8c-10.12 22.4-25.2 41.76-45.2 58-20 16.28-44.8 28.96-74.4 38-29.6 9.08-63.84 13.6-102.8 13.6-31.44 0-62-3.84-91.6-11.6-29.6-7.72-55.72-19.84-78.4-36.4-22.64-16.52-40.64-37.6-54-63.2-13.32-25.6-19.72-56-19.2-91.2h121.6c0 19.2 3.48 35.48 10.4 48.8 6.96 13.36 16.16 24.16 27.6 32.4 11.48 8.28 24.92 14.4 40.4 18.4 15.48 4 31.48 6 48 6 11.2 0 23.2-.92 36-2.8 12.8-1.84 24.8-5.44 36-10.8 11.2-5.32 20.56-12.64 28-22 7.48-9.32 11.2-21.2 11.2-35.6 0-15.44-4.92-28-14.8-37.6-9.88-9.6-22.8-17.6-38.8-24-16-6.4-34.12-12-54.4-16.8-20.24-4.8-40.8-10.12-61.6-16-21.32-5.32-42.12-11.84-62.4-19.6-20.28-7.72-38.4-17.72-54.4-30-16-12.24-28.92-27.6-38.8-46-9.84-18.4-14.8-40.64-14.8-66.8 0-29.32 6.28-54.8 18.8-76.4 12.56-21.6 28.92-39.6 49.2-54 20.28-14.4 43.2-25.04 68.8-32 25.6-6.92 51.2-10.4 76.8-10.4 29.88 0 58.56 3.36 86 10 27.48 6.68 51.88 17.48 73.2 32.4 21.36 14.96 38.28 34 50.8 57.2 12.56 23.2 18.8 51.36 18.8 84.4h-121.6c-1.04-17.04-4.64-31.2-10.8-42.4-6.12-11.2-14.24-20-24.4-26.4-10.12-6.4-21.72-10.92-34.8-13.6-13.08-2.64-27.32-4-42.8-4-10.12 0-20.24 1.08-30.4 3.2-10.12 2.16-19.32 5.88-27.6 11.2-8.24 5.36-15.04 12-20.4 20-5.32 8-8 18.16-8 30.4 0 11.2 2.16 20.28 6.4 27.2 4.28 6.96 12.68 13.36 25.2 19.2 12.56 5.88 29.88 11.76 52 17.6 22.16 5.88 51.08 13.36 86.8 22.4 10.68 2.16 25.48 6 44.4 11.6 18.96 5.6 37.76 14.56 56.4 26.8 18.68 12.28 34.8 28.68 48.4 49.2 13.6 20.56 20.4 46.8 20.4 78.8 0 26.16-5.04 50.4-15.2 72.8zm802.08-688H292.32C219.32 80 160 139.28 160 212.36v724.2c0 73.44 59.24 132.36 132.32 132.36h1335.4c72.96 0 132.28-59.28 132.28-132.36v-724.2C1760 138.92 1700.8 80 1627.72 80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPrerequisiteLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPrerequisiteLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPrerequisiteLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1652.322 1040.534L258.812 1040c-55.317 0-98.812 42.749-98.812 96.078v528.271c0 53.276 43.049 95.651 98.421 95.651H1661.58c55.372 0 98.421-42.375 98.421-95.65v-528.272c0-53.276-52.305-95.544-107.622-95.544h-.056zM808.96 1358.48h76.16c0-10.453 1.027-21 3.08-31.64s5.507-20.347 10.36-29.12 11.293-15.867 19.32-21.28c8.027-5.413 17.827-8.12 29.4-8.12 17.173 0 31.267 5.32 42.28 15.96 11.013 10.64 16.52 25.48 16.52 44.52 0 11.947-2.707 22.587-8.12 31.92-5.413 9.333-12.133 17.733-20.16 25.2-8.027 7.467-16.893 14.28-26.6 20.44-9.707 6.16-18.853 12.227-27.44 18.2-16.8 11.573-32.76 22.96-47.88 34.16-15.12 11.2-28.28 23.427-39.48 36.68-11.2 13.253-20.067 28.28-26.6 45.08-6.533 16.8-9.8 36.587-9.8 59.36h287.84v-68.32H902.48c9.707-13.44 20.907-25.2 33.6-35.28a520.677 520.677 0 0 1 39.2-28.28 2976.634 2976.634 0 0 0 40.04-26.6c13.253-8.96 25.107-18.947 35.56-29.96 10.453-11.013 18.853-23.613 25.2-37.8 6.347-14.187 9.52-31.173 9.52-50.96 0-19.04-3.64-36.213-10.92-51.52-7.28-15.307-17.08-28.187-29.4-38.64s-26.6-18.48-42.84-24.08c-16.24-5.6-33.32-8.4-51.24-8.4-23.52 0-44.333 4.013-62.44 12.04s-33.133 19.227-45.08 33.6c-11.947 14.373-20.907 31.173-26.88 50.4-5.973 19.227-8.587 40.04-7.84 62.44zM1104 160v72h-72v-72h72zm-576 72h144v-72H528v72zm288 0h72v-72h-72v72zm576-72h-144v72h144v-72zm288 320v80h80v-80h-80zm-64-248.655s46.073.819 46.073 36.819V304h97.925v-72.655S1761.78 160 1664.665 160h-48.611v71.345H1616zM672 880v-72H528v72h144zm720-72h-144v72h144v-72zM160 559.623h80.284V480H160v79.623zM304 808h-35.06c-35.713 0-34.772-33.756-34.772-33.756V736H160v73.589S159.427 880 232.205 880H304v-72zm1358.056-72v38.233s-5.778 35.732-46.056 35.732V880h40.602c105.178 0 103.396-70.392 103.396-70.392V736H1662.056zM1032 808v72h72v-72h-72zm-216 0v72h72v-72h-72zM257.944 304v-35.877c0-33.628 46.056-36.818 46.056-36.818V160h-48.702C201.683 160 160 188.39 160 229.136V304h97.944zm774.269 416.498V317.109h-70.055c-2.496 20.496-7.536 13.833-15.168 24.68-7.68 10.849-17.04 20.16-28.08 26.88a115.607 115.607 0 0 1-37.632 14.113c-13.92 2.592-27.936 3.984-43.296 3.6l53.147 62.16h71.029v271.956h70.055z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPrinterLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPrinterLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPrinterLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 1080c0 44.16-35.84 80-80 80s-80-35.84-80-80 35.84-80 80-80 80 35.84 80 80zM560 520H400V40h1120v480h-160V200H560v320zm1040 880h-80v-160H400v160h-80V840c0-44.16 35.92-80 80-80v160h1120V760c44.08 0 80 35.84 80 80v560zM560 1720h800v-320H560v320zm960-1120h-160v160H560V600H400c-132.32 0-240 107.68-240 240v720h240v320h1120v-320h240V840c0-132.32-107.68-240-240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPublishLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPublishLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPublishLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1263.44 765.368l113.12 113.104L920 1334.966 623.44 1038.45l113.12-113.104L920 1108.759l343.44-343.391zm21.2 698.3H503.68c-107.84-18.637-188.32-114.624-188.32-225.888 0-87.107 51.84-167.176 132.08-204.21l64.72-29.916-10-80.469c-.48-3.44-1.2-6.719-1.28-10.158 0-99.026 81.12-179.574 180.64-179.574 21.44 0 43.36 4.239 65.12 12.718l107.76 41.674 23.2-113.184c25.84-125.982 138.48-217.329 267.92-217.329 150.88 0 273.52 121.983 273.52 272.041 0 14.718-1.6 30.316-4.96 48.953l-12 64.47 55.28 35.436c92.24 59.191 147.28 159.017 147.28 267.162 0 175.494-143.52 318.274-320 318.274zm329.2-712.618c.4-7.359.56-14.478.56-21.677C1614.4 471.65 1404.08 262 1145.52 262 958 262 790.88 374.304 717.04 539.88c-11.84-1.2-23.68-1.76-35.52-1.76-199.36 0-363.04 155.578-375.2 351.47C191.36 967.1 120 1097.56 120 1237.78c0 209.97 155.68 390.584 362.16 420.26l802.48.96c284.16 0 515.36-230.367 515.36-513.606 0-153.898-68.56-297.238-186.16-394.344z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuestionLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuestionLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuestionLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1260.48 770.64c0 52.24-12.8 96.24-38.48 131.92v-.08c-15.04 21.76-44 49.44-86.64 83.2l-42.16 33.12c-22.96 18.16-25.68 22.64-33.28 46.8-4.64 15.2.4 69.84 0 105.52H860c2.4-71.36 14.72-127.12 24.88-153.04 10.32-25.92 49.28-58.56 92-92.32L1020.4 890c14.16-10.8 25.6-23.44 34.24-36.24 15.76-22.08 23.68-46.72 23.68-73.28 0-30.56-8.8-58.56-26.48-83.68-17.52-25.04-49.76-37.76-96.4-37.76-45.92 0-78.48 15.68-97.68 46.64-19.28 30.96-22.56 72.88-22.56 96.72H656.96c4.8-107.04 44.16-195.92 118.48-243.68 46.8-30.56 104.4-46 172.64-46 89.6 0 164.16 21.6 223.44 65.04 59.28 43.44 88.96 107.6 88.96 192.88M1059.92 1360c0 55.2-44.72 100-99.92 100a99.821 99.821 0 0 1-86.56-50 100.113 100.113 0 0 1 0-100c17.84-30.88 50.8-49.92 86.56-49.92 55.2 0 99.92 44.72 99.92 99.92M960 1600c-353.44 0-640-286.48-640-640 0-353.44 286.56-640 640-640s640 286.56 640 640c0 353.52-286.56 640-640 640m0-1440c-441.84 0-800 358.16-800 800s358.16 800 800 800 800-358.16 800-800-358.16-800-800-800" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1015 432.485L584.242 1001H907v455.485L1338.451 888H1015z"/>\n        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsAvgLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsAvgLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsAvgLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M1208.1 1072.931c-11.574-10.574-17.171-27.295-17.171-49.764V664.991h-134v318.524c-13 26.435-28.852 46.921-49.287 61.46-20.435 14.54-45.214 21.81-74.148 21.81-31.104 0-54.697-9.253-70.61-27.758-15.914-18.504-23.955-43.12-23.955-73.85V664.99h-134v623.346c0 16.521 5.19 28.962 15.499 37.718 10.307 8.756 24.9 12.936 43.708 12.936h66.793v-118.558c0-12.887-.665-26.847-1.931-41.882-1.266-15.034-3.723-29.656-7.34-43.864 13.02 10.243 28.022 18.008 45.02 23.295 16.999 5.288 36.345 7.93 58.045 7.93 31.828 0 60.217-7.517 85.173-22.552 24.955-15.034 47.196-36.429 66.726-64.184 4.702 16.851 11.574 31.555 20.616 44.111 9.04 12.556 19.439 22.882 31.194 30.978 11.754 8.095 24.683 14.125 38.789 18.091 14.106 3.966 28.753 5.947 43.943 5.947 13.02 0 24.685-1.156 34.99-3.469 10.31-2.313 19.17-5.37 26.584-9.169 7.415-3.8 12.86-8.179 16.656-13.135 3.798-4.956 5.535-10.078 5.535-15.365v-48.174h-39.28c-20.252 0-35.976-5.486-47.55-16.06"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsDeviationLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsDeviationLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsDeviationLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1600c-353.52 0-640-286.48-640-640 0-353.44 286.48-640 640-640 353.44 0 640 286.48 640 640s-286.48 640-640 640m0-1440c-442 0-800 358.24-800 800 0 441.92 358.16 800 800 800 441.92 0 800-358.16 800-800 0-441.92-358.24-800-800-800"/>\n        <path d="M1128.8 1189.04c-39.36 52.08-99.44 78.08-180.24 78.08-78.16 0-138-24.96-179.44-74.88-41.52-49.92-62.24-122.88-62.24-219.04 0-48.56 5.52-91.68 16.48-129.28 10.96-37.68 28.48-69.28 52.56-94.88 24.08-25.68 55.04-44.944 92.72-58.304 37.76-13.36 83.12-19.824 136.08-19.824h40.96c24.08 8 45.12 20.864 63.04 39.024s32.64 40.072 44.16 65.992c11.52 25.92 20.24 54.836 26.08 86.836 5.92 32 8.88 65.658 8.88 100.858 0 98.24-19.68 173.338-59.04 225.418zm-124.08-629.128c-71.68 0-135.28 9.564-190.64 28.524-55.44 18.96-102 46.022-139.68 81.302-37.76 35.2-66.24 78.17-85.52 128.89C569.6 849.349 560 906.476 560 969.996c0 64.08 9.36 121.362 28.08 171.762 18.72 50.48 45.04 93.36 79.04 128.562 34 35.2 74.96 62.08 122.88 80.48 47.92 18.4 101.04 27.6 159.36 27.6 59.92 0 113.76-10 161.36-30 47.68-20 88.08-48.16 121.28-84.48 33.12-36.32 58.56-79.44 76.24-129.36 17.68-49.92 26.48-105.04 26.48-165.36 0-69.92-11.36-129.503-34.08-179.183-22.8-49.6-54.72-90.104-96-119.104h193.52c7.52 0 14.16-1.536 20.08-4.176 5.92-2.72 10.8-6.248 14.88-10.488 4-4.32 6.83-9.004 8.99-14.124 2.16-5.04 2.99-10.044 2.99-14.844v-67.368h-440.38z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsHighLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsHighLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsHighLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M795 771h235.917l-441.544 441.632 102.968 102.896L1134 874.029V1110h145V626H795z"/>\n        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsLowLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsLowLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsLowLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1134 1015.862L692.341 574.319l-102.91 102.995L1030.917 1119H795v145h484V780h-145z"/>\n        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsTimeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsTimeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsTimeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1040 560H880v400c0 21.2 8.4 41.52 23.44 56.56l240 240 113.12-113.12L1040 926.88V560z"/>\n        <path d="M960 1680c-397.645 0-720-322.355-720-720s322.355-720 720-720 720 322.355 720 720-322.355 720-720 720m0-1600C473.99 80 80 473.989 80 960c0 486.01 393.99 880 880 880 486.011 0 880-393.99 880-880 0-486.011-393.989-880-880-880"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRefreshLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRefreshLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRefreshLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M510.03 508.094C627.875 389.769 788.2 320.006 961.968 320.006c352.974 0 640.026 287.132 640.026 640.026H1762C1762 518.894 1403.186 160 961.968 160c-217.209 0-417.617 87.123-564.983 235.05L241.94 240.002v480.02h480.02l-211.93-211.93zm903.94 903.94c-117.845 118.325-278.171 188.088-451.938 188.088-352.974 0-640.026-287.132-640.026-640.026H162c0 441.138 358.814 800.032 800.032 800.032 217.209 0 417.617-87.123 564.983-235.13l155.046 155.127v-480.02h-480.02l211.93 211.93z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRemoveBookmarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRemoveBookmarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRemoveBookmarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 160H560c-176.48 0-320 143.52-320 320v1200c0 32.32 19.52 61.52 49.36 73.92 29.92 12.32 64.32 5.44 87.2-17.36L720 1393.12l343.44 343.44A80.027 80.027 0 0 0 1120 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92V880h400c44.16 0 80-35.84 80-80V480c0-176.48-143.52-320-320-320zm160 560h-320V480c0-88.24 71.76-160 160-160s160 71.76 160 160v240zm-480-240v1006.88l-263.44-263.44c-15.6-15.6-36.08-23.44-56.56-23.44-20.48 0-40.96 7.84-56.56 23.44L400 1486.88V480c0-88.24 71.76-160 160-160h522.96C1055.6 367.12 1040 421.76 1040 480zm-98.4 243.55L858.05 640 710.8 787.298 563.55 640 480 723.55 627.298 870.8 480 1018.05l83.55 83.55L710.8 954.35l147.25 147.25 83.55-83.55L794.35 870.8 941.6 723.55z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRemoveFromCollectionLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRemoveFromCollectionLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRemoveFromCollectionLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M880 409.32v686.8h160v-686.8l183.44 183.36 113.12-113.12L960 103 583.44 479.56l113.12 113.12L880 409.32zm720 1246.832H320v-320h286.88l160 160h386.24l160-160H1600v320zm-353.12-480l-160 160H833.12l-160-160H160v640h1600v-640h-513.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRepliedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRepliedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRepliedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.94 160c-20.8 0-41.2 8.16-56.48 23.44l-720 720c-31.28 31.28-31.28 81.84 0 113.12l720 720a80.027 80.027 0 0 0 56.56 23.44c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92v-240h800.72c43.2 0 79.28-35.84 79.28-80.16v-799.6c0-43.76-35.44-80.24-79.28-80.24H960.02V240c0-32.32-19.52-61.52-49.36-73.92-10-4.08-20.4-6.08-30.72-6.08m-79.92 273.2V640h880v640h-880v206.88L273.22 960l526.8-526.8" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconReply2Line;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReply2Line(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconReply2Line',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.94 160c-20.8 0-41.2 8.16-56.48 23.44l-720 720c-31.28 31.28-31.28 81.84 0 113.12l720 720a80.027 80.027 0 0 0 56.56 23.44c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92v-240h800.72c43.2 0 79.28-35.84 79.28-80.16v-799.6c0-43.76-35.44-80.24-79.28-80.24H960.02V240c0-32.32-19.52-61.52-49.36-73.92-10-4.08-20.4-6.08-30.72-6.08m-79.92 273.2V640h880v640h-880v206.88L273.22 960l526.8-526.8" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconReplyAll2Line;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReplyAll2Line(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconReplyAll2Line',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <defs>\n        <path d="M1216.102 198.868L513.671 901.299c-30.517 30.517-30.517 79.843 0 110.36l702.431 702.43a78.075 78.075 0 0 0 55.18 22.869c10.068 0 20.215-1.951 29.893-5.932 29.111-12.097 48.155-40.585 48.155-72.116v-234.144h390.937c42.146 0 77.346-34.965 77.346-78.204V566.474c0-42.693-34.575-78.282-77.346-78.282H1349.33V254.048c0-31.531-19.044-60.02-48.155-72.116-9.756-3.98-19.903-5.932-29.971-5.932-20.292 0-40.194 7.961-55.102 22.868zm-22.868 289.324v156.095h468.283v624.383h-468.283v201.832L679.29 956.48l513.945-513.946v45.659zM124.86 890.679c-30.48 30.48-30.48 79.898 0 110.378l719.957 719.957c30.48 30.48 79.898 30.48 110.378 0 30.48-30.48 30.48-79.898 0-110.378l-649.358-647.25 614.322-647.25c30.48-30.48 30.48-79.898 0-110.378-30.48-30.48-79.898-30.48-110.378 0L124.86 890.679z" id="a"/>\n    </defs>\n    <use xlink:href="#a" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconReplyLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReplyLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconReplyLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.94 160c-20.8 0-41.2 8.16-56.48 23.44l-720 720c-31.28 31.28-31.28 81.84 0 113.12l720 720a80.027 80.027 0 0 0 56.56 23.44c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92v-240h800.72c43.2 0 79.28-35.84 79.28-80.16v-799.6c0-43.76-35.44-80.24-79.28-80.24H960.02V240c0-32.32-19.52-61.52-49.36-73.92-10-4.08-20.4-6.08-30.72-6.08m-79.92 273.2V640h880v640h-880v206.88L273.22 960l526.8-526.8" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconResetLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconResetLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconResetLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M962 160c-217.2 0-417.6 87.12-564.96 235.04L242 240v480h480L510.08 508.08C627.92 389.68 788.24 320 962 320c352.88 0 640 287.12 640 640s-287.12 640-640 640-640-287.12-640-640H162c0 441.12 358.88 800 800 800s800-358.88 800-800-358.88-800-800-800" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRssAddLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRssAddLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRssAddLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1682 800h-640V160H882v640H242v160h640v640h160V960h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRssLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRssLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRssLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M282 200v159.992c705.76 0 1280 574.21 1280 1279.932h160C1722 845.966 1076.08 200 282 200zm0 479.975v159.991c441.12 0 800 358.701 800 799.958h160c0-529.332-430.64-959.95-960-959.95zM442 1720c132.548 0 240-107.446 240-239.987 0-132.542-107.452-239.988-240-239.988s-240 107.446-240 239.988C202 1612.554 309.452 1720 442 1720z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRubricDarkLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRubricDarkLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRubricDarkLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M720.008 759.976h-320v320.007h320V759.976zm-320 800.017h320v-320.007h-320v320.007zM1360 1074.543v645.454H240V599.972h580.96C807.76 548.852 800 495.33 800 439.97H80V1880h1440v-805.458c-26.24 3.28-52.88 5.44-80 5.44-27.12 0-53.76-2.16-80-5.44zm-159.992 165.443h-320v320.007h320v-320.007zM1840 382.887h-342.88L1360 40l-137.2 342.887H880l296.64 250.406-159.52 366.728L1360 773.296l342.8 226.725-159.44-366.728L1840 382.887z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRubricLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRubricLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRubricLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M720.008 759.976h-320v320.007h320V759.976zm-320 800.017h320v-320.007h-320v320.007zM1360 1074.543v645.454H240V599.972h580.96C807.76 548.852 800 495.33 800 439.97H80V1880h1440v-805.458c-26.24 3.28-52.88 5.44-80 5.44-27.12 0-53.76-2.16-80-5.44zm-159.992 165.443h-320v320.007h320v-320.007zM1840 382.887h-342.88L1360 40l-137.2 342.887H880l296.64 250.406-159.52 366.728L1360 773.296l342.8 226.725-159.44-366.728L1840 382.887z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSearchAddressBookLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSearchAddressBookLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSearchAddressBookLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSearchLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSearchLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSearchLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSettings2Line;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSettings2Line(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSettings2Line',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1120c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm160-960H800l-93.76 187.44-198.8-66.24L281.2 507.44l66.24 198.8L160 800v320l187.44 93.76-66.24 198.8 226.24 226.24 198.8-66.24L800 1760h320l93.76-187.44 198.8 66.24 226.24-226.24-66.24-198.8L1760 1120V800l-187.44-93.76 66.24-198.8-226.24-226.24-198.8 66.24L1120 160zM960 1280c176.48 0 320-143.52 320-320s-143.52-320-320-320-320 143.52-320 320 143.52 320 320 320zm61.12-960l49.52 99.04 62 124.08 131.68-43.84 105.04-35.04 86.4 86.4-35.04 105.04-43.84 131.68 124.08 62 99.04 49.52v122.24l-99.04 49.52-124.08 62 43.84 131.68 35.04 105.04-86.4 86.4-105.04-35.04-131.68-43.84-62 124.08-49.52 99.04H898.88l-49.52-99.04-62-124.08-131.68 43.84-105.04 35.04-86.4-86.4 35.04-105.04 43.84-131.68-124.08-62-99.04-49.52V898.88l99.04-49.52 124.08-62-43.84-131.68-35.04-105.04 86.4-86.4 105.04 35.04 131.68 43.84 62-124.08L898.88 320h122.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSettingsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSettingsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSettingsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1120c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm160-960H800l-93.76 187.44-198.8-66.24L281.2 507.44l66.24 198.8L160 800v320l187.44 93.76-66.24 198.8 226.24 226.24 198.8-66.24L800 1760h320l93.76-187.44 198.8 66.24 226.24-226.24-66.24-198.8L1760 1120V800l-187.44-93.76 66.24-198.8-226.24-226.24-198.8 66.24L1120 160zM960 1280c176.48 0 320-143.52 320-320s-143.52-320-320-320-320 143.52-320 320 143.52 320 320 320zm61.12-960l49.52 99.04 62 124.08 131.68-43.84 105.04-35.04 86.4 86.4-35.04 105.04-43.84 131.68 124.08 62 99.04 49.52v122.24l-99.04 49.52-124.08 62 43.84 131.68 35.04 105.04-86.4 86.4-105.04-35.04-131.68-43.84-62 124.08-49.52 99.04H898.88l-49.52-99.04-62-124.08-131.68 43.84-105.04 35.04-86.4-86.4 35.04-105.04 43.84-131.68-124.08-62-99.04-49.52V898.88l99.04-49.52 124.08-62-43.84-131.68-35.04-105.04 86.4-86.4 105.04 35.04 131.68 43.84 62-124.08L898.88 320h122.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSisImportedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSisImportedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSisImportedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M190 859.98h658.438L719.17 730.68l141.365-141.4 370.608 370.7-370.608 370.7-141.365-141.4 129.268-129.3H190v-200zm317.102 524.22C620.474 1497.5 771.137 1560 931.297 1560c160.16 0 310.824-62.4 423.996-175.8 113.372-113.4 175.756-264.1 175.756-424.3 0-160.3-62.384-310.9-175.756-424.2C1242.12 422.3 1091.458 360 931.297 360c-160.16 0-310.823 62.4-424.195 175.7L365.737 394.3C516.799 243.1 717.75 160 931.297 160c213.648 0 414.398 83.2 565.36 234.3C1647.822 545.3 1731 746.2 1731 959.9c0 213.6-83.18 414.6-234.242 565.7-151.063 151.1-351.813 234.4-565.46 234.4-213.548 0-414.499-83.3-565.561-234.4l141.365-141.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSisNotSyncedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSisNotSyncedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSisNotSyncedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M341.067 800c71.359-275.6 321.354-480 618.949-480 280.955 0 519.59 182.24 605.509 434.48L1360.009 960H1840V480l-151.437 151.44C1562.885 353.92 1283.93 160 960.016 160c-386.313 0-709.507 275.28-783.826 640h164.877zm1237.866 320c-71.359 275.6-321.354 480-618.949 480-280.875 0-519.59-182.24-605.509-434.48L559.991 960H80v480l151.437-151.44C357.115 1566.08 636.07 1760 959.984 1760c386.313 0 709.507-275.28 783.906-640h-164.957zm-237.516-418.56L1199.98 560 950.704 809.36 701.43 560 559.99 701.44l249.356 249.28L559.99 1200l141.438 141.44 249.275-249.28 249.276 249.28L1341.417 1200l-249.275-249.28 249.275-249.28z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSisSyncedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSisSyncedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSisSyncedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M341.067 800c71.359-275.6 321.354-480 618.949-480 280.955 0 519.59 182.24 605.509 434.48L1360.009 960H1840V480l-151.437 151.44C1562.885 353.92 1283.93 160 960.016 160c-386.313 0-709.507 275.28-783.826 640h164.877zm1237.866 320c-71.359 275.6-321.354 480-618.949 480-280.875 0-519.59-182.24-605.509-434.48L559.991 960H80v480l151.437-151.44C357.115 1566.08 636.07 1760 959.984 1760c386.313 0 709.507-275.28 783.906-640h-164.957zM892.76 1354.176l-323.514-323.44 141.438-141.44 156.557 156.56 331.354-463.92 162.717 116.16-468.552 656.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSkypeLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSkypeLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSkypeLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1685.9 1062.49c4.4-32.5 6.9-65.5 6.9-99.1 0-403.6-329-730.85-734.7-730.85-40.3 0-79.85 3.35-118.35 9.65-134.756-87.896-306.836-94.897-448.286-18.239C250.013 300.609 161.93 448.602 162 609.489c0 88.1 26 170 70.6 238.7-6 37.5-9 76-9 115.2 0 403.65 328.75 730.9 734.6 730.9 45.8 0 90.4-4.5 133.75-12.3 135.224 84.161 305.456 88.36 444.665 10.97 139.21-77.39 225.494-224.195 225.385-383.47 0-91.6-28-176.7-76-247h-.1zm-659.1 439.5c-233.5 12.15-342.7-39.5-442.8-133.4-111.75-104.9-66.85-224.5 24.2-230.65 91-6.15 145.65 103.1 194.2 133.5 48.5 30.25 233.1 99.25 330.6-12.2 106.15-121.35-70.6-184.15-200.2-203.15-185-27.4-418.6-127.5-400.4-324.7 18.2-197.15 167.5-298.2 324.5-312.5 200.3-18.15 330.65 30.4 433.75 118.35 119.2 101.65 54.7 215.3-21.25 224.5-75.65 9-160.65-167.25-327.5-169.9-171.9-2.75-288.15 178.9-75.85 230.5 212.5 51.65 439.9 72.8 521.8 267 82 194.2-127.35 400.4-361 412.5l-.05.15z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSpeedGraderLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSpeedGraderLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSpeedGraderLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M962 160c-441.8 0-800 358.2-800 800s358.2 800 800 800c441.85 0 800-358.2 800-800s-358.15-800-800-800zm0 1400c-314.5 0-572-242.1-597.5-550H562V910H364.5A596.35 596.35 0 0 1 491 589l152.8 152.85 70.7-70.7-155-155.1A596.5 596.5 0 0 1 912 362.5V560h100V362.5a597 597 0 0 1 358.25 158.7l-515.2 336.5-114.6 328.9 319.2-124.4 342-509.5A596.7 596.7 0 0 1 1559.5 910H1362v100h197.5c-25.5 307.9-283 550-597.5 550z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStandardsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStandardsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStandardsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1880c-790.88 0-800-1304.48-800-1360 0-29.04 15.76-55.76 41.12-69.92l720-400c24.24-13.44 53.52-13.44 77.76 0l720 400c25.36 14.16 41.12 40.88 41.12 69.92 0 55.52-9.12 1360-800 1360zM321.2 566.4C330 787.28 400.24 1720 960 1720s630-932.72 638.72-1153.6L960 211.44 321.2 566.4zm665.84 818.88L580 1080l120-160 232.88 174.72 342.24-547.68 169.68 106-457.76 732.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStarLightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStarLightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStarLightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M962 1278.359c15.44 0 30.96 4.48 44.4 13.44l298.874 199.276-100.159-350.714c-8.08-27.919-.24-57.998 20.32-78.558l263.435-263.435h-286.875c-30.319 0-57.998-17.12-71.598-44.24L962 417.256 793.603 754.13c-13.6 27.12-41.279 44.239-71.598 44.239H435.13l263.435 263.435c20.56 20.56 28.4 50.639 20.32 78.558l-100.159 350.714 298.875-199.276a80.059 80.059 0 0 1 44.399-13.44m479.99 479.99c-15.439 0-30.879-4.48-44.398-13.439L962 1454.516 526.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStarLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStarLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStarLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1441.99 1758.35c-15.439 0-30.879-4.48-44.398-13.44L962 1454.516 526.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStatsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStatsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStatsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M520 1440c0-44.24-35.76-80-80-80H200c-44.24 0-80 35.76-80 80v160c0 44.24 35.76 80 80 80h240c44.24 0 80-35.76 80-80v-160zm560 240H760c-44.16 0-80-35.84-80-80V880c0-44.16 35.84-80 80-80h320c44.16 0 80 35.84 80 80v720c0 44.16-35.84 80-80 80zm640 0h-320c-44.16 0-80-35.84-80-80V320c0-44.16 35.84-80 80-80h320c44.16 0 80 35.84 80 80v1280c0 44.16-35.84 80-80 80zm-240-160h160V400h-160v1120zm-640 0h160V960H840v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStrikethroughLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStrikethroughLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStrikethroughLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880H240v160h720c132.32 0 240 107.68 240 240s-107.68 240-240 240H720v-80H560v160c0 44.16 35.84 80 80 80h320c220.56 0 400-179.44 400-400 0-90.4-31.28-172.96-82-240h402V880zM734.768 720c-8.96-25.12-14.8-51.76-14.8-80 0-132.32 107.68-240 240-240h160v80h160V320c0-44.16-35.76-80-80-80h-240c-220.48 0-400 179.44-400 400 0 27.36 2.88 54.16 8.16 80h166.64z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStudentViewLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStudentViewLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStudentViewLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1240 1640H280c-88.24 0-160-71.76-160-160V680h160v800h960v160zm400-320H600c-88.24 0-160-71.76-160-160V440c0-88.32 71.76-160 160-160h1040c88.24 0 160 71.68 160 160v720c0 88.24-71.76 160-160 160zM600 440v720h1040.08l-.08-720H600zm960 320h-320V600h320v160zm0 320h-320V920h320v160zm-880 0c0-147.28 92.72-240 240-240s240 92.72 240 240H680zm400-400c0 88.32-71.68 160-160 160s-160-71.68-160-160 71.68-160 160-160 160 71.68 160 160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSyllabusLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSyllabusLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSyllabusLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M802 480h960V320H802v160zm0 560h960V880H802v160zm0 560h960v-160H802v160zM562 160H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H242c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTableLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTableLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTableLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1569.371 278.625V80.999H1437.62v197.626h-197.627v131.75h197.627V608h131.752V410.375H1767v-131.75zM933.462 502.715v455.368h401.406V744.126h182.715v213.957h3.787v182.715h-3.787v435.487h.947V1759H160V324.734h2.84V320h910.736v182.715H933.462zm-182.715 0v455.368H342.715V502.715h408.032zm182.716 638.083v435.487h401.405v-435.487H933.463zm-182.716 0v435.487H342.715v-435.487h408.032z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTagLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTagLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTagLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 766.88l800 800L1566.88 1120l-800-800H320v446.88zM1120 1760c-20.48 0-40.96-7.84-56.56-23.44l-880-880C168.48 841.6 160 821.2 160 800V240c0-44.16 35.84-80 80-80h560c21.2 0 41.52 8.48 56.56 23.44l880 880c31.28 31.28 31.28 81.84 0 113.12l-560 560c-15.6 15.6-36.08 23.44-56.56 23.44zM720 560.008c0 88.24-71.68 160-160 160-88.48 0-160-71.76-160-160 0-88.4 71.52-160 160-160 88.32 0 160 71.6 160 160" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTargetLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTargetLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTargetLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1042 1432.8V1120H882v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H802V880H489.2C523.12 679.44 681.44 521.12 882 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1122v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1842 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H882v245.6C593.12 361.84 363.84 591.12 327.52 880H82v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1842V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextCenteredLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextCenteredLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextCenteredLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1682 240H242v160h1440V240zm-160 320H402v160h1120V560zM162 1040h1600V880H162v160zm240 320h1120v-160H402v160zm-160 320h1440v-160H242v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextLeftLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextLeftLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextLeftLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1602 240H162v160h1440V240zm-320 320H162v160h1120V560zM162 1040h1600V880H162v160zm1120 160H162v160h1120v-160zM162 1680h1440v-160H162v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1490 160H434c-72.864 0-132 59.733-132 133.333V560h264V426.667h264v1066.666H566V1760h792v-266.667h-264V426.667h264V560h264V293.333c0-73.6-59.136-133.333-132-133.333" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextRightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M322 400h1440V240H322v160zm320 320h1120V560H642v160zm-480 320h1600V880H162v160zm480 320h1120v-160H642v160zm-320 320h1440v-160H322v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextareaLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextareaLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextareaLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M479 1600v-160H319V480h160V320h961v160h479V0h-479v160H479V0H0v480h159v960H0v480h479v-160h963v160h479v-480h-479v160H479z"/>\n        <path d="M1601 1520h160V400h-160z"/>\n        <path d="M600 730.907V544.7c0-13.134 6.567-19.701 19.7-19.701h680.636c13.134 0 19.701 6.567 19.701 19.7v186.207c0 13.134-6.567 19.7-19.7 19.7h-79.44c-13.557 0-19.7-6.566-18.43-19.7l6.355-101.683h-175.401v676.823h108.037c13.134 0 19.7 6.567 19.7 19.7v63.552c0 13.134-6.566 19.701-19.7 19.701H779.85c-13.134 0-19.7-6.567-19.7-19.7v-63.552c0-7.203 1.482-12.287 4.448-15.253 2.966-2.965 8.05-4.448 15.252-4.448h106.767V629.224H710.579l6.356 101.683c1.27 13.134-4.66 19.7-17.795 19.7H619.7c-13.133 0-19.7-6.566-19.7-19.7z" stroke="#333" stroke-width="3"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTimerLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTimerLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTimerLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M962 0c-82.96 0-163.12 11.68-240 31.6v165.28C797.84 173.04 878.4 160 962 160c441.2 0 800 358.88 800 800s-358.8 800-800 800c-441.12 0-800-358.88-800-800 0-223.04 92.16-424.48 240-569.52V640h160V160H82v160h166.32C95.6 490 2 714 2 960c0 529.36 430.72 960 960 960 529.36 0 960-430.64 960-960S1491.36 0 962 0zm-80 400v560c0 21.2 8.4 41.6 23.44 56.64l320 320 113.12-113.2L1042 926.88V400H882z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconToggleLeftLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconToggleLeftLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconToggleLeftLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M322 320h400V160H322c-88.24 0-160 71.76-160 160v1280c0 88.24 71.76 160 160 160h400v-160H322V320zm1040-160h-160v160h160V160zm-160 1600h160v-160h-160v160zm400-1600h-80v160h80v80h160v-80c0-88.24-71.76-160-160-160zm0 1440h-80v160h80c88.24 0 160-71.76 160-160v-80h-160v80zm0-880h160V560h-160v160zm0 640h160v-160h-160v160zm0-320h160V880h-160v160zm-536.56-343.44L1168.88 800H882c-176.48 0-320 143.52-320 320h160c0-88.24 71.76-160 160-160h286.88l-103.44 103.44 113.12 113.12L1475.12 880l-296.56-296.56-113.12 113.12zM1042 160H882v400h160V160zM882 1760h160v-560H882v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconToggleRightLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconToggleRightLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconToggleRightLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1602 160h-400v160h400v1280h-400v160h400c88.24 0 160-71.76 160-160V320c0-88.24-71.76-160-160-160zm-880 0H562v160h160V160zM562 1760h160v-160H562v160zM162 320v80h160v-80h80V160h-80c-88.24 0-160 71.76-160 160zm160 1200H162v80c0 88.24 71.76 160 160 160h80v-160h-80v-80zm0-960H162v160h160V560zm0 640H162v160h160v-160zm0-320H162v160h160V880zm1040 240c0-176.48-143.52-320-320-320H755.12l103.44-103.44-113.12-113.12L448.88 880l296.56 296.56 113.12-113.12L755.12 960H1042c88.24 0 160 71.76 160 160h160zm-320-960H882v400h160V160zM882 1760h160v-560H882v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTrashLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTrashLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTrashLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M445 885v837c0 22 16 38 38 38h926c22 0 38-16 38-38V885l1.789-192.138-1003.679 1.231L445 885zm602 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zm-400 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zM1445 360h-200c0-110-90-200-200-200H845c-110 0-200 90-200 200H445c-110 0-200 90-200 200h1400c0-110-90-200-200-200"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTroubleLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTroubleLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTroubleLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 320c-352.88 0-640 287.12-640 640s287.12 640 640 640 640-287.12 640-640-287.12-640-640-640m0 1440c-441.12 0-800-358.88-800-800s358.88-800 800-800 800 358.88 800 800-358.88 800-800 800m376.56-1063.48L1223.44 583.4 960 846.84 696.56 583.4 583.44 696.52l263.44 263.44-263.44 263.44 113.12 113.12L960 1073.16l263.44 263.36 113.12-113.12-263.44-263.44 263.44-263.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTwitterBoxedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTwitterBoxedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTwitterBoxedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1663.965 1840H256c-97.046 0-176-82.353-176-183.59V263.59C80 162.353 158.954 80 256 80h1407.965C1761.046 80 1840 162.353 1840 263.59v1392.82c0 101.237-78.954 183.59-176.035 183.59zM256 226.667c-19.43 0-35.2 16.573-35.2 36.923v1392.82c0 20.35 15.77 36.923 35.2 36.923h1407.965c19.43 0 35.235-16.573 35.235-36.923V263.59c0-20.35-15.805-36.923-35.235-36.923H256zM1450.646 622.96c-9.962-3.923-37.735 21.927-39.847 20.827 3.485-12.907 27.95-45.43 30.413-59.95 3.415-20.24-12.883-38.757-30.694-47.52-17.811-8.764-38.861-6.674-54.736 5.536-21.507 16.5-47.098 26.914-73.533 30.14-41.958-36.3-95.568-56.686-150.938-56.686h-.035c-127.389 1.393-230.947 107.726-235.382 238.81-157.59-24.2-283.114-177.724-284.451-179.41-11.23-14.044-28.442-21.414-45.83-19.874-17.495 1.577-33.16 11.954-41.889 27.794-44.915 81.4-18.515 172.626 5.914 234.08 0 0-39.319-3.667-42.487 29.883-4.47 47.337 6.724 108.68 84.234 180.877 0 0-23.126 12.43-20.134 34.943 7.779 58.777 56.812 100.247 101.728 131.193-68.042 22.514-137.984 10.414-138.864 10.267-24.359-4.583-48.612 8.8-58.608 32.413-9.997 23.614-3.204 51.297 16.508 66.99 104.228 83.05 228.519 101.42 318.208 101.42 67.479 0 115.35-10.413 120.244-11.513 421.414-104.097 459.852-487.997 462.21-595.283 54.983-54.34 86.17-94.747 92.823-120.157 5.984-22.953 6.477-46.347-14.854-54.78zm-563.834 661.173c-1.232.294-77.651 16.537-169.382 3.594 34.883-15.804 68.957-39.124 98.032-73.114 13.869-16.206 17.459-39.343 9.187-59.29-8.237-19.946-26.822-33.11-47.66-33.77-27.774-.843-53.47-11.11-73.92-28.233 1.689-.697 3.378-1.43 5.033-2.237 20.733-9.973 33.158-32.56 30.905-56.283-2.252-23.687-18.69-43.303-40.902-48.803-34.18-8.544-62.374-30.727-79.904-60.06 2.851-.22 5.702-.55 8.554-.954 20.803-3.153 37.945-18.663 43.824-39.673 5.878-21.01-.528-43.67-16.439-57.97-2.78-2.493-50.547-46.347-55.616-109.12 75.786 68.347 206.448 159.207 359.674 150.223 15.98-.916 30.694-9.24 40.163-22.696 9.504-13.42 12.742-30.544 8.8-46.714-2.71-11.33-4.083-22.916-4.083-34.833-.493-74.8 57.517-136.327 128.797-137.133 34.496 0 67.09 15.766 91.907 40.663 34.707 34.87 40.656 94.747 41.606 109.743 1.091 16.61 21.86 407.77-378.576 506.66z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTwitterLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTwitterLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTwitterLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M844.987 1399.92c-1.94.45-122.043 24.932-266.18 5.397 54.81-23.807 108.384-58.97 154.059-110.267 21.783-24.481 27.433-59.363 14.447-89.466-12.958-30.076-42.19-49.92-74.935-50.932-43.595-1.264-83.986-16.78-116.113-42.61a157.688 157.688 0 0 0 7.87-3.374c32.605-15.037 52.084-49.104 48.542-84.885-3.541-35.725-29.344-65.322-64.254-73.67-53.714-12.874-97.983-46.322-125.557-90.62 4.469-.309 8.966-.758 13.463-1.433 32.662-4.722 59.589-28.108 68.836-59.813 9.248-31.706-.843-65.885-25.83-87.471-4.386-3.767-79.405-69.932-87.388-164.627 119.093 103.127 324.448 240.18 565.218 226.66 25.1-1.433 48.26-13.997 63.13-34.235a84.106 84.106 0 0 0 13.829-70.494c-4.272-17.09-6.437-34.572-6.437-52.561-.759-112.853 90.423-205.664 202.404-206.873h.028c54.191 0 105.432 23.751 144.445 61.36 54.501 52.56 63.833 142.927 65.379 165.554 1.714 25.044 34.32 615.165-594.956 764.36m886.067-997.486c-15.628-5.902-59.279 33.083-62.624 31.425 5.481-19.479 43.904-68.527 47.783-90.423 5.397-30.525-20.21-58.492-48.232-71.73-27.996-13.211-61.05-10.035-85.982 8.347-33.813 24.904-74.007 40.616-115.607 45.479C1400.48 270.806 1316.27 240 1229.248 240h-.085c-200.183 2.164-362.926 162.575-369.897 360.284-247.657-36.483-444.889-268.119-447.025-270.62-17.651-21.194-44.691-32.352-72.04-30.02-27.49 2.39-52.083 18.074-65.828 41.965-70.578 122.775-29.092 260.418 9.304 353.117 0 0-61.781-5.509-66.756 45.085-7.027 71.45 10.54 163.98 132.359 272.898 0 0-36.315 18.72-31.621 52.702 12.227 88.68 89.242 151.247 159.876 197.962-106.95 33.926-216.879 15.656-218.228 15.431-38.282-6.886-76.396 13.323-92.109 48.936-15.74 35.612-5.031 77.38 25.916 101.019 163.811 125.304 359.16 153.074 500.092 153.074 106.05 0 181.294-15.74 188.94-17.398 662.273-157.01 722.648-736.197 726.387-898.07 86.375-82.018 135.395-142.927 145.85-181.294 9.417-34.6 10.204-69.932-23.329-82.637" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnlockLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnlockLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnlockLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1520 845.714h62.008c35.341 0 63.992 28.652 63.992 63.996v786.295c0 35.345-28.655 63.995-64.002 63.995H339.002c-35.347 0-64.002-28.652-64.002-63.995V909.71c0-35.345 28.65-63.996 63.992-63.996H503.5V617.143C503.5 365.714 709.15 160 960.5 160c205.47 0 380.4 137.467 437.416 325h-249.92c-40.997-58.679-109.1-96.429-187.496-96.429-127.96 0-228.5 100.572-228.5 228.572v228.571h308V846h480v-.286zM433.385 960h1053.23c18.438 0 33.385 13.96 33.385 31.182v615.636c0 17.218-14.953 31.182-33.385 31.182H433.385c-18.438 0-33.385-13.96-33.385-31.182V991.182C400 973.964 414.953 960 433.385 960z"/>\n        <ellipse cx="959.935938" cy="1315" rx="204.935938" ry="205"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnmutedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnmutedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnmutedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M941.12 252.16c-59.12-24.48-129.2-10.48-174.24 34.72L518.32 640H320c-88.24 0-160 71.84-160 160v320c0 88.24 71.76 160 160 160h198.32l239.6 342.4c33.28 39.68 76.72 57.6 122.08 57.6 21.04 0 41.68-4.08 61.12-12.08 60.08-24.72 98.88-82.88 98.88-147.92V400c0-65.04-38.8-123.04-98.88-147.84zM601.68 1120H320V800h281.68L880 402.16l.08 1115.84-278.4-398zM1200 320v160c220.56 0 400 179.44 400 400s-179.44 400-400 400v160c308.8 0 560-251.2 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.32-107.68-240-240-240v160c44.08 0 80 35.92 80 80 0 44.16-35.92 80-80 80v160c132.32 0 240-107.68 240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnpublishLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnpublishLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnpublishLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1311.307 1626.667l-864.39-.81c-209.171-30.3-366.92-215.06-366.92-429.696 0-148.287 77.4-285.884 200.984-363.887 4.897-205.295 172.403-370.758 377.634-370.758 18.901 0 37.802 1.505 56.665 4.516C785.833 284.705 962.024 160 1160.79 160c263.731 0 478.337 215.754 478.337 480.95 0 12.004-.574 24.317-1.646 36.938 127.677 100.505 202.515 253.154 202.515 417.305 0 293.063-237.179 531.474-528.689 531.474zm-847.67-154.386h847.67c207.107 0 375.646-169.169 375.646-377.088 0-128.14-64.661-246.439-172.901-316.491l-43.235-27.983 9.297-50.986c4.056-22.193 5.97-40.835 5.97-58.782 0-180.053-145.928-326.565-325.295-326.565-153.885 0-287.875 109.73-318.56 260.912l-18.174 89.506-84.441-33c-26.974-10.576-54.216-15.902-80.999-15.902-123.927 0-224.706 101.238-224.706 225.635 0 5.288.957 10.382 1.645 15.477l8.112 65.768-50.734 23.583c-97.106 45.158-159.892 143.231-159.892 249.796 0 136.632 98.79 254.428 230.598 276.12zm824.477-623.843l-87.12-87.846-202.745 204.562-202.744-204.562-87.12 87.846 202.783 204.561-202.783 204.562 87.12 87.807 202.744-204.523 202.745 204.523 87.12-87.807-202.783-204.562 202.783-204.561z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnpublishedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnpublishedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnpublishedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1324.615 1441.852H543.69c-107.833-18.636-188.356-114.63-188.356-225.9 0-87.127 51.885-167.259 132.095-204.297l64.739-29.849-10.002-80.523c-.469-3.399-1.172-6.72-1.25-10.119 0-99.08 81.07-179.643 180.62-179.643 21.41 0 43.328 4.259 65.128 12.698l107.755 41.726 23.207-113.185c25.786-126 138.464-217.423 267.863-217.423 150.887 0 273.566 122.054 273.566 272.121 0 14.69-1.602 30.28-5 48.915l-11.956 64.505 55.245 35.475c92.243 59.152 147.293 159.014 147.293 267.159 0 175.54-143.543 318.34-320.02 318.34m329.2-712.71c.43-7.345.587-14.534.587-21.684 0-257.782-210.313-467.47-468.915-467.47-187.496 0-354.598 112.326-428.479 277.943-11.838-1.212-23.637-1.759-35.475-1.759-199.373 0-363.036 155.615-375.226 351.511-114.943 77.515-186.324 208.008-186.324 348.268 0 209.961 155.732 390.62 362.177 420.274l802.454.976c284.154 0 515.37-230.433 515.37-513.689 0-153.935-68.568-297.282-186.168-394.37" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUpdownLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUpdownLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUpdownLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M696.56 1303.44l-113.12 113.12L960 1793.12l376.56-376.56-113.12-113.12L1040 1486.88V433.12l183.44 183.44 113.12-113.12L960 126.88 583.44 503.44l113.12 113.12L880 433.12v1053.76z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUploadLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUploadLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUploadLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1286.622 1677.766l-847.062-.754c-204.957-29.46-359.543-208.937-359.543-417.455 0-144.069 75.805-277.703 196.952-353.509 4.777-199.425 168.96-360.171 370.02-360.171a354.31 354.31 0 0 1 55.565 4.4c69.1-176.126 241.79-297.273 436.564-297.273 258.468 0 468.746 209.566 468.746 467.196 0 11.692-.544 23.635-1.634 35.913 125.128 97.638 198.461 245.897 198.461 405.386 0 284.66-232.404 516.267-518.069 516.267zM455.944 1527.79h830.678c202.945 0 368.092-164.309 368.092-366.29 0-124.499-63.36-239.443-169.421-307.455l-42.366-27.196 9.135-49.531c3.94-21.54 5.825-39.684 5.825-57.117 0-174.91-142.979-317.219-318.77-317.219-150.815 0-282.102 106.564-312.19 253.44l-17.81 86.953-82.72-32.057c-26.441-10.267-53.135-15.463-79.409-15.463-121.398 0-220.167 98.35-220.167 219.204 0 5.154.921 10.099 1.592 15.043l7.962 63.863-49.7 22.922c-95.207 43.874-156.681 139.166-156.681 242.67 0 132.713 96.758 247.155 225.95 268.233zm818.363-448.272l-309.97-309.97-309.97 309.97 93.113 93.112 151.025-150.983v433.84h131.706v-433.84l150.983 150.983 93.113-93.112z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUserAddLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUserAddLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUserAddLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUserLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUserLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUserLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1490.88 1005.124c-131.68 143.999-320.4 234.879-530.88 234.879-210.48 0-399.28-90.88-530.96-234.88C232.48 1030.404 80 1196.484 80 1400.003V1880h1760v-479.998c0-203.52-152.48-369.598-349.12-394.878m46.88 177.519c84.4 37.6 142.24 121.76 142.24 217.359V1720H240v-320c0-95.598 57.76-179.758 142.16-217.358 159.6 139.12 365.28 217.359 577.84 217.359 212.48 0 418.16-78.24 577.76-217.36M959.968 40c-265.12 0-480 214.879-480 479.998s214.88 479.998 480 479.998 480-214.88 480-479.998c0-265.12-214.88-479.998-480-479.998m0 159.999c176.48 0 320 143.52 320 319.999s-143.52 319.999-320 319.999-320-143.52-320-320c0-176.478 143.52-319.998 320-319.998" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconVideoLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVideoLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconVideoLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 160H240c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h1440c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM800 1200l480-240-480-240v480zm-560 400V320h1440l.08 1280H240zM400 400h160v160H400V400zm320 0h160v160H720V400zm320 0h160v160h-160V400zm320 0h160v160h-160V400zm-960 960h160v160H400v-160zm320 0h160v160H720v-160zm320 0h160v160h-160v-160zm320 0h160v160h-160v-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconWarningLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWarningLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconWarningLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680.027 1756.46h-1440c-27.76 0-53.44-14.4-68.08-37.92-14.64-23.68-15.84-53.04-3.52-77.92l720-1440c27.12-54.16 116-54.16 143.12 0l720 1440c12.32 24.88 11.12 54.16-3.52 77.92-14.56 23.6-40.24 37.92-68 37.92zm-1310.56-160h1181.12L960.027 415.42l-590.56 1181.04zm510.56-800h160v480h-160v-480zm80 740c55.229 0 100-44.772 100-100s-44.771-100-100-100c-55.228 0-100 44.772-100 100s44.772 100 100 100z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconWindowsLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWindowsLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconWindowsLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1588.8 776c-100 0-200.8 1.6-301.6 2.4-99.2.8-199.2 1.6-298.4 2.4V386.4c199.2-31.2 401.6-60 600-88.8V776zm-720-492v616.8c277.6 0 561.6-5.6 839.2-5.6V160c-277.6 39.2-561.6 79.2-839.2 124zm0 1307.2c277.6 40 561.6 73.6 839.2 119.2v-736H868.8v616.8zm120-496.8h600v476c-137.6-20.8-276-39.2-410.4-57.6-63.2-8.8-126.4-16.8-189.6-25.6v-392.8zM160 906.4c209.6 0 419.2-5.6 635.2-5.6V295.2c-216 23.2-425.6 51.2-635.2 85.6v525.6zm120-423.2c132.8-20.8 263.2-38.4 395.2-53.6v352l-204 2.4c-64 .8-128 1.6-191.2 2.4V483.2zM160 968.8v526.4c209.6 28.8 419.2 56.8 635.2 84.8V968.8c-216 5.6-425.6 0-635.2 0zm515.2 122.4v352c-132.8-17.6-264.8-35.2-395.2-52.8v-300.8c28.8 0 58.4.8 88 .8 100 .8 203.2 1.6 307.2.8z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconWordpressLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWordpressLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconWordpressLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1441.25 698.007c30.84 54.07 67.037 123.59 67.037 224.008 0 69.56-20.71 156.992-61.815 262.592l-81.038 270.571-293.568-872.92c49.006-2.66 92.928-7.725 92.928-7.725 43.784-5.202 38.583-69.403-5.065-66.998 0 0-131.629 10.384-216.539 10.384-79.826 0-213.84-10.384-213.84-10.384-43.824-2.405-48.87 64.456-5.221 66.998 0 0 41.497 5.065 85.301 7.724l126.407 346.72-177.682 532.928-295.817-879.648c48.987-2.66 93.026-7.724 93.026-7.724 43.805-5.202 38.466-69.403-5.202-66.998 0 0-131.472 10.384-216.519 10.384-15.194 0-33.107-.39-52.213-.938 145.259-220.509 394.905-366.139 678.578-366.139 211.454 0 403.959 80.862 548.416 213.312-3.481-.274-6.962-.684-10.423-.684-79.963 0-136.44 69.422-136.44 144.065 0 66.998 38.584 123.611 79.69 190.472zm175.16 249.744c46.307-115.848 61.795-208.502 61.795-290.87 0-29.9-1.975-57.65-5.612-83.56 63.399 115.749 99.479 248.433 99.479 389.683 0 299.67-162.35 561.205-403.705 701.888L1616.41 947.75zm-656.402 827.415a813.824 813.824 0 0 1-229.485-32.971l243.76-708.048 249.647 683.897c1.603 4.028 3.598 7.607 5.73 11.068-84.344 29.783-175.12 46.054-269.652 46.054zM147.826 963.004c0-117.744 25.364-229.504 70.361-330.567l387.396 1061.456c-270.864-131.511-457.757-409.454-457.757-730.89zm-67.818 0c0 486.053 393.927 880 880 880 485.936 0 880-393.947 880-880 0-485.936-394.064-880-880-880-486.073 0-880 394.064-880 880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconXLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconXLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconXLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1659.92 376.56l-113.2-113.12-583.36 583.44-583.44-583.44-113.2 113.12L850.16 960l-583.44 583.44 113.2 113.12 583.44-583.44 583.36 583.44 113.2-113.12L1076.48 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZippedLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZippedLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZippedLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 160H480c-88.24 0-160 71.68-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V320c0-88.32-71.76-160-160-160zM480 1600V320h480v160h160V320h320l.08 1280H480zm640-1120h160v160h-160V480zM960 640h160v160H960V640zm160 160h160v160h-160V800zM960 960h160v160H960V960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZoomInLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZoomInLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZoomInLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M846.639 484.639h-136v204h-204v136h204v204h136v-204h204v-136h-204z"/>\n        <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZoomOutLine;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZoomOutLine(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZoomOutLine',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825zM537.64 822.437h480v-158.32h-480v158.32z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAddSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAddSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1600c-352.88 0-640-287.12-640-640s287.12-640 640-640 640 287.12 640 640-287.12 640-640 640m0-1440c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800m80 400H880v320H560v160h320v320h160v-320h320V880h-320V560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAddressBookSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAddressBookSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAddressBookSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1360 1440H560v-106.667c0-115.2 85-208 191-213.333 54 65.067 128 106.667 209 106.667s155-41.6 209-106.667c107 5.333 191 98.133 191 213.333V1440zM960 720c88 0 160 71.68 160 160s-72 160-160 160-160-71.68-160-160 72-160 160-160zm640-240H320c-88.32 0-160 71.6-160 160v960c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160V640c0-88.4-71.68-160-160-160zM800 400h400V160H800zM320 400h400V160H320z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAlertSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAlertSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAlertSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 1105.722c-88.4 0-160-71.577-160-159.95V705.849C1440 440.812 1225.12 226 960 226S480 440.812 480 705.848v239.925c0 88.372-71.6 159.95-160 159.95H160v239.923h1600v-239.924h-160zM960 1695c151.28 0 273.76-119.722 280-269.355H680C686.24 1575.278 808.72 1695 960 1695z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAnalyticsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAnalyticsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAnalyticsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.983 764.832v-682.8c-182.804 16.48-348.967 89.52-482.33 200.48l482.33 482.32zM1039.985 82v956c0 21.2-8.4 41.52-23.44 56.56l-574.25 574.16C587.657 1774.8 766.3 1838 959.984 1838 1445.993 1838 1840 1444 1840 958c0-459.04-351.526-835.52-800.015-876zM249.763 440.88C143.601 586.08 80 764.24 80 958c0 214.16 76.641 410.32 203.844 562.96L806.894 998l-557.13-557.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAndroidSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAndroidSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAndroidSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1528.78 785.776H392.185c-44.814 0-81.185 36.371-81.185 81.186v568.297h162.37V948.147h81.186v487.112c0 44.895 36.37 81.185 81.185 81.185h81.186V1760h162.37v-243.556h162.37V1760h162.371v-243.556h81.186c44.814 0 81.185-36.29 81.185-81.185V948.147h81.185v487.112h162.37V866.962c0-44.896-36.289-81.186-81.184-81.186zM554.637 623.325c0 44.895 36.371 81.185 81.185 81.185h649.483c44.814 0 81.185-36.29 81.185-81.185 0-82.566-25.086-159.286-67.627-223.422l125.025-125.026L1309.092 160l-125.025 125.025c-64.218-42.46-140.938-67.546-223.585-67.546-82.646 0-159.285 25.168-223.503 67.628L611.954 160.08 497.158 274.877l125.025 125.026c-42.46 64.136-67.546 140.856-67.546 223.422z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAnnouncementSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAnnouncementSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAnnouncementSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1648.996 160h-91.605L682.386 523.602c-12.241 4.88-31.922 7.36-46.643 7.36H271.004c-44.162 0-80.004 35.84-80.004 80v328.883c0 44.24 35.842 80 80.004 80h143.608l253.053 668.244c27.041 61.44 108.085 88.48 169.529 61.44 61.443-27.04 88.484-108.08 61.443-169.52l-184.25-437.283c7.36-34.4 31.922-54.08 68.724-54.08v-7.36l774.28 307.121h91.605c44.162 0 80.004-35.84 80.004-80V240c0-44.16-35.842-80-80.004-80" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAppleSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAppleSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAppleSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1476.17 1015.164c-2.363-222.864 195.357-329.786 204.183-335.14-111.114-151.289-284.169-172.043-345.794-174.39-147.285-13.86-287.4 80.669-362.106 80.669-74.55 0-189.92-78.615-312.066-76.562-160.525 2.2-308.52 86.829-391.185 220.665-166.83 269.358-42.712 668.299 119.861 886.763 79.435 106.922 174.158 227.044 298.511 222.717 119.783-4.473 165.017-72.088 309.86-72.088 144.842 0 185.505 72.088 312.223 69.888 128.845-2.2 210.487-108.975 289.37-216.19 91.256-124.01 128.766-244.132 130.973-250.292-2.837-1.246-251.307-89.761-253.83-356.04zm-238.146-654.072c66.038-74.508 110.562-177.91 98.426-281.092-95.117 3.593-210.329 58.961-278.573 133.323-61.231 65.927-114.818 171.236-100.397 272.291 106.15 7.7 214.506-50.16 280.544-124.522z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowDownSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowDownSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowDownSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M847.496 1491.284c62.15 91.308 162.913 91.313 225.067 0l657.494-965.956C1792.207 434.02 1753.05 360 1642.59 360H277.468c-110.456 0-149.62 74.015-87.466 165.328l657.494 965.956z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowLeftSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowLeftSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowLeftSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M428.663 847.279c-91.443 62.263-91.658 163.065 0 225.475l965.765 657.59c91.443 62.263 165.572 23.337 165.572-87.283V276.971c0-110.467-73.914-149.692-165.572-87.282L428.663 847.28z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenDownSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenDownSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenDownSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M958 1056.43L438.043 536.402c-64.444-64.453-168.117-64.45-232.062-.497-64.39 64.4-63.722 167.867.497 232.095l616.513 616.6c37.041 37.046 87.042 52.798 135.009 47.352 47.967 5.446 97.968-10.306 135.009-47.352l616.513-616.6c64.22-64.228 64.887-167.695.497-232.095-63.945-63.953-167.618-63.956-232.062.497L958 1056.431z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenLeftSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenLeftSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenLeftSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M863.702 960l520.212-519.957c64.477-64.444 64.474-168.117.498-232.062-64.423-64.39-167.926-63.722-232.177.497L535.42 824.991c-37.06 37.041-52.817 87.042-47.37 135.009-5.447 47.967 10.31 97.968 47.37 135.009l616.816 616.513c64.251 64.22 167.754 64.887 232.177.497 63.976-63.945 63.979-167.618-.498-232.062L863.702 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenRightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenRightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenRightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1055.631 960L535.42 440.043c-64.477-64.444-64.474-168.117-.498-232.062 64.423-64.39 167.926-63.722 232.177.497l616.816 616.513c37.06 37.041 52.817 87.042 47.37 135.009 5.447 47.967-10.31 97.968-47.37 135.009l-616.816 616.513c-64.251 64.22-167.754 64.887-232.177.497-63.976-63.945-63.979-167.618.498-232.062L1055.63 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowOpenUpSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowOpenUpSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowOpenUpSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 863.702l-519.957 520.212c-64.444 64.477-168.117 64.474-232.062.498-64.39-64.423-63.722-167.926.497-232.177L824.991 535.42c37.041-37.06 87.042-52.817 135.009-47.37 47.967-5.447 97.968 10.31 135.009 47.37l616.513 616.816c64.22 64.251 64.887 167.754.497 232.177-63.945 63.976-167.618 63.979-232.062-.498L960 863.702z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowRightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowRightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowRightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1491.337 847.279c91.443 62.263 91.658 163.065 0 225.475l-965.765 657.59C434.129 1792.607 360 1753.68 360 1643.06V276.971c0-110.467 73.914-149.692 165.572-87.282l965.765 657.59z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconArrowUpSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconArrowUpSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconArrowUpSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M847.279 428.663c62.263-91.443 163.065-91.658 225.475 0l657.59 965.765c62.263 91.443 23.337 165.572-87.283 165.572H276.971c-110.467 0-149.692-73.914-87.282-165.572l657.59-965.765z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAssignmentSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAssignmentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAssignmentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1480 1520V800h320v720c0 88.32-71.68 160-160 160s-160-71.68-160-160zm160-1120l160 240h-320l160-240zm-560-160H280c-88.24 0-160 71.76-160 160v1120c0 88.24 71.76 160 160 160h800c88.24 0 160-71.76 160-160V400c0-88.24-71.76-160-160-160zm-80 480H360V560h640v160zm0 320H360V880h640v160zm-240 320H360v-160h400v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconAudioSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconAudioSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconAudioSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 120c-220.96 0-400 179.04-400 400 0 220.88 179.04 400 400 400s400-179.12 400-400c0-220.96-179.04-400-400-400zm-210.8 918.56l40.16 601.76C795.2 1728.16 872 1800 960 1800c88 0 164.8-71.84 170.64-159.68l40.16-601.76c-65.12 26.48-136.16 41.44-210.8 41.44-74.64 0-145.68-14.96-210.8-41.44zM1040 1320c0 44.16-35.84 80-80 80s-80-35.84-80-80 35.84-80 80-80 80 35.84 80 80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconBookmarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBookmarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconBookmarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1520 720h-320V480c0-88.24 71.76-160 160-160s160 71.76 160 160v240zm-160-560H560c-176.48 0-320 143.52-320 320v1200c0 32.32 19.52 61.52 49.36 73.92 29.92 12.32 64.32 5.44 87.2-17.36L720 1393.12l343.44 343.44A80.027 80.027 0 0 0 1120 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92V880h400c44.16 0 80-35.84 80-80V480c0-176.48-143.52-320-320-320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconBoxSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconBoxSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconBoxSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M398 0H78C33.84 0-2 35.84-2 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V80c0-44.16-35.84-80-80-80zM398 1440H78c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm1440 0h-320c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80v-320c0-44.16-35.84-80-80-80zm-1680-80h160V560H158v800zM558 320h800V160H558v160zm1040 1040h160V560h-160v800zM558 1760h800v-160H558v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarAddSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarAddSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarAddSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 1480h-240v240h-160v-240H960v-160h240v-240h160v240h240v160zm0-1160h-120V120c0-66.32-53.76-120-120-120-66.24 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.24 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.4 0 160-71.6 160-160V480c0-88.4-71.6-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarDaySolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarDaySolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarDaySolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1181.84 973.6c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4l-143.92 255.2c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H825.84c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8zM1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarDaysSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarDaysSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarDaysSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1181.84 973.6c0 10.64-1.84 21.6-5.6 32.8-3.76 11.2-8.16 22.16-13.2 32.8-5.12 10.72-10.56 20.8-16.4 30.4-5.92 9.6-11.2 18.4-16.08 26.4l-143.92 255.2c-12.32 20.8-25.52 35.36-39.68 43.6-14.08 8.24-28.08 12.4-41.92 12.4-12.8 0-25.04-2.4-36.88-7.2-11.68-4.8-21.68-10.4-30-16.8-8.16-6.4-14.64-12.64-19.12-18.8-4.56-6.08-6-10.24-4.48-12.4l196-340H825.84c-22.96 0-40.4-4.56-52.4-13.6-12.08-9.04-18-25.04-18-48v-8.8c0-22.4 5.92-37.84 18-46.4 12-8.48 29.44-12.8 52.4-12.8h247.92c24 0 43.12 2.4 57.2 7.2 14.16 4.8 24.96 10.96 32.48 18.4 7.44 7.44 12.4 16.16 14.72 26 2.4 9.84 3.68 20.16 3.68 30.8v8.8zM1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarMonthSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarMonthSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarMonthSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 320h-120V120c0-66.32-53.76-120-120-120-66.32 0-120 53.68-120 120v200H680V120C680 53.68 626.24 0 560 0c-66.32 0-120 53.68-120 120v200H320c-88.4 0-160 71.6-160 160v1280c0 88.4 71.6 160 160 160h1280c88.32 0 160-71.6 160-160V480c0-88.4-71.68-160-160-160zm-320 1080h240v240h-240v-240zm-800 0h240v240H480v-240zm400 0h240v240H880v-240zm400-400h240v240h-240v-240zm-400 0h240v240H880v-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCalendarReservedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCalendarReservedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCalendarReservedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1594.96 1252.88l-400 453.36c-17.6 19.92-42.4 32-68.88 33.6-2.08.08-4.08.16-6.08.16-24.48 0-48.08-8.88-66.48-25.28l-240-213.28c-41.28-36.72-44.96-99.92-8.32-141.2 36.8-41.36 100.16-44.96 141.2-8.24l164.96 146.64 333.6-378.08c36.56-41.52 99.6-45.44 141.2-8.88 41.36 36.56 45.36 99.76 8.8 141.2m4.96-932.88H1480V120c0-66.24-53.76-120-120.08-120C1293.68 0 1240 53.76 1240 120v200H679.92V120c0-66.24-53.68-120-120-120-66.24 0-120 53.76-120 120v200h-120C231.6 320 160 391.68 160 480v1280c0 88.4 71.6 160 159.92 160h1280c88.4 0 160.08-71.6 160.08-160V480c0-88.32-71.68-160-160.08-160" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconChatSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconChatSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconChatSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M576.077 1382.4c-3.38-25.19-5.683-50.688-5.683-76.8 0-339.302 294.681-614.4 658.252-614.4 159.053 0 304.896 52.685 418.714 140.314 2.458-20.89 3.686-42.087 3.686-63.514 0-338.765-310.118-614.4-691.2-614.4-381.081 0-691.2 275.635-691.2 614.4 0 116.352 35.943 227.251 104.448 324.48L83.251 1382.4h492.826zm1110.374 106.675c27.187-57.677 41.319-120.269 41.319-183.475 0-254.131-223.95-460.8-499.2-460.8-275.252 0-499.2 206.669-499.2 460.8s223.948 460.8 499.2 460.8h642.662l-184.78-277.325z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckDarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckDarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckDarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1209.599 1339.52c-41.048 57.36-105.22 93.84-175.553 99.68-6.562.56-13.203.8-19.764.8-63.372 0-124.584-25.12-169.712-70.32L467.379 992.56c-93.778-93.68-93.778-245.68 0-339.36 93.777-93.76 245.646-93.76 339.424 0L983.636 830l464.008-649.52c5.36-7.6 11.922-13.76 18.003-20.48H317.03C228.614 160 157 231.6 157 320v1280c0 88.32 71.614 160 160.03 160h1280.242c88.337 0 160.03-71.68 160.03-160V572.96L1209.6 1339.52zm-195.349-19.528c-31.686 0-62.252-12.56-84.896-35.12l-377.111-377.12c-46.89-46.88-46.89-122.8 0-169.68 46.889-46.88 122.823-46.88 169.712 0l277.012 276.88 546.343-764.72c38.568-53.84 113.462-66.4 167.392-27.92 53.93 38.56 66.493 113.52 27.925 167.44l-628.679 880c-20.563 28.64-52.65 46.96-87.776 49.84-3.36.24-6.641.4-9.922.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckMarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckMarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckMarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1209.599 1339.52c-41.048 57.36-105.22 93.84-175.553 99.68-6.562.56-13.203.8-19.764.8-63.372 0-124.584-25.12-169.712-70.32L467.379 992.56c-93.778-93.68-93.778-245.68 0-339.36 93.777-93.76 245.646-93.76 339.424 0L983.636 830l464.008-649.52c5.36-7.6 11.922-13.76 18.003-20.48H317.03C228.614 160 157 231.6 157 320v1280c0 88.32 71.614 160 160.03 160h1280.242c88.337 0 160.03-71.68 160.03-160V572.96L1209.6 1339.52zm-195.349-19.528c-31.686 0-62.252-12.56-84.896-35.12l-377.111-377.12c-46.89-46.88-46.89-122.8 0-169.68 46.889-46.88 122.823-46.88 169.712 0l277.012 276.88 546.343-764.72c38.568-53.84 113.462-66.4 167.392-27.92 53.93 38.56 66.493 113.52 27.925 167.44l-628.679 880c-20.563 28.64-52.65 46.96-87.776 49.84-3.36.24-6.641.4-9.922.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckPlusSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckPlusSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckPlusSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1840 1400.004h-240.003v-239.997h-160.002v239.997h-240.002v159.999h240.002V1800h160.002v-239.997H1840v-159.999zM719.987 1560.003c-42.24 0-83.04-16.72-113.121-46.88l-480.005-479.995c-62.481-62.479-62.481-163.758 0-226.237 62.48-62.48 163.761-62.48 226.242 0l346.484 346.396 690.168-966.23c51.36-71.998 151.442-88.558 223.202-37.279 72.001 51.44 88.641 151.359 37.28 223.198L850.23 1492.963c-27.36 38.32-70.161 62.56-117.042 66.48-4.48.4-8.8.56-13.2.56z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCheckSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCheckSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCheckSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M799.967 1680c-42.24 0-83.039-16.72-113.118-46.88l-479.99-479.993c-62.479-62.48-62.479-163.758 0-226.237 62.479-62.48 163.757-62.48 226.235 0l346.473 346.395 690.146-966.227c51.359-72 151.437-88.56 223.195-37.28 71.999 51.44 88.638 151.358 37.28 223.197L930.203 1612.961c-27.36 38.32-70.159 62.56-117.038 66.479-4.48.4-8.8.56-13.2.56" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconClockSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconClockSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconClockSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 160c441.067 0 799.911 358.933 799.911 800S1401.067 1760 960 1760c-441.156 0-800-358.933-800-800s358.844-800 800-800zm0 160c-352.757 0-640 287.265-640 640s287.243 640 640 640c352.679 0 639.911-287.276 639.911-640S1312.68 320 960 320zm239.067 996.907L862.222 1092.31v-541.2h195.556V987.69l249.724 166.515-108.435 162.703z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCloudLockSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCloudLockSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCloudLockSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1322 1369.997c0 30.968-25.032 56-56 56H818c-30.968 0-56-25.032-56-56v-392c0-30.968 25.032-56 56-56 0-123.536 100.464-224 224-224s224 100.464 224 224c30.968 0 56 25.032 56 56v392zm291.833-619.846c.429-7.346.586-14.534.586-21.684 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.211-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.511C191.38 966.206 120 1096.699 120 1236.96c0 209.961 155.732 390.619 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.689 0-153.935-68.567-297.282-186.167-394.37z"/>\n        <path d="M1042 809.997c-61.712 0-112 50.232-112 112h224c0-61.768-50.288-112-112-112"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCollapseSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCollapseSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCollapseSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M583.44 1303.44l113.12 113.12L880 1233.12V1760h160v-526.88l183.44 183.44 113.12-113.12L960 926.88l-376.56 376.56zM480 800h960V640H480v160zm0-240h960V400H480v160zm0-240h960V160H480v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCollectionSaveSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCollectionSaveSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCollectionSaveSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1223.445 663.432L1040 846.87V160H879.993v686.87L696.547 663.432 583.423 776.551l376.573 376.634 376.573-376.634-113.124-113.119zM1360.06 1040v320H560.02v-320H160v720h1600v-720h-399.94z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCollectionSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCollectionSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCollectionSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M800 920v240h319.76l.24-240H800zm480 240c0 88.24-71.76 160-160 160H800c-88.24 0-160-71.76-160-160v-160H160v560c0 88.32 71.68 160 160 160h1280c88.32 0 160-71.68 160-160v-560h-480v160zm400-640h-320V360c0-88.16-71.76-160-160-160H720c-88.24 0-160 71.84-160 160v160H240c-88.32 0-160 71.68-160 160v240h560c0-88.16 71.76-160 160-160h320c88.24 0 160 71.84 160 160h560V680c0-88.32-71.68-160-160-160zm-480 0H720V360h480v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCommonsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCommonsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCommonsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M338.72 959.646c0-214.788 177.76-390.843 396-390.843h320.32V310H732.96C373.92 310 80 600.493 80 959.646c0 359.15 293.92 649.647 652.96 649.647h320.32V1350.49H732.96c-218.24 0-394.24-176.055-394.24-390.844zm1501.28 0l-526.24-464.784v309.856h-554.4c-86.24 0-154.88 68.66-154.88 154.928s68.64 154.928 154.88 154.928h554.4v309.857L1840 959.653v-.007z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCompleteSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCompleteSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCompleteSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M900 1420l-400-300 120-160 240 180 420-560 160 120-540 720zm60-1260c-441.84 0-800 358.24-800 800s358.16 800 800 800 800-358.24 800-800-358.16-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconComposeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconComposeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconComposeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1129.767 1202.796l-565.604 113.12 113.12-565.684 430.244-430.243H360C271.761 319.99 200 391.83 200 479.99V1600c0 88.16 71.76 160.001 160.001 160.001H1480.01c88.24 0 160-71.84 160-160.001V692.472l-510.243 510.324zM824.645 829.153l226.241 226.242-282.802 56.56 56.56-282.802zm848.526-396.051c62.48-62.48 62.48-163.761 0-226.242-62.48-62.48-163.761-62.48-226.242 0L937.806 715.984l226.241 226.242 509.124-509.124z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCopyCourseSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCopyCourseSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCopyCourseSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1560 240V0H120v1760h240V240h1200zM863.44 696.56L966.88 800H680V400H520v480c0 44.16 35.84 80 80 80h366.88l-103.44 103.44 113.12 113.12L1273.12 880 976.56 583.44 863.44 696.56zM631.393 400H520v88.081A562.42 562.42 0 0 1 631.393 400zm577.214 0H1800v1520H520v-648.081C621.641 1375.643 763.305 1440 920 1440c309.28 0 560-250.72 560-560 0-203.706-108.767-382.008-271.393-480z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCopySolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCopySolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCopySolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M480 1920h1280V319.987H480V1920zm960-879.991h-240V800.007h-160v240.002H800v160.001h240v240.002h160V1200.01h240v-160.001zM160 0v1600.013h160V160.001h1040V0H160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconCoursesSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconCoursesSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconCoursesSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M480 960H320V320h160v640zm80-800H240c-44.16 0-80 35.84-80 80v1440c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V240c0-44.16-35.84-80-80-80zm560 320H800c-44.16 0-80 35.84-80 80v1120c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V560c0-44.16-35.84-80-80-80zm-80 800H880V640h160v640zm640-960h-320c-44.16 0-80 35.84-80 80v1280c0 44.16 35.84 80 80 80h320c44.16 0 80-35.84 80-80V400c0-44.16-35.84-80-80-80zm-80 800h-160V480h160v640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionCheckSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionCheckSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionCheckSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M891.697 1575.716L263.427 944.2l369.06-370.967L873.71 815.7l386.325-427.145H320.601C232.029 388.556 160 461.04 160 549.986v968.584c0 89.028 72.03 161.43 160.6 161.43h1124.205c88.571 0 160.6-72.402 160.6-161.43V786.563l-713.708 789.153zm-5.525-233.872L490.532 944.24l141.971-142.704 246.763 248.038L1611.444 240 1760 375.682l-873.828 966.162z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionNewSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionNewSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionNewSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionReply2Solid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionReply2Solid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionReply2Solid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1480.004 480.026H960.01V240.031c0-32.32-19.52-61.519-49.36-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.992 719.985A80.027 80.027 0 0 0 880.01 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995H1759.997c44.195 0 80.003-35.814 80.003-79.991V560.017c0-44.183-35.818-79.99-80.003-79.99h-279.993z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionReplyDarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionReplyDarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionReplyDarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M238 1200c132.548 0 240-107.452 240-240S370.548 720 238 720-2 827.452-2 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionReplySolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionReplySolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionReplySolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M238 1200c132.548 0 240-107.452 240-240S370.548 720 238 720-2 827.452-2 960s107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240zm720 0c132.548 0 240-107.452 240-240s-107.452-240-240-240-240 107.452-240 240 107.452 240 240 240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionSearchSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionSearchSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionSearchSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1793.266 1567.007l-316.747-316.747c78.807-121.61 121.45-263.143 121.45-411.315C1597.89 419.549 1258.42 80 838.945 80 419.549 80 80 419.469 80 838.945c0 419.315 339.469 758.944 758.945 758.944 148.252 0 289.784-42.643 411.235-121.37l316.667 316.667c62.725 62.885 163.934 62.725 226.339.08 62.405-62.405 62.405-163.934.08-226.26zM240.014 838.945c0-330.989 267.862-598.851 598.93-598.851 330.829 0 598.932 267.782 598.932 598.85 0 159.934-62.326 310.347-175.535 423.397-113.13 113.21-263.463 175.455-423.476 175.455-330.749.08-598.851-267.863-598.851-598.851z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1000 240c-441.12 0-800 323.04-800 720 0 138.8 43.28 271.36 125.84 386.88L120 1680h880c441.12 0 800-323.04 800-720s-358.88-720-800-720" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDiscussionXSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDiscussionXSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDiscussionXSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.76 0-800 358.24-800 800s358.24 800 800 800c441.84 0 800-358.24 800-800s-358.16-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDocumentSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDocumentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDocumentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1120 640V240l400 400h-400zm240 800H560v-160h800v160zM560 960h800v160H560V960zm0-320h320v160H560V640zm673.12-480H480c-88.24 0-160 71.84-160 160v1280c0 88.24 71.76 160 160 160h960c88.24 0 160-71.76 160-160V526.88L1233.12 160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDownloadSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDownloadSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDownloadSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1611.833 750.153c.43-7.345.586-14.533.586-21.683 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C189.38 966.21 118 1096.703 118 1236.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37m-237.257 334.299l-376.56 376.56-376.56-376.56 113.12-113.12 183.44 183.44v-446.96h160v446.96l183.44-183.44 113.12 113.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDragHandleSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDragHandleSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDragHandleSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M640 480h240V240H640v240zm400 0h240V240h-240v240zM640 880h240V640H640v240zm400 0h240V640h-240v240zm-400 400h240v-240H640v240zm400 0h240v-240h-240v240zm-400 400h240v-240H640v240zm400 0h240v-240h-240v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconDropDownSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconDropDownSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconDropDownSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1473.12l-376.56-376.56 113.12-113.12L880 1166.88V480h160v686.88l183.44-183.44 113.12 113.12L960 1473.12zM960 160c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEditSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEditSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEditSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1490.22 634.72l-204.88-204.88 204.88-204.96 204.88 204.96-204.88 204.88zM235.18 1684.88l128.08-332.96 204.88 204.88-332.96 128.08zm1562.4-1357.52L1592.7 122.48c-56.64-56.64-148.32-56.64-204.96 0l-1097.6 1097.6c-19.2 19.2-32.64 43.36-38.72 69.84L81.9 1751.198c-12 52.16 34.72 98.96 86.88 86.88l461.28-169.44c26.48-6.16 50.72-19.6 69.92-38.8l1097.6-1097.6c56.56-56.56 56.56-148.32 0-204.88z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEducatorsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEducatorsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEducatorsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M880.026 399.998v79.999h159.998v-80C1040.024 267.68 932.345 160 800.026 160H640.028v159.998h159.998c44.08 0 80 35.92 80 80zM1440.02 160s-159.998 0-239.998 80c-79.999 79.998-79.999 239.997-79.999 239.997s159.999 0 239.998-80C1440.02 319.999 1440.02 160 1440.02 160zm-210.27 349.373c-91.999 0-184.158 35.52-269.757 103.438-85.52-67.919-177.678-103.438-269.678-103.438C424.958 509.373 240 789.05 240 1040.007 240 1403.364 517.437 1760 799.994 1760c21.04 0 41.44-8.56 56.4-23.2 23.28-22.88 72.32-56.8 103.599-56.8 31.36 0 80.319 33.84 103.599 56.72 15.04 14.88 35.28 23.28 56.4 23.28 282.636 0 559.994-356.636 559.994-719.993 0-250.957-184.879-530.634-450.236-530.634z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEmailSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEmailSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEmailSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M959.976 905.84l717.2-445.12c-22.96-12.8-49.04-20.72-77.2-20.72h-1280c-28.16 0-54.24 7.92-77.2 20.72l717.2 445.12zm42.184 162.112c-12.96 8-27.52 12-42.16 12-14.64 0-29.28-4-42.24-12l-757.52-470.16c0 .8-.24 1.52-.24 2.16v720c0 88.24 71.76 160 160 160h1280c88.24 0 160-71.76 160-160v-720c0-.64-.24-1.36-.24-2.16l-757.6 470.16z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEmptySolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEmptySolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEmptySolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M958 1559.972c-331.318 0-599.972-268.542-599.972-599.916 0-331.374 268.654-599.972 599.972-599.972S1557.972 628.626 1557.972 960c0 331.374-268.654 599.916-599.972 599.916v.056zM958 160c-441.738 0-800 358.318-800 800s358.318 800 800 800 800-358.318 800-800c0-441.738-358.318-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEndSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEndSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEndSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.76 0-800 358.24-800 800s358.24 800 800 800c441.84 0 800-358.24 800-800s-358.16-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEquationSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEquationSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEquationSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M567.744 1350.826c39.456-85.786 70.857-190.249 94.206-313.617 23.345-123.139 35.017-253.627 35.017-391.351 0-25.446-.346-54.858-1.164-87.888-.812-33.147-1.979-61.278-3.496-84.036h-75.294c-42.61 0-76.814 7.47-102.73 22.758-25.683 15.174-46.928 35.249-63.856 59.877-13.658 19.492-24.515 44.588-31.984 75.165-7.59 30.581-12.84 63.73-16.342 99.443h-75.88c-2.335-23.927-4.668-47.505-6.066-70.846-1.64-23.344-2.338-49.954-2.338-79.718 0-28.831 5.137-57.775 15.525-86.72 10.508-28.832 28.014-57.195 52.065-85.203 21.01-25.68 49.493-47.149 85.799-64.539C507.392 326.634 547.783 318 592.024 318H1627v155.583h-271.643v833.826c0 51.003 15.178 91.503 45.293 121.733 30.352 30.113 73.544 45.286 129.926 45.286 11.325 0 24.75-.469 40.51-1.167 15.64-1.166 29.533-1.867 41.673-2.682v81.702c-37.939 13.538-75.88 24.977-113.584 34.314-37.821 9.337-84.867 14.004-141.25 14.004-76.466 0-133.9-24.743-172.067-73.998-38.298-49.37-57.434-116.482-57.434-201.455V473.703H810.902l2.335 80.884c.818 31.86 1.172 66.18 1.172 102.71 0 105.394-8.993 220.592-27.087 345.481-18.094 124.884-44.942 232.5-80.313 322.605-34.669 88.356-74.128 156.398-118.37 204.606-44.358 47.847-95.723 72.011-154.557 72.011-48.329 0-83.698-16.34-106.228-49.021-22.529-32.681-33.854-66.995-33.854-102.71 0-30.581 10.505-60.694 31.984-89.872 21.365-29.18 53-44.002 94.794-44.002 25.679 0 52.526 4.435 80.31 13.423 27.78 8.868 50.197 15.872 67.008 21.008h-.357.005z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEquellaSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEquellaSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEquellaSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M892.689 1672.168c1.308-7.043 8.652-12.778 16.4-12.778h62.076c7.646 0 12.676 5.735 11.268 12.778l-12.073 58.756c-1.409 7.042-8.753 12.878-16.5 12.878h-62.177c-7.546 0-12.577-5.836-11.067-12.878l12.073-58.756zm-599.334 16.298c1.409-7.042 8.753-12.878 16.4-12.878h62.177c7.646 0 12.677 5.836 11.067 12.878l-11.872 58.757c-1.51 7.042-8.854 12.777-16.5 12.777H292.55c-7.646 0-12.676-5.735-11.268-12.777l12.073-58.757zM269.511 653.19c1.408-7.043 8.753-12.878 16.4-12.878h62.076c7.646 0 12.676 5.835 11.067 12.878l-11.872 58.756c-1.61 7.043-9.055 12.778-16.601 12.778h-62.076c-7.647 0-12.677-5.735-11.269-12.778l12.074-58.756h.2zm415.921-480.413c1.51-7.042 8.854-12.777 16.5-12.777h62.077c7.747 0 12.777 5.835 11.369 12.777l-12.074 58.857c-1.408 7.043-8.853 12.878-16.5 12.878h-62.177c-7.646 0-12.676-6.036-11.067-12.878l11.872-58.857zm653.563 0c1.408-7.042 8.753-12.777 16.399-12.777h62.076c7.647 0 12.677 5.835 11.067 12.777l-11.872 58.857c-1.509 7.043-8.853 12.778-16.6 12.778h-62.077c-7.646 0-12.676-6.037-11.268-12.878l12.073-58.857.202.1zM935.95 491.007c1.61-7.244 9.055-13.08 16.6-13.08h62.077c7.646 0 12.677 6.037 11.268 13.08l-12.073 58.655c-1.408 7.043-8.753 12.778-16.5 12.778h-62.076c-7.647 0-12.576-5.735-11.067-12.778l11.872-58.756-.1.1zm-174.357-117.01c1.51-7.042 9.055-12.676 16.4-12.676h110.47c7.646 0 12.575 5.835 11.066 12.777L878.603 478.33c-1.509 7.043-9.055 12.677-16.5 12.677h-110.67c-7.546 0-12.577-5.735-11.068-12.677l21.128-104.333h.101zM478.176 1392.975c1.509-7.043 9.055-12.677 16.4-12.677h110.368c7.747 0 12.677 5.634 11.269 12.576l-21.33 104.333c-1.408 7.043-8.853 12.677-16.298 12.677H467.914c-7.446 0-12.476-5.735-11.068-12.677l21.33-104.333v.1zm446.406 107.15c1.51-7.043 9.055-12.778 16.4-12.778h110.47c7.646 0 12.576 5.735 11.066 12.677l-21.128 104.332c-1.509 7.043-9.055 12.577-16.5 12.577H914.42c-7.545 0-12.576-5.735-11.067-12.577l21.129-104.433.1.201zm290.863-81.495c4.327-21.128 26.36-38.231 49.098-38.231h172.747c22.839 0 37.83 17.103 33.504 38.231l-33.403 163.391c-4.326 21.128-26.46 38.232-49.299 38.232h-172.445c-22.839 0-37.83-16.903-33.403-38.232l33.403-163.39h-.202zm-803.672-389.36c4.326-21.128 26.36-38.433 49.098-38.433h172.747c22.839 0 37.83 17.104 33.503 38.232L633.72 1192.66c-4.326 21.129-26.46 38.232-49.3 38.232H411.774c-22.738 0-37.83-17.103-33.402-38.232l33.402-163.39zm55.336-337.647c4.225-21.128 26.158-38.232 49.097-38.232h172.647c22.838 0 37.83 17.104 33.503 38.232l-33.402 163.592c-4.327 21.128-26.46 38.232-49.3 38.232H467.11c-22.839 0-37.93-17.104-33.503-38.232l33.402-163.592h.1zM1406 360.717c4.326-21.128 26.46-38.232 49.299-38.232h172.646c22.839 0 37.83 17.104 33.503 38.232l-33.302 163.491c-4.326 21.128-26.36 38.232-49.097 38.232h-172.747c-22.839 0-37.83-17.104-33.504-38.232l33.403-163.491h-.201zM871.76 742.532c10.062-49.3 61.574-89.241 114.897-89.241h524.782c53.323 0 88.537 39.942 78.476 89.341l-101.616 496.51c-10.061 49.3-61.574 89.342-114.897 89.342H848.622c-53.324 0-88.537-39.942-78.476-89.342l101.616-496.41v-.2z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExpandItemsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExpandItemsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExpandItemsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1138.841 741.29l93.943-93.913L986.5 401.17 740.216 647.377l93.943 93.913 85.904-85.877v609.174l-85.904-85.877-93.943 93.913L986.5 1518.83l246.284-246.207-93.943-93.913-85.904 85.877V655.413zM455 163h1063v132.833H455zM455 1624.167h1063V1757H455z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExpandSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExpandSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExpandSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1039.667 1405.196V959.992H880.333v445.204l-182.675-182.752-112.649 112.696L960 1710.288l374.991-375.148-112.649-112.696zM482 800.6h956V641.2H482zM482 561.5h956V402.1H482zM482 322.4h956V163H482z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExportContentSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExportContentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExportContentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1360 446.872l-113.12 113.12 160 160H960c-176.48 0-320 143.52-320 320v80h160v-80c0-88.16 71.76-160 160-160h446.88l-160 160 113.12 113.12 353.12-353.12L1360 446.872z"/>\n        <path d="M1040 1440H320V480h880V320H160v1280h1040v-400h-160z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExportSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExportSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExportSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1360 446.872l-113.12 113.12 160 160H960c-176.48 0-320 143.52-320 320v80h160v-80c0-88.16 71.76-160 160-160h446.88l-160 160 113.12 113.12 353.12-353.12L1360 446.872z"/>\n        <path d="M1040 1440H320V480h880V320H160v1280h1040v-400h-160z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconExternalLinkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconExternalLinkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconExternalLinkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1579.892 517.69L811.62 1285.96l-142.758-142.757 767.45-767.45H994.123V187.96h773.564v187.793h-1.177v636.282h-186.618V517.689zM165.724 1730.97L163 1731V509.568h611.611V696.62H351.968v846.557h844.8V1354.74h187.793v188.438h.456v187.793H165.724z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconEyeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconEyeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconEyeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1249.714c-160.052 0-289.818-129.647-289.818-289.714S799.948 670.286 960 670.286 1249.818 799.933 1249.818 960 1120.052 1249.714 960 1249.714M960 453c-460.231 0-797 507-797 507s336.769 507 797 507 797-507 797-507-336.769-507-797-507" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFacebookBoxedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFacebookBoxedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFacebookBoxedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1518.249 960h-259.374v697.375H960V960H816.042V731.859H960V583.667c0-201.343 86.873-321.042 323.582-321.042h272.773v246.82h-222.761c-66.25-.099-74.37 34.471-74.37 98.879l-.349 123.535h298.875L1518.199 960h.05zm-26.9-797H428.7C282.55 163 163 282.55 163 428.7v1062.6c0 146.25 119.55 265.7 265.7 265.7h1062.65c146.1 0 265.65-119.45 265.65-265.7V428.7c0-146.15-119.55-265.7-265.65-265.7z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFacebookSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFacebookSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFacebookSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1111.242 1920h-360.05V960H511V629.2l240.193-.16-.4-194.88C750.792 164.24 824.05 0 1142.306 0h264.772v330.88h-165.493c-123.94 0-129.864 46.24-129.864 132.64l-.48 165.6h297.839l-35.148 330.8-262.451.08-.16 960h-.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesCopyrightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesCopyrightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesCopyrightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M987.206 1104.293c-35.865 0-62.963-13.084-81.294-39.32-18.331-26.168-27.563-61.035-27.563-104.671 0-95.972 36.33-143.926 108.857-143.926 14.479 0 30.153 4.849 47.156 14.546 16.87 9.697 31.083 26.66 42.772 50.836l108.79-56.76h-.066c-43.503-78-115.498-117.784-216.12-117.718-68.608 0-125.461 22.802-170.358 68.43-45.031 45.495-67.48 107.073-67.48 184.647 0 79.502 22.25 141.54 66.683 186.039 44.499 44.631 102.946 66.95 175.472 66.95 45.496 0 87.073-11.355 124.797-34.204 37.725-22.714 67.214-53.995 88.467-93.779l-100.09-50.875c-19.327 46.558-52.734 69.804-100.023 69.804"/>\n        <path d="M960.5 1598C608.418 1598 323 1312.582 323 960.5S608.418 323 960.5 323 1598 608.418 1598 960.5 1312.582 1598 960.5 1598M960 163c-440.171 0-797 356.829-797 797s356.829 797 797 797 797-356.829 797-797-356.829-797-797-797"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesCreativeCommonsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesCreativeCommonsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesCreativeCommonsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M748.981 1108.747c-37.459 0-65.779-13.655-85.013-41.02-19.208-27.336-28.852-63.732-28.852-109.268 0-100.21 37.991-150.287 113.865-150.287 15.196 0 31.641 5.1 49.361 15.196 17.667 10.095 32.597 27.842 44.765 53.133l113.891-59.244.053-.026c-45.562-82.012-120.931-122.977-226.215-122.924-71.863 0-131.372 23.803-178.395 71.358-47.05 47.58-70.588 111.819-70.588 192.794 0 82.942 23.273 147.764 69.817 194.256 46.545 46.624 107.808 69.87 183.709 69.87 47.581 0 91.123-11.875 130.549-35.68 39.478-23.803 70.348-56.4 92.611-97.924l-104.752-53.133c-20.271 48.564-55.18 72.899-104.806 72.899M1344.021 1035.848c-20.244 48.564-55.152 72.899-104.726 72.899-37.459 0-65.805-13.655-85.013-41.02-19.208-27.336-28.851-63.732-28.851-109.268 0-100.21 37.99-150.287 113.891-150.287 16.126 0 33.075 5.1 50.875 15.196 17.667 10.095 32.651 27.842 44.765 53.133l112.377-59.243c-44.499-82.012-119.444-122.978-224.701-122.925-71.889 0-131.319 23.804-178.368 71.332-47.103 47.58-70.615 111.819-70.615 192.794 0 82.942 23.007 147.764 69.153 194.256 45.961 46.624 107.436 69.87 184.373 69.87a245.01 245.01 0 0 0 129.061-35.68c39.398-23.803 70.8-56.4 94.046-97.924l-106.267-53.133z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesFairUseSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesFairUseSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesFairUseSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M773.947 1204h112V993h213v-87h-213V788h246v-94h-358z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesObtainedPermissionSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesObtainedPermissionSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesObtainedPermissionSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M1159.319 717.488c-10.441-9.83-22.332-14.49-35.615-14.49H796.35c-13.603-1-26.787 4.847-36.377 14.49-9.936 9.803-15.017 21.45-15.017 35.478v321.032h91v381h248v-381h91V752.966c0-14.001-5.276-25.648-15.637-35.478M960.002 660.514c73.988 0 110.994-36.45 110.994-109.348 0-73.803-36.952-110.677-110.993-110.677-74.042 0-111.048 36.927-111.048 110.65v.053c0 72.872 37.06 109.322 111.047 109.322"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilesPublicDomainSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilesPublicDomainSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilesPublicDomainSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M840.477 920.212c-11.424 12.593-28.506 18.792-51.274 18.792h-94.254V807.587l.368.417h91.07c47.475 0 71.199 21.647 71.199 65.56 0 18.704-5.686 34.055-17.11 46.648m-35.625-194.208H585.949v435h111v-140h86.595c35.095 0 65.46-5.131 91.044-14.881 25.637-9.803 44.845-22.517 57.65-37.925 12.805-15.462 21.838-30.918 27.045-46.327 5.207-15.41 7.81-31.716 7.81-48.56 0-98.11-54.116-147.307-162.242-147.307M1255.315 1035.471c-17.56 22.954-45.774 34.532-84.694 34.532h-63.672V817.416l-.177-.026 62.542.08c39.85 0 68.505 11.423 86.039 34.27 17.534 22.928 26.282 53.583 26.282 91.892 0 38.31-8.786 68.938-26.32 91.84m77.575-256.07c-39.903-35.494-94.95-53.399-165.086-53.399H996.949v434.734l.032.266h170.823c70.163 0 125.183-17.893 165.086-53.386 39.797-35.44 59.722-90.279 59.722-164.135 0-73.775-19.925-128.588-59.722-164.08"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFilmstripSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFilmstripSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFilmstripSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M815.09 887.556v434.666l362.274-217.333z"/>\n        <path d="M1322.273 597.778l108.682-144.89h181.136v144.89h-289.818zm289.89 869.333H307.91V742.667h1304.182l.072 724.444zM307.91 452.89h362.273L561.5 597.778H307.91v-144.89zm434.727 144.889l108.682-144.89h398.5l-108.682 144.89h-398.5zM163 308v1159.111C163 1547.017 227.992 1612 307.91 1612h1304.18c79.918 0 144.91-64.983 144.91-144.889V308H163z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFlagSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFlagSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFlagSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M402.333 1757H243V163h159.333zM641.333 358.751v564.914l734.049-282.457-734.049-282.457zm-79.666 760.657c-15.854 0-31.628-4.782-45.092-14.027-21.669-14.824-34.575-39.372-34.575-65.673v-797c0-26.301 12.906-50.849 34.575-65.673 21.67-14.904 49.234-18.092 73.692-8.767l1035.667 398.5c30.751 11.875 51.066 41.444 51.066 74.44 0 32.996-20.315 62.564-51.066 74.44l-1035.667 398.5c-9.241 3.427-18.96 5.26-28.6 5.26z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFolderLockedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFolderLockedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFolderLockedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M920 811.429c-52.267 0-93 40.229-93 91.429V994h186v-91.142c0-51.2-40.733-91.43-93-91.43"/>\n        <path d="M1200 1283.195c0 42.42-34.385 76.805-76.801 76.805H716.801c-42.417 0-76.801-34.387-76.801-76.805v-212.104c0-42.42 34.388-77.091 76.808-77.091H733v-91.143C733 802.286 817.333 720 920 720s187 82.286 187 182.857V994h16.191c42.42 0 76.809 34.672 76.809 77.091v212.104zM1680 480h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240H320c-88.4 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconFolderSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconFolderSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconFolderSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 480h-624l-55.76-139.44C975.92 279.84 917.12 240 851.68 240H320c-88.4 0-160 71.6-160 160v1200c0 44.16 35.84 80 80 80h1360c88.4 0 160-71.6 160-160V560c0-44.16-35.84-80-80-80" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconForwardSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconForwardSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconForwardSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M439.993 480.026h519.989V240.031c0-32.32 19.52-61.519 49.359-73.918 30.08-12.4 64.319-5.6 87.198 17.36l719.985 719.985c31.28 31.279 31.28 81.838 0 113.117L1096.54 1736.56a80.026 80.026 0 0 1-56.559 23.44c-10.32 0-20.72-2-30.639-6.08-29.84-12.4-49.359-41.599-49.359-73.918v-239.995H81.002a.998.998 0 0 1-1.002-1.005v-957.97a.999.999 0 0 1 1.002-1.006h358.99z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGithubSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGithubSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGithubSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1087.2 1189.574c0-49 11.75-91 35.2-125.9 23.45-34.9 51.65-52.4 84.5-52.4 33.4 0 61.8 17.5 85.3 52.4s35.2 77 35.2 126-11.75 91-35.2 125.9c-23.45 34.9-51.9 52.4-85.3 52.4-32.85 0-61-17.5-84.5-52.4s-35.2-77-35.2-126zm-503.15 0c0-49 11.8-91 35.25-125.9 23.45-34.9 51.9-52.4 85.3-52.4 33.5 0 61.75 17.35 85 52s34.75 76.85 34.75 126.4c0 49.55-11.6 91.65-34.8 126.35-23.2 34.7-51.5 52-85 52-33.35 0-61.75-17.5-85.25-52.4s-35.2-77-35.2-126l-.05-.05zm-227.65-13.3c0 44.85 5.6 84.65 16.8 119.3 11.2 34.65 25.5 63.8 43 87.3s41.8 43.5 72.8 59.85 61.3 29.1 90.75 38c29.5 8.8 67.3 15.75 113.5 20.7 46.2 4.95 87.3 8 123.5 9 36.3 1 82.35 1.5 138.15 1.5 55.8 0 101.85-.5 138.1-1.5s77.5-4 123.6-9c46.1-5 84-11.85 113.5-20.75 29.4-8.85 59.65-21.5 90.7-38 31.05-16.5 55.3-36.35 72.75-59.8 17.45-23.45 31.85-52.5 43.1-87.25 11.2-34.65 16.8-74.4 16.8-119.25 0-76.15-34.15-145-102.5-206.5-20.35-18.85-44-33-71.2-42.7-27.2-9.7-57.75-15-92-16.4-34.1-1.3-66.85-1-98.15.8-31.3 1.8-69.85 4.3-115.75 7.5-45.9 3.1-85.5 4.65-118.9 4.65-33.4 0-73-1.5-118.9-4.65-46-3.15-84.5-5.6-115.85-7.5-31.35-1.9-64-2-98.2-.75-34.2 1.3-64.85 6.8-92 16.5-27.15 9.7-50.85 23.8-71.2 42.6-68.35 62.6-102.5 131.5-102.5 206.5l.1-.15zM160 979.924c0-129.35 43.3-241.25 129.9-335.65-4.7-12.5-9-26.75-12.9-42.65-3.9-15.9-7.5-38.6-11-68s-2-63.5 4-102.15c6-38.65 17-78 33.2-118.2 3.15-1 7.5-2 12.9-2.75s18.65-.1 39.5 2 43.3 6.65 67.3 13.7c24 7.05 56.2 20.6 96.65 40.7s82.85 45.25 127.2 75.5c76.15-20.85 180.5-31.3 313-31.3 133 0 237.5 10.5 313.7 31.3 44.35-30.25 86.5-55.4 126.35-75.5 39.85-20.1 72.5-33.65 97.8-40.7 25.35-7 47.5-11.75 66.5-14.1 19-2.35 32.8-2.75 41.15-1.2l11.75 2.35c16.15 40.15 27.25 79.5 33.25 118.15 6 38.65 7.3 72.65 3.9 102.1-3.4 29.45-7 52.15-10.9 68-3.9 15.85-8.2 30.15-12.9 42.7 86.45 94.4 129.65 206.3 129.65 335.65 0 72.5-6.75 138.1-20.3 196.75-13.55 58.65-32.5 109.65-56.7 153-24.2 43.35-55 81.3-92.3 114.2-37.3 32.85-77.7 59.7-121.25 80.6-43.55 20.9-93.3 37.8-149.1 50.85-55.8 13.05-112.65 22.15-170.5 27.4-63.75 5.45-127.75 8.05-191.75 7.8-69.35 0-133-2.65-190.9-7.85-57.9-5.2-114.6-14.35-170.15-27.4-55.5-13-105-30-148.25-50.85s-83.5-47.7-120.5-80.6c-37-32.85-67.5-71-91.5-114.25s-42.8-94.2-56.4-152.85c-13.55-58.75-20.4-124.3-20.4-196.8v.05z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGradebookExportSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGradebookExportSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGradebookExportSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1383.907 446.872l-113.111 113.12 159.988 160H983.938c-176.466 0-319.975 143.52-319.975 320v80H823.95v-80c0-88.16 71.754-160 159.987-160h446.846l-159.988 160 113.111 113.12L1737 799.992l-353.093-353.12zM1063.932 1440H343.988V480h879.932V320H184v1280h1039.92v-400h-159.988v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGradebookImportSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGradebookImportSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGradebookImportSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M537.093 446.872l113.111 113.12-159.988 160h446.846c176.466 0 319.975 143.52 319.975 320v80H1097.05v-80c0-88.16-71.754-160-159.987-160H490.216l159.988 160-113.111 113.12L184 799.992l353.093-353.12zM857.068 1440h719.944V480H697.08V320H1737v1280H697.08v-400h159.988v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGradebookSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGradebookSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGradebookSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M240 240v1440c0 44.24 35.84 80 80 80h240V160H320c-44.16 0-80 35.84-80 80zm1360-80H640v1600h960c44.16 0 80-35.76 80-80V240c0-44.16-35.84-80-80-80zm-470 1142.48c0 75.84-61.68 137.52-137.52 137.52H800v-440h192.48c75.84 0 137.52 61.68 137.52 137.52 0 31.12-10.72 59.44-28.16 82.48 17.44 23.04 28.16 51.44 28.16 82.48zM1520 1110h-164.96c-30.32 0-55.04 24.72-55.04 55.04v110c0 30.32 24.64 55.04 55.04 55.04H1520V1440h-164.96c-90.96 0-164.96-74-164.96-164.96v-110c0-90.96 74-164.96 164.96-164.96H1520V1110zm-527.52 165.04H910v55.04h82.48c15.12 0 27.52-12.32 27.52-27.52s-12.32-27.52-27.52-27.52zM1060 730v110H950V455.04c0-30.4 24.64-55.04 55.04-55.04h220c30.32 0 54.96 24.64 54.96 55.04V840h-110V730h-110zm0-220h110v110h-110V510zm-67.52 600H910v55.04h82.48c15.12 0 27.52-12.32 27.52-27.52s-12.32-27.52-27.52-27.52z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupDarkNewSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupDarkNewSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupDarkNewSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupNewSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupNewSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupNewSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconGroupSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconGroupSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconGroupSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 960v140h560v254.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260h-400v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1260H480v94.8c92.96 33.12 160 121.12 160 225.2 0 132.4-107.68 240-240 240s-240-107.6-240-240c0-104.08 67.04-192.08 160-225.2V1100h560V960H555V858.667c0-109.44 86.063-197.6 193.388-202.667 54.674 61.813 129.6 101.333 211.612 101.333 82.013 0 156.938-39.52 211.612-101.333C1279.95 661.067 1365 749.227 1365 858.667V960h-325zm-79.5-694C849.125 266 758 356.72 758 468.5S849.125 671 960.5 671 1163 580.28 1163 468.5 1071.875 266 960.5 266z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHamburgerSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHamburgerSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHamburgerSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1520 1480H400v-240h1120v240zm0-400H400V840h1120v240zm0-400H400V440h1120v240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHeartSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHeartSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHeartSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1280 320c-127.52 0-245.68 66.96-320 166.4C885.68 386.96 767.52 320 640 320c-220.56 0-400 179.44-400 400 0 439.28 649.92 850.56 677.6 867.84A80.132 80.132 0 0 0 960 1600c14.72 0 29.44-4.08 42.4-12.16 27.68-17.28 677.6-428.56 677.6-867.84 0-220.56-179.44-400-400-400" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHighlighterSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHighlighterSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHighlighterSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M80 1642h480.009l81.441-81.448-240.004-240.025L80 1642zm1186.31-162.865c-144.883 0-283.846 57.526-386.327 160.017H1840v-160.017h-573.69zm-182.46-997.054l-677.052 677.03 396.007 396.12 677.052-677.19-396.007-395.96zm552.154 239.824c62.481-62.486 62.481-163.776 0-226.343l-169.763-169.697c-62.4-62.487-163.763-62.487-226.244 0l-71.281 71.367 396.007 395.96 71.281-71.287z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHomeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHomeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHomeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1736.545 943.446L1519.99 726.89V360.017h-239.995v126.878L1016.559 223.46c-31.28-31.28-81.839-31.28-113.118 0L183.455 943.446c-22.88 22.88-29.76 57.279-17.36 87.198 12.4 29.92 41.6 49.36 73.919 49.36H400.01v639.987h399.992V1320h319.994v399.992h399.992v-639.988h159.997c32.32 0 61.52-19.44 73.919-49.359 12.4-29.92 5.52-64.319-17.36-87.198" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconHourGlassSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconHourGlassSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconHourGlassSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M879.84 837.36l-35.28-23.84C841.68 811.68 560 618.4 560 320h800c0 298.4-281.68 491.68-284.4 493.44L1040 837.2v245.6l35.6 23.76c2.88 1.92 284.4 193.04 284.4 493.44H560c0-298.24 281.68-491.6 284.4-493.44l35.6-23.76-.16-245.44zM400 1600h-80c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h1280c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80h-80c0-315.76-229.44-528.48-320-600.24v-79.52c90.56-71.6 320-284.32 320-600.24h80c44.16 0 80-35.76 80-80v-80c0-44.16-35.84-80-80-80H320c-44.16 0-80 35.84-80 80v80c0 44.24 35.84 80 80 80h80c0 315.92 229.44 528.64 320 600.24v79.52c-90.56 71.76-320 284.48-320 600.24zm560-879.968s132.08-88.24 200.24-240H759.76c68.16 151.76 200.24 240 200.24 240" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImageSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImageSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImageSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M480 1360l240-320 160 160 320-400 240 560H480zm200-880c110.32 0 200 89.52 200 200 0 110.56-89.68 200-200 200-110.56 0-200-89.44-200-200 0-110.48 89.44-200 200-200zM155 1685h1610V235H155v1450z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImportContentSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImportContentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImportContentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H913.12l160-160L960 526.88 606.88 880 960 1233.12 1073.12 1120l-160-160H1360zm-80-640v160H400v960h720v-240h160v400H240V320h1040z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconImportSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconImportSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconImportSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 960c88.24 0 160 71.84 160 160v80h160v-80c0-176.48-143.52-320-320-320H913.12l160-160L960 526.88 606.88 880 960 1233.12 1073.12 1120l-160-160H1360zm-80-640v160H400v960h720v-240h160v400H240V320h1040z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconIndent2Solid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconIndent2Solid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconIndent2Solid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 400h1440V240H320v160zm480 320h960V560H800v160zm0 320h960V880H800v160zm0 320h960v-160H800v160zm-480 320h1440v-160H320v160zM160 480l480 480-480 480V480z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconIndentSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconIndentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconIndentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 400h1440V240H320v160zm480 320h960V560H800v160zm0 320h960V880H800v160zm0 320h960v-160H800v160zm-480 320h1440v-160H320v160zM160 480l480 480-480 480V480z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInfoSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInfoSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInfoSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960.5 728C872.411 728 801 656.589 801 568.5S872.411 409 960.5 409 1120 480.411 1120 568.5 1048.589 728 960.5 728zm151.5 726.999c0 30.928-25.07 56.001-55.994 56.001H864.994c-30.924 0-55.994-25.07-55.994-56.001V934.001C809 903.073 834.07 878 864.994 878h191.012c30.924 0 55.994 25.07 55.994 56.001v520.998zM960 160c-441.828 0-800 358.172-800 800s358.172 800 800 800 800-358.172 800-800-358.172-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInstructureSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInstructureSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInstructureSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M391.447 960c0 115.723-90.566 216.352-201.258 226.415C170.063 1110.943 160 1035.472 160 960c0-75.472 10.063-155.975 30.189-226.415C305.912 743.648 391.447 844.277 391.447 960zm135.849-70.44c38.893 0 70.44 31.547 70.44 70.44s-31.547 70.44-70.44 70.44-70.44-31.547-70.44-70.44 31.547-70.44 70.44-70.44zm75.471 322.012c-30.188 30.189-30.188 75.472 0 100.63 30.189 25.156 75.472 30.188 100.63 0 30.188-30.19 30.188-75.472 0-100.63-25.158-25.157-75.472-25.157-100.63 0zm-45.283 145.912c-80.503-80.503-211.32-90.566-306.918-20.126 80.503 135.85 191.195 246.541 322.013 322.013 75.471-85.535 65.408-216.352-15.095-301.887zm45.283-759.748c-30.188 30.189-30.188 75.472 0 100.629 30.189 25.157 75.472 30.188 100.63 0 30.188-30.189 25.156-75.472 0-100.63-30.19-25.156-75.472-25.156-100.63 0zm603.774 618.868c-30.189 25.157-30.189 70.44-5.032 100.629 25.158 30.188 70.44 30.188 100.63 5.031 0 0 5.03 0 5.03-5.031 25.158-30.189 25.158-75.472-5.03-100.63-25.158-25.156-65.41-25.156-95.598 0zm110.692-513.208c25.157-30.188 25.157-75.471-5.032-100.629-25.157-25.157-70.44-25.157-95.597 0-25.157 30.189-25.157 75.472 5.031 100.63 25.157 25.156 65.409 25.156 95.598 0zm40.251-145.912c80.503 80.503 211.321 90.566 306.919 20.126-80.504-135.849-191.195-246.54-322.013-322.013-75.472 90.567-65.409 221.384 15.094 301.887zm-800 0c85.535-80.503 90.566-211.32 20.126-301.887C441.761 331.07 331.07 441.761 255.597 577.61c90.567 70.44 221.384 60.377 301.887-20.126zm800 800c-80.503 80.503-90.566 211.321-20.126 306.919 135.85-80.504 246.541-191.195 322.013-322.013-85.535-75.472-216.352-65.409-301.887 15.094zM960 456.855c-40.252 0-70.44 30.189-70.44 70.44 0 40.252 30.188 70.44 70.44 70.44 40.252 0 70.44-35.22 70.44-75.47 0-35.221-35.22-65.41-70.44-65.41zm0-65.408c115.723 0 216.352-90.566 231.447-201.258C1115.975 170.063 1040.503 160 960 160c-80.503 0-155.975 10.063-231.447 30.189C743.648 305.912 844.277 391.447 960 391.447zm0 930.817c-40.252 0-75.472 30.189-75.472 70.44 0 40.252 30.189 75.472 70.44 75.472H960c40.252 0 70.44-35.22 70.44-75.472-5.031-40.251-35.22-70.44-70.44-70.44zm0 206.29c-115.723 0-216.352 85.534-226.415 201.257C809.057 1749.937 884.528 1760 960 1760c75.472 0 155.975-10.063 226.415-30.189-15.094-115.723-110.692-201.258-226.415-201.258zm432.704-644.026c-40.251 0-70.44 30.189-70.44 70.44 0 40.252 30.189 70.44 70.44 70.44 40.252 0 70.44-30.188 70.44-70.44 0-35.22-30.188-70.44-70.44-70.44zM1528.554 960c0 115.723 90.565 216.352 201.257 226.415C1749.937 1110.943 1760 1035.472 1760 960c0-75.472-10.063-155.975-30.189-226.415-115.723 10.063-201.258 110.692-201.258 226.415z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconIntegrationsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconIntegrationsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconIntegrationsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1792 512h-256V128c0-70.4-57.6-128-128-128h-128c-70.4 0-128 57.6-128 128v384H768V128C768 57.6 710.4 0 640 0H512c-70.4 0-128 57.6-128 128v384H128C57.6 512 0 569.6 0 640v256c0 70.4 57.6 128 128 128h64v441.6c0 76.8 83.2 134.4 192 134.4h320v128c0 108.8 83.2 192 192 192h128c108.8 0 192-83.2 192-192v-128h320c108.8 0 192-57.6 192-134.4V1024h64c70.4 0 128-57.6 128-128V640c0-70.4-57.6-128-128-128zm-512 0V128h128v384h-128zm-768 0V128h128v384H512zm512 1280H896c-38.4 0-64-25.6-64-64v-128h256v128c0 38.4-25.6 64-64 64zm576-364.8c0 25.6-25.6 44.8-64 44.8H384c-32 0-64-19.2-64-44.8V1024h1280v403.2zm64-531.2H128V640h1664v256h-128z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconInvitationSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconInvitationSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconInvitationSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1221.28 1200H698.72L160 892.16V1600c0 88.32 71.76 160 160 160h1280c88.32 0 160-71.68 160-160V892.16L1221.28 1200zM480 320h960v570.72l160-91.44V160H320v639.28l160 91.44V320zm160 560h480V720H640v160zm0-240h640V480H640v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconKeyboardShortcutsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconKeyboardShortcutsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconKeyboardShortcutsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1693.417 599.8h-659.625v-73.3c0-40.49 32.806-73.3 73.291-73.3h73.292c121.106 0 219.875-98.78 219.875-219.9V160h-146.583v73.3c0 40.49-32.807 73.3-73.292 73.3h-73.292c-121.105 0-219.875 98.78-219.875 219.9v73.3H227.583C146.613 599.8 81 665.421 81 746.4v733c0 80.979 65.613 146.6 146.583 146.6h1465.834c80.97 0 146.583-65.62 146.583-146.6v-733c0-80.979-65.613-146.6-146.583-146.6zM1400 820h147v147h-147V820zm-220 0h147v147h-147V820zm221 220v147h-147v-147h147zM961 820h147v147H961V820zm220 220v147h-147v-147h147zm-220 0v147H814v-147h147zM741 820h147v147H741V820zm-220 0h147v147H521V820zm220 220v147H594v-147h147zM301 820h147v147H301V820zm220 220v147H374v-147h147zm-73 367H301v-147h147v147zm879 0H521v-147h806v147zm220 0h-147v-147h147v147zm74-220h-147v-147h147v147z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLikeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLikeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLikeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M538.07 893.534c0-179.837 334.297-249.516 402.149-301.675 67.931-52.239 245.482-150.877 261.165-359.753C1217.066 23.229 1530.4-5.81 1540.882 371.383c0 232.076-47.048 284.235-47.048 284.235 167.149 0 283.73 98.639 288.93 197.277 5.2 98.638-74.813 771.667-315.014 812.306-240.282 40.64-913.998 5.84-929.68-208.876v-562.79zm-320.056 786.45H378.04c44.168 0 80.014-35.839 80.014-79.998V800c0-44.16-35.846-79.999-80.014-79.999H218.014C173.846 720.001 138 755.841 138 800v799.986c0 44.16 35.846 79.999 80.014 79.999z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLinkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLinkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLinkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M762.573 987.466l-565.587 565.8 169.652 169.717 565.587-565.801-169.652-169.716zm395.774-56.572l565.747-565.72-169.652-169.797-565.747 565.8 169.652 169.717zm565.827-282.86l-28.396-28.327-169.652 169.717 28.316 28.326c15.517 15.523 15.517 40.888 0 56.492l-678.688 678.944c-10.158 10.243-22.076 11.763-28.315 11.763-6.24 0-18.077-1.52-28.316-11.683l-28.315-28.326-169.652 169.796 28.316 28.247c52.87 52.89 123.18 82.017 197.967 82.017s145.096-29.126 197.967-82.017l678.768-678.945c109.101-109.303 109.101-286.861 0-396.005zM225.302 1298.731l-28.316-28.246C144.116 1217.515 115 1147.18 115 1072.364c0-74.816 29.115-145.231 81.986-198.042l678.688-679.025c105.743-105.703 290.192-105.783 395.934.08l28.396 28.246-169.732 169.796-28.235-28.246c-10.159-10.242-22.077-11.762-28.316-11.762-6.159 0-18.077 1.52-28.235 11.682l-678.768 679.025c-10.238 10.162-11.758 22.085-11.758 28.246 0 6.241 1.52 18.164 11.758 28.406l28.236 28.166-169.652 169.796z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLinkedinSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLinkedinSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLinkedinSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1560 1546.96h-257.36v-414.04c0-104-37.2-174.96-130.2-174.96-71.08 0-113.44 47.84-131.96 94.08-6.8 16.48-8.52 39.6-8.52 62.72v432.08H774.72s3.44-701.2 0-773.84h257.24v109.72c34.24-52.72 95.32-127.84 231.88-127.84 169.24 0 296.16 110.64 296.16 348.28v443.8zM503.84 667.44h-1.72C415.8 667.44 360 607.92 360 533.68 360 457.76 417.52 400 505.52 400s142.12 57.76 143.84 133.68c0 74.28-55.84 133.76-145.52 133.76zm128.6 879.52H375.2V773.12h257.24v773.84zM1600 160H320c-88.36 0-160 71.64-160 160v1280c0 88.36 71.64 160 160 160h1280c88.36 0 160-71.64 160-160V320c0-88.36-71.64-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLockSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLockSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLockSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M503.5 617.143v228.571H338.992c-35.342 0-63.992 28.65-63.992 63.996v786.295c0 35.343 28.655 63.995 64.002 63.995h1242.996c35.347 0 64.002-28.65 64.002-63.995V909.71c0-35.344-28.65-63.996-63.992-63.996H1417.5V617.143c0-251.429-205.65-457.143-457-457.143s-457 205.714-457 457.143zM960.936 1519c113.183 0 204.936-91.782 204.936-205s-91.753-205-204.936-205S756 1200.782 756 1314s91.753 205 204.936 205zM960.5 388.571c127.96 0 228.5 100.572 228.5 228.572v228.571H732V617.143c0-128 100.54-228.572 228.5-228.572z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconLtiSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconLtiSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconLtiSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1320 320H680c-66.24 0-120 53.76-120 120 0 66.24 53.76 120 120 120h200v920c0 66.24 53.76 120 120 120 66.24 0 120-53.76 120-120V560h200c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120M600 1360H320V440c0-66.24-53.76-120-120-120-66.24 0-120 53.76-120 120v1040c0 66.24 53.76 120 120 120h400c66.24 0 120-53.76 120-120 0-66.24-53.76-120-120-120m1240-920v1040c0 66.24-53.76 120-120 120-66.24 0-120-53.76-120-120V440c0-66.24 53.76-120 120-120 66.24 0 120 53.76 120 120" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMarkAsReadSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMarkAsReadSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMarkAsReadSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMarkerSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMarkerSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMarkerSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1016.56 1816.54l480-479.994c15.6-15.6 23.44-36.08 23.44-56.56V160c0-44.16-35.84-79.999-80-79.999H480c-44.16 0-80 35.84-80 80v1119.986c0 20.48 7.84 40.96 23.44 56.56l480 479.994c31.28 31.28 81.84 31.28 113.12 0z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMasqueradeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMasqueradeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMasqueradeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1080.904 933.435c-20.695-1.774-27.721-10.574-28-32.278-1.46-115.479 88.73-223.93 203.653-237.948 84.034-10.296 168.66-15.861 257.773-23.966-3.86 16.87-5.67 39.166-13.947 58.748-80.348 190.122-235.479 251.166-419.479 235.444m-273.704 0c-184 15.722-339.13-45.322-419.478-235.444-8.279-19.582-10.087-41.878-13.948-58.748 89.113 8.105 173.704 13.67 257.774 23.966C746.47 677.226 836.66 785.679 835.2 901.157c-.278 21.704-7.304 30.504-28 32.278m647.165-808.418c-11.687 18.957-21.67 38.992-35.026 56.696-35.791 47.34-70.713 95.026-109.843 139.548-10.992 12.522-33.357 22.017-49.879 20.243-73.878-7.93-130.713 20.105-164.174 87.966-67.756-29.357-123.86-6.574-158.643 54.365-34.783-60.94-83.617-83.722-151.409-54.365-33.426-67.861-83.06-95.896-156.904-87.966-16.522 1.774-38.887-7.721-49.878-20.243-39.13-44.522-74.052-92.209-109.844-139.548-13.391-17.704-23.339-37.74-35.026-56.696-520.487 553.635-138.782 843.166-138.782 843.166 12.278 6.608 28.07 16.278 31.686 27.86 12.035 38.54 39.061 51.166 75.305 56.627 15.095 2.26 32.939 9.182 42.609 20.104 27.895 31.513 60.695 38.643 98.052 25.739 23.06-7.965 41.217-6.156 61.078 8.591 32.974 24.418 67.478 19.861 102.087.661 32.73-18.191 65.67-36.452 99.93-51.408 26.157-11.374 43.687-4.383 61.705 20.834 21.704 30.435 34.608 58.818 69.391 93.879 34.783-35.061 54.957-63.444 76.66-93.879 17.983-25.217 39.166-32.208 65.323-20.834 34.26 14.956 68.974 33.217 101.739 51.408 34.608 19.2 70.017 23.757 102.956-.66 19.896-14.748 39.965-16.557 62.992-8.592 27.79 9.6 42.504 8.07 77.287-6.296v626.957c0 38.26 31.304 69.565 69.565 69.565 38.26 0 69.565-31.304 69.565-69.565V999.696c0-1.287-.417-2.33-.035-3.653 3.618-11.582 18.713-21.252 30.991-27.86 0 0 380.974-289.53-139.478-843.166" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMasteryPathSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMasteryPathSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMasteryPathSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600.459 857.069L1897 560.534 1600.459 264l-113.113 113.11 103.434 103.431h-206.867c-312.38 0-395.415 119.11-468.61 224.221-65.676 94.312-122.472 175.745-411.334 175.745H24v159.986h479.97c288.86 0 345.657 81.433 411.333 175.745 73.195 105.11 156.23 224.22 468.61 224.22h206.867l-103.434 103.432L1600.46 1657 1897 1360.466l-296.541-296.535-113.113 113.11 103.434 103.431h-206.867c-228.865 0-274.383-65.274-337.339-155.666-38.237-54.955-81.274-116.63-162.31-164.306 81.036-47.676 124.073-109.35 162.31-164.306 62.956-90.392 108.474-155.666 337.339-155.666h206.867l-103.434 103.43 113.113 113.11z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMaterialsRequiredLightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMaterialsRequiredLightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMaterialsRequiredLightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1712.806 461.086s0 .114-.114.114l.286-.743c0 .286 0 .457-.172.572v.057zm-580.574 912.171c-6.971 21.143-19.485 41.714-37.657 61.943-18.229 20.171-41.886 38.114-72.286 53.829-30.514 15.714-72 25.142-116.686 28.4v78.114h-57.486v-78.057c-70.115-5.086-126.458-25.657-166.515-64.115-40-38.514-63.143-98.4-69.372-168.057h134.172c-.571 31.6 8.8 63.143 28.515 83.886 19.657 20.8 41.257 32.914 73.143 38.629V1210.17c0-1.2-7.314-2.628-12.743-4.171-5.371-1.543-11.2-2.971-17.543-4.286-23.543-6.343-46.686-13.657-69.543-22.228-22.857-8.572-43.315-19.829-61.429-34-18.057-14.286-32.514-31.829-43.314-52.857-10.743-21.029-16.172-47.486-16.172-78.972 0-32.057 6.114-60.514 18.572-85.028 12.457-24.572 28.743-45.143 49.086-61.943C715.202 850.057 738.63 836.97 765.26 828c26.628-9.029 57.143-14.686 82.686-16.514V740.57h57.486v70.915c25.542 3.143 54.857 9.314 79.943 18.4 25.028 9.085 46.857 21.714 65.943 37.828 19.028 16.115 34.457 36.172 46.514 60.115 12.115 23.942 18.915 53.428 20.858 85.142H983.432c-.572-25.371-8.057-46.742-23.315-64.342-15.257-17.658-35.6-26.572-54.743-26.572v167.257c6.458 1.886 14.915 3.772 22.858 5.657 7.885 1.829 16.114 4.115 24.971 6.515 46.972 12.628 83.086 28.228 108.515 46.914 25.429 18.629 44.057 37.829 56.114 58.057 12.172 20.172 19.143 40.343 21.543 60.514 2.4 20.229 3.315 38 3.315 53.829 0 13.829-3.6 31.314-10.572 52.4l.114.057zM883.946 277.143c139.543 0 259.086 115.2 307.658 279.828H576.23c48.572-164.628 168.172-279.828 307.716-279.828zm829.66 181.314V460c.286-10.457-42.343-17.029-105.315-17.029h-271.086a859.832 859.832 0 0 1 14.457 38h256.572c3.2 0 6.286.8 9.258.858l-76.515 59.542c-12.743 5.715-67.543 15.6-137.372 15.6h-119.258C1232.176 328.914 1072.404 160 883.946 160c-188.515 0-348.402 168.857-400.573 396.857H265.372c-3.143 0-6.286.229-9.257.229l76.4-59.257c9.2-4.172 40.343-10.343 83.2-13.486 4.4-14.572 9.372-28.914 14.686-42.972-57.886 2.972-108.915 11.886-122.458 22.4L163.486 576.114c-2.857 2.172-3.772 4.172-3.2 6.286-.115-.343-.286-.629-.286-.971 7.771 192.914 15.429 385.885 23.143 579.028l23.143 579.029c0 .628.228 1.314.571 1.943.115.285.343.457.572.628.285.457.628.857 1.028 1.2l1.086.8c.629.343 1.029.743 1.6 1.029l1.6.8 1.943.971c.629.229 1.314.572 2 .743l2.4.914 2.4.743c1.829.572 3.714 1.086 5.657 1.372l3.257.742 3.2.572 3.6.743 1.543.285 1.943.286 5.086.743c.571 0 1.314.171 1.943.286l1.828.171 3.372.343 2.514.286c.743 0 1.657 0 2.4.228l3.029.286 1.657.114c1.6.115 3.257.286 4.971.343l1.6.114h.114l6.458.4c.628 0 1.2 0 1.828.115.743 0 1.543 0 2.4.171.8.114 1.486 1.486 2.229 1.486 2.114.114 4.228 1.657 6.343 1.657h.114c.457 0 .914-1.429 1.429-1.429 1.6 0 3.2-.628 4.742-.628 1.429 0 2.915-.343 4.229-.343.571 0 .971-.171 1.429-.114.342 0 .571-.115.857 0 2.114 0 4.228 1.2 6.343 1.2 1.314 0 2.685 1.2 4 1.2h1140.804c2 0 4.057-1.2 5.943-1.315 1.829 0 3.429.572 5.086.572.171 0 .285.743.4.743h.285c1.772 0 3.6-1.372 5.372-1.429 1.657 0 3.314-.743 4.971-.8.743 0 1.486-.4 2.286-.4l1.086-.171 1.371-.115c1.543 0 3.143-.114 4.8-.285l4.515-.286c.628 0 1.2 0 1.714-.114h.971c.629-.115 1.315-.115 2-.172 1.772-.114 3.6-1.2 5.257-1.314 1.658-.114 3.6-1.371 5.258-1.371.171 0 .342.971.628.971 2.629-.114 5.257.171 7.886 0 .457 0 .914.114 1.371 0 6.115-.4 11.943-.914 17.772-1.486h1.086l5.657-.743 3.485-.4h.858l8.343-1.2c.342 0 .628 0 .914-.114l2.514-.343c1.657-.228 3.486-.571 5.143-.743l1.943-.342 4-.572 2.971-.571 2.629-.629 3.486-.571 2.057-.457 3.657-.858 2.4-.571c.286 0 .629 0 .857-.114 1.886-.457 3.772-.972 5.6-1.429l.743-.228 1.2-.4c.914-.286 1.771-.572 2.743-.743l3.257-1.029.571-.171h.172a86.745 86.745 0 0 0 5.371-2.057c.229 0 .4-.172.629-.286l.457-.114 2.629-1.143c.457-.286.8-.515 1.2-.629l.628-.343.457-.228 2-1.2 1.2-.915 144.515-112.285c.114 0 .286-.172.4-.286.457-.4.914-.8 1.314-1.2l.8-1.086s0-.114.115-.114c.114 0 0 0 0-.114.228-.4.457-.915.571-1.315.114-.4 0-.685 0-1.2L1713.72 458.114l-.114.343zM789.374 941.371c-8.229 6.515-14.743 14.858-19.486 24.572-4.743 9.714-7.2 21.257-7.2 34.457 0 20.743 6.572 36.914 20 48.229 13.372 11.371 33.657 20.457 65.6 27.314v-154c-12.742 0-21.2 1.6-31.371 4.743-10.172 3.143-19.257 8.057-27.543 14.685zm195.315 318.515c-15.543-12.286-40.686-23.486-78.972-33.543v181.428c12.743-1.2 22.743-3.942 35.2-8.114 12.4-4.114 23.2-9.886 33.086-17.428 9.772-7.543 17.772-16.858 24.172-27.886 6.4-11.086 9.543-24.057 9.543-39.2 0-24.572-7.543-42.972-23.086-55.2l.057-.057z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMaterialsRequiredSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMaterialsRequiredSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMaterialsRequiredSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M754.057 574.686c7.6-12.343 15.886-23.829 24.743-34.115h245.371c8.972 10.343 17.143 21.772 24.743 34.115H754.057zM901.486 407.77c-112.8.058-209.429 94.629-248.743 228h497.6c-39.429-133.371-136.057-227.942-248.857-228zm670.057 149.6c.171-.171.171-.457.343-.685-.057.228-.057.343-.172.514l-.114.114-.057.057zm38.057 942.458c0 .342-.229.685-.4 1.085v.115c0 .114-.114 0-.114.114a8.429 8.429 0 0 1-1.657 1.828l-.343.286-116.743 91.543-.972.629-1.542.914-.343.171-.4.172c-.172 0-.686.4-1.143.571-.514.343-1.314.572-2.057.914l-.457.172c-.172 0-.229.114-.4.171l-1.543.572c-.915.4-1.829.743-2.8 1.143h-.172l-.571.171-2.572.743c-.742.228-1.485.457-2.228.571l-.972.343-.571.172c-1.486.4-2.971.8-4.514 1.142-.229 0-.515.115-.686.172l-1.943.4-3.086.686-1.657.342-2.8.572-2.228.4-2.343.343-3.257.514c-.572 0-1.029.171-1.543.286-1.372.285-2.8.571-4.229.685l-2 .343c-.228 0-.457 0-.685.115l-6.686.914h-.8l-2.8.343-4.572.571h-.914c-4.628.572-9.428 1.029-14.343 1.429-.4 0-.743 0-1.085.114l-6.458.514h-.342c-1.429 0-2.8.172-4.286.229l-4.286.228c-.457 0-.971 0-1.486.115h-.8l-1.371.171-3.771.172c-1.315 0-2.515.114-3.829.171h-3.829c-1.314.114-2.685.114-4.057.171-1.371 0-2.8 0-4.285.115h-4.515l-4.857.114H429.83c-.4 0-.743 0-1.143-.114h-3.315l-3.942-.172h-1.315l-5.143-.228c-.514 0-1.085 0-1.828-.115-.743-.114-1.257 0-1.886-.114-.571 0-1.028 0-1.486-.114l-5.257-.343h-.114c-.4 0-.743 0-1.086-.114-1.428-.115-2.8-.172-4.114-.343l-1.314-.057c-.857 0-1.715-.172-2.457-.229-.743 0-1.429-.114-2.058-.171l-2-.286-2.8-.343-1.428-.228c-.572 0-1.143-.172-1.714-.229l-4.058-.571-1.714-.229c-.514 0-.686-.171-1.086-.229l-2.971-.514-2.629-.457a35.49 35.49 0 0 1-2.628-.571c-.743-.172-1.486-.343-2.229-.572l-2.4-.743-1.885-.514-1.943-.686c-.515-.171-1.086-.343-1.6-.571l-1.657-.8-1.143-.514-1.257-.915-.915-.571c-.285-.343-.571-.686-.8-1.086a1.796 1.796 0 0 1-.571-.571 2.874 2.874 0 0 1-.457-1.543c-6.172-157.257-12.457-314.514-18.686-471.829l-18.571-471.771c0 .343.171.571.228.857-.571-1.657.172-3.371 2.514-5.143l116.8-91.486c10.915-8.571 52.058-15.885 99.029-18.228a587.813 587.813 0 0 0-11.943 35.028c-34.628 2.515-59.771 7.658-67.2 10.972L393.83 635.6c2.457.114 5.028.114 7.542.114h176.343c42.115-186.971 171.257-323.543 323.772-323.543 152.514 0 281.657 136.572 323.828 323.543h96.457c56.4 0 100.743-7.943 110.972-12.685l61.771-48.4H1279.6c-3.543-11.658-7.543-22.972-11.714-34.115h219.143c50.914 0 85.485 6.286 85.085 14.8l.115-.228 37.485 943.828c0 .343-.114.572-.171.972l.057-.057zM1664.457 160H255.543C202.8 160 160 202.743 160 255.543v1408.914c0 52.8 42.743 95.543 95.543 95.543h1408.914c52.8 0 95.543-42.743 95.543-95.543V255.543c0-52.743-42.743-95.543-95.543-95.543zM901.543 407.771h-.114.114zm92.286 877.315h-.058c-5.142 8.971-11.771 16.571-19.6 22.743-7.828 6.171-17.028 10.971-27.028 14.342-10.057 3.372-19.6 5.6-28.857 6.515v-147.943c30.343 8.286 51.771 17.314 64.343 27.428 12.571 10.058 18.857 24.972 18.857 45.029 0 12.343-2.572 22.971-7.657 31.886zm-120.972-226.8c-24.628-5.6-42.343-13.086-53.143-22.286-10.8-9.257-16.114-22.4-16.114-39.314 0-10.8 1.886-20.115 5.771-28.115 3.829-7.942 9.086-14.628 15.772-20 6.686-5.371 14.114-9.371 22.4-11.942 8.286-2.572 16.628-3.886 25.314-3.886v125.543zm218.057 106.457l-.171-.114c-9.714-16.458-24.857-32.286-45.429-47.372-20.514-15.086-49.828-27.886-87.771-38.057-7.257-2.114-14-3.943-20.343-5.429l-18.857-4.628V932.857c17.486 0 32.457 7.257 44.743 21.543 12.343 14.229 18.685 31.886 19.2 52.343h109.371c-1.543-26.686-7.257-49.772-16.971-69.257-9.657-19.486-22.343-35.829-37.715-48.915-15.371-13.028-33.257-23.314-53.485-30.8-20.286-7.485-42-12.285-65.029-14.914v-59.371h-45.486v59.371c-23.085 1.486-45.428 6-66.971 13.429-21.543 7.371-40.571 18-56.971 31.6-16.458 13.6-29.658 30.457-39.772 50.4-10.057 19.885-14.914 43.2-14.914 69.371 0 25.657 4.343 47.029 13.086 64.286 8.742 17.2 20.457 31.543 35.028 43.086 14.686 11.542 31.2 20.8 49.657 27.771 18.457 6.914 37.2 12.971 56.229 18.057 8.4 1.657 16.628 4 24.628 6.914v160.858c-23.485-4.572-43.314-15.372-59.2-32.343-15.885-16.972-23.6-40-23.085-69.257H682.057c5.086 60.571 23.886 106.571 56.172 137.828 32.285 31.314 77.2 49.086 134.742 53.2v65.486h45.543v-65.486c38.515-2.571 70.057-10.343 94.686-23.143 24.629-12.8 44.229-27.428 58.857-43.885 14.572-16.458 24.743-33.258 30.4-50.343 5.657-17.143 8.514-31.543 8.514-42.857 0-12.858-.914-27.429-2.685-43.886-1.772-16.4-7.543-32.857-17.372-49.2z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMatureLightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMatureLightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMatureLightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1429.843 160L1760 1413.782l-341.087 92.987-223.5-848.696 71.762 890.015-284.33 77.466-375.032-807.236 223.43 848.625L490.09 1760 160 506.288l530.708-144.724 295.736 704.881-87.24-761.721L1429.843 160" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMatureSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMatureSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMatureSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1610 160H310c-150 0-150 151.493-150 151.493v1300S160 1760 310 1760h1300c150 0 150-148.507 150-148.507v-1300S1760 160 1610 160zm-244.85 1288.657l-196.568-725 63.209 760.298-250.15 66.194-329.925-689.627 196.568 725L548.134 1665 257.761 594.03l466.866-123.657 260.224 602.164-76.791-650.746 466.865-123.657 290.448 1071.045-300.074 79.478h-.15z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMediaSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMediaSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMediaSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1641 560h-160V400h160v160zm0 960h-160v-160h160v160zm-400-960h-160V400h160v160zm-480 640V720l480 240-480 240zm480 320h-160v-160h160v160zm-400 0H681v-160h160v160zM441 560H281V400h160v160zm0 960H281v-160h160v160zM681 400h160v160H681V400zm960-160H281c-88.4 0-160 71.6-160 160v1120c0 88.32 71.6 160 160 160h1360c88.32 0 160-71.68 160-160V400c0-88.4-71.68-160-160-160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMessageSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMessageSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMessageSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1759.76 598.772l-757.6 470.196c-12.88 8-27.52 12.081-42.16 12.081-14.64 0-29.28-4.08-42.16-12l-757.6-470.197c0 .72-.24 1.44-.24 2.08v720.056C160 1409.154 231.76 1481 320 1481h1280c88.24 0 160-71.846 160-160.012V600.932c0-.72-.24-1.44-.24-2.16zM960 906.876L242.8 461.802C265.76 449 291.84 441 320 441h1280c28.16 0 54.16 8 77.2 20.802L960 906.876z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowDownSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowDownSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowDownSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowLeftSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowLeftSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowLeftSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M694.018 926.244c-27.296 18.796-27.3 49.268 0 68.067l509.835 351.074c27.297 18.796 49.425 7.18 49.425-25.96V601.13c0-33.133-22.125-44.758-49.425-25.96L694.018 926.245z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowRightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowRightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowRightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMiniArrowUpSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMiniArrowUpSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMiniArrowUpSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M994.034 694.296c-18.796-27.297-49.269-27.3-68.067 0L574.893 1204.13c-18.797 27.296-7.18 49.424 25.959 49.424h718.297c33.133 0 44.757-22.124 25.959-49.424L994.034 694.296z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMinimizeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMinimizeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMinimizeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797"/>\n        <path d="M1358.5 1039.7h-797V880.3h797z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconModuleSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconModuleSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconModuleSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1709.682 571.07l-717.3-318.738a79.798 79.798 0 0 0-64.796 0L210.366 571.07c-28.772 12.75-47.342 41.277-47.342 72.752 0 31.555 18.57 60.082 47.342 72.831l717.22 318.737c10.361 4.542 21.44 6.853 32.438 6.853 10.999 0 22.077-2.31 32.358-6.853l717.3-318.737c28.772-12.75 47.342-41.276 47.342-72.831 0-31.475-18.57-60.002-47.342-72.752"/>\n        <path d="M1757 831.756L958.565 1194.48 163 863.072v172.516l766.316 319.375c9.803 4.223 20.243 6.056 30.684 6.056 11.238 0 22.475-2.311 32.916-6.933L1757 1006.822V831.756z"/>\n        <path d="M1757 1150.493l-798.435 362.723L163 1181.809v172.516L929.316 1673.7c9.803 4.223 20.243 6.056 30.684 6.056 11.238 0 22.475-2.311 32.916-6.933L1757 1325.56v-175.066z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoreSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoreSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoreSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M982.111 517.222c-97.82 0-176.889-79.346-176.889-177.11 0-97.855 79.07-177.112 176.89-177.112 97.73 0 176.888 79.257 176.888 177.111 0 97.765-79.158 177.111-176.889 177.111M982.111 1137.111c-97.82 0-176.889-79.346-176.889-177.111 0-97.854 79.07-177.111 176.89-177.111 97.73 0 176.888 79.257 176.888 177.111 0 97.765-79.158 177.111-176.889 177.111M982.111 1757c-97.82 0-176.889-79.346-176.889-177.111 0-97.854 79.07-177.111 176.89-177.111 97.73 0 176.888 79.257 176.888 177.11 0 97.766-79.158 177.112-176.889 177.112"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveDownBottomSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveDownBottomSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveDownBottomSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M880 160v1006.88L696.56 983.44l-113.12 113.12L960 1473.12l376.56-376.56-113.12-113.12L1040 1166.88V160H880zM320 1760h1280v-160H320v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveDownSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveDownSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveDownSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1239.839 1185.847L1040 1370.962V160H880v1210.962l-199.839-185.115L560 1300l400 380 400-380z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveLeftSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveLeftSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveLeftSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M941.675 696.03l-90.85-113.56L548.4 960.5l302.425 378.03 90.85-113.56-147.325-184.158H1603V880.188H794.35L941.675 696.03zM318 1603h128.5V318H318v1285z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveRightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveRightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveRightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M979.325 696.03l90.85-113.56L1372.6 960.5l-302.425 378.03-90.85-113.56 147.326-184.158H318V880.188h808.65L979.326 696.03zM1603 1603h-128.5V318H1603v1285z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveUpSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveUpSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveUpSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1360 616.56L960 240 560 616.56l120.161 113.12L880 546.24V1760h160V546.24l199.839 183.44z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMoveUpTopSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMoveUpTopSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMoveUpTopSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 1760V753.12l183.44 183.44 113.12-113.12L960 446.88 583.44 823.44l113.12 113.12L880 753.12V1760h160zm560-1600H320v160h1280V160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMsExcelSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMsExcelSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMsExcelSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M898 894v299.91h181.657v-74.978H970.663V894zM1206.828 968.977h127.16V894h-127.16c-50.064 0-90.828 42.062-90.828 93.722 0 51.659 40.764 93.721 90.828 93.721h36.332c10.027 0 18.165 8.435 18.165 18.744 0 10.31-8.138 18.745-18.165 18.745H1116v74.977h127.16c50.064 0 90.828-42.062 90.828-93.722 0-51.659-40.764-93.721-90.828-93.721h-36.332c-10.027 0-18.165-8.435-18.165-18.744 0-10.31 8.138-18.745 18.165-18.745M687.761 1193.91l44.796-77.078 44.833 77.077h84.761l-87.231-149.954L862.15 894h-84.76l-44.834 77.077L687.761 894H603l87.195 149.955L603 1193.909zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>\n        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMsPptSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMsPptSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMsPptSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1133 879v74.977h83.578v224.932h83.577V953.977h83.578V879zM631.578 953.977h41.788c23.026 0 41.79 16.795 41.79 37.489 0 20.694-18.764 37.489-41.79 37.489h-41.788v-74.978zm0 149.955h41.788c69.119 0 125.367-50.46 125.367-112.466C798.733 929.46 742.485 879 673.366 879H548v299.91h83.578v-74.978zM1007.155 991.466c0 20.694-18.763 37.489-41.789 37.489h-41.788v-74.978h41.788c23.026 0 41.79 16.795 41.79 37.489zM840 879v299.91h83.578v-74.978h41.788c69.119 0 125.367-50.46 125.367-112.466 0-62.006-56.248-112.466-125.367-112.466H840zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>\n        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMsWordSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMsWordSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMsWordSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1271.165 964.73h125.252v-82.273h-125.252c-68.996 0-125.165 55.427-125.165 123.302v82.058c0 67.874 56.169 123.258 125.165 123.258h125.252v-82.272h-125.252c-22.994 0-41.533-18.33-41.533-40.986v-82.058c0-22.64 18.54-41.03 41.533-41.03zm-458.792 82.036c0-90.494-74.839-164.309-166.828-164.309H562v328.618h83.545c91.989 0 166.828-73.815 166.828-164.309zM646 965.457c45.878 0 83.415 36.84 83.415 82.058 0 45.235-37.537 82.059-83.415 82.059V965.457zm208 40.088v82.058c0 67.875 56.212 123.088 125.208 123.088s125.209-55.213 125.209-123.088v-82.058c0-67.875-56.213-123.088-125.209-123.088-68.996 0-125.208 55.213-125.208 123.088zm167.154.941v82.059c0 22.656-18.584 41.029-41.577 41.029-22.994 0-41.577-18.373-41.577-41.03v-82.058c0-22.64 18.583-41.029 41.577-41.029 22.993 0 41.577 18.39 41.577 41.03zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80z"/>\n        <path d="M400 1600H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconMutedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconMutedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconMutedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1578.947 264.259l-1354.631 1354.9 112.673 112.696 395.791-395.95 288.378 316.25c22.79 22.794 57.054 29.568 86.855 17.215 29.802-12.274 49.166-41.364 49.166-73.563V911.503l534.442-534.548-112.674-112.696zM1157.179 460.672V320.559c0-32.199-19.364-61.29-49.166-73.563-29.801-12.354-64.066-5.58-86.855 17.295L679.073 639.359H440.021c-43.827 0-79.685 35.865-79.685 79.7v478.2c0 16.896 6.535 31.88 15.619 44.791l781.224-781.378z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNextUnreadSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNextUnreadSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNextUnreadSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M639.5 801L160 1040.75V1760h959v-719.25L639.5 801zm0 135L999 1115.816v225.368L639.5 1521 280 1341.184v-225.368L639.5 936zM400 1162v120l240 120 240-120v-120H400zM1272.552 322.696l182.752 182.752H771v159.4h684.304L1272.552 847.6l112.696 112.696 375.227-375.148L1385.248 210z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNotGradedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNotGradedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNotGradedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M615.871 423.458C715.205 359.523 833.351 322.4 960 322.4c351.557 0 637.6 286.043 637.6 637.6 0 126.649-37.123 244.795-101.058 344.129l-1.986-1.985-329.85-329.85 195.125-273.216-162.11-115.724-175.81 246.143-406.04-406.039zM493.16 526.172C387.256 640.054 322.4 792.6 322.4 960c0 351.557 286.043 637.6 637.6 637.6 167.4 0 319.946-64.856 433.828-170.76l-11.984-11.984-311.057-311.057-177.759 248.899-322.307-322.227 140.91-140.91 155.973 155.973 60.38-84.536L493.16 526.172zM960 1757c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNoteDarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoteDarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNoteDarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1438.2 720.9H481.8V561.5h956.4v159.4zm0 318.8H481.8V880.3h956.4v159.4zm-239.1 318.8H481.8v-159.4h717.3v159.4zM1597.6 163H322.4C234.49 163 163 234.49 163 322.4v1275.2c0 87.91 71.49 159.4 159.4 159.4h1275.2c87.91 0 159.4-71.49 159.4-159.4V322.4c0-87.91-71.49-159.4-159.4-159.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconNoteLightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoteLightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconNoteLightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1691.835 1691.76H228.909V228.903h1463.2l-.274 1462.857zm.274-1645.714H228.91c-100.87 0-182.9 82.011-182.9 182.857V1691.76c0 100.846 82.03 182.857 182.9 182.857h1463.2c100.87 0 182.9-82.011 182.9-182.857V228.903c0-100.846-82.03-182.857-182.9-182.857z"/>\n        <path d="M1509.2 503.143H411.8V686h1097.4zM1509.2 868.857H411.8v182.857h1097.4zM1234.85 1234.571H411.8v182.858h823.05z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOffSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOffSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOffSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1226.188 392.261v196.86c158.615 92.009 265.687 263.275 265.687 459.426 0 293.03-238.322 531.333-531.375 531.333s-531.375-238.303-531.375-531.333c0-196.15 107.072-367.417 265.688-459.427V392.261C435.5 497.643 252 751.886 252 1048.547c0 390.618 317.85 708.444 708.5 708.444s708.5-317.826 708.5-708.444c0-296.661-183.502-550.904-442.813-656.286"/>\n        <path d="M1049.063 871.444H871.937V163h177.125z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOutcomesSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOutcomesSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOutcomesSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M783.95 1057.053c0 44.077 35.757 79.994 79.994 79.994 44.236 0 79.993-35.917 79.993-79.994 0-44.237-35.757-79.994-79.993-79.994-44.237 0-79.994 35.757-79.994 79.994zM1777 257.112L1663.889 144l-336.534 336.535-223.422-223.423V817.07h559.956l-223.423-223.424L1777 257.112zm-1153.038 799.94c0-132.31 107.672-239.981 239.982-239.981V657.082c-220.543 0-399.97 179.427-399.97 399.97 0 220.545 179.427 399.972 399.97 399.972 220.542 0 399.968-179.427 399.968-399.971h-159.987c0 132.31-107.672 239.982-239.981 239.982-132.31 0-239.982-107.672-239.982-239.982zm239.982 559.96c-308.776 0-559.957-251.182-559.957-559.96 0-308.776 251.18-559.958 559.957-559.958V337.106C467.014 337.106 144 660.042 144 1057.053 144 1454.063 467.015 1777 863.944 1777c396.928 0 719.943-322.936 719.943-719.947H1423.9c0 308.777-251.18 559.959-559.956 559.959z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOutdent2Solid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOutdent2Solid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOutdent2Solid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M239.4 402.333H1674V243H239.4zM717.6 721H1674V561.667H717.6zM717.6 1039.667H1674V880.333H717.6zM717.6 1358.333H1674V1199H717.6zM239.4 1677H1674v-159.333H239.4zM558.2 482L80 960l478.2 478z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconOutdentSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconOutdentSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconOutdentSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M239.4 402.333H1674V243H239.4zM717.6 721H1674V561.667H717.6zM717.6 1039.667H1674V880.333H717.6zM717.6 1358.333H1674V1199H717.6zM239.4 1677H1674v-159.333H239.4zM558.2 482L80 960l478.2 478z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPaintSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPaintSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPaintSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1690.164 250.043c-93.116-93.39-243.911-93.39-337.026 0L657.634 946.93c88.348-5.892 178.524 23.646 246.056 91.24 67.453 67.675 96.929 158.12 90.97 246.654l695.504-697.046C1734.814 542.954 1760 482.285 1760 418.91a239.002 239.002 0 0 0-69.836-168.867zM377.613 1150.789c-221.109 221.574 30.27 335.346-217.613 583.83 0 0 410.2 52.309 631.229-169.265 114.328-114.49 114.328-300.076 0-414.565-114.17-114.41-299.447-114.41-413.616 0z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPaperclipSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPaperclipSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPaperclipSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M846.615 1757C626.666 1757 467 1581.432 467 1339.524v-645.19C467 391.396 679.13 163 960.5 163S1454 391.397 1454 694.333v531.334h-151.846V694.333c0-219.896-143.723-379.523-341.654-379.523-197.931 0-341.654 159.627-341.654 379.523v645.19c0 132.303 70.457 265.667 227.77 265.667 157.312 0 227.769-133.364 227.769-265.666V770.238c0-45.695-11.085-151.81-113.885-151.81-102.8 0-113.885 106.115-113.885 151.81v531.333H694.77V770.238c0-181.64 106.824-303.619 265.731-303.619 158.907 0 265.73 121.979 265.73 303.62v569.285c0 241.908-159.665 417.476-379.615 417.476" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPartialSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPartialSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPartialSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 322.4c-351.557 0-637.6 286.043-637.6 637.6s286.043 637.6 637.6 637.6 637.6-286.043 637.6-637.6S1311.557 322.4 960 322.4m0 1434.6c-439.466 0-797-357.534-797-797s357.534-797 797-797 797 357.534 797 797-357.534 797-797 797"/>\n        <path d="M1358.5 1039.7h-797V880.3h797z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPdfSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPdfSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPdfSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M670 1038.92h36.341c20.025 0 36.342-18.126 36.342-40.46S726.366 958 706.34 958H670v80.92zm-.333 161.08H597V877h109c60.095 0 109 54.345 109 121.125s-48.905 121.125-109 121.125h-36.333V1200zM1324 957.75V877h-145.333c-40.076 0-72.667 36.257-72.667 80.75V1200h72.667v-121.125h109v-80.75h-109V957.75H1324zM924 958v161.84c40.085 0 72.683-36.293 72.683-80.92 0-44.587-32.598-80.92-72.683-80.92zm-.333-81c80.151 0 145.333 72.433 145.333 161.5S1003.818 1200 923.667 1200H851V877h72.667zM1520 1680H400v-80H240v80c0 88.24 71.76 160 160 160h1120c88.24 0 160-71.76 160-160v-80h-160v80zm-1120-80H240V240c0-88.16 71.76-160 160-160h913.12L1680 446.88V1600h-160V560h-320V240H400v1360z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPeerGradedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPeerGradedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPeerGradedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1840 231.986L1727.959 120l-340.165 339.999-181.69-181.602-112.042 111.986 293.732 293.589zM593.222 736c88.292 0 164.465 41.1 211.208 103.337-77.904 63.412-124.647 150.309-124.647 250.123 0 34.055 5.194 64.586 15.58 95.118-32.892 12.917-65.785 22.311-102.14 22.311-143.691 0-259.682-105.686-259.682-234.857 0-129.172 115.991-234.858 259.681-234.858V736zm432.561 159.703c130.28 0 235.445 105.95 235.445 235.445 0 129.494-105.165 235.444-235.445 235.444-130.28 0-235.444-105.95-235.444-235.444 0-129.495 105.165-235.445 235.444-235.445zm-747.79 258.728c67.648 80.235 160.468 129.005 265.875 132.151-42.478 59.783-69.222 132.151-69.222 210.813v103.833H160v-261.156c0-81.808 48.77-152.603 117.992-187.214v1.573zm1022.597 157.323c69.222 34.61 117.992 105.406 117.992 187.214v261.156H631.968v-261.156c0-81.808 48.77-152.603 117.992-187.214 70.796 83.38 166.763 132.151 275.315 132.151 108.553 0 204.52-50.343 275.315-132.151z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPeerReviewSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPeerReviewSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPeerReviewSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1642.607 277.398C1568.012 202.399 1467.952 160 1360.025 160c-220.586 0-399.975 179.463-399.975 399.992h133.325c0-147.064 119.593-266.661 266.65-266.661 71.862 0 137.658 29.399 187.388 79.265l-120.726 120.73H1760V160l-117.393 117.398zm-282.582 549.288c-71.796 0-137.591-29.333-187.388-79.265l120.726-120.73H960.05v333.326l117.593-117.598c74.528 74.265 176.322 117.598 282.382 117.598 220.586 0 399.975-179.397 399.975-399.992h-133.325c0 147.064-119.593 266.661-266.65 266.661zM447.82 921c71.906 0 133.942 33.472 172.01 84.159-63.447 51.643-101.514 122.412-101.514 203.702 0 27.734 4.23 52.6 12.689 77.464-26.789 10.52-53.577 18.171-83.185 18.171-117.023 0-211.487-86.071-211.487-191.27 0-105.198 94.464-191.27 211.487-191.27V921zm352.281 130.064c106.1 0 191.748 86.286 191.748 191.748 0 105.461-85.647 191.748-191.748 191.748-106.1 0-191.748-86.287-191.748-191.748 0-105.462 85.648-191.748 191.748-191.748zm-609.007 210.71c55.094 65.344 130.687 105.062 216.531 107.625-34.594 48.687-56.375 107.625-56.375 171.687v84.563H95V1412.96c0-66.625 39.719-124.281 96.094-152.468v1.28zm832.812 128.125c56.375 28.187 96.094 85.844 96.094 152.469v212.687H479.375v-212.687c0-66.625 39.719-124.282 96.094-152.47 57.656 67.907 135.812 107.626 224.218 107.626 88.407 0 166.563-41 224.22-107.625z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPinSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPinSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPinSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M191.093 847.177c-35.662 49.246-24.649 118.078 24.598 153.739s118.078 24.648 153.74-24.598l76.869-76.87 307.478 307.479-153.739 153.739c-84.557 84.556-84.557 222.922 0 307.478l461.218-461.217 461.217 461.217 221.385 86.094-67.645-239.833-461.218-461.218 461.218-461.217c-84.557-84.557-222.922-84.557-307.479 0l-153.739 153.739L907.518 438.23l76.87-76.87c42.453-42.453 42.453-111.284 0-153.738-42.455-42.454-111.286-42.454-153.74 0L215.69 822.579a108.71 108.71 0 0 0-13.837 13.836 108.71 108.71 0 0 0-9.224 9.224l-1.537 1.538z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPinterestSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPinterestSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPinterestSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600.02 0H319.98C143.25.033 0 143.31 0 320.04v1279.92A319.98 319.98 0 0 0 319.98 1920h1280.04c176.73-.033 319.98-143.31 319.98-320.04V320.04A319.98 319.98 0 0 0 1600.02 0zM1053 1282.8c-87.18-6.84-123.78-50.04-192.12-91.56-37.62 197.22-83.58 386.28-219.6 485.04-42-298.08 61.62-522 109.8-759.6-82.2-138.18 9.84-416.4 183-347.76 213 84.3-184.5 513.78 82.38 567.42 278.7 55.92 392.4-483.6 219.72-658.98-249.6-253.32-726.72-5.76-668.1 357 14.28 88.62 105.9 115.5 36.6 237.9-159.78-35.4-207.48-161.4-201.36-329.4 9.96-275.1 247.2-467.64 485.1-494.22 300.9-33.6 583.32 110.4 622.32 393.6 43.92 319.44-135.84 665.4-457.62 640.56h-.12z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPlusSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPlusSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPlusSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPostToSisSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPostToSisSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPostToSisSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M961.12 1106.68l331.04 331.44-99.44 99.6-161.28-161.48V1840H890.8v-463.76l-161.28 161.48-99.44-99.6 331.04-331.44zM1540.84 768c-10.12 22.4-25.2 41.76-45.2 58-20 16.28-44.8 28.96-74.4 38-29.6 9.08-63.84 13.6-102.8 13.6-31.48 0-62-3.84-91.6-11.6-29.6-7.72-55.72-19.84-78.4-36.4-22.64-16.52-40.64-37.6-54-63.2-13.32-25.6-19.72-56-19.2-91.2h121.6c0 19.2 3.48 35.48 10.4 48.8 6.96 13.36 16.16 24.16 27.6 32.4 11.48 8.28 24.96 14.4 40.4 18.4 15.48 4 31.48 6 48 6 11.2 0 23.2-.92 36-2.8 12.8-1.84 24.8-5.44 36-10.8 11.2-5.32 20.56-12.64 28-22 7.48-9.32 11.2-21.2 11.2-35.6 0-15.44-4.92-28-14.8-37.6-9.84-9.6-22.8-17.6-38.8-24-16-6.4-34.12-12-54.4-16.8-20.24-4.8-40.8-10.12-61.6-16-21.32-5.32-42.12-11.84-62.4-19.6-20.24-7.72-38.4-17.72-54.4-30-16-12.24-28.92-27.6-38.8-46-9.84-18.4-14.8-40.64-14.8-66.8 0-29.32 6.28-54.8 18.8-76.4 12.56-21.6 28.96-39.6 49.2-54 20.28-14.4 43.2-25.04 68.8-32 25.6-6.92 51.2-10.4 76.8-10.4 29.88 0 58.56 3.36 86 10 27.48 6.68 51.88 17.48 73.2 32.4 21.36 14.96 38.28 34 50.8 57.2 12.56 23.2 18.8 51.36 18.8 84.4h-121.6c-1.04-17.04-4.64-31.2-10.8-42.4-6.12-11.2-14.24-20-24.4-26.4-10.12-6.4-21.72-10.92-34.8-13.6-13.04-2.64-27.32-4-42.8-4-10.12 0-20.24 1.08-30.4 3.2-10.12 2.16-19.32 5.88-27.6 11.2-8.24 5.36-15.04 12-20.4 20-5.32 8-8 18.16-8 30.4 0 11.2 2.16 20.28 6.4 27.2 4.28 6.96 12.68 13.36 25.2 19.2 12.56 5.88 29.88 11.76 52 17.6 22.16 5.88 51.08 13.36 86.8 22.4 10.68 2.16 25.48 6 44.4 11.6 18.96 5.6 37.76 14.56 56.4 26.8 18.68 12.28 34.8 28.68 48.4 49.2 13.6 20.56 20.4 46.8 20.4 78.8 0 26.16-5.04 50.4-15.2 72.8zm-645.6 96.8h125.6V293.6h-125.6v571.2zm-69.6-96.8c-10.12 22.4-25.2 41.76-45.2 58-20 16.28-44.8 28.96-74.4 38-29.6 9.08-63.84 13.6-102.8 13.6-31.44 0-62-3.84-91.6-11.6-29.6-7.72-55.72-19.84-78.4-36.4-22.64-16.52-40.64-37.6-54-63.2-13.32-25.6-19.72-56-19.2-91.2h121.6c0 19.2 3.48 35.48 10.4 48.8 6.96 13.36 16.16 24.16 27.6 32.4 11.48 8.28 24.92 14.4 40.4 18.4 15.48 4 31.48 6 48 6 11.2 0 23.2-.92 36-2.8 12.8-1.84 24.8-5.44 36-10.8 11.2-5.32 20.56-12.64 28-22 7.48-9.32 11.2-21.2 11.2-35.6 0-15.44-4.92-28-14.8-37.6-9.88-9.6-22.8-17.6-38.8-24-16-6.4-34.12-12-54.4-16.8-20.24-4.8-40.8-10.12-61.6-16-21.32-5.32-42.12-11.84-62.4-19.6-20.28-7.72-38.4-17.72-54.4-30-16-12.24-28.92-27.6-38.8-46-9.84-18.4-14.8-40.64-14.8-66.8 0-29.32 6.28-54.8 18.8-76.4 12.56-21.6 28.92-39.6 49.2-54 20.28-14.4 43.2-25.04 68.8-32 25.6-6.92 51.2-10.4 76.8-10.4 29.88 0 58.56 3.36 86 10 27.48 6.68 51.88 17.48 73.2 32.4 21.36 14.96 38.28 34 50.8 57.2 12.56 23.2 18.8 51.36 18.8 84.4h-121.6c-1.04-17.04-4.64-31.2-10.8-42.4-6.12-11.2-14.24-20-24.4-26.4-10.12-6.4-21.72-10.92-34.8-13.6-13.08-2.64-27.32-4-42.8-4-10.12 0-20.24 1.08-30.4 3.2-10.12 2.16-19.32 5.88-27.6 11.2-8.24 5.36-15.04 12-20.4 20-5.32 8-8 18.16-8 30.4 0 11.2 2.16 20.28 6.4 27.2 4.28 6.96 12.68 13.36 25.2 19.2 12.56 5.88 29.88 11.76 52 17.6 22.16 5.88 51.08 13.36 86.8 22.4 10.68 2.16 25.48 6 44.4 11.6 18.96 5.6 37.76 14.56 56.4 26.8 18.68 12.28 34.8 28.68 48.4 49.2 13.6 20.56 20.4 46.8 20.4 78.8 0 26.16-5.04 50.4-15.2 72.8zm802.08-688H292.32C219.32 80 160 139.28 160 212.36v724.2c0 73.44 59.24 132.36 132.32 132.36h1335.4c72.96 0 132.28-59.28 132.28-132.36v-724.2C1760 138.92 1700.8 80 1627.72 80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPrerequisiteSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPrerequisiteSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPrerequisiteSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1652.322 1040.534L258.812 1040c-55.317 0-98.812 42.749-98.812 96.078v528.271c0 53.276 43.049 95.651 98.421 95.651H1661.58c55.372 0 98.421-42.375 98.421-95.65v-528.272c0-53.276-52.305-95.544-107.622-95.544h-.056zM808.96 1358.48h76.16c0-10.453 1.027-21 3.08-31.64s5.507-20.347 10.36-29.12 11.293-15.867 19.32-21.28c8.027-5.413 17.827-8.12 29.4-8.12 17.173 0 31.267 5.32 42.28 15.96 11.013 10.64 16.52 25.48 16.52 44.52 0 11.947-2.707 22.587-8.12 31.92-5.413 9.333-12.133 17.733-20.16 25.2-8.027 7.467-16.893 14.28-26.6 20.44-9.707 6.16-18.853 12.227-27.44 18.2-16.8 11.573-32.76 22.96-47.88 34.16-15.12 11.2-28.28 23.427-39.48 36.68-11.2 13.253-20.067 28.28-26.6 45.08-6.533 16.8-9.8 36.587-9.8 59.36h287.84v-68.32H902.48c9.707-13.44 20.907-25.2 33.6-35.28a520.677 520.677 0 0 1 39.2-28.28 2976.634 2976.634 0 0 0 40.04-26.6c13.253-8.96 25.107-18.947 35.56-29.96 10.453-11.013 18.853-23.613 25.2-37.8 6.347-14.187 9.52-31.173 9.52-50.96 0-19.04-3.64-36.213-10.92-51.52-7.28-15.307-17.08-28.187-29.4-38.64s-26.6-18.48-42.84-24.08c-16.24-5.6-33.32-8.4-51.24-8.4-23.52 0-44.333 4.013-62.44 12.04s-33.133 19.227-45.08 33.6c-11.947 14.373-20.907 31.173-26.88 50.4-5.973 19.227-8.587 40.04-7.84 62.44zM1104 160v72h-72v-72h72zm-576 72h144v-72H528v72zm288 0h72v-72h-72v72zm576-72h-144v72h144v-72zm288 320v80h80v-80h-80zm-64-248.655s46.073.819 46.073 36.819V304h97.925v-72.655S1761.78 160 1664.665 160h-48.611v71.345H1616zM672 880v-72H528v72h144zm720-72h-144v72h144v-72zM160 559.623h80.284V480H160v79.623zM304 808h-35.06c-35.713 0-34.772-33.756-34.772-33.756V736H160v73.589S159.427 880 232.205 880H304v-72zm1358.056-72v38.233s-5.778 35.732-46.056 35.732V880h40.602c105.178 0 103.396-70.392 103.396-70.392V736H1662.056zM1032 808v72h72v-72h-72zm-216 0v72h72v-72h-72zM257.944 304v-35.877c0-33.628 46.056-36.818 46.056-36.818V160h-48.702C201.683 160 160 188.39 160 229.136V304h97.944zm774.269 416.498V317.109h-70.055c-2.496 20.496-7.536 13.833-15.168 24.68-7.68 10.849-17.04 20.16-28.08 26.88a115.607 115.607 0 0 1-37.632 14.113c-13.92 2.592-27.936 3.984-43.296 3.6l53.147 62.16h71.029v271.956h70.055z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPrinterSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPrinterSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPrinterSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 1120c0-44.16-35.84-80-80-80s-80 35.84-80 80c0 44.24 35.84 80 80 80s80-35.76 80-80zm-880 640h800v-320H560v320zm1200-880v720h-240v320H400v-320H160V880c0-132.32 107.68-240 240-240h160v160h800V640h160c132.32 0 240 107.68 240 240zM560 480H400V0h1120v480h-160V160H560v320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconPublishSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconPublishSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconPublishSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1351.26 665l157.885 157.861L871.915 1460 458 1046.145l157.884-157.862 256.03 255.994L1351.262 665zm260.58 86.05c.4-7.359.56-14.478.56-21.677C1612.4 471.65 1402.08 262 1143.52 262 956 262 788.88 374.304 715.04 539.88c-11.84-1.2-23.68-1.76-35.52-1.76-199.36 0-363.04 155.578-375.2 351.47C189.36 967.1 118 1097.56 118 1237.78c0 209.97 155.68 390.584 362.16 420.26l802.48.96c284.16 0 515.36-230.367 515.36-513.606 0-153.898-68.56-297.238-186.16-394.344z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuestionSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuestionSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuestionSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1260.48 770.64c0 52.24-12.8 96.24-38.48 131.92v-.08c-15.04 21.76-44 49.44-86.64 83.2l-42.16 33.12c-22.96 18.16-25.68 22.64-33.28 46.8-4.64 15.2.4 69.84 0 105.52H860c2.4-71.36 14.72-127.12 24.88-153.04 10.32-25.92 49.28-58.56 92-92.32L1020.4 890c14.16-10.8 25.6-23.44 34.24-36.24 15.76-22.08 23.68-46.72 23.68-73.28 0-30.56-8.8-58.56-26.48-83.68-17.52-25.04-49.76-37.76-96.4-37.76-45.92 0-78.48 15.68-97.68 46.64-19.28 30.96-22.56 72.88-22.56 96.72H656.96c4.8-107.04 44.16-195.92 118.48-243.68 46.8-30.56 104.4-46 172.64-46 89.6 0 164.16 21.6 223.44 65.04 59.28 43.44 88.96 107.6 88.96 192.88M1059.92 1360c0 55.2-44.72 100-99.92 100a99.821 99.821 0 0 1-86.56-50 100.113 100.113 0 0 1 0-100c17.84-30.88 50.8-49.92 86.56-49.92 55.2 0 99.92 44.72 99.92 99.92M960 1600c-353.44 0-640-286.48-640-640 0-353.44 286.56-640 640-640s640 286.56 640 640c0 353.52-286.56 640-640 640m0-1440c-441.84 0-800 358.16-800 800s358.16 800 800 800 800-358.16 800-800-358.16-800-800-800" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1015 432.485L584.242 1001H907v455.485L1338.451 888H1015z"/>\n        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsAvgSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsAvgSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsAvgSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1597.6c-352.141 0-637.6-285.459-637.6-637.6S607.859 322.4 960 322.4s637.6 285.459 637.6 637.6-285.459 637.6-637.6 637.6M960 163c-440.183 0-797 356.817-797 797s356.817 797 797 797 797-356.817 797-797-356.817-797-797-797"/>\n        <path d="M1208.1 1072.931c-11.574-10.574-17.171-27.295-17.171-49.764V664.991h-134v318.524c-13 26.435-28.852 46.921-49.287 61.46-20.435 14.54-45.214 21.81-74.148 21.81-31.104 0-54.697-9.253-70.61-27.758-15.914-18.504-23.955-43.12-23.955-73.85V664.99h-134v623.346c0 16.521 5.19 28.962 15.499 37.718 10.307 8.756 24.9 12.936 43.708 12.936h66.793v-118.558c0-12.887-.665-26.847-1.931-41.882-1.266-15.034-3.723-29.656-7.34-43.864 13.02 10.243 28.022 18.008 45.02 23.295 16.999 5.288 36.345 7.93 58.045 7.93 31.828 0 60.217-7.517 85.173-22.552 24.955-15.034 47.196-36.429 66.726-64.184 4.702 16.851 11.574 31.555 20.616 44.111 9.04 12.556 19.439 22.882 31.194 30.978 11.754 8.095 24.683 14.125 38.789 18.091 14.106 3.966 28.753 5.947 43.943 5.947 13.02 0 24.685-1.156 34.99-3.469 10.31-2.313 19.17-5.37 26.584-9.169 7.415-3.8 12.86-8.179 16.656-13.135 3.798-4.956 5.535-10.078 5.535-15.365v-48.174h-39.28c-20.252 0-35.976-5.486-47.55-16.06"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsDeviationSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsDeviationSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsDeviationSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M960 1600c-353.52 0-640-286.48-640-640 0-353.44 286.48-640 640-640 353.44 0 640 286.48 640 640s-286.48 640-640 640m0-1440c-442 0-800 358.24-800 800 0 441.92 358.16 800 800 800 441.92 0 800-358.16 800-800 0-441.92-358.24-800-800-800"/>\n        <path d="M1128.8 1189.04c-39.36 52.08-99.44 78.08-180.24 78.08-78.16 0-138-24.96-179.44-74.88-41.52-49.92-62.24-122.88-62.24-219.04 0-48.56 5.52-91.68 16.48-129.28 10.96-37.68 28.48-69.28 52.56-94.88 24.08-25.68 55.04-44.944 92.72-58.304 37.76-13.36 83.12-19.824 136.08-19.824h40.96c24.08 8 45.12 20.864 63.04 39.024s32.64 40.072 44.16 65.992c11.52 25.92 20.24 54.836 26.08 86.836 5.92 32 8.88 65.658 8.88 100.858 0 98.24-19.68 173.338-59.04 225.418zm-124.08-629.128c-71.68 0-135.28 9.564-190.64 28.524-55.44 18.96-102 46.022-139.68 81.302-37.76 35.2-66.24 78.17-85.52 128.89C569.6 849.349 560 906.476 560 969.996c0 64.08 9.36 121.362 28.08 171.762 18.72 50.48 45.04 93.36 79.04 128.562 34 35.2 74.96 62.08 122.88 80.48 47.92 18.4 101.04 27.6 159.36 27.6 59.92 0 113.76-10 161.36-30 47.68-20 88.08-48.16 121.28-84.48 33.12-36.32 58.56-79.44 76.24-129.36 17.68-49.92 26.48-105.04 26.48-165.36 0-69.92-11.36-129.503-34.08-179.183-22.8-49.6-54.72-90.104-96-119.104h193.52c7.52 0 14.16-1.536 20.08-4.176 5.92-2.72 10.8-6.248 14.88-10.488 4-4.32 6.83-9.004 8.99-14.124 2.16-5.04 2.99-10.044 2.99-14.844v-67.368h-440.38z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsHighSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsHighSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsHighSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M795 771h235.917l-441.544 441.632 102.968 102.896L1134 874.029V1110h145V626H795z"/>\n        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsLowSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsLowSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsLowSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1134 1015.862L692.341 574.319l-102.91 102.995L1030.917 1119H795v145h484V780h-145z"/>\n        <path d="M960 1614.545c-361.496 0-654.545-293.05-654.545-654.545 0-361.495 293.049-654.545 654.545-654.545 361.495 0 654.545 293.05 654.545 654.545 0 361.495-293.05 654.545-654.545 654.545M960 160c-441.828 0-800 358.172-800 800 0 441.827 358.172 800 800 800s800-358.173 800-800c0-441.828-358.172-800-800-800"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconQuizStatsTimeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconQuizStatsTimeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconQuizStatsTimeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1040 560H880v400c0 21.2 8.4 41.52 23.44 56.56l240 240 113.12-113.12L1040 926.88V560z"/>\n        <path d="M960 1680c-397.645 0-720-322.355-720-720s322.355-720 720-720 720 322.355 720 720-322.355 720-720 720m0-1600C473.99 80 80 473.989 80 960c0 486.01 393.99 880 880 880 486.011 0 880-393.99 880-880 0-486.011-393.989-880-880-880"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRefreshSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRefreshSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRefreshSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M508.03 508.094C625.875 389.769 786.2 320.006 959.968 320.006c352.974 0 640.026 287.132 640.026 640.026H1760C1760 518.894 1401.186 160 959.968 160c-217.209 0-417.617 87.123-564.983 235.05L239.94 240.002v480.02h480.02l-211.93-211.93zm903.94 903.94c-117.845 118.325-278.171 188.088-451.938 188.088-352.974 0-640.026-287.132-640.026-640.026H160c0 441.138 358.814 800.032 800.032 800.032 217.209 0 417.617-87.123 564.983-235.13l155.046 155.127v-480.02h-480.02l211.93 211.93z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRemoveBookmarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRemoveBookmarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRemoveBookmarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1520 720h-320V480c0-88.24 71.76-160 160-160s160 71.76 160 160v240zm-498.4 349.091L909.091 1181.6 710.8 983.309 512.509 1181.6 400 1069.091 598.354 870.8 400 672.509 512.509 560 710.8 758.355 909.091 560 1021.6 672.509 823.309 870.8l198.291 198.291zM1360 160H560c-176.48 0-320 143.52-320 320v1200c0 32.32 19.52 61.52 49.36 73.92 29.92 12.32 64.32 5.44 87.2-17.359L720 1393.12l343.44 343.441A80.03 80.03 0 0 0 1120 1760c10.32 0 20.72-2 30.64-6.08 29.84-12.4 49.36-41.6 49.36-73.92V880h400c44.16 0 80-35.84 80-80V480c0-176.48-143.52-320-320-320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRemoveFromCollectionSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRemoveFromCollectionSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRemoveFromCollectionSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1336.528 519.56L959.968 143l-376.56 376.56 113.12 113.12 183.44-183.36v766.8h160v-766.8l183.44 183.36 113.12-113.12zm-67.888 696.584c-35.68 137.76-159.76 240-308.64 240-148.96 0-273.04-102.24-308.72-240H160v560h1600v-560h-491.36z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRepliedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRepliedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRepliedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1479.991 480.026H960.002V240.031c0-32.32-19.52-61.519-49.359-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.985 719.985a80.026 80.026 0 0 0 56.559 23.44c10.32 0 20.72-2 30.639-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995h878.98a.998.998 0 0 0 1.002-1.005v-957.97a.999.999 0 0 0-1.002-1.006h-358.99z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconReply2Solid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReply2Solid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconReply2Solid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1479.991 480.026H960.002V240.031c0-32.32-19.52-61.519-49.359-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.985 719.985a80.026 80.026 0 0 0 56.559 23.44c10.32 0 20.72-2 30.639-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995h878.98a.998.998 0 0 0 1.002-1.005v-957.97a.999.999 0 0 0-1.002-1.006h-358.99z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconReplyAll2Solid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReplyAll2Solid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconReplyAll2Solid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1357.888 478.621V239.68c0-32.178-19.433-61.249-49.142-73.594-29.947-12.346-64.036-5.576-86.815 17.283L505.107 900.193c-31.142 31.142-31.142 81.48 0 112.621l716.824 716.825a79.674 79.674 0 0 0 56.31 23.336c10.275 0 20.629-1.99 30.505-6.053 29.709-12.345 49.142-41.416 49.142-73.594v-238.941h437.957c21.772 0 39.922-17.842 39.922-39.851V518.472c0-22.031-17.874-39.85-39.922-39.85h-437.957zM108.328 889.323c-31.104 31.105-31.104 81.535 0 112.64l734.71 734.709c31.104 31.104 81.534 31.104 112.639 0 31.104-31.105 31.104-81.535 0-112.64L293.014 963.52l626.91-660.513c31.104-31.105 31.104-81.535 0-112.64-31.105-31.104-81.535-31.104-112.64 0L108.328 889.324z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconReplySolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconReplySolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconReplySolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1479.991 480.026H960.002V240.031c0-32.32-19.52-61.519-49.359-73.918-30.08-12.4-64.319-5.6-87.198 17.36L103.46 903.457c-31.28 31.279-31.28 81.838 0 113.117l719.985 719.985a80.026 80.026 0 0 0 56.559 23.44c10.32 0 20.72-2 30.639-6.08 29.84-12.4 49.359-41.599 49.359-73.918v-239.995h878.98a.998.998 0 0 0 1.002-1.005v-957.97a.999.999 0 0 0-1.002-1.006h-358.99z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconResetSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconResetSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconResetSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 160c-217.2 0-417.6 87.12-564.96 235.04L240 240v480h480L508.08 508.08C625.92 389.68 786.24 320 960 320c352.88 0 640 287.12 640 640s-287.12 640-640 640-640-287.12-640-640H160c0 441.12 358.88 800 800 800s800-358.88 800-800-358.88-800-800-800" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRssAddSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRssAddSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRssAddSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 800h-640V160H880v640H240v160h640v640h160V960h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRssSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRssSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRssSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M280 200v159.992c705.76 0 1280 574.21 1280 1279.932h160C1720 845.966 1074.08 200 280 200zm0 479.975v159.991c441.12 0 800 358.701 800 799.958h160c0-529.332-430.64-959.95-960-959.95zM440 1720c132.548 0 240-107.446 240-239.987 0-132.542-107.452-239.988-240-239.988s-240 107.446-240 239.988C200 1612.554 307.452 1720 440 1720z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRubricDarkSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRubricDarkSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRubricDarkSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M720.008 759.976h-320v320.007h320V759.976zm-320 800.017h320v-320.007h-320v320.007zM1360 1074.543v645.454H240V599.972h580.96C807.76 548.852 800 495.33 800 439.97H80V1880h1440v-805.458c-26.24 3.28-52.88 5.44-80 5.44-27.12 0-53.76-2.16-80-5.44zm-159.992 165.443h-320v320.007h320v-320.007zM1840 382.887h-342.88L1360 40l-137.2 342.887H880l296.64 250.406-159.52 366.728L1360 773.296l342.8 226.725-159.44-366.728L1840 382.887z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconRubricSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconRubricSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconRubricSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M720.008 759.976h-320v320.007h320V759.976zm-320 800.017h320v-320.007h-320v320.007zM1360 1074.543v645.454H240V599.972h580.96C807.76 548.852 800 495.33 800 439.97H80V1880h1440v-805.458c-26.24 3.28-52.88 5.44-80 5.44-27.12 0-53.76-2.16-80-5.44zm-159.992 165.443h-320v320.007h320v-320.007zM1840 382.887h-342.88L1360 40l-137.2 342.887H880l296.64 250.406-159.52 366.728L1360 773.296l342.8 226.725-159.44-366.728L1840 382.887z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSearchAddressBookSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSearchAddressBookSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSearchAddressBookSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSearchSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSearchSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSearchSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-277.724-120.815c219.16 0 396.825-177.665 396.825-396.825s-177.664-396.825-396.825-396.825c-219.16 0-396.825 177.664-396.825 396.825 0 219.16 177.664 396.825 396.825 396.825z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSettings2Solid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSettings2Solid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSettings2Solid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1200c-132.56 0-240-107.44-240-240s107.44-240 240-240 240 107.44 240 240-107.44 240-240 240zm800-320l-274.96-137.52 97.2-291.6-113.12-113.12-291.6 97.2L1040 160H880L742.48 434.96l-291.6-97.2-113.12 113.12 97.2 291.6L160 880v160l274.96 137.52-97.2 291.6 113.12 113.12 291.6-97.2L880 1760h160l137.52-274.96 291.6 97.2 113.12-113.12-97.2-291.6L1760 1040V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSettingsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSettingsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSettingsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1200c-132.56 0-240-107.44-240-240s107.44-240 240-240 240 107.44 240 240-107.44 240-240 240zm800-320l-274.96-137.52 97.2-291.6-113.12-113.12-291.6 97.2L1040 160H880L742.48 434.96l-291.6-97.2-113.12 113.12 97.2 291.6L160 880v160l274.96 137.52-97.2 291.6 113.12 113.12 291.6-97.2L880 1760h160l137.52-274.96 291.6 97.2 113.12-113.12-97.2-291.6L1760 1040V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSisImportedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSisImportedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSisImportedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M190 859.98h658.438L719.17 730.68l141.365-141.4 370.608 370.7-370.608 370.7-141.365-141.4 129.268-129.3H190v-200zm317.102 524.22C620.474 1497.5 771.137 1560 931.297 1560c160.16 0 310.824-62.4 423.996-175.8 113.372-113.4 175.756-264.1 175.756-424.3 0-160.3-62.384-310.9-175.756-424.2C1242.12 422.3 1091.458 360 931.297 360c-160.16 0-310.823 62.4-424.195 175.7L365.737 394.3C516.799 243.1 717.75 160 931.297 160c213.648 0 414.398 83.2 565.36 234.3C1647.822 545.3 1731 746.2 1731 959.9c0 213.6-83.18 414.6-234.242 565.7-151.063 151.1-351.813 234.4-565.46 234.4-213.548 0-414.499-83.3-565.561-234.4l141.365-141.4z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSisNotSyncedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSisNotSyncedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSisNotSyncedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M341.067 800c71.359-275.6 321.354-480 618.949-480 280.955 0 519.59 182.24 605.509 434.48L1360.009 960H1840V480l-151.437 151.44C1562.885 353.92 1283.93 160 960.016 160c-386.313 0-709.507 275.28-783.826 640h164.877zm1237.866 320c-71.359 275.6-321.354 480-618.949 480-280.875 0-519.59-182.24-605.509-434.48L559.991 960H80v480l151.437-151.44C357.115 1566.08 636.07 1760 959.984 1760c386.313 0 709.507-275.28 783.906-640h-164.957zm-237.516-418.56L1199.98 560 950.704 809.36 701.43 560 559.99 701.44l249.356 249.28L559.99 1200l141.438 141.44 249.275-249.28 249.276 249.28L1341.417 1200l-249.275-249.28 249.275-249.28z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSisSyncedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSisSyncedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSisSyncedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M341.067 800c71.359-275.6 321.354-480 618.949-480 280.955 0 519.59 182.24 605.509 434.48L1360.009 960H1840V480l-151.437 151.44C1562.885 353.92 1283.93 160 960.016 160c-386.313 0-709.507 275.28-783.826 640h164.877zm1237.866 320c-71.359 275.6-321.354 480-618.949 480-280.875 0-519.59-182.24-605.509-434.48L559.991 960H80v480l151.437-151.44C357.115 1566.08 636.07 1760 959.984 1760c386.313 0 709.507-275.28 783.906-640h-164.957zM892.76 1354.176l-323.514-323.44 141.438-141.44 156.557 156.56 331.354-463.92 162.717 116.16-468.552 656.08z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSkypeSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSkypeSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSkypeSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1683.9 1062.49c4.4-32.5 6.9-65.5 6.9-99.1 0-403.6-329-730.85-734.7-730.85-40.3 0-79.85 3.35-118.35 9.65-134.756-87.896-306.836-94.897-448.286-18.239C248.013 300.609 159.93 448.602 160 609.489c0 88.1 26 170 70.6 238.7-6 37.5-9 76-9 115.2 0 403.65 328.75 730.9 734.6 730.9 45.8 0 90.4-4.5 133.75-12.3 135.224 84.161 305.456 88.36 444.665 10.97 139.21-77.39 225.494-224.195 225.385-383.47 0-91.6-28-176.7-76-247h-.1zm-659.1 439.5c-233.5 12.15-342.7-39.5-442.8-133.4-111.75-104.9-66.85-224.5 24.2-230.65 91-6.15 145.65 103.1 194.2 133.5 48.5 30.25 233.1 99.25 330.6-12.2 106.15-121.35-70.6-184.15-200.2-203.15-185-27.4-418.6-127.5-400.4-324.7 18.2-197.15 167.5-298.2 324.5-312.5 200.3-18.15 330.65 30.4 433.75 118.35 119.2 101.65 54.7 215.3-21.25 224.5-75.65 9-160.65-167.25-327.5-169.9-171.9-2.75-288.15 178.9-75.85 230.5 212.5 51.65 439.9 72.8 521.8 267 82 194.2-127.35 400.4-361 412.5l-.05.15z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSpeedGraderSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSpeedGraderSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSpeedGraderSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 160c-441.8 0-800 358.2-800 800s358.2 800 800 800c441.85 0 800-358.2 800-800s-358.15-800-800-800zm0 1400c-314.5 0-572-242.1-597.5-550H560V910H362.5A596.35 596.35 0 0 1 489 589l152.8 152.85 70.7-70.7-155-155.1A596.5 596.5 0 0 1 910 362.5V560h100V362.5a597 597 0 0 1 358.25 158.7l-515.2 336.5-114.6 328.9 319.2-124.4 342-509.5A596.7 596.7 0 0 1 1557.5 910H1360v100h197.5c-25.5 307.9-283 550-597.5 550z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStandardsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStandardsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStandardsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1718.8 450.08l-720-400c-24.24-13.44-53.52-13.44-77.76 0l-720 400A80.03 80.03 0 0 0 160 520c0 55.52 9.12 1360 800 1360s800-1304.48 800-1360c0-29.04-15.76-55.76-41.2-69.92zm-731.76 935.2L580 1080l120-160 232.88 174.72 342.32-547.68 169.6 106-457.76 732.24z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStarLightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStarLightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStarLightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 1278.359c15.44 0 30.96 4.48 44.4 13.44l298.874 199.276-100.159-350.714c-8.08-27.919-.24-57.998 20.32-78.558l263.435-263.435h-286.875c-30.319 0-57.998-17.12-71.598-44.24L960 417.256 791.603 754.13c-13.6 27.12-41.279 44.239-71.598 44.239H433.13l263.435 263.435c20.56 20.56 28.4 50.639 20.32 78.558l-100.159 350.714 298.875-199.276a80.059 80.059 0 0 1 44.399-13.44m479.99 479.99c-15.439 0-30.879-4.48-44.398-13.439L960 1454.516 524.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStarSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStarSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStarSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1439.99 1758.35c-15.439 0-30.879-4.48-44.398-13.44L960 1454.516 524.408 1744.91c-27.84 18.56-64.399 17.92-91.518-1.92-27.12-19.76-39.04-54.399-29.76-86.638l147.038-514.71-366.713-366.714c-22.88-22.8-29.76-57.279-17.36-87.118 12.4-29.92 41.6-49.439 73.919-49.439h430.551l217.836-435.752c27.12-54.159 116.078-54.159 143.198 0l217.836 435.752h430.551c32.32 0 61.52 19.52 73.919 49.439 12.4 29.84 5.52 64.319-17.36 87.118l-366.713 366.713 147.037 514.71c9.28 32.24-2.64 66.88-29.759 86.64-14 10.239-30.56 15.359-47.12 15.359" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStatsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStatsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStatsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M600 1440c0-44.24-35.84-80-80-80H280c-44.16 0-80 35.76-80 80v160c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80v-160zm560-560c0-44.24-35.84-80-80-80H840c-44.16 0-80 35.76-80 80v720c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80V880zm560-560c0-44.24-35.84-80-80-80h-240c-44.16 0-80 35.76-80 80v1280c0 44.24 35.84 80 80 80h240c44.16 0 80-35.76 80-80V320z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStrikethroughSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStrikethroughSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStrikethroughSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1678 880H238v160h720c132.32 0 240 107.68 240 240s-107.68 240-240 240H718v-80H558v160c0 44.16 35.84 80 80 80h320c220.56 0 400-179.44 400-400 0-90.4-31.28-172.96-82-240h402V880zM732.768 720c-8.96-25.12-14.8-51.76-14.8-80 0-132.32 107.68-240 240-240h160v80h160V320c0-44.16-35.76-80-80-80h-240c-220.48 0-400 179.44-400 400 0 27.36 2.88 54.16 8.16 80h166.64z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconStudentViewSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconStudentViewSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconStudentViewSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1240 1640H280c-88.24 0-160-71.76-160-160V680h160v800h960v160zm400-1360H600c-88.24 0-160 71.68-160 160v720c0 88.24 71.76 160 160 160h1040c88.24 0 160-71.76 160-160V440c0-88.32-71.76-160-160-160zm-80 480h-320V600h320v160zm0 320h-320V920h320v160zm-880 0c0-147.28 92.72-240 240-240-88.32 0-160-71.68-160-160s71.68-160 160-160 160 71.68 160 160-71.68 160-160 160c147.28 0 240 92.72 240 240H680z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconSyllabusSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconSyllabusSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconSyllabusSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M800 480h960V320H800v160zm0 560h960V880H800v160zm0 560h960v-160H800v160zM560 160H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V240c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80V800c0-44.16-35.76-80-80-80zm0 560H240c-44.16 0-80 35.84-80 80v320c0 44.16 35.84 80 80 80h320c44.24 0 80-35.84 80-80v-320c0-44.16-35.76-80-80-80z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTableSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTableSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTableSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M1569.371 278.625V80.999H1437.62v197.626h-197.627v131.75h197.627V608h131.752V410.375H1767v-131.75zM933.462 502.715v455.368h401.406V744.126h182.715v213.957h3.787v182.715h-3.787v435.487h.947V1759H160V324.734h2.84V320h910.736v182.715H933.462zm-182.715 0v455.368H342.715V502.715h408.032zm182.716 638.083v435.487h401.405v-435.487H933.463zm-182.716 0v435.487H342.715v-435.487h408.032z"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTagSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTagSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTagSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M559.995 719.993c-88.479 0-159.998-71.76-159.998-159.998 0-88.399 71.52-159.998 159.998-159.998 88.319 0 159.998 71.6 159.998 159.998 0 88.239-71.68 159.998-159.998 159.998m1176.545 343.436l-879.989-879.99A79.926 79.926 0 0 0 799.992 160H239.999C195.839 160 160 195.84 160 239.999v559.993c0 21.2 8.48 41.6 23.44 56.56l879.989 879.988c15.6 15.6 36.08 23.44 56.559 23.44 20.48 0 40.96-7.84 56.56-23.44l559.992-559.993c31.28-31.28 31.28-81.839 0-113.118" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTargetSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTargetSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTargetSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1040 1432.8V1120H880v312.8c-200.56-33.84-358.88-192.16-392.8-392.8H800V880H487.2C521.12 679.44 679.44 521.12 880 487.28V800h160V487.28c200.56 33.84 358.88 192.16 392.8 392.72H1120v160h312.8c-33.92 200.64-192.24 358.96-392.8 392.8zM1840 880h-245.52c-36.32-288.88-265.6-518.16-554.48-554.4V80H880v245.6C591.12 361.84 361.84 591.12 325.52 880H80v160h245.52c36.32 288.96 265.6 518.24 554.48 554.48V1840h160v-245.52c288.88-36.24 518.16-265.52 554.48-554.48H1840V880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextCenteredSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextCenteredSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextCenteredSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 240H240v160h1440V240zm-160 320H400v160h1120V560zM160 1040h1600V880H160v160zm240 320h1120v-160H400v160zm-160 320h1440v-160H240v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextLeftSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextLeftSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextLeftSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 240H160v160h1440V240zm-320 320H160v160h1120V560zM160 1040h1600V880H160v160zm1120 160H160v160h1120v-160zM160 1680h1440v-160H160v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextRightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextRightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextRightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 400h1440V240H320v160zm320 320h1120V560H640v160zm-480 320h1600V880H160v160zm480 320h1120v-160H640v160zm-320 320h1440v-160H320v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1488 160H432c-72.864 0-132 59.733-132 133.333V560h264V426.667h264v1066.666H564V1760h792v-266.667h-264V426.667h264V560h264V293.333c0-73.6-59.136-133.333-132-133.333" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTextareaSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTextareaSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTextareaSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M478 1600v-160H318V480h160V320h961v160h479V0h-479v160H478V0H-1v480h159v960H-1v480h479v-160h963v160h479v-480h-479v160H478z"/>\n        <path d="M1600 1520h160V400h-160z"/>\n        <path d="M600 730.907V544.7c0-13.134 6.567-19.701 19.7-19.701h680.636c13.134 0 19.701 6.567 19.701 19.7v186.207c0 13.134-6.567 19.7-19.7 19.7h-79.44c-13.557 0-19.7-6.566-18.43-19.7l6.355-101.683h-175.401v676.823h108.037c13.134 0 19.7 6.567 19.7 19.7v63.552c0 13.134-6.566 19.701-19.7 19.701H779.85c-13.134 0-19.7-6.567-19.7-19.7v-63.552c0-7.203 1.482-12.287 4.448-15.253 2.966-2.965 8.05-4.448 15.252-4.448h106.767V629.224H710.579l6.356 101.683c1.27 13.134-4.66 19.7-17.795 19.7H619.7c-13.133 0-19.7-6.566-19.7-19.7z" stroke="#333" stroke-width="3"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTimerSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTimerSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTimerSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M960 0c-82.96 0-163.12 11.68-240 31.6v165.28C795.84 173.04 876.4 160 960 160c441.2 0 800 358.88 800 800s-358.8 800-800 800c-441.12 0-800-358.88-800-800 0-223.04 92.16-424.48 240-569.52V640h160V160H80v160h166.32C93.6 490 0 714 0 960c0 529.36 430.72 960 960 960 529.36 0 960-430.64 960-960S1489.36 0 960 0zm-80 400v560c0 21.2 8.4 41.6 23.44 56.64l320 320 113.12-113.2L1040 926.88V400H880z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconToggleLeftSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconToggleLeftSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconToggleLeftSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M320 320h400V160H320c-88.24 0-160 71.76-160 160v1280c0 88.24 71.76 160 160 160h400v-160H320V320zm1040-160h-160v160h160V160zm-160 1600h160v-160h-160v160zm400-1600h-80v160h80v80h160v-80c0-88.24-71.76-160-160-160zm0 1440h-80v160h80c88.24 0 160-71.76 160-160v-80h-160v80zm0-880h160V560h-160v160zm0 640h160v-160h-160v160zm0-320h160V880h-160v160zm-536.56-343.44L1166.88 800H880c-176.48 0-320 143.52-320 320h160c0-88.24 71.76-160 160-160h286.88l-103.44 103.44 113.12 113.12L1473.12 880l-296.56-296.56-113.12 113.12zM1040 160H880v400h160V160zM880 1760h160v-560H880v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconToggleRightSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconToggleRightSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconToggleRightSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 160h-400v160h400v1280h-400v160h400c88.24 0 160-71.76 160-160V320c0-88.24-71.76-160-160-160zm-880 0H560v160h160V160zM560 1760h160v-160H560v160zM160 320v80h160v-80h80V160h-80c-88.24 0-160 71.76-160 160zm160 1200H160v80c0 88.24 71.76 160 160 160h80v-160h-80v-80zm0-960H160v160h160V560zm0 640H160v160h160v-160zm0-320H160v160h160V880zm1040 240c0-176.48-143.52-320-320-320H753.12l103.44-103.44-113.12-113.12L446.88 880l296.56 296.56 113.12-113.12L753.12 960H1040c88.24 0 160 71.76 160 160h160zm-320-960H880v400h160V160zM880 1760h160v-560H880v560z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTrashSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTrashSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTrashSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <g stroke="none" stroke-width="1" fill-rule="evenodd">\n        <path d="M445 885v837c0 22 16 38 38 38h926c22 0 38-16 38-38V885l1.789-192.138-1003.679 1.231L445 885zm602 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zm-400 0h200v575c0 56-44 100-100 100s-100-44-100-100V885zM1445 360h-200c0-110-90-200-200-200H845c-110 0-200 90-200 200H445c-110 0-200 90-200 200h1400c0-110-90-200-200-200"/>\n    </g>\n</svg>'
  }));
}

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTroubleSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTroubleSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTroubleSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1336.56 1223.44l-113.12 113.12L960 1073.12l-263.44 263.44-113.12-113.12L846.88 960 583.44 696.56l113.12-113.12L960 846.88l263.44-263.44 113.12 113.12L1073.12 960l263.44 263.44zM960 160c-441.12 0-800 358.88-800 800s358.88 800 800 800 800-358.88 800-800-358.88-800-800-800z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTwitterBoxedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTwitterBoxedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTwitterBoxedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M80 182.995C80 127.77 124.774 83 180.007 83h1559.986C1795.225 83 1840 127.771 1840 182.995v1483.488c0 55.226-44.774 99.995-100.007 99.995H180.007c-55.232 0-100.007-44.771-100.007-99.995V182.995zm1490.75 363.656a502.195 502.195 0 0 1-143.607 39.22c52.197-31.14 91.262-80.096 109.933-137.764a502.208 502.208 0 0 1-158.844 60.424c-47.276-50.186-113.32-78.625-182.423-78.554-66.33-.01-129.947 26.22-176.854 72.92-46.906 46.7-73.258 110.044-73.258 176.093 0 19.535 2.209 38.538 6.475 56.745-201.12-10.033-388.501-104.63-515.5-260.242a247.108 247.108 0 0 0-33.902 125.17c-.058 83.288 41.715 161.086 111.305 207.291a249.933 249.933 0 0 1-113.286-31.103v3.11c.008 118.532 83.885 220.644 200.555 244.16a251.605 251.605 0 0 1-112.905 4.248c32.723 101.463 126.617 170.978 233.619 172.963-88.6 69.237-198.015 106.78-310.641 106.584a507.848 507.848 0 0 1-59.652-3.527c114.333 73.174 247.408 112.02 383.32 111.895 460 0 711.56-379.457 711.56-708.542 0-10.81-.266-21.545-.761-32.241a507.23 507.23 0 0 0 124.866-128.812v-.038z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconTwitterSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconTwitterSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconTwitterSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1786.72 484.054a700.8 700.8 0 0 1-201.067 55.146 351.573 351.573 0 0 0 153.92-193.706 701.333 701.333 0 0 1-222.4 84.96A349.707 349.707 0 0 0 1261.76 320a350.133 350.133 0 0 0-350.187 350.134c0 27.466 3.094 54.186 9.067 79.786C639.05 735.814 376.693 602.803 198.88 384a348.587 348.587 0 0 0-47.467 176c-.082 117.108 58.407 226.498 155.84 291.467a348.8 348.8 0 0 1-158.613-43.733v4.373c.012 166.664 117.448 310.243 280.8 343.307a350.827 350.827 0 0 1-158.08 5.973c45.816 142.665 177.278 240.41 327.093 243.2a702.507 702.507 0 0 1-434.933 149.867 708.07 708.07 0 0 1-83.52-4.96 990.933 990.933 0 0 0 536.693 157.333c644.054 0 996.267-533.547 996.267-996.267 0-15.2-.373-30.293-1.067-45.333a711.84 711.84 0 0 0 174.827-181.12v-.053z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnlockSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnlockSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnlockSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1520 845.714h62.008c35.341 0 63.992 28.652 63.992 63.996v786.295c0 35.345-28.655 63.995-64.002 63.995H339.002c-35.347 0-64.002-28.652-64.002-63.995V909.71c0-35.345 28.65-63.996 63.992-63.996H503.5V617.143C503.5 365.714 709.15 160 960.5 160c205.47 0 380.4 137.467 437.416 325h-249.92c-40.997-58.679-109.1-96.429-187.496-96.429-127.96 0-228.5 100.572-228.5 228.572v228.571h308V846h480v-.286zM960.936 1519c113.183 0 204.936-91.782 204.936-205s-91.753-205-204.936-205S756 1200.782 756 1314s91.753 205 204.936 205z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnmutedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnmutedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnmutedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M910.64 246.32c-29.92-12.32-64.32-5.52-87.2 17.36L480 640.16H240c-44 0-80 36.08-80 80v480c0 44 36 80 80 80h240l343.44 376.64c22.88 22.88 57.28 29.68 87.2 17.36 29.92-12.4 49.36-41.6 49.36-74v-1280c0-32.24-19.44-61.6-49.36-73.84zM1120 400.16v160c220.56 0 400 179.52 400 400 0 220.56-179.44 400-400 400v160c308.8 0 560-251.12 560-560 0-308.72-251.2-560-560-560zm240 560c0-132.24-107.68-240-240-240v160c44.08 0 80 35.92 80 80s-35.92 80-80 80v160c132.32 0 240-107.6 240-240z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnpublishSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnpublishSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnpublishSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1309.311 1626.667l-864.39-.81C235.75 1595.556 78 1410.796 78 1196.16c0-148.287 77.402-285.884 200.984-363.887 4.898-205.295 172.404-370.758 377.635-370.758 18.901 0 37.802 1.505 56.664 4.516C783.837 284.705 960.028 160 1158.793 160c263.732 0 478.337 215.754 478.337 480.95 0 12.004-.573 24.317-1.645 36.938C1763.162 778.393 1838 931.042 1838 1095.193c0 293.063-237.18 531.474-528.689 531.474zm-195.023-592.332l276.206-276.206-118.623-118.041-275.624 275.624-275.624-275.624L602 758.129l275.624 276.206L602 1309.959 720.623 1428l275.624-275.624L1271.87 1428l118.623-118.041-276.206-275.624z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUnpublishedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUnpublishedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUnpublishedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1613.833 729.153c.43-7.345.586-14.533.586-21.683 0-257.783-210.313-467.47-468.916-467.47-187.496 0-354.597 112.326-428.478 277.942-11.838-1.21-23.637-1.758-35.475-1.758-199.373 0-363.037 155.615-375.226 351.51C191.38 945.21 120 1075.703 120 1215.964c0 209.96 155.732 390.62 362.177 420.273l802.454.977c284.154 0 515.369-230.433 515.369-513.69 0-153.934-68.567-297.281-186.167-394.37" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUpdownSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUpdownSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUpdownSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M696.56 1303.44l-113.12 113.12L960 1793.12l376.56-376.56-113.12-113.12L1040 1486.88V433.12l183.44 183.44 113.12-113.12L960 126.88 583.44 503.44l113.12 113.12L880 433.12v1053.76z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUploadSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUploadSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUploadSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1302.606 1677.762l-847.063-.754C250.587 1647.548 96 1468.07 96 1259.552c0-144.068 75.806-277.702 196.952-353.508 4.778-199.425 168.96-360.172 370.02-360.172a354.31 354.31 0 0 1 55.565 4.4C787.638 374.147 960.327 253 1155.101 253c258.469 0 468.747 209.566 468.747 467.196 0 11.692-.545 23.634-1.635 35.913 125.128 97.638 198.461 245.897 198.461 405.386 0 284.66-232.404 516.267-518.068 516.267zm4.456-527.225l136.97-137.587L987.465 557l-455.95 455.95 136.97 137.587L890.6 927.807V1567h194.35V927.806l222.113 222.731z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUserAddSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUserAddSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUserAddSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1680 880h-640V240H880v640H240v160h640v640h160v-640h640z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconUserSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconUserSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconUserSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1490.88 1005.124c-131.68 144-320.4 234.879-530.88 234.879-210.48 0-399.28-90.88-530.96-234.88C232.48 1030.404 80 1196.484 80 1400.004V1880h1760v-479.998c0-203.519-152.48-369.598-349.12-394.878zm-50.912-485.126c0 265.119-214.88 479.998-480 479.998s-480-214.88-480-479.998c0-265.119 214.88-479.998 480-479.998s480 214.88 480 479.998z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconVideoSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconVideoSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconVideoSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1600 240.24H240c-88.4 0-160 71.68-160 160v1120c0 88.4 71.6 160 160 160h1360c88.32 0 160-71.6 160-160v-1120c0-88.4-71.68-160-160-160zm-960 160h160v160H640v-160zm-240 1120H240v-160h160v160zm0-960H240v-160h160v160zm400 960H640v-160h160v160zm400 0h-160v-160h160v160zm-480-320v-480l480 240-480 240zm480-640h-160v-160h160v160zm400 960h-160v-160h160v160zm0-960h-160v-160h160v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconWarningSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWarningSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconWarningSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1751.547 1581.395l-720-1382.4c-27.12-51.993-116-51.993-143.12 0l-720 1382.4c-12.32 23.808-11.12 51.994 3.52 74.803 14.56 22.58 40.24 36.327 68 36.327h1440c27.76 0 53.44-13.824 68.08-36.403 14.56-22.733 15.84-50.842 3.52-74.727zm-871.6-810.47h160v460.8h-160v-460.8zm80 710.4c-55.2 0-100-42.931-100-96 0-52.992 44.8-96 100-96s100 43.008 100 96c0 53.069-44.8 96-100 96z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconWindowsSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWindowsSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconWindowsSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M869.109 284.508c277.972-45.277 561.615-84.892 839.583-124.507V895.728c-277.968 0-561.611 5.658-839.583 5.658V284.508zM160 380.718c209.897-33.956 419.794-62.255 635.362-84.891v605.558c-215.568 0-425.465 5.661-635.362 5.661V380.72zm0 588.581c209.897 0 419.794 5.659 635.362 0v611.22c-215.568-28.299-425.465-56.597-635.362-84.892V969.299zm709.109 5.66h839.583v735.727c-277.968-45.277-561.611-79.234-839.583-118.85V974.96z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconWordpressSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconWordpressSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconWordpressSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M975.798 1265.589l-225.007 543.55c66.47 15.743 135.814 24.311 207.211 24.311 73.94 0 145.67-9.051 214.27-25.916l-196.474-541.945zm739.493-735.66c16.72 78.464 13.259 173.66-19.36 278.35-85.067 272.452-295.72 762.564-377.266 949.259 306.103-135.153 519.337-436.886 519.337-787.706 0-160.683-44.86-311.056-122.711-439.904zM280.93 668.155s-42.71-53.98-88.04-53.98h-45.994c-44.371 96.704-68.894 226.576-68.894 345.599 0 358.072 222.014 665.183 538.345 796.08L280.93 668.156zM177.422 536.814C324.206 266.044 618.557 89 958.002 89c219.726 0 420.484 92.603 574.699 223.307-44.059-8.432-92.166 1.045-140.624 28.45-113.403 64.327-150.48 246.4-3.442 337.824 91.872 56.764 124.55 198.899 121.46 285.7-3.032 86.936-213.508 486.185-213.508 486.185L1091.684 754.59s-7.04-48.815-7.04-62.895c0-17.755 5.906-39.494 16.994-51.891 7.607-8.259 19.262-25.627 33.029-25.627h97.113v-77.362h-528v77.362h16.387c17.287 0 34.183 23.016 50.493 39.513 19.282 19.689 43.55 93.764 72.942 170.624l76.775 250.113-165.46 378.149L573.384 696.8s5.378-51.795 16.349-60.595c7.138-6.053 18.147-22.029 30.839-22.029h4.987v-77.362H177.422z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconXSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconXSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconXSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1716.48 433.12l-226.32-226.24-526.8 526.88-526.88-526.88-226.32 226.24L737.04 960l-526.88 526.88 226.32 226.24 526.88-526.88 526.8 526.88 226.32-226.24L1189.6 960z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZippedSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZippedSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZippedSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1440 160H480c-88.32 0-160 71.6-160 160v1280c0 88.32 71.68 160 160 160h960c88.32 0 160-71.68 160-160V320c0-88.4-71.68-160-160-160zm-160 480h-160v160h160v160h-160v160H960V960h160V800H960V640h160V480H960V320h160v160h160v160z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZoomInSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZoomInSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZoomInSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-215.52-778.05h-136v204h-204v136h204v204h136v-204h204v-136h-204v-204z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = IconZoomOutSolid;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _SVGIcon = __webpack_require__(1);

var _SVGIcon2 = _interopRequireDefault(_SVGIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconZoomOutSolid(props) {
  return _react2.default.createElement(_SVGIcon2.default, _extends({}, props, {
    name: 'IconZoomOutSolid',
    viewBox: '0 0 1920 1920',
    src: '<svg viewBox="0 0 1920 1920" version="1.1" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1062.159 1262.688c-80.966 42.566-173.164 66.653-270.989 66.653-322.076 0-583.17-261.094-583.17-583.17C208 424.093 469.094 163 791.17 163c322.077 0 583.17 261.094 583.17 583.17 0 126.704-40.406 243.97-109.037 339.615l431.26 464.09c21.053 22.656 20.39 58.752-1.483 80.625l-111.3 111.3c-21.871 21.872-56.67 21.236-77.722-1.42l-443.899-477.692zm-524.52-440.25h480v-158.32h-480v158.32z" stroke="none" stroke-width="1" fill-rule="evenodd"/>\n</svg>'
  }));
}

/***/ }),
/* 450 */,
/* 451 */,
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ })
/******/ ]);
});