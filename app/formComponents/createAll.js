import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from '../../customComponents/customLeadHeader'
import CustomSwitch from '../../customComponents/customSwitch'
import { CustomInput } from '../../customComponents/customInput'
import { SelectList } from 'react-native-dropdown-select-list'
import Dropdown from '../../customComponents/customDropdown'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import useIdStore from '../leadStore'
import { useActivityStore } from '../leadStore'
import RadioButton from '../../customComponents/customRadio'
import { DropdownIcon, DropupIcon } from '../../assets/images'
import { CustomInputSocial } from '../../customComponents/customSocialField'
import * as SecureStore from 'expo-secure-store';

export default function CreateAll() {
    const username= SecureStore.getItem('username');
    const [validationErrors, setValidationErrors] = useState({});
    const [formValues, setFormValues] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null); 
    LogBox.ignoreAllLogs();

const onSelectRadio = (item) => {
    setradioSelect(item.value);
    setFormValues(prevFormValues => ({ ...prevFormValues, ['gender']: item.id})); 
    console.log('Selected value:', item.id);
}

const goBack=()=>{
    router.back();
  }

  
  const onSubmit = async () => {
    console.log("usernameee", username);
    console.log("Form data", formValues);
    //setFormValues(prevFormValues => ({ ...prevFormValues, ['new_owner']: username}));
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set them in state
      setValidationErrors(errors);
      console.log(validationErrors);
    }
    else{
     
      const postUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_leads_c`;
      console.log(postUrl);
      const token = SecureStore.getItem('token');
      const stoken = JSON.parse(token);
      const apiToken = stoken.accessToken;
      console.log(apiToken);   
      // const token="DeC8cB2g6op02J_9-8cvJDwpA_5QTiL_9x8VnZLmwHy3QcoqoVR7KuhWUs-M0KgzLFLlp1NB8d5kekkbt3mCYQ";
      console.log("Form data", formValues);
      // try{
          
      //     const response = axios.post(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_management`, formValues);
      //     console.log('success',response);
      // }
      try{
      const response = await fetch(postUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + apiToken
           
          },
        body: JSON.stringify(formValues)  
        })

        console.log("Successfully posted",response);
        Alert.alert("Successfully Submitted!")
        router.replace('/DrawerScreens/leadList')
      }
      
  
          catch(err){
              console.log("error");
          }
        }

      }

  const renderFormElement = (element) => {
    const handleSelect = (item) => {
        //setSelectedValue(item);
        setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item }));
        console.log(element.name, item);
    };
    const handleSwitch=(item)=>{
      setFormValues(prevFormValues => ({ ...prevFormValues,  [element.name]: item}));
      console.log(element.name, item);

    }

    const starMark = element.isRequired ? <Text style={{ color: 'red' }}> *</Text> : null;

    
    if (element.sectionName === "General" && formValues["lead_type"] === "company") {
        // If lead type is company and the element is related to personal information, skip rendering
        if (element.name === "salutation" || element.name === "first_name" || element.name === "last_name" || element.name === "gender"|| element.name==="job_title") {
            return null;
        }
        
    }
    switch (element.type) {
        case 'TextInput':
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
                    rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                    // errors={errors}
                    onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                    value={formValues[element.name] || ''} 
                />
                </View>
            );
            case 'email':
                return (
                  <View key={element.name}>
                      <Text style={styles.label}>{element.title}{starMark}</Text>
                    <CustomInput
                      key={element.name}
                      // title={element.title}
                      placeholder={element.placeholder}
                      name={element.name}
                      onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                      value={formValues[element.name] || ''}
                      inputType={element.inputType}
                    />
                    {/* Render alternate email fields */}
                    {[...Array(alternateEmailCount)].map((_, i) => (
                      <CustomInput
                        key={`alternate_email${i + 1}`}
                        title={`Alternate Email ${i + 1}`}
                        placeholder={`Alternate Email ${i + 1}`}
                        name={`alternate_email${i + 1}`}
                        onChange={(value) => setFormValues({ ...formValues, [`alternate_email${i + 1}`]: value })}
                        value={formValues[`alternate_email${i + 1}`] || ''}
                        inputType={element.inputType}
                      />
                    ))}
                    {/* Plus Button */}
                    <TouchableOpacity onPress={onAddAlternateEmail}>
                      <Ionicons name="add-circle" size={24} color="black" style={styles.plusButton} />
                    </TouchableOpacity>
                  </View>
                );

            case 'socialMediaInput':
                return (
                    <CustomInputSocial
                        key={element.name}
                        title={element.title}
                        placeholder={element.placeholder}
                        // control={control}
                        name={element.name}
                        rules={{ required: element.isRequired ? `${element.title} is required` : false }}
                        // errors={errors}
                        icon={element.logo}
                        onChange={(value) => setFormValues({ ...formValues, [element.name]: value })}
                        value={formValues[element.name] || ''}
                      
                    />
                );
        case 'dropdown':
            return (
                <View>
                <View style = {styles.inputContainer}>
                <Text style={styles.label}>{element.title}{starMark}</Text>
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
           
                case 'RadioButton':
                    return( 
                      <View style = {styles.inputContainer}>
                      <Text style={styles.label}>{element.title}{starMark}</Text>
                        
                            <RadioButton style={styles.inputContainer}
                                 onSelect={onSelectRadio}
                                 SelectedData={selectedValue} 
                                 disableLine={1}
                                 value={selectedValue}
                                 onChange={(onSelectRadio) => setFormValues({ ...formValues, [element.name]: onSelectRadio })}
                                 data={formData}
                                 title={element.title}
                                 // Pass the data prop here
                            />
                            </View>

                    )
                    case 'Switch':
                    return( 
                      <View style={styles.inputContainer}>
    
                      <View style={styles.switchContainer}>
                      <Text style={styles.label}>{element.title}</Text>
                      <View style={styles.switch}>
                        <CustomSwitch onToggle={handleSwitch}

                      /></View>
                      </View>
                     
                   </View>
                    )
                    case 'TextInputO':
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
                            //  readOnly={true}
                         />
                         </View>
                      )
                      case 'MultilineText':
                        return (
                            <View>
                            <Text style={styles.label}>{element.title}</Text>
                          <TextInput
                           style={[styles.input, styles.multilineInput]} // Add styles for multiline input
                        onChangeText={(value) => setFormValues({ ...formValues, [element.name]: value } )}
                        value={formValues[element.name] || ''}
                     placeholder={element.placeholder}
     multiline={true} // Set multiline prop to true
     numberOfLines={4} // Specify the number of lines you want to display
    />
                           </View>
                        );
                        case 'timeInput':
                            return(
                              <View style={styles.timeInput}>
                              <Pressable onPress={() => setShowTimeModal(true)}>
                                <Text style={styles.label}>
                                  {/* {customTime ? customTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : 'Select time'} */}
                                  {element.title}
                                </Text>
                                <View style={styles.dateInput}>
                <Pressable onPress={() => setShowTimeModal(true)}>
                  <Text style={styles.dateText}>
                  {customTime ? formatTime(customTime) : 'Select time '}
                  <View style={styles.icon}>
                    <Ionicons name='time' size={20} color='black' /> 
                    </View>
                  </Text>
                 
                </Pressable>
                {showTimeModal && (
                    <RNDateTimePicker
                      value={ customTime || new Date()}
                      mode="time"
                      display="default"
                      onChange={(event, selectedTime) => {
                        if (selectedTime) {
                          setShowTimeModal(false);
                          setCustomTime(selectedTime);
                          handleSelectTime(customTime);
                        }
                      }}
                    />
                  )}
              </View>
              {validationErrors[element.name] && <Text style={styles.errorMessage}>{validationErrors[element.name]}</Text>}
                                
                              </Pressable>
                            </View>
                    
                            )
          
}; }
  return (
    <View>
        <View style={styles.cardContainer}>
          <View>
            <CustomHeader title={"Create Lead"} onPress={goBack}/>
          </View>
          <ScrollView>
          <View style={styles.card}>
            <View style={styles.section}>
              {Object.keys(isCollapsed).map((sectionName, index) => (
                <View key={index} style={styles.sectionContainer}>
                  <TouchableOpacity onPress={() => toggleSection(sectionName)}>
                    <Text style={styles.sectionTitle}>{sectionName}</Text>
                    <Image
                      source={isCollapsed[sectionName] ? DropdownIcon : DropupIcon}
                      resizeMode="contain"
                      style={styles.dropdownIcon}
                    />
                  </TouchableOpacity>
                  <Collapsible collapsed={isCollapsed[sectionName]}>
                    {renderFormElement(sectionName)}
                  </Collapsible>
                </View>
              ))}
            </View>
      
            <Button title="Submit" onPress={onSubmit} color="#023B5E" />
      
            <View style={styles.buttonContainer}>
             
            </View>
          </View>
        </ScrollView>
      </View>
      
   
    </View>
  )
}