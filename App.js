import React from 'react';
import { View } from 'react-native';
//import {createStore, applyMiddleware} from 'redux';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import reducers from './app/reducers';
import Body from './app/components/Body';

export default class App extends React.Component  {
  render() {
    return (
      <Provider store = {createStore(reducers, {} , compose(applyMiddleware(thunk)))}>
        <View>
          <Body/>
        </View>
      </Provider>
    );
  }
}

