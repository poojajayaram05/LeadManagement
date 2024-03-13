import React from "react";
import { StyleSheet,Text, View } from "react-native";
import Chart1 from "./chart1";
import Chart2 from "./chart2";
import ChartLine from "./lineChart";
 
const Bigcard=({label1, label2})=>{
    return(
        <View>
        <View style={styles.bigCard}>
        <Text style={styles.cardText}> {label1}</Text>
        <Chart1/>
         </View>
 
       <View style={styles.bigCard}>
       <Text style={styles.cardText}> {label2}</Text>
       <Chart2/>
       {/* <ChartLine/> */}
       </View>
       </View>
    );
};
 
const styles= StyleSheet.create({
    cardText: {
        fontSize: 18,
      },
      bigCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 18,
        marginHorizontal: 20,
        marginVertical: 10,
        height: 270,
        width: 350,
        flexDirection:'column',
        alignSelf: 'center',
        marginTop:20,
      },
})
 
export default Bigcard;