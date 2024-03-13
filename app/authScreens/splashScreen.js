import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

const SpalashScreen = () => {
    return (
        <View style={{flex:1, justifyContent:'center', backgroundColor: "#06bcee"}}>
            <ActivityIndicator size='large' color='#ffffff'/>
        </View>
    )


}


export default SpalashScreen;