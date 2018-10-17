import React from 'react';
import {
  List, ListItem, Body, Text, Container, Badge,
} from 'native-base';
import { View } from 'react-native';
import style from '../constants/Styles'



export class DaySchedule extends React.Component {
  render() {
    return (
      <Container>
        <List dataArray={this.props.activities}
          renderRow={(activity) =>
            <ListItem avatar style={style.container}>
              <Body>
                <Text>{activity.name}</Text>
                <Text note>{activity.time}</Text>
                <Text note>{activity.speaker.name}</Text>

                <View style={{ flexDirection: "row" }}>
                  <Badge style={style.badge} >
                    <Text>One</Text>
                  </Badge>
                  <Badge style={style.badge} >
                    <Text>One</Text>
                  </Badge>
                  <Badge style={style.badge} >
                    <Text>One</Text>
                  </Badge>
                </View>
              </Body>
            </ListItem>
          }>
        </List>
      </Container>
    );
  }
}