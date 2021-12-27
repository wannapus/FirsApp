import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import commonStyles from './common-styles'
import ColumnItems from './column-items';
import commLayouts from './common-layouts'

export default function App() {
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.TextTitle1}>MONARCH</Text>
      <Text style={commonStyles.TextTitle}>Mr.WANNAPUS PHOTACHAREON</Text>
      <ColumnItems />
      <StatusBar style="auto" />
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEBEBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
TextmaneEng: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
*/