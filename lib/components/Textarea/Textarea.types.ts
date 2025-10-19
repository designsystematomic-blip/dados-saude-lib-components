import { BaseComponent } from "../common.types";

export interface TextareaProps extends BaseComponent {
  ariaLabel: string;
  id: string;
	resize: boolean;
  hasError?: boolean;
  height?: string;
  label: string;
  labelId: string;
  maxTextLength?: number;
  placeholder: string;
  style?: React.CSSProperties;
  color?: string;
};
