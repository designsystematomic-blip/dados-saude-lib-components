import { BaseComponent } from "../common.types";

export interface TextProps extends BaseComponent {
  content?: string;
  children?: React.ReactNode;
};
