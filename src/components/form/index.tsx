import { DevTool } from '@hookform/devtools';
import { Form } from 'antd';
import { FieldValues, FormProvider, useFormContext } from 'react-hook-form';

import { TheFormProps } from './declare';
import { FormItem as FormItemCpn } from './formItem';

const devMode = process.env.NEXT_PUBLIC_FORM_DEV_TOOL === 'dev' || false;

const TheForm = <TFieldValues extends FieldValues = FieldValues>({
  className,
  children,
  formState,
  onSubmit,
  ...rest
}: TheFormProps<TFieldValues>) => {
  return (
    <>
      <Form {...rest} className={className} onFinish={onSubmit ? formState.handleSubmit(onSubmit) : undefined}>
        <FormProvider {...formState}>{children}</FormProvider>
      </Form>
      {devMode && <DevTool control={formState.control} placement="bottom-right" />}
    </>
  );
};

TheForm.FormItem = FormItemCpn;

export const useFormState = <TFieldValues extends FieldValues = FieldValues>() => {
  return useFormContext<TFieldValues>();
};

export { TheForm };
