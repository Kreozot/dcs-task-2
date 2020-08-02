import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListScreen from '../screens/ListScreen';
import WebPageScreen from '../screens/WebPage';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="WebPage" component={WebPageScreen} />
    </Stack.Navigator>
  );
}
