
//   render() {
//     return <DaySchedule />
//     /* Go ahead and delete ExpoConfigView and replace it with your
//      * content, we just wanted to give you a quick view of your config */
//     // return <ExpoConfigView />;

import React from 'react';
import _ from 'lodash'

import { Container, Content, Tab, Tabs } from 'native-base';

import { DaySchedule } from '../components/DaySchedule';
import Color from '../constants/Colors'
import activities from '../data/activities'

export default class CalendarScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Color.navBackground,
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: Color.mainColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    title: 'Kalendář',
  };

  render() {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading="Pátek" tabStyle={{ backgroundColor: Color.navBackground }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: Color.navBackground }} >
              <DaySchedule activities={_.filter(activities, ['day', 1])} />
            </Tab>
            <Tab heading="Sobota" tabStyle={{ backgroundColor: Color.navBackground }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: Color.navBackground }}>
              <DaySchedule activities={_.filter(activities, ['day', 2])} />
            </Tab>
            <Tab heading="Neděle" tabStyle={{ backgroundColor: Color.navBackground }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: Color.navBackground }}>
              <DaySchedule activities={_.filter(activities, ['day', 3])} />
            </Tab>
          </Tabs>
        </Content>
      </Container >
    );
  }
}

