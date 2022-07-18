import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Header from '../../shared/components/header';
import GlobalStyles from '../../shared/styles/globalStyles';
import { styles } from './setting.module';
import FastImage from 'react-native-fast-image';
import CustomText from '../../shared/components/customText';

const Setting = () => {
  return (
    <View style={[{flex: 1}]}>
      <Header title="Settings" />

      <ScrollView>
        <>
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
                  color:'white'
                }}>
                {`Daniel`}
              </CustomText>
              <CustomText
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color:'white'
                }}>
                {'+9246854465'}
              </CustomText>
              <CustomText
                style={{
                  fontSize: 14,
                  marginTop: -4,
                  color:'white'
                }}>
                {`imran@gmail.com`}
              </CustomText>
            </View>
            <Pressable>
              <CustomText style={styles.editButton}>Edit</CustomText>
            </Pressable>
          </View>

          {/* <View style={{marginTop: 20}}>
            <RedirectTab
              CustomText={'Manage Gyms'}
              onPress={handlegym}
              LeftIcon={() => (
                <ManageGymIcon
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={themeColors.txtSecondary}
                />
              )}
              RightIcon={() => (
                <RightArrow
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={themeColors.txtSecondary}
                />
              )}
            />

           
            <RedirectTab
              CustomText={'Sign Out'}
              onPress={handleLogOut}
              LeftIcon={() => (
                <Signout
                  width={styles.iconSize.width}
                  height={styles.iconSize.height}
                  fill={themeColors.txtSecondary}
                />
              )}
              RightIcon={() => (
                <RightArrow
                  style={styles.arrowIcon}
                  width={styles.arrowIcon.width}
                  height={styles.arrowIcon.height}
                  fill={themeColors.txtSecondary}
                />
              )}
              isLoading={tabLoading}
            />
          </View> */}
        </>
      </ScrollView>
      {/* {DisplayFullImage && (
        <DisplayFullScreenImage
          Images={[
            {
              uri: projectSettings.imageBaseUrl + user.Image,
            },
          ]}
          HandleClose={() => SetDisplayFullImage(false)}
        />
      )} */}
    </View>
  );
};
export default Setting;


