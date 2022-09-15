
import React, { useState, useEffect} from "react";
import { View, Button, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import RNPickerSelect from "react-native-picker-select";


const BayiKayit  = ({  route }  ) => {
  // HESABIM SAYFASINDAN GELEN USER  PROPS İÇİNDEN ID ÇEKİYORUZ
  const  id  = route.params.user.uid;
  const user = route.params.user;

//Ön kayıt boş atama
const mDoc = doc(db, "bayi", id);
const paload = {
  ad: ' ',
  soyad: ' ',
  telefon: ' ',
  adres: ' ',
  bolge: ' ',


};
setDoc(mDoc, paload);

  //-------------------------------------------------------------------------------
// Kaydetme Başlangıç

    const [ad, setAd] = React.useState('')
    const [soyad, setSoyad] = React.useState('')
    const [adres, setAdres] = React.useState('')
    const [telefon, setTelefon] = React.useState('')
    const [ language, setLanguage ] = useState("");

    const navigation = useNavigation();

    const kaydet = async () => {

    const myDoc = doc(db, "bayi", id);
    const payload = {
      ad: ad,
      soyad: soyad,
      telefon: telefon,
      adres: adres,
      bolge: language,
      
    };
   Alert.alert('Kaydedildi. Profil Sayfanıza Dönebilirsiniz.');
     await setDoc(myDoc, payload);
  
    
   };
     
  // Kaydetme BİTİŞ
  //-------------------------------------------------------------------------------




  //-------------------------------------------------------------------------------
  //OKUMA BAŞLANGIÇ
  


//-------------------------------------------------------------------------------
  //OKUMA BAŞLANGIÇ
  const cikis = () => {signOut(auth).then(() => {
    navigation.navigate('Hesabim')
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

              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Ad</Text>
                <TextInput value={ad} onChangeText={(text) => setAd(text)} style={styles.input} placeholder="Adınızı Giriniz" />
                
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Soyad</Text>
                <TextInput  value={soyad} onChangeText={(text) => setSoyad(text)} style={styles.input} placeholder="Soyadınızı Giriniz" />
               
              </View>
              
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Adres</Text>
                <TextInput multiline={true} value={adres} onChangeText={(text) => setAdres(text)} style={styles.adresinput} placeholder="Adres Giriniz" />
               
              </View>


              <View style={styles.container}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>
                {language ?
                  `Ev adresiniz ${language} bölgesi olarak seçilmiştir` :
                    "Adres Bölgenizi Seçiniz"
                }
            </Text>
            <RNPickerSelect
                placeholder={{ label: "Bölgenizi Seçiniz", value: null }}
                onValueChange={(language) => setLanguage(language)}
                items={[
                    { label: "ARNAVUTKÖY", value: "ARNAVUTKÖY" },
                    { label: "ATAŞEHİR", value: "1" },
                    { label: "AVCILAR", value: "AVCILAR" },
                    { label: "BAĞCILAR", value: "BAĞCILAR" },
                    { label: "BAHÇELİEVLER", value: "BAHÇELİEVLER" },
                    { label: "BAKIRKÖY", value: "BAKIRKÖY" },
                    { label: "BAŞAKŞEHİR", value: "BAŞAKŞEHİR" },
                    { label: "BAYRAMPAŞA", value: "BAYRAMPAŞA" },
                    { label: "BEŞİKTAŞ", value: "BEŞİKTAŞ" },
                    { label: "BEYKOZ", value: "BEYKOZ" },
                    { label: "BEYLİKDÜZÜ", value: "BEYLİKDÜZÜ" },
                    { label: "BEYOĞLU", value: "BEYOĞLU" },
                    { label: "BÜYÜKÇEKMECE", value: "BÜYÜKÇEKMECE" },
                    { label: "ÇATALCA", value: "ÇATALCA" },
                    { label: "ÇEKMEKÖY", value: "ÇEKMEKÖY" },
                    { label: "ESENLER", value: "ESENLER" },
                    { label: "ESENYURT", value: "ESENYURT" },
                    { label: "EYÜPSULTAN", value: "EYÜPSULTAN" },
                    { label: "FATİH", value: "FATİH" },
                    { label: "GAZİOSMANPAŞA", value: "GAZİOSMANPAŞA" },
                    { label: "GÜNGÖREN", value: "GÜNGÖREN" },
                    { label: "KADIKÖY", value: "KADIKÖY" },
                    { label: "KAĞITHANE", value: "KAĞITHANE" },
                    { label: "KARTAL", value: "KARTAL" },
                    { label: "KÜÇÜKÇEKMECE", value: "KÜÇÜKÇEKMECE" },
                    { label: "MALTEPE", value: "MALTEPE" },
                    { label: "PENDİK", value: "PENDİK" },
                    { label: "SANCAKTEPE", value: "SANCAKTEPE" },
                    { label: "SARIYER", value: "SARIYER" },
                    { label: "SİLİVRİ", value: "SİLİVRİ" },
                    { label: "SULTANBEYLİ", value: "SULTANBEYLİ" },
                    { label: "SULTANGAZİ", value: "SULTANGAZİ" },
                    { label: "ŞİLE", value: "ŞİLE" },
                    { label: "ŞİŞLİ", value: "ŞİŞLİ" },
                    { label: "TUZLA", value: "TUZLA" },
                    { label: "ÜMRANİYE", value: "ÜMRANİYE" },
                    { label: "ÜSKÜDAR", value: "ÜSKÜDAR" },
                    { label: "ZEYTİNBURNU", value: "ZEYTİNBURNU" },
                ]}
              style={pickerSelectStyles}
            />
        </View>


              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Telefon</Text>
                <TextInput value={telefon} onChangeText={(text) => setTelefon(text)} style={styles.input} placeholder="Telefon Numarası Giriniz" />
              </View>


              <TouchableOpacity  onPress={kaydet}   style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Kaydet</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate('BayiProfil', { user } )  }  style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Profil Sayfası</Text>
              </TouchableOpacity>
              <TouchableOpacity   onPress={cikis}  style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Çıkış</Text>
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
          width: "90%",
          height: "90%",
        },
    backgroundImage: {
            opacity: 0.25,
        },
        login: {
          width: 350,
          height: 630,
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
            borderColor: '#fff',
            borderWidth: 1,
            marginVertical: 30
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
          container: {
            width: 250,
            height: 100,
            borderColor: '#fff',
            borderWidth: 2,
            borderRadius: 10,
            padding: 10,
            marginVertical: 10,
            backgroundColor: '#ffffff90',
            marginBottom: 20
            
        }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30 // to ensure the text is never behind the icon
    }
});

export default BayiKayit;
