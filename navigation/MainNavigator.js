import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import UserDashboardScreen from '../screens/user/UserDashboardScreen';
import UserDetailScreen from '../screens/user/UserDetailScreen';
import Colors from '../constants/Colors';

const UsersNavigator = createStackNavigator(
  {
    Dashboard: UserDashboardScreen,
    UserDetail: UserDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.lightGrellow : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? Colors.primary : Colors.darkGrellow
    }
  }
);

export default createAppContainer(UsersNavigator);
