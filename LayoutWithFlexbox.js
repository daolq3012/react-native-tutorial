import React, { Component } from 'react';
import {StyleSheet, View } from 'react-native';

export default class LayoutWithFlexbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Fixed dimentions */}
        <View style={{width: 50, height: 30, backgroundColor: 'powderblue'}} />
        <View style={styles.child_view_2} />
        <View style={styles.child_view_container}>
            {/* Flex dimentions */}
            <View style={{flex: 1, backgroundColor: 'green'}}/>
            <View style={{flex: 1, backgroundColor: 'blue'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    child_view_2: {
        width: 100,
        height: 60, 
        backgroundColor: 'skyblue',
    },
    child_view_container: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 3,
        display: 'flex',
        borderColor: 'red',
        borderRadius: 5,
        width: 150, 
        height: 150, 
        backgroundColor: 'steelblue',
    }
  });
