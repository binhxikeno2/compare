import I18nProvider from 'next-translate/I18nProvider';

import { LANGUAGE_DEFAULT } from '@/constants/app';

import i18nConfig from '../../i18n.json';

type TranslateProviderProps = {
  children: React.ReactNode;
};

export const TranslateProvider = ({ children }: TranslateProviderProps) => {
  return (
    <I18nProvider lang={LANGUAGE_DEFAULT} config={i18nConfig}>
      {children}
    </I18nProvider>
  );
};
