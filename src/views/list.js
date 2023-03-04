import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import theme from '../utils/theme';
import Box from '../components/box';
import WebSQLite from "react-native-quick-websql"
import TableExample from './table';
//import { DataTable } from 'react-native-paper';
import DataTable, { COL_TYPES } from 'react-native-datatable-component';
import Button from '../components/button';

var db = WebSQLite.openDatabase('mydb.db')


function ListScreen ({navigation}){
  let [flatListItems, setFlatListItems] = useState([]);
  let [deleteId, setDeleteId]  = useState('');

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM `Words`',
        [],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setFlatListItems(temp);
         
        }
      );
    });
  }, []);

  const deleteData = (setDeleteId) => {
    console.log('STARTINGGG')
    console.log(setDeleteId)
    for (let i = 0; i < (setDeleteId.length || 0); ++i) {
      db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM `Words` where word_id=?',
          [setDeleteId[i]],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'User deleted successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () => navigation.navigate('ListScreen'),
                  },
                ],
                { cancelable: false }
              );
            } else {
              alert('Please insert a valid User Id');
            }
          }
        );
      });
      

  };
}


useEffect(() => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM `Words`',
      [],
      (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i){
        console.log('item:', res.rows?.item(i))
       
      }}
    );
  });
}, []);


   //Table Headings
   const columns = [
    {
      name: "ID",
      selector: "word_id",
      sortable: true
    },
    {
      name: "English",
      selector: "english",
      sortable: true
    },
    {
      name: "Turkish",
      selector: "turkish",
      sortable: true,
      right: true
    }
    ,
    {
      name: "Category",
      selector: "category",
      sortable: true,
      right: true
    },
    {
      name: "Select",
      selector: "select",
      right: true
    }
  ];


  return (
    <Box as={SafeAreaView} bg={theme.colors.purple} flex={1} >
      <Box>
      <DataTable
            data={flatListItems} // list of objects
            colNames={['english', 'turkish', 'category', 'select']} //List of Strings
            colSettings={[
             
              { name: 'english', type: COL_TYPES.STRING, width: '25%',  }, 
              {name: 'turkish', type: COL_TYPES.STRING, width: '25%'},
              { name: 'category', type: COL_TYPES.STRING, width: '25%' }, 
              {name: 'select', type: COL_TYPES.CHECK_BOX , width: '20%'},
            ]}//List of Objects
            noOfPages={1}
            onRowSelect={(word_id) => setDeleteId(word_id)}
            backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
            headerLabelStyle={{ color: 'grey', fontSize: 12 }} //Text Style Works
        />

      </Box>

      <Box>
      <Button 
      style={theme.styles.deleteButtonContainer}
      onPress={() => deleteData(setDeleteId)}
      title={'Delete'}
      />
      
      <Button
            style={theme.styles.navigationButtonContainer}
            onPress={() => {
              navigation.navigate("Home")
            }}
            title={'Home'}
           
          />
      </Box>
       

       
    </Box>
      

  );
};
export default ListScreen