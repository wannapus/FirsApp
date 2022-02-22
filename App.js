import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput , Image } from 'react-native';
import Styles from './common-styles';
import CommonLayouts from './common-layouts'
import TextInputDemo from './text-input-demo'
import SwitchDemo from './switch-demo'
import ImageDemo from './image-demo'
const imgLogo = require('./assets/favicon.png')
import CommonProduct from './product'

export default function App() {
    const onPressButton1 = () => {
        Alert.alert('สวัสดีชาวโลก !')
    }
    const [text, onChangeText] = React.useState('Useless Text');
    return ( 
        <View style = {styles.container} >
            {/* <Text style = {styles.textColor }>Welcome to FirstApp</Text> */}
            {/* <Button title="คลิกที่นี่" onPress={onPressButton1}></Button> */}
            {/* <Image source={imgLogo} style={styles.imgLogo} /> */}
            {/* <TextInput style = {styles.input} placeholder="Username"></TextInput> */}
            {/* <TextInput style = {styles.input} placeholder="Password"></TextInput> */}
        {/* <TextInputDemo /> */}
        {/* <SwitchDemo /> */}
        {/* <ImageDemo /> */}
            <CommonProduct />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#339999',
        alignItems: 'center',
        justifyContent: 'center',
    },  
    textColor: {
        color: 'blue',
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    imgLogo: { width: 140, height: 140,}
});
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#339999',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    textRedbold: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
});
*/