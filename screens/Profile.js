
import React, { useState, useEffect} from "react";
import { View, Button, Touchable, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 




const Profile  = ({ route } ) => {
  // HESABIM SAYFASINDAN GELEN USER  PROPS İÇİNDEN ID ÇEKİYORUZ
  const  id  = route.params.user.uid;

  const nuser = route.params.user;






  //-------------------------------------------------------------------------------
// Kaydetme Başlangıç

    const [ad, setAd] = React.useState('')
    const [soyad, setSoyad] = React.useState('')
    const [adres, setAdres] = React.useState('')
    const [telefon, setTelefon] = React.useState('')
    const [arac, setArac] = React.useState('')
    const [plaka, setPlaka] = React.useState('')
    const [renk, setRenk] = React.useState('')

  
    const navigation = useNavigation();

    const kaydet = async () => {

    const myDoc = doc(db, "musteri", id);
    const payload = {
 
      ad: ad,  
      soyad: soyad,
      telefon: telefon,
      adres: adres,
      arac: arac,
      renk: renk,
      plaka: plaka
    
    };

     await setDoc(myDoc, payload);
    
   };
     
  // Kaydetme BİTİŞ
  //-------------------------------------------------------------------------------



  //-------------------------------------------------------------------------------
  //OKUMA BAŞLANGIÇ
   const [user, setUser] = useState('null')
  
   
    // MARK: Reading Doc
// You can read what ever document by changing the collection and document path here

const myDoc = doc(db, "musteri", id )
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


//-------------------------------------------------------------------------------
  //OKUMA BİTİŞ


//-------------------------------------------------------------------------------
  //GÜNCELLEME BAŞLANGIÇ

  



//-------------------------------------------------------------------------------
  //GÜNCELLEME BİTİŞ
  const cikis = () => {signOut(auth).then(() => {
    navigation.navigate('Hesabım')
  }).catch((error) => {
    // An error happened.
  });} 


  
  return (
     
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
    <View style={styles.genel}>
     
     <ImageBackground
     source={require('/Users/macbookair/uykusuzoto/u.png')}
     resizeMode="cover"
     style={styles.rootScreen}
     imageStyle={styles.backgroundImage}
     >   
     
  
         
       
        
         <View style={styles.login}>
                 <ScrollView>
              <Image source={require('/Users/macbookair/uykusuzoto/u.png')} style={styles.profilePicture} />
           
              <View >
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Ad</Text>
                <TextInput value={user.ad} onChangeText={(text) => setAd(text)} style={styles.input} placeholder="Adınızı Giriniz" />
           
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Soyad</Text>
                <TextInput  value={user.soyad} onChangeText={(text) => setSoyad(text)} style={styles.input} placeholder="Soyadınızı Giriniz" />
               
              </View>
              
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Adres</Text>
                <TextInput multiline={true} value={user.adres} onChangeText={(text) => setAdres(text)} style={styles.adresinput} placeholder="Adres Giriniz" />
               
              </View>

              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Bölge</Text>
                <TextInput value={user.bolge} onChangeText={(text) => setTelefon(text)} style={styles.input} placeholder="Telefon Numarası Giriniz" />
              </View>


              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Telefon</Text>
                <TextInput value={user.telefon} onChangeText={(text) => setTelefon(text)} style={styles.input} placeholder="Telefon Numarası Giriniz" />
              </View>

             


              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Araç Modeli</Text>
                <TextInput  value={user.arac} onChangeText={(text) => setArac(text)} style={styles.input} placeholder="Soyadınızı Giriniz" />
               
              </View>
              
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Renk</Text>
                <TextInput  value={user.renk} onChangeText={(text) => setRenk(text)} style={styles.input} placeholder="Adres Giriniz" />
               
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Plaka</Text>
                <TextInput value={user.plaka} onChangeText={(text) => setPlaka(text)} style={styles.input} placeholder="Telefon Numarası Giriniz" />
              </View>


              <TouchableOpacity  onPress={() => { navigation.navigate('Kart') }}   style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text   onPress={() => { navigation.navigate('Kart' )  }}  style={{fontSize: 23, fontWeight: '400', color: 'black'}}>PAKETİM</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => { navigation.navigate('Paketler') }}   style={[styles.button, {backgroundColor: 'red'}]}>
                <Text style={{fontSize: 23, fontWeight: '400', color: 'black'}}>PAKET AL</Text>
              </TouchableOpacity>
              
              <TouchableOpacity  onPress={() => { navigation.navigate('Guncelle', {nuser}) }}  style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 23, fontWeight: '400', color: 'black'}}>PROFİLİMİ GÜNCELLE</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={cikis}  style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 23, fontWeight: '400', color: 'black', marginBottom: 5  }}>ÇIKIŞ YAP</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={cikis}  style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black', marginBottom: 20  }}>Çıkış Yap</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>









     
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
          height: 400,
          marginLeft: 200   
        },
    rootScreen: {
          flex: 1,
          width: "85%",
          height: "60%",
        },
    backgroundImage: {
            opacity: 0.10,
        },
        login: {
            width: 350,
            height: 690,
            borderColor: '#fff',
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            alignItems: 'center',
          },
          profilePicture: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderColor: 'white',
            borderWidth: 2,
            marginVertical: 20,
            marginLeft: 60,
            marginTop: 1,
           
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
            marginBottom: 20
          },
          adresinput: {
            width: 250,
            height: 140,
            borderColor: '#fff',
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#ffffff90',
            marginBottom: 20
          },
          button: {
            width: 250,
            height: 40,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            borderColor: '#fff',
            borderWidth: 1,
          },
   
  })

export default Profile;
