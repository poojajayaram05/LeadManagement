import React, { useState } from 'react'; 
import { View,  
         TextInput,  
         Button, 
         Alert,  
         StyleSheet } from 'react-native'; 
import PhoneInput  
    from 'react-native-phone-input'; 
import CountryPicker  
    from 'react-native-country-picker-modal'; 
  
const PhoneInputComponent = () => { 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [countryCode, setCountryCode] = useState(''); 
    const [selectedCountry, setSelectedCountry] = 
        useState(null); 
    const [countryPickerVisible, setCountryPickerVisible] =  
        useState(false); 
  
    const onSelectCountry = (country) => { 
        setCountryCode(country.cca2); 
        setSelectedCountry(country); 
        setCountryPickerVisible(false); 
    }; 
  
    const onSubmit = () => { 
      
        // Perform your desired action with 
        // the phone number and country code 
        Alert.alert('Form Submitted', 
            `Phone Number: ${phoneNumber} 
                    \nCountry Code: ${countryCode}`); 
    }; 
  
    const toggleCountryPicker = () => { 
        setCountryPickerVisible(!countryPickerVisible); 
    }; 
  
    return ( 
        <View style={styles.container}> 
            <PhoneInput 
                value={phoneNumber} 
                onChangePhoneNumber={(number) => setPhoneNumber(number)} 
                onPressFlag={toggleCountryPicker} 
                style={styles.phoneInput} 
            /> 
         
            {countryPickerVisible && ( 
                <CountryPicker 
                    withFilter={true} 
                    withFlagButton={false} 
                    withCountryNameButton={false} 
                    onSelect={onSelectCountry} 
                    onClose={() => setCountryPickerVisible(false)} 
                    visible={countryPickerVisible} 
                    containerButtonStyle={styles.countryPickerButton} 
                    closeButtonImageStyle={styles.countryPickerCloseButton} 
                /> 
            )} 
            <Button title="Submit"
                onPress={onSubmit} 
                style={styles.submitButton} /> 
        </View> 
    ); 
}; 
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingHorizontal: 20, 
    }, 
    phoneInput: { 
        height: 50, 
        width: '100%', 
        borderWidth: 1, 
        borderColor: '#ccc', 
        marginBottom: 20, 
        paddingHorizontal: 10, 
    }, 
    countryButton: { 
        marginBottom: 20, 
    }, 
    countryPickerButton: { 
        borderRadius: 5, 
        backgroundColor: '#fff', 
        marginBottom: 20, 
    }, 
    countryPickerCloseButton: { 
        width: 20, 
        height: 20, 
    }, 
    submitButton: { 
        width: '100%', 
    }, 
}); 
  
export default PhoneInputComponent;