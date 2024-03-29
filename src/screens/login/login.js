import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useContext} from 'react';
import { showToastMessage } from '../../shared/js/showToastMessage'
import { backendCall } from '../../shared/js/backendCall'
import { AuthContext } from '../../shared/js/auth-context';


import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import Header from '../../shared/components/header';
import TextInputField from '../../shared/components/textInputField';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from './login.module';

const Login = ({navigation}) => {
  const [token, setToken] = useContext(AuthContext);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading,setIsLoading]= useState(false);

  const handleBackNavigation = () => {
    navigation.pop();
  };

  const handleFogotPassword = () => {
    navigation.navigate('forgotPassword');
  };

  const handleLogin = async () => {
    if (!emailOrPhone || !password)
    {
      showToastMessage("error","top", "Please enter a valid email/password");
      return;
    }
    const body = {
      email : emailOrPhone,
      password
    }
    setIsLoading(true);
    const response = await backendCall("auth/login","POST",body);
    setIsLoading(false);
    if (response?.status === 1){
      await AsyncStorage.setItem('user', JSON.stringify(response.data));
      await AsyncStorage.setItem('token', response.data.token);
      setToken(response.data.token);
      navigation.push("index");
    }
  };

  const handleSignup = () => {
    navigation.navigate('signup');
  };

  return (
    <>
      {/* <Header title={'Sign in'} hasBack onPress={handleBackNavigation} /> */}
      <View style={{flex: 1}}>
        <View style={[styles.page]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : ''}
            keyboardVerticalOffset={Platform.OS === 'ios' && 90}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={[styles.mainContainer]}>
                <CustomText style={[styles.title]}>Sign in</CustomText>
                <View style={[styles.container]}>
                  <View>
                    <TextInputField
                      Label={'Email address or phone number'}
                      placeholder="Email address or phone number"
                      OnChangeText={value => setEmailOrPhone(value)}
                    />
                    <TextInputField
                      SecureTextEntry={true}
                      Label={'Password'}
                      placeholder="Password"
                      style={[GlobalStyles.mt2]}
                      OnChangeText={value => setPassword(value)}
                    />
                    {/* <Pressable onPress={handleFogotPassword}>
                      <CustomText style={[styles.signup, GlobalStyles.mt2]}>
                        Forgot password?
                      </CustomText>
                    </Pressable> */}
                  </View>
                  <View>
                    <CustomButton
                      Title={'Sign in'}
                      style={[GlobalStyles.mt3]}
                      IsLoading={isLoading}
                      onPress={handleLogin}
                    />
                    <View style={[styles.signupContainer]}>
                      <CustomText style={[styles.sigunpText]}>
                        Don't have an account?{' '}
                      </CustomText>
                      <Pressable onPress={handleSignup}>
                        <CustomText style={[styles.signup]}>Sign up</CustomText>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
};
export default Login;
