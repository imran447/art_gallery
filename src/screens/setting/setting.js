import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, View,Linking } from 'react-native';
import Header from '../../shared/components/header';
import { styles } from './setting.module';
import RedirectTab from '../../components/redirectTab';
import AboutusIcon from '../../assets/images/info.svg';
import EraserIcon from '../../assets/images/erase.svg';
import VersionIcon from '../../assets/images/version.svg';
import FeedbackIcon from '../../assets/images/feedback.svg';
import EditProfileIcon from '../../assets/images/user.svg';
import LogoutIcon from '../../assets/images/logout.svg';
import RightArrowIcon from '../../assets/images/rightArrow.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import { AuthContext } from '../../shared/js/auth-context';

const Setting = ({ navigation }) => {
  const [token, setToken] = useContext(AuthContext);
  const [user, setUser] = useState({});
  const isFocused = useIsFocused();

  const handleLoginPage = () => {
    navigation.navigate('login');
  };
  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    await AsyncStorage.removeItem('token');
    setToken(null);
    navigation.push("login");
  };

  useEffect(() => {
    isFocused && getUser()
  }, [isFocused])

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  const handleCleanCache = () => {

  }

  const handleFeedback =()=>{
    Linking.openURL(`mailto: support@expo.io`);
  }
  return (
    <View style={[{ flex: 1 }]}>
      <Header title="Settings" />

      <ScrollView contentContainerStyle={{backgroundColor:'white',flex:1}}>
        <>
          {/* <View style={[styles.profileBox]}>
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
              <View style={{
                flexDirection: 'row'
              }}>
                <CustomText
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {user.firstName}
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: 'white',
                    marginLeft: 5
                  }}>
                  {user.lastName}
                </CustomText>
              </View>
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
                  color: 'white',
                }}>
                {user.email}
              </CustomText>
            </View>
            <Pressable onPress={() => navigation.navigate("editUser")}>
              <CustomText style={styles.editButton}>Edit</CustomText>
            </Pressable>
          </View> */}

          <View style={{ marginTop: 20,  borderRadius: 4 }}>
            <RedirectTab
              text={'Edit profile'}
              onPress={() => navigation.navigate("editUser")}
              LeftIcon={() => (
                <EditProfileIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => (
                <RightArrowIcon
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={'black'}
                />
              )}
            />
            <RedirectTab
              text={'About beauty of art'}
              onPress={() => navigation.navigate("about")}
              LeftIcon={() => (
                <AboutusIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => (
                <RightArrowIcon
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={'black'}
                />
              )}
            />
            <RedirectTab
              text={'Clean cache'}
              onPress={handleCleanCache}
              LeftIcon={() => (
                <EraserIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => (
                <RightArrowIcon
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={'black'}
                />
              )}
            />
             <RedirectTab
              text={'Feedback'}
              onPress={handleFeedback}
              LeftIcon={() => (
                <FeedbackIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => (
                <RightArrowIcon
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={'black'}
                />
              )}
            />
            <RedirectTab
              text={'Sign Out'}
              onPress={handleLogout}
              LeftIcon={() => (
                <LogoutIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => (
                <RightArrowIcon
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={'black'}
                />
              )}
              isLoading={false}
            />
            <RedirectTab
              text={'Version 1.1'}
              onPress={() => { }}
              LeftIcon={() => (
                <VersionIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={'black'}
                />
              )}
              RightIcon={() => { }}
              isLoading={false}
            />

          </View>
        </>
      </ScrollView>
    </View>
  );
};
export default Setting;
