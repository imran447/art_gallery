import {StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../shared/components/header';
import {ScrollView} from 'react-native-gesture-handler';
import ArtistCard from './artistCard';
import {useState} from 'react';

const Artist = () => {
  const [artistList, setArtistList] = useState([
    {
      image: require('../../assets/images/artist1.jpg'),
      name: 'Michelangelo',
      item: 14,
    },
    {
      image: require('../../assets/images/artist3.jpg'),
      name: 'Rembrandt',
      item: 4,
    },
    {
      image: require('../../assets/images/artist2.jpg'),
      name: 'Vermeer',
      item: 14,
    },
    {
      image: require('../../assets/images/artist1.jpg'),
      name: 'Eugene ',
      item: 44,
    },
    {
      image: require('../../assets/images/artist3.jpg'),
      name: 'Georges ',
      item: 34,
    },
    {
      image: require('../../assets/images/artist2.jpg'),
      name: 'Claude',
      item: 4,
    },
    {
        image: require('../../assets/images/artist3.jpg'),
        name: 'Georges ',
        item: 34,
      },
  ]);
  return (
    <View>
      <Header title={'Artists'} />
      <ScrollView>
        <View style={[styles.container]}>
          {artistList.map(artist => {
            return <ArtistCard artist={artist} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};
export default Artist;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    marginBottom: 70,
    justifyContent: 'space-between',
  },
});
