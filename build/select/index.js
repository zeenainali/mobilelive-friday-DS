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

var _css = require("./css");

var _typography = _interopRequireDefault(require("../typography"));

var _option = _interopRequireDefault(require("../option"));

/* eslint-disable react/jsx-props-no-spreading */
var Select = props => {
  var {
    children,
    width,
    id,
    name,
    value,
    placeholder,
    onRightIconButtonClick,
    rightIcon,
    errorMessage,
    leftIcon,
    onLeftIconClick,
    borderType,
    withBorderBottomOnly,
    validationIcon,
    isValid,
    chevron,
    onChange
  } = props,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "width", "id", "name", "value", "placeholder", "onRightIconButtonClick", "rightIcon", "errorMessage", "leftIcon", "onLeftIconClick", "borderType", "withBorderBottomOnly", "validationIcon", "isValid", "chevron", "onChange"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_css.SelectWrapper, {
    width: width,
    leftIcon: leftIcon
  }, leftIcon && /*#__PURE__*/_react.default.createElement(_css.LeftIconButton, {
    onClick: onLeftIconClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: leftIcon
  })), /*#__PURE__*/_react.default.createElement(_css.BaseSelect, (0, _extends2.default)({}, restProps, {
    id: id,
    name: name,
    value: value,
    error: errorMessage,
    borderType: borderType,
    withBorderBottomOnly: withBorderBottomOnly,
    onChange: onChange
  }), placeholder && /*#__PURE__*/_react.default.createElement(_option.default, null, placeholder), children), chevron && /*#__PURE__*/_react.default.createElement(_css.ChevronDownIcon, {
    className: chevron
  }), rightIcon && /*#__PURE__*/_react.default.createElement(_css.RightIconButton, {
    onClick: onRightIconButtonClick
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: rightIcon
  })), validationIcon && /*#__PURE__*/_react.default.createElement(_css.ValidationIcon, {
    className: validationIcon,
    isValid: isValid
  })), errorMessage && /*#__PURE__*/_react.default.createElement(_typography.default, {
    position: "absolute",
    as: "p",
    color: errorMessage ? "error" : "black",
    fontSize: "10px",
    lineHeight: "1px",
    pl: 3,
    mt: 17,
    pt: 0
  }, errorMessage));
};

Select.defaultProps = {
  disabled: false,
  fontSize: [2, 3],
  lineHeight: [4],
  m: [0],
  fontWeight: [3],
  width: [1],
  textAlign: ['center'],
  borderRadius: [0],
  onClick: () => {},
  withIcon: false
};
Select.propTypes = {
  /** Need to be instances of Option component */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired,

  /** Option to disable select */
  disabled: _propTypes.default.bool,

  /** borderType consumes borderCurved and borderRounded variables from Theme file */
  borderType: _propTypes.default.oneOf(['curved', 'rounded']),

  /** Defines font size of child elements. Accepts responsive value from theme */
  fontSize: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines line height of child elements. Accepts responsive value from theme */
  lineHeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines font weight of child elements. Accepts responsive value from theme */
  fontWeight: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines width of button. Accepts responsive value from theme */
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines height of button. Accepts responsive value from theme */
  height: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** textAlign property specifies the horizontal
   * alignment of text in an element. Accepts responsive value from theme */
  textAlign: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines border radius on the button. Accepts responsive value from theme. */
  borderRadius: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Defines button's border. It's a shorthand for border-width, border-style, and border-color.  */
  border: _propTypes.default.string,
  borderX: _propTypes.default.string,
  borderY: _propTypes.default.string,
  color: _propTypes.default.string,

  /** Shorthand to add margin to button. ml, mr, mt, mb, my and mx are also supported to
   * to add margins on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  m: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)]),

  /** Shorthand to add padding to button. pl, pr, pt, pb, py and px are also supported to
   * to add paddings on left, right, top, bottom, y-axis and x-axis respectively.
   * Accepts responsive value from theme
   */
  p: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.number)])
};
var _default = Select;
exports.default = _default;