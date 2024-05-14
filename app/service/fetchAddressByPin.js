import * as SecureStore from 'expo-secure-store'
import useIdStore from '../leadStore';

export const searchAddress = async (zipCode) => { 
   // setModalVisible(true);
    const token = SecureStore.getItem('token');
 
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    console.log("zipcode",zipCode)
  
   
      // setModalVisible(true);
      //   const response = await axios.get(`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_postal_code?sysparm_query=postal_code=744102&sysparm_display_value=true`); 
      //   console.log(zipCode)
      //   setAddressInfo(response.data); 
      //   //setModalVisible(true); 
      const getAddressUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_postal_code?sysparm_query=postal_code=${zipCode}&sysparm_display_value=true` ;
      try {
        console.log(getAddressUrl)
          const response = await fetch(getAddressUrl, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + apiToken
              },
  
            })
            const data = await response.json();
            setAddressInfo(data);
            console.log("data", data)
            console.log("adressss", addressInfo)
            return data;
      }
     catch (error) {
        console.error('Error fetching address:', error);
        
    }
  }
  