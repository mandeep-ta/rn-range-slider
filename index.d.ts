import { Component } from "react";

declare module "rn-range-slider" {
  export type SliderProps = {
    min: number,
    max: number,
    minRange?: number,
    step: number,
    renderThumb: () => void,
    renderThumbHigh: () => void,
    low?: number,
    high?: number,
    allowLabelOverflow?: boolean,
    disableRange?: boolean,
    disabled?: boolean,
    floatingLabel?: boolean,
    renderLabel?: () => void,
    renderNotch?: () => void,
    renderRail: () => void,
    renderRailSelected: () => void,
    onValueChanged?: (low: number, high: number) => void,
    onTouchStart?: () => void,
    onTouchEnd?: () => void,
  };

  export default class RangeSlider extends Component<SliderProps> {}
}
