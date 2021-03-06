import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const ButtonComponent = ({ navigation }) => (
  <Ionicons
    name="md-menu"
    color="#000000"
    style={{ paddingLeft: 20 }}
    size={32}
    onPress={navigation.toggleDrawer}
  />
);

const DrawerMenuButton = withNavigation(ButtonComponent);

export default DrawerMenuButton;
