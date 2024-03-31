// AccountSelectionModal.js
import React from "react";
import { View, Text, Modal, TouchableOpacity, FlatList } from "react-native";

const AccountSelectionModal = ({ visible, accounts, onSelect, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Select an Account</Text>
          <FlatList
            data={accounts}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelect(item)}>
                <Text style={{ fontSize: 16, marginBottom: 10 }}>{item.label}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.value}
          />
          <TouchableOpacity onPress={onClose}>
            <Text style={{ fontSize: 16, color: "blue" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AccountSelectionModal;
