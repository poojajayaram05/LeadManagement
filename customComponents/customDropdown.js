// import React, { useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';

// const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },
// ];

// const DropdownComponent = () => {
//   const [value, setValue] = useState(null);

//   const renderItem = item => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textItem}>{item.label}</Text>
//         {item.value === value && (
//           <AntDesign
//             style={styles.icon}
//             color="black"
//             name="Safety"
//             size={20}
//           />
//         )}
//       </View>
//     );
//   };

//   return (
//     <Dropdown
//       style={styles.dropdown}
//       placeholderStyle={styles.placeholderStyle}
//       selectedTextStyle={styles.selectedTextStyle}
//       inputSearchStyle={styles.inputSearchStyle}
//       iconStyle={styles.iconStyle}
//       data={data}
//       search
//       maxHeight={300}
//       labelField="label"
//       valueField="value"
//       placeholder="Select item"
//       searchPlaceholder="Search..."
//       value={value}
//       onChange={item => {
//         setValue(item.value);
//       }}
//       renderLeftIcon={() => (
//         <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
//       )}
//       renderItem={renderItem}
//     />
//   );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//   dropdown: {
//     margin: 16,
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,

//     elevation: 2,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   item: {
//     padding: 17,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   textItem: {
//     flex: 1,
//     fontSize: 16,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });



//main

// import React, { FC, ReactElement, useRef, useState, } from 'react';
// import {
//     FlatList,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Modal,
//     View,
//     ScrollView
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Colors from '../utils/Colors';
// import DimensionUtils from '../utils/DimensionUtils'
// import CommonStyles from '../utils/CommanStyles';
// import { debounce } from '../utils/CommanUtils';


// const Dropdown = ({ label, data, onSelect, title }) => {

//     const DropdownButton = useRef();
//     const [visible, setVisible] = useState(false);
//     const [selected, setSelected] = useState(undefined);
//     const [dropdownTop, setDropdownTop] = useState();
//     const [dropDownStart, setDropDownStart] = useState()

//     const toggleDropdown = () => {
//         visible ? setVisible(false) : openDropdown();
//     };

//     const openDropdown = () => {
//         DropdownButton?.current.measure((_fx, _fy, _wr, h, _px, py) => {
//             setDropDownStart(_px - DimensionUtils.pixelSizeHorizontal(15)) // 15 is the paddingHorizantal
//            //setDropdownTop(py + h + DimensionUtils.pixelSizeVertical(8));
//             setDropdownTop(py + h);
//             setVisible(true);
            
//         });
      
//     };

//     const onItemPress = debounce((item)=> {
//         setSelected(item);
//         onSelect(item);
//         setVisible(false);
//     });

//     const renderItem = ({ item }) => (
//         // <View style={styles.item}>
//         // <TouchableOpacity  onPress={() => onItemPress(item)}>
//         //     <Text style={styles.label}>{item.label}</Text>
//         // </TouchableOpacity>
//         // </View>
//         <View style={styles.item}>
//         <TouchableOpacity  onPress={() => onItemPress(item)}>
//             <Text style={[CommonStyles.roboto_normal_16,{
//                 color: item.label === label ? Colors.BLACK_COLOR : Colors.DISABLE_BUTTON_COLOR
//             }]}>{item.label}</Text>
//         </TouchableOpacity>
//         </View>
//     );

//     const renderDropdown = () => {
//         return (
        
//             <Modal visible={visible} transparent animationType="none">
//             <TouchableOpacity
//                 style={styles.overlay}
//                 onPress={() => setVisible(false)}
//             >
//                 <View style={[styles.dropdown, { top: dropdownTop, left: dropDownStart }]}>
//                     <Modal>
//                     <ScrollView>
//                         <FlatList
//                             data={data}
//                             renderItem={renderItem}
//                             keyExtractor={(item, index) => index.toString()}
//                         />
//                     </ScrollView>
//                     </Modal>
//                 </View>
//             </TouchableOpacity>
//         </Modal>
//         );
//     };

//     return (
//         <View style={styles.button}>
//             <TouchableOpacity
//                 ref={DropdownButton}

//                 onPress={toggleDropdown}
//             >
//                 {renderDropdown()}
//                 <View style={{
//                     flexDirection: 'row', alignItems: 'center',
//                     justifyContent: 'space-between'
//                 }}>
//                     <Text style={[styles.roboto_normal_12, {
//                         marginStart: DimensionUtils.pixelSizeHorizontal(15)

//                     }]}>
//                         {!!selected ? selected.label : label}
//                     </Text>

//                     <Icon name={'chevron-down'}
//                         style={{ marginStart: DimensionUtils.pixelSizeHorizontal(10) }}
//                         size={12} color={Colors.DARK_GRAY}
//                     />

//                 </View>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         width: "100%",
//         alignItems: 'center',
//         flexDirection: 'row',
//         borderRadius: 4,
//         backgroundColor: Colors.WHITE_COLOR_0PACITY_12,
//         borderStyle: 'solid',
//         borderWidth: 1,
//         borderColor: Colors.LEAD_ITEM_BORDER_COLOR,
//         paddingVertical: DimensionUtils.pixelSizeVertical(18),
//         paddingStart: DimensionUtils.pixelSizeHorizontal(75),
//         paddingEnd: DimensionUtils.pixelSizeHorizontal(10),
//         zIndex: 1,
//         flexDirection: "row", alignItems: 'center'
//     },
//     buttonText: {

//     },
//     icon: {
//         marginRight: DimensionUtils.pixelSizeHorizontal(10),
//     },
//     dropdown: {
//         minWidth:DimensionUtils.pixelSizeVertical(150),
//         position: 'absolute',
//         backgroundColor: Colors.WHITE_COLOR,
//         shadowColor: Colors.SHADOW_COLOR,
//         shadowRadius: 4,
//         shadowOffset: { height: 4, width: 0 },
//         elevation: 6,
//         shadowOpacity: 0.5,
//     },
//     overlay: {
       
//     },
//     scrollContainer: {
//         maxHeight: 500, // Set your desired max height here
//     },
//     label: {
//         marginBottom: 3,
//         fontSize: 12,
//         fontWeight: 'bold',
//         paddingRight:20
        
//       },
//     item: {
//         paddingHorizontal: DimensionUtils.pixelSizeHorizontal(16),
//         paddingVertical: DimensionUtils.pixelSizeVertical(16),
//         borderBottomWidth: 0.6,
//         borderBottomColor:Colors.DISABLE_BUTTON_COLOR,
//         minWidth:DimensionUtils.pixelSizeHorizontal(160)
//     },
//     roboto_normal_12: {
//         fontFamily: "Roboto-Regular",
//         fontSize: DimensionUtils.fontPixel(13),
//         fontWeight: "400",
//         fontStyle: "normal",
//         color: Colors.PRIMARY_COLOR
//     }
    

// });

// export default Dropdown;

import React, { useRef, useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/Colors';
import DimensionUtils from '../utils/DimensionUtils';
import { debounce } from '../utils/CommanUtils';
 
const Dropdown = ({ label, data, onSelect }) => {
    const DropdownButton = useRef();
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(undefined);
 
    const toggleDropdown = () => {
        setVisible(!visible);
    };
 
    const onItemPress = debounce((item) => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    });
 
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onItemPress(item)}>
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );
 
    return (
        <View style={styles.container}>
            <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown}>
                <View style={styles.dropdownButton}>
                    <Text style={styles.selectedText}>{selected ? selected.label : label}</Text>
                    <Icon name={'chevron-down'} style={styles.icon} size={12} color={Colors.DARK_GRAY} />
                </View>
            </TouchableOpacity>
            <Modal visible={visible} transparent animationType="fade">
                <TouchableOpacity style={styles.modalOverlay} onPress={toggleDropdown}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};
 
const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    inputContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 13,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: Colors.LIGHT_GRAY,
        borderRadius: 3,
    },
    selectedText: {
        fontSize: 14,
        color: Colors.DARK_GRAY,
    },
    icon: {
        marginLeft: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'right',
        position: 'relative',
       



    },
    modalContent: {
        backgroundColor:'#f2f2f2',
        borderRadius: 10,
        padding: 10,
        minHeight:100,
        maxHeight: 200,
        borderColor: 'black',
        borderWidth: 1,
        position: 'relative',
    //     width:'90%',
    //     height:200,
    //     backgroundColor:'white',
    //     elevation:5,
    //     marginTop:20,
    //     borderRadius:10
    // },
    },
    label: {
        fontSize: 14,
        paddingVertical: 8,
    },
});
 
export default Dropdown;
// import { Check, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
// import { useMemo, useState } from 'react'
// import  { FontSizeTokens, SelectProps } from 'tamagui'
// import { Adapt, Label, Select, Sheet, XStack, YStack, getFontSize } from 'tamagui'
// import { LinearGradient } from 'tamagui/linear-gradient'

// export function SelectDemo() {
//     return (
//         <XStack ai="center" gap="$4">
//           <Label htmlFor="select-demo-2" f={1} miw={80}>
//             Native
//           </Label>
//           <SelectDemoItem id="select-demo-2" native />
//         </XStack>
      
//     )
//   }
  
//   export function SelectDemoItem(props) {
//     const [val, setVal] = useState('apple')
  
//     return (
//       <Select value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
//         <Select.Trigger width={220} iconAfter={ChevronDown}>
//           <Select.Value placeholder="Something" />
//         </Select.Trigger>
  
//         <Adapt when="sm" platform="touch">
//           <Sheet
//             native={!!props.native}
//             modal
//             dismissOnSnapToBottom
//             animationConfig={{
//               type: 'spring',
//               damping: 20,
//               mass: 1.2,
//               stiffness: 250,
//             }}
//           >
//             <Sheet.Frame>
//               <Sheet.ScrollView>
//                 <Adapt.Contents />
//               </Sheet.ScrollView>
//             </Sheet.Frame>
//             <Sheet.Overlay
//               animation="lazy"
//               enterStyle={{ opacity: 0 }}
//               exitStyle={{ opacity: 0 }}
//             />
//           </Sheet>
//         </Adapt>
  
//         <Select.Content zIndex={200000}>
//           <Select.ScrollUpButton
//             alignItems="center"
//             justifyContent="center"
//             position="relative"
//             width="100%"
//             height="$3"
//           >
//             <YStack zIndex={10}>
//               <ChevronUp size={20} />
//             </YStack>
//             <LinearGradient
//               start={[0, 0]}
//               end={[0, 1]}
//               fullscreen
//               colors={['$background', 'transparent']}
//               borderRadius="$4"
//             />
//           </Select.ScrollUpButton>
  
//           <Select.Viewport
          
//             minWidth={200}
//           >
//             <Select.Group>
//               <Select.Label>Fruits</Select.Label>
//               {/* for longer lists memoizing these is useful */}
//               {useMemo(
//                 () =>
//                   items.map((item, i) => {
//                     return (
//                       <Select.Item
//                         index={i}
//                         key={item.name}
//                         value={item.name.toLowerCase()}
//                       >
//                         <Select.ItemText>{item.name}</Select.ItemText>
//                         <Select.ItemIndicator marginLeft="auto">
//                           <Check size={16} />
//                         </Select.ItemIndicator>
//                       </Select.Item>
//                     )
//                   }),
//                 [items]
//               )}
//             </Select.Group>
//             {/* Native gets an extra icon */}
//             {props.native && (
//               <YStack
//                 position="absolute"
//                 right={0}
//                 top={0}
//                 bottom={0}
//                 alignItems="center"
//                 justifyContent="center"
//                 width={'$4'}
//                 pointerEvents="none"
//               >
//                 <ChevronDown
//                   size={getFontSize((props.size) ?? '$true')}
//                 />
//               </YStack>
//             )}
//           </Select.Viewport>
  
//           <Select.ScrollDownButton
//             alignItems="center"
//             justifyContent="center"
//             position="relative"
//             width="100%"
//             height="$3"
//           >
//             <YStack zIndex={10}>
//               <ChevronDown size={20} />
//             </YStack>
//             <LinearGradient
//               start={[0, 0]}
//               end={[0, 1]}
//               fullscreen
//               colors={['transparent', '$background']}
//               borderRadius="$4"
//             />
//           </Select.ScrollDownButton>
//         </Select.Content>
//       </Select>
//     )
//   }
  
//   const items = [
//     { name: 'Apple' },
//     { name: 'Pear' },
//     { name: 'Blackberry' },
//     { name: 'Peach' },
//     { name: 'Apricot' },
//     { name: 'Melon' },
//     { name: 'Honeydew' },
//     { name: 'Starfruit' },
//     { name: 'Blueberry' },
//     { name: 'Raspberry' },
//     { name: 'Strawberry' },
//     { name: 'Mango' },
//     { name: 'Pineapple' },
//     { name: 'Lime' },
//     { name: 'Lemon' },
//     { name: 'Coconut' },
//     { name: 'Guava' },
//     { name: 'Papaya' },
//     { name: 'Orange' },
//     { name: 'Grape' },
//     { name: 'Jackfruit' },
//     { name: 'Durian' },
//   ]