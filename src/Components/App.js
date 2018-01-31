/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './Header'
export default class App extends Component<{}> {

  openDrawer() {
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    return (

      <View style={styles.container}>
        <Header navigation={this.props.navigation} headerHeading="Home Page"/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Welcome to Home Page
      </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  }
});
