//common-layouts.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export default function commonLayouts() {
    return (
        <View style={styles.container}>
            <View style={styles.item1}></View>
            <View style={styles.item2}></View>
            <View style={styles.item3}></View>
            <View style={styles.item4}></View>
            <View style={styles.item5}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',

    },
    item1: {
        height: 300,
        width: '100%',
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    },
    item2: {
        height: '10em',
        width: '10.1em',
        backgroundColor: 'green',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: '1.55%',


    },
    item3: {
        height: '10em',
        width: '10em',
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: '1.55%',

    },
    item4: {
        height: '10em',
        width: '10.1em',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: '1.55%',

    },
    item5: {
        height: '10em',
        width: '10em',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginRight: '1.55%',

    },
})
