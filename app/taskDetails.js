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


// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import useIdStore from "./leadStore";
// import ArrowBack from "../customComponents/arrowBack";
// // import DetailCard from "../customComponents/detailCard";
// import { taskData } from "../customComponents/formData";
// import { router } from "expo-router";
// import LeadDet from "../leadComponents/leadDetHeader";
 
// const goBack = () => {
//   router.back();
// };

// const TaskDetailsPage = () => {
//   const taskId = useIdStore((state) => state.taskId);
//   console.log("id retrieved", taskId);
 
//   const task = taskData.find((item) => item.id === taskId);
//   console.log(task);
 
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       {/* <View style={styles.header}>
//         <Text style={styles.headerText}>Task Details</Text>
//       </View> */}

//       <View style={styles.content}>
//         <View style={{ height: '30%' }}>
//           <LeadDet/>
//         </View>
//         {/* Content */}
//         {/* <DetailCard obj={task} title="Task details" /> */}
//       </View>
//       <TouchableOpacity onPress={goBack}>
//                 <ArrowBack />
//             </TouchableOpacity>
//     </View>
//   );
// };
 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#f2f6ff",
//     marginTop: 40,
//     marginHorizontal: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   content: {
//     backgroundColor:"#023B5E",
//   },
// });
 
// export default TaskDetailsPage;


// import React from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import useIdStore from "./leadStore";
// import ArrowBack from "../customComponents/arrowBack";
// import LeadDet from "../leadComponents/leadDetHeader";
// import { taskData } from "../customComponents/formData";

// const TaskDetailsPage = () => {
//   const taskId = useIdStore((state) => state.taskId);
//   const task = taskData.find((item) => item.id === taskId);

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Task Details</Text>
//       </View>

//       {/* Lead Details */}
//       <View style={styles.leadDet}>
//         <LeadDet />
//       </View>

//       {/* Task Details */}
//       <View style={styles.taskDetails}>
//         {task && (
//           <>
//             <Text style={styles.taskLabel}>Task Type: {task.taskType}</Text>
//             <Text style={styles.taskLabel}>Task Name: {task.taskName}</Text>
//             <Text style={styles.taskLabel}>Owner Name: {task.ownerName}</Text>
//             <Text style={styles.taskLabel}>Due Date: {task.dueDate}</Text>
//             <Text style={styles.taskLabel}>Description: {task.description}</Text>
//           </>
//         )}
//       </View>

//       {/* Back Button */}
//       {/* <TouchableOpacity onPress={goBack} style={styles.backButton}>
//         <ArrowBack />
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f2f6ff",
//     marginTop: 40,
//     marginHorizontal: 10,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   leadDet: {
//     height: "30%",
//   },
//   taskDetails: {
//     padding: 10,
//     marginBottom: 20,
//   },
//   taskLabel: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   backButton: {
//     alignSelf: "flex-end",
//   },
// });

// export default TaskDetailsPage;
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useIdStore from "./leadStore";
import ArrowBack from "../customComponents/arrowBack";
import LeadDet from "../leadComponents/leadDetHeader";
import { taskData } from "../customComponents/formData";

const TaskDetailsPage = () => {
  const taskId = useIdStore((state) => state.taskId);
  const task = taskData.find((item) => item.id === taskId);

  const Section = ({ title, isOpen, onPress, children }) => {
    return (
      <View style={styles.sectionContainer}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
            {/* <Text>{isOpen ? "-" : "+"}</Text> */}
          </View>
        </TouchableOpacity>
        {isOpen && <View>{children}</View>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Task Details</Text>
      </View>

      {/* Lead Details */}
      <View style={styles.leadDet}>
        <LeadDet />
      </View>

      {/* Task Details */}
      <View style={styles.taskDetails}>
        {task && (
          <>
            <Section title="Task Information" isOpen={true} onPress={() => {}}>
              <View style={styles.row}>
                <Text style={[styles.data, styles.label]}>Task Type:</Text>
                <Text style={styles.detail}>{task.taskType}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.data, styles.label]}>Task Name:</Text>
                <Text style={styles.detail}>{task.taskName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.data, styles.label]}>Owner Name:</Text>
                <Text style={styles.detail}>{task.ownerName}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.data, styles.label]}>Due Date:</Text>
                <Text style={styles.detail}>{task.dueDate}</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.data, styles.label]}>Description:</Text>
                <Text style={styles.detail}>{task.description}</Text>
              </View>
            </Section>
          </>
        )}
      </View>

      {/* Back Button */}
      {/* <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <ArrowBack />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6ff",
    marginTop: 40,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  leadDet: {
    height: "30%",
  },
  taskDetails: {
    padding: 10,
    marginBottom: 20,
  },
  taskLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  backButton: {
    alignSelf: "flex-end",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#023B5E",
  },
  label: {
    color: "black",
    marginRight: 10,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TaskDetailsPage;
