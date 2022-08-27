import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from '../../components/swiperCard';
import { backendCall } from '../../shared/js/backendCall';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from './arts.module';

const Arts = () => {
  const [artsList, setArtsList] = useState([]);

  useEffect(() => {
    fetchArtsList();
  },[])

  const fetchArtsList = async () => {
    const response = await backendCall(`arts/randomArts`,"GET");
    if (response && response?.data?.data?.length){
      setArtsList(response.data.data);
    }
  }

  const handleSwipeLike = async (cardIndex) => {
    const data = artsList.find((data,index) =>  index === cardIndex);
    if (data){
      const response = await backendCall(`arts/likeArt/${data._id}`,"POST");
      console.log("RESPONSE",response);
    }
  }

  return (
    <>
      <CustomText style={[GlobalStyles.heading,styles.title]}>Swipe a painting</CustomText>
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
              console.log(cardIndex);
            }}
            onSwipedRight={cardIndex => {
              handleSwipeLike(cardIndex);
            }}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            stackSize={artsList.length}
          /> : null
          }
        </View>
      </View>
      <View style={[styles.bottomContainer, GlobalStyles.mb3]}>
        <CustomButton Title={'Remove'} />
        <CustomButton Title={'Collection'} />
      </View>
    </>
  );
};
export default Arts;
