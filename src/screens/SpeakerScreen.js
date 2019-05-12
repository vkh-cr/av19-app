import React from 'react';
import { Image, View } from 'react-native';
import _ from 'lodash';
import {
  Body,
  Container,
  Content
} from 'native-base';
import window from '../constants/Layout';
import activities from '../data/activities';
import { AVText, AVHeader, AVHeader2 } from '../components/text/AVText';
import AVBadge from '../components/AVBadge';

export default class SpeakerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'A Nested Details Screen'),
  });

  showEvents = speaker => _.map(_.filter(activities, activity => activity.speaker === speaker), event => (
    <AVBadge
      event={event}
      key={event.id}
      // eslint-disable-next-line react/destructuring-assignment
      navigation={this.props.navigation}
    />
  ));

  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam('speaker');
    return (
      <Container style={{ padding: 10 }}>

        <Content>
          <View>
            <Image
              // eslint-disable-next-line global-require
              source={speaker.image}
              style={{
                width: window.width,
                borderRadius: 500,
              }}
              resizeMode="contain"
            />
          </View>

          <AVHeader>{speaker.name}</AVHeader>
          <Body>
            <AVText>{speaker.description}</AVText>
            <AVHeader2>Vede toto:</AVHeader2>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              alignSelf: 'auto',
              flexWrap: 'wrap'
            }}
            >
              {this.showEvents(speaker)}
            </View>
          </Body>
        </Content>
      </Container>
    );
  }
}
