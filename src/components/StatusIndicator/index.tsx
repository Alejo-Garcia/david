import {Button} from '@components';
import {Text, View} from 'react-native';

import Props from './props';
import styles from './styles';

export function StatusIndicator({
  buttonIcon,
  buttonLabel,
  buttonOnPress,
  label,
}: Props): JSX.Element {
  return (
    <View style={styles.viewMain}>
      <Text style={styles.textError}>{label}</Text>
      <View style={styles.viewButtonError}>
        <Button icon={buttonIcon} label={buttonLabel} onPress={buttonOnPress} />
      </View>
    </View>
  );
}
