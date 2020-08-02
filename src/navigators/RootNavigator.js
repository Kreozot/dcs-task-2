import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';

import ListScreen from '../screens/ListScreen';
import WebPageScreen from '../screens/WebPageScreen';
import ScannerScreen from '../screens/ScannerScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function RootNavigator(props) {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({ navigation }) => ({
          headerTitle: 'QR Code Scanner',
          headerRight: () => (
            <View
              style={styles.wrapper}
            >
              <Icon.Button
                name="qrcode"
                onPress={() => navigation.navigate('Scanner')}
              >
                Scan
              </Icon.Button>
            </View>
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

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10,
  },
});
