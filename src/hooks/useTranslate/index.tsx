import { I18n, Translate } from 'next-translate';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';

export type TranslateProps = Translate;

type OutputProps = I18n & {
  changeLanguage: (lang: string) => void;
};

export const useTranslate = (lang: string): OutputProps => {
  const translate = useTranslation(lang);
  const changeLanguage = (language: string) => setLanguage(language);

  return {
    ...translate,
    changeLanguage,
  };
};
