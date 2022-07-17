import {Image, View} from 'react-native';
import React from 'react';
import CustomText from '../../shared/components/customText';
import {styles} from './index.module';
import GlobalStyles from '../../shared/styles/globalStyles';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WhiteBoard from '../whiteBoard/whiteBoard';
import FavoritePainting from '../favoritePainting/favoritePainting';

const WhiteBoardTab = createBottomTabNavigator();

const Index = () => {
  return (
    // <View style={[styles.mainContainer]}>
    //   <View style={[styles.container]}>
    //     <Image
    //       source={require('../../assets/images/logo.png')}
    //       style={[styles.image]}
    //     />
    //     <CustomText style={[styles.heading, GlobalStyles.mb2]}>
    //       Art Gallery
    //     </CustomText>
    //   </View>
    // </View>
    <WhiteBoardTab.Navigator
      tabBarOptions={{
        // activeTintColor: themeColors.secondary,
        tabStyle: [styles.barStyle],
        showLabel: true,
        style: {
          borderTopWidth: 0,
        },
      }}
      screenOptions={{headerShown: false}}>
      <WhiteBoardTab.Screen
        name="Whiteboard"
        component={WhiteBoard}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>WhiteBoard</CustomText>
            ),
            tabBarIcon: ({focused, color, size}) => (
                <CustomText>WhiteBoard</CustomText>
            )
        }}
        
      />
      
      <WhiteBoardTab.Screen
        name="library"
        component={FavoritePainting}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>Library</CustomText>
            ),
            tabBarIcon: ({focused, color, size}) => (
                <CustomText >Library</CustomText>
            )
        }}
      />
       <WhiteBoardTab.Screen
        name="Painting"
        component={()=>{}}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>WhiteBoard</CustomText>
            ),
            tabBarIcon: ({focused, color, size}) => (
                <CustomText>Painting</CustomText>
            )
        }}
      />
       <WhiteBoardTab.Screen
        name="Setting"
        component={()=>{}}
        options={{
          tabBarLabel: ({focused, color}) =>
            focused && (
              <CustomText style={styles.bottomNavigatorLabel}>WhiteBoard</CustomText>
            ),
            tabBarIcon: ({focused, color, size}) => (
                <CustomText>Setting</CustomText>
            )
        }}
      />
      
    </WhiteBoardTab.Navigator>
  );
};

export default Index;
