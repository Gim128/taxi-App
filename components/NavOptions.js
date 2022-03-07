import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

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
  return (
    <FlatList 
        data={data}
        keyExtractor={( item ) => item.id}
        horizontal
        renderItem={({item}) => (
            <TouchableOpacity>
                <View>
                    <Image 
                        style={{width: 120, height:120, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )}
        
    />
  )
}

export default NavOptions;