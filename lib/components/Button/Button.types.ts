import React from 'react';
import { BaseComponent } from '../common.types';

export interface ButtonProps extends BaseComponent {
  type: 'button' | 'submit' | 'reset';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label: string;
  ariaLabel?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  customStyles?: React.CSSProperties;
}
