import React from 'react';
import Platform from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: {
      screen: HomeScreen,
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
  tabBarOptions: {
      activeTintColor: '#C58143',
      inactiveTintColor: 'grey',
  },
};

const SettingsStack = createStackNavigator({
  Settings: {
      screen: SettingsScreen,
  }
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        color={tintColor}
    />
  ),
  tabBarOptions: {
      activeTintColor: '#C58143',
      inactiveTintColor: 'grey',
  },
};

export default createBottomTabNavigator({
    HomeStack,
    SettingsStack,
});
