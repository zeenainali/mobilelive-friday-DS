"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationIcon = exports.LeftIcon = exports.InputWrapper = exports.TextArea = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var getDerivedProps = props => {
  var {
    theme: {
      space,
      fontWeights,
      colors: {
        red,
        black,
        white,
        grayDark,
        grayLight
      },
      borderCurved,
      borderRounded
    },
    error,
    borderType,
    withBottomBorderOnly
  } = props; // baseline styles

  var styles = {
    color: error ? red : black,
    width: '100%',
    height: '8.25rem',
    boxSizing: 'border-box',
    padding: "".concat(space[7], " ").concat(space[7]),
    letterSpacing: 1,
    lineHeight: 1,
    fontSize: "".concat(space[7]),
    fontWeight: "".concat(fontWeights[2]),
    backgroundColor: 'transparent',
    '::placeholder': {
      color: grayDark,
      opacity: 1
    },
    '&:disabled': {
      backgroundColor: grayLight,
      border: 'none'
    }
  }; // conditional styles

  if (withBottomBorderOnly) {
    // styles.border = 'none';
    styles.borderColor = 'transparent';
    styles.borderBottom = "1px solid ".concat(error ? red : black);
  } else {
    styles.border = "1px solid ".concat(error ? red : black);
  }

  return styles;
};

var TextArea = _styledComponents.default.textarea.withConfig({
  displayName: "css__TextArea",
  componentId: "sc-1mfigel-0"
})(props => getDerivedProps(props), (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.space, _styledSystem.typography, _styledSystem.color)); // const getWrapperStyles = (props) => {
//   console.log("props are ", props)
//   const styles = {
//     height: 'auto',
//   }
//   if(props.rightIcon){
//     styles.position = 'relative'
//   }
//   if(props.leftIcon){
//     styles.position = 'relative'
//     styles['&input'] = {
//       paddingLeft: "40px"
//     }
//   }
//   console.log("returning styles ", styles)
//   return styles
// }
// export const InputWrapper = styled('div')(
//   props => getWrapperStyles(props)
// )


exports.TextArea = TextArea;

var InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "css__InputWrapper",
  componentId: "sc-1mfigel-1"
})(["height:'auto';position:relative;width:", ";display:", ";", ";", ";"], props => props.width ? props.width : '100%', props => props.display ? props.display : 'block', props => props.rightIcon && "position:relative;\n  ", props => props.leftIcon && "position:relative;\n   \n   & > input{\n     padding-left: 40px\n   }\n  ");

exports.InputWrapper = InputWrapper;

var LeftIcon = _styledComponents.default.span.withConfig({
  displayName: "css__LeftIcon",
  componentId: "sc-1mfigel-2"
})(["position:absolute;right:calc(100% - ", ");width:", ";top:calc(100% - ", ");font-size:", ";z-index:20;text-decoration:none;cursor:pointer;background-color:transparent !important;padding:0;border:none;box-shadow:none;"], props => props.theme.space[12], props => props.theme.space[9], props => props.theme.space[11], props => props.theme.space[7]);

exports.LeftIcon = LeftIcon;

var ValidationIcon = _styledComponents.default.span.withConfig({
  displayName: "css__ValidationIcon",
  componentId: "sc-1mfigel-3"
})(["position:absolute;left:", ";width:", ";top:", ";color:", ";font-size:", ";"], props => props.position === 'inside' ? "calc(100% - ".concat(props.theme.space[12], ")") : "calc(100% + ".concat(props.theme.space[2], ")"), props => props.theme.space[9], props => props.theme.space[7], props => props.isValid ? 'green' : 'red', props => props.theme.space[7]);

exports.ValidationIcon = ValidationIcon;