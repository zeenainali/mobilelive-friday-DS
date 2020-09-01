"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputContainer = exports.Input = exports.Flex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Flex = (0, _styledComponents.default)('div').withConfig({
  displayName: "css__Flex",
  componentId: "sc-1af3jfs-0"
})({
  display: 'flex',
  verticalAlign: 'middle'
}); // Hide checkbox visually but remain accessible to screen readers.

exports.Flex = Flex;

var Input = _styledComponents.default.input.attrs({
  type: 'checkbox'
}).withConfig({
  displayName: "css__Input",
  componentId: "sc-1af3jfs-1"
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
    theme: {
      colors,
      borderCurved,
      borderRounded
    },
    error,
    borderType
  } = props;
  var bg = error ? colors.error : colors[props.bg];
  var styles = {
    boxSizing: 'border-box',
    p: "0",
    width: "28px",
    height: "28px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: 'pointer',
    boxAlign: 'center',
    boxPack: 'center',
    outline: 0,
    transition: 'border-color 0.1s linear 0s, background-color 0.1s linear 0s'
  };

  if (isFilled) {
    styles.backgroundColor = "".concat(bg, " !important");
  } else {
    styles.border = "2px solid ".concat(bg, " !important");
    styles.backgroundColor = "".concat(colors.white, " !important");
  }

  if (borderType === "rounded") {
    styles.borderRadius = borderRounded;
  } else if (borderType === "curved") {
    styles.borderRadius = borderCurved;
  }

  return styles;
};

var InputContainer = (0, _styledComponents.default)('div').withConfig({
  displayName: "css__InputContainer",
  componentId: "sc-1af3jfs-2"
})(props => getDerivedStyles(props), (0, _styledSystem.compose)(_styledSystem.flexbox, _styledSystem.position, _styledSystem.border, _styledSystem.layout, _styledSystem.color // variant({ scale: 'checkBoxes' }),
));
exports.InputContainer = InputContainer;
InputContainer.defaultProps = {
  variant: 'unchecked'
};
InputContainer.propTypes = {
  variant: _propTypes.default.oneOf(['unchecked', 'checked', 'disabled'])
};