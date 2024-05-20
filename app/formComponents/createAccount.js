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
import { accountFormData } from "../../customComponents/formData";
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
import { PersonData } from "../../customComponents/formData";
import { CorporateData } from "../../customComponents/formData";
import { SelectList } from "react-native-dropdown-select-list";
import { personAccountForm } from "../../customComponents/formData";
export default function CreateAccount() {
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
  const[selectedAccount, setSelectedAccount]=useState('')
const[Username, setUsername]=useState('');


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
  const [currentData, setCurrentData] = useState(accountFormData);

  console.disableYellowBox = true;
  
  useEffect(() => {
    const getUsername = async () => {
        const storedUsername = await SecureStore.getItemAsync('username');
        setUsername(storedUsername);
        setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: storedUsername }));
    };

    getUsername();
}, []);

LogBox.ignoreAllLogs();


  const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      ["gender"]: item.id,
    }));
    console.log("Selected value:", item.id);

  };

  const handleAccountSelect=(account)=>{

      setFormValues(prevFormValues => ({ ...prevFormValues, ['account_type']: account }));
        setSelectedAccount(account);
        console.log("account value is", account)
    };
  
  

  // const validateForm = () => {
  //   const errors = {};
  //   personAccountForm.elements.forEach((element) => {
  //     // Check if the field is visible based on lead type
    
  //     // Perform validation for visible fields
  //     if (element.isRequired && !formValues[element.name]) {
  //       errors[element.name] = `${element.title} is required`;
  //     }
  //     if (
  //       element.validation &&
  //       element.validation.regex &&
  //       !element.validation.regex.test(formValues[element.name])
  //     ) {
  //       errors[element.name] = element.validation.message;
  //     }
  //   });
  //   return errors;
  // };

  const goBack = () => {
    router.navigate('headerScreens/DrawerScreens/accounts');
  };



  // const onSubmit = async () => {

  // //   const errors = validateForm();
  // //     if (Object.keys(errors).length > 0) {
  // //       // If there are validation errors, set them in state
  // //       setValidationErrors(errors);
  // //       console.log(validationErrors);
  // //     }
  // // else{
  //   console.log("this is the form valuesss", formValues);
  //   setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: username}));
  //   const postUrl = `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_account_c`;
  //   const token = SecureStore.getItem("token");
  //   const stoken = JSON.parse(token);
  //   const apiToken = stoken.accessToken;
  //   console.log(apiToken);

  //   console.log("Form data", formValues);
   
  //   try {
  //     console.log("in try");
  //     const response = await fetch(postUrl, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + apiToken,
  //       },
  //       body: JSON.stringify(formValues),
  //     });

  //     console.log("Successfully posted", response);
  //     Alert.alert("Successfully Submitted!")
  //     router.replace("/DrawerScreens/leadList");
  //   } catch (err) {
  //     console.log("error");
  //   }
  // // }
  // };

  // const renderForm = () => {
  //   if (selectedAccount) {
  //       const formData = personAccountForm.find(account => account.account_type == selectedAccount);
  //       //console.log("form data", formData);

  //     if(selectedAccount=='corporate')
  //     {
  //         return formData.Data.map((element, index) => (
  //           <View key={index} style={styles.formElement}>
  //           {renderFormElement(element)}
  //           {validationErrors[element.name] && (
  //             <Text style={styles.error}>{validationErrors[element.name]}</Text>
  //           )}
  //         </View>
  //           ));
        

  //     }
  //     else{
  //       return formData.Data.map((element, index) => (
  //         <View key={index} style={styles.formElement}>
  //         {renderFormElement(element)}
  //         {validationErrors[element.name] && (
  //           <Text style={styles.error}>{validationErrors[element.name]}</Text>
  //         )}
  //       </View>
  //     ));

  //     }
        
  //           // return formData.Data.elements.map((element, index) => (
  //           //     <View key={index} style={styles.inputContainer}>
  //           //         {renderFormElement(element)}
  //           //     </View>
  //           // ));
        
  //       // else {
  //       //   return PersonData.elements.map((element, index) => (
  //       //     <View key={index} style={styles.inputContainer}>
  //       //         {renderFormElement(element)}
  //       //     </View>
  //       // ));
  
  //       // }
  //   }
  //   return null;
  // };
  
  const onSubmit = async () => {
    // Validate form data
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set them in state
      setValidationErrors(errors);
      return; // Prevent form submission if there are errors
    }
    console.log("this is the form valuesss", formValues);
      setFormValues(prevFormValues => ({ ...prevFormValues, ['owner']: username}));
      const postUrl = `https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_account_c`;
      const token = SecureStore.getItem("token");
      const stoken = JSON.parse(token);
      const apiToken = stoken.accessToken;
      console.log(apiToken);
  
      console.log("Form data", formValues);
    
    console.log("Form data", formValues);
    try{
      console.log("this is the form valuesss", formValues);
  
   
 
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
      Alert.alert("Successfully Submitted!")
      router.replace("/DrawerScreens/leadList");
    

    }
    catch(e){
      console.log("error");


    }
    // Rest of your code for submitting the form...
  };
  
  // Update renderForm function to filter and render form elements
  const renderForm = () => {
    if (selectedAccount) {
      const formData = personAccountForm.find(
        (account) => account.account_type === selectedAccount
      );
      if (formData) {
        return formData.Data.map((element, index) => (
          <View key={index} style={styles.formElement}>
            {renderFormElement(element)}
            {validationErrors[element.name] && (
              <Text style={styles.error}>{validationErrors[element.name]}</Text>
            )}
          </View>
        ));
      }
    }
    return null;
  };
  
  // Implement validateForm function
  const validateForm = () => {
    const errors = {};
    personAccountForm.forEach((account) => {
      if (account.account_type === selectedAccount) {
        account.Data.forEach((element) => {
          // Perform validation for each form element
          if (element.isRequired && !formValues[element.name]) {
            errors[element.name] = `${element.title} is required`;
          }
          // Add more validation rules as needed
        });
      }
    });
    return errors;
  };

  // const renderFormElements = (sectionName) => {
  //   return personAccountForm.elements
  //     .filter((element) => element.sectionName === sectionName)
  //     .map((element, index) => (
  //       <View key={index} style={styles.formElement}>
  //         {renderFormElement(element)}
  //         {validationErrors[element.name] && (
  //           <Text style={styles.error}>{validationErrors[element.name]}</Text>
  //         )}
  //       </View>
  //     ));
  // };

  const renderFormElement = (element) => {
    const handleSelect = (item) => {
      //setSelectedValue(item);
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [element.name]: item,
      }));
      console.log(element.name, item);
    };
    const handleSwitch = (item) => {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [element.name]: item,
      }));
      console.log(element.name, item);
    };

    const starMark = element.isRequired ? 
      <Text style={{ color: "red" }}> *</Text>
     : null;

    
    switch (element.type) {
      case "TextInput":
        return (
          <View>
            {/* <Text style={styles.label}>{element.title}{starMark} </Text> */}
            <CustomInput
              key={element.name}
              title={element.title}
              placeholder={element.placeholder}
              // control={control}
              isRequired={element.isRequired}
              inputType={element.inputType}
              name={element.name}
           
              // errors={errors}
              onChange={(value) =>
                setFormValues({ ...formValues, [element.name]: value })
              }
              value={formValues[element.name] || ""}
            />
          </View>
        );


      case "socialMediaInput":
        return (
          <View>
           
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
              setFormValues({ ...formValues, [element.name]: value })
            }
            value={formValues[element.name] || ""}
          />
          </View>
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
      data={element.dropdownData.map(item => ({ value: item.key, label: item.value }))}
      save="value"
      onSelect={() => handleSelect(selectedValue) } // Log selected values
  />
          </View>
          {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
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
              
                   
                   
                   // errors={errors}
                   
                   
                 readOnly={true}
               />
                     {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
               </View>

          )

          case "dateInput":
                      return (
                        <View>
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
                        {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                        </View>
                        
                      );

      case "Switch":
        return (
          <View style={styles.inputContainer}>
            <View style={styles.switchContainer}>
              <Text style={{ marginBottom: 3,
    fontSize: 12,
    fontWeight: "bold"}}>{element.title}</Text>
              <View style={styles.switch}>
                <CustomSwitch onToggle={handleSwitch} />
              </View>
            </View>
            {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
          </View>
        );
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View>
        <CustomHeader title={"Create Account"} onPress={goBack} />
      </View>
      <ScrollView>
        {/* <View style={styles.card}>
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
        </View> */}
          <ScrollView>
            <View style={styles.card}>
              
                <Text style={{ marginBottom: 3,
    fontSize: 12,
    fontWeight: "bold"}}>Select Account Type</Text>
                <View style={styles.Dropdown}> 
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
                    data={[
                        { value: 'corporate', label: 'corporate' },
                        { value: 'person', label: 'person' },
                      
                    ]}
                    
                    save="key"
                onSelect={() => handleAccountSelect(selectedValue) }
                />
                
                </View>
                {renderForm()}
                {selectedAccount && <Button title="Submit" onPress={onSubmit} color='#023B5E' />}
            </View>
              
           
        </ScrollView>
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
