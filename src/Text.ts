import type { Property } from "csstype";
import { DomElement } from "neptune-htm";
import { COLORS, FONT_SIZE } from "./constants";

export class Text<
  T extends keyof HTMLElementTagNameMap = "div"
> extends DomElement<T> {
  constructor(tag: T = "div" as T) {
    super(tag ?? "div");

    this.size("md").color(COLORS.white);
  }

  size(value: TextSize) {
    this.dom.style.fontSize = FONT_SIZE[value];
    return this;
  }

  textAlign(value: Property.TextAlign) {
    this.dom.style.textAlign = value;
    return this;
  }

  fontWeight(value: Property.FontWeight) {
    this.dom.style.fontWeight = String(value);
    return this;
  }

  color(value: Property.Color) {
    this.dom.style.color = value;
    return this;
  }

  overflowEllipsis() {
    return this.style({
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    });
  }
}

export type TextSize = "xs" | "sm" | "md" | "lg";
