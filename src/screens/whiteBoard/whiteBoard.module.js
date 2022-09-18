import {StyleSheet} from 'react-native';
import GlobalStyles from '../../shared/styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    // marginBottom:120
  },
  paintings:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom:70
  },
  filtersContainer : {
    flexDirection: "row",
    margin: 10
  },
  filterDropdown: {
    flexDirection: "row",
    alignItems: 'center', 
    height: "100%", 
    paddingLeft: 5,
    paddingRight: 5, 
    backgroundColor: '#ffffff',
    borderWidth: 1, 
    borderColor: GlobalStyles.borderColor
  },
  imageStyle: {
    width: 15,
    height: 15
  }
});
