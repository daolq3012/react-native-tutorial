import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class HomeScreen extends Component {

  constructor(props, context) {
    super(props, context);
    this.onPressBasicProps = this.onPressBasicProps.bind(this);
    this.onPressStyles = this.onPressStyles.bind(this);
    this.onPressLayout = this.onPressLayout.bind(this);
  }

  onPressBasicProps(event) {
    this.props.navigation.navigate('PropsScreen', {name: 'Basic-Prof'})
  }

  onPressStyles(event) {
    this.props.navigation.navigate('StyleScreen', {name: 'Style'})
  }

  onPressLayout(event) {
    this.props.navigation.navigate('LayoutScreen', {name: 'Layout with Flexbox'})
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressBasicProps}
          title="Basic-Pros"
          color="#841584"
          accessibilityLabel="Learn more about Pros"/>
        <Button
          onPress={this.onPressStyles}
          title="Styles"
          color='skyblue'
          accessibilityLabel="Learn more about styles"/>
        <Button
          onPress={this.onPressLayout}
          title="Layout with Flexbox"
          color='powderblue'
          accessibilityLabel="Learn more about layout"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello_world: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
