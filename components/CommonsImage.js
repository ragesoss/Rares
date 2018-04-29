import React from 'react';
import { View, Image } from 'react-native';

export default class CommonsImage extends React.Component {
  constructor () {
    super()
    this.state = { url: null }
  }

  componentDidMount() {
    return this.props.fetchUrl()
      .then(url => this.setState({url: url}))
  }

  render() {
    console.log(this.state.url)
    if (!this.state.url) { return <View /> }

    return (
      <Image
        resizeMode='contain'
        style={{flex: 1, margin: 5, marginTop: 0}}
        source={{uri: this.state.url}}
      />
    );
  }
}
