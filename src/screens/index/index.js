import {Image, View} from 'react-native';
import React from 'react';
import CustomText from '../../shared/components/customText';
import {styles} from './index.module';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import WhiteBoard from '../whiteBoard/whiteBoard';
import FavoritePainting from '../favoritePainting/favoritePainting';
import Setting from '../setting/setting';
import WhiteBoardIcon from '../../assets/images/whiteboard.svg';
import PhotoIcon from '../../assets/images/photo.svg';
import SettingsIcon from '../../assets/images/settings.svg';
import LibraryIcon from '../../assets/images/library.svg';
import SlideshowIcon from '../../assets/images/slideShowIcon.svg';
import Arts from '../arts/arts';
import Artist from '../artist/artist';
import EditUser from '../editUser';
import Slideshow from '../slideShow/slideShow';

const WhiteBoardTab = createBottomTabNavigator();
const SettingsTab = createStackNavigator();

function Settings() {
  return (
    <SettingsTab.Navigator
      screenOptions={{headerShown: false}}
    >
      <SettingsTab.Screen name="index" component={Setting} />
      <SettingsTab.Screen name="editUser" component={EditUser} />
    </SettingsTab.Navigator>
  );
}

const Index = () => {
  return (
    <WhiteBoardTab.Navigator
      tabBarOptions={{
        tabStyle: [styles.barStyle],
        showLabel: true,
      }}
      screenOptions={{headerShown: false}}>
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
        name="Whiteboard"
        component={WhiteBoard}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>
                Popular
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <WhiteBoardIcon height={20} width={20} fill="white" />
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
                Artists
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
        name="Slideshow"
        component={Slideshow}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>
                Slideshow
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <SlideshowIcon height={20} width={20} fill="white" />
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
                Collection
              </CustomText>
            ),
          tabBarIcon: ({focused, color, size}) => (
            <LibraryIcon height={20} width={20} fill="white" />
          ),
        }}
      />
     
      <WhiteBoardTab.Screen
        name="Setting"
        component={Settings}
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
