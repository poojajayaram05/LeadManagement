import {StyleSheet} from 'react-native'
import DimensionUtils from './DimensionUtils'
import Colors from './Colors'

export default styles = StyleSheet.create({
    header: {
        alignSelf: 'center',
        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(20),
        fontWeight: "700",
        fontStyle: "normal",
     
        color: Colors.PRIMARY_COLOR
    },
    section: {

        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(15),
        fontWeight: "500",
        fontStyle: "normal",
        textAlign: "center",
        color: Colors.PRIMARY_COLOR_LIGHT,
        marginTop: DimensionUtils.pixelSizeVertical(20)
    },


    image: {
        width: DimensionUtils.widthPixel(120),
        height: DimensionUtils.heightPixel(56),
        alignSelf: 'center',
        marginTop: DimensionUtils.pixelSizeVertical(32)
    },


    roboto_normal_16:{
        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(16),
        fontWeight: "600",
        fontStyle: "normal",
        flexWrap:'wrap',
        
        color: Colors.BLACK_COLOR
    },

    roboto_normal_14: {
        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(14),
        fontWeight: "400",
        fontStyle: "normal",
        color: Colors.TEXT_COLOR
    },
    dispositionStyle: {
        borderRadius: 13,
        backgroundColor: Colors.RED_BACKGROUND,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.RED_BORDER_COLOR,
        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(12),
        fontWeight: "400",
        fontStyle: "normal",
        textAlign:'center',
        color: Colors.PRIMARY_COLOR,
        paddingHorizontal: DimensionUtils.pixelSizeHorizontal(16),
        paddingVertical: DimensionUtils.pixelSizeVertical(6),
        minWidth:DimensionUtils.widthPixel(70)
    },
    item: {
        borderRadius: 6,
        backgroundColor: Colors.WHITE_COLOR,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        elevation: 6,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: Colors.LEAD_ITEM_BORDER_COLOR,
        paddingHorizontal: DimensionUtils.pixelSizeHorizontal(12),
        paddingVertical: DimensionUtils.pixelSizeVertical(17),
        marginBottom: DimensionUtils.pixelSizeVertical(20),
    },

    roboto_normal_600:{
        fontFamily: "Roboto-Regular",
        fontSize: DimensionUtils.fontPixel(20),
        fontWeight: "600",
        fontStyle: "normal",
        color: Colors.PRIMARY_COLOR
    },
    modalImage: {
    width: DimensionUtils.widthPixel(70),
    height: DimensionUtils.heightPixel(70),
    marginTop: DimensionUtils.pixelSizeVertical(50),
    marginBottom: DimensionUtils.pixelSizeVertical(32),
    alignSelf: 'center'
}
  
})