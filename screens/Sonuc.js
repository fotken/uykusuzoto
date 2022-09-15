
import React, { useState, useEffect} from "react";
import { View, Button, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, arrayUnion, updateDoc, update, query, where, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 






const Sonuc = ({route }) => {
 
    const {id}  = route.params;
    const navigation = useNavigation();

    
// iş tablosu oluşturuyoruz
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
   
    const mDoc = doc(db, "is", uid);
const paload = { 
  urunid: [],
  sayi: [],
  yikama: [],
  durum: []
};
setDoc(mDoc, paload);

// iş tablosu bitiş
  

  return (
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
 <ImageBackground
      source={require('/Users/macbookair/uykusuzoto/u.png')}
      resizeMode="cover"
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
      >

        <View style={{flex:1, marginRight:65}}>
    <ScrollView style={styles.genel}>
     

<View style={styles.yazi}>
               
               <Text style={styles.baslik}>    ÖDEME ALINMIŞTIR  </Text>

               
              
 </View>  
                <TouchableOpacity style={styles.button}  onPress={() =>  navigation.navigate('Yikama', {id} )  }  >
                             <Text style={styles.btext}>
                               PAKET Sayfasına Git
                             </Text>
            </TouchableOpacity>   
       
       
      
     </ScrollView>
     </View>
     </ImageBackground>  
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
          marginRight: 40 ,
          marginTop: 50  
        },
        ode: {
            flexDirection:"row",
            justifyContent: 'space-between',
            alignItems: "flex-start",
            marginBottom: 50,
            padding: 25,
            borderColor: 'black' ,
            borderWidth: 2
          
        },
        kisi: {
            flexDirection:"row",
            justifyContent: 'space-between',
            alignItems: "flex-start",
           
            padding: 15,
            borderColor: 'black' ,
           
          
        },
        paket: {
            fontSize: 23,
           
        },
        fiyat:{
            fontSize: 23,
            
        },
    rootScreen: {
          flex: 1,
          width: "100%",
          height: "100%",
          
         
        },
    backgroundImage: {
            opacity: 0.25,
        },
   
        yazi: {
            width: 335,
            height: 180,
            marginLeft:28,
            backgroundColor: 'white',
            borderWidth : 1,
            opacity: 0.8,
            marginTop: 100,
            marginBottom: 1,
            
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
       baslik:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      
        fontSize: 40,
        marginLeft: 70,
      
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
       metin : {
       
        fontWeight: 'bold',
        fontSize: 23,
        marginLeft: 10,
        marginBottom: 35
       },
       button: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 3,
          backgroundColor: 'red',
          borderColor: 'red',
          borderRadius: 20,
          width: 350,
          height: 100,
          marginLeft: 23,
          marginTop: 10

       },
       btext: {
          color: 'white',
        
          fontSize:25
       },
  })

export default Sonuc;
