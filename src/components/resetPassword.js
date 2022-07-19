import React, {useState} from 'react';
import CustomButton from '../../shared/components/customButton';
import TextInputField from '../../shared/components/textInputField';
import firestore from '@react-native-firebase/firestore';
import GlobalStyles from '../../shared/styles/globalStyles';
import {showToastMessage} from '../../shared/js/showToastMessage';

const ResetPassword = ({phoneNumber, handleSuccess}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isButtonLoading, setIsButtonLoading] = useState('');

  const handleResetPassword = () => {
    handleSuccess();
  };
  return (
    <>
      <TextInputField
        SecureTextEntry={true}
        Label={'Password'}
        placeholder="Password"
        style={[GlobalStyles.mt2]}
        OnChangeText={value => setPassword(value)}
      />
      <TextInputField
        SecureTextEntry={true}
        Label={'Confirm Password'}
        placeholder="Confirm Password"
        style={[GlobalStyles.mt2]}
        OnChangeText={value => setConfirmPassword(value)}
      />
      <CustomButton
        IsLoading={isButtonLoading}
        Title={'Reset Password'}
        style={GlobalStyles.mt3}
        onPress={handleResetPassword}
      />
    </>
  );
};

export default ResetPassword;
