import { View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Header from '../../shared/components/header';
import { ScrollView } from 'react-native-gesture-handler';
import WhiteBoardCard from '../../components/whiteboardCard';
import {styles} from './whiteBoard.module';
import {backendCall} from '../../shared/js/backendCall';
import TextInputField from '../../shared/components/textInputField';
import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';
import { useIsFocused } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import CustomText from '../../shared/components/customText';
import GlobalStyles from '../../shared/styles/globalStyles';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import CustomFilter from '../../shared/components/customFilter';
import FeaturedIcon from '../../assets/images/featured.svg';
import PopularIcon from '../../assets/images/popular.svg';
import HighResolutionIcon from '../../assets/images/high-resolution.svg';

const filtersList = [
  {
    key: 'featured',
    value: "Featured",
    image: <FeaturedIcon height={20} width={20} fill={GlobalStyles.primary} />
  },
  {
    key: 'popular',
    value: "Popular",
    image: <PopularIcon height={20} width={20} fill={GlobalStyles.primary} />
  },
  {
    key: "highResolution",
    value: "High Resolution",
    image: <HighResolutionIcon height={20} width={20} fill={GlobalStyles.primary} />
  }
]

const WhiteBoard = ({ navigation }) => {
  const [paintings, setPaintings] = useState([]);
  const [filterPaintings, setFilterPaintings] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    key: 'featured',
    value: 'Featured'
  });
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && getArts()
  },[isFocused])

  const getArts = async () => {
    const response = await backendCall("arts", "GET");
    if (response && response?.data?.data?.length) {
      setPaintings(response.data.data);
      setFilterPaintings(response.data.data);
    }
    setLoading(false);
  }

  const handleSearch=(value)=>{
    let _paintings= [...paintings];
    if(value){
      _paintings = _paintings.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase()));
    }
    setFilterPaintings(_paintings);
  }

  const handleFilter = (value) => {
    setSelectedFilter(value);
    setOpenDropdown(false);
  }

  const handleCommentList = () => {
    navigation.navigate('commentList');
  };
  return (
    openDropdown ?
     <CustomFilter
        filtersList={filtersList}
        selectedFilter={selectedFilter}
        handleFilter={handleFilter}
        handleClose={() => { setOpenDropdown(false) }}
     />
    :
    <View style={{ flex: 1 }}>
       <Header title={'Popular'} />

      <View style={styles.filtersContainer}>
        <Pressable
         onPress = {() => {setOpenDropdown(true)}}
         style={styles.filterDropdown}>
          <CustomText style={{marginRight: 5}}>{selectedFilter.value}</CustomText>
          <FastImage
              source={require('../../assets/images/downArrow.png')}
              style={[styles.imageStyle]}
              resizeMode={FastImage.resizeMode.cover}
            />
        </Pressable>
        <TextInputField
          placeholder={'Enter to search'}
          OnChangeText={handleSearch}
          style={{flex: 1, marginLeft: 5}}
          Mode="flat"
        />
      </View>

      {
       loading ?
       <CustomLoader />
       :
       paintings.length > 0 ?
       <ScrollView style={styles.container}>
         <View style={styles.paintings}>
           {filterPaintings.map((painting, index) => {
             return (
               <WhiteBoardCard
                 key={index}
                 painting={painting}
                 handleCommentList={handleCommentList}
               />
             );
           })}
         </View>
       </ScrollView>
       :
       <RecordNotFound />
      }
    </View>
  );
};
export default WhiteBoard;
