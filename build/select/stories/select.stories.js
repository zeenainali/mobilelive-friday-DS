"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Selects = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = require("styled-components");

var _ = _interopRequireDefault(require(".."));

var _option = _interopRequireDefault(require("../../option"));

var _typography = _interopRequireDefault(require("../../typography"));

var _defaultTheme = _interopRequireDefault(require("../../theme/defaultTheme"));

var _globalStyles = _interopRequireDefault(require("../../theme/globalStyles"));

require("../../icomoon_icons.css");

var _styledComponents2 = require("rebass/styled-components");

// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';
var _default = {
  title: 'Select',
  component: _.default
};
exports.default = _default;

var Selects = () => /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: _defaultTheme.default
}, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Select"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  value: "",
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  value: "",
  borderType: "curved",
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  value: "",
  borderType: "rounded",
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue")))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  rightIcon: "icon-clear_24px",
  value: "",
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  leftIcon: "icon-today_24px",
  value: "",
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  rightIcon: "icon-clear_24px",
  leftIcon: "icon-today_24px",
  value: "",
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue")))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  rightIcon: "icon-clear_24px",
  value: "",
  withBorderBottomOnly: true,
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  leftIcon: "icon-today_24px",
  value: "",
  withBorderBottomOnly: true,
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  rightIcon: "icon-clear_24px",
  leftIcon: "icon-today_24px",
  value: "",
  withBorderBottomOnly: true,
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue")))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  rightIcon: "icon-clear_24px",
  value: "",
  validationIcon: "icon-check_circle_24px",
  isValid: true,
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  leftIcon: "icon-today_24px",
  value: "",
  validationIcon: "icon-check_circle_24px",
  isValid: true,
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "select",
  placeholder: "select on option",
  chevron: "icon-keyboard_arrow_down_24px",
  rightIcon: "icon-clear_24px",
  leftIcon: "icon-today_24px",
  value: "",
  validationIcon: "icon-check_circle_24px",
  isValid: false,
  withBorderBottomOnly: true,
  onChange: e => setSelected(e.target.value),
  color: "black"
}, /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "React"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Angular"), /*#__PURE__*/_react.default.createElement(_option.default, {
  value: ""
}, "Vue")))));

exports.Selects = Selects;