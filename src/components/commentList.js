import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CommentCard from './commentCard';
import Header from '../shared/components/header';
import GlobalStyles from '../shared/styles/globalStyles';
import TextInputField from '../shared/components/textInputField';
import CustomText from '../shared/components/customText';

const CommentList = ({navigation}) => {
  const [commentList, setCommentList] = useState([
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
    {image: require('../assets/images/logo.png'), comment: 'This is so cool'},
  ]);

  return (
    <>
      <Header
        title={'Comments'}
        hasBack
        onPress={() => navigation.navigate('index')}
      />

      <View style={styles.container}>
        <View style={[GlobalStyles.flex1]}>
          <ScrollView>
            <View style={[GlobalStyles.mt3, {marginBottom: 0}]}>
              {commentList.map(comment => (
                <CommentCard comment={comment} />
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <TextInputField
            Label={''}
            placeholder="Type a comment"
            outlineColor="transparent"
            activeOutlineColor="transparent"
          />
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.sendIcon}
          />
        </View>
      </View>
    </>
  );
};
export default CommentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  bottomContainer: {
    position: 'relative',
  },
  sendIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 10,
    top: 20,
  },
});
