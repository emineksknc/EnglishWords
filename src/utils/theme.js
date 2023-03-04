import {StyleSheet} from 'react-native'

const space = [];
const sizes={
    actionButton: 48
}


const colors = {
    light: "#FFF4D2",
    purple: "#E5D1FA",
    darkBlue: "#181823",
    mediumBlue:"#537FE7",
    lightBlue:"#C0EEF2",
    green: "#009688",
    lightPurple: "#e9dcf5",
    white: "#fff",
    darkpurple:"#804674"

};

const radii = {
    normal: 8,
    full: 9999,
};

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 30,
      paddingHorizontal: 12,
      marginTop: 30,
      marginLeft:20,
      marginRight:20
      
    },
    wordContainer: {
      elevation: 8,
      backgroundColor: colors.white,
      borderRadius: 15,
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginTop: 5,
      marginLeft:5,
      marginRight:5,
      alignSelf: "center"
      
    },
    wordTab: {
      flex: 0,
      flexDirection: 'row',
      backgroundColor: "red",
      paddingVertical: 10,
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      // textTransform: "uppercase"

      
    },
    wordCard: {
      flex: 0,
      flexDirection: 'row',
      backgroundColor: "#009688",
      paddingVertical: 10,
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      // textTransform: "uppercase"

      
    },

    navigationButtonContainer: {
      elevation: 8,
      backgroundColor: colors.darkpurple,
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 12,
      marginTop: 30,
      marginLeft:20,
      marginRight:20
      
    },
    deleteButtonContainer: {
      elevation: 8,
      backgroundColor: "red",
      borderRadius: 10,
      paddingVertical: 20,
      paddingHorizontal: 12,
      marginTop: 30,
      marginLeft:20,
      marginRight:20
      
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      // textTransform: "uppercase"
    },

    appTextContainer: {
        elevation: 8,
        backgroundColor: "#728f8c",
        borderRadius: 15,
        paddingVertical: 40,
        paddingHorizontal: 12,
        marginTop: 30,
      },
      appText: {
        fontSize: 18,
        color: "#181823",
        fontWeight: "bold",
        alignSelf: "center",
      },
      container: {
        padding: 15,
      },
      tableHeader: {
        backgroundColor: colors.purple,
      },
  });


export default {
    space,
    radii,
    colors,
    sizes,
    styles,

};