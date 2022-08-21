import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import WhiteBoardCard from '../../components/whiteboardCard';
import {styles} from './whiteBoard.module';
import { backendCall } from '../../shared/js/backendCall'

const WhiteBoard = ({navigation}) => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    getArts();
  },[])

  const getArts = async () => {
    console.log("response");
    const response = await backendCall("arts","GET");
    if (response && response?.data?.data?.length){
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
