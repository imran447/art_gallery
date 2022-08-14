import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomText from '../../shared/components/customText';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import WhiteBoardCard from '../../components/whiteboardCard';
import {styles} from './whiteBoard.module';
import { backendCall } from '../../shared/js/backendCall'

const WhiteBoard = ({navigation}) => {
  const [paintings, setPaintings] = useState([
    // {
    //   name: 'Art Gallery',
    //   image:
    //     'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    // },
    // {
    //   name: 'Sketch',
    //   image: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
    // },
    // {
    //   name: 'Painting',
    //   image:
    //     'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    // },
    // {
    //   name: 'Arts',
    //   image: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
    // },
  ]);

  useEffect(() => {
    getArts();
  },[])

  const getArts = async () => {
    const response = await backendCall("arts","GET");
    if (response && response?.data?.data?.length){
      console.log("RESPONSE DATA",response.data.data);
      setPaintings(response.data.data);
    }
  }


  const handleCommentList = () => {
    navigation.navigate('commentList');
  };
  return (
    <View>
      <Header title={'Whiteboard'} />
      <ScrollView style={styles.container}>
        <View style={styles.paintings}>
          {paintings.map((painting,index) => {
            return (
              <WhiteBoardCard
                key={index}
                painting={painting}
                handleCommentList={handleCommentList}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default WhiteBoard;
