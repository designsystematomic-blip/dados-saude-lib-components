import type { InputHTMLAttributes } from "react";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'name'> {
  id?: string;
  name?: string;
  ariaLabel?: string;
  labelId?: string;
  label?: string;
  showLabel?: boolean;
  placeholder?: string;
  description?: string;
  height?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "date" | "time" | "datetime-local";
  maxTextLength?: number;
  hasError?: boolean;
  handleClear?: () => void;
}