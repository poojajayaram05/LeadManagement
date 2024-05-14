function updateValues(fields, api_data) {
 
    // console.log(fields)
   
    for (let key in fields) {
        // console.log(key, ":", fields[key].label)
        // console.log(key,account_from_api[key],fields[key]["value"])
         
        if (api_data.hasOwnProperty(key)) {
            fields[key].value= api_data[key];
        }
    }
}


function updateHeader(fields,leadData) {
    for (let key in fields) {
        if (leadData.hasOwnProperty(key)) {
            fields[key].value = leadData[key];
        }
    }
}
 export const TransformApiData= async( data_to_be_rendered,apiToken1,url1, sys_id)=> {
   

    const apiUrl=url1+`&sys_id=${sys_id}`
   
   
   
 
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiToken1
            },
        });
       
        const api_data = await response.json();
        //console.log("api data", api_data.result[0]);
        const leadData = api_data.result[0];
        
        // return data;
     
       
    for (let key in data_to_be_rendered.sections) {
        const fields = data_to_be_rendered.sections[key].fields;
        updateValues(fields,leadData);
        
    }
    

    updateHeader(data_to_be_rendered.header_section, leadData)
    
    return data_to_be_rendered
 
}