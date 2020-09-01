"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ValidationIcon = exports.LeftIcon = exports.LeftIconButton = exports.RightIconButton = exports.InputWrapper = exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var getDerivedProps = props => {
  var {
    theme: {
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
    height: '2.25rem',
    boxSizing: 'border-box',
    padding: '1rem 1rem',
    letterSpacing: '0.125em',
    lineHeight: '28px',
    fontSize: '1rem',
    fontWeight: 500,
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

  if (!withBottomBorderOnly && borderType && borderType === 'curved') {
    styles.borderRadius = borderCurved;
  }

  if (!withBottomBorderOnly && borderType && borderType === 'rounded') {
    styles.borderRadius = borderRounded;
  }

  if (withBottomBorderOnly) {
    // styles.border = 'none';
    styles.borderColor = 'transparent';
    styles.borderBottom = "1px solid ".concat(error ? red : black);
  } else {
    styles.border = "1px solid ".concat(error ? red : black);
  }

  return styles;
};

var Input = _styledComponents.default.input.withConfig({
  displayName: "css__Input",
  componentId: "jv72iu-0"
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


exports.Input = Input;

var InputWrapper = _styledComponents.default.div.withConfig({
  displayName: "css__InputWrapper",
  componentId: "jv72iu-1"
})(["height:'auto';width:", ";display:", ";", ";", ";"], props => props.width ? props.width : '100%', props => props.display ? props.display : 'block', props => props.rightIcon && "position:relative;\n  ", props => props.leftIcon && "position:relative;\n   \n   & > input{\n     padding-left: 40px\n   }\n  ");

exports.InputWrapper = InputWrapper;

var RightIconButton = _styledComponents.default.button.withConfig({
  displayName: "css__RightIconButton",
  componentId: "jv72iu-2"
})(["position:absolute;left:calc(100% - 30px);width:20px;top:calc(100% - 25px);font-size:16px;z-index:20;cursor:pointer;text-decoration:none;cursor:pointer;background-color:transparent !important;padding:0;border:none;box-shadow:none;"]);

exports.RightIconButton = RightIconButton;

var LeftIconButton = _styledComponents.default.button.withConfig({
  displayName: "css__LeftIconButton",
  componentId: "jv72iu-3"
})(["position:absolute;right:calc(100% - 30px);width:20px;top:calc(100% - 25px);font-size:16px;z-index:20;cursor:pointer;text-decoration:none;cursor:pointer;background-color:transparent !important;padding:0;border:none;box-shadow:none;"]);

exports.LeftIconButton = LeftIconButton;

var LeftIcon = _styledComponents.default.span.withConfig({
  displayName: "css__LeftIcon",
  componentId: "jv72iu-4"
})(["position:absolute;right:calc(100% - 30px);width:20px;top:calc(100% - 25px);font-size:16px;z-index:20;text-decoration:none;cursor:pointer;background-color:transparent !important;padding:0;border:none;box-shadow:none;"]);

exports.LeftIcon = LeftIcon;

var ValidationIcon = _styledComponents.default.span.withConfig({
  displayName: "css__ValidationIcon",
  componentId: "jv72iu-5"
})(["position:absolute;left:calc(100% + 10px);width:20px;top:40px;top:calc(100% - 25px);color:", ";font-size:18px;"], props => props.isValid ? 'green' : 'red');

exports.ValidationIcon = ValidationIcon;