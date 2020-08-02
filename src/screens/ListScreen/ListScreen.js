import React, { useCallback } from 'react';
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
      rightOpenValue={-50}
      renderHiddenItem={({ item }) => <DeleteButton item={item}/>}
    />
  );
}

const mapStateToProps = (state) => ({ urlList: state.urlList });

export default connect(mapStateToProps)(ListScreen);
