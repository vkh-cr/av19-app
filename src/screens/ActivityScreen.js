import React from 'react';
import { View } from 'react-native';
import {
  Body,
  Thumbnail,
  Container, Grid, Col, Row
} from 'native-base';

import {
  AVText, PageHeader, EventSpeaker
} from '../components/text/AVText';
import Color from '../constants/Colors';

export default class ActivityScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Detail aktivity',
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'exo',
    }
  });

  render() {
    const colStyle = {
      justifyContent: 'center',
      alignItems: 'center',
    };
    const { navigation } = this.props;
    const event = navigation.getParam('event');
    const time = event.time.split(' ');
    return (
      <Container style={{ padding: 10, }}>
        <PageHeader>{event.name}</PageHeader>
        <View style={{ flexDirection: 'row', paddingTop: 10 }}>
          <Thumbnail source={event.speaker.image} />
          <Body style={{ justifyContent: 'center', }}>
            <EventSpeaker style={{ color: Color.black, fontFamily: 'exo-bold' }}>{event.speaker.name}</EventSpeaker>
          </Body>
        </View>
        <Grid style={{
          maxHeight: 100, flex: 1, marginTop: 10, marginBottom: 10, backgroundColor: Color.steelGray_light,
        }}
        >
          <Row style={{ height: 100 }}>
            <Col style={colStyle} size={2}>
              <AVText>{time[0]}</AVText>
              <AVText style={{ fontSize: 28, color: Color.orange }}>{time.slice(1).join(' ')}</AVText>
            </Col>
            <Col style={colStyle} size={1}>
              <AVText>Kapacita</AVText>
              <AVText style={{ fontSize: 28, color: Color.orange }}>{event.capacity}</AVText>
            </Col>
            <Col style={colStyle} size={1}>
              <AVText>{event.place.split(' ')[0]}</AVText>
              {event.place.split(' ')[1]
                && <AVText style={{ fontSize: 28, color: Color.orange }}>{event.place.split(' ')[1]}</AVText>
              }
            </Col>
          </Row>
        </Grid>
        <AVText style={{ paddingTop: 20 }}>{event.description}</AVText>
      </Container>
    );
  }
}
