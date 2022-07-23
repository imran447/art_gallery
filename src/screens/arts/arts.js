import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from '../../components/swiperCard';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';
import {styles} from './arts.module';

const cardsList = [
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
  {
    image: require('../../assets/images/1.jpg'),
  },
  {
    image: require('../../assets/images/2.jpg'),
  },
  {
    image: require('../../assets/images/3.jpg'),
  },
  {
    image: require('../../assets/images/4.jpg'),
  },

  {
    image: require('../../assets/images/5.jpg'),
  },
  {
    image: require('../../assets/images/6.jpg'),
  },
];

const Arts = () => {
  return (
    <>
      <CustomText style={[GlobalStyles.heading,styles.title]}>Swipe a painting</CustomText>
      <View style={styles.container}>
        <View>
          <Swiper
            cards={cardsList}
            verticalSwipe={false}
            animateOverlayLabelsOpacity={true}
            renderCard={card => {
              return <SwiperCard card={card} />;
            }}
            onSwiped={cardIndex => {
              console.log(cardIndex);
            }}
            onSwipedAll={() => {
              console.log('onSwipedAll');
            }}
            cardIndex={0}
            stackSize={3}
          />
        </View>
      </View>
      <View style={[styles.bottomContainer, GlobalStyles.mb3]}>
        <CustomButton Title={'Remove'} />
        <CustomButton Title={'Like'} />
      </View>
    </>
  );
};
export default Arts;
