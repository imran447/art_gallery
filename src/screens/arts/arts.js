import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from '../../components/swiperCard';
import { backendCall } from '../../shared/js/backendCall';
import CustomButton from '../../shared/components/customButton';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';
import { styles } from './arts.module';
import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Arts = ({navigation}) => {
  const [artsList, setArtsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [user, setUser] = useState(null);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    let user = await AsyncStorage.getItem('user');
    if (user) {
      user = JSON.parse(user)
      setUser(user);
      setIsUser(true);
    }
    else {
      setUser(null);
      setIsUser(false);
    }
  }

  useEffect(() => {
    isFocused && fetchArtsList()
  }, [isFocused])

  const fetchArtsList = async () => {
    let _url = `arts/randomArts`;
    if (user) {
      if (user._id) {
        _url = `arts/randomArts?userId=${user._id}`
      }
    }
    const response = await backendCall(_url, "GET");
    if (response && response?.data?.data?.length) {
      setArtsList(response.data.data);
    }
    setLoading(false);
  }

  const handleSwipeLike = async (cardIndex) => {
    const data = artsList.find((data, index) => index === cardIndex);
    if (data) {
      const response = await backendCall(`arts/likeArt/${data._id}`, "POST");
    }
  }
  const handleDragStart = () => {
    if (!isUser) {
      Alert.alert(
        "Please login",
        "You must login for saving the painting",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => {
            navigation.push("login")
          } }
        ]
      );
    }
  }

  return (
    <>

      <CustomText style={[GlobalStyles.heading, styles.title]}>Swipe right to save</CustomText>
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
                        disableLeftSwipe={!isUser ? true : false}
                        disableRightSwipe={!isUser ? true : false}
                        onSwipedRight={cardIndex => {
                          handleSwipeLike(cardIndex);
                        }}
                        dragStart={handleDragStart}
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
