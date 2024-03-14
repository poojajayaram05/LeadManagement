import { LineChart } from "react-native-chart-kit";
import React from 'react';
import { View} from 'react-native';
 
const ChartLine = () => {
   
    const chartConfig = {
        backgroundGradientFrom: "rgba(0, 0, 0, 0)", // Transparent background
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "rgba(0, 0, 0, 0)",
        backgroundGradientToOpacity: 0,
        color: (opacity = 1) => `#023B5E`, // Change line color to blue
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        propsForLabels: {
            fill: 'black', // Change text color to black
            fontSize: 12
        },
        propsForDots: {
            fill: '#023B5E' // Change dot color to blue
        }
    };
 
    const data = {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `#023B5E`, // Change line color to blue
                strokeWidth: 2
            }
        ],
        // legend: ["Rainy Days"]
    };
   
    return(
        <View style={{ alignItems: 'center' }}>
            <LineChart
                data={data}
                width={370}
                height={220}
                chartConfig={chartConfig}
            />
        </View>
    );
};
 
export default ChartLine;