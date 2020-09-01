"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSpring = require("react-spring");

var _reactTippy = require("react-tippy");

require("react-tippy/dist/tippy.css");

// import { TooltipWrapper, ToolTip } from './css';
// import './css.css'
var Tooltip = (_ref) => {
  var {
    position,
    arrow,
    arrowSize,
    animation,
    backgroundColor,
    color,
    children,
    delay,
    distance,
    hideDelay,
    labelText,
    tabIndex,
    theme,
    size
  } = _ref,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["position", "arrow", "arrowSize", "animation", "backgroundColor", "color", "children", "delay", "distance", "hideDelay", "labelText", "tabIndex", "theme", "size"]);

  _react.default.useEffect(() => {
    if (theme === 'light') {
      require('./css.css');
    }
  }, []);

  return /*#__PURE__*/_react.default.createElement(_reactTippy.Tooltip, {
    title: labelText,
    position: position,
    arrow: arrow,
    arrowSize: arrowSize,
    delay: delay,
    distance: distance,
    hideDelay: hideDelay,
    size: size,
    interactive: true,
    trigger: "mouseenter focus" // trigger="click"
    ,
    tabIndex: tabIndex // theme={theme}

  }, children);
};

Tooltip.propTypes = {
  position: _propTypes.default.oneOf(['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']),
  arrow: _propTypes.default.bool,
  arrowSize: _propTypes.default.oneOf(['small', 'regular', 'big']),
  animation: _propTypes.default.oneOf(['shift', 'perspective', 'fade', 'scale', 'none']),
  backgroundColor: _propTypes.default.string,
  color: _propTypes.default.string,
  distance: _propTypes.default.number,
  labelText: _propTypes.default.string,
  delay: _propTypes.default.string,
  hideDelay: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  theme: _propTypes.default.oneOf(['light', 'dark', 'transparent'])
};
Tooltip.defaultProps = {
  backgroundColor: '',
  color: '',
  position: 'bottom',
  arrow: false,
  arrowSize: 'regular',
  theme: 'dark'
};
var _default = Tooltip;
exports.default = _default;