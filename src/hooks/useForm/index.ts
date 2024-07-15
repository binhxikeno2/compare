import { FieldPath, FieldValues, RegisterOptions, useForm as useFormRoot, UseFormReturn } from 'react-hook-form';

import { UseFormProps } from './declare';

export const useForm = <TFieldValues extends FieldValues = FieldValues>(props: UseFormProps<TFieldValues>): UseFormReturn<TFieldValues> => {
  const { callBack, ...restProps } = props;

  const form = useFormRoot<TFieldValues>({ mode: 'onChange', reValidateMode: 'onChange', ...restProps });

  const { control, ...rest } = form;

  const register = <TFieldName extends FieldPath<TFieldValues>>(name: TFieldName, options?: RegisterOptions<TFieldValues, TFieldName>) => {
    const { onChange: onChangeCustom, ...rest } = control.register(name, options);

    return {
      ...rest,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange: (event: { target: any; type?: any }) => {
        callBack?.();

        return onChangeCustom(event);
      },
    };
  };

  return { ...rest, control: { ...control, register } };
};
