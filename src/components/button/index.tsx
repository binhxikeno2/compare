import { Button as ButtonAntd, ButtonProps as ButtonAntdProps } from 'antd';
import clsx from 'clsx';

import style from '@/styles/components/button.module.scss';

// Binding style class
type TypeButton = 'contained' | 'outlined' | 'danger' | 'info' | 'success' | 'text';

type ButtonProps = Omit<ButtonAntdProps, 'type'> & {
  type?: TypeButton;
};

export const Button = ({ className, size, type = 'contained', ...rest }: ButtonProps) => {
  return (
    <ButtonAntd {...rest} className={clsx(style['button-app'], style[`button-app__type__${type}`], style[`button-app__size__${size}`], className)} />
  );
};
