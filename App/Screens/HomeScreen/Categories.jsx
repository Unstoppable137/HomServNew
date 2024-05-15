import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import {useNavigation} from '@react-navigation/native'
export default function Categories() {

    const [categories,setCategories]=useState([]);
    const navigation=useNavigation()
    useEffect(()=>{
        getCategories();
    },[])
    /**
     * Get Categories List
     */
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            setCategories(resp?.categories);
        })
    }
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Categories'} isViewAll={true} />
      <FlatList
      // horizontal={true}
      data={categories}
      numColumns={4}
      renderItem={({item,index})=>index<=7&&(
        <TouchableOpacity style={styles.container}
        onPress={()=>navigation.push('business-list',{
          category:item.name
        })}>
            <View style={styles.iconContainer}>
              <Image source={{uri:item?.icon?.url}} 
              style={{width:30,height:30}}
              />
            </View>
            <Text style={{fontFamily:'outfit-medium',marginTop:5}}>
              {item?.name}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'
  },
  iconContainer:{
    backgroundColor:Colors.LIGHT_GRAY,
    padding:18,
    borderRadius:99,
    marginTop:10
  }
})
