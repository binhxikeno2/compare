import { Input as InputAntd, InputProps as InputAntdProps, InputRef } from 'antd';
import clsx from 'clsx';
import React from 'react';

import style from '@/styles/components/input.module.scss';

type InputProps = InputAntdProps & {
  //
};

const Input = React.forwardRef<InputRef, InputProps>(({ className, ...rest }, ref) => {
  return <InputAntd {...rest} ref={ref} className={clsx(style['input-app'], className)} />;
});

Input.displayName = 'Input';

export { Input };
