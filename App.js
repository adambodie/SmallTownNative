/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Great Small Towns to Visit
        </Text>
        <Text style={styles.paragraph}>
        by &lt;name&gt;Adam Bodie&lt;/name&gt;
        </Text>
        <Text style={styles.paragraph}>
          There&apos;s more to life than big city lights and super metropolis action. There&apos;s nothing wrong with getting away and visiting small towns. After all, with lots of commotion and jam-packed streets and buildings, there is absolutely nothing wrong with enjoying the quieter things in life. Small town folks, quiet strolls along the streets, little if any traffic. Those are the best things about small towns. Many of them might seem as passing points, but there are a few that are particularly fascinating, whether it&apos;s for scenery or historical significance. Here is a list (in alphabetical order by city name) for some great small towns to visit that I have personally visited.
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'anton-regular',
    padding: 20,
    margin: 0,
    color: 'black',
    borderBottomColor: 'white',
    borderBottomWidth: 10,
    backgroundColor: 'navy'
  },
  paragraph: {
    textAlign: 'center',
    color: '#000000',
    marginBottom: 5,
  },
});
