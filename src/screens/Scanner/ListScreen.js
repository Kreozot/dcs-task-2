import React, {useState, useCallback} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import ListItem from './ListItem';

export default function ListScreen(props) {
  const [list, setList] = useState([]);

  onSuccess = (e) => {
    const url = e.data;
  };

  // keyExtractor = (person) => person.login.uuid;

  renderItem = ({item}) => {
    console.log(item);
    return <ListItem url={item} />;
  };

  render = () => {
    const {isLoading, list} = this.state;

    return (
      <View>
        <QRCodeScanner onRead={this.onSuccess} />
        <FlatList
          data={list}
          renderItem={this.renderItem}
          // keyExtractor={this.keyExtractor}
          keyExtractor={(item) => item}
        />
      </View>
    );
  };
}
