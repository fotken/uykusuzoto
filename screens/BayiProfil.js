
import React, { useState, useEffect} from "react";
import { View, Button, Touchable, Pressable, ImageBackground, Platform, Text, StyleSheet, Image, Dimensions,  TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { deleteDoc, doc, getDoc, setDoc, addDoc, collection, onSnapshot} from 'firebase/firestore';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { auth, db, firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 




const BayiProfil  = ({ route } ) => {
  // HESABIM SAYFASINDAN GELEN USER  PROPS İÇİNDEN ID ÇEKİYORUZ
  const  id  = route.params.user.uid;

  const nuser = route.params.user;






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
      bolge: language
    
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

const myDoc = doc(db, "bayi", id )
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
    navigation.navigate('BayiHesap')
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

             


             

              <TouchableOpacity  onPress={() => { navigation.navigate('Bayi') }}   style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text   onPress={() => { 
                  if (user.bolge == "ARNAVUTKÖY") {
                    navigation.navigate('Arnavutkoy')  
                  } else if (user.bolge == "ATAŞEHİR") {
                    navigation.navigate('Atasehir') 
                  }
                 else if (user.bolge == "AVCILAR") {
                  navigation.navigate('Avcilar') 
                 }
                 else if (user.bolge == "BAHÇELİEVLER") {
                 navigation.navigate('Bahcelievler') 
                 }
                 else if (user.bolge == "BAKIRKÖY") {
                  navigation.navigate('Bakirkoy') 
                }
                 else if (user.bolge == "BAYRAMPAŞA") {
                navigation.navigate('Bayrampasa') 
                }
                else if (user.bolge == "BAĞCILAR") {
                navigation.navigate('Bagcilar') 
                }
                else if (user.bolge == "BAŞAKŞEHİR") {
                  navigation.navigate('Basaksehir') 
                }
               else if (user.bolge == "BEYKOZ") {
                navigation.navigate('Beykoz') 
               }
               else if (user.bolge == "BEYLİKDÜZÜ") {
               navigation.navigate('Beylikduzu') 
               }
               else if (user.bolge == "BEYOĞLU") {
                navigation.navigate('Beyoglu') 
              }
               else if (user.bolge == "BEŞİKTAŞ") {
              navigation.navigate('Besiktas') 
              }
              else if (user.bolge == "BÜYÜKÇEKMECE") {
              navigation.navigate('Buyukcekmece') 
              }
               

              else if (user.bolge == "ESENLER") {
                navigation.navigate('Esenler') 
              }
             else if (user.bolge == "ESENYURT") {
              navigation.navigate('Esenyurt') 
             }
             else if (user.bolge == "EYÜPSULTAN") {
             navigation.navigate('Eyupsultan') 
             }
             else if (user.bolge == "FATİH") {
              navigation.navigate('Fatih') 
            }
             else if (user.bolge == "GAZİOSMANPAŞA") {
            navigation.navigate('Gaziosmanpasa') 
            }
            else if (user.bolge == "GÜNGÖREN") {
            navigation.navigate('Gungoren') 
            }
            else if (user.bolge == "KADIKÖY") {
              navigation.navigate('Kadikoy') 
            }
           else if (user.bolge == "KARTAL") {
            navigation.navigate('Kartal') 
           }
           else if (user.bolge == "KAĞITHANE") {
           navigation.navigate('Kagithane') 
           }
           else if (user.bolge == "KÜÇÜKÇEKMECE") {
            navigation.navigate('Kucukcekmece') 
          }
           else if (user.bolge == "MALTEPE") {
          navigation.navigate('Maltepe') 
          }
          else if (user.bolge == "PENDİK") {
          navigation.navigate('Pendik') 
          }




          else if (user.bolge == "SANCAKTEPE") {
            navigation.navigate('Sancaktepe') 
            }
            else if (user.bolge == "SARIYER") {
             navigation.navigate('Sariyer') 
           }
            else if (user.bolge == "SULTANBEYLİ") {
           navigation.navigate('Sultanbeyli') 
           }
           else if (user.bolge == "SULTANGAZİ") {
           navigation.navigate('Sultangazi') 
           }
 
           else if (user.bolge == "SİLİVRİ") {
            navigation.navigate('Silivri') 
            }
            else if (user.bolge == "TUZLA") {
             navigation.navigate('Tuzla') 
           }
            else if (user.bolge == "ZEYTİNBURNU") {
           navigation.navigate('Zeytinburnu') 
           }
           else if (user.bolge == "ÇATALCA") {
           navigation.navigate('Catalca') 
           }


 
           else if (user.bolge == "ÇEKMEKÖY") {
            navigation.navigate('Cekmekoy') 
            }
            else if (user.bolge == "ÜMRANİYE") {
             navigation.navigate('Umraniye') 
           }
            else if (user.bolge == "ÜSKÜDAR") {
           navigation.navigate('Uskudar') 
           }
           else if (user.bolge == "ŞİLE") {
           navigation.navigate('Sile') 
           }
 
           else if (user.bolge == "ŞİŞLİ") {
            navigation.navigate('Sisli') 
            }
            

                  }}  
                  style={{fontSize: 23, fontWeight: '400', color: 'black'}}>ÜYELERİM</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => { navigation.navigate('Paketler') }}   style={[styles.button, {backgroundColor: 'red'}]}>
                <Text style={{fontSize: 23, fontWeight: '400', color: 'black'}}>PAKET AL</Text>
              </TouchableOpacity>
              
              <TouchableOpacity  onPress={() => { navigation.navigate('BayiGuncelle', {nuser}) }}  style={[styles.button, {backgroundColor: '#6792F090'}]}>
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

export default BayiProfil;
