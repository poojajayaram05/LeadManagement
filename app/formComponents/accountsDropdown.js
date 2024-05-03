// import { SelectList } from 'react-native-dropdown-select-list'
// import React,{useState, useEffect} from 'react';
// import ModalSelector from 'react-native-modal-selector-searchable';
// import { FetchAccounts } from '../service/fetchAccounts';



// function AddAccounts({ onSelectAccount }) {

//   const [selected, setSelected] = useState("");
//   const[accountsData, setAccountsData]= useState([]);

//   console.disableYellowBox = true;


//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const ldata = await FetchAccounts(); 
//             setAccountsData(ldata.result); 
           
          
//         } catch (error) {
           
//             console.error('Error in fetching leads:', error);
//         }
//     };

//     fetchData(); 
// }, []); 

// const accountNames = accountsData.map((account, index) => ({
//     key: account.account_number+index, 
//     label: account.account_name ,
//     id:account.sys_id
//   }));

  


//   return(
//     <ModalSelector
//                     data={accountNames||''}
//                     initValue={selected||'Select Accounts'}
//                     onChange={(option) => {
//                       console.log(`${option.label} (${option.key})`);
//                       onSelectAccount(option.label, option.id);
//                       setSelected(option.label)
                       
                      
//                       // Call the callback function with the selected account name
//                     }}
                    
//                      />
//   )

// };

// export default AddAccounts;

// import { SelectList } from 'react-native-dropdown-select-list'
// import React,{useState, useEffect} from 'react';
// import ModalSelector from 'react-native-modal-selector-searchable';
// import { FetchAccounts } from '../service/fetchAccounts';
// import { StyleSheet, View, Text } from 'react-native';

// function AddAccounts({ onSelectAccount }) {

//   const [selected, setSelected] = useState("");
//   const [accountsData, setAccountsData] = useState([]);
//   console.disableYellowBox = true;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const ldata = await FetchAccounts(); 
//         setAccountsData(ldata.result); 
//       } catch (error) {
//         console.error('Error in fetching leads:', error);
//       }
//     };
//     fetchData(); 
//   }, []); 

//   const accountNames = accountsData.map((account, index) => ({
//     key: account.account_number + index, 
//     label: account.account_name,
//     id: account.sys_id
//   }));

//   return (
//     <ModalSelector
//     data={accountNames || ''}
//     initValue={selected || 'Select Accounts'}
//     onChange={(option) => {
//       console.log(`${option.label} (${option.key})`);
//       onSelectAccount(option.label, option.id);
//       setSelected(option.label)
//     }}
//     style={[styles.input, styles.modalSelector]} // Merge custom styles with input style
//     optionStyle={styles.optionStyle} // Apply custom option styles
//     customSelector={
//       <View style={styles.customSelector}>
//         <Text>{selected || 'Select Accounts'}</Text>
//       </View>
//     }
//   />
  
//   );
  
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 12,
//   },
//   label: {
//     marginBottom: 3,
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   // input: {
//   //   borderWidth: 1,
//   //   borderColor: 'green',
//   //   borderRadius: 12,
//   //   fontSize: 16,
//   // },
//   error: {
//     color: 'red',
//     fontSize: 10,
//   },
//   modalSelector: {
//     // Apply additional custom styles to the ModalSelector component
//     backgroundColor: 'transparent', // Set background color to transparent
//     shadowColor: 'transparent',
//     borderRadius: 12, 
//   },
//   customSelector: {
//     borderWidth: 1,
//     borderColor: '#ccc', // Set border color to red
//     borderRadius: 12,
//     padding: 10,
//   },
// });

// export default AddAccounts;
import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState, useEffect } from 'react';
import ModalSelector from 'react-native-modal-selector-searchable';
import { FetchAccounts } from '../service/fetchAccounts';
import { StyleSheet, View, Text } from 'react-native';

function AddAccounts({ onSelectAccount }) {

  const [selected, setSelected] = useState("");
  const [accountsData, setAccountsData] = useState([]);
  console.disableYellowBox = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ldata = await FetchAccounts(); 
        setAccountsData(ldata.result); 
      } catch (error) {
        console.error('Error in fetching leads:', error);
      }
    };
    fetchData(); 
  }, []); 

  const accountNames = accountsData.map((account, index) => ({
    key: account.account_number + index, 
    label: account.account_name,
    id: account.sys_id
  }));

  return (
    <ModalSelector
      data={accountNames}
      initValue={selected || 'Select Accounts'}
      onChange={(option) => {
        console.log(`${option.label} (${option.key})`);
        onSelectAccount(option.label, option.id);
        setSelected(option.label)
      }}
      style={styles.modalSelector} // Apply custom styles to the ModalSelector component
      optionContainerStyle={styles.optionContainer} // Apply custom styles to the option container
      optionStyle={styles.optionStyle} // Apply custom styles to each option
      optionTextStyle={styles.optionTextStyle} // Apply custom styles to the text of each option
    />
  );
};

const styles = StyleSheet.create({
  modalSelector: {
    borderRadius: 12, // Set border radius
    borderWidth: 1,
    borderColor: 'white', // Set border color to white
  },
  optionContainer: {
    // Apply custom styles to the option container
    backgroundColor: 'white', // Set background color
    borderRadius: 12, // Set border radius
  },
  optionStyle: {
    // Apply custom styles to each option
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Set border color
  },
  optionTextStyle: {
    // Apply custom styles to the text of each option
    fontSize: 16, // Set font size
  },
});

export default AddAccounts;



