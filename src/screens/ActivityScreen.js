import React from 'react';
import { View } from 'react-native';
import {
  Body,
  Thumbnail,
  Container,
  Grid, Col, Row
} from 'native-base';
import Color from '../constants/Colors';
import {
  AVText, PageHeader, EventTime, EventPlace, EventSpeaker, AVHeader
} from '../components/text/AVText';
import Colors from '../constants/Colors';

export class ActivityScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'Detail aktivity',
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontFamily: 'exo',
      }
    });

    render() {
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
            maxHeight: 70, flex: 1, marginTop: 10, marginBottom: 10, backgroundColor: Color.steelGray_light,
          }}
          >
            <Row style={{ height: 60 }}>
              <Col style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <AVText>{time[0]}</AVText>
                <AVText style={{ fontSize: 28, color: Color.orange }}>{time.slice(1).join(' ')}</AVText>
              </Col>
              <Col style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              >
                <AVText>Kapacita</AVText>
                <AVText style={{ fontSize: 28, color: Color.orange }}>{event.capacity}</AVText>
              </Col>
              <Col style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              >
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
