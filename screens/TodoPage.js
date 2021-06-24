import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function TodoPage() {
    return (
        <View style={styles.container}>
         <Text>Open up App.js to start working on your app!</Text>
        </View>
    )
}


const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#0CF786',
        alignItems: 'center',
        justifyContent: 'center',
    }

})
