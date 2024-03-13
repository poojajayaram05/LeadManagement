// import React from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { formData } from '../Task/jsonData';
// // import { FontAwesome } from "@expo/vector-icons";

// const TaskDetailsPage = () => {
//   return (
//     <ScrollView contentContainerStyle={styles.scrollView}>
//       <View style={styles.container}>
//         {formData.elements.map((task, index) => (
//           <View style={styles.section} key={index}>
//             <View style={styles.detailBox}>
//               <Text style={[styles.title, { color: "black" }]}>
//                 {task.title}
//               </Text>
//               <Text style={[styles.detailText, { color: "grey" }]}>
//                 {task.createdDate}
//               </Text>
//               <Text style={[styles.detailText, { color: "grey" }]}>
//                 {task.createdBy}
//               </Text>
//               <Text style={[styles.detailText, { color: "grey" }]}>
//                 {task.description}
//               </Text>

//               <View style={styles.meetProg}>
//                 <Text style={styles.statusTxt}>{task.taskType}</Text>
//                 <Text
//                   style={[
//                     styles.statusTxt, styles.bgColor,
//                     { color: getStatusColor(task.status) },
//                   ]}
//                 >
//                   {task.status}
//                 </Text>
//               </View>
//             </View>
//             <View style={styles.horizontalLine} />
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// // Function to determine status text color based on status
// const getStatusColor = (status) => {
//   switch (status.toLowerCase()) {
//     case "in progress":
//       return "green";
//     case "pending":
//       return "orange";
//     case "upcoming":
//       return "skyblue";
//     default:
//       return "black";
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flexGrow: 1,
//   },
//   container: {
//     backgroundColor: "#ccc",
//     width: "100%",
//   },
//   section: {
//     marginBottom: 10,
//     backgroundColor: "#ccc",
//     borderRadius: 10,
//     padding: 15,
//     shadowColor: "#E6E1DB",
//     overflow:"hidden",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   detailBox: {
//     backgroundColor: "white",
//     padding: 10,
//     borderRadius: 10,
//   },
//   detailText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   meetProg: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   statusTxt: {
//     backgroundColor: "#023B5E",
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     borderRadius: 5,
//     fontSize: 16,
//     color: "white",
//     fontWeight: "600",
//   },
//   bgColor:{
//     backgroundColor:'white',
//     borderColor:'grey',
//     borderWidth:1
//   }
// });

// export default TaskDetailsPage;

import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { formData } from '../Task/jsonData';
import { FontAwesome } from "@expo/vector-icons";
import TaskItem from "./taskCard";

const TaskDetailsPage = () => {
    const taskData = [
        {
          id: '1',
          taskType: "Meeting",
          state: 'follow-up',
          taskName: 'Carla Demo Lead',
          ownerName: 'John Doe',
          time: '12:23pm',
          description: "Discuss project details with the client",
          duedate: 'Today',
          assignedToMe: 'Carla',
          assignedByMe: 'Sofia',
        },
        {
          id: '2',
          taskType: "Assignment",
          state: 'in-progress',
          taskName: 'Another Task',
          ownerName: 'Jane Smith',
          time: '3:45pm',
          description: "Implement new features",
          duedate: 'Upcoming',
          assignedToMe: 'Carla',
          assignedByMe: 'Sara',
        },
        {
          id: '3',
          taskType: "Review",
          state: 'completed',
          taskName: 'Final Task',
          ownerName: 'Bob Johnson',
          time: '9:15am',
          description: "Review project progress and plan for next steps",
          duedate: 'Today',
          assignedToMe: 'Patty',
          assignedByMe: 'Bhumika',
        },
        {
          id: '4',
          taskType: "Task",
          state: 'in-progress',
          taskName: 'Another Task',
          ownerName: 'Jane Smith',
          time: '3:45pm',
          description: "Start working on the new project",
          duedate: 'Upcoming',
          assignedToMe: 'Capy',
          assignedByMe: 'Nikita',
        },
        {
          id: '5',
          taskType: "Event",
          state: 'completed',
          taskName: 'Final Task',
          ownerName: 'Bob Johnson',
          time: '9:15am',
          description: "Team-building activities and dinner",
          duedate: 'Overdue',
          assignedToMe: 'Arpita',
          assignedByMe: 'Sahil',
        },
        {
          id: '6',
          taskType: "Meeting",
          state: 'pending',
          taskName: 'New Project',
          ownerName: 'Alice Williams',
          time: '2:30pm',
          description: "Discuss project updates and challenges",
          duedate: 'Overdue',
          assignedToMe: 'Carla',
          assignedByMe: 'Sofia',
        },
        {
          id: '7',
          taskType: "Assignment",
          state: 'follow-up',
          taskName: 'Client Meeting',
          ownerName: 'Chris Davis',
          time: '10:00am',
          description: "Prepare project documentation",
          duedate: 'Upcoming',
          assignedToMe: 'Ruby',
          assignedByMe: 'Roxy',
        },
        {
          id: '8',
          taskType: "Meeting",
          state: 'in-progress',
          taskName: 'Coding Task',
          ownerName: 'Eva Brown',
          time: '4:45pm',
          description: "Discuss project updates",
          duedate: 'Overdue',
          assignedToMe: 'Dhanush',
          assignedByMe: 'Yashas',
        },
      ];
      
      
    
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Task</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
      

        {taskData.map((task, index) => (
            <TaskItem
              state={task.state}
              taskName={task.taskName}
              ownerName={task.ownerName}
              time={task.time}
              description={task.description}
              key={index} // It's a good practice to include a unique key prop when mapping over an array
            />
          ))}
      </ScrollView>

      <TouchableOpacity style={styles.plusButton}>
        <FontAwesome name="plus" size={24} color="white"/>
      </TouchableOpacity>
    </View>
  );
};

// Function to determine status text color based on status
const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "in progress":
      return "green";
    case "pending":
      return "orange";
    case "upcoming":
      return "skyblue";
    default:
      return "black";
  }
};

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
    marginBottom: 1,
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 15,
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
    marginBottom: 10,
  },
  detailBox: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
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

export default TaskDetailsPage;

