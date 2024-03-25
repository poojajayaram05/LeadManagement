import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ArrowBack from "../../customComponents/arrowBack";
import DetailCard from "../../customComponents/detailCard";
import { leadData } from "../../customComponents/formData";
import SwitchSelector from 'react-native-switch-selector';
 import useIdStore from "../leadStore";
import { router } from "expo-router";
const LeadConvert = () => {
  // Selecting the first lead from the leadData array
  // const lead = leadData[0];
  const leadId = useIdStore((state) => state.leadId); 
  const lead = leadData.find((item) => item.id === leadId);

  const goBack=()=>{
    router.back();
  }
 
  const options = [
    { label: 'Qualified', value: '1' },
    { label: 'Contacted', value: '2' },
    { label: 'New Lead', value: '3' },
    { label: 'Closed', value: '4' }
  ];
 
  return (
    <View style={styles.container}>
      <DetailCard obj={lead} title="Lead Details" />
      <View style={styles.switchContainer}></View>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={value => console.log(`Call onPress with value: ${value}`)}
        selectedColor="white" // Change selected color
        buttonColor="#023B5E"    // Change button color
      />
      <TouchableOpacity style={styles.backButton}>
        <ArrowBack onPress={goBack}/>
      </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FF",
    paddingTop: 30,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-end",
  },
});
 
export default LeadConvert;