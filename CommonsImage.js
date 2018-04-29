import React from 'react';
import { Image } from 'react-native';

export default class CommonsImage extends React.Component {
  render() {
    return (
      <Image
        style={{flex: 1, margin: 5, marginTop: 0}}
        source={{uri: this.props.url}}
      />
    );
  }
}
