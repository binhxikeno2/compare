import { Alert } from '@/components';
import { useTranslate } from '@/hooks';

export const DocsAlert = () => {
  const { t } = useTranslate('doc');

  return (
    <div className="mt-4 flex flex-wrap gap-4">
      <Alert type="success" closable message={t('longText')} />
      <Alert type="info" closable message={t('longText')} />
      <Alert type="warning" closable message={t('longText')} />
      <Alert type="error" message={t('longText')} />
    </div>
  );
};
