import React from 'react';
import { ScrollView } from 'react-native';
import { Speakers } from '../components/Speakers'
import style from '../constants/Styles'

export default class SpeakersScreen extends React.Component {
  static navigationOptions = {
    title: 'Přednášející',
    ...style.headerWShadow
  };

  render() {
    return (
      <ScrollView>
        <Speakers />
      </ScrollView>
    );
  }
}
