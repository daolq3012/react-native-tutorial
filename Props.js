import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Custom React-Components
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.custom_name}!</Text>
      </View>
    );
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting custom_name='Rexxar' />
        <Greeting custom_name='Jaina' />
        <Greeting custom_name='Valeera' />
      </View>
    );
  }
}
