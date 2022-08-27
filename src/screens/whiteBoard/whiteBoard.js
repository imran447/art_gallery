import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import WhiteBoardCard from '../../components/whiteboardCard';
import {styles} from './whiteBoard.module';
import {backendCall} from '../../shared/js/backendCall';
import TextInputField from '../../shared/components/textInputField';

const WhiteBoard = ({navigation}) => {
  const [paintings, setPaintings] = useState([]);
  const [filterPaintings, setFilterPaintings] = useState([]);

  useEffect(() => {
    getArts();
  }, []);

  const getArts = async () => {
    console.log('response');
    const response = await backendCall('arts', 'GET');
    if (response && response?.data?.data?.length) {
      setPaintings(response.data.data);
      setFilterPaintings(response.data.data);
    }
  };

  const handleSearch=(value)=>{
    let _paintings= [...paintings];
    if(value){
      _paintings = _paintings.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()));
    }
    setFilterPaintings(_paintings);
  }

  const handleCommentList = () => {
    navigation.navigate('commentList');
  };
  return (
    <View>
      <Header title={'Whiteboard'} />

      <TextInputField
        placeholder={'Enter to search'}
        OnChangeText={handleSearch}
        style={{margin: 10}}
      />
      <ScrollView style={styles.container}>
        <View style={styles.paintings}>
          {filterPaintings.map((painting, index) => {
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
