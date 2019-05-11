import React from 'react';
import {
  Card, CardItem, Thumbnail, Body
} from 'native-base';
import _ from 'lodash';
import Styles from '../constants/Styles';

import {
  EventHeader, EventTime, EventSpeaker, EventPlace
} from './text/AVText';

export default class ActivityCard extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  showSpeakers(speakers) {
    if (speakers instanceof Array) {
      return _.map(speakers, speaker => (
        <CardItem cardBody>
          <Thumbnail source={speaker.image} style={{ margin: 5 }} />
          <Body style={{ justifyContent: 'center' }}>
            <EventSpeaker>{speaker.name}</EventSpeaker>
          </Body>
        </CardItem>
      ));
    }
    return (
      <CardItem cardBody>
        <Thumbnail source={speakers.image} style={{ margin: 5 }} />
        <Body style={{ justifyContent: 'center' }}>
          <EventSpeaker>{speakers.name}</EventSpeaker>
        </Body>
      </CardItem>
    );
  }

  render() {
    const {
      type, name, time, place, speaker
      // eslint-disable-next-line react/destructuring-assignment
    } = this.props.event;

    return (
      <Card style={{
        borderWidth: 0, borderLeftWidth: 10, borderColor: Styles.badge.backgroundColor[type], borderRadius: 5
      }}
      >
        <CardItem>
          <Body>
            <EventHeader>{name}</EventHeader>
            <EventTime>{time}</EventTime>
            <EventPlace>{place}</EventPlace>
          </Body>
        </CardItem>
        {this.showSpeakers(speaker)}
      </Card>
    );
  }
}
