"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usage = exports.Tooltips = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _styledComponents = require("styled-components");

var _ = _interopRequireDefault(require(".."));

var _css = require("../css");

var _css2 = require("./css");

var _typography = _interopRequireDefault(require("../../typography"));

var _Input = _interopRequireDefault(require("../../Input"));

var _Button = _interopRequireDefault(require("../../Button"));

var _defaultTheme = _interopRequireDefault(require("../../theme/defaultTheme"));

var _globalStyles = _interopRequireDefault(require("../../theme/globalStyles"));

require("../../icomoon_icons.css");

var _styledComponents2 = require("rebass/styled-components");

// import DeleteIcon from '../src/icons/delete.svg'
// import Favorite from '../src/icons/favorite.svg';
// import AddPhoto from '../src/icons/add_a_photo.svg';
var _default = {
  title: 'Tooltip',
  component: _.default
};
exports.default = _default;

var Tooltips = () => /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: _defaultTheme.default
}, /*#__PURE__*/_react.default.createElement(_globalStyles.default, null), /*#__PURE__*/_react.default.createElement(_typography.default, {
  variant: "H5",
  ml: 10,
  mb: 20
}, "Tooltips"), /*#__PURE__*/_react.default.createElement(_css2.Wrapper, null, /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "topLeft"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Start",
  arrow: true,
  size: "big",
  position: "top-start",
  distance: 30
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Top Start"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "topCenter"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Top",
  arrow: true,
  size: "big",
  position: "top",
  distance: 30
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Top"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "topRight"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "End",
  arrow: true,
  size: "big",
  position: "top-end",
  distance: 30
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Top End"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "leftTop"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "this start tooltip",
  arrow: true,
  size: "big",
  position: "left-start"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Left Start"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "leftCenter"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "left",
  arrow: true,
  size: "big",
  position: "left"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Left"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "leftBottom"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "End",
  arrow: true,
  size: "big",
  position: "left-end"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Left End"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "rightTop"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Start",
  arrow: true,
  size: "big",
  position: "right-start"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Right Start"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "rightCenter"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Right",
  arrow: true,
  size: "big",
  position: "right"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Right"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "rightBottom"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "End",
  arrow: true,
  size: "big",
  position: "right-end"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Right End"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "bottomLeft"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Left",
  arrow: true,
  size: "big",
  distance: 30,
  position: "bottom-start"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Bottom Start"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "bottomCenter"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Bottom",
  arrow: true,
  size: "big",
  distance: 30,
  position: "bottom"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Bottom"))), /*#__PURE__*/_react.default.createElement(_css2.InnerWrap, {
  className: "bottomRight"
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "End",
  arrow: true,
  size: "big",
  distance: 30,
  position: "bottom-end"
}, /*#__PURE__*/_react.default.createElement(_Button.default, {
  variant: "primary"
}, "Bottom End")))));

exports.Tooltips = Tooltips;

var Usage = () => /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
  theme: _defaultTheme.default
}, /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, {
  p: 20
}, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_typography.default, null, "This is Tooltip title", /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Click for details",
  arrow: true,
  size: "small",
  position: "bottom-end"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "icon-info_24px",
  style: {
    marginLeft: '5px',
    color: '#F48245'
  }
})))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Tooltip on some text",
  arrow: true,
  size: "small",
  position: "top-start"
}, /*#__PURE__*/_react.default.createElement(_typography.default, null, "This is Tooltip title"))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Some more info",
  arrow: true,
  size: "small",
  position: "bottom"
}, /*#__PURE__*/_react.default.createElement("span", {
  className: "icon-info_24px",
  style: {
    fontSize: '18px',
    color: '#2874A4'
  }
})))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Flex, {
  p: 20
}, /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  width: 1 / 3
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "You can search anything",
  size: "big",
  position: "top-start"
}, /*#__PURE__*/_react.default.createElement(_Input.default, {
  width: "100%",
  type: "text",
  value: "",
  placeholder: "",
  label: "Search",
  id: "search",
  leftIcon: "icon-search_24px"
}))), /*#__PURE__*/_react.default.createElement(_styledComponents2.Box, {
  width: 1 / 3,
  textAlign: "center",
  ml: 25
}, /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Doe's Profile",
  arrow: true,
  distance: 60,
  position: "top"
}, /*#__PURE__*/_react.default.createElement(_styledComponents2.Image, {
  src: require('./assets/avatar1.svg'),
  mr: 3
})), /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Jane's Profile",
  arrow: true,
  distance: 60,
  position: "top"
}, /*#__PURE__*/_react.default.createElement(_styledComponents2.Image, {
  src: require('./assets/avatar2.svg')
})), /*#__PURE__*/_react.default.createElement(_.default, {
  labelText: "Joe's Profile",
  arrow: true,
  distance: 60,
  position: "top"
}, /*#__PURE__*/_react.default.createElement(_styledComponents2.Image, {
  src: require('./assets/avatar3.svg'),
  ml: 3
})))));

exports.Usage = Usage;