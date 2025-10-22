import { InputColor } from "neptune-htm";
import { BORDER_RADIUS } from "./constants";

export class ColorControl extends InputColor {
  constructor() {
    super();

    this.style({
      appearance: "none",
      border: "1px solid #000",
      display: "block",
    });

    this.css("::-webkit-color-swatch-wrapper", {
      appearance: "none",
      padding: 0,
      border: 0,
    });

    this.css("::-webkit-color-swatch", {
      appearance: "none",
      border: 0,
    });

    this.size("md");
  }

  size(size: ColorControlSize) {
    return this.style({
      width: SIZE_MAP[size],
      height: SIZE_MAP[size],
      borderRadius: BORDER_RADIUS_MAP[size],
    });
  }
}

const SIZE_MAP = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
};

const BORDER_RADIUS_MAP = {
  xs: BORDER_RADIUS.sm,
  sm: BORDER_RADIUS.sm,
  md: BORDER_RADIUS.sm,
  lg: BORDER_RADIUS.md,
};

export type ColorControlSize = "xs" | "sm" | "md" | "lg";
