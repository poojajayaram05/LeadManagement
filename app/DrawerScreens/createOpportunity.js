import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AccountSelectionModal from "./AccountSelectionModal"; // Import the modal component
import { AccountData } from "../../customComponents/formData";

export default function CreateOpportunity() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const selectAccount = (account) => {
    setSelectedAccount(account);
    setShowModal(false);
  };

  const onSubmit = async () => {
    console.log("Form data", formValues);
    // Implement your submit logic here
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.cardContainer}>
        <ScrollView>
          <View style={styles.card}>
            <View style={styles.section}>
              <TouchableOpacity onPress={openModal}>
                <Text style={styles.sectionTitle}>Account Name</Text>
              </TouchableOpacity>
            </View>
            {/* Render other form elements */}
            <Button title="Submit" onPress={onSubmit} color="#023B5E" />
            <View style={styles.buttonContainer}></View>
          </View>
        </ScrollView>
      </View>
      <AccountSelectionModal
        visible={showModal}
        accounts={AccountData.elements.find((element) => element.name === "account_name")}
        onSelect={selectAccount}
        onClose={closeModal}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: "#d1e0ed",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    paddingBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 10,
  },
});
