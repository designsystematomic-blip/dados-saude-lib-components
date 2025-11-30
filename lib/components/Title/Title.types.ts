import { BaseComponent } from "../common.types";

export interface TitleProps extends BaseComponent {
  content: string;
  style?: React.CSSProperties;
};
