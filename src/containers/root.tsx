import { ROOT_LAYOUT_TYPE } from '@/enum/app';

type RootProps = {
  children: React.ReactElement;
  layout?: ROOT_LAYOUT_TYPE;
};

export const Root = ({ children }: RootProps) => {
  return children;
};
