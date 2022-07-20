import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Index from '../../screens/index/index';
import CommentList from '../../components/commentList';
import ForgotPassword from '../../screens/forgotPassword/forgotPassword';
import Login from '../../screens/login/login';
import Signup from '../../screens/signup/signup';
import About from '../../screens/about/about';


const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteFName="login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="index" component={Index} />
        <Stack.Screen name="commentList" component={CommentList} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="about" component={About} />
        {/* <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="addEditRecipients" component={AddEditRecipients} />
        <Stack.Screen name="recipientList" component={RecipientList} />
        
        
        */}

        {/* {context.userToken ? (
          <>
            <Stack.Screen name="Home" component={DrawerNavigator} />
            </>
        ) : context.didMount ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </>
        ) : (
          <>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          </>
        )} */}
      </Stack.Navigator>
    </>
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
      {/* <ActivityIndicator size="small" color={GlobalStyles.primaryColor.color} /> */}
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
