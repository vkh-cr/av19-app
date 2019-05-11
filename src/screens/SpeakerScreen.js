import React from 'react';
import { Image } from 'react-native';
import {
  Body,
  Container,
  Card,
  CardItem,
} from 'native-base';
import Color from '../constants/Colors';
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
      <Container style={{ backgroundColor: Color.spaceNavy, alignItems: 'center' }}>
        <Image
          // eslint-disable-next-line global-require
          source={require('../assets/images/avatars/yolo.png')}
          style={{
            width: '40%',
            height: '40%',
            marginTop: 10,
            alignContent: 'center'
          }}
        />
        <Card style={{ width: '95%' }}>
          <CardItem header>
            <AVHeader>{speaker.name}</AVHeader>
          </CardItem>
          <CardItem>
            <Body>
              <AVText style={{ paddingTop: 0 }}>{speaker.description}</AVText>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}
