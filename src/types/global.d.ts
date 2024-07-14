import { ROOT_LAYOUT_TYPE } from '../enum/app';

declare global {
  type PageProps<P = object> = React.FC<P> & {
    layout?: ROOT_LAYOUT_TYPE;
  };
}
