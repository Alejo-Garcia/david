import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

export function useHeaderTitle(titleKey: string) {
  const navigation = useNavigation();
  const {t} = useTranslation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: t(titleKey),
    });
  }, [navigation, t, titleKey]);
}
