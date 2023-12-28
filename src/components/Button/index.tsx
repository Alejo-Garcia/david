import {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Props from './props';
import styles from './styles';

const initialBGColor = '#F12C4C';
const pressedBGColor = '#A81E35';

export function Button({
  disabled,
  icon,
  isLoading,
  label,
  ...props
}: Props): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState(initialBGColor);

  return (
    <View style={styles.viewMain}>
      <Pressable
        disabled={disabled}
        style={[styles.pressableMain, {backgroundColor: backgroundColor}]}
        onPressIn={() => setBackgroundColor(pressedBGColor)}
        onPressOut={() => setBackgroundColor(initialBGColor)}
        {...props}>
        <Text style={styles.textMain}>{label}</Text>
        {icon && !isLoading && (
          <Ionicons
            color={'white'}
            name={icon}
            size={18}
            style={styles.iconMain}
          />
        )}
      </Pressable>
      {disabled && <View style={styles.viewDisabledOverlay} />}
    </View>
  );
}
