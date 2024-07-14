import { Form } from 'antd';
import clsx from 'clsx';
import { cloneElement, isValidElement, ReactElement } from 'react';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import { BLOCK_LAYOUT_TYPE } from '@/enum';
import style from '@/styles/components/form-item.module.scss';

import { useFormState } from './';
import { FormItemProps, RenderStateProps, TRenderFn } from './declare';

export const FormItem = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(
  props: FormItemProps<TFieldValues, TName>
) => {
  const { required, colon, label, name, render, layout = BLOCK_LAYOUT_TYPE.VERTICAL } = props;
  const formState = useFormState<TFieldValues>();
  const control = formState.control;

  const genderElement = (props: { renderFn: TRenderFn<TFieldValues, TName> | ReactElement; state: RenderStateProps<TFieldValues, TName> }) => {
    const { renderFn, state } = props;
    const { field, fieldState, formState } = state;

    if (isValidElement(renderFn)) {
      return cloneElement(renderFn, { ...state.field });
    }

    if (typeof renderFn === 'function') {
      return renderFn({ field, fieldState, formState });
    }

    return <></>;
  };

  return (
    <div className={clsx(style['form-item-app'], style[`form-item-app__layout__${layout}`])}>
      <div className={clsx(layout === BLOCK_LAYOUT_TYPE.HORIZONTAL && 'mt-2')}>
        {label}
        {required && <span className="ml-1 text-error">{'*'}</span>}
        {colon && <span className="ml-2">{':'}</span>}
      </div>
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState, formState }) => {
            const error = fieldState.error?.message;

            return (
              <Form.Item help={error} validateStatus={error && 'error'}>
                {genderElement({ renderFn: render, state: { field, fieldState, formState } })}
              </Form.Item>
            );
          }}
        />
      </div>
    </div>
  );
};
