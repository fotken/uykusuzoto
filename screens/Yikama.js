

import React, { useState, useEffect, useRef} from "react";
import { View, Button,  Touchable, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, get, updateDoc, arrayUnion, firebase , getDoc, setDoc, addDoc, collection, onSnapshot, connectFirestoreEmulator, Firestore} from 'firebase/firestore';
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { add } from "react-native-reanimated";
import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved, push } from "firebase/database";
import {   query, where, getDocs } from "firebase/firestore";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const Yikama = ({route }) => {
  const navigation = useNavigation();
  //ürün id si aldık
  const {id}  = route.params;

  





  //ürün okuma-----------------------
  
 // Okuma Başlangıç-paket
  //-----------------------------------------------------------------

  const [urun1, setUrun1] = useState('null')
  useEffect(()=> {
  const paketDoc = doc(db, "urun", id )
  getDoc(paketDoc)
  // Handling Promises
  .then((snapshot) => {
    // MARK: Success
    if (snapshot.exists) {
      setUrun1(snapshot.data());
      
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

// kullanıcı  bilgileri al   ----------------- 
const auth = getAuth();
const user = auth.currentUser;
const uid = user.uid;
const [user1, setUser1] = useState('null');
useEffect(() => {
const myDoc = doc(db, "musteri", uid )
getDoc(myDoc)
  // Handling Promises
  .then((snapshot) => {
    // MARK: Success
    if (snapshot.exists) {
      setUser1(snapshot.data())
    }
    else {
      alert("No Doc Found")
    }
  })
  .catch((error) => {
    // MARK: Failure
    alert(error.message)
  })
},[]);
//------------------------------------------------
//iş tablosuna ilk atama  başlangıç---------------------------------------------------

//Ön kayıt boş atama



  //-------------------------------------------------------------------------------


 
// iş tablosuna ilk atama  bitiş---------------------------------------------------





  
  // iş tablosu ürün id'ye veri ataması
     const washingtonRef = doc(db,  "is", uid);
      updateDoc(washingtonRef, {
         urunid: arrayUnion(id),     
     });
//iş tablosu ürünid veri ataması
 
 
 
// Tarih Başlangıç ---------------------------------------------

const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, setText] = useState('Tarih Seçilmedi');
  
 
 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  
  const handleConfirm = (date) => {
  
    setText(date.getDate() + '/' +(date.getMonth() + 1 ) + '/' + date.getFullYear() );
   //+ '   Saat: ' + date.getHours() + ' | Dakika ' + date.getMinutes()
    hideDatePicker();
    
  };



 //yikama dizisine veri atama
  updateDoc(washingtonRef, {
     yikama: arrayUnion(text)   
 //yıkama dizisine veri atama bitiş   
 });


 //Diziye atanana veri okuma başlangıç

 const [yikama, setYikama] = useState('null')
 
 const myDoc = doc(db, "is", uid)

 getDoc(myDoc)
 // Handling Promises
 .then((snapshot) => {
   // MARK: Success
   if (snapshot.exists) {
    
    setYikama(snapshot.data())
 
   }
   else {
     alert("No Doc Found")
   }
 })
 .catch((error) => {
   // MARK: Failure
   alert(error.message)
 })



 //diziye atanan veri atama




// Tarih Bitiş ------------------------------------------------


let numList = [];
    for (let index = 0; index < urun1.sayi; index++) {
       numList.push(index);  
      } ;

 
     
  return (

   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
    <View style={styles.genel}>
     <ImageBackground
     source={require('/Users/macbookair/uykusuzoto/u.png')}
     resizeMode="cover"
     style={styles.rootScreen}
     imageStyle={styles.backgroundImage}
     >
    <ScrollView>

   
   <Text style={styles.text}>   {user1.ad}  {user1.soyad} </Text>
   <Text style={styles.text}>  {user1.arac}  </Text>
   <Text style={styles.text}>  {user1.plaka}  </Text>
   <Text style={styles.text}>     {urun1.paket}  </Text>
   <Text style={styles.text}>    {urun1.sayi}  Tane Tarih Seçimi Yapınız  </Text>
 

  { numList.map((num, index) =>


    <View style={{width: 335,
      height: 180,
      marginLeft: 60,
      backgroundColor: 'white',
      borderWidth : 1,
      borderRadius: 50,
      opacity: 0.8,
      marginTop: 40,
      marginBottom: 20   }} key={index.toString()}>
    
    <Text style={{marginLeft :130, marginTop:20 }}  >      
    {num+1} . yıkama
    </Text>
   
   
    <View style={{flex:1, textAlign:'center', justifyContent:'center', marginRight: 1  }}>
    <Button style={styles.text} title="Tarih Seçimi" onPress={showDatePicker} />
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />

  </View>

   <Text style={{marginLeft :130, marginBottom: 30  }}> {yikama.yikama[num+1]}  </Text>


   
   
    </View>

  )}
      
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Kart', {id} )  }} >
                             <Text style={styles.btext}>
                              PAKETİM SAYFANA GİT
                             </Text>
            </TouchableOpacity>   

      </ScrollView>
     </ImageBackground>  
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
        input: {
            width: 250,
            height: 40,
            borderColor: '#fff',
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#ffffff90',
            marginBottom: 20,
            marginLeft:50
          },
          text : {
            alignItems: "center",
            textAlign: "center",
            flex: 1,
            fontWeight: 'bold',
            fontSize: 23,
            padding: 10,
            backgroundColor: '#ffffff90',
            marginRight: 18,
           
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
          justifyContent: 'center',
          alignItems: "center",
          textAlign: "center",
          flex: 1,
          fontWeight: 'bold',
          fontSize: 23,
          padding: 30,
          color: 'white',
          marginRight: 23,
         }
  })
 
export default Yikama;
