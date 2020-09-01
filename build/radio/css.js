"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerBox = exports.InputContainer = exports.Input = exports.Flex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Flex = (0, _styledComponents.default)('div').withConfig({
  displayName: "css__Flex",
  componentId: "wxt6yf-0"
})({
  display: 'flex',
  verticalAlign: 'middle'
}); // Hide checkbox visually but remain accessible to screen readers.

exports.Flex = Flex;

var Input = _styledComponents.default.input.attrs({
  type: 'radio'
}).withConfig({
  displayName: "css__Input",
  componentId: "wxt6yf-1"
})({
  boxSizing: 'border-box',
  opacity: 0,
  cursor: 'pointer',
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  p: "0",
  overflow: "hidden",
  border: "0",
  width: "100%",
  height: "100%",
  position: "absolute"
}, (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.position));

exports.Input = Input;

var getDerivedStyles = props => {
  var {
    isFilled,
    bg,
    color,
    theme: {
      colors,
      borderCurved,
      borderRounded
    },
    error,
    borderType
  } = props; // const bg = error ? colors.error : colors[props.bg];

  var styles = {
    boxSizing: 'border-box',
    p: "3px",
    width: "28px",
    height: "28px",
    position: "relative",
    border: "2px solid ".concat(color, " !important"),
    backgroundColor: "".concat(colors.white, " !important"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: 'pointer',
    boxAlign: 'center',
    boxPack: 'center',
    outline: 0,
    transition: 'border-color 0.1s linear 0s, background-color 0.1s linear 0s'
  };

  if (borderType === "rounded") {
    styles.borderRadius = borderRounded;
  } else if (borderType === "curved") {
    styles.borderRadius = borderCurved;
  }

  if (error) {
    styles.border = "2px solid ".concat(colors.error, " !important");
  }

  return styles;
};

var InputContainer = (0, _styledComponents.default)('div').withConfig({
  displayName: "css__InputContainer",
  componentId: "wxt6yf-2"
})(props => getDerivedStyles(props), (0, _styledSystem.compose)(_styledSystem.flexbox, _styledSystem.position, _styledSystem.border, _styledSystem.layout, _styledSystem.color));
exports.InputContainer = InputContainer;

var getInnerBoxProps = props => {
  var {
    borderType,
    theme: {
      borderCurved,
      borderRounded,
      colors
    },
    color,
    error
  } = props;
  var styles = {
    backgroundColor: error ? colors.error : color,
    width: '18px',
    height: '18px',
    transition: 'all 0.2s ease-out'
  };

  if (borderType === 'rounded') {
    styles.borderRadius = borderRounded;
    styles.width = '14px';
    styles.height = '14px';
  }

  if (borderType === 'curved') {
    styles.borderRadius = '5px';
  }

  console.log("returnimg inner box styles ", styles);
  return styles;
};

var InnerBox = (0, _styledComponents.default)('div').withConfig({
  displayName: "css__InnerBox",
  componentId: "wxt6yf-3"
})(props => getInnerBoxProps(props));
exports.InnerBox = InnerBox;
InputContainer.defaultProps = {
  variant: 'unchecked'
};
InputContainer.propTypes = {
  variant: _propTypes.default.oneOf(['unchecked', 'checked', 'disabled'])
};