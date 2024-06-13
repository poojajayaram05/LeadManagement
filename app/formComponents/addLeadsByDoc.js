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
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../../customComponents/customLeadHeader";
import { router } from "expo-router";

const UploadFile = () => {
  const [result, setResult] = useState(null);

  const goToDashboard = () => {
    router.navigate('headerScreens/DrawerScreens/dashboard');
  };

  const pickDocument = async () => {
    let resultDoc = await DocumentPicker.getDocumentAsync({});
    console.log(resultDoc.uri);
    setResult(resultDoc);
  };

  const UploadDocument = () => {
    try {
      console.log("uploading file", result);
      const mimeType = result?.assets?.[0]?.mimeType;
      console.log("file format", mimeType);
      if (mimeType !== "text/csv") {
        Alert.alert("Please enter a csv file");
      } else {
        console.log("uploading file", result);
        Alert.alert("File uploaded successfully"); 
      }
    } catch (e) { 
      console.log(e);
    }
  };

  return (
    <View style={styles.background}>
      <CustomHeader title={"Add Leads Using File Upload"} onPress={goToDashboard} />
      <View style={styles.container}>
        <Text style={styles.label}>Enter the CSV file to add leads</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={pickDocument} style={styles.iconContainer}>
            <Ionicons name="document" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder={result ? result.assets[0].name : "Enter the csv file"}
              value={result ? result.assets[0].uri : ""}
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
    marginTop: 50,
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 12,
    paddingHorizontal: 10,
    // backgroundColor: 'yellow',   
    marginTop: 10,
  },
  input: {
    height: 40,
    flex: 1,
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  label: {
    marginBottom: 3,
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: "center",
  },
  uploadButton: {
    marginTop: 10,
  },
});

export default UploadFile;




