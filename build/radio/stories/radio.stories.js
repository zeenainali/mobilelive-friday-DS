"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radios = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = require("styled-components");

var _ = _interopRequireDefault(require(".."));

var _typography = _interopRequireDefault(require("../../typography"));

var _defaultTheme = _interopRequireDefault(require("../../theme/defaultTheme"));

var _globalStyles = _interopRequireDefault(require("../../theme/globalStyles"));

require("../../icomoon_icons.css");

var _styledComponents2 = require("rebass/styled-components");

// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';
var _default = {
  title: 'Radio',
  component: _.default
};
exports.default = _default;

var Radios = () => /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: _defaultTheme.default
}, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Radios"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  color: "black",
  variant: "unchecked"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  ml: 21
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  color: "black",
  variant: "checked"
}))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  color: "black",
  variant: "unchecked",
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  ml: 21
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  ml: "20px",
  color: "black",
  variant: "checked",
  borderType: "rounded"
}))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "unchecked"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "checked"
}))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "unchecked",
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "checked",
  borderType: "rounded"
}))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "unchecked",
  error: true
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "checked",
  error: true
}))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "unchecked",
  error: true,
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  name: "Radio",
  value: "Radio",
  label: "Radio",
  color: "black",
  variant: "checked",
  error: true,
  borderType: "rounded"
}))));

exports.Radios = Radios;