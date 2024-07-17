import { Button } from '@/components';
import { useTranslate } from '@/hooks';

export const DocsBtn = () => {
  const { t } = useTranslate('doc');

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      <Button type="contained" size="large">
        {t('test')}
      </Button>
      <Button type="outlined" size="middle">
        {t('test')}
      </Button>
      <Button type="danger" size="small">
        {t('test')}
      </Button>
      <Button type="info">{t('test')}</Button>
      <Button type="success">{t('test')}</Button>
      <Button type="text">{t('test')}</Button>
    </div>
  );
};
