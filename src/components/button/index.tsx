import { Button as ButtonAntd, ButtonProps as ButtonAntdProps } from 'antd';
import clsx from 'clsx';

import style from '@/styles/components/button.module.scss';

type ButtonProps = ButtonAntdProps & {
  //
};

export const Button = ({ className, ...rest }: ButtonProps) => {
  return <ButtonAntd {...rest} className={clsx(style['button-app'], className)} />;
};
