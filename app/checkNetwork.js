import { useNetInfo } from "@react-native-community/netinfo";
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CheckNetwork() {
    const netInfo = useNetInfo();
    const [networkConnect, setNetworkConnect] = useState(false);

    useEffect(() => {
        if (netInfo) {
            setNetworkConnect(netInfo.isConnected);
        }
    }, [netInfo]);

    return (
        <View>
           
            {networkConnect ? (
                <Text></Text>
            ) : (
                <Text style={{ color: 'red' }}>No network connection</Text>
            )}
        </View>
    );
}
