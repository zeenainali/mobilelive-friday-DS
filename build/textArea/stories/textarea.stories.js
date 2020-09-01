"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFields = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = require("styled-components");

var _ = _interopRequireDefault(require(".."));

var _typography = _interopRequireDefault(require("../../typography"));

var _label = _interopRequireDefault(require("../../label"));

var _defaultTheme = _interopRequireDefault(require("../../theme/defaultTheme"));

var _globalStyles = _interopRequireDefault(require("../../theme/globalStyles"));

require("../../icomoon_icons.css");

var _styledComponents2 = require("rebass/styled-components");

// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';
var _default = {
  title: 'Text Area',
  component: _.default
};
exports.default = _default;

var TextFields = () => /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: _defaultTheme.default
}, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Text Area (Icon Inside)"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  value: "",
  label: "",
  validationIcon: "icon-check_circle_24px",
  isValid: true,
  iconPosition: "inside",
  placeholder: "Please Enter Details",
  id: "Default"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  value: "",
  label: "",
  validationIcon: "icon-check_circle_24px",
  isValid: false,
  iconPosition: "inside",
  placeholder: "Please Enter Details",
  id: "Default"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  value: "",
  error: true,
  validationIcon: "icon-info_24px",
  isValid: false,
  iconPosition: "inside",
  errorMessage: "This field is required",
  placeholder: "Please Enter Details",
  id: "Default"
}))), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Text Area (Icon Outside)"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  value: "",
  label: "",
  validationIcon: "icon-check_circle_24px",
  isValid: true,
  iconPosition: "outside",
  placeholder: "Please Enter Details",
  id: "Default"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  value: "",
  label: "",
  validationIcon: "icon-check_circle_24px",
  isValid: false,
  iconPosition: "outside",
  placeholder: "Please Enter Details",
  id: "Default"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  value: "",
  error: true,
  validationIcon: "icon-info_24px",
  isValid: false,
  iconPosition: "outside",
  errorMessage: "This field is required",
  placeholder: "Please Enter Details",
  id: "Default"
}))));

exports.TextFields = TextFields;