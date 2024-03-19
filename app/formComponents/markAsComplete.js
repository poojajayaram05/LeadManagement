import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert, TouchableOpacity } from "react-native";
import { router } from 'expo-router';
import ArrowBack from "../../customComponents/arrowBack";
 
export const formData = {
    "elements":  [
          {
            "id": "1",
            "taskType": "Meeting",
            "dueDate": "2024-03-01",
            "dueTime": "10:00 AM",
            "createdDate": "2024-02-28",
            "createdBy": "John Doe",
            "completedDate": null,
            "title": "Client Meeting",
            "description": "Discuss project details with the client",
            "status": "In Progress",
            "owner": "Alice",
            "outcome": null,
            "collaborators": ["Bob", "Charlie"],
            "duedate": 'Today',
            "assignedToMe": 'Carla',
            "assignedByMe": 'Sofia',
          },
          {
            "id": "2",
            "taskType": "Assignment",
            "dueDate": "2024-03-05",
            "dueTime": "2:30 PM",
            "createdDate": "2024-03-01",
            "createdBy": "Jane Smith",
            "completedDate": null,
            "title": "Coding Task",
            "description": "Implement new features",
            "status": "Pending",
            "owner": "Eva",
            "outcome": null,
            "collaborators": ["David", "Emily"],
            "duedate": 'Upcoming',
            "assignedToMe": 'Carla',
            "assignedByMe": 'Sara',
          },
          {
            "id": "3",
            "taskType": "Review",
            "dueDate": "2024-03-10",
            "dueTime": "3:45 PM",
            "createdDate": "2024-03-05",
            "createdBy": "Bob Johnson",
            "completedDate": null,
            "title": "Project Review",
            "description": "Review project progress and plan for next steps",
            "status": "Upcoming",
            "owner": "Chris",
            "outcome": null,
            "collaborators": ["Frank", "Grace"],
            "duedate": 'Today',
            "assignedToMe": 'Patty',
            "assignedByMe": 'Bhumika',
 
          },
          {
            "id": "4",
            "taskType": "Task",
            "dueDate": "2024-03-15",
            "dueTime": "9:00 AM",
            "createdDate": "2024-03-10",
            "createdBy": "Alice Williams",
            "completedDate": null,
            "title": "New Project Kickoff",
            "description": "Start working on the new project",
            "status": "In Progress",
            "owner": "Harry",
            "outcome": null,
            "collaborators": ["Ivy", "Jack"],
            "duedate": 'Upcoming',
            "assignedToMe": 'Capy',
            "assignedByMe": 'Nikita',
 
          },
          {
            "id": "5",
            "taskType": "Event",
            "dueDate": "2024-03-20",
            "dueTime": "6:00 PM",
            "createdDate": "2024-03-15",
            "createdBy": "Chris Davis",
            "completedDate": null,
            "title": "Team Building Event",
            "description": "Team-building activities and dinner",
            "status": "Pending",
            "owner": "Kathy",
            "outcome": null,
            "collaborators": ["Liam", "Mia"],
            "duedate": 'Overdue',
            "assignedToMe": 'Arpita',
            "assignedByMe": 'Sahil',
 
          },
          {
            "id": "6",
            "taskType": "Meeting",
            "dueDate": "2024-03-25",
            "dueTime": "11:30 AM",
            "createdDate": "2024-03-20",
            "createdBy": "Sara Johnson",
            "completedDate": null,
            "title": "Weekly Team Meeting",
            "description": "Discuss project updates and challenges",
            "status": "Upcoming",
            "owner": "Mike",
            "outcome": null,
            "collaborators": ["Nina", "Oliver"],
            "duedate": 'Overdue',
            "assignedToMe": 'Carla',
            "assignedByMe": 'Sofia',
 
          },
          {
            "id": "7",
            "taskType": "Assignment",
            "dueDate": "2024-03-30",
            "dueTime": "4:15 PM",
            "createdDate": "2024-03-25",
            "createdBy": "David White",
            "completedDate": null,
            "title": "Documentation Task",
            "description": "Prepare project documentation",
            "status": "Pending",
            "owner": "Patty",
            "outcome": null,
            "collaborators": ["Quincy", "Rachel"],
            "duedate": 'Upcoming',
            "assignedToMe": 'Ruby',
            "assignedByMe": 'Roxy',
 
          }
        ]
  }
const MarkAsComplete = () => {
  const task = formData.elements[0];
  const [completedDate, setCompletedDate] = useState(task.completedDate || "");
 
  const handleCompletedDateChange = (date) => {
    setCompletedDate(date);
  };
 
  const handleSubmit = () => {
    Alert.alert("Task Completed");
  };
 
  const handleTopButtonClick = () => {
    router.navigate('/DrawerScreens/taskList');
  };
 
  return (
    <View style={styles.container}>
      <View style={styles.topButtonContainer}>
        <TouchableOpacity style={styles.topButton} onPress={handleTopButtonClick} >
        <ArrowBack onPress={handleTopButtonClick}/ >
        </TouchableOpacity>
      </View>
 
      <View style={styles.section}>
        <View style={styles.detailBox}>
          <Text style={[styles.title, { color: "black" }]}>{task.title}</Text>
          <Text style={[styles.detailText, { color: "grey" }]}>
            {task.createdDate}
          </Text>
          <Text style={[styles.detailText, { color: "grey" }]}>
            {task.createdBy}
          </Text>
          <Text style={[styles.detailText, { color: "grey" }]}>
            {task.description}
          </Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
 
      <View style={styles.formSection}>
        <Text style={styles.formLabel}>Completed Task Date</Text>
        <TextInput
          style={styles.dateInput}
          onChangeText={(text) => handleCompletedDateChange(text)}
          value={completedDate}
          placeholder="MM/DD/YYYY"
        />
 
        <Text style={styles.formLabel}>Lead Notes</Text>
        <TextInput
          style={styles.textArea}
          multiline={true}
          numberOfLines={4}
          placeholder="Enter lead notes..."
        />
 
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText} >Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1e0ed",
    width: "100%",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#d1e0ed",
    borderRadius: 10,
    padding: 8,
    shadowColor: "#d1e0ed",
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
    fontSize: 17,
    marginBottom: 10,
  },
  formSection: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginTop: -20,
  },
  formLabel: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight:'600'
  },
  textArea: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  dateInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#023B5E",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  topButtonContainer: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight: 20,
  },
  topButton: {
    backgroundColor: "#d1e0ed",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  topButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
 
export default MarkAsComplete;