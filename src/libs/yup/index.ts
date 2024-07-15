import { Translate } from 'next-translate';
import * as YupRoot from 'yup';

import { numberRules } from './rules/number';
import { strRules } from './rules/string';

const rules: Record<string, Record<string, (props: ParamFnProps) => ResultParamFnProps>> = {
  string: strRules,
  number: numberRules,
};

export type ParamFnProps = {
  field?: string;
  messages?: string;
  t?: Translate;
};

export type ResultParamFnProps = {
  message: string;
  callBack: <T>(value?: T) => boolean;
};

const schema = () => {
  const schema = { ...YupRoot };

  Object.keys(rules).forEach((key) => {
    if (Object.keys(rules[key])?.length) {
      Object.keys(rules[key]).forEach((nameRule) => {
        switch (key) {
          case 'string':
            schema.addMethod<YupRoot.StringSchema>(YupRoot.string, nameRule, function (props: ParamFnProps) {
              const result = rules[key][nameRule]({ ...props });
              const { message, callBack } = result;

              return this.test(nameRule, message, function (value) {
                return callBack(value);
              });
            });
            break;

          case 'number':
            schema.addMethod<YupRoot.NumberSchema>(YupRoot.number, nameRule, function (props: ParamFnProps) {
              const result = rules[key][nameRule]({ ...props });
              const { message, callBack } = result;

              return this.test(nameRule, message, function (value) {
                return callBack(value);
              });
            });
            break;
        }
      });
    }
  });

  return {
    ...schema,
    validate: <T extends object>(data: Partial<Record<keyof T, YupRoot.AnySchema>>) =>
      schema.object<Partial<Record<keyof T, YupRoot.AnySchema>>>({ ...data }),
  };
};

export const yup = schema();
