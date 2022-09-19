import React, { useEffect, useState, useContext } from 'react';
import {View, ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from '../../screens/index/index';
import CommentList from '../../components/commentList';
import ForgotPassword from '../../screens/forgotPassword/forgotPassword';
import Login from '../../screens/login/login';
import Signup from '../../screens/signup/signup';
import About from '../../screens/about/about';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/globalStyles';
import { AuthContext } from '../js/auth-context';
import FavoritePainting from '../../screens/favoritePainting/favoritePainting';
import Feedback from '../../screens/feedback';

const Stack = createStackNavigator();
const StackNavigator = () => {
  const [token, setToken] = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     setTimeout(() => {
      setIsLoading(false);
     }, 1000)
  }, [])
  
  if (isLoading){
    return <SplashScreen />
  }

  return (
      <Stack.Navigator
        initialRouteFName={'index'}
        screenOptions={{headerShown: false}}>
          <Stack.Screen name="index" component={Index} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="commentList" component={CommentList} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} /> 
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="about" component={About} />
        
        <Stack.Screen name="collection" component={FavoritePainting} />
        <Stack.Screen name="feedback" component={Feedback} />
      </Stack.Navigator>
  );
};
const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Image
        source={require('../assets/splashScreen.png')}
        style={{
          width: 300,
          height: 250,
          resizeMode: 'contain',
        }}
      /> */}
      <ActivityIndicator size="small" color={GlobalStyles.primaryColor.color} />
    </View>
  );
};
const styles = StyleSheet.create({
  notify: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    position: 'absolute',
    right: -10,
    top: -3,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
  bottomNavigatorLabel: {
    color: 'black',
    fontSize: 10,

    marginTop: -8,
  },
});
export default StackNavigator;
