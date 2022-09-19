import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from '../../components/swiperCard';
import { backendCall } from '../../shared/js/backendCall';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from './funfact.module.js';
import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';
import { useIsFocused } from '@react-navigation/native';

const Funfact = () => {
  const [artsList, setArtsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && fetchArtsList()
  },[isFocused])

  const fetchArtsList = async () => {
    const response = await backendCall(`funfacts`,"GET");
    if (response && response?.data?.data?.length){
        let _data = response?.data?.data.map((item)=>{
            return {
                title:item.title, 
                imagePath: item.image
            }
        })
      setArtsList(_data);
    }
    setLoading(false);
  }

  const handleSwipeLike = async (cardIndex) => {
    const data = artsList.find((data,index) =>  index === cardIndex);
    if (data){
      const response = await backendCall(`arts/likeArt/${data._id}`,"POST");
    }
  }

  return (
    <>
      <CustomText style={[GlobalStyles.heading,styles.title]}>Fun facts</CustomText>
      {
        loading ?
        <CustomLoader />
        :
        artsList.length > 0 ?
        <>
        <View style={styles.container}>
        <View>
          {
            artsList.length > 0 ? 
            <Swiper
            cards={artsList}
            verticalSwipe={false}
            animateOverlayLabelsOpacity={true}
            renderCard={card => {
              return <SwiperCard card={card}  titleVisible={true} />;
            }}
            onSwiped={cardIndex => {
            }}
            onSwipedRight={cardIndex => {
            }}
            onSwipedAll={() => {
            }}
            cardIndex={0}
            stackSize={artsList.length}
          /> : null
          }
        </View>
      </View>
     
      </>
      :
      <RecordNotFound />
      }
    </>
  );
};
export default Funfact;
