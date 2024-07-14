import { FormProps } from 'antd';
import { PropsWithChildren, ReactElement } from 'react';
import { ControllerFieldState, ControllerRenderProps, FieldPath, FieldValues, UseFormReturn, UseFormStateReturn } from 'react-hook-form';

import { BLOCK_LAYOUT_TYPE } from '@/enum';
import { PropsWithClassName } from '@/types/className';

// The Form
export type TheFormProps<TFieldValues extends FieldValues = FieldValues> = FormProps &
  PropsWithChildren & {
    className?: string;
    formState: UseFormReturn<TFieldValues>;
    onSubmit?: (data: TFieldValues) => void;
  };

// The Form Item

export type RenderStateProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
};

export type TRenderFn<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = ({
  field,
  fieldState,
  formState,
}: RenderStateProps<TFieldValues, TName>) => React.ReactElement;

export type FormItemProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = PropsWithClassName & {
  layout?: BLOCK_LAYOUT_TYPE;
  label?: React.ReactNode;
  required?: boolean;
  colon?: boolean;
  trim?: boolean;
  name: TName;
  render: TRenderFn<TFieldValues, TName> | ReactElement;
};
