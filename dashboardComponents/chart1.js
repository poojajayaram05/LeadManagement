import { PieChart} from "react-native-chart-kit";
import React from 'react';
import { View} from 'react-native';
 
  const Chart1 = () => {
   
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false
      };
 
    const data1 = [
        {
          name: "Lead Form",
          population:2,
          color: "#9ee9c4",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Phonebook",
          population: 3,
          color: "#61c9c9",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Walk In",
          population: 5,
          color: "#339f8d",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Referal",
          population: 3,
          color: "#0388fc",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Exhibition",
          population: 7,
          color: "blue",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        }
      ];
 
    return(
        <View>
             <PieChart
               data={data1}
               width={360}
               height={200}
               chartConfig={chartConfig}
               accessor={"population"}
               backgroundColor={"transparent"}
               flexDirection={"column"}
               paddingLeft={"-20"}
               center={[10, 5]}
               absolute
              />
        </View>
    );
  };
 
 
  export default Chart1;  