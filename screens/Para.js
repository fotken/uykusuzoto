
import React, { useState, useEffect} from "react";
import { View, Button, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 



const Para = ({route }) => {
    const {id }  = route.params;
    
    
    const navigation = useNavigation();
  // Okuma Başlangıç-paket-1
  //-----------------------------------------------------------------
  const [urun1, setUrun1] = useState('null')
  useEffect(()=> {
  const paketDoc = doc(db, "urun", id )
  getDoc(paketDoc)
  // Handling Promises
  .then((snapshot) => {
    // MARK: Success
    if (snapshot.exists) {
      setUrun1(snapshot.data())
    }
    else {
      alert("Veri Bulunmadı")
    }
  })
  .catch((error) => {
    // MARK: Failure
    alert(error.message)
  })
},[])
   //-----------------------------------------------------------------
  
//Okuma Bitiş

  // Okuma Bitiş


  // müşteri okuma başlangıç
  //----------------------------------------------------------------------

  // kullanıcı  bilgileri al    
const auth = getAuth();
const user2 = auth.currentUser;
const uid = user2.uid;
const [user, setUser] = useState('null');
useEffect(() => {
const myDoc = doc(db, "musteri", uid );
getDoc(myDoc)
  // Handling Promises
  .then((snapshot) => {
    // MARK: Success
    if (snapshot.exists) {
      setUser(snapshot.data())
    }
    else {
      alert("No Doc Found")
    }
  })
  .catch((error) => {
    // MARK: Failure
    alert(error.message)
  })
//------------------------------------------------
},[])




  //müşteri okuma bitiş
  //----------------------------------------------------------------------

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





<View style={styles.yazi}>
               
               <Text style={styles.baslik}> ÖDEME      SAYFASI </Text>

                <View style={styles.ode}>
                        <Text style={styles.paket}>   
                        {urun1.paket}
                          </Text>
                          <Text style={styles.fiyat}>   
                        {urun1.fiyat} TL
                        </Text>
                </View>
                <View style={styles.kisi}>
                        <Text style={styles.paket}>   
                          Ad :
                          </Text>
                          <Text style={styles.fiyat}>   
                        {user.ad}
                        </Text>
                </View>
                <View style={styles.kisi}>
                        <Text style={styles.paket}>   
                          Soyad :
                          </Text>
                          <Text style={styles.fiyat}>   
                        {user.soyad}
                        </Text>
                </View>
 </View>  
                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Sonuc', {  id} )  }} >
                             <Text style={styles.btext}>
                               ÖDEME   YAP
                             </Text>
            </TouchableOpacity>   
       
       
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
          marginLeft: 100 ,
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
          width: "90%",
          height: "90%",
        },
    backgroundImage: {
            opacity: 0.25,
        },
   
        yazi: {
            width: 335,
            height: 480,
            marginLeft: 60,
            backgroundColor: 'white',
            borderWidth : 1,
            opacity: 0.8,
            marginTop: 10,
            marginBottom: 1
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
        marginLeft: 97,
      
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
          marginLeft: 55,
          marginTop: 10

       },
       btext: {
          color: 'white',
     
          fontSize:25
       },
  })

export default Para;
