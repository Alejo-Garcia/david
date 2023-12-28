import {Button, ControllerTextInput} from '@components';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {SignInSchema} from '@schemas';
import {createRef} from 'react';
import {useForm} from 'react-hook-form';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native';

import styles from './styles';

export function SignIn(): JSX.Element {
  const {navigate} = useNavigation();
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = () => {
    navigate('CoreStack');
  };

  const passwordRef = createRef<TextInput>();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.viewMain}>
      <SafeAreaView>
        <View style={styles.viewLogo}>
          <Image
            resizeMode={'contain'}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Blaze_apostas_logo.png',
            }}
            style={styles.imageLogo}
          />
        </View>

        <View style={styles.viewTitle}>
          <Text style={styles.textTitle}>{'Sign in to your account'}</Text>
        </View>

        <View style={styles.viewForm}>
          <View>
            <ControllerTextInput
              autoCapitalize={'none'}
              control={control}
              enterKeyHint={'next'}
              error={errors.email?.message}
              keyboardType={'email-address'}
              name={'email'}
              placeholder={'Email address'}
              textContentType={'emailAddress'}
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </View>

          <View>
            <ControllerTextInput
              ref={passwordRef}
              control={control}
              enterKeyHint={'done'}
              error={errors.password?.message}
              name={'password'}
              placeholder={'Password'}
              textContentType={'password'}
              secureTextEntry
            />
          </View>

          <View style={styles.viewButton}>
            <Button
              icon={'arrow-forward-outline'}
              label={'Sign In'}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
