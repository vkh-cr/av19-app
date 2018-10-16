import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export class Speaker extends React.Component {
  render() {
    return (
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/robot-dev.png')} />
                <Body>
                  <Text>{this.props.name}</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../assets/images/robot-prod.png')} style={{ height: 200, width: 200, flex: 1 }} />
                <Text>
                Absolventský Velehrad
  Absolventský Velehrad je víkendové setkání absolventů, které se koná přibližně jednou za dva roky na starobylém poutním místě Velehrad. Nyní připravujeme jeho čtvrtý ročník. 
  
  Součástí programu bude společné slavení eucharistie, přednášky, diskuze, workshopy a jiné aktivity. Nabídneme také prostor pro ztišení, meditaci. Víkendové setkání umožní strávit čas s přáteli, navázat nové kontakty a obohatit se o společné zážitky.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    );
  }
}