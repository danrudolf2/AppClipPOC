import {AppRegistry, StyleSheet, View, Text, Button} from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202A44',
  },
  text: {
    fontSize: 22,
    color: '#FFFFFF',
  },
});

const AppClipTest = () => (
  <View style={styles.view}>
    <Text style={styles.text}>App Clip in React Native</Text>
    <Button style={styles.text} title="Do a thing" />
  </View>
);

AppRegistry.registerComponent('AppClipTest', () => AppClipTest);
