import { ScrollView, View, Dimensions, StyleSheet, Pressable } from 'react-native';
import Header from '../../shared/components/header';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import FavoritePaintingCard from '../../components/favoritePaintingCard';
import { backendCall } from '../../shared/js/backendCall';
import { showToastMessage } from '../../shared/js/showToastMessage';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';
import CustomFilter from '../../shared/components/customFilter';
import { filtersList } from '../whiteBoard/whiteBoard';
import CustomText from '../../shared/components/customText';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../../shared/styles/globalStyles';


const Slideshow = () => {
  const [paintings, setPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = React.useState(0)
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    key: '',
    value: 'Select'
  });
  const ref = useRef(null);

  const renderItem = useCallback(({ item, index }) => (
    <FavoritePaintingCard
      key={index}
      painting={item}
      containerWidth={"100%"}
      customImageStyle={{ height: 500 }}
    />
  ), []);

  useEffect(() => {
    fetchPaintings(selectedFilter.key);
  }, [])

  const fetchPaintings = async (type) => {
    const response = await backendCall(`arts?type=${type}`, "GET");
    console.log("type", response);
    if (response?.data?.data.length > 0) {
      setPaintings(response.data.data);
    }
    else if (response?.data?.data?.length === 0) {
      setPaintings([]);

      showToastMessage("error", "top", "No records found..!");
    }
    setLoading(false);
  }
  const getCollection = async () => {
    const response = await backendCall(`arts/favoritePainting/?pageSize=50&offset=0`, "GET");
    if (response?.data?.data.length > 0) {
      setPaintings(response.data.data);
    }else{
      setPaintings([])
    }
    setLoading(false);
  }

  const handleFilter = (value) => {
    setSelectedFilter(value);
    console.log(value.key);
    setLoading(true);
    if (value.key === "collection") {
      getCollection();
    } else {
      fetchPaintings(value.key);
    }
    setOpenDropdown(false);
  }

  return (
    <>
      {openDropdown ?
        <CustomFilter
          filtersList={filtersList}
          selectedFilter={selectedFilter}
          handleFilter={handleFilter}
          handleClose={() => { setOpenDropdown(false) }}
        /> :
        <>
          <View style={{ display: 'flex' }}>
          <Header title={'Slide show'} />

            <Pressable
              onPress={() => { setOpenDropdown(true) }}
              style={styles.filterDropdown}>
              <CustomText style={{ marginRight: 5 }}>{selectedFilter.value}</CustomText>
              <FastImage
                source={require('../../assets/images/downArrow.png')}
                style={[styles.imageStyle]}
                resizeMode={FastImage.resizeMode.cover}
              />
            </Pressable>
            <View >
              {
                loading ?
                  <CustomLoader />
                  :
                  paintings.length > 0 ?
                    <ScrollView style={{ marginTop: 10 }}>
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
          </View>
        </>
      }
    </>
  );
};
export default Slideshow;

const styles = StyleSheet.create({
  filterDropdown: {
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingVertical:10,
    paddingRight: 5,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: GlobalStyles.borderColor
  },
  imageStyle: {
    width: 15,
    height: 15
  }
})