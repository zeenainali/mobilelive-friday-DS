"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleButton = exports.default = void 0;

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
  title: 'Toggle Button',
  component: _.default
};
exports.default = _default;

var ToggleButton = () => {
  var [isOn, setIsOn] = _react.default.useState(false);

  var [isOnLabeled, setIsOnLabeled] = _react.default.useState(false);

  var [toggle, setToggle] = _react.default.useState(false);

  var [toggleLabeled, setToggleLabeled] = _react.default.useState(false);

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _defaultTheme.default
  }, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: "H5",
    ml: 10
  }, "Toggle Buttons"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1",
    size: "lg",
    isToggled: isOn,
    onChange: () => {
      setIsOn(!isOn);
    }
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1",
    size: "lg",
    isToggled: true
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt2",
    size: "sm",
    isToggled: toggle,
    onChange: () => {
      setToggle(!toggle);
    }
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1",
    size: "sm",
    isToggled: true
  }))), /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: "H5",
    ml: 10
  }, "Toggle Buttons With Label"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1Labeled",
    size: "lg",
    styles: {
      toggledOffBgColor: '#B3B3B3',
      toggledOffBorderColor: '#B3B3B3',
      toggledOnBgColor: '#34A84D',
      toggledOnBorderColor: '#34A84D',
      switchOnColor: 'white',
      switchOffColor: 'white'
    },
    isToggled: isOnLabeled,
    label: isOnLabeled ? "ON" : "OFF",
    onChange: () => {
      setIsOnLabeled(!isOnLabeled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1",
    size: "lg",
    styles: {
      toggledOffBgColor: '#34A84D',
      toggledOffBorderColor: '#B3B3B3',
      toggledOnBorderColor: '#34A84D',
      switchOnColor: 'white',
      switchOffColor: 'white'
    },
    label: "ON",
    isToggled: true
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt2Labled",
    size: "sm",
    isToggled: toggleLabeled,
    label: toggleLabeled ? "ON" : "OFF",
    onChange: () => {
      setToggleLabeled(!toggleLabeled);
    }
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1error",
    size: "sm",
    isToggled: true,
    label: "ON"
  }))), /*#__PURE__*/_react.default.createElement(_typography.default, {
    variant: "H5",
    ml: 10
  }, "Toggle Buttons Error States"), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, null, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1Labelederror",
    size: "lg",
    error: true,
    isToggled: false,
    label: "OFF"
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1",
    size: "lg",
    error: true,
    label: "ON",
    isToggled: true
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt2Lablederror",
    error: true,
    size: "sm",
    isToggled: false,
    label: "OFF"
  })), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
    p: 10,
    width: 1 / 4
  }, /*#__PURE__*/_react.default.createElement(_.default, {
    id: "bt1error",
    error: true,
    size: "sm",
    isToggled: true,
    label: "ON"
  }))));
};

exports.ToggleButton = ToggleButton;