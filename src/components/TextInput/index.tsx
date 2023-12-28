import {useState} from 'react';
import {forwardRef} from 'react';
import {TextInput as TextInputRN, View} from 'react-native';

import Props from './props';
import styles from './styles';

export const TextInput = forwardRef<TextInputRN, Props>(
  (
    {isError, onBlur, onChangeText, placeholder, value, ...props}: Props,
    ref,
  ): JSX.Element => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View
        style={[
          styles.viewMain,
          isFocused && styles.viewMainFocused,
          isError && styles.viewMainError,
        ]}>
        <TextInputRN
          ref={ref}
          placeholder={placeholder}
          placeholderTextColor={'whitesmoke'}
          style={styles.textInputMain}
          value={value}
          onBlur={() => {
            setIsFocused(false);
            onBlur;
          }}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          {...props}
        />
      </View>
    );
  },
);
