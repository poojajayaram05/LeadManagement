import { Switch, View } from "react-native";
import React, { useState } from 'react';

export default function CustomSwitch({ onToggle }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        const newValue = !isEnabled;
        setIsEnabled(newValue);
        onToggle(newValue); // Call the callback function
    };

    return (
        <View>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#023B5E' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}
