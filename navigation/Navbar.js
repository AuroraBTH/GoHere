import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
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
        activeTintColor: Colors.tintColor,
        inactiveTintColor: '#333',
        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        style: {
            height: 60,
        },
    },
};

const RoutesStack = createStackNavigator({
    Routes: {
        screen: RoutesScreen,
    }
});

RoutesStack.navigationOptions = {
    tabBarLabel: 'Routes',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
        />
    ),
    tabBarOptions: {
        activeBackgroundColor: '#406983',
        inactiveBackgroundColor: '#95AEC2',
        activeTintColor: Colors.tintColor,
        inactiveTintColor: '#333',
        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        style: {
            height: 60,
        },
    },
};

const CurrencyStack = createStackNavigator({
    Currency: {
        screen: CurrencyScreen,
    }
});

CurrencyStack.navigationOptions = {
    tabBarLabel: 'Currency',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-repeat' : 'md-repeat'}
        />
    ),
    tabBarOptions: {
        activeBackgroundColor: '#406983',
        inactiveBackgroundColor: '#95AEC2',
        activeTintColor: Colors.tintColor,
        inactiveTintColor: '#333',
        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        style: {
            height: 60,
        },
    },
};

const SettingsStack = createStackNavigator({
    Settings: {
        screen: SettingsScreen,
    }
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
        />
    ),
    tabBarOptions: {
        activeBackgroundColor: '#406983',
        inactiveBackgroundColor: '#95AEC2',
        activeTintColor: Colors.tintColor,
        inactiveTintColor: '#333',

        labelStyle: {
            fontSize: 12,
            marginBottom: 5,
        },
        style: {
            height: 60,
        },
    },
};

export default createBottomTabNavigator({
    HomeStack,
    RoutesStack,
    CurrencyStack,
    SettingsStack,
});
