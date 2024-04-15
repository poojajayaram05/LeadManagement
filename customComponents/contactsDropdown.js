import { SelectList } from 'react-native-dropdown-select-list'
import React,{useState, useEffect} from 'react';
import ModalSelector from 'react-native-modal-selector-searchable';
import { FetchContacts } from '../app/service/fetchContacts';



function AddContacts() {

  const [selected, setSelected] = useState("");
  const[contactsData, setContactsData]= useState([]);


  useEffect(() => {
    const fetchData = async () => {
        try {
            const ldata = await FetchContacts(); 
            setContactsData(ldata.result); 
            console.log("this is the accounts data", ldata.result);
          
        } catch (error) {
           
            console.error('Error in fetching leads:', error);
        }
    };

    fetchData(); 
}, []); 



const contactNames = contactsData.map(contact => ({
    key: contact.number, 
    label: contact.first_name + ' '+ contact.last_name
  }));

  


  return(
    <ModalSelector
                    data={contactNames||''}
                    initValue="Select Contacts"
                    onChange={(option)=>{ console.log(`${option.label} (${option.key})`) }} />
  )

};

export default AddContacts;