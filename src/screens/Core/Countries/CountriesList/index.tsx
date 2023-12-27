import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

export function CountriesList(): JSX.Element {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigate('CoreStack', {
              params: {
                screen: 'CountryDetail',
              },
              screen: 'CountriesStack',
            });
          }}>
          <Text>{'CountriesList'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
