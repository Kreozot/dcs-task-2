import React, { useCallback } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import { connect } from 'react-redux';

import ListItem from './ListItem';
import DeleteButton from './DeleteButton';

function ListScreen(props) {
  const { urlList, navigation } = props;

  const renderItem = useCallback(
    ({ item }) => <ListItem item={item} navigation={navigation} />,
    [navigation]
  );

  return (
    <SwipeListView
      data={urlList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      disableRightSwipe
      rightOpenValue={-100}
      renderHiddenItem={({ item }) => <DeleteButton item={item}/>}
    />
  );
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      flex: 1,
  },
  backTextWhite: {
      color: '#FFF',
  },
  rowFront: {
      alignItems: 'center',
      backgroundColor: '#CCC',
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      justifyContent: 'center',
      height: 50,
  },
  rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
  },
  backRightBtn: {
      alignItems: 'center',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
  },
  backRightBtnLeft: {
      backgroundColor: 'blue',
      right: 75,
  },
  backRightBtnRight: {
      backgroundColor: 'red',
      right: 0,
  },
});


const mapStateToProps = (state) => ({ urlList: state.urlList });

export default connect(mapStateToProps)(ListScreen);
