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
           
          
        } catch (error) {
           
            console.error('Error in fetching leads:', error);
        }
    };

    fetchData(); 
}, []); 

const accountNames = accountsData.map((account, index) => ({
    key: account.account_number+index, 
    label: account.account_name ,
    id:account.sys_id
  }));

  


  return(
    <ModalSelector
                    data={accountNames||''}
                    initValue={selected||'Select Accounts'}
                    onChange={(option) => {
                      console.log(`${option.label} (${option.key})`);
                      onSelectAccount(option.label, option.id);
                      setSelected(option.label)
                       
                      
                      // Call the callback function with the selected account name
                    }}
                    
                     />
  )

};

export default AddAccounts;