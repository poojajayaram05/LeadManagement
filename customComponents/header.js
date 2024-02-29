import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";
import DimensionUtils from "../utils/DimensionUtils";
// import { Arrow } from "../assets/images";
// import { Edit } from "../assets/images";


const DefaultHeader = props => {
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity onPress={() => props?.onBackClick ? props.onBackClick() : null}>
                    {/* <Image
                        style={styles.image}
                        resizeMode="contain"
                        source={Arrow}
                    /> */}
                </TouchableOpacity>
                <Text style={styles.text}>{props.name}</Text>
               
                { props?.showEdit ?
                    <TouchableOpacity onPress={() => props?.onEditClicked ? props.onEditClicked() : null}>
                        {/* <Image
                            style={{
                                height: DimensionUtils.heightPixel(24), width: DimensionUtils.widthPixel(24),
                                marginEnd: DimensionUtils.pixelSizeHorizontal(24)
                            }}
                            resizeMode="contain"
                            source={Edit}
                        /> */}
                    </TouchableOpacity>
                    :  <View />
                }
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: DimensionUtils.heightPixel(60),
        backgroundColor: Colors.WHITE_COLOR,
        shadowColor: Colors.SHADOW_COLOR,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 6,
        justifyContent: 'center'

    },

    text: {

        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(16),
        fontWeight: "500",
        fontStyle: "normal",
        color: Colors.PRIMARY_COLOR_LIGHT,
        alignSelf: 'center',
        marginEnd: DimensionUtils.pixelSizeHorizontal(40)
    },
    image: {
        width: DimensionUtils.heightPixel(35),
        height: DimensionUtils.widthPixel(35),
        backgroundColor: Colors.WHITE_COLOR,
        marginStart: DimensionUtils.pixelSizeHorizontal(6)
    }
})


export default DefaultHeader;