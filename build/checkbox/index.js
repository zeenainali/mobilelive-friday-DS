"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _box = _interopRequireDefault(require("../box"));

var _css = require("./css");

var _span = _interopRequireDefault(require("../span/span"));

var _label = _interopRequireDefault(require("../label"));

/**
 * Checkbox
 */
function Checkbox(props) {
  var {
    id,
    label,
    className,
    onChange,
    name,
    errorMessage,
    backgroundColor,
    color,
    border,
    isFilled,
    checkedIconClass,
    variant,
    borderType
  } = props;
  var isChecked = variant === 'checked';
  var isDisabled = variant === 'disabled';
  return /*#__PURE__*/_react.default.createElement(_css.Flex, {
    alignItems: "center",
    "data-testid": "checkbox"
  }, /*#__PURE__*/_react.default.createElement(_css.InputContainer, {
    variant: variant,
    error: errorMessage,
    bg: backgroundColor,
    className: className,
    isFilled: isFilled,
    border: border,
    borderType: borderType,
    color: color
  }, variant === 'checked' && /*#__PURE__*/_react.default.createElement(_span.default, {
    className: checkedIconClass
  }), /*#__PURE__*/_react.default.createElement(_css.Input, {
    checked: variant === 'checked',
    disabled: isDisabled,
    id: name,
    name: name,
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement(_label.default, {
    htmlFor: id,
    error: errorMessage,
    pl: [10],
    mt: "-22px",
    lineHeight: 10,
    fontWeight: 600,
    color: errorMessage && !isChecked ? 'error' : 'black' // fontWeight={isChecked ? [2] : [0]}
    ,
    as: "label"
  }, label));
}

Checkbox.propTypes = {
  /**
   * The label.
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]).isRequired,

  /**
   * The ID. Need to be defined for labels.
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Associate this checkbox with a group. Set as the HTML name attribute.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * The variant state
   */
  variant: _propTypes.default.oneOf(['unchecked', 'checked', 'disabled']),

  /**
   * A callback function to be invoked when the checkbox is checked or unchecked.
   */
  onChange: _propTypes.default.func,

  /** It is a validation's error message */
  errorMessage: _propTypes.default.string,
  borderType: _propTypes.default.oneOf(['curved', 'rounded'])
};
Checkbox.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  errorMessage: ''
};
var _default = Checkbox;
exports.default = _default;