import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";
import PropTypes from 'prop-types';

declare module "rn-range-slider" {
  export type SliderProps = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    minRange: PropTypes.number,
    step: PropTypes.number.isRequired,
    renderThumb: PropTypes.func.isRequired,
    low: PropTypes.number,
    high: PropTypes.number,
    allowLabelOverflow: PropTypes.bool,
    disableRange: PropTypes.bool,
    disabled: PropTypes.bool,
    floatingLabel: PropTypes.bool,
    renderLabel: PropTypes.func,
    renderNotch: PropTypes.func,
    renderRail: PropTypes.func.isRequired,
    renderRailSelected: PropTypes.func.isRequired,
    onValueChanged: PropTypes.func,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
  };

  export default class RangeSlider extends Component<SliderProps> {
   // open(): void;
   // close(): void;
  }
}
