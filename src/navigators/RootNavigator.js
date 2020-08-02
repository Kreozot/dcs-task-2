import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import ListScreen from '../screens/ListScreen';
import WebPageScreen from '../screens/WebPageScreen';
import ScannerScreen from '../screens/ScannerScreen';

const Stack = createStackNavigator();

export default function RootNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Scanner')}
              title="Scan QR"
            />
          ),
        })}
      />
      <Stack.Screen
        name="WebPage"
        component={WebPageScreen}
      />
      <Stack.Screen
        name="Scanner"
        component={ScannerScreen}
      />
    </Stack.Navigator>
  );
}
