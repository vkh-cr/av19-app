import React from 'react';
import {
  Card, CardItem, Thumbnail, Body
} from 'native-base';
import Styles from '../constants/Styles';
import {
  EventHeader, EventTime, EventSpeaker, EventPlace
} from './text/AVText';

export default class ActivityCard extends React.Component {
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
        <CardItem cardBody>
          <Thumbnail source={speaker.image} />
          <Body style={{ justifyContent: 'center' }}>
            <EventSpeaker>{speaker.name}</EventSpeaker>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
