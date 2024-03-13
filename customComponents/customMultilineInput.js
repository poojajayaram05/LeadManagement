import React from 'react';
import {View, TextInput, Text} from 'react-native';

function MultilineTextInput({key, name, placeholder}){
  const [value, onChangeText] = React.useState('Note');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: '#00000',
        // borderBottomColor: '#000000',
        // borderBottomWidth: 1,
        borderWidth:0.55,
        borderColor:'#000'
      }}>
      
      <TextInput
        editable
        multiline
        numberOfLines={10}
        maxLength={100}
        onChangeText={text => onChangeText(text)}
        value={value}
        
        
      />
    </View>
  );
};

export default MultilineTextInput;