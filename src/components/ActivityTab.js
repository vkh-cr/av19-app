import React from 'react';
import _ from 'lodash';
import { Text, Content, Card, CardItem, Body } from 'native-base';
import ActivityCard from './ActivityCard';


export default class ActivityTab extends React.Component {
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
        {_.map(this.props.activities, activity => {
          return <ActivityCard key={activity.id} event={activity} />
        })}
      </Content>
    );
  }
}