import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from "../assets";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Discover = () => {

    const navigation=useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false
        })
      },[])

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between
       px-8 mt-10">
        <View>
            <Text className="text-[32px] text-[#0B646B] font-bold">Discover</Text>
            <Text className="text-[#527283] text-[28px]">the beauty today</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md justify-center items-center shadow-lg">
            <Image
                source={Avatar}
                className="w-full h-full rounded-md object-cover"
            />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyDWpuVw2apN-XgX3gmrzsHrZgr1AG4sCxQ",
        language: 'en',
      }}
    />
      </View>

      <View></View>
    </SafeAreaView>
  )
}

export default Discover