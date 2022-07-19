import React, {useState} from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from 'react-native';
import OTP from '../../components/otp';
import ResetPassword from '../../components/resetPassword';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import Header from '../../shared/components/header';
import TextInputField from '../../shared/components/textInputField';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from '../login/login.module';

const ForgotPassword = ({navigation}) => {
  const [pageStatusTitle, setPageStatusTitle] = useState('Forgot Password');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [pageStatus, setPageStatus] = useState(0); // 0 for forgot ,1 for otp , 2 for password reset

  const handleBackNavigation = () => {
    navigation.goBack();
  };

  const handleOtp = () => {
    setPageStatus(1);
    setPageStatusTitle('Confirm OTP');
  };
  const handleResetPassword = () => {
    setPageStatus(2);
    setPageStatusTitle('Reset Password');
  };
  const handleForgotPassword = () => {};
  const handleSignin = () => {
    navigation.navigate("login")
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View style={[styles.page]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : ''}
            keyboardVerticalOffset={Platform.OS === 'ios' && 90}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={[styles.mainContainer]}>
                <CustomText style={[styles.title]}>
                  {pageStatusTitle}
                </CustomText>
                <View style={[styles.container]}>
                  {pageStatus === 0 && (
                    <>
                      <TextInputField Label={'Email'} placeholder="Email" />

                      {/* </View> */}
                      <View style={{zIndex: 999}}>
                        <CustomButton
                          Title={'Send OTP'}
                          style={[GlobalStyles.mt3]}
                          IsLoading={false}
                          onPress={handleOtp}
                        />
                      </View>
                    </>
                  )}

                  {pageStatus === 1 && (
                    <OTP
                      handleSuccess={handleResetPassword}
                    />
                  )}
                  {pageStatus === 2 && (
                    <ResetPassword
                      handleSuccess={() => navigation.navigate('login')}
                    />
                  )}
                  <View style={[styles.signupContainer]}>
                    <CustomText style={[styles.sigunpText]}>
                      Already have an account?{' '}
                    </CustomText>
                    <Pressable onPress={handleSignin}>
                      <CustomText style={[styles.signup]}>Sign in</CustomText>
                    </Pressable>
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
export default ForgotPassword;
