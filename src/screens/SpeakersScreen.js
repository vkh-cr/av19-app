import React from 'react';
import {
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
  Container
} from 'native-base';
import { StyleSheet } from 'react-native';
import _ from 'lodash';
import Color from '../constants/Colors';
import speakers from '../data/speakers';
import { DrawerMenuButton } from '../components/DrawerMenuButton';
import { AVText } from '../components/text/AVText';

export class SpeakersScreen extends React.Component {
  static navigationOptions = () => ({
    title: 'Přednášející',
    headerLeft: <DrawerMenuButton />
  });

  render() {
    return (
      <Container>
        <List
          dataArray={_.sortBy(_.filter(speakers, speaker => speaker.id > 0), speaker => speaker.name.split(' ').pop())}
          renderRow={speaker => (
            <ListItem
              avatar
              onPress={() => this.props.navigation.navigate('Speaker', {
                speaker,
                title: speaker.name
              })
              }
            >
              <Left>
                <Thumbnail source={speaker.image} />
              </Left>
              <Body>
                <AVText style={{ paddingTop: 0 }}>{speaker.name}</AVText>
                <Text note>{speaker.time}</Text>
                <Text note>{`${speaker.description.substring(0, 40)}...`}</Text>
              </Body>
              <Right>
                <Button
                  transparent
                  onPress={() => this.props.navigation.navigate('Speaker', {
                    speaker,
                    title: speaker.name
                  })
                  }
                >
                  <Text style={styles.textContent}>Profil</Text>
                </Button>
              </Right>
            </ListItem>
          )}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textContent: {
    color: Color.mainColor
  }
});
