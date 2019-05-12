import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {
  Body,
  Thumbnail,
  Container, Grid, Col, Row, Content
} from 'native-base';
import _ from 'lodash';
import {
  AVText, PageHeader, EventSpeaker
} from '../components/text/AVText';
import Color from '../constants/Colors';

export default class ActivityScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Detail aktivity'
  });

  // eslint-disable-next-line class-methods-use-this
  showSpeakers(speaker, navigation) {
    if (speaker instanceof Array) {
      const speakers = speaker;
      return (
        <View>
          {_.map(speakers, speaker => (
            <TouchableOpacity
              style={{ flexDirection: 'row', paddingTop: 10 }}
              onPress={() => navigation.navigate('Speaker', {
                speaker,
                title: speaker.name
              })
              }
            >
              <Thumbnail source={speaker.image} style={{ margin: 5 }} />
              <Body style={{ justifyContent: 'center' }}>
                <EventSpeaker>{speaker.name}</EventSpeaker>
              </Body>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={{ flexDirection: 'row', paddingTop: 10 }}
        onPress={() => navigation.navigate('Speaker', {
          speaker,
          title: speaker.name
        })
        }
      >
        <Thumbnail source={speaker.image} />
        <Body style={{ justifyContent: 'center', }}>
          <EventSpeaker style={{ color: Color.black, fontFamily: 'exo-bold' }}>{speaker.name}</EventSpeaker>
        </Body>
      </TouchableOpacity>
    );
  }

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
        <Content>
          <PageHeader>{event.name}</PageHeader>
          {this.showSpeakers(event.speaker, navigation)}
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
        </Content>
      </Container>
    );
  }
}
