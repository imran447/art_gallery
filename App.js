import React, { useEffect, useState } from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/shared/navigation/stackNavigation';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { AuthContext } from "./src/shared/js/auth-context";
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
  const [token, setToken] = useState(null);

  useEffect(()=>{
    getUserToken()
    SplashScreen.hide();
  },[])

  const getUserToken = async () => {
    let user =await AsyncStorage.getItem('user'); 
    if (user){
      user = JSON.parse(user); 
      setToken(user.token);
    }
  }

  return (
    <>
    <AuthContext.Provider value={[token, setToken]}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </AuthContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
