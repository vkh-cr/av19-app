import React from "react";
import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import { DrawerMenuButton } from "../components/DrawerMenuButton";
import { window } from "../constants/Layout";
import { HeaderText } from "../components/HeaderText";
let screen = Dimensions.get("window");

class HomeScreen extends React.Component {
  static navigationOptions = () => {
    return {
      title: 'Home Screen',
      headerLeft: <DrawerMenuButton />,
      headerTintColor: 'black'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="Go Link Screen"
          onPress={() => this.props.navigation.navigate("Link")}
        />
        <Button
          title="Go Link Screen"
          onPress={() => this.props.navigation.navigate("Speakers")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 30
  }
});

export { HomeScreen };
