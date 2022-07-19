import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';

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
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleBackNavigation = () => {
    navigation.pop();
  };

  const handleFogotPassword = () => {
    navigation.navigate('forgotPassword');
  };
  const handleLogin = async () => {
    await AsyncStorage.setItem('token', '12345');
    navigation.push('index');
  };
  const handleSignup = () => {
    navigation.navigate('signup');
  };

  return (
    <>
      <Header title={'Sign in'} hasBack onPress={handleBackNavigation} />
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
                    <Pressable onPress={handleFogotPassword}>
                      <CustomText style={[styles.signup, GlobalStyles.mt2]}>
                        Forgot password?
                      </CustomText>
                    </Pressable>
                  </View>
                  <View>
                    <CustomButton
                      Title={'Sign in'}
                      style={[GlobalStyles.mt3]}
                      IsLoading={false}
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
