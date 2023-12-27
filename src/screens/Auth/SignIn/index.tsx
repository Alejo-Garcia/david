import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

export function SignIn(): JSX.Element {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate('CoreStack');
          }}>
          <Text>{'SignIn'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
