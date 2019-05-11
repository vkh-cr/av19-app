import React from 'react';
import { TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { Content } from 'native-base';
import ActivityCard from './ActivityCard';

export default class ActivityTab extends React.Component {
  render() {
    return (
      <Content padder>
        {_.map(this.props.activities, activity => (
          <TouchableHighlight
            key={activity.id}
            onPress={() => {
              this.props.navigation.navigate('Activity', {
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
