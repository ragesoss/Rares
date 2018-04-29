import React from 'react';
import { View } from 'react-native';
import CommonsImage from './CommonsImage';
import randomImage from '../utils/randomImage';

export default class CommonOrRare extends React.Component { 
  render() {
    return (
      <View style={{flex: 1}}>
        <CommonsImage
          fetchUrl={randomImage}
        />
        <CommonsImage
          style={{flex: 1}}
          fetchUrl={randomImage}
        />
      </View>
    );
  }
}
