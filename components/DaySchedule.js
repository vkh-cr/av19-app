import React from 'react';
import _ from 'lodash';
import {
  List, ListItem, Body, Text, Container, Badge,
} from 'native-base';
import { View } from 'react-native';

import style from '../constants/Styles'

export class DaySchedule extends React.Component {

  showEvents = (activity) => {
    return _.map(activity.activities, event => {
      return (
        <Badge {...style.badge.style} style={{ backgroundColor: style.badge.backgroundColor[event.type] }} key={event.id}>
          <Text>{event.name}</Text>
        </Badge>
      )
    })
  }

  render() {
    return (
      <List dataArray={this.props.schelude}
        renderRow={(activity) =>
          <ListItem avatar style={style.container}>
            <Body>
              <Text>{activity.name}</Text>
              <Text note>{activity.time}</Text>
              <Text note>{activity.location}</Text>
              <View {...style.badgeView}>
                {activity.activities && this.showEvents(activity)}
              </View>
            </Body>
          </ListItem>
        }>
      </List>
    );
  }
}