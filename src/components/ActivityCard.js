import React from 'react';
import {
  Card, CardItem, Thumbnail, Text, Left, Body
} from 'native-base';
import Styles from '../constants/Styles';
import {
  EventHeader, EventTime, EventSpeaker, EventPlace
} from './text/AVText';

export default class ActivityCard extends React.Component {
  render() {
    return (
      <Card style={{
        borderWidth: 0, borderLeftWidth: 10, borderColor: Styles.badge.backgroundColor[this.props.event.type], borderRadius: 5
      }}
      >
        <CardItem>
          <Body>
            <EventHeader>{this.props.event.name}</EventHeader>
            <EventTime>{this.props.event.time}</EventTime>
            <EventPlace>{this.props.event.place}</EventPlace>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Thumbnail source={this.props.event.speaker.image} />
          <Body style={{ justifyContent: 'center' }}>
            <EventSpeaker>{this.props.event.speaker.name}</EventSpeaker>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
