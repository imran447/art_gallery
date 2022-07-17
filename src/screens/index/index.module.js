import {StyleSheet} from 'react-native';
import GlobalStyles from '../../shared/styles/globalStyles';

export const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: GlobalStyles.primary,
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: 200,
  },
  heading: {
    color: 'white',
    fontSize:40
  },

  barStyle:{
    backgroundColor: GlobalStyles.primary,
  },
  bottomNavigatorLabel:{
    color:'white'
  }
});
