import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { checkbox } from '../../assets/images';
import { router } from 'expo-router';

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

  goToMarkCompleteForm=()=>{
    router.navigate('Task/completeForm');
  }


const TaskItem = ({ state, taskName, ownerName, taskType,description,dueDate,dueTime,leadName }) => (

    
    
//   <View style={styles.item}>
//     {/* <Image
//       source={checkbox}
//       style={{ width: 30, height: 30, marginRight: 90, marginTop: 20 }}
//     /> */}
//     <View style={styles.textstyle}>
//       <Text style={[styles.title, { color: '#4789e6', fontSize: 16 }]}>
//         {`${state}`}
//       </Text>
//       <Text style={[styles.subtitle, { fontWeight: 'bold' }]}>{`${taskName}`}</Text>
//       <Text style={styles.subtitle}>{`Owner: ${ownerName}`}</Text>
//       <Text style={styles.subtitle}>{`${time}`}</Text>
//       <Text style={styles.subtitle}>{`${description}`}</Text>
//     </View>
//     <TouchableOpacity
//       onPress={() => console.log('Edit pressed')}
//       style={{ alignItems: 'center', justifyContent: 'center' }}
//     >
//       <Ionicons name="pencil" size={16} color="black" />
//     </TouchableOpacity>
//   </View>

// );
 <View style={styles.section}>
            <View style={styles.detailBox}>
              <Text style={[styles.title, { color: "black" }]}>
                {taskName}/{leadName}
              </Text>
              <Text style={[styles.detailText, { color: "grey" }]}>
               {state} 
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
                <TouchableOpacity onPress={goToMarkCompleteForm}> 
                <Ionicons name='checkmark' size={20}/>
                </TouchableOpacity>
              
               
              </View>
             
            </View>
            <View style={styles.horizontalLine} />
          </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
      },
      headerContainer: {
        backgroundColor: "#023B5E",
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        alignItems: "flex-start",
      },
      headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
      },
      scrollView: {
        flexGrow: 1,
      },
      section: {
        backgroundColor: "transparent",
        borderRadius: 10,
        padding: 5,
        shadowColor: "#E6E1DB",
        overflow: "hidden",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 2,
      },
      detailBox: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
      },
      detailText: {
        fontSize: 18,
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
      },
      bgColor: {
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
      },
      plusButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'grey',
        padding: 15,
        borderRadius: 30,
        elevation: 4,
      },
    });
export default TaskItem;
