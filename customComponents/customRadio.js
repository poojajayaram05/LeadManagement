// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native"
// import DimensionUtils from "../../utils/DimensionUtils";
// import Colors from "../../utils/Colors";
// import CommonStyles from "../../utils/CommanStyles";
// import { Selected, unSelected } from "../../assets/images";
// import { debounce } from "../../utils/CommanUtils";


// export default function RadioButton({ data, onSelect, disableLine, SelectedData }) {




//     const renderItems = ({ item }) => {

//         const selectHandler = debounce(() => {

//             onSelect(item);


//         });

//         return (
//             <TouchableOpacity
//                 onPress={selectHandler}>
//                 <View style={[styles.main, { borderBottomWidth: disableLine ? 0 : 1 }]}>
//                     <Text style={[CommonStyles.roboto_normal_16, {
//                         color: Colors.DISPOSITIONCOLOR
//                     }]}>{item.label}</Text>



//                     <Image
//                         style={styles.image}
//                         source={SelectedData && SelectedData.label === item.label ? Selected : unSelected}
//                         resizeMode="contain"

//                     />


//                 </View>
//             </TouchableOpacity>
//         )
//     }


//     return (
//         <View>
//             {/* {data.map((item, i) => {
               
//                 );
//             })} */}

//             <FlatList
//                 nestedScrollEnabled={true}
//                 scrollEnabled={false}
//                 extraData={data}
//                 data={data}
//                 renderItem={renderItems}
//             />
//         </View>
//     );
// }


// const styles = StyleSheet.create({
//     main: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingHorizontal: DimensionUtils.pixelSizeHorizontal(16),
//         paddingVertical: DimensionUtils.pixelSizeVertical(16),
//         borderBottomColor: Colors.PURPLE_LIGHT_BORDER,

//     },
//     image: {
//         width: DimensionUtils.widthPixel(16),
//         height: DimensionUtils.heightPixel(16)
//     }
// })

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from "react-native"
import DimensionUtils from "../utils/DimensionUtils";
import Colors from "../utils/Colors";
import CommonStyles from "../utils/CommanStyles";
import { radioselected, radiounselected, Selected, unSelected } from "../assets/images";
import { debounce } from "../utils/CommanUtils";
import { formData } from "../app/form/formData";
import { MdDashboard } from "react-icons/md";



export default function RadioButton({ onSelect, disableLine, SelectedData, title }) {
    const radioButtonOptions = formData.elements.find(element => element.type === 'RadioButton').rdata;
    const[selectedData, setSelectedData]=useState('');
  const renderItems = ({ item }) => {
    const selectHandler = debounce(() => {
      //onSelect(item);
      setSelectedData(item => item); 
      console.log("IT IS",selectedData);
    });

    return (
        <TouchableOpacity onPress={selectHandler}>
            
        <View style={[styles.main, { borderBottomWidth: disableLine ? 0 : 1 }]}>
          
          <Text style={[CommonStyles.roboto_normal_16, { color: Colors.DISPOSITIONCOLOR }]}>
            {item.label}
          </Text>
          <Image
            style={styles.image}
            source={selectedData && selectedData.label === item.label ? Selected : unSelected}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
   <>
        <Text style={styles.label}>{title}</Text>
        <View style={{ paddingRight: 240 }}>
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        extraData={radioButtonOptions}
        data={radioButtonOptions}
        renderItem={renderItems}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    
  },
  
    label: {
        marginBottom: 3,
        fontSize: 12,
        fontWeight: 'bold',
        flex: 1, justifyContent: 'left', alignItems: 'flex-end', paddingRight: 280
    },

  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: DimensionUtils.pixelSizeHorizontal(16),
    paddingVertical: DimensionUtils.pixelSizeVertical(16),
    borderBottomColor: Colors.PURPLE_LIGHT_BORDER,
  },
  image: {
    width: DimensionUtils.widthPixel(16),
    height: DimensionUtils.heightPixel(16)
  }
});
//         <TouchableOpacity
//         onPress={selectHandler}>
//         <View style={[styles.main, { borderBottomWidth: disableLine ? 0 : 1 }]}>
//             <Text style={[CommonStyles.roboto_normal_16, {
//                 color: Colors.DISPOSITIONCOLOR
//             }]}>{item.label}</Text>



//             <Image
//                 style={styles.image}
//                 source={SelectedData && SelectedData.label === item.label ? radioselected : unSelected}
//                 resizeMode="contain"

//             />
//         </View>
//     </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         nestedScrollEnabled={true}
//         scrollEnabled={false}
//         extraData={data}
//         data={data}
//         renderItem={renderItems}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//       },
//   main: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: DimensionUtils.pixelSizeHorizontal(16),
//     paddingVertical: DimensionUtils.pixelSizeVertical(16),
//     borderBottomColor: Colors.PURPLE_LIGHT_BORDER,
//   },
//   image: {
//     width: DimensionUtils.widthPixel(20),
//     height: DimensionUtils.heightPixel(20)
//   }
// });
