import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, H3 } from "native-base";
import { DrawerMenuButton } from "../components/DrawerMenuButton";
let screen = Dimensions.get("window");

class HomeScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: "Home Screen",
      headerLeft: <DrawerMenuButton />,
      headerTintColor: "black"
    };
  };

  render() {
    return (
      <Container>
        <Content style={{ padding: 10}}>
          <Card>
            <CardItem>
              <Body>
                <H3>Novinky budou zde</H3>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <H3>Aktuální aktivita</H3>
              </Body>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Body>
                <H3>Příští aktivita</H3>
                <Text>Yolo yolo</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export { HomeScreen };
