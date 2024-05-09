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
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { CustomInput } from "../../customComponents/customInput";
import { Ionicons } from "@expo/vector-icons";
const UploadFile = () => {
  const [result, setResult] = useState({});

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.uri);
    console.log(result);
    setResult(result);
  };

  return (
    <View style={styles.background}>
      <View style={styles.inputContainer}>
      <TouchableOpacity onPress={pickDocument} style={styles.iconContainer}>
      <Ionicons name="document" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Enter the csv file"
          value={result.uri}
          editable={false}
        />
         
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    paddingHorizontal: 70,
  },
  input: {
   
    height: 40,
  },
  iconContainer: {
    padding: 10,
  },
});

export default UploadFile;
