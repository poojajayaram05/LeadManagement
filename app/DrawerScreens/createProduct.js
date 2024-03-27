import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Pressable,
  TextInput
} from "react-native";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import React, { useState } from "react";
//mport { taskFormData } from '../../../customComponents/formData';
import Collapsible from "react-native-collapsible";
import Dropdown from "../../customComponents/customDropdown";
import { isEnabled } from "react-native/Libraries/Performance/Systrace";
import { DropdownIcon, DropupIcon } from "../../assets/images";
import { CustomInput } from "../../customComponents/customInput";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { date } from "zod";
import { Ionicons } from "@expo/vector-icons";
import MultilineTextInput from "../../customComponents/customMultilineInput";
import CustomMultipleSelect from "../../customComponents/cutsomMultipleSelect";
import { productFormData, taskFormData } from "../../customComponents/formData";
import { leadData } from "../../customComponents/formData";
import LDropdown from "../../customComponents/customLeadDropdown";
import { router } from "expo-router";
import ArrowBack from "../../customComponents/arrowBack";
import CustomSwitch from "../../customComponents/customSwitch";
import ImageUpload from "../../customComponents/imageUpload";
import RadioButton from "../../customComponents/customRadio";

export default function CreateProduct() {
  // const { control, handleSubmit, formState: { errors } } = useForm();
  const [isSection1Collapsed, setIsSection1Collapsed] = useState(false);
  const [isSection2Collapsed, setIsSection2Collapsed] = useState(false);
  const [isSection3Collapsed, setIsSection3Collapsed] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [radioSelect, setradioSelect] = useState(null);
  const [formValues, setFormValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [customDate, setCustomDate] = useState(null);
  const [customTime, setCustomTime] = useState(null);
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  const handleCancelClicked = () => {
    setIsModalVisible(false);
  };

  const formatTime = (time) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Use 12-hour format
    };

    return time.toLocaleString("en-US", options);
  };

  const handleSelect = (item) => {
    setSelectedValue(item);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      selectedValue: item,
    }));
    console.log("Selected value:", item);
  };

  const onSelectRadio = (item) => {
    setradioSelect(item.label);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      radioSelect: item,
    }));
    console.log("Selected value:", radioSelect);
  };

  const onSubmit = async () => {
    console.log("Form data", formValues);
  };
  const toggleSection = (section) => {
    switch (section) {
      case "section1":
        setIsSection1Collapsed(!isSection1Collapsed);
        break;
      case "section2":
        setIsSection2Collapsed(!isSection2Collapsed);
        break;
      case "section3":
        setIsSection3Collapsed(!isSection3Collapsed);
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
            {/* <RNDateTimePicker mode="time" value={new Date()} /> */}
            <CustomInput
              key={element.name}
              title={element.title}
              placeholder={element.placeholder}
              // control={control}
              name={element.name}
              rules={{
                required: element.isRequired
                  ? `${element.title} is required`
                  : false,
              }}
              // errors={errors}
              onChange={(value) =>
                setFormValues({ ...formValues, [element.name]: value })
              }
              value={formValues[element.name] || ""}
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
                label={selectedValue ? selectedValue.label : element.placeholder}
                data={element.dropdownData}
                value={selectedValue}
                onSelect={handleSelect}
              />
            </View>
          </View>
        );

      case "multilineInput":
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Enter a note</Text>
            {/* <MultiSelectExample/> */}
            <MultilineTextInput />
          </View>
        );
      case "productDropdown":
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Select Lead</Text>
            <LDropdown
              label="Select Lead"
              data={leadData.map((lead) => {
                console.log(lead.id); // Log lead object
                return {
                  value: lead.id,
                  label: `${lead.id} - ${lead.firstname} ${lead.lastname}`,
                };
              })}
              onSelect={handleSelect}
            />
          </View>
        );
      case "switch":
        return (
          <View style={styles.switchContainer}>
            <Text style={styles.labelswitch}>Active</Text>
            <View style={styles.switch}>
              <CustomSwitch />
            </View>
          </View>
        );

      case "imageUpload":
        return (
          <View>
            <Text style={styles.label}>Product Images</Text>
            <ImageUpload />
          </View>
        );

      case "durationInput":
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <View style={styles.durationContainer}>
              <TextInput
                style={[styles.input, styles.durationInput]}
                keyboardType="numeric"
                placeholder="Hours"
                onChangeText={(text) => handleDurationChange(text, "hours")}
              />
              <TextInput
                style={[styles.input, styles.durationInput]}
                keyboardType="numeric"
                placeholder="Minutes"
                onChangeText={(text) => handleDurationChange(text, "minutes")}
              />
              <TextInput
                style={[styles.input, styles.durationInput]}
                keyboardType="numeric"
                placeholder="Seconds"
                onChangeText={(text) => handleDurationChange(text, "seconds")}
              />
            </View>
          </View>
        );

      case "timeInput":
        return (
          <View>
            <Pressable onPress={() => setShowTimeModal(true)}>
              <Text style={styles.dateText}>
                {"Select time "}
                <Ionicons name="time" size={20} color="black" />
              </Text>
            </Pressable>
            {showTimeModal && (
              <RNDateTimePicker
                value={new Date()}
                mode="time"
                display="default"
                onChange={(event, selectedTime) => {
                  if (selectedTime) {
                    setShowTimeModal(false);
                    //setFromTime(selectedTime);
                  }
                }}
              />
            )}
          </View>
        );
      case "RadioButton":
        return (
          <RadioButton
            style={styles.inputContainer}
            onSelect={onSelectRadio}
            SelectedData={selectedValue}
            disableLine={1}
            value={selectedValue}
            onChange={(onSelectRadio) =>
              setFormValues({ ...formValues, [element.label]: onSelectRadio })
            }
            data={productFormData}
            title={element.title}
            // Pass the data prop here
          />
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
                <Text style={styles.sectionTitle}>User Information</Text>
                <Text></Text>

                <Image
                  source={isSection1Collapsed ? DropdownIcon : DropupIcon}
                  resizeMode="contain"
                  style={styles.dropdownIcon}
                />
              </TouchableOpacity>
              <Collapsible collapsed={isSection1Collapsed}>
                {productFormData.elements.slice(0, 11).map((element, index) => (
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
    backgroundColor: "#FFFFFF", // White card background
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#cad5e8",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20, // Increase font size for emphasis
    fontWeight: "bold",
    marginBottom: 15, // Increase margin for better separation
    color: "#333", // Use a darker color for better readability

    paddingBottom: 5, // Add padding to space out the underline from the text
  },
  inputContainer: {
    marginBottom: 8,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row", // Align items horizontally
    alignItems: "flex-end", // Align items to the start (left)
    justifyContent: "flex-end", // Align items to the start (left)
    padding: 10,
  },
  backButton: {
    alignSelf: "flex-end", // Align button to the start (left)
    marginRight: "auto",
    color: "#023B5E",
    // Push button to the leftmost corner
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 10,
    top: 9,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
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
    marginLeft: 10, // Adjust the margin as needed
  },
  switch: {
    alignItems: "flex-start",
    marginTop: -10,
  },
  switchContainer: {
    flexDirection: "row",
  },
});
