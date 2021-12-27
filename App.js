import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  commonStyles from './common-styles'
import  ColumnItems from './column-items'
import  Commonlayouts from './common-layouts'

export default function App() {
  return (
    <View style={commonStyles.container}>
     <Text style={commonStyles.TextTitle1}></Text>
      <Text style={commonStyles.TextTitle2}></Text>
      <Commonlayouts />
      <StatusBar style="auto" />
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextnameEng: {
    fontSize: 30,
    fontWeight: 'bold',
    color:'#FFD700',
    
  },
  Textnamethai: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#ffffff',
  },
});
*/