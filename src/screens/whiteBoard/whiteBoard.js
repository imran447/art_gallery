import {View} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../../shared/components/customText';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import WhiteBoardCard from '../../components/whiteboardCard';
import {styles} from './whiteBoard.module';

const WhiteBoard = () => {
  const [paintings, setPaintings] = useState([
    {
      name: 'Art Gallery',
      image:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    {
      name: 'Sketch',
      image: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
    },
    {
      name: 'Painting',
      image:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    {
      name: 'Arts',
      image: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    },
  ]);
  return (
    <View>
      <Header title={'Whiteboard'} />
      <ScrollView style={styles.container}>
        <View style={styles.paintings}>
          {paintings.map(painting => {
            return <WhiteBoardCard painting={painting} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default WhiteBoard;
