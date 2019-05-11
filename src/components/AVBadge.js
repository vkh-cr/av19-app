import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const container = {
  margin: 2,
  paddingHorizontal: 7,
  paddingVertical: 6,
  borderRadius: 50,
  borderWidth: 1,
  borderColor: Colors.grassGreen,
  backgroundColor: Colors.grassGreen,
  maxWidth: '90%',
};
const textStyle = {
  fontFamily: 'exo',
  flex: 1,
};

export default class AVBadge extends React.Component {
  render() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.props.event) {
      const { event, navigation } = this.props;
      const eventStyle = {
        ...container,
        borderColor: Styles.badge.backgroundColor[event.type],
        backgroundColor: Styles.badge.backgroundColor[event.type],

      };
      return (
        <TouchableOpacity
          style={eventStyle}
          onPress={() => {
            navigation.navigate('Activity', {
              event
            });
          }}
        >
          <Text
            numberOfLines={1}
            style={{ ...textStyle, color: Styles.badge.color[event.type], }}
          >
            {event.name}
          </Text>
        </TouchableOpacity>
      );
    }
    const { text, eventType } = this.props;
    const eventStyle = {
      ...container,
      borderColor: Styles.badge.backgroundColor[eventType],
      backgroundColor: Styles.badge.backgroundColor[eventType],

    };
    return (
      <View
        style={eventStyle}
      >
        <Text
          numberOfLines={1}
          style={{ ...textStyle, color: Styles.badge.color[eventType], }}
        >
          {text}
        </Text>
      </View>
    );
  }
}
