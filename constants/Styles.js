import { StyleSheet } from 'react-native';
import Color from './Colors'

export default {
  textContent: {
    color: Color.mainColor,
  },
  container: {
    minHeight: 50,
    borderLeftWidth: 2,
    borderColor: Color.mainColor
  },
  badge: {
    backgroundColor: Color.mainColor,
    marginRight: 3,
    marginTop: 3
  },
  tab: {
    tabStyle: {
      backgroundColor: Color.navBackground
    },
    textStyle: {
      color: '#fff'
    },
    activeTabStyle: {
      backgroundColor: Color.navBackground
    }
  },
  header: {
    headerStyle: {
      backgroundColor: Color.navBackground,
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: Color.mainColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  headerWShadow: {
    headerStyle: {
      backgroundColor: Color.navBackground,
    },
    headerTintColor: Color.mainColor,
  }
}