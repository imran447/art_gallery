import { StyleSheet } from "react-native";
import GlobalStyles from "../../shared/styles/globalStyles";

export const styles = StyleSheet.create({
    page: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
    title: {
      color: GlobalStyles.primary,
      fontSize: 35,
      fontWeight: 'bold',
      paddingLeft: 15,
    },
    mainContainer: {
      height: '100%',
    },
    container: {
      padding: 15,
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
    },
    signup: {
      color: GlobalStyles.primary,
    },
    sigunpText: {
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
    },
    signupContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  