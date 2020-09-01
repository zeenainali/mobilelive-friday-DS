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

var _defaultTheme = _interopRequireDefault(require("../../theme/defaultTheme"));

var _globalStyles = _interopRequireDefault(require("../../theme/globalStyles"));

require("../../icomoon_icons.css");

var _styledComponents2 = require("rebass/styled-components");

// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';
var _default = {
  title: 'Input',
  component: _.default
};
exports.default = _default;

var TextFields = () => /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: _defaultTheme.default
}, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Basic Input Fields"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "250px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "email",
  value: "",
  label: "",
  placeholder: "Default Input",
  id: "Default"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "300px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "email",
  value: "",
  placeholder: "Input Curved",
  id: "DefaultCurved",
  borderType: "curved"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "320px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "Input Rounded",
  id: "DefaultRounded",
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10,
  width: "330px"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "Botton Bordered",
  id: "bottombordered",
  withBottomBorderOnly: true
}))), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Input Fields With Labels"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "email",
  value: "",
  placeholder: "Default",
  label: "Default",
  id: "Default"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "email",
  value: "",
  placeholder: "Default Curved",
  label: "Default Curved",
  id: "DefaultCurved",
  borderType: "curved"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "Default Rounded",
  label: "Default Rounded",
  id: "DefaultRounded",
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "Botton Bordered",
  label: "Bottom Bordered",
  id: "BottomBordered",
  withBottomBorderOnly: true
}))), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Input Fields With Icons"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "text",
  value: "",
  placeholder: "",
  label: "Search",
  id: "search",
  leftIcon: "icon-search_24px"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "text",
  value: "",
  placeholder: "",
  label: "Clear",
  id: "clear",
  rightIcon: "icon-clear_24px",
  borderType: "curved"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "",
  label: "Default Rounded",
  leftIcon: "icon-search_24px",
  rightIcon: "icon-clear_24px",
  id: "DefaultRounded",
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "Botton Bordered",
  label: "Bottom Bordered",
  id: "BottomBordered",
  leftIcon: "icon-search_24px",
  rightIcon: "icon-clear_24px",
  withBottomBorderOnly: true
}))), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Input Fields With Error States"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "text",
  value: "",
  placeholder: "",
  label: "Search",
  id: "search",
  validationIcon: "icon-check_circle_24px",
  isValid: false,
  leftIcon: "icon-search_24px"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "text",
  value: "",
  placeholder: "",
  label: "Clear",
  id: "clear",
  validationIcon: "icon-check_circle_24px",
  showErrorMessage: true,
  errorMessage: "Error Message",
  isValid: true,
  rightIcon: "icon-clear_24px",
  borderType: "curved"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "",
  label: "Default Rounded",
  error: true,
  errorMessage: "Error Message",
  id: "DefaultRounded",
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "Botton Bordered",
  label: "Bottom Bordered",
  id: "BottomBordered",
  error: true,
  errorMessage: "Error Message",
  rightIcon: "icon-clear_24px",
  withBottomBorderOnly: true
}))), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10
}, "Disabled Input Fields"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "text",
  value: "",
  placeholder: "",
  label: "Search",
  id: "search",
  disabled: true
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "text",
  value: "",
  placeholder: "",
  label: "Clear",
  id: "clear",
  disabled: true,
  borderType: "curved"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  placeholder: "",
  label: "Default Rounded",
  id: "DefaultRounded",
  disabled: true,
  borderType: "rounded"
})), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  m: 10
}, /*#__PURE__*/_react.default.createElement(_.default, {
  type: "Email",
  value: "",
  label: "Bottom Bordered",
  id: "BottomBordered",
  disabled: true,
  withBottomBorderOnly: true
}))));

exports.TextFields = TextFields;