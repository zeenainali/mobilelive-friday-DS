"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTip = exports.TooltipWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var TooltipWrapper = _styledComponents.default.span.withConfig({
  displayName: "css__TooltipWrapper",
  componentId: "m5e5my-0"
})(["position:relative;cursor:pointer;&:hover{span[data-tooltip]{visibility:visible;opacity:1;}}"]);

exports.TooltipWrapper = TooltipWrapper;

var ToolTip = _styledComponents.default.span.withConfig({
  displayName: "css__ToolTip",
  componentId: "m5e5my-1"
})(["position:absolute;z-index:21;visibility:hidden;opacity:0;transition:all 0.3s ease-out;-webkit-transition:all 0.2s ease-out;-moz-transition:all 0.2s ease-out;-o-transition:all 0.2s ease-out;min-width:9.625rem;width:max-content;padding:10px;background-color:", ";color:", ";font-size:18px;border-radius:", ";line-height:1;&[data-position='top-start'],&[data-position='top'],&[data-position='top-end']{bottom:100%;left:0;transform:translateX(0%);&:before{width:0;border-bottom:0;border:8px solid transparent;border-top:8px solid ", ";left:1rem;bottom:0;transform:translate(0,100%);}};&[data-position='top-end']{left:auto;right:0;&:before{left:auto;right:1rem;}}&[data-position='top']{left:50%;transform:translateX(-50%);&:before{left:50%;transform:translate(-50%,100%);}}&[data-position='bottom']{right:-50%;transform:translateX(0%);};&[data-arrow='true']{&:before{content:'';position:absolute;display:block;}};&[data-position='bottom'],&[data-position='bottom-start'],&[data-position='bottom-end']{top:100%;left:50%;transform:translateX(-50%);&:before{width:0;border-top:0;border:0.6875rem solid transparent;border-bottom:0.6875rem solid ", ";left:50%;top:0;transform:translate(-50%,-100%);}};&[data-position='bottom-start']{left:0;transform:none;&:before{left:1rem;transform:translate(0,-100%);}};&[data-position='bottom-end']{left:auto;right:0;transform:none;&:before{right:1rem;left:auto;transform:translate(0,-100%);}};&[data-position='left-start'],&[data-position='left'],&[data-position='left-end']{top:0;right:100%;margin-right:1rem;&:before{width:0;border-right:0;border:0.6875rem solid transparent;border-left:0.6875rem solid ", ";left:100%;top:50%;transform:translate(0,-50%);}};&[data-position='left']{top:50%;transform:translateY(-50%);};&[data-position='left-end']{bottom:0;top:auto;};&[data-position='right-start'],&[data-position='right'],&[data-position='right-end']{top:0;left:100%;margin-left:1rem;&:before{width:0;border-left:0;border:0.6875rem solid transparent;border-right:0.6875rem solid ", ";right:100%;top:50%;transform:translate(0,-50%);}}&[data-position='right']{top:50%;transform:translateY(-50%);}&[data-position='right-end']{bottom:0;top:auto;};", ";", ""], props => props.backgroundColor, props => props.color, props => props.curved ? props.theme.borderCurved : '0px', props => props.backgroundColor, props => props.backgroundColor, props => props.backgroundColor, props => props.backgroundColor, props => props.withArrow && "\n  &:before {\n    width: 0;\n    left: 45%;\n    bottom: 0;\n    border: 1px solid transparent;\n    border-bottom: 0;\n    border-top: 8px solid black;\n    transform: translate(\n    calc(-50% + calc(1rem / 2)),\n      100%\n    );\n    \n  }\n  ", (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.layout, _styledSystem.space, _styledSystem.typography, _styledSystem.color));

exports.ToolTip = ToolTip;