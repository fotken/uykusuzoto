
import React from "react";
import { View, Button, Text, StyleSheet, Image, Dimensions, useState, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';



const Home = ({navigation}) => {
  return (
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
        <View style={styles.logov}>
        <Image style={styles.logo} source={require('/Users/macbookair/uykusuzoto/u.png')} />
        </View>
        <Text style={styles.text}>Uykusuz Oto Yıkama</Text>
    
      <Video
       source={require('/Users/macbookair/uykusuzoto/u.mp4')}
       shouldPlay
       useNativeControls
       loop={true}
       isLooping
       rate={1.0}
       volume={1.0}
       muted={false}
       autoplay={true}
       repeat={true}
       resizeMode="cover"
       style={{ width: "90%", height: "80%",  flex: 5, marginBottom: 30
       }}
      />
      <View style={styles.container}>
      <Image style={styles.photo} source={require('/Users/macbookair/uykusuzoto/ur.png')} />
        <TouchableOpacity>
          <Text style={styles.text} onPress={() => navigation.navigate("Detay")}  >
            Detaylar için tıklayınız...
          </Text>
        </TouchableOpacity>     
      </View>
   </LinearGradient>
      
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
        }, 
  logov: {
    width: 210,
    height: 220,
    marginTop: 5
   
  },
  logo: {
    width: "100%",
    height: "100%",
    marginVertical: 1,
    alignItems: "center",
  },
  text: { 
    color:'black',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
   
    }, 
    container: {
     width: 350,
     height: 500,
     flex: 4,
     backgroundColor: 'gray',
     marginBottom: 10,
     backgroundColor: 'white',
     borderWidth :1
    },
  photo: {
   width: 350, 
   height: 200, 
   flex: 3, 
   borderWidth: 1, 
},    
    })

export default Home;