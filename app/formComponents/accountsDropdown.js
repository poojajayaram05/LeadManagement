import { SelectList } from 'react-native-dropdown-select-list'
import React,{useState, useEffect} from 'react';
import ModalSelector from 'react-native-modal-selector-searchable';
import { FetchAccounts } from '../service/fetchAccounts';



function AddAccounts({ onSelectAccount }) {

  const [selected, setSelected] = useState("");
  const[accountsData, setAccountsData]= useState([]);

  console.disableYellowBox = true;


  useEffect(() => {
    const fetchData = async () => {
        try {
            const ldata = await FetchAccounts(); 
            setAccountsData(ldata.result); 
            console.log("this is the accounts data", ldata.result);
          
        } catch (error) {
           
            console.error('Error in fetching leads:', error);
        }
    };

    fetchData(); 
}, []); 

const accountNames = accountsData.map(account => ({
    key: account.account_number, 
    label: account.account_name ,
    id:account.sys_id
  }));

  


  return(
    <ModalSelector
                    data={accountNames||''}
                    initValue="Select Accounts"
                    onChange={(option) => {
                      console.log(`${option.label} (${option.key})`);
                      onSelectAccount(option.label, option.id); 
                      // Call the callback function with the selected account name
                    }}
                     />
  )

};

export default AddAccounts;