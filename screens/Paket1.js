
import React, { useState, useEffect} from "react";
import { View, Button, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 



const Paket1 = () => {
  
    const navigation = useNavigation();
  // Okuma Başlangıç-paket-1
  //-----------------------------------------------------------------
  
  const [urun1, setUrun1] = useState('null')
  const id= '1'
  useEffect(() => {
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
               
               <Text style={styles.baslik}> PAKET 1</Text>
                        <Text style={styles.metin}>   
                        1. Paketi almanız durumunda seçtiğiniz tarihlere göre  "Haftada 1 kere yani ayda 4 kere yıkama ve cilalama işlemine tabi tutuyoruz." 
                          </Text>
                           
                           
                    
             </View>  
        <View style={styles.kabin }>
               
          <Text style={styles.title}> {urun1.paket}</Text>
                   <Text style={styles.paragraf}>    {urun1.yikama}
                     </Text>
                         <Text style={styles.paragraf}>                            + </Text>
                         <Text style={styles.paragraf}>                    Cilalama </Text>
                         <Text style={styles.paragraf}>                       {urun1.fiyat} TL</Text>
                         <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Para', {  id } )  }} >
                             <Text style={styles.btext}>
                               SATIN AL
                             </Text>
                         </TouchableOpacity>
               
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
      flex:1,
     width: 335,
     height: 380,
     marginLeft: 60,
     backgroundColor: 'white',
     borderWidth : 1,
     borderRadius: 50,
     opacity: 0.8,
     marginTop: 3,
     marginBottom: 1
        },
        yazi: {
            width: 335,
            height: 280,
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
          width: 250,
          marginLeft: 45

       },
       btext: {
          color: 'white',
     
          fontSize:25
       },
  })

export default Paket1;
