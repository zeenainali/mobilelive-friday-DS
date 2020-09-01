"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationIcon = exports.ChevronDownIcon = exports.RightIconButton = exports.LeftIconButton = exports.SelectWrapper = exports.BaseSelect = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var getDerivedProps = props => {
  var {
    borderType,
    theme: {
      borderCurved,
      borderRounded,
      colors: {
        black
      }
    },
    theme: {
      colors
    },
    withBorderBottomOnly,
    error
  } = props;
  var styles = {
    borderColor: error ? colors.error : black,
    boxSizing: 'border-box',
    cursor: 'pointer',
    padding: '10px',
    width: '100%',
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none'
  };

  if (borderType === 'curved') {
    styles.borderRadius = borderCurved;
  }

  if (borderType === 'rounded') {
    styles.borderRadius = borderRounded;
  }

  if (withBorderBottomOnly) {
    styles.borderColor = 'transparent';
    styles.borderBottom = "1px solid ".concat(error ? colors.error : black);
  }

  return styles;
};

var BaseSelect = (0, _styledComponents.default)('select').withConfig({
  displayName: "css__BaseSelect",
  componentId: "sc-1c35ak4-0"
})(props => getDerivedProps(props), (0, _styledSystem.compose)(_styledSystem.color, _styledSystem.layout, _styledSystem.space, _styledSystem.border));
exports.BaseSelect = BaseSelect;

var SelectWrapper = _styledComponents.default.div.withConfig({
  displayName: "css__SelectWrapper",
  componentId: "sc-1c35ak4-1"
})(["width:", ";position:relative;", ";"], props => props.width ? props.width : '100%', props => props.leftIcon && "& > select{\n       padding-left: 40px\n     }\n    ");

exports.SelectWrapper = SelectWrapper;
var common = "\n  position: absolute;\n  z-index: 20;\n  cursor: pointer;\n  text-decoration: none;\n  cursor:pointer;\n  background-color: transparent !important;\n  padding: 0;\n  border: none;\n  box-shadow: none;\n";

var LeftIconButton = _styledComponents.default.button.withConfig({
  displayName: "css__LeftIconButton",
  componentId: "sc-1c35ak4-2"
})(["right:calc(100% - 30px);top:0;transform:translateY(50%);font-size:16px;", ""], common);

exports.LeftIconButton = LeftIconButton;

var RightIconButton = _styledComponents.default.button.withConfig({
  displayName: "css__RightIconButton",
  componentId: "sc-1c35ak4-3"
})(["left:calc(100% - 50px);top:0;transform:translateY(50%);font-size:16px;", ""], common);

exports.RightIconButton = RightIconButton;

var ChevronDownIcon = _styledComponents.default.span.withConfig({
  displayName: "css__ChevronDownIcon",
  componentId: "sc-1c35ak4-4"
})(["left:calc(100% - 20px);top:50%;transform:translateY(-50%);font-size:8px;", ""], common);

exports.ChevronDownIcon = ChevronDownIcon;

var ValidationIcon = _styledComponents.default.span.withConfig({
  displayName: "css__ValidationIcon",
  componentId: "sc-1c35ak4-5"
})(["position:absolute;left:calc(100% + 10px);width:20px;top:0;transform:translateY(50%);color:", ";font-size:18px;"], props => props.isValid ? 'green' : 'red');

exports.ValidationIcon = ValidationIcon;