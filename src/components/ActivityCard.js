import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
export default class ActivityCard extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={this.props.event.speaker.image} />
            <Body>
              <Text>{this.props.event.name}</Text>
              <Text note>{this.props.event.speaker.name}, {this.props.event.time}, učebna A</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <Image
              source={this.props.event.image}
              style={{ height: 200, width: '100%', flex: 1 }}
              borderTopLeftRadius={15}
              borderTopRightRadius={15}
            />
          </Body>
        </CardItem>
      </Card>
    );
  }
}