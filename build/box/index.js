"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

/**
 * Rebass Box with additional support
 */
var Box = (0, _styledComponents.default)('div').withConfig({
  displayName: "box__Box",
  componentId: "sc-12tpevk-0"
})({
  boxSizing: 'border-box'
}, (0, _styledSystem.compose)(_styledSystem.background, _styledSystem.border, _styledSystem.position, _styledSystem.shadow, _styledSystem.layout));
var _default = Box;
exports.default = _default;