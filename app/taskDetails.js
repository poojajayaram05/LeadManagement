import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import useIdStore from "./leadStore";
import ArrowBack from "../customComponents/arrowBack";
import DetailCard from "../customComponents/detailCard";
import { taskData } from "../customComponents/formData";
import { router } from "expo-router";
import LeadDet from "../leadComponents/leadDetHeader";

 
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
 