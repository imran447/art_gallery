import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import { showToastMessage } from '../../shared/js/showToastMessage'
import { backendCall } from '../../shared/js/backendCall'

import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import CustomButton from '../../shared/components/customButton';
import Header from '../../shared/components/header';
import TextInputField from '../../shared/components/textInputField';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from './editUser.module';

const EditUser = ({navigation}) => {
    const [user, setUser] = useState({});

    useEffect(()=> {
        getUser();
    },[])

    const getUser = async () => {
        const user = await AsyncStorage.getItem('user');
        if (user){
          setUser(JSON.parse(user));
        }
    }

  const handleBackNavigation = () => {
    navigation.pop();
  };

  const handleUpdateUser = async () => {
    if (!user.firstName || !user.lastName || !user._id)
    {
      showToastMessage("error","top", "Please fill all input fields");
      return;
    }
    const body = {
      firstName : user.firstName,
      lastName : user.lastName
    }
    const response = await backendCall(`auth/updateUser/${user._id}`,"POST",body);
    if (response?.status === 1){
      await AsyncStorage.setItem('user', JSON.stringify(user));
      showToastMessage("success","top", "Record updated successfully!");
      handleBackNavigation();
    }
  };

  return (
    <>
      <Header title={'Edit User'} hasBack onPress={handleBackNavigation} />
      <View style={{flex: 1}}>
        <View style={[styles.page]}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'position' : ''}
            keyboardVerticalOffset={Platform.OS === 'ios' && 90}>
            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={[styles.container]}>
                  <View>
                    <TextInputField
                        IsError={false}
                        Label={'First name'}
                        placeholder="First name"
                        Value={user.firstName}
                        OnChangeText={value => setUser({...user, "firstName" : value})}
                    />
                    <TextInputField
                        IsError={false}
                        Label={'Last name'}
                        placeholder="Last name"
                        Value={user.lastName}
                        OnChangeText={value => setUser({...user, "lastName" : value})}
                    />
                  </View>
                  <View>
                    <CustomButton
                      Title={'Save Record'}
                      style={[GlobalStyles.mt3]}
                      IsLoading={false}
                      onPress={handleUpdateUser}
                    />
                  </View>
                </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    </>
  );
};
export default EditUser;
