"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleLable = exports.Label = exports.CheckIconContainer = exports.InnerBox = exports.Flex = exports.HiddenCheckbox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _box = _interopRequireDefault(require("../box"));

var _typography = _interopRequireDefault(require("../typography"));

var HiddenCheckbox = _styledComponents.default.input.attrs(props => ({
  type: 'checkbox',
  checked: props.checked
})).withConfig({
  displayName: "css__HiddenCheckbox",
  componentId: "sct3jw-0"
})(["opacity:0;width:1px;height:1px;&:focus{+ .toggle-box{outline:auto;}}"]);

exports.HiddenCheckbox = HiddenCheckbox;

var Flex = _styledComponents.default.div.withConfig({
  displayName: "css__Flex",
  componentId: "sct3jw-1"
})(["display:flex;align-items:center;"]); // 


exports.Flex = Flex;
var InnerBox = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "css__InnerBox",
  componentId: "sct3jw-2"
})(["position:absolute;cursor:pointer;height:", ";width:", ";top:0;left:0;right:0;bottom:0;border-radius:", ";border:", ";background-color:", ";-webkit-transition:0.4s;transition:0.4s;", " &:before{position:absolute;content:'';height:", ";width:", ";border-radius:50px;left:", ";bottom:", ";background-color:", ";-webkit-transition:0.4s;transition:0.4s;", ";", ";}"], props => props.size === 'lg' ? "".concat(props.theme.space[13]) : "".concat(props.theme.space[7]), props => props.theme.space[19], props => props.theme.borderRounded, props => props => {
  var {
    isError,
    toggleStatus,
    toggledOnBorder,
    toggledOffBorder,
    theme: {
      colors: {
        error
      }
    }
  } = props;

  if (isError) {
    return "2px solid ".concat(error);
  } else {
    return toggleStatus ? toggledOnBorder : toggledOffBorder;
  }
}, props => props.toggledOffBgColor, props => props.toggleStatus ? "background-color: ".concat(props.toggledOnBgColor, ";") : "", props => props.theme.space[11], props => props.theme.space[11], props => props.size === 'lg' ? '0.15rem' : '-0.25rem', props => props.size === 'lg' ? '0.15rem' : '-0.30rem', props => {
  var {
    isError,
    toggleStatus,
    switchOnColor,
    switchOffColor,
    theme: {
      colors: {
        error
      }
    }
  } = props;

  if (isError) {
    return error;
  } else {
    return toggleStatus ? switchOnColor : switchOffColor;
  }
}, props => props.toggleStatus && props.size === 'lg' ? "-webkit-transform: translateX(1.4rem);\n           -ms-transform: translateX(1.4rem);\n           transform: translateX(1.4rem);" : '', props => props.toggleStatus && props.size === 'sm' ? "-webkit-transform: translateX(2.4rem);\n               -ms-transform: translateX(2.4rem);\n               transform: translateX(2.4rem);" : '');
exports.InnerBox = InnerBox;
var CheckIconContainer = (0, _styledComponents.default)(_box.default).withConfig({
  displayName: "css__CheckIconContainer",
  componentId: "sct3jw-3"
})(["margin-left:", ";position:absolute;top:", ";opacity:0;transition-timing-function:ease-in;transition:0.2s;", ";"], props => props.theme.space[19], props => props.theme.space[7], props => props.toggleStatus ? "transition-timing-function: \n         ease-in;transition: 0.2s;\n         opacity: 1;" : '');
exports.CheckIconContainer = CheckIconContainer;

var Label = _styledComponents.default.label.withConfig({
  displayName: "css__Label",
  componentId: "sct3jw-4"
})(["position:relative;display:inline-block;width:", ";height:", ";"], props => props.theme.space[16], props => props.theme.space[17]);

exports.Label = Label;

var ToggleLable = _styledComponents.default.label.withConfig({
  displayName: "css__ToggleLable",
  componentId: "sct3jw-5"
})(["margin-left:", ";font-size:", ";font-weight:", ";color:", ";cursor:pointer;"], props => props.theme.space[15], props => props.theme.space[7], props => props.theme.fontWeights[3], props => props.error ? props.theme.colors.error : props.theme.colors.black);

exports.ToggleLable = ToggleLable;
HiddenCheckbox.propTypes = {
  checked: _propTypes.default.bool
};
HiddenCheckbox.defaultProps = {
  checked: false
};