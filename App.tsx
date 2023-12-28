import './i18n';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StaticParamList,
  createStaticNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CountriesList, SettingsList, SignIn} from '@screens';
import i18n from 'i18next';
import {StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

StatusBar.setBarStyle('light-content');

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
  headerLargeTitleStyle: {
    color: 'white',
  },
  initialRouteName: 'CountriesList',
  screenOptions: {
    headerLargeTitle: true,
    headerLargeTitleStyle: {
      color: 'white',
    },
    headerShown: true,
    headerStyle: {
      backgroundColor: '#19232D',
    },
    headerTitle: i18n.t('CORE.COUNTRIES.COUNTRIES_LIST.HEADER__TITLE'),
    headerTitleStyle: {
      color: 'white',
    },
  },
  screens: {
    CountriesList,
  },
});

const SettingsStack = createNativeStackNavigator({
  initialRouteName: 'SettingsList',
  screenOptions: {
    headerLargeTitle: true,
    headerLargeTitleStyle: {
      color: 'white',
    },
    headerShown: true,
    headerStyle: {
      backgroundColor: '#19232D',
    },
    headerTitle: i18n.t('CORE.SETTINGS.SETTINGS_LIST.HEADER__TITLE'),
    headerTitleStyle: {
      color: 'white',
    },
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
    tabBarStyle: {
      backgroundColor: '#19232D',
      borderColor: '#0F1923',
    },
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
