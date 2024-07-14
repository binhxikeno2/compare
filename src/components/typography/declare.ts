// Binding with class name scss
export type TypographySize = 'extra-large' | 'large' | 'medium' | 'normal' | 'body' | 'caption' | 'small' | 'minion';

export type TypographyProps = {
  size?: TypographySize;
  children: React.ReactNode;
  bold?: boolean;
  align?: 'left' | 'right' | 'center';
};
