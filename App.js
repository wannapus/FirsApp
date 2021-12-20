import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextnameEng}>Mr.WANNAPUS PHOTACHAREON</Text>
      <Text style={styles.Textnamethai}>MONARCH</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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
