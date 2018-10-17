import React, { Component } from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
export default class ActivityCard extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/images/avatars/woman1.png')} />
            <Body>
              <Text>Check it out, Dipper!</Text>
              <Text note>Mabel, pátek 18:00, učebna A</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Body>
            <Image
              source={require('../assets/images/activities/activity1.png')}
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