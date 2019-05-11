import React from 'react';
import {
  List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Container
} from 'native-base';
import { StyleSheet } from 'react-native';
import Color from '../constants/Colors';
import speakers from '../data/speakers';

export default class Speakers extends React.Component {
  render() {
    return (
      <Container>
        <List
          dataArray={speakers}
          renderRow={speaker => (
            <ListItem avatar>
              <Left>
                <Thumbnail source={speaker.image} />
              </Left>
              <Body>
                <Text>{speaker.name}</Text>
                <Text note>{speaker.time}</Text>
                <Text note>{speaker.description}</Text>
              </Body>
              <Right>
                <Button transparent>
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
    color: Color.mainColor,
  },
});
