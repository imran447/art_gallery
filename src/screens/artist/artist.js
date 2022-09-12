import {StyleSheet, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import ArtistCard from './artistCard';
import { backendCall } from '../../shared/js/backendCall'
import CustomButton from '../../shared/components/customButton';
import { ActivityIndicator } from 'react-native-paper';
import { showToastMessage } from '../../shared/js/showToastMessage';
import RecordNotFound from '../../components/RecordNotFound';
import CustomLoader from '../../shared/components/CustomLoader';

const Artist = () => {
  const [artistList, setArtistList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArtists();
  },[offSet])

  const getArtists = async () => {
    const response = await backendCall(`arts/artist/?pageSize=10&offset=${offSet}`,"GET");
    if (response?.data?.artistList?.length){
        setArtistList([...artistList, ...response.data.artistList]);
    }
    else if (response?.data?.artistList.length === 0){
      showToastMessage("error","top", "No more records available");
    }
    setLoadMore(false); 
    setLoading(false);
  }

  return (
    <View style={[styles.mainWrapper]}>
      <Header title={'Artists'} />
      {
        loading ?
        <CustomLoader />
        :
        artistList.length > 0 ?
        <ScrollView>
        <View style={[styles.container]}>
          {artistList.map((artist,index) => {
            return <ArtistCard key={index} data={artist} />;
          })}
        </View>
        {
          artistList.length > 0 ?
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
      :
      <RecordNotFound />
      }
    </View>
  );
};
export default Artist;

const styles = StyleSheet.create({
  mainWrapper : {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  viewMoreBtnWrapper : {
    width : '50%',
    marginBottom: 50,
    alignSelf: 'center'
  }
});
