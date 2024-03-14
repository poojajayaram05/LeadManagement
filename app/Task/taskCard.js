// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { router } from 'expo-router';

// const getStatusColor = (state) => {
//     switch (state.toLowerCase()) {
//       case "in-progress":
//         return "skyblue";
//       case "pending":
//         return "orange";
//       case "completed":
//         return "green";
//       default:
//         return "black";
//     }
//   };

//   goToMarkCompleteForm=()=>{
//     router.navigate('Task/completeForm');
//   }


// const TaskItem = ({ state,taskName, ownerName, taskType,description,dueDate,dueTime,leadName }) => (

    

//  <View style={styles.section}>
//             <View style={styles.detailBox}>
//               <Text style={[styles.title, { color: "black" }]}>
//                 {taskName}/{leadName}
//               </Text>
//               {/* <Text style={[styles.detailText, { color: "grey" }]}>
//                {state} 
//               </Text> */}
//               <Text style={[styles.detailText, { color: "grey" }]}>
//                 {ownerName}
//               </Text>
//               <Text style={[styles.detailText, { color: "grey" }]}>
//                 {description}
//               </Text>
//               <Text style={[styles.detailText, { color: "grey" }]}>
//                 {dueDate}
//               </Text>

//               <View style={styles.meetProg}>
//                 <Text style={styles.statusTxt}>{taskType}</Text>
//                 <Text
//                   style={[
//                     styles.statusTxt, styles.bgColor,
//                     { color: getStatusColor(state) },
//                   ]}
//                 >
//                   {state}
//                 </Text> 
//                 {/* <TouchableOpacity onPress={goToMarkCompleteForm}> 
//                 <Ionicons name='checkmark' size={20}/>
//                 </TouchableOpacity> */}
              
               
//               </View>
             
//             </View>
//             <View style={styles.horizontalLine} />
//           </View>
// );
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#ccc",
//       },
//       headerContainer: {
//         backgroundColor: "#023B5E",
//         padding: 15,
//         borderBottomWidth: 1,
//         borderBottomColor: "white",
//         alignItems: "flex-start",
//       },
//       headerText: {
//         fontSize: 24,
//         fontWeight: "bold",
//         color: "white",
//       },
//       scrollView: {
//         flexGrow: 1,
//       },
//       section: {
//         backgroundColor: "transparent",
//         borderRadius: 10,
//         padding: 5,
//         shadowColor: "#E6E1DB",
//         overflow: "hidden",
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//       },
//       title: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginBottom: 2,
//       },
//       detailBox: {
//         backgroundColor: "white",
//         padding: 10,
//         borderRadius: 10,
//       },
//       detailText: {
//         fontSize: 16,
//         marginBottom: 2,
//       },
//       meetProg: {
//         flexDirection: "row",
//         alignItems:"center",
//         justifyContent: "space-between",
//       },
    //   statusTxt: {
    //     backgroundColor: "#023B5E",
    //     paddingHorizontal: 10,
    //     paddingVertical: 6,
    //     borderRadius: 5,
    //     fontSize: 16,
    //     color: "white",
    //     fontWeight: "600",
    //     minWidth: 100, 
    //     textAlign: "center",
    //   },
//       bgColor: {
//         backgroundColor: 'white',
//         borderColor: 'grey',
//         borderWidth: 1,
//       },
//       plusButton: {
//         position: 'absolute',
//         bottom: 20,
//         right: 20,
//         backgroundColor: 'grey',
//         padding: 15,
//         borderRadius: 30,
//         elevation: 4,
//       },
//     });
// export default TaskItem;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const getStatusColor = (state) => {
    switch (state.toLowerCase()) {
        case "in-progress":
            return "skyblue";
        case "pending":
            return "orange";
        case "completed":
            return "green";
        default:
            return "black";
    }
};

const TaskItem = ({ state, taskName, ownerName, taskType, description, dueDate, dueTime, leadName }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMarkCompleted = () => {
        // Implement logic for marking the task as completed
        setMenuVisible(false); // Close the dropdown menu
    };

    const handleEditTask = () => {
        // Implement logic for editing the task
        setMenuVisible(false); // Close the dropdown menu
    };

    const handleView = () => {
        // Implement logic for viewing the task
        setMenuVisible(false); // Close the dropdown menu
    };

    const handleCardPress = () => {
        setMenuVisible(false); // Close the dropdown menu
    };

    return (
        <TouchableOpacity onPress={handleCardPress}>
            <View style={styles.section}>
                <View style={styles.detailBox}>
                    <Text style={[styles.title, { color: "black" }]}>
                        {taskName}/{leadName}
                    </Text>
                    <Text style={[styles.detailText, { color: "grey" }]}>
                        {ownerName}
                    </Text>
                    <Text style={[styles.detailText, { color: "grey" }]}>
                        {description}
                    </Text>
                    <Text style={[styles.detailText, { color: "grey" }]}>
                        {dueDate}
                    </Text>
                    <View style={styles.meetProg}>
                        <Text style={styles.statusTxt}>{taskType}</Text>
                        <Text
                            style={[
                                styles.statusTxt, styles.bgColor,
                                { color: getStatusColor(state) },
                            ]}
                        >
                            {state}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleToggleMenu}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="ellipsis-vertical" size={24} color="black" />
                    </View>
                </TouchableOpacity>
                {menuVisible && (
                    <View style={styles.dropdown}>
                        <TouchableOpacity onPress={handleMarkCompleted}>
                            <Text style={styles.dropdownItem}>Mark as Completed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleEditTask}>
                            <Text style={styles.dropdownItem}>Edit Task</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleView}>
                            <Text style={styles.dropdownItem}>View</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    section: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    detailBox: {
        flex: 1,
    },
    menuIcon: {
        marginLeft: 'auto',
    },
    dropdown: {
        position: 'absolute',
        top: 40,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    dropdownItem: {
        padding: 10,
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 2,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 2,
    },
    meetProg: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    statusTxt: {
        backgroundColor: "#023B5E",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 5,
        fontSize: 16,
        color: "white",
        fontWeight: "600",
        minWidth: 100, 
        textAlign: "center",
      },
    bgColor: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
    },
});

export default TaskItem;