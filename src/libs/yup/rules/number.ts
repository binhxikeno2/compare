import { Translate } from 'next-translate';

import { ParamFnProps, ResultParamFnProps } from '../declare';

const validateNumber = (props: ParamFnProps): ResultParamFnProps => {
  const { t, field } = props;

  return {
    message: t ? t('validate:error.number', { field }) : '',
    callBack: (value) => !!value,
  };
};

const validateMin = (props: ParamFnProps): ResultParamFnProps => {
  const { t, field, length } = props;

  return {
    message: t ? t('validate:error.min-length', { field }) : '',
    callBack: (value) => (value ? String(value)?.length < (length || 0) : false),
  };
};

const validateMax = (props: ParamFnProps): ResultParamFnProps => {
  const { t, field, length } = props;

  return {
    message: t ? t('validate:error.max-length', { field }) : '',
    callBack: (value) => (value ? String(value)?.length > (length || 0) : false),
  };
};

export const numberRules: Record<string, (props: ParamFnProps) => ResultParamFnProps> = {
  isNumber: validateNumber,
  minLength: validateMin,
  maxLength: validateMax,
};

declare module 'yup' {
  interface NumberSchema {
    isNumber(props?: ParamFnProps & { t: Translate }): this;
    minLength(props?: ParamFnProps & { t: Translate }): this;
    maxLength(props?: ParamFnProps & { t: Translate }): this;
  }
}
