import {ScrollView, View} from 'react-native';
import Header from '../../shared/components/header';
import React, {useState} from 'react';
import FavoritePaintingCard from '../../components/favoritePaintingCard';
import {styles} from './favoritePainting.module';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';

const FavoritePainting = () => {
  const [paintings, setPaintings] = useState([
    {
      name: 'Art Gallery',
      image:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
      width: '39%',
    },
    {
      name: 'Sketch',
      image: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
      width: '58%',
    },
    {
      name: 'Painting',
      image:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
      width: '49%',

    },
    {
      name: 'Arts',
      image: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
      width: '49%',

    },
    {
      name: 'Art Gallery',
      image:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
      width: '58%',

    },
    {
      name: 'Sketch',
      image: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',

      width: '39%',

    },
    {
      name: 'Painting',
      image:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    {
      name: 'Arts',
      image: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
      width: '100%',

    },
  ]);
  return (
    <View>
      <Header title={'Library'} />
      <ScrollView style={styles.container}>
        <CustomText
          style={[GlobalStyles.heading, {fontSize: 22}, GlobalStyles.mt1]}>
          Favorite Painting
        </CustomText>
        <View style={[styles.paintings, GlobalStyles.mt2]}>
          {paintings.map(painting => {
            return (
              <FavoritePaintingCard
                painting={painting}
                containerWidth={painting.width}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default FavoritePainting;
