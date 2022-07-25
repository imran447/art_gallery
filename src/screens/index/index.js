import {Image, View} from 'react-native';
import React from 'react';
import CustomText from '../../shared/components/customText';
import {styles} from './index.module';
import GlobalStyles from '../../shared/styles/globalStyles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WhiteBoard from '../whiteBoard/whiteBoard';
import FavoritePainting from '../favoritePainting/favoritePainting';
import Setting from '../setting/setting';
import WhiteBoardIcon from '../../assets/images/whiteboard.svg';
import PhotoIcon from '../../assets/images/photo.svg';
import SettingsIcon from '../../assets/images/settings.svg';
import LibraryIcon from '../../assets/images/library.svg';
import Arts from '../arts/arts';
import Artist from '../artist/artist';

const WhiteBoardTab = createBottomTabNavigator();

const Index = () => {
  return (
    <WhiteBoardTab.Navigator
      tabBarOptions={{
        tabStyle: [styles.barStyle],
        showLabel: true,
      }}
      screenOptions={{headerShown: false}}>
      <WhiteBoardTab.Screen
        name="Whiteboard"
        component={WhiteBoard}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>
                WhiteBoard
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <WhiteBoardIcon height={20} width={20} fill="white" />
          ),
        }}
      />

      <WhiteBoardTab.Screen
        name="library"
        component={FavoritePainting}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>
                Library
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <LibraryIcon height={20} width={20} fill="white" />
          ),
        }}
      />
      <WhiteBoardTab.Screen
        name="arts"
        component={Arts}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>Arts</CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <PhotoIcon height={20} width={20} fill="white" />
          ),
        }}
      />
      <WhiteBoardTab.Screen
        name="artist"
        component={Artist}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>
                Artist
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/images/make-up.png')}
              style={{height: 30, width: 30}}
            />
          ),
        }}
      />
      <WhiteBoardTab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>
                Settings
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <SettingsIcon height={20} width={20} fill="white" />
          ),
        }}
      />
    </WhiteBoardTab.Navigator>
  );
};

export default Index;
