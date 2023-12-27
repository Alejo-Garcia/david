import './i18n';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StaticParamList,
  createStaticNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CountriesList, CountryDetail, SettingsList, SignIn} from '@screens';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
    headerLargeTitle: true,
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
    headerLargeTitle: true,
    headerShown: true,
  },
  screens: {
    SettingsList,
  },
});

const CoreStack = createBottomTabNavigator({
  initialRouteName: 'CountriesStack',
  screenOptions: ({route: {name}}) => ({
    headerShown: false,
    tabBarActiveTintColor: '#F12C4C',
    tabBarIcon: ({color, focused, size}) => {
      let iconName;

      switch (name) {
        case 'CountriesStack':
          iconName = 'earth';
          break;
        case 'SettingsStack':
          iconName = 'settings';
          break;
        default:
          iconName = 'help';
          break;
      }

      if (!focused) {
        iconName += '-outline';
      }

      return <Ionicons color={color} name={iconName} size={size} />;
    },
    tabBarItemStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarShowLabel: false,
  }),
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
