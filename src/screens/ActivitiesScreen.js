import React from 'react';
import _ from 'lodash';
import {
  Container, Tab, Tabs
} from 'native-base';
import DrawerMenuButton from '../components/DrawerMenuButton';
import ActivityTab from '../components/ActivityTab';

import activities from '../data/activities';
import style from '../constants/Styles';

export default class ActivitiesScreen extends React.Component {
  static navigationOptions = {
    title: 'Aktivity',
    headerLeft: <DrawerMenuButton />,
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Tabs tabBarUnderlineStyle={style.tab.tabBarUnderlineStyle}>
          <Tab heading="Přednášky" {...style.tab}>
            <ActivityTab navigation={navigation} activities={_.filter(activities, ['type', 1])} />
          </Tab>
          <Tab heading="Duchovní" {...style.tab}>
            <ActivityTab navigation={navigation} activities={_.filter(activities, ['type', 3])} />
          </Tab>
          <Tab heading="Volný čas" {...style.tab}>
            <ActivityTab navigation={navigation} activities={_.filter(activities, ['type', 2])} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
