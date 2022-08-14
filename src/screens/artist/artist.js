import {StyleSheet, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import ArtistCard from './artistCard';
import { backendCall } from '../../shared/js/backendCall'
import CustomButton from '../../shared/components/customButton';
import { ActivityIndicator } from 'react-native-paper';
import { showToastMessage } from '../../shared/js/showToastMessage';

const Artist = () => {
  const [artistList, setArtistList] = useState([]);
  const [offSet, setOffSet] = useState(0);
  const [loadMore, setLoadMore] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    getArtists();
  },[offSet])

  const getArtists = async () => {
    const response = await backendCall(`arts/artist/?pageSize=1&offset=${offSet}`,"GET");
    if (response && response?.data?.artistList?.length){
      let artists = [];
      response.data.artistList.map((artist) => {
        artists = [...artistList, artist];
      })
      setArtistList(artists);
    }
    else if (response?.data?.artistList.length === 0){
      showToastMessage("error","top", "No more records available");
    }
    setLoadMore(false);
  }

  console.log("ARTIST LIST",artistList);
  return (
    <View style={[styles.mainWrapper]}>
      <Header title={'Artists'} />
      <ScrollView style={{
        // borderWidth: 5, borderColor: 'blue'
      }}
      >
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
    </View>
  );
};
export default Artist;

const styles = StyleSheet.create({
  mainWrapper : {
    flex: 1,
    // borderWidth: 5,
    // borderColor: 'green'
  },
  container: {
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    // marginBottom: 70,
    justifyContent: 'space-between',
    // borderWidth: 5,
    // borderColor: 'red'
  },
  viewMoreBtnWrapper : {
    width : '50%',
    // marginTop: 20,
    marginBottom: 50,
    alignSelf: 'center'
  }
});
