import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import ActivityScreen from '../screens/ActivityScreen';
import HarmonogramScreen from '../screens/HarmonogramScreen';
import SpeakerScreen from '../screens/SpeakerScreen';
import SpiritScreen from '../screens/SpiritScreen';
import ContactScreen from '../screens/ContactScreen';
import MapScreen from '../screens/MapScreen';

const MainStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Speakers: SpeakersScreen,
    Activities: ActivitiesScreen,
    Activity: ActivityScreen,
    Harmonogram: HarmonogramScreen,
    Speaker: SpeakerScreen,
    Spirit: SpiritScreen,
    Contact: ContactScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: 'black',
      headerStyle: {
        // elevation: 0,
        // shadowOpacity: 0,
        // borderBottomWidth: 0,
        marginTop: -24,
        paddingVertical: 0,

      },
      headerTitleStyle: {
        fontFamily: 'exo',
        fontWeight: undefined,
      }
    }
  }
);

export default MainStackNavigator;
