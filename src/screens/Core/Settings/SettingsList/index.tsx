import {Setting} from '@components';
import {SafeAreaView, ScrollView, View} from 'react-native';

import styles from './styles';

export function SettingsList(): JSX.Element {
  return (
    <SafeAreaView style={styles.viewMain}>
      <ScrollView
        contentContainerStyle={styles.scrollViewSettings}
        showsVerticalScrollIndicator={false}>
        <View style={styles.viewSetting}>
          <Setting
            description={'Toggle reception of push notifications'}
            label={'Push notifications'}
            isActive
          />
        </View>

        <View style={styles.viewSetting}>
          <Setting
            description={'Toggle reception of email notifications'}
            label={'Email notifications'}
          />
        </View>

        <View style={styles.viewSetting}>
          <Setting
            description={'Toggle sending usage statistics'}
            label={'Data collection'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
