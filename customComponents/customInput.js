import { View, Text, TextInput, StyleSheet } from "react-native";

export const CustomInput = ({ title, placeholder, onChange, value, errors, readOnly,inputType }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{title}</Text>
    
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      readOnly={readOnly}
      keyboardType={inputType}
      // error={error}
    />
    {/* {errors && <Text style={styles.error}>{errors}</Text>} */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 3,
    fontSize: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 10,
  },
});
