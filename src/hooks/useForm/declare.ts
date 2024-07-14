import { FieldValues, Resolver, UseFormProps as UseFormPropsRoot } from 'react-hook-form';

export type UseFormProps<TFieldValues extends FieldValues = FieldValues, TContext = unknown> = Pick<
  UseFormPropsRoot<TFieldValues>,
  'defaultValues' | 'mode' | 'resolver'
> & {
  schema?: Resolver<TFieldValues, TContext>;
  callBack?: () => void;
};
