import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:30,
        backgroundColor:'coral',

    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:20
    }
})