import { PropsWithChildren } from 'react';

import style from '@/styles/layout/private/index.module.scss';

import { SideBarPrivate } from './sideBar';
import { TopBarPrivate } from './topBar';

export const PrivateLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={style['private-layout']}>
      <div className={style['private-layout__menu']}>
        <SideBarPrivate />
      </div>
      <div className={style['private-layout__content']}>
        <div className={style['private-layout__content__top']}>
          <TopBarPrivate />
        </div>
        <div className={style['private-layout__content__inner']}>
          <div className={style['private-layout__content__wrapper']}>{children}</div>
        </div>
      </div>
    </div>
  );
};
