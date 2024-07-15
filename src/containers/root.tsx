import { PropsWithChildren } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { ROOT_LAYOUT_TYPE } from '@/enum/app';
import { ClientLayout } from '@/layouts/client';
import { PrivateLayout } from '@/layouts/private';
import { persistor } from '@/store';

type RootProps = {
  children: React.ReactNode;
  layout?: ROOT_LAYOUT_TYPE;
};

const ClientSite = ({ children, layout }: RootProps) => {
  if (layout === ROOT_LAYOUT_TYPE.PRIVATE) {
    return <PrivateLayout>{children}</PrivateLayout>;
  }

  if (layout === ROOT_LAYOUT_TYPE.CLIENT) {
    return <ClientLayout>{children}</ClientLayout>;
  }

  return children;
};

const ServerSite = ({ children }: PropsWithChildren) => {
  return children;
};

export const Root = ({ children, layout }: RootProps) => {
  if (layout) {
    return (
      <PersistGate persistor={persistor}>
        <ClientSite layout={layout}>{children}</ClientSite>
      </PersistGate>
    );
  }

  return <ServerSite>{children}</ServerSite>;
};
