/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import {Header} from './src/components/common';
import BookList from './src/components/bookList';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View >
          <Header headerText='Book List'/>
          <BookList/>
        </View>
      </Provider>
    );
  }
}

