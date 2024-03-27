import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CustomInputSocial = ({ title, placeholder, onChange, value, errors, readOnly, keyboardType, icon }) => (
    <View style={styles.container}>
    {/* <Text style={styles.label}>{title}</Text> */}
    <View style={styles.inputContainer}>
      {icon&& <Ionicons name={icon} size={24} color="black" style={styles.icon} />} 
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        keyboardType={keyboardType}
        // error={error}
      />
    </View>
    {/* {errors && <Text style={styles.error}>{errors}</Text>} */}
  </View>
);

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
      },
      inputContainer: {
        flexDirection: 'row', // Align icon and input horizontally
        alignItems: 'center', // Center items vertically
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
      },
      icon: {
        marginLeft: 10, // Adjust as needed
      },
      input: {
        flex: 1, // Take up remaining space
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 16,
      },
});
