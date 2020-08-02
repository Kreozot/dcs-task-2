import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import { store, urlListSlice } from '../../store';

const urlActions = urlListSlice.actions;

export default function DeleteButton(props) {
  const { item } = props;

  const onPress = useCallback(() => {
    store.dispatch(urlActions.removeUrl({
      id: item.id,
    }));
  }, [item.id]);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.4,
    backgroundColor: 'red',
  },
  text: {
    fontSize: 16,
    color: '#2e2e2e',
    width: 100,
  },
});
