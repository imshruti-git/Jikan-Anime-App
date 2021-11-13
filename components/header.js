
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

    return (
        <View style ={styles.header}>

            <Text style={styles.title}>Jikan Anime</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: 'black',
        
    },

    title: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 40,

    }
});