import React, { useState, useEffect } from 'react';
import {Text, Alert} from 'react-native';
import {SafeAreaView, TextInput, StyleSheet, RefreshControl} from "react-native";
import Box from '../components/box';
import Button from '../components/button';
import theme from '../utils/theme';
import {useFocusEffect} from "@react-navigation/native";
import {StatusBar} from 'react-native';

import WebSQLite from "react-native-quick-websql"

function AddScreen  ({navigation})  {
  const [english, setEnglish] = React.useState('')
  const [turkish, setTurkish] = React.useState('')
  const [category, setCategory] = React.useState('')
  const [isSearchFocus, setSearchFocus] = React.useState(false)
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
        StatusBar.setBarStyle(isSearchFocus ? 'dark-content' : 'light-content');
        Platform.OS ==='android' && StatusBar.setBackgroundColor(isSearchFocus ? "white" : "#E5D1FA")
    }, [isSearchFocus])
)

  const db = WebSQLite.openDatabase('mydb.db')

  const saveAlert =() => {

    //Alert.alert('Word is saved!');
    checkTextInput()
  }

  const checkTextInput = () => {
    //Check for the Name TextInput
    if (!english) {
      
      return Alert.alert('Please Enter English!');
    }
    //Check for the Email TextInput
    else if (!turkish) {
      
      return Alert.alert('Please Enter Turkish!');
    } else {
      //Checked Successfully
      //Do whatever you want
      this.textEnglish.clear()
      this.textTurkish.clear()
      this.textCategory.clear()
      return Alert.alert('Word is saved successfully!');
    }

  };


  const insertData = (english, turkish, category) => {

    db.transaction(
      (txn) => {
        console.log('Running transaction (insert)')
        
        txn.executeSql('INSERT INTO Words (english, turkish, category) VALUES (:english, :turkish, :category)', [
          english,
          turkish,
          category
        ])
        saveAlert()
        
        txn.executeSql('SELECT * FROM `Words`', [], function (_tx, res) {
          for (let i = 0; i < (res.rows?.length || 0); ++i) {
            console.log('item:', res.rows?.item(i))
          }
        })
      },
      (e) => {
        console.error(e)
      }
    )
    
  }

  db.transaction(
  (txn) => {
    console.log('Running transaction')
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS Words(word_id INTEGER PRIMARY KEY NOT NULL, english VARCHAR(50),  turkish VARCHAR(50),  category VARCHAR(30))',
      []
    )
  
    txn.executeSql('SELECT * FROM `Words`', [], function (_tx, res) {
      for (let i = 0; i < (res.rows?.length || 0); ++i) {
        console.log('item:', res.rows?.item(i))
      }
    })
  },
  (e) => {
    console.error(e)
  }
)


   
    
      return ( 
        <Box as={SafeAreaView} bg={theme.colors.purple} flex={1} style={{justifyContent: 'center'} } >
          <Text style={theme.styles.appText}>Please! Add a Word</Text>
          <Text style={{color: 'red', marginBottom:-25, textAlign:'right', marginTop:20, fontWeight: "bold"}}> * required </Text>
          <TextInput
            style={theme.styles.appTextContainer}
            onChangeText={
              (text) => setEnglish(text)
            }
            value={english} 
            placeholder="English"
            backgroundColor={theme.colors.lightPurple}
            ref={input => { this.textEnglish = input }}
           
          
          />
          <Text style={{color: 'red', textAlign:'right', marginBottom:-25, marginTop:20, fontWeight: "bold"}}> * required </Text>
          <TextInput
            style={theme.styles.appTextContainer}
            onChangeText={
              (text) => setTurkish(text)
            }
            value={turkish} 
            placeholder="Turkish"
            backgroundColor={theme.colors.lightPurple}
            ref={input => { this.textTurkish = input }}
  
          />
          <TextInput
            style={theme.styles.appTextContainer}
            onChangeText={
              (text) => setCategory(text)
            }
            value={category} 
            placeholder="Category"
            backgroundColor={theme.colors.lightPurple}
            ref={input => { this.textCategory = input }}
           
          
          />

          <Button title="Save" onPress={() => insertData(english, turkish, category)} />
          <Button
            title='Home'
            style={theme.styles.navigationButtonContainer}
            onPress={() => {
              navigation.navigate("Home")
            }}
            
          />


        </Box>
      );
    };
  
export default AddScreen