
import React, { useState, useEffect} from "react";
import { View, Button, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 



const Paketler = () => {
 
  
  const navigation = useNavigation();
  // Okuma Başlangıç-paket-1
  //-----------------------------------------------------------------
  

//Paket-4 bitiş
//---------------------------------

  // Okuma Bitiş

  return (
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
    <ScrollView style={styles.genel}>
      <ImageBackground
      source={require('/Users/macbookair/uykusuzoto/u.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >

<Button title="Geri Dön" onPress={() => navigation.goBack()} />
        
        <View style={styles.kabin}>         
          <Text style={styles.title}>    PAKET 1 </Text>
                   <Text style={styles.paragraf}> 1 HAFTADA  1 KEZ YIKAMA
                     </Text>
                         <Text style={styles.paragraf}>                          + </Text>
                         <Text style={styles.paragraf}>                 Cilalama </Text>
                         <Text style={styles.paragraf}>                   499 TL</Text>
                                  
        </View>  
        <View style={styles.kabin}>
          <Text style={styles.title}>    PAKET 2 </Text>
                   <Text style={styles.paragraf}>
                     1 HAFTADA  2 KEZ YIKAMA
                   </Text>
                   <Text style={styles.paragraf}>                            + </Text>
                         <Text style={styles.paragraf}>                   Cilalama </Text>
                         <Text style={styles.paragraf}>                    699  TL</Text>
                         
        </View>  
        <View style={styles.kabin}>
          <Text style={styles.title}>   PAKET 3</Text>
                   <Text style={styles.paragraf}>
                     1 HAFTADA  3 KEZ YIKAMA
                   </Text>
                   <Text style={styles.paragraf}>                         + </Text>
                         <Text style={styles.paragraf}>                  Cilalama </Text>
                         <Text style={styles.paragraf}>                    899  TL</Text>
                        
        </View>  
        <View style={styles.kabin}>
          <Text style={styles.title}>   PAKET 4  </Text>
                   <Text style={styles.paragraf}>1 HAFTADA HERGÜN YIKAMA
                   </Text>   
                   <Text style={styles.paragraf}>                           + </Text>
                         <Text style={styles.paragraf}>                   Cilalama </Text>
                         <Text style={styles.paragraf}>                   1299  TL</Text>
                        
        </View>  
       
      </ImageBackground>  
     </ScrollView>
   </LinearGradient>
      
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
        }, 
        genel: {
          flex: 1, 
          width: 550,
          height: 200,
          marginLeft: 100   
        },
    rootScreen: {
          flex: 1,
          width: "90%",
          height: "90%",
        },
    backgroundImage: {
            opacity: 0.25,
        },
    kabin: {
     width: 339,
     height: 380,
     marginLeft: 60,
     backgroundColor: 'white',
     borderWidth : 1,
     borderRadius: 50,
     opacity: 0.8,
     marginTop: 40,
     marginBottom: 20
        },
        title: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,

          fontSize: 40,
          marginLeft: 70,
          marginBottom: 20
       },
       paragraf: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
      
         fontWeight: 'bold',
         fontSize: 23,
         padding: 10,
         marginLeft: 10
       },
       button: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          backgroundColor: 'red',
          borderColor: 'red',
          borderRadius: 20,
          width: 250,
          marginLeft: 45

       },
       btext: {
          color: 'white',
        
          fontSize:25
       },
  })

export default Paketler;

