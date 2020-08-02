import React, { useCallback } from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';

import { formatDate } from '../../format';

export default function ListItem(props) {
  const { item, navigation } = props;

  const onPress = useCallback(() => {
    navigation.navigate('WebPage', { url: item.url });
  }, [navigation, item.url]);

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
          <Text style={styles.link}>{item.url}</Text>
          <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.4,
    backgroundColor: '#efefef',
  },
  link: {
    fontSize: 16,
    color: '#2e2e2e',
    flex: 1,
  },
  date: {
    color: '#555',
    fontSize: 12,
    marginLeft: 10,
  },
});
