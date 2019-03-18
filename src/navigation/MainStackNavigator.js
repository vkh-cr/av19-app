import { createStackNavigator } from "react-navigation";

import { HomeScreen } from "../screens/HomeScreen";
import { LinkScreen } from "../screens/LinkScreen";
import { SpeakersScreen } from "../screens/SpeakersScreen";
import { ActivityScreen } from "../screens/ActivityScreen";
import { HarmonogramScreen } from "../screens/HarmonogramScreen";
import { SpeakerScreen } from "../screens/SpeakerScreen";

const MainStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Link: LinkScreen,
    Speakers: SpeakersScreen,
    Activity: ActivityScreen,
    Harmonogram: HarmonogramScreen,
    Speaker: SpeakerScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      }
    }
  }
);

export { MainStackNavigator };
