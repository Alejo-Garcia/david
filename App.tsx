import './i18n';
import {initializeAxios} from '@config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StaticParamList,
  createStaticNavigation,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CountriesList, SettingsList, SignIn} from '@screens';
import {StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

StatusBar.setBarStyle('light-content');

initializeAxios();

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
    tabBarButtonTestID: (() => {
      switch (name) {
        case 'CountriesStack':
          return 'tabBarItemCountries';
        case 'SettingsStack':
          return 'tabBarItemSettings';
        default:
          return undefined;
      }
    })(),
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
