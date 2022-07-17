import {View} from 'react-native';
import React from 'react';
import CustomText from '../../shared/components/customText';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import WhiteBoardCard from '../../components/whiteboardCard';
import { styles } from './whiteBoard.module';

const WhiteBoard = () => {
  return (
    <View>
      <Header title={'Whiteboard'} />
      <ScrollView style={styles.container}>
        <WhiteBoardCard />
      </ScrollView>
    </View>
  );
};
export default WhiteBoard;
