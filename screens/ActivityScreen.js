import React from 'react';

import { Container, Content, Tab, Tabs } from 'native-base';

import FreeTimeTab from '../components/activityTabs/FreeTime'
import LecturesTab from '../components/activityTabs/Lectures'
import PrayerTab from '../components/activityTabs/Prayer'
import style from '../constants/Styles'

export default class ActivityScreen extends React.Component {
  static navigationOptions = {
    ...style.header,
    title: 'Aktivity',
  };
  render() {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading="Volný čas" {...style.tab} >
              <FreeTimeTab />
            </Tab>
            <Tab heading="Přednášky" {...style.tab} >
              <LecturesTab />
            </Tab>
            <Tab heading="Duchovní" {...style.tab} >
              <PrayerTab />
            </Tab>
          </Tabs>
        </Content>
      </Container >
    );
  }
}

