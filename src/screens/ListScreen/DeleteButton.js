import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Icon.Button
          onPress={onPress}
          style={styles.button}
          name="trash"
          iconStyle={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 0,
  },
  button: {
    backgroundColor: 'red',
  },
  icon: {
    marginRight: 0,
  },
});
