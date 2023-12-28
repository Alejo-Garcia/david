import {Button, Setting} from '@components';
import {useHeaderTitle} from '@hooks';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, ScrollView, View} from 'react-native';

import styles from './styles';

export function SettingsList(): JSX.Element {
  const {t} = useTranslation();
  const {reset} = useNavigation();

  useHeaderTitle('CORE.SETTINGS.SETTINGS_LIST.HEADER__TITLE');

  const [isLoading, setIsLoading] = useState(false);

  const signOut = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    reset({
      index: 0,
      routes: [{name: 'AuthStack'}],
    });
  };

  return (
    <SafeAreaView style={styles.viewMain}>
      <ScrollView
        contentContainerStyle={styles.scrollViewSettings}
        showsVerticalScrollIndicator={false}>
        <View style={styles.viewSetting}>
          <Setting
            description={t(
              'CORE.SETTINGS.SETTINGS_LIST.SETTING_DESCRIPTION__PUSH_NOTIFICATIONS',
            )}
            label={t(
              'CORE.SETTINGS.SETTINGS_LIST.SETTING_LABEL__PUSH_NOTIFICATIONS',
            )}
            isActive
          />
        </View>

        <View style={styles.viewSetting}>
          <Setting
            description={t(
              'CORE.SETTINGS.SETTINGS_LIST.SETTING_DESCRIPTION__EMAIL_NOTIFICATIONS',
            )}
            label={t(
              'CORE.SETTINGS.SETTINGS_LIST.SETTING_LABEL__EMAIL_NOTIFICATIONS',
            )}
          />
        </View>

        <View style={styles.viewSetting}>
          <Setting
            description={t(
              'CORE.SETTINGS.SETTINGS_LIST.SETTING_DESCRIPTION__USAGE_STATISTICS',
            )}
            label={t(
              'CORE.SETTINGS.SETTINGS_LIST.SETTING_LABEL__USAGE_STATISTICS',
            )}
          />
        </View>
      </ScrollView>

      <View style={styles.viewButton}>
        <Button
          disabled={isLoading}
          isLoading={isLoading}
          label={
            isLoading
              ? t('CORE.SETTINGS.SETTINGS_LIST.BUTTON__LOADING')
              : t('CORE.SETTINGS.SETTINGS_LIST.BUTTON__SIGN_OUT')
          }
          onPress={signOut}
        />
      </View>
    </SafeAreaView>
  );
}
