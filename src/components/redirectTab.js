import React from 'react';
import {StyleSheet, View , ActivityIndicator} from 'react-native';
import {Divider, TouchableRipple} from 'react-native-paper';
import CustomText from '../shared/components/customText';
import GlobalStyles from '../shared/styles/globalStyles';

export default function RedirectTab({text, onPress, isLoading,LeftIcon ,RightIcon}) {
    
  return (
    <>
      <TouchableRipple
        onPress={onPress}
        rippleColor={GlobalStyles.primary}
        style={[styles.selectTrack, {paddingVertical: 7}]}>
        <>
          <View style={styles.selectedTrackBox}>
            <LeftIcon />
            <CustomText style={[styles.openCustomText]}>
              {text}
            </CustomText>
          </View>
            {!isLoading ?
            
            <RightIcon />
            :
            <ActivityIndicator
            style={{marginRight: 20}}
            size="small"
          />
        }
        </>
      </TouchableRipple>
    </>
  );
}
const styles = StyleSheet.create({
  selectTrack: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    marginBottom:10
  },
  selectedTrackBox: {
    flexDirection: 'row',
    paddingLeft: 24,
    flex: 1,
    paddingTop: 13,
    paddingBottom: 13,
  },
  iconSize: {
    height: 22,
    width: 22,
  },
  arrowIcon: {
    marginRight: 20,
    height: 14,
    width: 14,
  },
  openCustomText: {
    fontSize: 17,
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 1,
  },
});
