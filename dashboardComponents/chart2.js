// import { PieChart} from "react-native-chart-kit";
// import React from 'react';
// import { View} from 'react-native';

 
//   const Chart2 = () => {
   
//     const chartConfig = {
//         backgroundGradientFrom: "#1E2923",
//         backgroundGradientFromOpacity: 0,
//         backgroundGradientTo: "#08130D",
//         backgroundGradientToOpacity: 0.5,
//         color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
//         strokeWidth: 2,
//         barPercentage: 0.5,
//         useShadowColorFromDataset: false
//       };
   
 
//       const data2 = [
//         {
//           name: "Hot",
//           population:5,
//           color: "#9ee9c4",
//           legendFontColor: "#7F7F7F",
//           legendFontSize: 15
//         },
//         {
//           name: "Warm",
//           population: 3,
//           color: "#61c9c9",
//           legendFontColor: "#7F7F7F",
//           legendFontSize: 15
//         },
//         {
//           name: "Cold",
//           population: 5,
//           color: "#339f8d",
//           legendFontColor: "#7F7F7F",
//           legendFontSize: 15
//         },
//       ];
   
 
//     return(
//         <View>
//              <PieChart
//                data={data2}
//                width={360}
//                height={200}
//                chartConfig={chartConfig}
//                accessor={"population"}
//                backgroundColor={"transparent"}
//                flexDirection={"column"}
//                paddingLeft={"-20"}
//                center={[10, 5]}
//                absolute
//               />
//         </View>
//     );
//   };
 
 
//   export default Chart2;  

import { PieChart } from "react-native-chart-kit";
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import FetchLeadBySource from "@/app/service/fetchLeadBySource";
 
const Chart2 = () => {
    const [qualData, setQualData] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const qdata = await FetchLeadBySource();
                setQualData(qdata.result);
            } catch (error) {
                console.log(error, "error");
            }
        };
        fetchData();
 
    }, []);
 
    // const colors = ['#1E7AC4', '#023B5E', '#ED3333', '#339f8d', '#0388fc'];
    const colors = ['#011f4b','#b3cde0', '#005b96','#528AAE',  '#89CFF0'];
 
 
    // Sorting data based on value in descending order
    const sortedData = qualData.sort((a, b) => b.value - a.value);
 
    const chartData = sortedData.map((item, index) => ({
        name: item.name,
        population: parseInt(item.value), // Convert value to integer
        color: colors[index],
        legendFontColor: '#7F7F7F',
        legendFontSize: 12
    }));
 
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
 
    return (
        <View>
            <PieChart
                data={chartData}
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