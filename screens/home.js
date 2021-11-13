
import React, { useState, useEffect }  from 'react';
import { StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Text, SafeAreaView, Image, View } from 'react-native';

import Header from '../components/header';
import AnimeCard from '../components/AnimeCard';


const animeURL = 'https://api.jikan.moe/v3/top/anime/1/bypopularity ';
export default function Home({ navigation }) {
 
  const [isLoading, setLoading]= useState(true);
  const [data, setData] = useState([]);
  

  useEffect (() => {
    fetch(animeURL)
    .then((response) => response.json())
    .then((json) =>setData(json.top))
    .catch((error) => console.error(error))
    .finally(() =>setLoading(false));
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator /> : 
      <FlatList 
      columnWrapperStyle={{justifyContent: 'space-around',}}
      initialNumToRender={12}
      numColumns={2}
      data ={data}
      keyExtractor={(item) => item.mal_id.toString()}
      renderItem={({item }) => (
        <TouchableOpacity  onPress ={() => navigation.navigate('Details', {item})}>
          <AnimeCard>
          <Image style={styles.image} source={{uri:item.image_url}}/>
          <View style={styles.textcontainer}>
          <Text numberOfLines={2} style={styles.content}>{item.title}</Text>
          </View>
        </AnimeCard>  
        </TouchableOpacity>
        )}
      />}
   
              
    </SafeAreaView>
  
  );
}


  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    fontSize: 15,
    textAlign:'center',
    paddingVertical: 5,
    fontStyle: 'italic',
    color: '#fff',
  },
  image: {
    height: '85%',
    width: '100%',
    borderRadius: 5,
},
 textcontainer:{
   justifyContent:'center',
    }
});

