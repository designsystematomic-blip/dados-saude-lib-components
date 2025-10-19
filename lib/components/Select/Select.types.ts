import { BaseComponent } from "../common.types";

export interface SelectProps extends BaseComponent {
  id: string;
  ariaLabel: string;
  labelId: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  style?: React.CSSProperties;
	isDisabled?: boolean;
	defaultValue?: string;
};
