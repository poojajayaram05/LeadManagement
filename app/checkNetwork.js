import { useNetInfo, addEventListener } from "@react-native-community/netinfo";
import { View, Text } from 'react-native'
import React from 'react'

export default function CheckNetwork() {
    const netInfo = useNetInfo();
    const unsubscribe = addEventListener(state => {
        console.log("Connection type", state.type);
        console.log("Is connected?", state.isConnected);
      });
      
      // Unsubscribe
      unsubscribe();
  return (
    <View>
            {netInfo.isConnected ? (
                <View>
                    <Text>Type: {netInfo.type}</Text>
                    <Text>Is Connected? {netInfo.isConnected?.toString()}</Text>
                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>You are offline. Please connect to the internet.</Text>
                </View>
            )}
        </View>
  )
}