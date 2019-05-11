import React from 'react';
import { Image, View } from 'react-native';
import {
  Body,
  Container,
  Content
} from 'native-base';
import window from '../constants/Layout';
import { AVText, AVHeader } from '../components/text/AVText';

export default class SpeakerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'A Nested Details Screen'),
  });

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
          </Body>
        </Content>
      </Container>
    );
  }
}
