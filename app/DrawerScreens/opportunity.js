
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, TextInput } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import Dropdown from "../../customComponents/customDropdown";
import { CustomInput } from "../../customComponents/customInput";
import { OpportunityData } from "../../customComponents/formData";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

export default function CreateOpportunity() {
  const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
  const [formValues, setFormValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowDatePicker(false);
      setSelectedDate(selectedDate instanceof Date ? selectedDate : new Date(selectedDate));
      setFormValues({ ...formValues, "selectedDate": selectedDate });
    }
  };
  
  const handleSelect = (item) => {
    setSelectedValue(item);
    setFormValues({ ...formValues, "selectedValue": item });
    console.log("Selected value:", item);
  };

  const onSubmit = async () => {
    console.log("Form data", formValues);
  };

  const toggleSection = (section) => {
    switch (section) {
      case "section1":
        setIsSection1Collapsed(!isSection1Collapsed);
        break;
      default:
        break;
    }
  };

  const renderFormElement = (element) => {
    switch (element.type) {
      case "TextInput":
        return (
          <View>
            <CustomInput
              key={element.name}
              title={element.title}
              placeholder={element.placeholder}
              inputType={element.inputType}
              name={element.name}
              rules={{
                required: element.isRequired
                  ? `${element.title} is required`
                  : false,
              }}
              onChange={(value) =>
                setFormValues({ ...formValues, [element.name]: value })
              }
              value={formValues[element.name] || ""}
              editable={element.name !== "stage"} 
            />
          </View>
        );
      case "dropdown":
        return (
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{element.title}</Text>
              <Dropdown
                style={styles.inputContainer}
                label={
                  selectedValue ? selectedValue.label : element.placeholder
                }
                data={element.dropdownData}
                value={selectedValue}
                onSelect={handleSelect}
              />
            </View>
          </View>
        );
  
      case "multilineInput":
        return (
          <View>
            <Text style={styles.label}>{element.title}</Text>
            <TextInput
              style={styles.multilineInput}
              multiline={true}
              numberOfLines={4}
              placeholder={element.placeholder}
              onChangeText={(value) =>
                setFormValues({ ...formValues, [element.name]: value })
              }
              value={formValues[element.name] || ""}
            />
          </View>
        );
  
      case "dateInput":
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <View style={styles.dateInput}>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.dateText}>
                  {formValues[element.name] || "Select Date"}
                </Text>
              </TouchableOpacity>
              <Ionicons
                name="calendar-outline"
                size={24}
                color="black"
                style={styles.calendarIcon}
              />
            </View>
            {showDatePicker && (
              <RNDateTimePicker
                value={selectedDate}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
          </View>
        );
    }
  };
  

  return (
    <View style={styles.cardContainer}>
      <ScrollView>
        <GestureHandlerRootView>
          <View style={styles.card}>
            <View style={styles.section}>
              <TouchableOpacity onPress={() => toggleSection("section1")}>
                <Text style={styles.sectionTitle}>Opportunity</Text>
              </TouchableOpacity>
              <Collapsible collapsed={isSection1Collapsed}>
                {OpportunityData.elements.slice(0, 16).map((element, index) => (
                  <View key={index} style={styles.inputContainer}>
                    {renderFormElement(element)}
                  </View>
                ))}
              </Collapsible>
            </View>
            <Button title="Submit" onPress={onSubmit} color="#023B5E" />
            <View style={styles.buttonContainer}></View>
          </View>
        </GestureHandlerRootView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: "#d1e0ed",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    paddingBottom: 5,
  },
  inputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: "bold",
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    backgroundColor: "white",
    fontSize: 16,
    paddingHorizontal:10,
    
  },
  dateInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  dateText: {
    flex: 1,
    fontSize: 16,
  },
  calendarIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  switch: {
    alignItems: "flex-start",
    marginTop: -10,
  },
  switchContainer: {
    flexDirection: "row",
  },
});

