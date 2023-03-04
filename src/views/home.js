import React, {useEffect} from 'react';
import Button from '../components/button';
import Box from '../components/box';
import {StatusBar} from 'react-native';
import {SafeAreaView} from "react-native";
import theme from '../utils/theme';
import {useFocusEffect} from "@react-navigation/native";
import SQLite, {SQLiteDatabase, ResultSet, openDatabase} from 'react-native-sqlite-storage';

//var db = openDatabase({ name: 'englishwords.db' });

function HomeScreen ({navigation}){
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  useFocusEffect(
    React.useCallback(() => {
        StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
        Platform.OS ==='android' && StatusBar.setBackgroundColor(isSearchFocus ? "white" : "#E5D1FA")
    }, [isSearchFocus])
)


  return (
    <Box as={SafeAreaView} bg={theme.colors.purple} flex={1} style={{justifyContent: 'center'} }>
    <Button
      title="Add Word"
      onPress={() =>
        navigation.navigate('Add Word')
      }
    />

    <Button
      title="List Word"
      onPress={() =>
        navigation.navigate('List Word')
      }
    />

<Button
      title="Start Test"
      onPress={() =>
        navigation.navigate('Start Test')
      }
    />

    </Box>

  



  );
};


export default HomeScreen

