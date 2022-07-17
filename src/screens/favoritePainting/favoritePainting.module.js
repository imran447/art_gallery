import {StyleSheet} from 'react-native';
import GlobalStyles from '../../shared/styles/globalStyles';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  paintings:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginBottom:70,
    justifyContent:'space-between'
  }
});
