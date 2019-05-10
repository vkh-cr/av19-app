import React from "react";
import _ from "lodash";
import {
  List,
  ListItem,
  Body,
  Text,
  Container,
  Badge,
  Left,
  Icon
} from "native-base";
import { View } from "react-native";

import style from "../constants/Styles";
import { AVText } from "./text/AVText";
import window from "../constants/Layout";
export class CalendarDay extends React.Component {
  showEvents = activity => {
    return _.map(activity.activities, event => {
      return (
        <Badge
          style={{
            ...style.badge.style,
            backgroundColor: style.badge.backgroundColor[event.type],
          }}
          key={event.id}
        >
          <Text
            numberOfLines={1}
            style={{
              ...style.badge.text.style,
              color: style.badge.color[event.type]
            }}
          >
            {event.name}
          </Text>
        </Badge>
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
