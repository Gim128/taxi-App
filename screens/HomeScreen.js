import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/navOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-2`}>
          <Image 
           style={{
               width: 100,
               height: 100,
               resizeMode: 'contain',
           }}
            source={{
                uri: "https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg",
            }}
          />

        <NavOptions />

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    home: {
        color: "blue",
        textAlign: 'center',
        paddingTop: 150,
    }
});
