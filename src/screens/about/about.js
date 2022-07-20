import {View} from 'react-native';
import React from 'react';
import Header from '../../shared/components/header';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';

const About = ({navigation}) => {
  return (
    <View>
      <Header
        title={'About art gallery'}
        hasBack
        onPress={() => navigation.goBack()}
      />
      <View style={{padding: 15}}>

      <CustomText style={[GlobalStyles.mt2]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor i
      </CustomText>
      <CustomText style={[GlobalStyles.mt2]} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor i
      </CustomText>
      <CustomText style={[GlobalStyles.mt2]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor i
      </CustomText>
      </View>
    </View>
  );
};
export default About;
