import { LabelHTMLAttributes } from "react";

type TextComponentType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "strong"
  | "em"
  | "ul"
  | "ol"
  | "li"
  | "a"
  | "label"
  | "button";

export interface TextProps
  extends LabelHTMLAttributes<HTMLElement | HTMLLabelElement> {
  className?: string;
  color?: "error" | "light" | "dark" | "grey";
  fz?: "s16" | "s20" | "s36" | "s40";
  component?: TextComponentType;
}
