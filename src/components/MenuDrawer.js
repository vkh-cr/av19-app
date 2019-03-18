import React from "react";
import { Image } from "react-native";
import { List, ListItem, Text, Container, Header, Content } from "native-base";
import { withNavigation } from "react-navigation";
import { Constants } from "expo";
import style from '../constants/Styles'
const MenuContainer = ({ navigation }) => {
  return (
    <Container style={{ marginTop: Constants.statusBarHeight }}>
      <Header style={{ ...style.drawer.style }}>
        <Image
          source={require("../assets/images/logo_small.png")}
          style={{ height: 200 }}
        />
      </Header>
      <Content>
        <List>
          <ListItem onPress={() => navigation.navigate("Home")}>
            <Text>Domů</Text>
          </ListItem>
          <ListItem onPress={() => navigation.navigate("Harmonogram")}>
            <Text>Harmonogram</Text>
          </ListItem>
          <ListItem onPress={() => navigation.navigate("Speakers")}>
            <Text>Přednášející</Text>
          </ListItem>
          <ListItem onPress={() => navigation.navigate("Activity")}>
            <Text>Aktivity</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

const MenuDrawer = withNavigation(MenuContainer);

export { MenuDrawer };
