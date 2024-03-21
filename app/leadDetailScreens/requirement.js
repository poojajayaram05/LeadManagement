import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const RequirementForm = () => {
  const requirementFormData = {
    "elements": [
      {
        "name": "lead",
        "type": "TextInput",
        "title": "Lead",
        "inputType": "text",
        "value": "John Smith",
        "readOnly": true,
      },
      {
        "name": "requirement",
        "type": "multiLineText",
        "title": "Requirement",
        "inputType": "text",
        "placeholder": "Notes",
      },
      {
        "name": "product",
        "type": "Ldropdown",
        "title": "Product",
        "inputType": "text",
        "placeholder": "Select product",
        "dropdownData": [
          { "value": 1, "label": "Product A" },
          { "value": 2, "label": "Product B" },
          { "value": 3, "label": "Product C" },
        ]
      },
      {
        "name": "expectedDate",
        "type": "dropdown",
        "title": "Expected Date",
        "inputType": "text",
        "placeholder": "Select",
        "dropdownData": [
          { "value": 1, "label": "1 Week" },
          { "value": 2, "label": "15 Days" },
          { "value": 3, "label": "1 Month" },
          { "value": 4, "label": "6 Months" },
        ]
      },
      {
        "name": "value",
        "type": "TextInput",
        "title": "Value ($)",
        "inputType": "number",
        "placeholder": "Value",
      },
    ]
  };

  return (
    <ScrollView>
      {requirementFormData.elements.map((element, index) => (
        <TouchableOpacity key={index} style={{ margin: 10, padding: 10, backgroundColor: '#e0e0e0', borderRadius: 8 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>{element.title}</Text>
          {element.type === 'TextInput' && (
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5 }}
              value={element.value}
              editable={!element.readOnly}
              placeholder={element.placeholder}
            />
          )}
          {element.type === 'multiLineText' && (
            <TextInput
              style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5, height: 100 }}
              multiline
              placeholder={element.placeholder}
            />
          )}
          {element.type === 'Ldropdown' && (
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5 }}>
              <Text>{element.placeholder}</Text>
              {element.dropdownData.map((item, index) => (
                <TouchableOpacity key={index} style={{ padding: 5 }}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {element.type === 'dropdown' && (
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 5 }}>
              <Text>{element.placeholder}</Text>
              {element.dropdownData.map((item, index) => (
                <TouchableOpacity key={index} style={{ padding: 5 }}>
                  <Text>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RequirementForm;

