import { ScrollView, View, Dimensions } from 'react-native';
import Header from '../../shared/components/header';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import FavoritePaintingCard from '../../components/favoritePaintingCard';
import { backendCall } from '../../shared/js/backendCall';
import { showToastMessage } from '../../shared/js/showToastMessage';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';

const Slideshow = () => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = React.useState(0)
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <FavoritePaintingCard
      key={index}
      painting={item}
      containerWidth={"100%"}
      customImageStyle={{height: 500}}
    />
  ), []);

  useEffect(() => {
    fetchPaintings();
  }, [])

  const fetchPaintings = async () => {
    const response = await backendCall(`arts/favoritePainting/?pageSize=30`, "GET");
    if (response?.data?.data.length > 0) {
      setPaintings([...paintings, ...response.data.data]);
    }
    else if (response?.data?.data?.length === 0) {
      showToastMessage("error", "top", "No records found..!");
    }
    setLoading(false);
  }

  return (
    <View style={{flex: 1}}>
      <Header title={'Slide show'} />
      {
        loading ?
        <CustomLoader />
        :
        paintings.length > 0 ?
        <ScrollView style={{marginTop: 10}}>
          <Carousel
              layout={"default"}
              ref={ref}
              data={paintings}
              renderItem={renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              sliderHeight={Dimensions.get('window').height}
              itemHeight={Dimensions.get('window').height}
              onSnapToItem={(index) => setIndex(index)}
              autoplay={true}
              autoplayInterval={3000}
            />
            <Pagination
              dotsLength={paintings.length}
              activeDotIndex={index}
              carouselRef={ref}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
          </ScrollView>
          :
          <RecordNotFound />
      }
    </View>
  );
};
export default Slideshow;
