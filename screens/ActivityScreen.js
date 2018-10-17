import React from 'react';

import { Container, Content, Tab, Tabs } from 'native-base';

import FreeTimeTab from '../components/activityTabs/freeTime'
import LecturesTab from '../components/activityTabs/lectures'
import PrayerTab from '../components/activityTabs/prayer'
import Color from '../constants/Colors'

export default class ActivityScreen extends React.Component {
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
    title: 'Aktivity',
  };

  render() {
    return (
      <Container>
        <Content>
          <Tabs>
            <Tab heading="Volný čas" tabStyle={{ backgroundColor: Color.navBackground }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: Color.navBackground }} >
              <FreeTimeTab />
            </Tab>
            <Tab heading="Přednášky" tabStyle={{ backgroundColor: Color.navBackground }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: Color.navBackground }}>
              <LecturesTab />
            </Tab>
            <Tab heading="Duchovní" tabStyle={{ backgroundColor: Color.navBackground }} textStyle={{ color: '#fff' }} activeTabStyle={{ backgroundColor: Color.navBackground }}>
              <PrayerTab />
            </Tab>
          </Tabs>
        </Content>
      </Container >
    );
  }
}

