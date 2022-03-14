import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import tw from "twrnc";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
        id: "123",
        title: "Get A Ride",
        image: "https://images.all-free-download.com/images/graphicthumb/sports_car_vector_291850.jpg",
        screen: "MapScreen", 
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://thumbs.dreamstime.com/b/meal-ready-to-eat-vector-icon-123653190.jpg",
        screen: "EatsScreen",
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);

  return (
    <FlatList 
        data={data}
        keyExtractor={( item ) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 `}
                disabled={!origin}
            >
                <View style={tw`${!origin && "opacity-20"}`}>
                    {/* 2:13:12 */}
                    <Image 
                        style={{width: 120, height:120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon 
                    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name='arrowright' color= "white" type="antdesign"/>
                </View>
            </TouchableOpacity>
        )}
        
    />
  )
}

export default NavOptions;