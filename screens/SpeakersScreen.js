import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Speaker } from '../components/Speaker'

export default class SpeakersScreen extends React.Component {
  static navigationOptions = {
    title: 'Přednášející',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
        <Speaker name="Vojta" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
});
