
import React from 'react';

import { Separator, Text, Content, Card, CardItem, Body } from 'native-base';
import ActivityCard from '../ActivityCard';

export default class PrayerTab extends React.Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Vysvětlení</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Modli se a pracuj
              </Text>
            </Body>
          </CardItem>
        </Card>

        <ActivityCard />
        <Separator bordered>
          <Text>Olala</Text>
        </Separator>
        <ActivityCard />
      </Content>
    );
  }
}