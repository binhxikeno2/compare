import '@/styles/globals.scss';
import 'reflect-metadata';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { ROOT_LAYOUT_TYPE } from '@/enum/app';
import { AntdConfig } from '@/providers/antdConfig';
import { TranslateProvider } from '@/providers/translate';

import { Root } from '../containers/root';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  layout: ROOT_LAYOUT_TYPE;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <AntdConfig>
      <TranslateProvider>
        <Root layout={Component.layout}>
          <Component {...pageProps} />
        </Root>
      </TranslateProvider>
    </AntdConfig>
  );
}
