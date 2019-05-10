import React from 'react';
import { Text, View } from 'react-native';
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
const text = {
    fontFamily: 'exo',
    flex: 1,
};

export class AVBadge extends React.Component {

    render() {
        eventStyle = {
            ...container,
            borderColor: Styles.badge.backgroundColor[this.props.eventType],
            backgroundColor: Styles.badge.backgroundColor[this.props.eventType],

        }
        return <View style={eventStyle}>
            <Text
                numberOfLines={1}
                style={{ ...text, color: Styles.badge.color[this.props.eventType], }}
            >
                {this.props.text}
            </Text>
        </View>

    }
}
