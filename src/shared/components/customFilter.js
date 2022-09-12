import React, {useState} from 'react';
import {Pressable, StyleSheet,View} from 'react-native';
import { RadioButton } from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import GlobalStyles from '../styles/globalStyles';
import CustomText from './customText';
import CustomButton from './customButton';


const CustomFilter = (props) => {

    const {filtersList} = props;

    const [checkedData, setCheckedData] = useState(props?.selectedFilter);

    const handleFilter = () => {
        props.handleFilter(checkedData);
    }

    const handleClose = () => {
        props.handleClose();
    }

  return (
    <View style={styles.container}>

      <Pressable onPress={handleClose} style={styles.headWrapper}>
        <FastImage
          source={require('../../assets/images/cross.png')}
          style={[styles.iconSize]}
          resizeMode={FastImage.resizeMode.cover}
        />
        <CustomText style={styles.headText}>Categories</CustomText>
      </Pressable>

      <View style={styles.bodyWrapper}>
        {
            filtersList.map((item, index) => {
                return (
                    <Pressable
                    key={index}
                    style={styles.itemContainer}
                    onPress={() => {setCheckedData(item)}}
                >
                    <View style={styles.itemWrapper}>
                        {item.image}
                        <CustomText style={styles.itemText}>{item.value}</CustomText>
                    </View>
                    <RadioButton
                        value={checkedData.value}
                        status={ checkedData.key === item.key ? 'checked' : 'unchecked' }
                        color={GlobalStyles.primary}
                    />
                </Pressable>
                )
            })
        }

      </View>

      <View style={styles.footerWrapper}>
        <CustomButton
          Title={'Apply'}
          style={{width: '90%'}}
          onPress={handleFilter}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'space-between',
   },
   headWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
   },
   headText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: "black"
   },
   bodyWrapper : {
    flex: 10
   },
   itemContainer : {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderColor: GlobalStyles.borderColor,
    alignItems: 'center',
    justifyContent: 'space-between',
   },
   itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
   },
   itemText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: GlobalStyles.primary
   },
   footerWrapper : {
    flex: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: GlobalStyles.borderColor,
    justifyContent: 'center',
    alignItems: 'center'
   },
   iconSize: {
    width: 15,
    height: 15
   }
});
export default CustomFilter;
