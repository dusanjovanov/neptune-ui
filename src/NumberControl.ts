import { InputNumber } from "neptune-htm";
import { BORDER_RADIUS, COLORS, FONT_SIZE, SPACING } from "./constants";

export class NumberControl extends InputNumber {
  constructor() {
    super();

    this.style({
      border: "none",
      backgroundColor: COLORS.black,
      color: COLORS.white,
      width: "100%",
      appearance: "none",
    }).size("md");
  }

  size(value: NumberControlSize) {
    return this.style({
      padding: `${PADDING_MAP[value].y} ${PADDING_MAP[value].x}`,
      fontSize: FONT_SIZE_MAP[value],
      borderRadius: BORDER_RADIUS_MAP[value],
    });
  }

  hideButtons() {
    this.css("::-webkit-outer-spin-button", {
      appearance: "none",
    });

    this.css("::-webkit-inner-spin-button", {
      appearance: "none",
    });

    return this;
  }

  showButtons() {
    this.css("::-webkit-outer-spin-button", {
      appearance: "auto",
    });

    this.css("::-webkit-inner-spin-button", {
      appearance: "auto",
    });

    return this;
  }

  setButtonPresence(value: boolean) {
    return value ? this.showButtons() : this.hideButtons();
  }
}

const PADDING_MAP = {
  xs: {
    y: SPACING[0.5],
    x: SPACING[0.5],
  },
  sm: {
    y: SPACING[0.5],
    x: SPACING[0.5],
  },
  md: {
    y: SPACING[0.5],
    x: SPACING[1],
  },
  lg: {
    y: SPACING[1.5],
    x: SPACING[2],
  },
};

const FONT_SIZE_MAP = {
  xs: FONT_SIZE.xs,
  sm: FONT_SIZE.sm,
  md: FONT_SIZE.sm,
  lg: FONT_SIZE.md,
};

const BORDER_RADIUS_MAP = {
  xs: BORDER_RADIUS.sm,
  sm: BORDER_RADIUS.sm,
  md: BORDER_RADIUS.sm,
  lg: BORDER_RADIUS.md,
};

export type NumberControlSize = "xs" | "sm" | "md" | "lg";
