import React from "react";
import _ from "lodash";
import {
  List,
  ListItem,
  Body,
  Text,
  Container,
  Left,
  Icon
} from "native-base";
import { View } from "react-native";

import style from "../constants/Styles";
import { AVText } from "./text/AVText";
import { AVBadge } from "./AVBadge";
export class CalendarDay extends React.Component {
  showEvents = activity => {
    return _.map(activity.activities, event => {
      return (
        <AVBadge 
          key={event.id}
          eventType={event.type}
          text={event.name}
        />
      );
    });
  };

  render() {
    return (
      <Container>
        <List
          noIndent
          dataArray={this.props.schelude}
          renderRow={activity => (
            <ListItem avatar style={style.container}>
              <Left style={{maxWidth: '10%'}}>
                <Icon name={activity.icon} />
              </Left>
              <Body>
                <AVText style={style.activity.header}>{activity.name}</AVText>
                <Text style={style.time.style} note>{activity.time}</Text>
                <Text note>{activity.location}</Text>
                <View {...style.badgeView}>
                  {activity.activities && this.showEvents(activity)}
                </View>
              </Body>
            </ListItem>
          )}
        />
      </Container>
    );
  }
}
