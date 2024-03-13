import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Alert } from "react-native";
import { formData } from './jsonData';
 
const TaskDetailsPage = () => {
  const task = formData.elements[0];
  const [completedDate, setCompletedDate] = useState(task.completedDate || "");
 
  const handleCompletedDateChange = (date) => {
    setCompletedDate(date);
  };
 
  const handleSubmit = () => {
    Alert.alert("Task Completed");
  };
 
  return (
    <View style={styles.container}>
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
 
        <View style={styles.button}>
        <Button
          title="Submit"
          onPress={handleSubmit}
          color="black"
        />
        </View>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    width: "100%",
  },
  section: {
    marginBottom: 20,
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 8,
    shadowColor: "#E6E1DB",
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
    backgroundColor: "lightblue",
    width: "100%",
  },
});
 
export default TaskDetailsPage;