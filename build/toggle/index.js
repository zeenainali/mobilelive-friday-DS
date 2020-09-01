"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("../box"));

var _rebass = require("rebass");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = _interopRequireDefault(require("../typography"));

var _css = require("./css");

// TODO: Icon
// import { QuestionCircle } from 'styled-icons/fa-regular/QuestionCircle';
var Toggle = props => {
  var {
    id,
    isToggled,
    onChange: _onChange,
    styles: {
      toggledOnBgColor,
      toggledOffBgColor,
      toggledOnBorderColor,
      toggledOffBorderColor,
      switchOnColor,
      switchOffColor
    },
    className,
    label,
    size,
    error
  } = props;
  return /*#__PURE__*/_react.default.createElement(_css.Flex, {
    alignItems: "center"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    style: {
      borderRadius: '50px'
    }
  }, /*#__PURE__*/_react.default.createElement(_css.Label, {
    htmlFor: id
  }, /*#__PURE__*/_react.default.createElement(_css.HiddenCheckbox, {
    onChange: e => {
      _onChange(e);
    },
    id: id,
    "aria-labelledby": id,
    "aria-checked": isToggled
  }), /*#__PURE__*/_react.default.createElement(_css.InnerBox, {
    toggleStatus: isToggled,
    className: "toggle-box ".concat(className),
    toggledOnBgColor: toggledOnBgColor,
    toggledOffBgColor: toggledOffBgColor,
    switchOnColor: switchOnColor,
    switchOffColor: switchOffColor,
    toggledOnBorder: "2px solid ".concat(toggledOnBorderColor),
    toggledOffBorder: "2px solid ".concat(toggledOffBorderColor),
    isError: error,
    size: size
  }, /*#__PURE__*/_react.default.createElement(_css.CheckIconContainer, {
    toggleStatus: "toggleState"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "icon_checkmark"
  }))))), label && /*#__PURE__*/_react.default.createElement(_box.default, {
    style: {
      marginBottom: size === 'lg' ? '14px' : '30px'
    }
  }, /*#__PURE__*/_react.default.createElement(_css.ToggleLable, {
    ml: "40px",
    fontSize: "16px",
    fontWeight: 600,
    as: "label",
    htmlFor: id,
    error: error,
    cursor: "pointer"
  }, label)));
};

Toggle.propTypes = {
  /**
   * label text to the right of the toggle
   */
  label: _propTypes.default.string,

  /**
   * Callback to be executed when onChange event is fired to the component
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Unique Id of the toggle
   */
  id: _propTypes.default.string.isRequired,

  /**
   * State of the toggle
   */
  isToggled: _propTypes.default.bool.isRequired,

  /** controls the size of toggle */
  size: _propTypes.default.oneOf(['lg', 'sm']),

  /** style object to define colors for the toggle */
  styles: _propTypes.default.shape({
    toggledOnBgColor: _propTypes.default.string,
    toggledOffBgColor: _propTypes.default.string,
    switchOnColor: _propTypes.default.string,
    switchOffColor: _propTypes.default.string,
    toggledOnBorderColor: _propTypes.default.string,
    toggledOffBorderColor: _propTypes.default.string
  }),

  /** className to pass class based styles to the toggle */
  className: _propTypes.default.string,

  /** Flag to control error state */
  error: _propTypes.default.bool
};
Toggle.defaultProps = {
  id: 'toggle',
  isToggled: false,
  size: 'lg',
  styles: {
    toggledOnBgColor: 'white',
    toggledOffBorderColor: '#B3B3B3',
    toggledOnBorderColor: '#B3B3B3',
    switchOnColor: '#34A84D',
    switchOffColor: '#B3B3B3'
  }
};
var _default = Toggle;
exports.default = _default;