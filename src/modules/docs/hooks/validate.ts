import { Translate } from 'next-translate';

import { ExampleReqDto } from '@/dto/test/request';
import { yup } from '@/libs/yup';

export const schemaExample = (t: Translate) =>
  yup.validate<ExampleReqDto>({
    email: yup.string().isRequired({ field: t('label.email'), t }),
  });
