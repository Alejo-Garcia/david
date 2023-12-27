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
  type: 'languageDetector',
  async: true,
  init: (
    _services: Services,
    _detectorOptions: object,
    _i18nextOptions: InitOptions,
  ) => {},
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem('APP_LANG', (err, lng) => {
      if (err || !lng) {
        if (err) {
          console.log('Error fetching "APP_LANG" from async store', err);
        }

        const bestLng = RNLocalize.findBestLanguageTag(['es', 'en']);
        callback(bestLng?.languageTag ?? 'es');

        return;
      }

      callback(lng);
    });
  },
  cacheUserLanguage: (lng: string) => {
    AsyncStorage.setItem('APP_LANG', lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {translation: es},
      en: {translation: en},
    },
    react: {useSuspense: false},
    interpolation: {escapeValue: false},
    compatibilityJSON: 'v3',
  });
