import { DashboardOutlined, GlobalOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { useMemo } from 'react';

import { Typography } from '@/components';
import { useTranslate } from '@/hooks';
import style from '@/styles/layout/private/side-bar.module.scss';

export type TMenuItem = {
  label: React.ReactNode;
  icon: React.ReactNode;
};

export const SideBarPrivate = () => {
  const { t } = useTranslate('common');

  const menuData = useMemo(
    (): TMenuItem[] => [
      {
        label: t('side-bar.menu.home'),
        icon: <DashboardOutlined />,
      },
      {
        label: t('side-bar.menu.place'),
        icon: <GlobalOutlined />,
      },
      {
        label: t('side-bar.menu.user'),
        icon: <UsergroupAddOutlined />,
      },
    ],
    []
  );

  return (
    <div className={style['side-bar-private']}>
      <div className={style['side-bar-private__logo']}>{'LOGO'}</div>
      <div className={style['side-bar-private__menu']}>
        <ul className={style['side-bar-private__menu__list']}>
          {menuData?.map((item, index) => (
            <li key={index} className={style['side-bar-private__menu__list__item']}>
              {item?.icon}
              <Typography size="caption">{item?.label}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
