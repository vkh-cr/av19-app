import React from 'react';
import _ from 'lodash'

import { Container, Content, Tab, Tabs } from 'native-base';

import { DaySchedule } from '../components/DaySchedule';
import style from '../constants/Styles'
import activities from '../data/activities'
import schelude from '../data/schelude'

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
              <DaySchedule schelude={schelude.friday} />
            </Tab>
            <Tab heading="Sobota" {...style.tab} >
              <DaySchedule schelude={schelude.saturday} />
            </Tab>
            <Tab heading="Neděle" {...style.tab} >
              <DaySchedule schelude={schelude.friday} />
            </Tab>
          </Tabs>
        </Content>
      </Container >
    );
  }
}

// info about app
// return <ExpoConfigView />;
