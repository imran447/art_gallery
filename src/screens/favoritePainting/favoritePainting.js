import {ScrollView, View} from 'react-native';
import Header from '../../shared/components/header';
import React, {useState, useEffect} from 'react';
import FavoritePaintingCard from '../../components/favoritePaintingCard';
import { backendCall } from '../../shared/js/backendCall';
import { ActivityIndicator } from 'react-native-paper';
import { showToastMessage } from '../../shared/js/showToastMessage';

import {styles} from './favoritePainting.module';
import CustomText from '../../shared/components/customText';
import CustomButton from '../../shared/components/customButton';
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
    if (response?.data?.count > 0){
        setPaintings([...paintings, ...response.data.data]);
    }
    else if (response?.data?.count === 0){
      showToastMessage("error","top", "No more records available");
    }
    setLoadMore(false);
  }

  return (
    <View style={[styles.mainWrapper]}>
      <Header title={'Collection'} />
      <ScrollView style={styles.container}>
        <CustomText
          style={[GlobalStyles.heading, {fontSize: 22}, GlobalStyles.mt1]}>
          Favorite Paintings
        </CustomText>
        <View style={[styles.paintings, GlobalStyles.mt2]}>
          {paintings.map((painting,index) => {
            return (
              <FavoritePaintingCard
                key={index}
                painting={painting}
                containerWidth={ index % 2 === 0 ? "40%" : "55%"}
              />
            );
          })}
        </View>
        {
          paintings.length > 0 ?
          loadMore ?
          <ActivityIndicator />
          :
          <CustomButton
            Title="View More"
            contentStyle={[styles.viewMoreBtnWrapper]}
            IsLoading={false}
            onPress={() => {
              setLoadMore(true);
              setOffSet(offSet + 1)
            }}
          /> : null
        }
      </ScrollView>
    </View>
  );
};
export default FavoritePainting;
