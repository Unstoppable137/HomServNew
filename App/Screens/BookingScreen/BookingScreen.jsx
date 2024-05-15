import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import {PageHeading} from './../../Components/PageHeading'
import GlobalApi from './../../Utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import BusinessListItem from './../BusinesListByCategoryScreen/BusinessListItem'
export default function BookingScreen() {

  const {user}=useUser();
  const [bookingList,setBookingList]=useState([])
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    user&&getUserBookings();
  },[user])
  
  /**
   * Get User Bookings
   */
  const getUserBookings=()=>{
    setLoading(true)
    GlobalApi.getUserBookings(user.primaryEmailAddress.emailAddress).then(resp=>{
      setBookingList(resp.bookings);
      setLoading(false)
    })
  }
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-medium',
    fontSize:26}}>My Bookings</Text>

    <View>
        {bookingList?.length>0? <FlatList
        data={bookingList}
        onRefresh={()=>getUserBookings()}
        refreshing={loading}
        renderItem={({item,index})=>(
        <BusinessListItem 
        business={item?.businessList}
        booking={item}
        
        />
      )}
      />:
      <Text style={{fontFamily:'outfit-medium',
      fontSize:25,textAlign:'center',marginTop:100}}>Hey Dude No Booking Found!!!</Text>}
    </View>
    </View>
  )
}