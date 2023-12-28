import {en, es} from '@assets';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n, {
  InitOptions,
  LanguageDetectorAsyncModule,
  Services,
} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

const languageDetector: LanguageDetectorAsyncModule = {
  async: true,
  cacheUserLanguage: (lng: string) => {
    AsyncStorage.setItem('APP_LANG', lng);
  },
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem('APP_LANG', (err, lng) => {
      if (err || !lng) {
        if (err) {
          console.log('Error fetching "APP_LANG" from async store', err);
        }

        const bestLng = RNLocalize.findBestLanguageTag(['en', 'es']);
        callback(bestLng?.languageTag ?? 'en');

        return;
      }

      callback(lng);
    });
  },
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {},
  type: 'languageDetector',
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    interpolation: {escapeValue: false},
    react: {useSuspense: false},
    resources: {
      en: {translation: en},
      es: {translation: es},
    },
  });
