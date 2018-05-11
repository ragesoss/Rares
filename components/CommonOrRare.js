import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import CommonsImage from './CommonsImage';
import randomImage from '../utils/randomImage';
import submitComparison from '../actions/submitComparison';

export default class CommonOrRare extends React.Component { 
  constructor () {
    super()
    this.state = { firstUrl: null, secondUrl: null }
  }

  componentDidMount() {
    this.reload()
  }

  reload() {
    this.setState({ firstUrl: null, secondUrl: null })
    randomImage().then(url => this.setState({firstUrl: url}))
    randomImage().then(url => this.setState({secondUrl: url}))
  }

  render() {
    const firstImage = this.state.firstUrl;
    const secondImage = this.state.secondUrl;
    const chooseFirstImage = () => submitComparison(firstImage, secondImage);
    const chooseSecondImage = () => submitComparison(secondImage, firstImage);

    return (
      <View style={{flex: 1}}>
        <TouchableHighlight onPress={chooseFirstImage} underlayColor="green" style={{flex: 1}}>
          <CommonsImage
            url={this.state.firstUrl}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={chooseSecondImage} underlayColor="green" style={{flex: 1}}>
          <CommonsImage
            style={{flex: 1}}
            url={this.state.secondUrl}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
