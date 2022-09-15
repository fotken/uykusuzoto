
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
import { CompassOutlined } from "@ant-design/icons";



const Kart = () => {
  const navigation = useNavigation();

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

 //-----------------------------------------------

  let numList = [];
  for (let index = 0; index < yikama.urunid*4 ; index++) {
     numList.push(index);  
    
    } ;
  
    const cikis = () => {signOut(auth).then(() => {
      navigation.navigate('Hesabım')
    }).catch((error) => {
      // An error happened.
    });} 
  
   //-----------------------------------------------------------------
  return (
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
    <View style={styles.genel}>
     <ImageBackground
     source={require('/Users/macbookair/uykusuzoto/u.png')}
     resizeMode="cover"
     style={styles.rootScreen}
     imageStyle={styles.backgroundImage}
     >
     < Button title="Geri Dön" onPress={() => navigation.goBack()} />
     <ScrollView>
      <Image source={require('/Users/macbookair/uykusuzoto/u.png')} style={styles.image} />
   
        <View style={{ marginLeft:10 }}>
               <Text style=
                  {{ margin: 10, alignItems: "center", textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90',}}>
                  {user1.ad} {user1.soyad} 
                </Text>
    
                <Text style=
                     {{margin: 10, alignItems: "center", textAlign: "center",fontSize: 26, backgroundColor: '#ffffff90',}}>
                      {user1.arac}  
               </Text> 
               <Text style=
                  {{margin: 10, alignItems: "center", textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90',}}>
                     {user1.plaka} 
                </Text> 
    
               <Text style=
                    {{margin: 10, alignItems: "center", textAlign: "center", fontSize: 26, backgroundColor: '#e64a00',}}>
                       PAKET     --  {yikama.urunid}  --
               </Text> 
    
      { numList.map((num,index) =>(
            <View  key={index.toString()}>
              <View style={{width: 335,
                   height: 180,
                   marginLeft: 60,
                   backgroundColor: 'white',
                   borderWidth : 1,
                   borderRadius: 50,
                   opacity: 0.8,
                   marginTop: 40,
               }} >

                   <Text  style={{ marginTop: 40,  textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90' }}  >      
                     {num+1} . Yıkama   
                   </Text>
                   <Text  style={{ margin: 10,  textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90' }}  >      
  
                      { yikama.yikama[num+1]}
                   </Text>
              </View>

              <View style={{width: 335,
                    height: 200,
                    marginLeft: 60,
                    backgroundColor: '#6792F090',
                   borderWidth : 1,
                   opacity: 0.8,
                   marginTop: 2,
                    marginBottom: 60   }}  >

                            <Text  style={{ marginTop: 30,  textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90' }}  >      
                             {num+1} . Yıkama Rapor  
                              </Text>
                            <Text  style={{ margin: 10, textAlign: "center", fontSize: 26,  backgroundColor: '#6792F090' }}  >      
  
                              {yikama.durum[num+1]}
                            </Text>
                 </View>
                
               </View>
               
              )
             )}
              <TouchableOpacity  onPress={cikis}  style={{width: 335,
                    height: 50,
                    marginLeft: 60,
                    backgroundColor: 'red',
                   borderWidth : 1,
                   opacity: 0.8,
                   marginTop: 2,
                    marginBottom: 60   }}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'white', alignItems: "center",
    textAlign: "center" }}>Çıkış Yap</Text>
              </TouchableOpacity>
          </View>
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
          marginLeft: 100,
          margin: 20,   
        
        },
    rootScreen: {
          flex: 1,
          width: "90%",
          height: "90%",
        },
    backgroundImage: {
            opacity: 0.07,
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 2,
            marginVertical: 20,
            marginLeft: 199,
            marginTop: 1,
          
        },
        
  })

export default Kart;
