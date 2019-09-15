/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={styles.body}>
    <Text style={styles.sectionTitle}>ThatsUp</Text>

    </View>

  );
};

const styles = StyleSheet.create({
  
  body: {
    backgroundColor: 'white',
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  
  Title: {
    flex:1,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  
  
});

export default App;
