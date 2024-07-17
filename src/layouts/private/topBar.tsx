import { UserOutlined } from '@ant-design/icons';

import { useTranslate } from '@/hooks';
import style from '@/styles/layout/private/top-bar.module.scss';

export const TopBarPrivate = () => {
  const { t } = useTranslate('common');

  return (
    <div className={style['top-bar-private']}>
      <ul className={style['top-bar-private__menu']}>
        <li className={style['top-bar-private__menu__item']}>{t('side-bar.menu.home')}</li>
        <li className={style['top-bar-private__menu__item']}>{t('side-bar.menu.home')}</li>
      </ul>
      <UserOutlined className="text-white" />
    </div>
  );
};
