import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from '../../components/swiperCard';
import { backendCall } from '../../shared/js/backendCall';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from './arts.module';
import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';
import { useIsFocused } from '@react-navigation/native';

const Arts = () => {
  const [artsList, setArtsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && fetchArtsList()
  },[isFocused])

  const fetchArtsList = async () => {
    const response = await backendCall(`arts/randomArts`,"GET");
    if (response && response?.data?.data?.length){
      setArtsList(response.data.data);
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
      <CustomText style={[GlobalStyles.heading,styles.title]}>Swipe right to save</CustomText>
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
              return <SwiperCard card={card} />;
            }}
            onSwiped={cardIndex => {
            }}
            onSwipedRight={cardIndex => {
              handleSwipeLike(cardIndex);
            }}
            onSwipedAll={() => {
            }}
            cardIndex={0}
            stackSize={artsList.length}
          /> : null
          }
        </View>
      </View>
      <View style={[styles.bottomContainer, GlobalStyles.mb3]}>
        <CustomButton Title={'Discard'} />
        <CustomButton Title={'Save'} />
      </View>
      </>
      :
      <RecordNotFound />
      }
    </>
  );
};
export default Arts;
