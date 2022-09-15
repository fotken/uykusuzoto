
import React from "react";
import { View, Button, Text, StyleSheet, Image, ImageBackground, Dimensions, useState, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'; 



const Detay = ({ navigation }) => {
  return (
   <LinearGradient colors={['#ffffff', '#1e90ff']} style={styles.center}>
    <View style={styles.genel}>
     <ImageBackground
     source={require('/Users/macbookair/uykusuzoto/u.png')}
     resizeMode="cover"
     style={styles.rootScreen}
     imageStyle={styles.backgroundImage}
     >
      <Button title="Geri Dön" onPress={() => navigation.goBack()} />
       <View style={styles.dty}>
             <ScrollView style={styles.kart}>
                <Text style={styles.title}>Uykusuz Oto Yıkama </Text>
                   <Text style={styles.paragraf}>
                         Uykusuz Oto Yıkama ailesi olarak farklı bir konspet ile karşınızdayız.
                         Öncelikle;    
                   </Text>
                   <Text style={styles.paragraf}>* Uykusuz Oto Yıkama Mobil uygulamasından seçtiğiniz paketi satın alınız.    </Text>
                   <Text style={styles.paragraf}>*  Satın alma işlemi tamamlandıktan sonra paket içeriğine göre yıkama tarihlerini seçiniz.   </Text>
                   <Text style={styles.paragraf}>*  Kişisel bilgilerinizin doğruluğundan emin olmanız ekibimizin aracınızı bulması açısından önemlidir.   </Text>
                   <Text style={styles.paragraf}>*  Seçtiğiniz tarihte akşam  22.00 - 06:00 arasında ekibimiz aracınızı yıkayacaktır.  </Text>
                   <Text style={styles.paragraf}>*  Aracınızı nano teknoloji ile su ve fırça kullanmadan yıkıyoruz.  </Text>
                   <Text style={styles.paragraf}>* Aracınız yıkandıktan sonra cilalanır ve işlem tamamlanır.  </Text>
                   <Text style={styles.paragraf}>* Aracınızın yıkandığına dair bilgilendirme yapılacaktır.  </Text>
             </ScrollView>
             <TouchableOpacity onPress={() => { navigation.navigate('Hesabım') }}>
              <View style={styles.cerceve}> 
                 <Text style={styles.text} 
                 
                 > 
                      PAKET SATIN AL
                 </Text>  
             </View>
             </TouchableOpacity>
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
        dty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,   
        borderWidth: 2,
        borderRadius: 10,
        width: 350,
        height: 900,
        marginLeft: 50
        },
        kart: {
          flex:1,  
          borderWidth: 2,
          margin: 10,
          borderRadius: 10,
          width: 300,
          height: 570,
          backgroundColor: 'white',
          opacity: 0.7,
          marginLeft: 15
        },
        title: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           marginTop: 10,
           fontWeight: 'bold',
           fontSize: 25,
           marginLeft: 20
        },
        paragraf: {
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
         
          fontWeight: 'bold',
          fontSize: 18,
          padding: 10
        },
        cerceve: {
          justifyContent: 'center',
          alignItems: 'center',
          width: 350,
          height: 80,
          backgroundColor: 'white', 
          borderWidth : 5,
          borderRadius: 20

        },
        text: {
          fontWeight: 'bold',
          fontSize: 20
         
        }

  })

export default Detay;