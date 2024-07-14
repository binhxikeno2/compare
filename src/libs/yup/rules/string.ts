import { Translate } from 'next-translate';

import { PATTERN_REGEX_EMAIL } from '@/constants';

import { ParamFnProps, ResultParamFnProps } from '../declare';

const validateRequired = (props: ParamFnProps): ResultParamFnProps => {
  const { t, field } = props;

  return {
    message: t ? t('validate:error.required', { field }) : '',
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

const validateEmail = (props: ParamFnProps): ResultParamFnProps => {
  const { t, field } = props;

  return {
    message: t ? t('validate:error.email', { field }) : '',
    callBack: (value) => PATTERN_REGEX_EMAIL.test(String(value)),
  };
};

export const strRules: Record<string, (props: ParamFnProps) => ResultParamFnProps> = {
  isRequired: validateRequired,
  minLength: validateMin,
  maxLength: validateMax,
  isEmailCustom: validateEmail,
};

declare module 'yup' {
  interface StringSchema {
    isRequired(props?: ParamFnProps & { t: Translate }): this;
    minLength(props?: ParamFnProps & { t: Translate }): this;
    maxLength(props?: ParamFnProps & { t: Translate }): this;
    isEmailCustom(props?: ParamFnProps & { t: Translate }): this;
  }
}
