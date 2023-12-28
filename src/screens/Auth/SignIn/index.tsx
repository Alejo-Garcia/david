import {Button, ControllerTextInput} from '@components';
import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {SignInSchema} from '@schemas';
import {createRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  const {reset} = useNavigation();
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

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    reset({
      index: 0,
      routes: [{name: 'CoreStack'}],
    });
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
          <Text style={styles.textTitle}>{t('AUTH.SIGN_IN.TEXT__TITLE')}</Text>
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
              placeholder={t('AUTH.SIGN_IN.TEXT_INPUT_PLACEHOLDER__EMAIL')}
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
              placeholder={t('AUTH.SIGN_IN.TEXT_INPUT_PLACEHOLDER__PASSWORD')}
              textContentType={'password'}
              secureTextEntry
            />
          </View>

          <View style={styles.viewButton}>
            <Button
              disabled={isLoading}
              icon={'arrow-forward-outline'}
              isLoading={isLoading}
              label={
                isLoading
                  ? t('AUTH.SIGN_IN.BUTTON__LOADING')
                  : t('AUTH.SIGN_IN.BUTTON__SIGN_IN')
              }
              onLongPress={onSubmit}
              onPress={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
