import React from 'react';
import { Image, View } from 'react-native';
import {
  Body,
  Container,
  Card,
  CardItem, Content
} from 'native-base';
import Color from '../constants/Colors';
import window from '../constants/Layout';
import { AVText, AVHeader } from '../components/text/AVText';

export default class SpeakerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'A Nested Details Screen'),
    headerStyle: {
      backgroundColor: Color.spaceNavy,
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      marginTop: -24,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  });

  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam('speaker');
    return (
      <Container style={{ backgroundColor: Color.spaceNavy, padding: 10 }}>

        <Content>
          <View>
            <Image
              // eslint-disable-next-line global-require
              source={require('../assets/images/avatars/yolo.png')}
              style={{
                width: window.width,
              }}

            />
          </View>
          <Card>
            <CardItem header>
              <AVHeader>{speaker.name}</AVHeader>
            </CardItem>
            <CardItem>
              <Body>
                <AVText style={{ paddingTop: 0 }}>{speaker.description}</AVText>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
