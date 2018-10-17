import React from 'react';
import {
  List, ListItem, Left, Body, Right, Thumbnail, Text, Container, Badge,
} from 'native-base';
import { View } from 'react-native';
import Style from '../constants/Styles'



export class DaySchedule extends React.Component {
  render() {
    return (
      <Container>
        <List dataArray={this.props.activities}
          renderRow={(activity) =>
            <ListItem avatar style={Style.container}>
              <Body>
                <Text>{activity.name}</Text>
                <Text note>{activity.time}</Text>
                <Text note>{activity.speaker.name}</Text>

                <View style={{ flexDirection: "row" }}>
                  <Badge style={Style.badge} >
                    <Text>One</Text>
                  </Badge>
                  <Badge style={Style.badge} >
                    <Text>One</Text>
                  </Badge>
                  <Badge style={Style.badge} >
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