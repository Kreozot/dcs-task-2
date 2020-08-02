import React, { useCallback } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
export default function ListItem(props) {
  const { item, navigation } = props;

  const onPress = useCallback(() => {
    navigation.navigate('WebPage', { url: item.url });
  }, [navigation, item.url]);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.link}>{item.url}</Text>
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
  },
  link: {
    fontSize: 16,
    color: '#2e2e2e',
  },
});
