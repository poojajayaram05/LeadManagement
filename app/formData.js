export const formData = {
  
    "elements": [
      {
        "name": "topic",
        "type": "TextInput",
        "title": "Topic",
        "placeholder":"Topic",
        "maxLength": 25,
        'isRequired':true
      },
      // {
      //   "name": "name",
      //   "type": "TextInput",
      //   "title": "Name",
      //   "placeholder":"Name",
      //   "maxLength": 25,
      //   'isRequired':true
      // },
      // {
      //   "name": "primary_contact",
      //   "type": "TextInput",
      //   "title": "Contact",
      //   "placeholder":"Contact",
      //   "maxLength": 25,
      //   'isRequired':true
      // },
      // {
      //   "name": "email",
      //   "type": "TextInput",
      //   "title": "Email",
      //   "placeholder":"Email",
      //   "maxLength": 25,
      //   'isRequired':true
      // },
      // {
      //   "name": "phone",
      //   "type": "TextInput",
      //   "title": "Phone",
      //   "placeholder":"Phone",
      //   "maxLength": 25,
      //   'isRequired':true
      // },
      // {
      //   "name": "u_email_type",
      //   "type":"TextInput",
      //   "value": "personal_email_id",
      //   "title": "Email type",
      //   "placeholder":"Email type",
      //   "maxLength": 25,
      //   'isRequired':true
      // },
      // {
      //   "name": "u_phone_type",
      //   "type":"TextInput",
      //   "value": "home",
      //   "title": "Phone Type",
      //   "placeholder":"home phone",
      //   "maxLength": 25,
      //   'isRequired':true
      // },
      

      {
      "name": "firstname",
      "type": "TextInput",
      "title": "First Name",
      "placeholder":"First Name",
      "maxLength": 25,
      'isRequired': true
    },
    {
      "name": "gender",
      "type":"RadioButton",
      "title": "Gender",
      "rdata" : [
        { label: "Male", id: 1 },
        { label: "Female", id: 2 },
      ],
      'isRequired': true
    }, {
      "name": "lastname",
      "type": "TextInput",
      "title": "Last Name",
      "inputType": "text",
      "placeholder": "Last Name",
      "isRequired": true,
      "autocomplete": "lastname"
    }, {
      "name": "email",
      "type": "TextInput",
      "title": "Email",
      "description": "Enter a valid email",
      "inputType": "email",
      "placeholder":"Email",
      "isRequired": true,
      "autocomplete": "email",
     
    }, {
      "name": "job-title",
      "type": "TextInput",
      "title": "Job Title",
      "inputType": "text",
      "placeholder": "Job Title",
     
    }, 
    {
      "name": "industry",
      "type": "dropdown",
      "title": "Industry",
      "inputType": "text",
      "placeholder":"Industry",
       "dropdownData" :[
        { value: 1, label: 'Accounting' },
        { value: 2, label: 'Brokers' },
        { value: 3, label: 'Consulting' },
        { value: 4, label: 'Customer Services'},
        { value: 3, label: 'Consulting' },
        { value: 3, label: 'Financial' },
      
       ]
      
     
    },{
      "name": "company-name",
      "type": "TextInput",
      "title": "Company Name",
      "description": "Enter company name",
      "inputType": "text",
      "placeholder":"Company Name",
      "isRequired": true,
    },
    {
      "name":"website",
      "type": "TextInput",
      "title": "Website",
      "description": "Enter a valid website",
      "inputType": "text",
      "placeholder":"Website",
      "isRequired": true,
     
    },
    {
      "name": "salutation",
      "type": "TextInput",
      "title": "Salutation",
      "inputType": "text",
      "placeholder":"Salutation",
      "isRequired": true,
     
    },
    {
      "name": "bphone",
      "type": "TextInput",
      "title": "Business Phone",
      "inputType": "phone",
      "placeholder":"Business Phone",
      "isRequired": true,
     
    },
    
    {
      "name": "hphone",
      "type": "PhoneNumber",
      "title": "Home Phone",
      "inputType": "phone",
      "placeholder":"Home Phone",
      "isRequired": true,
     
    },
    {
      "name": "mphone",
      "type": "PhoneNumber",
      "title": "Mobile Phone",
      "inputType": "phone",
      "placeholder":"Mobile Phone",
      "isRequired": true,
     
    },
    {
      "name": "fax",
      "type": "TextInput",
      "title": "Fax",
      "inputType": "text",
      "placeholder":"FAX",
      "isRequired": true,
     
    },
    {
      "name": "Other Phone",
      "type": "TextInput",
      "title": "Other Phone",
      "inputType": "text",
      "placeholder":"Other Phone",
     
    },
    {
      "name": "pager",
      "type": "TextInput",
      "title": "Pager",
      "inputType": "text",
      "placeholder":"Pager",
      "isRequired": true,
    },
   
  ],
    
    "showQuestionNumbers": false
  };

  export const taskFormData={
    "elements":[
      {
          "name": "task-type",
          "type": "dropdown",
          "title": "Task Type",
          "inputType": "text",
          
           "dropdownData" :[
            { value: 1, label: 'Call' },
            { value: 2, label: 'Email' },
            { value: 3, label: 'Message' },
            { value: 4, label: 'Follow-Up'},
            { value: 5, label: 'Video Meeting' },
            { value: 6, label: 'Meeting' },
          
           ]
        },
        {
          "name": "due-date",
          "type": "calenderDropdown",
          "title": "Due Date",
          "inputType": "text",
          
           "dropdownData" :[
            { value: 1, label: 'Today' },
            { value: 2, label: 'Tomorrow' },
            { value: 3, label: '3 Days From Now' },
            { value: 4, label: 'One Week From Now'},
            { value: 5, label: '1 Month From Now' },
            { value: 6, label: 'Custom Date' },
          
           ]
          
         
        },
        {
          "name": "time",
          "type": "timeInput",
          "title": "Time",
          "placeholder":"",
         
        },
        {
          "name": "repeat",
          "type": "dropdown",
          "title": "Repeat",
          "inputType": "text",
          
           "dropdownData" :[
            { value: 1, label: 'Daily' },
            { value: 2, label: 'Weekly' },
            { value: 3, label: 'Monthly' },
            { value: 4, label: 'Yearly'},
            { value: 5, label: 'Dont Repeat' },
    
           ]
   
        },
        {
          "name": "user",
          "type": "dropdown",
          "title": "User",
          "inputType": "text",
          
           "dropdownData" :[
            { value: 1, label: 'John Doe' },
            { value: 2, label: 'Jane Smith' },
            { value: 3, label: 'Alice Mark' },
            { value: 4, label: 'Kate Winslet'},
            { value: 5, label: 'William Henry'},
            { value: 6, label: 'Jane Peter' },
            { value: 7, label: 'Carley Wilson'},
            { value: 8, label: 'William Henry'}
           
           
           
    
           ]
   
        },
        {
          "name": "leads",
          "type": "dropdown",
          "title": "Leads",
          "inputType": "text",
          
           "dropdownData" :[
 
            {
           
              "firstname": "John",
           
              "lastname": "Smith",
           
              "email": "johnsmith1@gmail.com",
           
              "job-title": "Engineer",
           
              "phone": "8884763231",
              "status":"open",
              "temperature":"hot",
              "id":"1",
           
            },
           
            {
           
              "firstname": "Jane",
           
              "lastname": "Johnson",
           
              "email": "janejohnson2@yahoo.com",
           
              "job-title": "Designer",
           
              "phone": "8891234567",
              "status":"contacted",
              "temperature":"cold",
              "id":"2",
           
            },
           
            {
           
              "firstname": "Michael",
           
              "lastname": "Brown",
           
              "email": "michaelbrown3@hotmail.com",
           
              "job-title": "Manager",
           
              "phone": "8902345678",
              "status":"qualified",
              "temperature":"warm",
              "id":"3",
           
            },
           
            {
           
              "firstname": "Emily",
           
              "lastname": "Jones",
           
              "email": "emilyjones4@outlook.com",
           
              "job-title": "Developer",
           
              "phone": "8913456789",
              "status":"accepted",
              "temperature":"cold",
              "id":"4",
           
            },
           
            {
           
              "firstname": "William",
           
              "lastname": "Garcia",
           
              "email": "williamgarcia5@gmail.com",
           
              "job-title": "Analyst",
           
              "phone": "8924567890",  
              "status":"accepted",
              "temperature":"hot",
              "id":"5",
           
            },
           
            {
           
              "firstname": "Olivia",
           
              "lastname": "Miller",
           
              "email": "oliviamiller6@yahoo.com",
           
              "job-title": "Consultant",
           
              "phone": "8935678901",
              "status":"qualified",
              "temperature":"hot",
              "id":"6",
           
            },
           
            {
           
              "firstname": "James",
           
              "lastname": "Davis",
           
              "email": "jamesdavis7@hotmail.com",
           
              "job-title": "Coordinator",
           
              "phone": "8946789012",
              "status":"qualified",
              "temperature":"cold",
              "id":"7",
           
            },
           
            {
           
              "firstname": "Sophia",
           
              "lastname": "Rodriguez",
           
              "email": "sophiarodriguez8@outlook.com",
           
              "job-title": "Administrator",
           
              "phone": "8957890123",
              "status":"qualified",
              "temperature":"warm",
              "id":"8",
           
            },
           
            {
           
              "firstname": "Benjamin",
           
              "lastname": "Martinez",
           
              "email": "benjaminmartinez9@gmail.com",
           
              "job-title": "Engineer",
           
              "phone": "8968901234",
              "status":"qualified",
              "temperature":"warm",
              "id":"9",
           
            },
           
            {
           
              "firstname": "Emma",
           
              "lastname": "Hernandez",
           
              "email": "emmahernandez10@yahoo.com",
           
              "job-title": "Designer",
           
              "phone": "8979012345",
              "status":"qualified",
              "temperature":"cold",
              "id":"10",
           
            }
          ]
          
           
           
           
           
    
           

        },

        {
          "name": "note",
          "type": "multilineInput",
          "title": "Note",
          "placeholder":" Enter a note",
         
        },
        
    ]
  }

  export const leadData =
[
 
  {
 
    "firstname": "John",
 
    "lastname": "Smith",
 
    "email": "johnsmith1@gmail.com",
 
    "job-title": "Engineer",
 
    "phone": "8884763231",
    "status":"open",
    "temperature":"hot",
    "id":"1",
 
  },
 
  {
 
    "firstname": "Jane",
 
    "lastname": "Johnson",
 
    "email": "janejohnson2@yahoo.com",
 
    "job-title": "Designer",
 
    "phone": "8891234567",
    "status":"contacted",
    "temperature":"cold",
    "id":"2",
 
  },
 
  {
 
    "firstname": "Michael",
 
    "lastname": "Brown",
 
    "email": "michaelbrown3@hotmail.com",
 
    "job-title": "Manager",
 
    "phone": "8902345678",
    "status":"qualified",
    "temperature":"warm",
    "id":"3",
 
  },
 
  {
 
    "firstname": "Emily",
 
    "lastname": "Jones",
 
    "email": "emilyjones4@outlook.com",
 
    "job-title": "Developer",
 
    "phone": "8913456789",
    "status":"accepted",
    "temperature":"cold",
    "id":"4",
 
  },
 
  {
 
    "firstname": "William",
 
    "lastname": "Garcia",
 
    "email": "williamgarcia5@gmail.com",
 
    "job-title": "Analyst",
 
    "phone": "8924567890",  
    "status":"accepted",
    "temperature":"hot",
    "id":"5",
 
  },
 
  {
 
    "firstname": "Olivia",
 
    "lastname": "Miller",
 
    "email": "oliviamiller6@yahoo.com",
 
    "job-title": "Consultant",
 
    "phone": "8935678901",
    "status":"qualified",
    "temperature":"hot",
    "id":"6",
 
  },
 
  {
 
    "firstname": "James",
 
    "lastname": "Davis",
 
    "email": "jamesdavis7@hotmail.com",
 
    "job-title": "Coordinator",
 
    "phone": "8946789012",
    "status":"qualified",
    "temperature":"cold",
    "id":"7",
 
  },
 
  {
 
    "firstname": "Sophia",
 
    "lastname": "Rodriguez",
 
    "email": "sophiarodriguez8@outlook.com",
 
    "job-title": "Administrator",
 
    "phone": "8957890123",
    "status":"qualified",
    "temperature":"warm",
    "id":"8",
 
  },
 
  {
 
    "firstname": "Benjamin",
 
    "lastname": "Martinez",
 
    "email": "benjaminmartinez9@gmail.com",
 
    "job-title": "Engineer",
 
    "phone": "8968901234",
    "status":"qualified",
    "temperature":"warm",
    "id":"9",
 
  },
 
  {
 
    "firstname": "Emma",
 
    "lastname": "Hernandez",
 
    "email": "emmahernandez10@yahoo.com",
 
    "job-title": "Designer",
 
    "phone": "8979012345",
    "status":"qualified",
    "temperature":"cold",
    "id":"10",
 
  }
]


