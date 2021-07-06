import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import EventInfoScreen from './screens/EventInfoScreen';
import BidScreen from './screens/truck_screens/BidScreen';
import MyEventsScreen from './screens/truck_screens/MyEventsScreen';
import AddEventScreen from './screens/venue_screens/AddEventScreen';
import EventDecisionScreen from './screens/venue_screens/EventDecisionScreen';
import ManageEventsScreen from './screens/venue_screens/ManageEventsScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Add Event Screen' component={AddEventScreen} />
        <Stack.Screen name='Event Info' component={EventInfoScreen} />
        <Stack.Screen name='Bid Screen' component={BidScreen} />
        <Stack.Screen name='My Events' component={MyEventsScreen} />
        <Stack.Screen name='Event Decisions' component={EventDecisionScreen} />
        <Stack.Screen name='Manage Events' component={ManageEventsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
