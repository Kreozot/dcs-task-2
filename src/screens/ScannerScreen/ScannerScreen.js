import React, { useCallback } from 'react';
import { View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { store, urlListSlice } from '../../store';

const urlActions = urlListSlice.actions;

function ScannerScreen(props) {
  const { navigation } = props;

  const onSuccess = useCallback((event) => {
    store.dispatch(urlActions.addUrl({ url: event.data }));
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <QRCodeScanner onRead={onSuccess} />
    </View>
  );
}

export default ScannerScreen;
