import React from 'react';
import _ from 'lodash'

import { Container, Content, Tab, Tabs } from 'native-base';

import { DaySchedule } from '../components/DaySchedule';
import style from '../constants/Styles'
import activities from '../data/activities'

export default class CalendarScreen extends React.Component {

  static navigationOptions = {
    ...style.header,
    title: 'Kalendář'
  };

  render() {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading="Pátek" {...style.tab} >
              <DaySchedule activities={_.filter(activities, ['day', 1])} />
            </Tab>
            <Tab heading="Sobota" {...style.tab} >
              <DaySchedule activities={_.filter(activities, ['day', 2])} />
            </Tab>
            <Tab heading="Neděle" {...style.tab} >
              <DaySchedule activities={_.filter(activities, ['day', 3])} />
            </Tab>
          </Tabs>
        </Content>
      </Container >
    );
  }
}

// info about app
// return <ExpoConfigView />;
