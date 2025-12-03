export type LogoProps = {
  type: 'img' | 'svg';
  src?: string;
  svg?: React.ReactNode;
  size: 'slim' | 'regular' | 'medium' | 'large' | 'original';
  alt: string;
  url?: string;
};
