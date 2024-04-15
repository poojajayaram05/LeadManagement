
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Select,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { ContactData } from "../../customComponents/formData";
import { CustomInput } from "../../customComponents/customInput";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native";
import Dropdown from "../../customComponents/customDropdown";
import RadioButton from "../../customComponents/customRadio";
import { DropdownIcon, DropupIcon } from "../../assets/images";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ArrowBack from "../../customComponents/arrowBack";
import * as SecureStore from "expo-secure-store";
import { CustomInputSocial } from "../../customComponents/customSocialField";
import CustomSwitch from "../../customComponents/customSwitch";
import CustomHeader from "../../customComponents/customLeadHeader";
import CustomCheckbox from "../../customComponents/CustomCheckbox";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { PersonData } from "../../customComponents/formData";
import { CorporateData } from "../../customComponents/formData";

export default function CreateContact() {
  const [isCollapsed, setIsCollapsed] = useState({
    'General': false,
    'Contact': false,
    "Personal Details": false,
    "Address Details": false,
  });


  
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowDatePicker(false);
      const formattedDate = selectedDate.toLocaleDateString("en-US");
      setSelectedDate(
        selectedDate instanceof Date ? selectedDate : new Date(selectedDate)
      );
      setFormValues({ ...formValues, dateInput: formattedDate });
    }
  };

  const toggleSection = (sectionName) => {
    setIsCollapsed({
      ...isCollapsed,
      [sectionName]: !isCollapsed[sectionName],
    });
  };
  const [alternateEmailCount, setAlternateEmailCount] = useState(0);

  const onAddAlternateEmail = () => {
    if (alternateEmailCount < 2) {
      setAlternateEmailCount((prevCount) => prevCount + 1);
    }
  };

  const [validationErrors, setValidationErrors] = useState({});
  const [formValues, setFormValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [radioSelect, setradioSelect] = useState(null);
  const [phoneNumbers, setPhoneNumbers] = useState([""]);
  const [testValues, setTestValues] = useState([]);
  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [currentData, setCurrentData] = useState(ContactData);

  const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ["gender"]: item.id,
    }));
    console.log("Selected value:", item.id);
  };

  const validateForm = () => {
    const errors = {};
    ContactData.elements.forEach((element) => {
      if (
        element.sectionName === "General" &&
        formValues["lead_type"] === "company"
      ) {
        if (
          element.name === "salutation" ||
          element.name === "first_name" ||
          element.name === "last_name" ||
          element.name === "gender"
        ) {
          return;
        }
      }
      if (element.isRequired && !formValues[element.name]) {
        errors[element.name] = `${element.title} is required`;
      }
      if (
        element.validation &&
        element.validation.regex &&
        !element.validation.regex.test(formValues[element.name])
      ) {
        errors[element.name] = element.validation.message;
      }
    });
    return errors;
  };

  const goBack = () => {
    router.back();
  };

  const handleSelect = (item) => {
    setSelectedValue(item);
    setFormValues({ ...formValues, selectedValue: item });
    console.log("Selected value:", item);
    if (item && item.value === "personObject") {
      setCurrentData(PersonData);
    } else if (item && item.value === "corporateObject") {
      setCurrentData(CorporateData);
    } else {
      setCurrentData(AccountData);
    }
  };

  const onSubmit = async () => {
    const errors = validateForm();
    console.log("this is the form valuesss", formValues);

    console.log("this is the form valuesss", formValues);
    const postUrl = `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_contact_c`;
    const token = SecureStore.getItem("token");
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    console.log(apiToken);

    console.log("Form data", formValues);

    try {
      console.log("in try");
      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + apiToken,
        },
        body: JSON.stringify(formValues),
      });

      console.log("Successfully posted", response);
      router.replace("/DrawerScreens/leadList");
    } catch (err) {
      console.log("error");
    }
  };

  const renderFormElements = (sectionName) => {
    return ContactData.elements
      .filter((element) => element.sectionName === sectionName)
      .map((element, index) => (
        <View key={index} style={styles.formElement}>
          {renderFormElement(element)}
          {validationErrors[element.name] && (
            <Text style={styles.error}>{validationErrors[element.name]}</Text>
          )}
        </View>
      ));
  };

  const renderFormElement = (element) => {
    const handleSelect = (item) => {
      //setSelectedValue(item);
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [element.name]: item.value,
      }));
      console.log(element.name, item.value);
    };
    const handleSwitch = (item) => {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [element.name]: item,
      }));
      console.log(element.name, item);
    };

    const starMark = element.isRequired ? (
      <Text style={{ color: "red" }}> *</Text>
    ) : null;

    if (
      element.sectionName === "General" &&
      formValues["lead_type"] === "company"
    ) {
      if (
        element.name === "salutation" ||
        element.name === "first_name" ||
        element.name === "last_name" ||
        element.name === "gender" ||
        element.name === "job_title"
      ) {
        return null;
      }
    }
    switch (element.type) {
      case "TextInput":
        return (
          <View>
            <CustomInput
              key={element.name}
              title={element.title}
              placeholder={element.placeholder}
              isRequired={element.isRequired}
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
            />
          </View>
        );
      case "email":
        return (
          <View key={element.name}>
            <Text style={styles.label}>
              {element.title}
              {starMark}
            </Text>
            <CustomInput
              key={element.name}
              placeholder={element.placeholder}
              name={element.name}
              onChange={(value) =>
                setFormValues({ ...formValues, [element.name]: value })
              }
              value={formValues[element.name] || ""}
              inputType={element.inputType}
            />
            {[...Array(alternateEmailCount)].map((_, i) => (
              <CustomInput
                key={`alternate_email${i + 1}`}
                title={`Alternate Email ${i + 1}`}
                placeholder={`Alternate Email ${i + 1}`}
                name={`alternate_email${i + 1}`}
                onChange={(value) =>
                  setFormValues({
                    ...formValues,
                    [`alternate_email${i + 1}`]: value,
                  })
                }
                value={formValues[`alternate_email${i + 1}`] || ""}
                inputType={element.inputType}
              />
            ))}
            <TouchableOpacity onPress={onAddAlternateEmail}>
              <Ionicons
                name="add-circle"
                size={24}
                color="black"
                style={styles.plusButton}
              />
            </TouchableOpacity>
          </View>
        );

      case "socialMediaInput":
        return (
          <CustomInputSocial
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
            icon={element.logo}
            onChange={(value) =>
              setFormValues({ ...formValues, [element.name]: value })
            }
            value={formValues[element.name] || ""}
          />
        );
      case "dropdown":
        return (
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                {element.title}
                {starMark}
              </Text>
              <Dropdown
                style={styles.inputContainer}
                label={selectedValue ? selectedValue.label : "Select"}
                data={element.dropdownData}
                value={selectedValue}
                onSelect={handleSelect}
              />
            </View>
          </View>
        );

      case "RadioButton":
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              {element.title}
              {starMark}
            </Text>

            <RadioButton
              style={styles.inputContainer}
              onSelect={onSelectRadio}
              SelectedData={selectedValue}
              disableLine={1}
              value={selectedValue}
              onChange={(onSelectRadio) =>
                setFormValues({ ...formValues, [element.name]: onSelectRadio })
              }
              data={ContactData}
              title={element.title}
            />
          </View>
        );

      case "checkbox":
        return (
          <View style={styles.checkboxContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <CustomCheckbox
              isChecked={formValues[element.name] || false}
              onChange={(value) =>
                setFormValues({ ...formValues, [element.name]: value })
              }
            />
          </View>
        );

      case "dateInput":
        return (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>{element.title}</Text>
            <View style={styles.dateInputContainer}>
              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <Text style={styles.dateText}>
                  {formValues["dateInput"] || "Select Date"}
                </Text>
                <View style={styles.icon}>
                  <Ionicons name="calendar" size={20} color="black" />
                </View>
              </TouchableOpacity>
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

      case "Switch":
        return (
          <View style={styles.inputContainer}>
            <View style={styles.switchContainer}>
              <Text style={styles.label}>{element.title}</Text>
              <View style={styles.switch}>
                <CustomSwitch onToggle={handleSwitch} />
              </View>
            </View>
          </View>
        );
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View>
        <CustomHeader title={"Create Contact"} onPress={goBack} />
      </View>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.section}>
            {Object.keys(isCollapsed).map((sectionName, index) => (
              <View key={index} style={styles.sectionContainer}>
                <TouchableOpacity onPress={() => toggleSection(sectionName)}>
                  <Text style={styles.sectionTitle}>{sectionName}</Text>
                  <Image
                    source={
                      isCollapsed[sectionName] ? DropdownIcon : DropupIcon
                    }
                    resizeMode="contain"
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
                <Collapsible collapsed={isCollapsed[sectionName]}>
                  {renderFormElements(sectionName)}
                </Collapsible>
              </View>
            ))}
          </View>

          <View style={styles.bgColor}>
            <Button title="Submit" onPress={onSubmit} color="grey" />
          </View>

          <View style={styles.buttonContainer}></View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 2,
    paddingBottom: 15,
    backgroundColor: "#d1e0ed",
  },
  card: {
    backgroundColor: "#FFFFFF", 
    borderRadius: 2,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, 
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#cad5e8",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row", 
    alignItems: "flex-end", 
    justifyContent: "flex-end",
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20, 
    fontWeight: "bold",
    marginBottom: 15,
    color: "black", 

    paddingBottom: 5, 
  },
  inputContainer: {
    marginBottom: 8,
  },
  backButton: {
    alignSelf: "flex-end", 
    marginRight: "auto",
    color: "#023B5E",
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
    paddingHorizontal: 11,
    fontSize: 16,
  },
  error: {
    color: "red",
    marginBottom: 3,
    fontSize: 12,
  },
  switch: {
    alignItems: "flex-start",
  },
  checkboxContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    gap: 10,
    marginBottom: 15,
  },
  label: {
  },
  bgColor: {
    backgroundColor: "lightblue",
  },
  dateInputContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    marginBottom: 5,
  },
});
