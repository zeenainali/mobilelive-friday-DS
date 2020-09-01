"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var Label = (0, _styledComponents.default)('label').withConfig({
  displayName: "label__Label",
  componentId: "qlewuy-0"
})({
  verticalAlign: 'middle',
  cursor: 'pointer'
}, (0, _styledSystem.compose)(_styledSystem.color, _styledSystem.space, _styledSystem.typography, _styledSystem.position, _styledSystem.layout));
var _default = Label;
exports.default = _default;