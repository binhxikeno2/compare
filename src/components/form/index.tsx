import { Form } from 'antd';
import { FieldValues, FormProvider, useFormContext } from 'react-hook-form';

import { TheFormProps } from './declare';
import { FormItem as FormItemCpn } from './formItem';

const TheForm = <TFieldValues extends FieldValues = FieldValues>({
  className,
  children,
  formState,
  onSubmit,
  ...rest
}: TheFormProps<TFieldValues>) => {
  return (
    <Form {...rest} className={className} onFinish={onSubmit ? formState.handleSubmit(onSubmit) : undefined}>
      <FormProvider {...formState}>{children}</FormProvider>
    </Form>
  );
};

TheForm.FormItem = FormItemCpn;

export const useFormState = <TFieldValues extends FieldValues = FieldValues>() => {
  return useFormContext<TFieldValues>();
};

export { TheForm };
