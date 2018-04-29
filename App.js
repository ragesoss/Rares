import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CommonOrRare from './CommonOrRare';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{margin: 10}}>Open up App.js to start working on your app!</Text>
        <CommonOrRare />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#eee'
  },
});
