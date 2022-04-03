import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import tw from "twrnc";
import Map from '../components/Map';
import NavigateCard from "../components/NavigateCard";
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component= {NavigateCard}
            option={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component= {RideOptionsCard}
            option={{
              headerShown: false,
            }}
          />
         
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})