import {StyleSheet} from 'react-native';
import GlobalStyles from '../../shared/styles/globalStyles';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 3,
    margin: 15,
  },
  selectTrack: {
    flexDirection: 'row',
    alignItems: 'center',
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
  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedTrackBox: {
    flexDirection: 'row',
    paddingLeft: 24,
    flex: 1,
    paddingTop: 13,
    paddingBottom: 13,
    // backgroundColor: themeColors.primaryColor.color
  },
  selectedTrackName: {
    position: 'absolute',
    left: 18,
    fontWeight: 'bold',
    fontSize: 17,
    paddingVertical: 9,
  },
  darkModeContainer: {
    paddingVertical: 10,
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 20,
  },
  openText: {
    fontSize: 17,
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 1,
  },
  editButton: {
    borderRadius: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 3,
    overflow: Platform.OS === 'ios' ? 'hidden' : 'visible',
  },
  selectStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: -2,
    opacity: 0,
    color: 'transparent',
  },
  profileBox: {
    padding: 20,
    margin: 15,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: GlobalStyles.primary,
    borderRadius: 10,
  },
  profileNames: {
    flexDirection: 'column',
    marginLeft: 15,
    flex: 2,
  },

  model: {
    backgroundColor: 'white',
    padding: 20,
  },
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    marginTop: 15,
    color: '#424242',
  },
  joinGym: {
    width: '60%',
    alignSelf: 'center',
    marginTop: 20,
  },
  planButton: {
    width: '90%',
  },
  planButtonContainer: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    marginTop:30,
    height: 80,
    width: 80,
  },
});
