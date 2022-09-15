import React from "react";



import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import Detay from "../screens/Detay";
import Paketleri from "../screens/Paketleri";
import Hesabim from "../screens/Hesabim";
import Profile from "../screens/Profile";
import Kayit from "../screens/Kayit";
import Guncelle from "../screens/Guncelle";
import Paketler from "../screens/Paketler";
import Paket1 from "../screens/Paket1";
import Paket2 from "../screens/Paket2";
import Paket3 from "../screens/Paket3";
import Paket4 from "../screens/Paket4";
import Para from "../screens/Para";
import Sonuc from "../screens/Sonuc";
import Yikama from "../screens/Yikama";
import Kart from "../screens/Kart";
import Bayi from "../screens/Bayi";
import BayiHesap from "../screens/BayiHesap";
import BayiKayit from "../screens/BayiKayit";
import BayiProfil from "../screens/BayiProfil";
import BayiGuncelle from "../screens/BayiGuncelle";
import Atasehir from "../screens/Atasehir";
import Arnavutkoy from "../screens/Arnavutkoy";
import Avcilar from "../screens/Avcilar";
import Bahcelievler from "../screens/Bahcelievler";
import Bakirkoy from "../screens/Bakirkoy";
import Bayrampasa from "../screens/Bayrampasa";
import Bagcilar from "../screens/Bagcilar";
import Basaksehir from "../screens/Basaksehir";
import Beykoz from "../screens/Beykoz";
import Beylikduzu from "../screens/Beylikduzu";
import Beyoglu from "../screens/Beyoglu";
import Besiktas from "../screens/Besiktas";
import Buyukcekmece from "../screens/Buyukcekmece";
import Esenler from "../screens/Esenler";
import Esenyurt from "../screens/Esenyurt";
import Eyupsultan from "../screens/Eyupsultan";
import Fatih from "../screens/Fatih";
import Gaziosmanpasa from "../screens/Gaziosmanpasa";
import Gungoren from "../screens/Gungoren";
import Kadikoy from "../screens/Kadikoy";
import Kartal from "../screens/Kartal";
import Kagithane from "../screens/Kagithane";
import Kucukcekmece from "../screens/Kucukcekmece";
import Maltepe from "../screens/Maltepe";
import Pendik from "../screens/Pendik";
import Sancaktepe from "../screens/Sancaktepe";
import Sariyer from "../screens/Sariyer";
import Sultanbeyli from "../screens/Sultanbeyli";
import Sultangazi from "../screens/Sultangazi";
import Silivri from "../screens/Silivri";
import Tuzla from "../screens/Tuzla";
import Zeytinburnu from "../screens/Zeytinburnu";
import Catalca from "../screens/Catalca";
import Cekmekoy from "../screens/Cekmekoy";
import Umraniye from "../screens/Umraniye";
import Uskudar from "../screens/Uskudar";
import Sile from "../screens/Sile";
import Sisli from "../screens/Sisli";



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {backgroundColor: "#9AC4F8",},
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="UYKUSUZ OTO YIKAMA " component={Home}  options={{ headerShown: false }}/>
      <Stack.Screen name="Detay" component={Detay}  options={{ headerShown: false }}/>
      <Stack.Screen name="Hesabım" component={Hesabim}  options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bayi" component={Bayi}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kayit" component={Kayit}  options={{ headerShown: false }}/>
      <Stack.Screen name="Guncelle" component={Guncelle}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paketler" component={Paketler}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket1" component={Paket1}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket2" component={Paket2}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket3" component={Paket3}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket4" component={Paket4}  options={{ headerShown: false }}/>
      <Stack.Screen name="Para" component={Para}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sonuc" component={Sonuc}  options={{ headerShown: false }}/>
      <Stack.Screen name="Yikama" component={Yikama}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kart" component={Kart}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

const PaketStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} options={{ headerShown: false }}>
      <Stack.Screen name="Paketleri" component={Paketleri}  options={{ headerShown: false }}/>
      <Stack.Screen name="Hesabım" component={Hesabim}  options={{ headerShown: false }}/>
      
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} options={{ headerShown: false }}>
       <Stack.Screen name="Hesabım" component={Hesabim}  options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bayi" component={Bayi}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kayit" component={Kayit}  options={{ headerShown: false }}/>
      <Stack.Screen name="Guncelle" component={Guncelle}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paketler" component={Paketler}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket1" component={Paket1}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket2" component={Paket2}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket3" component={Paket3}  options={{ headerShown: false }}/>
      <Stack.Screen name="Paket4" component={Paket4}  options={{ headerShown: false }}/>
      <Stack.Screen name="Para" component={Para}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sonuc" component={Sonuc}  options={{ headerShown: false }}/>
      <Stack.Screen name="Yikama" component={Yikama}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kart" component={Kart}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
const BayiStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} options={{ headerShown: false }}>
      <Stack.Screen name="BayiHesap" component={BayiHesap}  options={{ headerShown: false }}/>
      <Stack.Screen name="BayiProfil" component={BayiProfil}  options={{ headerShown: false }}/>
      <Stack.Screen name="BayiKayit" component={BayiKayit}  options={{ headerShown: false }}/>
      <Stack.Screen name="BayiGuncelle" component={BayiGuncelle}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bayi" component={Bayi}  options={{ headerShown: false }}/>
      
      <Stack.Screen name="Atasehir" component={Atasehir}  options={{ headerShown: false }}/>
      <Stack.Screen name="Arnavutkoy" component={Arnavutkoy}  options={{ headerShown: false }}/>
      <Stack.Screen name="Avcilar" component={Avcilar}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bahcelievler" component={Bahcelievler}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bakirkoy" component={Bakirkoy}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bayrampasa" component={Bayrampasa}  options={{ headerShown: false }}/>
      <Stack.Screen name="Bagcilar" component={Bagcilar}  options={{ headerShown: false }}/>
      <Stack.Screen name="Basaksehir" component={Basaksehir}  options={{ headerShown: false }}/>
      <Stack.Screen name="Beykoz" component={Beykoz}  options={{ headerShown: false }}/>
      <Stack.Screen name="Beylikduzu" component={Beylikduzu}  options={{ headerShown: false }}/>
      <Stack.Screen name="Beyoglu" component={Beyoglu}  options={{ headerShown: false }}/>
      <Stack.Screen name="Besiktas" component={Besiktas}  options={{ headerShown: false }}/>
      <Stack.Screen name="Buyukcekmece" component={Buyukcekmece}  options={{ headerShown: false }}/>
      <Stack.Screen name="Esenler" component={Esenler}  options={{ headerShown: false }}/>
      <Stack.Screen name="Esenyurt" component={Esenyurt}  options={{ headerShown: false }}/>
      <Stack.Screen name="Eyupsultan" component={Eyupsultan}  options={{ headerShown: false }}/>
      <Stack.Screen name="Fatih" component={Fatih}  options={{ headerShown: false }}/>
      <Stack.Screen name="Gaziosmanpasa" component={Gaziosmanpasa}  options={{ headerShown: false }}/>
      <Stack.Screen name="Gungoren" component={Gungoren}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kadikoy" component={Kadikoy}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kartal" component={Kartal}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kagithane" component={Kagithane}  options={{ headerShown: false }}/>
      <Stack.Screen name="Kucukcekmece" component={Kucukcekmece}  options={{ headerShown: false }}/>
      <Stack.Screen name="Maltepe" component={Maltepe}  options={{ headerShown: false }}/>
      <Stack.Screen name="Pendik" component={Pendik}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sancaktepe" component={Sancaktepe}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sariyer" component={Sariyer}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sultanbeyli" component={Sultanbeyli}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sultangazi" component={Sultangazi}  options={{ headerShown: false }}/>
      <Stack.Screen name="Silivri" component={Silivri}  options={{ headerShown: false }}/>
      <Stack.Screen name="Tuzla" component={Tuzla}  options={{ headerShown: false }}/>
      <Stack.Screen name="Zeytinburnu" component={Zeytinburnu}  options={{ headerShown: false }}/>
      <Stack.Screen name="Catalca" component={Catalca}  options={{ headerShown: false }}/>
      <Stack.Screen name="Cekmekoy" component={Cekmekoy}  options={{ headerShown: false }}/>
      <Stack.Screen name="Umraniye" component={Umraniye}  options={{ headerShown: false }}/>
      <Stack.Screen name="Uskudar" component={Uskudar}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sile" component={Sile}  options={{ headerShown: false }}/>
      <Stack.Screen name="Sisli" component={Sisli}  options={{ headerShown: false }}/>
      
    </Stack.Navigator>
  );
}

export { MainStackNavigator, PaketStackNavigator, ContactStackNavigator, BayiStackNavigator};
