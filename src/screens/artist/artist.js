import {StyleSheet, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import ArtistCard from './artistCard';
import { backendCall } from '../../shared/js/backendCall'
import CustomButton from '../../shared/components/customButton';
import GlobalStyles from '../../shared/styles/globalStyles';

const Artist = () => {
  const [artistList, setArtistList] = useState([]);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    getArtists();
  },[offSet])

  const getArtists = async () => {
    const response = await backendCall(`arts/artist/?pageSize=2&offset=${offSet}`,"GET");
    if (response && response?.data?.artistList?.length){
      let artists = [];
      if (artistList.length){
        response.data.artistList.map((artist) => {
          artists = [...artistList, artist];
        })
        setArtistList(artists);
      }
      else
        setArtistList(response.data.artistList);
    }
  }

  console.log("ARTIST LIST",artistList);
  return (
    <View style={{borderWidth: 5, borderColor: 'green', flex: 1}}>
      <Header title={'Artists'} />
      <ScrollView style={{borderWidth: 5, borderColor: 'blue'}}
      contentContainerStyle={{
        alignItems: 'center'
      }}
      >
        <View style={[styles.container]}>
          {artistList.map((artist,index) => {
            return <ArtistCard key={index} data={artist} />;
          })}
        </View>
      </ScrollView>
      <CustomButton
        Title="View More"
        // style={[GlobalStyles.mt3]}
        contentStyle={[styles.viewMoreBtnWrapper]}
        IsLoading={false}
        onPress={() => { setOffSet(offSet + 1) }}
      />
    </View>
  );
};
export default Artist;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    // marginBottom: 70,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'red'
  },
  viewMoreBtnWrapper : {
    width : '50%',
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
  }
});
