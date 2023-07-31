import { InputHTMLAttributes } from "react";

export type IInputHeight = "small" | "medium" | "big"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  inputHeight?: IInputHeight;
}
