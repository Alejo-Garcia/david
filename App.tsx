import './i18n';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StaticParamList,
  createStaticNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CountriesList, CountryDetail, SettingsList, SignIn} from '@screens';

const AuthStack = createNativeStackNavigator({
  initialRouteName: 'SignIn',
  screenOptions: {
    animation: 'fade',
    headerShown: false,
  },
  screens: {
    SignIn,
  },
});

const CountriesStack = createNativeStackNavigator({
  initialRouteName: 'CountriesList',
  screenOptions: {
    headerShown: true,
  },
  screens: {
    CountriesList,
    CountryDetail,
  },
});

const SettingsStack = createNativeStackNavigator({
  initialRouteName: 'SettingsList',
  screenOptions: {
    headerShown: true,
  },
  screens: {
    SettingsList,
  },
});

const CoreStack = createBottomTabNavigator({
  initialRouteName: 'CountriesStack',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    CountriesStack,
    SettingsStack,
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'AuthStack',
  screenOptions: {
    headerShown: false,
  },
  screens: {
    AuthStack,
    CoreStack,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Navigation = createStaticNavigation(RootStack);

function App() {
  return <Navigation />;
}

export default App;
