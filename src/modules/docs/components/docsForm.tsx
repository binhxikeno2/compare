'use client';

import { Button, Input, TheForm, Typography } from '@/components';
import { ExampleReqDto } from '@/dto/test/request';
import { useForm, useTranslate } from '@/hooks';

export const DocsForm = () => {
  const { t } = useTranslate('doc');
  const form = useForm<ExampleReqDto>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: ExampleReqDto) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div className="py-2 max-w-[400px]">
      <Typography bold align="center" size="medium">
        {'Form Document'}
      </Typography>
      <div className="mt-2">
        <TheForm formState={form} onSubmit={onSubmit}>
          <TheForm.FormItem<ExampleReqDto> required colon label={t('label.email')} name="email" render={<Input />} />
          <TheForm.FormItem<ExampleReqDto> required colon label={t('label.password')} name="password" render={({ field }) => <Input {...field} />} />
          <Button htmlType="submit">{t('btn.submit')}</Button>
        </TheForm>
      </div>
    </div>
  );
};
