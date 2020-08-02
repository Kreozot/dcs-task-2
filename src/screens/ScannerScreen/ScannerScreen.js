import React, { useCallback } from 'react';
import { View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import { store, urlListSlice } from '../../store';
import { serializeDate } from '../../format';

const urlActions = urlListSlice.actions;

function ScannerScreen(props) {
  const { navigation } = props;

  const onSuccess = useCallback((event) => {
    store.dispatch(urlActions.addUrl({
      url: event.data,
      date: serializeDate(new Date()),
    }));
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <QRCodeScanner onRead={onSuccess} />
    </View>
  );
}

export default ScannerScreen;
