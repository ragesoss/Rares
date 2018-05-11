import React from 'react';
import { View, Image } from 'react-native';

export default class CommonsImage extends React.Component {
  render() {
    if (!this.props.url) { return <View /> }
    return (
      <Image
        resizeMode='contain'
        style={{flex: 1, margin: 5, marginTop: 0}}
        source={{uri: this.props.url}}
      />
    );
  }
}
