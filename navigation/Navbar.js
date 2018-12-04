import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RoutesScreen from '../screens/RoutesScreen';
import CurrencyScreen from '../screens/CurrencyScreen';
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
      activeBackgroundColor: '#406983',
      inactiveBackgroundColor: '#95AEC2',
      activeTintColor: '#FEFEFE',
      inactiveTintColor: '#DDD',
      labelStyle: {
          fontSize: 12,
      }
  },
};

const RoutesStack = createStackNavigator({
  Routes: {
      screen: RoutesScreen,
  }
});

RoutesStack.navigationOptions = {
  tabBarLabel: 'Routes',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        color={tintColor}
    />
  ),
  tabBarOptions: {
      activeBackgroundColor: '#406983',
      inactiveBackgroundColor: '#95AEC2',
      activeTintColor: '#FEFEFE',
      inactiveTintColor: '#DDD',
      labelStyle: {
          fontSize: 12,
      }
  },
};

const CurrencyStack = createStackNavigator({
  Currency: {
      screen: CurrencyScreen,
  }
});

CurrencyStack.navigationOptions = {
  tabBarLabel: 'Currency',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        color={tintColor}
    />
  ),
  tabBarOptions: {
      activeBackgroundColor: '#406983',
      inactiveBackgroundColor: '#95AEC2',
      activeTintColor: '#FEFEFE',
      inactiveTintColor: '#DDD',
      labelStyle: {
          fontSize: 12,
      }
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
      activeBackgroundColor: '#406983',
      inactiveBackgroundColor: '#95AEC2',
      activeTintColor: '#FEFEFE',
      inactiveTintColor: '#DDD',

      labelStyle: {
          fontSize: 12,
      },
  },
};

export default createBottomTabNavigator({
    HomeStack,
    RoutesStack,
    CurrencyStack,
    SettingsStack,
});
