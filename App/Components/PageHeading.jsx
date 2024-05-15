import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {useRoute,useNavigation} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function PageHeading({title}) {
 
  const navigation=useNavigation();
    return (
    <TouchableOpacity style={{display:'flex',flexDirection:'row',gap:10,
    alignItems:'center'}}
      onPress={()=>navigation.goBack()}
    >
        <Ionicons name="arrow-back-circle-outline" 
        size={30} color="black" />
          <Text style={{fontSize:25,fontFamily:'outfit-medium',padding:10}}>
            {title}</Text>
      </TouchableOpacity>
      
  )
}