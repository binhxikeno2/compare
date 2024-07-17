import { Alert as AlertAnt, AlertProps as AlertAntProps } from 'antd';

export interface AlertProps extends AlertAntProps {}

export const Alert = ({ ...rest }: AlertProps) => {
  return <AlertAnt {...rest} />;
};
