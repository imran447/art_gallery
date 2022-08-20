import {ScrollView, View} from 'react-native';
import Header from '../../shared/components/header';
import React, {useState, useEffect} from 'react';
import FavoritePaintingCard from '../../components/favoritePaintingCard';
import { backendCall } from '../../shared/js/backendCall';
import { ActivityIndicator } from 'react-native-paper';
import { showToastMessage } from '../../shared/js/showToastMessage';

import {styles} from './favoritePainting.module';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';

const FavoritePainting = () => {
  const [paintings, setPaintings] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    fetchPaintings();
  },[offSet])

  const fetchPaintings = async () => {
    const response = await backendCall(`arts/favoritePainting/?pageSize=10&offset=${offSet}`,"GET");
    console.log("RESPONSE", response);
    if (response && response?.data?.data?.length){
      let paintingList = [];
      response.data.data.map((painting) => {
        console.log("RESPONSE SINGLE PAINTING",painting)
        paintingList = [...paintings, painting];
      })
      console.log("LIST TO BE PUT IN STATE",paintingList);
      setPaintings(paintingList);
    }
    else if (response?.data?.data.length === 0){
      showToastMessage("error","top", "No more records available");
    }
    // setLoadMore(false);
  }

  console.log("RENDER PAINTINGS LIST",paintings);
  return (
    <View>
      <Header title={'Library'} />
      <ScrollView style={styles.container}>
        <CustomText
          style={[GlobalStyles.heading, {fontSize: 22}, GlobalStyles.mt1]}>
          Favorite Painting
        </CustomText>
        <View style={[styles.paintings, GlobalStyles.mt2]}>
          {paintings.map((painting,index) => {
            console.log("PAINTING",painting)
            return (
              <FavoritePaintingCard
                key={index}
                painting={painting}
                containerWidth={ index % 2 === 0 ? "40%" : "55%"}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default FavoritePainting;
