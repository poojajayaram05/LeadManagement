import * as SecureStore from 'expo-secure-store'

export const FetchLeadDetails = async () => {
    const token = SecureStore.getItem('token');
    const stoken = JSON.parse(token);
    const apiToken = stoken.accessToken;
    console.log(apiToken);  
    const getLeadURL=
    "https://ven06798.service-now.com/api/now/table/x_rptp_lead_mana_0_lead_c?sysparm_fields=first_name,preffered_method,zip_postalcode,sys_updated_by,sys_created_on,sys_created_by,sys_updated_on,last_name,mobile_phone,email,qualification,lead_status,number,city,street,country,company,email_opt_out,business_phone,home_phone,gender,owner,annual_revenue,lead_source,no_of_employees,industry,company_duns_number,alternate_email1,alternate_email2,zip,lead_type,description,job_title,title,state_province,u_email,phone,whatsapp" ;
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

         
        //   router.replace('/DrawerScreens/leadList')
    } catch (error) {
        console.error('Error fetching leads:', error);
        throw error; // You can handle the error further or throw it for the caller to handle
    }
};
