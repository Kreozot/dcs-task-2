import React from 'react';
import { WebView } from 'react-native-webview';

export default function MyWeb(props) {
  const { url } = props.route.params;

  console.log(url);
  return (
    <WebView source={{ uri: url }} />
  );
}
