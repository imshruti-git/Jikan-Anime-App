import React from "react";
import { StyleSheet, View } from 'react-native';

export default function AnimeCard(props) {
    return (
      <View style={styles.card}>
        <View style={styles.cardContent}>
          { props.children }
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    card: {
      borderRadius: 4,
      height:280,
      width:170,
      backgroundColor: 'black',
      marginVertical: 10,
    },
    cardContent: {
      justifyContent:'center',
      alignItems: 'center',
      
    }
  });