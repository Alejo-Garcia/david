import {Button, Setting} from '@components';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import styles from './styles';

export function SettingsList(): JSX.Element {
  const {reset} = useNavigation();

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

      <View style={styles.viewButton}>
        <Button
          disabled={isLoading}
          isLoading={isLoading}
          label={isLoading ? 'Loading...' : 'Sign Out'}
          onPress={signOut}
        />
      </View>
    </SafeAreaView>
  );
}
