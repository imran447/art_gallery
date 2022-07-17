import {Platform, StyleSheet} from 'react-native';

const GlobalStyles = StyleSheet.create({
  mb1: {
    marginBottom: 8,
  },
  mb2: {
    marginBottom: 16,
  },
  mb3: {
    marginBottom: 20,
  },
  mt1: {
    marginTop: 3,
  },

  mR1:{
    marginRight:4
  },
  mt2: {
    marginTop: 16,
  },
  mb5: {
    marginBottom: 40,
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },
  mt3: {
    marginTop: 24,
  },
  primary: '#194B43',
  white: 'white',
  baseFontFamily: {
    // fontFamily: 'Montserrat-SemiBoldItalic',
  },
  boldBaseFontFamily: {
    // fontFamily: 'Montserrat-Bold',
  },
  p1: {
    padding: 8,
  },
  primaryColor: {
    color: '#070B2B',
  },
  priColor: '#52b44b',
  textWhite: {
    color: 'white',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
    paddingVertical: 16,
    textAlign: 'center',
    backgroundColor: 'white',
  },
  textBlack: {
    color: 'black',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },
 
  
  dangerTxt: {
    color: 'red',
  },
 
  flex1: {
    flex: 1,
  },
  nonaryColor: {
    color: '#faf3c0',
  },
  denaryColor: {
    color: '#faf3a0',
  },
 
  heading: {
    fontSize: 20,
    color:'#194B43',
    fontWeight: 'bold',
  },
  bgWhite:{
    backgroundColor:'white'
  },
  headerStyle: {
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 2,
    elevation: 9,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
      },
      android: {
        shadowOpacity: 0.8,
      },
    }),
  },
  ScoreWrapper: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    padding: 0,
    borderRadius: 10,
  },
  selectBtnStyle: {
    height: 40,
    borderRadius: 10,
    marginTop: 24,
    marginBottom: 16,
  },
  keyboardStyles: {
    ...Platform.select({
      ios: {
        height: '100%',
      },
    }),
  },
  keyboardStyleFlex: {
    ...Platform.select({
      ios: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      },
    }),
  },
});

export default GlobalStyles;
