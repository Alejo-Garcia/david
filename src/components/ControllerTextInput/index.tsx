import {TextInput} from '@components';
import {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {Text, TextInput as TextInputRN, View} from 'react-native';

import Props from './props';
import styles from './styles';

export const ControllerTextInput = forwardRef<TextInputRN, Props>(
  ({control, error, name, ...props}: Props, ref): JSX.Element => {
    return (
      <View style={styles.viewMain}>
        <Controller
          control={control}
          name={name}
          render={({field: {onBlur, onChange, value}}) => (
            <TextInput
              ref={ref}
              isError={!!error}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              {...props}
            />
          )}
        />
        <View
          style={[
            styles.viewError,
            error ? styles.viewErrorVisible : styles.viewErrorHidden,
          ]}>
          <Text style={styles.textError}>{error}</Text>
        </View>
      </View>
    );
  },
);
