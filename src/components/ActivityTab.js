import React from 'react';
import { TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { Content } from 'native-base';
import ActivityCard from './ActivityCard';

export default class ActivityTab extends React.Component {
  render() {
    const { activities, navigation } = this.props;
    return (
      <Content padder>
        {_.map(activities, activity => (
          <TouchableHighlight
            key={activity.id}
            onPress={() => {
              navigation.navigate('Activity', {
                event: activity,
                title: activity.name
              });
            }}
          >
            <ActivityCard
              event={activity}
            />
          </TouchableHighlight>
        ))}
      </Content>
    );
  }
}
