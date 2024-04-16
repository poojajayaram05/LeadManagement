import * as SecureStore from 'expo-secure-store'
import useIdStore from '../leadStore';

export const FetchActivities = async () => {
    // const leadId = useIdStore((state) => state.number);
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    const username = SecureStore.getItem('username');
    console.log("from store", username);
    console.log(apiToken);  
    const getActivityUrl=`https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_activity_c` ;
    try {
        const response = await fetch(getActivityUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization' : 'Bearer ' + apiToken
             
            },

          })
          const data = await response.json();
          return data;

         
        //   router.replace('/DrawerScreens/leadList')
    } catch (error) {
        console.error('Error fetching leads:', error);
        throw error; // You can handle the error further or throw it for the caller to handle
    }
};
