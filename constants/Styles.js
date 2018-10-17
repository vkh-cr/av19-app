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
  }
}