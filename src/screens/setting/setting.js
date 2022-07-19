import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Header from '../../shared/components/header';
import {styles} from './setting.module';
import FastImage from 'react-native-fast-image';
import RedirectTab from '../../components/redirectTab';
import LibraryIcon from '../../assets/images/library.svg';
import CustomButton from '../../shared/components/customButton';
import GlobalStyles from '../../shared/styles/globalStyles';
import CustomText from '../../shared/components/customText';

const Setting = ({navigation}) => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = async () => {
    let _userToken = await AsyncStorage.getItem('token');
    setUserToken(_userToken);
  };
  const handleLoginPage = () => {
    navigation.navigate('login');
  };
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate('login');
  };

  return (
    <View style={[{flex: 1}]}>
      <Header title="Settings" />

      <ScrollView>
        <>
          {!userToken ? (
            <View
              style={[
                GlobalStyles.flexDirectionRow,
                GlobalStyles.justifyContentCenter,
              ]}>
              <FastImage
                source={require('../../assets/images/logo.png')}
                style={[styles.image]}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
          ) : (
            <View style={[styles.profileBox]}>
              <Pressable onPress={() => {}}>
                <FastImage
                  source={{
                    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
                    priority: FastImage.priority.normal,
                  }}
                  style={[styles.imageStyle]}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </Pressable>

              <View style={styles.profileNames}>
                <CustomText
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {`Daniel`}
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 14,
                    marginTop: 5,
                    color: 'white',
                  }}>
                  {'+9246854465'}
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 14,
                    marginTop: -4,
                    color: 'white',
                  }}>
                  {`imran@gmail.com`}
                </CustomText>
              </View>
              <Pressable>
                <CustomText style={styles.editButton}>Edit</CustomText>
              </Pressable>
            </View>
          )}

          <View style={{marginTop: 20, padding: 15, borderRadius: 4}}>
            <RedirectTab
              text={'About Us'}
              onPress={() => {}}
              LeftIcon={() => (
                <LibraryIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => (
                <LibraryIcon
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={'black'}
                />
              )}
            />
            {userToken && (
              <RedirectTab
                text={'Sign Out'}
                onPress={handleLogout}
                LeftIcon={() => (
                  <LibraryIcon
                    width={styles.iconSize.width}
                    height={styles.iconSize.height}
                    fill={'black'}
                  />
                )}
                RightIcon={() => (
                  <LibraryIcon
                    style={styles.arrowIcon}
                    width={styles.arrowIcon.width}
                    height={styles.arrowIcon.height}
                    fill={'black'}
                  />
                )}
                isLoading={false}
              />
            )}
          </View>
          <View style={styles.planButtonContainer}>
            <CustomButton
              Title={'Try premium plan'}
              style={styles.planButton}
              onPress={handleLoginPage}
            />
          </View>
        </>
      </ScrollView>
    </View>
  );
};
export default Setting;
