import * as SecureStore from 'expo-secure-store'
import useIdStore from '../leadStore';
 
export const FetchAccountDetails = async () => {
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const sys_id = useIdStore((state=>state.sys_id))
    console.log("account detail page", sys_id)
    const apiToken = stoken.accessToken;
    console.log(apiToken);  
    const getLeadURL=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_account_c?sysparm_query=sys_id=${sys_id}` ;
    try {
        const response = await fetch(getLeadURL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
            },
 
          })
          const data = await response.json();
          return data;
 
         
    } catch (error) {
        console.error('Error fetching leads:', error);
        throw error; // You can handle the error further or throw it for the caller to handle
    }
};