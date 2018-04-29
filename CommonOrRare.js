import React from 'react';
import { View } from 'react-native';
import CommonsImage from './CommonsImage';

export default class CommonOrRare extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <CommonsImage
          url={'https://upload.wikimedia.org/wikipedia/commons/9/9f/Palm_Springs_International_Airport_photo_D_Ramey_Logan.jpg'}
        />
        <CommonsImage
          style={{flex: 1}}
          url={'https://upload.wikimedia.org/wikipedia/commons/1/16/Yellow-billed_oxpeckers_%28Buphagus_africanus_africanus%29_on_zebra.jpg'}
        />
      </View>
    );
  }
}
