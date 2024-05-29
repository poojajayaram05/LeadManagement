import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    Select,
    ScrollView,
    Image,
    Alert
  } from "react-native";
  import React, { useState, useEffect } from "react";
  import { editAccountFormData, personAccountForm } from "../../customComponents/formData";
  import { CustomInput } from "../../customComponents/customInput";
  import Collapsible from "react-native-collapsible";
  import { TouchableOpacity, LogBox } from "react-native";
  import Dropdown from "../../customComponents/customDropdown";
  import RadioButton from "../../customComponents/customRadio";
  import { DropdownIcon, DropupIcon } from "../../assets/images";
  import { Ionicons } from "@expo/vector-icons";
  import { router } from "expo-router";
  import * as SecureStore from "expo-secure-store";
  import { CustomInputSocial } from "../../customComponents/customSocialField";
  import CustomSwitch from "../../customComponents/customSwitch";
  import CustomHeader from "../../customComponents/customLeadHeader";
  import CustomCheckbox from "../../customComponents/customCheckBox"
  import RNDateTimePicker from "@react-native-community/datetimepicker";
import { editCorporateAccount } from "../../customComponents/formData";
import { editPersonAccount } from "../../customComponents/formData";
  import { SelectList } from "react-native-dropdown-select-list";
  import useIdStore from "../leadStore";
  import axios from "axios";
  export default function EditAccount() {
    // const { control, handleSubmit, formState: { errors } } = useForm();
    const [isCollapsed, setIsCollapsed] = useState({
      'General': false,
      'Contact': false,
      "Personal Details": false,
      "Industry Details": false,
      "Address Details": false,
      "Other Information": false,
      // 'Social': false,
    });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
  const[Username, setUsername]=useState('');
  const sysId = useIdStore(state=>state.sys_id)
 
 
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
    const username= SecureStore.getItem('username');
 
    const [validationErrors, setValidationErrors] = useState({});
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [radioSelect, setradioSelect] = useState(null);
    const [phoneNumbers, setPhoneNumbers] = useState([""]);
    const [testValues, setTestValues] = useState([]);
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [currentData, setCurrentData] = useState(editAccountFormData);
    const accId = useIdStore((state)=>state.account_number);
    const[sys_id, setSysId]=useState('');
    const[ownerId, setOwnerId]=useState('');
    const[editedValue, setEditedValues]=useState({});
 
   
 
    console.disableYellowBox = true;
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = await SecureStore.getItemAsync('token');
                const stoken = JSON.parse(token);
                const apiToken = stoken.accessToken;
 
                const response = await axios.get(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_account_c?sysparm_query=sys_id=${sysId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + apiToken
                    }
                });
 
                const accountData = response.data.result[0];
                let sysid = accountData.sys_id;
                let accountType = accountData.account_type;
                if(accountType=='person')
                setCurrentData(editPersonAccount)
              else setCurrentData(editCorporateAccount)
                setSysId(sysid)
 
                // Assuming the response.data contains the lead data
                 // Assuming only one lead is returned
                setFormValues(accountData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
 
        fetchData();
    }, []); // Run only once on component mount
 
  LogBox.ignoreAllLogs();
 
 
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
      currentData.elements.forEach((element) => {
        // Check if the field is visible based on lead type
      
        // Perform validation for visible fields
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
      router.navigate('renderDetails/renderDetailPage');
    };
 
    const handleSelect = (item) => {
      setSelectedValue(item);
      setFormValues({ ...formValues, selectedValue: item });
      console.log("Selected value:", item);
      if (item && item.value === "person") {
        setCurrentData(PersonData);
      } else if (item && item.value === "corporate") {
        setCurrentData(CorporateData);
      } else {
        setCurrentData(AccountData);
      }
    };
 
    const onSubmit = async () => {
 
      const errors = validateForm();
        if (Object.keys(errors).length > 0) {
          // If there are validation errors, set them in state
          setValidationErrors(errors);
          console.log(validationErrors);
        }
    else{
      console.log("this is the form valuesss", formValues);
      setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: username}));
      const postUrl = `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_account_c/${sysId}`;
      const token = SecureStore.getItem("token");
      const stoken = JSON.parse(token);
      const apiToken = stoken.accessToken;
      console.log(apiToken);
 
      console.log("Form data", formValues);
     
      try {
        console.log("in try");
        const response = await fetch(postUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiToken,
          },
          body: JSON.stringify(editedValue),
        });
 
        console.log("Successfully posted", response);
        Alert.alert("Successfully Submitted!")
        router.replace("renderDetails/renderDetailPage");
      } catch (err) {
        console.log("error");
      }
    }
    };
 
    const renderFormElements = (sectionName) => {
      return currentData.elements
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
        setEditedValues((prevFormValues) => ({
          ...prevFormValues,
          [element.name]: item,
        }));
        console.log(element.name, item);
      };
      const handleSwitch = (item) => {
        setEditedValues((prevFormValues) => ({
          ...prevFormValues,
          [element.name]: item,
        }));
        console.log(element.name, item);
      };
 
      const starMark = element.isRequired ?
        <Text style={{ color: "red" }}> *</Text>
       : null;
 
      if (
        element.sectionName === "General" &&
        formValues["lead_type"] === "company"
      ) {
        // If lead type is company and the element is related to personal information, skip rendering
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
              {/* <Text style={styles.label}>{element.title}{starMark} </Text> */}
              <CustomInput
                key={element.name}
                title={element.title}    
                placeholder={formValues[element.name] || ''}
                // control={control}
                isRequired={element.isRequired}
                inputType={element.inputType}      
                name={element.name}  
             
                // errors={errors}
                onChange={(value) =>
                  setEditedValues({ ...editedValue, [element.name]: value })
                }
               
              />
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
              // errors={errors}
              icon={element.logo}
              onChange={(value) =>
                setEditedValues({ ...editedValue, [element.name]: value })
              }
             
            />
          );
        case "dropdown":
          return (
            <View>
            <View style = {styles.inputContainer}>
            <Text style={{ marginBottom: 3,
      fontSize: 12,
      fontWeight: "bold"}}>{element.title}{starMark}</Text>
            <SelectList
        boxStyles={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 12, // Make the border oval by using a large border radius
            paddingVertical: 10,
            paddingHorizontal: 10,
            fontSize: 16
        }}
        setSelected={(label) => {
           // handleSelect(label); // Call handleSelect to save the selected value
            setSelectedValue(label); // Update selected values
        }}
        placeholder={formValues[element.name] || ''}
        data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
        save="value"
        onSelect={() => handleSelect(selectedValue) } // Log selected values
    />
            </View>
            {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
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
                  setEditedValues({ ...editedValue, [element.name]: onSelectRadio })
                }
                data={currentData}
                title={element.title}
                // Pass the data prop here
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
          case "TextInputO":
            return(
              <View>
              <CustomInput
                     key={element.name}
                     title={element.title}
                     placeholder={username}
                     // control={control}
                     value={username}
                     name={element.name}
  
                  readOnly={true}
                 />
                 </View>
 
            )
 
            case "dateInput":
                        return (
                          <View style={styles.inputContainer}>
                            <Text style={{ marginBottom: 3,
      fontSize: 12,
      fontWeight: "bold"}}>{element.title}{starMark}</Text>
                            <View style={styles.dateInputContainer}>
                              <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                  <Text style={styles.dateText}>
                                    {formValues["dateInput"] || "Select Date"}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              <Ionicons name="calendar" size={20} color="black" />
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
          <CustomHeader title={"Edit Account"} onPress={goBack} />
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
              <Button title="Submit" onPress={onSubmit} color="#023B5E" />
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
      backgroundColor: "#FFFFFF", // White card background
      borderRadius: 2,
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
    buttonContainer: {
      flex: 1,
      flexDirection: "row", // Align items horizontally
      alignItems: "flex-end", // Align items to the start (left)
      justifyContent: "flex-end", // Align items to the start (left)
      padding: 10,
    },
    section: {
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 20, // Increase font size for emphasis
      fontWeight: "bold",
      marginBottom: 15, // Increase margin for better separation
      color: "black", // Use a darker color for better readability
 
      paddingBottom: 5, // Add padding to space out the underline from the text
    },
    inputContainer: {
      marginBottom: 8,
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
      flexDirection: "row", // Make children elements align horizontally
      alignItems: "center", // Align children elements vertically
      // Add any additional styling you may need
      // gap: 10,
      justifyContent:"space-between",
      marginBottom: 15,
    },
    label: {
      // Add styles for your label
    },
    bgColor: {
      backgroundColor: "lightblue",
    },
    dateInputContainer: {
      flexDirection: "row", // Arrange children horizontally
      justifyContent: "space-between", // Space out items to extreme ends
      alignItems: "center", // Align items vertically
      borderWidth: 1,
      borderColor: "lightgrey",
      borderRadius: 12, // Add border radius
      padding: 10,
      marginBottom: 5,
    },
    icon:{
      marginRight:40,
    }
  });