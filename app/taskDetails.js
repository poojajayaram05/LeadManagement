// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
// //import { formData } from "../jsonData";
// import ArrowBack from "../customComponents/arrowBack";
// import { TouchableOpacity } from "react-native";
// import { router } from "expo-router";
// import useIdStore from "./leadStore";
// import DetailCard from "../customComponents/detailCard";
// import { taskData } from "../customComponents/formData";
// export const taskData = {
//     elements: [
//       {
//         id: "1",
//         taskType: "Meeting",
//         state: "follow-up",
//         taskName: "Carla Demo Lead",
//         ownerName: "John Doe",
//         dueDate: "2024-03-01",
//         dueTime: "10:00 AM",
//         description: "Discuss project details with the client",
//         leadName: "John Smith",
//         // dueState: "Today",
//         // assignedToMe: "Carla",
//         // assignedByMe: "Sofia",
//       },
//       {
//         id: "2",
//         taskType: "Assignment",
//         state: "in-progress",
//         taskName: "Another Task",
//         ownerName: "Jane Smith",
//         dueDate: "2024-03-05",
//         dueTime: "2:30 PM",
//         description: "Implement new features",
//         leadName: "Jane Johnson",
//         dueState: "Upcoming",
//         assignedToMe: "Carla",
//         assignedByMe: "Sara",
//       },
//       {
//         id: "3",
//         taskType: "Review",
//         state: "completed",
//         taskName: "Final Task",
//         ownerName: "Bob Johnson",
//         dueDate: "2024-03-10",
//         dueTime: "3:45 PM",
//         description: "Review project progress and plan for next steps",
//         leadName: "Michael Brown",
//         dueState: "Today",
//         assignedToMe: "Patty",
//         assignedByMe: "Bhumika",
//       },
//       {
//         id: "4",
//         taskType: "Task",
//         state: "in-progress",
//         taskName: "Another Task",
//         ownerName: "Jane Smith",
//         dueDate: "2024-03-15",
//         dueTime: "9:00 AM",
//         description: "Start working on the new project",
//         leadName: "Emily Jones",
//         dueState: "Upcoming",
//         assignedToMe: "Capy",
//         assignedByMe: "Nikita",
//       },
//       {
//         id: "5",
//         taskType: "Event",
//         state: "completed",
//         taskName: "Final Task",
//         ownerName: "Bob Johnson",
//         dueDate: "2024-03-20",
//         dueTime: "6:00 PM",
//         description: "Team-building activities and dinner",
//         leadName: "William Garcia",
//         dueState: "Overdue",
//         assignedToMe: "Arpita",
//         assignedByMe: "Sahil",
//       },
//       {
//         id: "6",
//         taskType: "Meeting",
//         state: "pending",
//         taskName: "New Project",
//         ownerName: "Alice Williams",
//         dueDate: "2024-03-25",
//         dueTime: "11:30 AM",
//         description: "Discuss project updates and challenges",
//         leadName: "Olivia Miller",
//         dueState: "Overdue",
//         assignedToMe: "Carla",
//         assignedByMe: "Sofia",
//       },
//       {
//         id: "7",
//         taskType: "Assignment",
//         state: "follow-up",
//         taskName: "Client Meeting",
//         ownerName: "Chris Davis",
//         dueDate: "2024-03-20",
//         dueTime: "11:35 AM",
//         description: "Prepare project documentation",
//         leadName: "James Davis",
//         dueState: "Upcoming",
//         assignedToMe: "Ruby",
//         assignedByMe: "Roxy",
//       },
//       {
//         id: "8",
//         taskType: "Meeting",
//         state: "in-progress",
//         taskName: "Coding Task",
//         ownerName: "Eva Brown",
//         dueDate: "2024-03-30",
//         dueTime: "4:15 PM",
//         description: "Discuss project updates",
//         leadName: "Benjamin Martinez ",
//         dueState: "Overdue",
//         assignedToMe: "Dhanush",
//         assignedByMe: "Yashas",
//       },
//     ],
//   };
 
// function TaskDetailsPage() {
//   //const taskId = useIdStore((state) => state.taskId);
//  //const taskId= useIdStore.getState().setTaskId('taskID');
//  const taskId = useIdStore((state) => state.taskId);
//  console.log("id retrieved", taskId);

//   console.log(taskId);
//   const task = taskData.find(item => item.id === taskId);
//  console.log(task);
//   // const handleSubmit = () => {
//   //   Alert.alert("Task Completed");
//   // };
//   const goBack=()=>{
//     router.back();
//   }
 
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Task details</Text>
//     <DetailCard obj = {task}/>
//     <TouchableOpacity onPress={goBack}>
//         <ArrowBack />
//       </TouchableOpacity>
//     {/* <DetailCard firstname={lead.firstname} lastname={lead.lastname} email={lead.email} phone={lead.phone} jobTitle={lead.jobTitle}
//     temperature={lead.temperature} stage={lead.stage} gender={lead.gender}/> */}
//   </View>
//   );
// };
 

 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//         marginTop:40,
//         marginHorizontal: 10,
     
   
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
// },
//   detailBox: {
//     marginBottom: 10,
//   },
//   taskName: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color:'white'
//   },
//   heading: {
//     marginBottom: 15,
//     backgroundColor: "#023B5E",
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderRadius: 10,
//     width:'80%',
//   },
//   detailItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 5,
//   },
//   labelBox: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "#F6FBF8",
//     padding: 5,
//     marginRight: 10,
//     borderRadius: 5,
//   },
//   valueBox: {
//     flex: 2,
//     borderWidth: 1,
//     borderColor: "#F6FBF8",
//     padding: 5,
//     borderRadius: 5,
//   },
//   key: {
//     fontWeight: "bold",
//     textAlign: "left",
//     color: "#023B5E",
//   },
//   value: {
//     color: "#023B5E",
//   },
//   buttonContainer:{
//     flex: 1,
//     flexDirection: 'row', // Align items horizontally
//     alignItems: 'flex-end', // Align items to the start (left)
//     justifyContent: 'flex-end', // Align items to the start (left)
//     padding: 10,
//     },
// });
 
// export default TaskDetailsPage;


import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useIdStore from "./leadStore";
import ArrowBack from "../customComponents/arrowBack";
import DetailCard from "../customComponents/detailCard";
import { taskData } from "../customComponents/formData";
import { router } from "expo-router";
 
const TaskDetailsPage = () => {
  const taskId = useIdStore((state) => state.taskId);
  console.log("id retrieved", taskId);
 
  const task = taskData.find((item) => item.id === taskId);
  console.log(task);
 
  const goBack = () => {
    router.back();
  };
 
  return (
    <View style={styles.container}>
      <DetailCard obj={task} title="Task details" />
 
      <TouchableOpacity onPress={goBack}>
        <ArrowBack />
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f2f6ff",
    marginTop: 40,
    marginHorizontal: 10,
  },
});
 
export default TaskDetailsPage;
 