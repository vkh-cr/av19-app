import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';

const AppSwitchNavigator = createSwitchNavigator({
  MainStack: DrawerNavigator
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default AppNavigator;
