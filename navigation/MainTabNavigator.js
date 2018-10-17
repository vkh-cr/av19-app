import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ActivityScreen from '../screens/ActivityScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SpeakersScreen from '../screens/SpeakersScreen';

import Color from '../constants/Colors';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Domů',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ActivityStack = createStackNavigator({
  Links: ActivityScreen,
});

ActivityStack.navigationOptions = {
  tabBarLabel: 'Aktivity',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-analytics${focused ? '' : '-outline'}` : 'md-analytics'}
    />
  ),
};

const CalendarStack = createStackNavigator({
  Settings: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Kalendář',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'}
    />
  ),
};

const SpeakersStack = createStackNavigator({
  Settings: SpeakersScreen,
});

SpeakersStack.navigationOptions = {
  tabBarLabel: 'Přednášející',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-microphone${focused ? '' : '-outline'}` : 'md-microphone'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ActivityStack,
  SpeakersStack,
  CalendarStack,
}, {
    tabBarOptions: {
      activeTintColor: Color.navActive,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: Color.navBackground,
      },
    },
  });
