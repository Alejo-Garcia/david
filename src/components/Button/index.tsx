import {useState} from 'react';
import {Pressable, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Props from './props';
import styles from './styles';

const initialBGColor = '#F12C4C';
const pressedBGColor = '#A81E35';

export function Button({icon, label, ...props}: Props): JSX.Element {
  const [backgroundColor, setBackgroundColor] = useState(initialBGColor);

  return (
    <Pressable
      style={[styles.viewMain, {backgroundColor: backgroundColor}]}
      {...props}
      onPressIn={() => setBackgroundColor(pressedBGColor)}
      onPressOut={() => setBackgroundColor(initialBGColor)}>
      <Text style={styles.textMain}>{label}</Text>
      {icon && (
        <Ionicons
          color={'white'}
          name={icon}
          size={18}
          style={styles.iconMain}
        />
      )}
    </Pressable>
  );
}
