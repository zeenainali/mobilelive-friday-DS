"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _box = _interopRequireDefault(require("../box"));

var _css = require("./css");

var _span = _interopRequireDefault(require("../span/span"));

var _label = _interopRequireDefault(require("../label"));

function Radio(props) {
  var {
    id,
    label,
    onChange,
    name,
    testId,
    error,
    color,
    variant,
    className,
    borderType
  } = props,
      restProps = (0, _objectWithoutProperties2.default)(props, ["id", "label", "onChange", "name", "testId", "error", "color", "variant", "className", "borderType"]);
  var isChecked = variant === 'checked';
  var isDisabled = variant === 'disabled';
  return /*#__PURE__*/_react.default.createElement(_css.Flex, {
    alignItems: "center",
    "data-testid": "radio"
  }, /*#__PURE__*/_react.default.createElement(_css.InputContainer, (0, _extends2.default)({
    variant: variant,
    error: error,
    borderType: borderType,
    className: className,
    color: color
  }, restProps), variant === 'checked' && /*#__PURE__*/_react.default.createElement(_css.InnerBox, {
    color: color,
    borderType: borderType,
    error: error
  }), /*#__PURE__*/_react.default.createElement(_css.Input, {
    checked: variant === 'checked',
    disabled: isDisabled,
    id: name,
    testId: testId,
    name: name,
    onChange: onChange
  })), /*#__PURE__*/_react.default.createElement(_label.default, {
    htmlFor: id,
    error: error,
    pl: [10],
    mt: "-22px",
    lineHeight: 10,
    fontWeight: 600,
    color: error ? 'error' : 'black',
    as: "label"
  }, label));
}

Radio.propTypes = {
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

  /**
   * color controld the color for border and fill color.
   */
  color: _propTypes.default.string,

  /** It is a validation's error message */
  error: _propTypes.default.bool,
  borderType: _propTypes.default.oneOf(['curved', 'rounded']),
  className: _propTypes.default.string
};
Radio.defaultProps = {
  variant: 'unchecked',
  onChange: () => {},
  error: false
};
var _default = Radio;
exports.default = _default;