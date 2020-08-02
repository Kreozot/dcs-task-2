import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

function ListScreen(props) {
  const { urlList, navigation } = props;

  const renderItem = useCallback(
    ({ item }) => <ListItem item={item} navigation={navigation} />,
    [navigation]
  );

  return (
    <View>
      <FlatList
        data={urlList}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
}

const mapStateToProps = (state) => ({ urlList: state.urlList });

export default connect(mapStateToProps)(ListScreen);
