import React, { useState} from 'react';
import OTPTextInput from 'react-native-otp-textinput';
import CustomButton from '../shared/components/customButton';
import GlobalStyles from '../shared/styles/globalStyles';

const OTP = ({ handleSuccess}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [otpValue, setOTPValue] = useState('');

  const handleConfirmOTP = async () => {
    handleSuccess();
  };

  return (
    <>
      <OTPTextInput
        textInputStyle={{width: '12%',borderBottomColor:GlobalStyles.primary}}
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
