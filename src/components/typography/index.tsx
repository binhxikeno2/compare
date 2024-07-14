import { Typography as TypographyAntd } from 'antd';
import clsx from 'clsx';

import style from '@/styles/components/typography.module.scss';

import { TypographyProps, TypographySize } from './declare';

const defaultSetting = {
  size: 'normal' as TypographySize,
};

const getClassBinding = (key: string) => {
  return style[`typography-root__${key}`];
};

const Typography = ({ children, bold, size = defaultSetting.size, align }: TypographyProps) => {
  return (
    <TypographyAntd className={clsx(bold && 'font-bold', align && `text-${align}`, style['typography-root'], getClassBinding(`size__${size}`))}>
      {children}
    </TypographyAntd>
  );
};

const Paragraph = ({ children, bold, size = defaultSetting.size, align }: TypographyProps) => {
  return (
    <TypographyAntd.Paragraph
      className={clsx(bold && 'font-bold', align && `text-${align}`, style['typography-root'], getClassBinding(`size__${size}`))}
    >
      {children}
    </TypographyAntd.Paragraph>
  );
};

Typography.Paragraph = Paragraph;

export { Typography };
