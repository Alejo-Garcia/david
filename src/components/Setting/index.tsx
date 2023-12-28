import {useState} from 'react';
import {Switch, Text, View} from 'react-native';

import Props from './props';
import styles from './styles';

export function Setting({description, isActive, label}: Props): JSX.Element {
  const [isSettingActive, setIsSettingActive] = useState(isActive);

  return (
    <View style={styles.viewMain}>
      <View style={styles.viewText}>
        <Text style={styles.textLabel}>{label}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>

      <View style={styles.viewSwitch}>
        <Switch
          thumbColor={'#F4F3F4'}
          trackColor={{false: '#767577', true: '#F12C4C'}}
          value={isSettingActive}
          onValueChange={() =>
            setIsSettingActive(previousState => !previousState)
          }
        />
      </View>
    </View>
  );
}
