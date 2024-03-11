import { PieChart} from "react-native-chart-kit";
import React from 'react';
import { View} from 'react-native';
 
  const Chart2 = () => {
   
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
   
 
      const data2 = [
        {
          name: "Hot",
          population:5,
          color: "#9ee9c4",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Warm",
          population: 3,
          color: "#61c9c9",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
        {
          name: "Cold",
          population: 5,
          color: "#339f8d",
          legendFontColor: "#7F7F7F",
          legendFontSize: 15
        },
      ];
   
 
    return(
        <View>
             <PieChart
               data={data2}
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
 
 
  export default Chart2;  