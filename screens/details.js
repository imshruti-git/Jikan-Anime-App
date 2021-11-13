
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';

export default function Details({ route }) {
  const [isLoading, setLoading]= useState(true);
  const [info, setInfo] = useState([]);
  
  const { item } = route.params;

  useEffect (() => {
    fetch('https://api.jikan.moe/v3/anime/'+item.mal_id)
    .then((response) => response.json())
    .then((json) =>setInfo(json))
    .catch((error) => console.error(error))
    .finally(() =>setLoading(false));
  }, []);

    return (
      <View style={styles.container}>
        {isLoading ? <ActivityIndicator /> :
        <ScrollView>
          <View style={{alignItems:'center'}}>
          <Image style={styles.image} source={{uri:item.image_url}}/> 
          </View>
          <View style={styles.content}>
          <Text style={styles.text}>Title:<Text style={styles.secondText}>{item.title} </Text></Text>
          <Text style={styles.text}> Episodes: <Text style={styles.secondText}>{item.episodes} </Text></Text>
          <Text style={styles.text}> Rating: <Text style={styles.secondText}>{item.score} </Text></Text>
          <Text style={styles.secondText}>{info.synopsis} </Text>
          </View>
          </ScrollView>
           } 
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },

    image: {
      height: 300, 
      width:'70%',
      marginVertical: 10,

    },

    content: {
      marginHorizontal:30,
      
    },

    text: {
        paddingVertical:8,
        color: '#fff',
        fontSize: 15,
        

    },
    secondText: {
      color: 'pink',
      fontSize: 15,
      textAlign: 'justify',
    }
  });