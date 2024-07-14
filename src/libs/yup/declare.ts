import { Translate } from 'next-translate';

export type ParamFnProps = {
  field?: string;
  messages?: string;
  t?: Translate;
  length?: number;
};

export type ResultParamFnProps = {
  message: string;
  callBack: <T>(value?: T) => boolean;
};
