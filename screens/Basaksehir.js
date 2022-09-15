
import React, { useState, useEffect, useRef} from "react";
import { View, Button,  Touchable, Pressable, ImageBackground, FlatList, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, get, updateDoc, arrayUnion, firebase , getDoc, setDoc, addDoc, collection, onSnapshot, connectFirestoreEmulator, Firestore} from 'firebase/firestore';
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { add } from "react-native-reanimated";
import { getDatabase, ref, onChildAdded, onChildChanged, onChildRemoved, push } from "firebase/database";
import { query, where, getDocs } from "firebase/firestore";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { CompassOutlined, NumberOutlined } from "@ant-design/icons";
import * as firestore from "firebase/firestore";



const Basaksehir = () => {
  const navigation = useNavigation();

    // kullanıcı  bilgileri al   ----------------- 
const auth = getAuth();
const user = auth.currentUser;
const uid = user.uid;
const [user1, setUser1] = useState('null');
useEffect(() => {
const myDoc = doc(db, "bayi", uid )
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
// bayi tablosundan müşterileri çekme

const id = '1';
const [user2, setUser2] = useState(['']);
useEffect(() => {
const myDocc = doc(db,"bayi","BAŞAKŞEHİR")
getDoc(myDocc)
  // Handling Promises
  .then((snapshot) => {
    // MARK: Success
    if (snapshot.exists){
      setUser2(snapshot.data().ad)
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

console.log(user2)


//------


const [user3, setUser3] = useState(['']);
useEffect(() => {
const myDocc = doc(db,"bayi","BAŞAKŞEHİR")
getDoc(myDocc)
  // Handling Promises
  .then((snapshot) => {
    // MARK: Success
    if (snapshot.exists){
      setUser3(snapshot.data().soyad)
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








// bayi tablosundan müşterileri çekme



 //-----------------------------------------------------------------
 let numList = [];
 for (let index = 0; index < user2.length; index++) {
    numList.push(index);  
   } ;

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
                      {user1.bolge}  Üye Listesi
               </Text> 
               <Text style=
                  {{margin: 10, alignItems: "center", textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90',}}>
               </Text> 
      

      { numList.map((num,index) =>(
            
              <View style={{width: 335,
                   height: 180,
                   marginLeft: 60,
                   backgroundColor: 'white',
                   borderWidth : 1,
                   borderRadius: 50,
                   opacity: 0.8,
                   marginTop: 40,
               }} key={index.toString()}>
              
                   <Text  style={{ marginTop: 40,  textAlign: "center", fontSize: 26, backgroundColor: '#ffffff90' }}  >      
                      {num+1} . müşteri {user2[num]} {user3[num]}
                   </Text>
                 
                  
               </View>
              )
       )}
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
          
        }
  })

export default Basaksehir;
