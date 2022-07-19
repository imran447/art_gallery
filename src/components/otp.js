import {firebase} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import CustomButton from '../../shared/components/customButton';
import {showToastMessage} from '../../shared/js/showToastMessage';
import GlobalStyles from '../../shared/styles/globalStyles';
import auth from '@react-native-firebase/auth';

const OTP = ({ handleSuccess}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [otpValue, setOTPValue] = useState('');

  const handleConfirmOTP = async () => {
    handleSuccess();
  };

  return (
    <>
      <OTPTextInput
        textInputStyle={{width: '12%'}}
        handleTextChange={value => setOTPValue(value)}
        inputCount={6}></OTPTextInput>
      <CustomButton
        Title={'Confirm OTP'}
        style={[GlobalStyles.mt3]}
        IsLoading={isLoading}
        onPress={handleConfirmOTP}
      />
    </>
  );
};
export default OTP;
