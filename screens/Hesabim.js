
import React, {useEffect} from 'react';
import { BlurView } from 'expo-blur';
import { View, Button, Platform, Text, StyleSheet, Image, Dimensions, useState, TouchableOpacity, ScrollView, TextInput, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { useNavigation } from '@react-navigation/native';
import  provider  from '../firebase-config';
import { firebase } from '../firebase-config';


// v9 compat packages are API compatible with v8 code


const Home = () => {
  

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [user, setUser ] = React.useState('');


  
  useEffect ( () => {
    auth.onAuthStateChanged( (authUser) => {
        if (authUser){
           setUser(authUser);
        }else {
           setUser(null);
        }

    });
  }, []);


  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
     
      Alert.alert('Kayıt Yapıldı. Lütfen Profil Bilgilerinizi Doldurun.')
      {user ? navigation.navigate('Kayit', {user}) : navigation.navigate('Hesabim')} 
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
     
      {user ? navigation.navigate('Profile', {user} ) : navigation.navigate('Hesabim')} 
    })
    .catch(error => {
      console.log(error)
    })
  }

 
  return (
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
    
      <View style={styles.container}>
        <Image source={require('/Users/macbookair/uykusuzoto/u.png')} style={[styles.image, StyleSheet.absoluteFill ]} />
        <ScrollView contentContainerStyle= {{
          flex: 1,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}> 

          <BlurView intensity={100}>
            
           
            <View style={styles.login}>
          
              <Image source={require('/Users/macbookair/uykusuzoto/u.png')} style={styles.profilePicture} />
        
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="info@facetoface.international" />
              </View>
              <View>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Şifre</Text>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="şifre" secureTextEntry={true}/>
              </View>
              
              <TouchableOpacity onPress={handleSignIn} style={[styles.button, {backgroundColor: '#00CFEB90'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Üye Girişi</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={handleCreateAccount} style={[styles.button, {backgroundColor: '#6792F090'}]}>
                <Text style={{fontSize: 17, fontWeight: '400', color: 'black'}}>Kayıt Ol</Text>
              </TouchableOpacity>
              
            </View>
          </BlurView>
          </ScrollView>
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
  logov: {
    width: 210,
    height: 220,
    marginTop: 5
   
  },
  logo: {
    width: "100%",
    height: "100%",
    marginVertical: 1,
    alignItems: "center",
  },
  text: { 
    color:'black',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  
    }, 
    containerr: {
     width: 350,
     height: 500,
     flex: 4,
     backgroundColor: 'gray',
     marginBottom: 10,
     backgroundColor: 'white',
     borderWidth :1
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '90%',
      resizeMode: 'cover',
      opacity: 0.35
    },
    login: {
      width: 350,
      height: 500,
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
    google: {
      backgroundColor: 'purple',
      width: 250,
      height: 40,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      borderColor: '#fff',
      borderWidth: 1,
    }

    })

export default Home;