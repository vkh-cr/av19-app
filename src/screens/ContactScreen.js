import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
} from 'native-base';
import DrawerMenuButton from '../components/DrawerMenuButton';
import {
  AVHeader, AVText
} from '../components/text/AVText';


class ContactScreen extends React.Component {
    static navigationOptions = () => ({
      title: 'Kontakt',
      headerLeft: <DrawerMenuButton />,
    });

    render() {
      return (
        <Container>

          <Content style={{ padding: 10 }}>
            <Card>
              <CardItem>
                <Body>
                  <AVHeader>Kontakt</AVHeader>
                  <AVText>Vše by mělo být na recepci na Stojanově.</AVText>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <AVText>A vzkaz pro Tebe:</AVText>
                  <Image
                    source={require('../assets/images/cat.gif')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                  />
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      );
    }
}

export default ContactScreen;
