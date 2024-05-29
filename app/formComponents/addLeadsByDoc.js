// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import * as DocumentPicker from "expo-document-picker";
// import { CustomInput } from "../../customComponents/customInput";
// import { Ionicons } from "@expo/vector-icons";

// const UploadFile = () => {
//   const [result, setResult]=useState({})
//   const pickDocument = async () => {
//     let result = await DocumentPicker.getDocumentAsync({});
//     console.log(result.uri);
//     console.log(result);
//     setResult(result);
//   };

//   return (
//     <View style={styles.background}>
//       {/* <Text style={styles.file}>Upload CSV File</Text> */}
//       <View style={styles.button}>
//         <TouchableOpacity onPress={pickDocument}>
//         <Ionicons name="document" size={24} color="black" />
//         <CustomInput    key={"lead_csv"}
//                         title={"Leads CSV File"}
//                         placeholder={"Enter the csv file"}
//                         // control={control}
//                         isRequired={true}
                        
                       
//                         onChange={(value) => setResult(value)}
//                          />
                         
       
         
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
 
//   file: {
//     color: "black",
//     marginHorizontal: 145,
//   },
//   button: {
//     marginHorizontal: 60,
//   },
// });

// export default UploadFile;



import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { CustomInput } from "../../customComponents/customInput";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../../customComponents/customLeadHeader";
import { router } from "expo-router";
const UploadFile = () => {
  const [result, setResult] = useState({});
  
  const goToDashboard=()=>{
    router.navigate('headerScreens/DrawerScreens/dashboard')
  }

  const pickDocument = async () => {
    let resultDoc = await DocumentPicker.getDocumentAsync({});
    console.log(resultDoc.uri);
    
    setResult(resultDoc);
    console.log(result)
  };

  const UploadDocument=()=>{
    try{
      console.log("uplaoding file",result);
      console.log("file format",result.assets[0].mimeType)
      if(result.assets[0].mimeType!="text/comma-separated-values")
      Alert.alert("Please enter a csv file")
    else{
    console.log("uplaoding file",result);
    Alert.alert("File uploaded successfully")
  
    }
    }
    catch(e){
    console.log(e)
    }
  }
  

  return (
    <View style={styles.background}>
      <CustomHeader title={"Add Leads Using File Upload"} onPress={goToDashboard}/>
      <View style={styles.container}>
      <Text style={styles.label}>Enter the CSV file to add leads</Text>
      <View style={styles.inputContainer}>
      <TouchableOpacity onPress={pickDocument} style={styles.iconContainer}>
      <Ionicons name="document" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder={result.assets ? result.assets[0].name : "Enter the csv file"}
          value={result.uri}
          editable={false}
        />   
        </TouchableOpacity>
       
      </View>
      </View>
      <View style={styles.uploadButton}> 
        <Button title="Upload" color='#023B5E' onPress={UploadDocument}></Button>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginTop:50,
    alignItems: "center",
  },
  container:{

    marginTop:20

  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 12,
    paddingHorizontal: 40,
    
  },
  input: {
    height: 40,
    paddingLeft:13,
    paddingBottom:20,
    justifyContent:'center'
  },
  iconContainer: {
    padding: 10,
    flexDirection:'row',
    paddingLeft:10
  },
  label:{
    marginBottom: 3,
    fontSize: 14,
    fontWeight: 'bold',
  },
  uploadButton:{
    marginTop:10

  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 3,
    zIndex: 999,
},
dropdownMenuItem: {
    fontSize: 16,
    paddingVertical: 8,
    color:'#023B5E',
    fontWeight:'bold'
},
});

export default UploadFile;
