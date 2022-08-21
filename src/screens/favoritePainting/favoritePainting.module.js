import {StyleSheet} from 'react-native';
import GlobalStyles from '../../shared/styles/globalStyles';

export const styles = StyleSheet.create({
  mainWrapper : {
    flex: 1,
  },
  container: {
    padding: 10,
  },
  paintings:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:10,
    justifyContent:'space-between'
  },
  viewMoreBtnWrapper : {
    width : '50%',
    marginBottom: 50,
    alignSelf: 'center'
  }
});
