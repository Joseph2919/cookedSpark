import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedPage from './Screens/FeedPage';
import SubmitScreen from './Screens/SubmitScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen name="Feed" component={FeedPage} />
        <Stack.Screen name="Submit" component={SubmitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}