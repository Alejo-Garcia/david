import {ActivityIndicator as ActivityIndicatorRN, View} from 'react-native';

import Props from './props';
import styles from './styles';

export function ActivityIndicator({...props}: Props): JSX.Element {
  return (
    <View style={styles.viewMain}>
      <ActivityIndicatorRN {...props} />
    </View>
  );
}
