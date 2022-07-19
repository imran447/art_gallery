import React, {useState} from 'react';
import GlobalStyles from '../shared/styles/globalStyles';
import CustomButton from '../shared/components/customButton';
import TextInputField from '../shared/components/textInputField';

const ResetPassword = ({handleSuccess}) => {
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
