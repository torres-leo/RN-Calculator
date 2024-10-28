import React from 'react';
import {StatusBar, View} from 'react-native';
import {Calculator} from '@app/presentation/screens/Calculator';
import {styles} from './config/app-theme';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />

      <Calculator />
    </View>
  );
}

export default App;
