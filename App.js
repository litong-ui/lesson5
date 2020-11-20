/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MovieList} from './Movies.js';
import {BoatList} from './Boats.js';

const App: () => React$Node = () => {
  return (
    <ScrollView>
      <View>
        <Text>Lesson 05 Exercises</Text>
        <MovieList />
        <Text>GetABoat - For Sale </Text>
        <BoatList />
      </View>
    </ScrollView>
  );
};
export default App;
