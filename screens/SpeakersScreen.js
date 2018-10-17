import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Speakers } from '../components/Speakers'
import Color from '../constants/Colors';

export default class SpeakersScreen extends React.Component {
  static navigationOptions = {
    title: 'Přednášející',
    headerStyle: {
      backgroundColor: Color.navBackground,
    },
    headerTintColor: Color.mainColor,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Speakers />
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
