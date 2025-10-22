import { InputText } from "neptune-htm";
import { BORDER_RADIUS, COLORS, FONT_SIZE, SPACING } from "./constants";

export class TextControl extends InputText {
  constructor() {
    super();

    this.style({
      border: "none",
      width: "100%",
    })
      .size("md")
      .bgColor(COLORS.black)
      .color(COLORS.white);
  }

  size(value: TextControlSize) {
    return this.style({
      padding: `${PADDING_MAP[value].y} ${PADDING_MAP[value].x}`,
      fontSize: FONT_SIZE_MAP[value],
      borderRadius: BORDER_RADIUS_MAP[value],
    });
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

export type TextControlSize = "xs" | "sm" | "md" | "lg";
