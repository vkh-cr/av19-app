import React from "react";
import { Image } from "react-native";
import {
  Left,
  Body,
  Right,
  Thumbnail,
  Text,
  Button,
  Container,
  Card,
  CardItem,
  Badge
} from "native-base";
import { StyleSheet } from "react-native";
import Color from "../constants/Colors";

import { BlurView, VibrancyView } from "react-native-blur";

export class SpeakerScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "A Nested Details Screen"),
      headerStyle: {
        backgroundColor: Color.blue,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam("speaker");
    return (
      <Container style={{ backgroundColor: Color.blue, alignItems: "center" }}>
        <Image
          source={require("../assets/images/avatars/yolo.png")}
          style={{
            width: "40%",
            height: "40%",
            marginTop: 10,
            alignContent: "center"
          }}
        />
        <Card style={{ width: "95%" }}>
          <CardItem header>
            <Text>{speaker.name}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{speaker.time}</Text>
              <Text>{speaker.description}</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textContent: {
    color: Color.mainColor
  }
});
