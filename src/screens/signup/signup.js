import React, {useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import GlobalStyles from '../../shared/styles/globalStyles';
import {ScrollView} from 'react-native-gesture-handler';
import TextInputField from '../../shared/components/textInputField';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';

const Signup = ({navigation}) => {
  const [termsServices, setTermsServices] = useState(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.push('login');
  };

  return (
    <>
      <View style={{flex: 1}}>
        <View style={[styles.page]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : ''}
            keyboardVerticalOffset={Platform.OS === 'ios' && 90}>
            <ScrollView keyboardShouldPersistTaps="handled">
            <CustomText style={[styles.title]}>Sign up</CustomText>
              <View style={[styles.container]}>
                <View>
                  <TextInputField
                    IsError={false}
                    Label={'Full name'}
                    placeholder="Full name"
                    OnChangeText={value => setFullName(value)}
                  />
                  <TextInputField
                    IsError={false}
                    Label={'Email address'}
                    placeholder="Email address"
                    style={[GlobalStyles.mt2]}
                    OnChangeText={value => setEmail(value)}
                  />
                  <TextInputField
                    SecureTextEntry={true}
                    Label={'Password'}
                    placeholder="Password"
                    style={[GlobalStyles.mt2]}
                    IsError={false}
                    OnChangeText={value => setPassword(value)}
                  />
                </View>
                <View>
                  <CustomButton
                    IsLoading={false}
                    Title={'Sign up'}
                    style={GlobalStyles.mt3}
                    onPress={() => {}}
                  />
                  <View style={[styles.signupContainer]}>
                    <CustomText style={[styles.sigunpText]}>
                      Already have an account?{' '}
                    </CustomText>
                    <Pressable onPress={handleLogin}>
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
export default Signup;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: GlobalStyles.primary,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
  
  container: {
    padding: 15,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  signup: {
    color: GlobalStyles.primary,
  },
  sigunpText: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  privacyPolicy: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 10,
    width: '85%',
  },
  phonInput: {
    height: 60,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 0,
    borderColor: GlobalStyles.inputBorder,
  },
  textInputStyle: {
    padding: 0,
    margin: 0,
  },
  textContainerStyle: {
    borderRadius: 5,
    display: 'none',
  },
});
