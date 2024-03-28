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
        {label:"Other", id:3},
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
      "name": "jobTitle",
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
  
  };

  export const taskFormData = {
    "elements": [
      {
        "name": "task-type",
        "type": "dropdown",
        "title": "Task Type",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "Call" },
          { "value": 2, "label": "Email" },
          { "value": 3, "label": "Message" },
          { "value": 4, "label": "Follow-Up" },
          { "value": 5, "label": "Video Meeting" },
          { "value": 6, "label": "Meeting" }
        ]
      },
      {
        "name": "due-date",
        "type": "calenderDropdown",
        "title": "Due Date",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "Today" },
          { "value": 2, "label": "Tomorrow" },
          { "value": 3, "label": "3 Days From Now" },
          { "value": 4, "label": "One Week From Now" },
          { "value": 5, "label": "1 Month From Now" },
          { "value": 6, "label": "Custom Date" }
        ]
      },
      {
        "name": "title",
        "type": "TextInput",
        "title": "Title",
        "inputType": "text",
        "placeholder":"Enter the title"
      },
      {
        "name": "description",
        "type": "TextInput",
        "title": "Description",
        "inputType": "text",
        "placeholder":"Enter the description"
      },
      {
        "name": "status",
        "type": "dropdown",
        "title": "Status",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "In-progress" },
          { "value": 2, "label": "Completed" },
          {"value":3, "label":"Not Started"}
        ]
      },
      {
        "name": "time",
        "type": "timeInput",
        "title": "Time",
        "placeholder": ""
      },
      {
        "name": "repeat",
        "type": "dropdown",
        "title": "Repeat",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "Daily" },
          { "value": 2, "label": "Weekly" },
          { "value": 3, "label": "Monthly" },
          { "value": 4, "label": "Yearly" },
          { "value": 5, "label": "Don't Repeat" }
        ]
      },
      {
        "name": "owner",
        "type": "dropdown",
        "title": "Owner",
        "inputType": "text",
        "placeholder":'Select',
        "dropdownData": [
          { "value": 1, "label": "John Doe" },
          { "value": 2, "label": "Jane Smith" },
          { "value": 3, "label": "Alice Mark" },
          { "value": 4, "label": "Kate Winslet" },
          { "value": 5, "label": "William Henry" },
          { "value": 6, "label": "Jane Peter" },
          { "value": 7, "label": "Carley Wilson" },
          { "value": 8, "label": "William Henry" }
        ]
      },
      {
        "name": "leads",
        "type": "leadDropdown",
        "title": "Leads",
        "inputType": "text",
        
         
        
      }
    ]
  }
  
  export const leadData =
[
 
  {
 
    "firstname": "John",
 
    "lastname": "Smith",
 
    "email": "johnsmith1@gmail.com",
 
    "jobTitle": "Engineer",
 
    "phone": "8884763231",
    "status":"open",
    "temperature":"hot",
    "id":"1",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Jane",
 
    "lastname": "Johnson",
 
    "email": "janejohnson2@yahoo.com",
 
    "jobTitle": "Designer",
 
    "phone": "8891234567",
    "status":"contacted",
    "temperature":"cold",
    "id":"2",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Michael",
 
    "lastname": "Brown",
 
    "email": "michaelbrown3@hotmail.com",
 
    "jobTitle": "Manager",
 
    "phone": "8902345678",
    "status":"qualified",
    "temperature":"warm",
    "id":"3",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Emily",
 
    "lastname": "Jones",
 
    "email": "emilyjones4@outlook.com",
 
    "jobTitle": "Developer",
 
    "phone": "8913456789",
    "status":"accepted",
    "temperature":"cold",
    "id":"4",
    "gender":'F',
 
  },
 
  {
 
    "firstname": "William",
 
    "lastname": "Garcia",
 
    "email": "williamgarcia5@gmail.com",
 
    "jobTitle": "Analyst",
 
    "phone": "8924567890",  
    "status":"accepted",
    "temperature":"hot",
    "id":"5",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Olivia",
 
    "lastname": "Miller",
 
    "email": "oliviamiller6@yahoo.com",
 
    "jobTitle": "Consultant",
 
    "phone": "8935678901",
    "status":"qualified",
    "temperature":"hot",
    "id":"6",
    "gender":'F',
 
  },
 
  {
 
    "firstname": "James",
 
    "lastname": "Davis",
 
    "email": "jamesdavis7@hotmail.com",
 
    "jobTitle": "Coordinator",
 
    "phone": "8946789012",
    "status":"qualified",
    "temperature":"cold",
    "id":"7",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Sophia",
 
    "lastname": "Rodriguez",
 
    "email": "sophiarodriguez8@outlook.com",
 
    "jobTitle": "Administrator",
 
    "phone": "8957890123",
    "status":"qualified",
    "temperature":"warm",
    "id":"8",
    "gender":'F',
 
  },
 
  {
 
    "firstname": "Benjamin",
 
    "lastname": "Martinez",
 
    "email": "benjaminmartinez9@gmail.com",
 
    "jobTitle": "Engineer",
 
    "phone": "8968901234",
    "status":"qualified",
    "temperature":"warm",
    "id":"9",
    "gender":'M',
 
  },
 
  {
 
    "firstname": "Emma",
 
    "lastname": "Hernandez",
 
    "email": "emmahernandez10@yahoo.com",
 
    "jobTitle": "Designer",
 
    "phone": "8979012345",
    "status":"qualified",
    "temperature":"cold",
    "id":"10",
    "gender":'F',
 
  }
]

export const leadNoteData = {
  "elements": [
    {
      "name": "leadId",
      "type": "dropdown",
      "title": "Lead",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": leadData
    },
    {
      "name": "notes",
      "type": "multiLineText",
      "title": "Lead Notes",
      "inputType": "text",
      "placeholder": "Write a note"
    }
  ]
};

export const meetingData = {
  "elements": [
    {
      "name": "lead",
      "type": "leadDropdown",
      "title": "Lead",
      "inputType": "text",
      "placeholder": "Select",
      "dropdownData": leadData
    },
    {
      "name": "Title",
      "type": "TextInput",
      "title": "Title",
      "inputType": "text",
      "placeholder": "Title"
    },
    {
      "name": "location",
      "type": "TextInput",
      "title": "Location",
      "inputType": "text",
      "placeholder": "Location"
    },
    {
      "name": "Description",
      "type": "TextInput",
      "title": "Description",
      "inputType": "text",
      "placeholder": "Description"
    },

    {
      "name": "attendees",
      "type": "MultipleSelect",
      "title": "Attendees",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "John Doe" },
        { "value": 2, "label": "Jane Smith" },
        { "value": 3, "label": "Alice Mark" },
        { "value": 4, "label": "Kate Winslet" },
        { "value": 5, "label": "William Henry" },
        { "value": 6, "label": "Jane Peter" },
        { "value": 7, "label": "Carley Wilson" },
      
        
      ]
    },
    {
      "name": "timeZone",
      "type": "dropdown",
      "title": "Time Zone",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "Coordinated Universal Time (UTC)" },
        { "value": 2, "label": "Eastern Standard Time (EST)" },
        { "value": 3, "label": "Central European Time (CET)" },
        { "value": 4, "label": "Pacific Standard Time (PST)" },
        { "value": 5, "label": "India Standard Time (IST)" },
        { "value": 6, "label": "China Standard Time (CST)" },
        
      ]
    },
    {
      "name": "fromDate",
      "type": "Date",
      "title": "From Date",
      "placeholder": "From Date"
    },
    {
      "name": "toDate",
      "type": "Date",
      "title": "To Date",
      "placeholder": "To Date"
    },
    {
      "name": "fromTime",
      "type": "timeInputFrom",
      "title": "From time",
      "placeholder": "Select Time"
    },
    {
      "name": "toTime",
      "type": "timeInputTo",
      "title": "To time",  
      "placeholder": "Select Time"
    },
    {
      "name": "allDay",
      "type": "switch",
      "title": "Time Spans",
     
    },
  ]
};


export const productData=
[
 
  {
 
    "id":"1",
    "productName":"Topez",
    "productCategory":"topez",
    "categoryCode":"Travel",
    "productDescription":"Topez offers travel insurance, providing coverage for unforeseen events during domestic or international travel.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"500000",
    "currency":"USD"

 
  },
  {
    "id": "2",
    "productName": "Ruby",
    "productCategory": "topez",
    "categoryCode":"Medical",
    "productDescription": "Ruby provides medical insurance coverage for expenses incurred due to illness or injury.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"400000",
    "currency":"INR"
   
  },
  {
    "id": "3",
    "productName": "Sapphire",
    "productCategory": "sapphire",
    "categoryCode":"Travel",
    "productDescription": "Sapphire offers auto insurance, providing financial protection against physical damage and bodily injury resulting from traffic collisions.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"600000",
    "currency":"USD"
  },
  {
    "id": "4",
    "productName": "Emerald",
    "productCategory": "emerald",
    "categoryCode":"Home",
    "productDescription": "Emerald provides home insurance coverage for a private residence and its contents.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"700000",
    "currency":"USD"
  },
  {
    "id": "5",
    "productName": "Diamond",
    "productCategory": "diamond",
    "categoryCode":"Pet",
    "productDescription": "Diamond offers pet insurance, providing coverage for veterinary expenses and other costs associated with caring for pets. ",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"700000",
    "currency":"INR"
  },
  {
    "id": "6",
    "productName": "Pearl",
    "productCategory": "pearl",
    "categoryCode":"Life",
    "productDescription": "Pearl offers life insurance, providing financial protection to the policyholder's beneficiaries in the event of the insured individual's death.",
    "supplierCode":"icici",
    "supplierName":"ICICI",
    "rate":"300000",
    "currency":"INR"
  },
]

export const ContactData= {
  "elements": [
  
    {
      "name": "first_name",
      "type": "TextInput",
      "title": "First name | first_name",
      "inputType": "text",
      "placeholder": "Enter First name",
      "dataType": "string"
    },
    {
      "name": "last_name",
      "type": "TextInput",
      "title": "Last name | last_name",
      "inputType": "text",
      "placeholder": "Enter Last name",
      "dataType": "string"
    },
    {
      "name": "account_type",
      "type": "dropdown",
      "title": "Account | account",
      "inputType": "text",
      "placeholder": "Select account type",
      "dropdownData": [
        { "value": "saving", "label": "Boexo" },
        { "value": "current", "label": "Boexo france" },
        { "value": "current", "label": "Advance super routing" },
        { "value": "current", "label": "Vector solutions" }
      ],
      "dataType": "string"
    },
    {
      "name": "title",
      "type": "TextInput",
      "title": "Title | title",
      "inputType": "text",
      "dataType": "string"
    },
    {
      "name": "preferred_language",
      "type": "dropdown",
      "title": "Language | preferred_language",
      "inputType": "text",
      "placeholder": "System(English)",
      "dropdownData": [
        { "value": "English", "label": "English" },
        { "value": "Hindi", "label": "German" }
      ],
      "dataType": "string"
    },
    {
      "name": "email",
      "type": "TextInput",
      "title": "Email | email",
      "inputType": "text",
      "placeholder": "Enter Email",
      "dataType": "email"
    },
    {
      "name": "business_phone",
      "type": "TextInput",
      "title": "Business phone | business_phone",
      "inputType": "number",
      "placeholder": "Enter the business number",
      "dataType": "string"
    },
    {
      "name": "mobile_phone",
      "type": "TextInput",
      "title": "Mobile phone | mobile_phone",
      "inputType": "numeric",
      "placeholder": "Enter the phone number",
      "dataType": "number"
    },
    {
      "name": "time_zone",
      "type": "dropdown",
      "title": "Time zone | time_zone",
      "inputType": "text",
      "placeholder": "System(America/Los_Angeles)",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "Asia/taipei" },
        { "value": "america/toronto", "label": "America/Toronto" },
        { "value": "america/toronto", "label": "caneda/atlantic" },
        { "value": "america/toronto", "label": "caneda central" },
        { "value": "america/toronto", "label": "US/Arizona" },
        { "value": "america/toronto", "label": "GMT" }
      ],
      "dataType": "string"
    },
    {
      "name": "notification",
      "type": "dropdown",
      "title": "Notification | notification",
      "inputType": "text",
      "placeholder": "Enable | 2",
      "dropdownData": [
        { "value": "test-1", "label": "enable" },
        { "value": "test-2", "label": "disable" }
      ],
      "dataType": "string"
    }
  ]
}


export const AccountData= {
  "elements": [
    {
      "name": "account_number",
      "type": "TextInput",
      "title": "Account number",
      "inputType": "numeric",
      "placeholder": "Enter a/c number",
      "dataType": "string"
    },

    {
      "name": "account_currency",
      "type": "dropdown",
      "title": "Account currency",
      "inputType": "text",
      "placeholder": "---none---",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "USD" },
        { "value": "america/toronto", "label": "EUR" },
        { "value": "america/toronto", "label": "JPY" },
        { "value": "america/toronto", "label": "INR" },
      ],
      "dataType": "string"
    },
    
    {
      "name": "title",
      "type": "TextInput",
      "title": "Title",
      "inputType": "text",
      "placeholder": "Enter phone number",
      "dataType": "number"
    },
    {
      "name": "first_name",
      "type": "TextInput",
      "title": "First name",
      "inputType": "text",
      "placeholder": "Enter first name",
      "dataType": "string"
    },
    {
      "name": "middle_name",
      "type": "TextInput",
      "title": "Middle name",
      "inputType": "text",
      "placeholder": "Enter middle name",
      "dataType": "string"
    },
    {
      "name": "last_name",
      "type": "TextInput",
      "title": "Last name",
      "inputType": "text",
      "placeholder": "Enter middle name",
      "dataType": "string"
    },
    {
      "name": "salutation",
      "type": "dropdown",
      "title": "Salutation",
      "inputType": "text",
      "placeholder": "---none---",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "Mr." },
        { "value": "america/toronto", "label": "Ms." },
        { "value": "america/toronto", "label": "Dr." },
        { "value": "america/toronto", "label": "Prof" },
      ],
      "dataType": "string"
    },
    {
      "name": "gender",
      "type": "dropdown",
      "title": "Gender",
      "inputType": "text",
      "placeholder": "---none---",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "Male" },
        { "value": "america/toronto", "label": "Female" },
      ],
      "dataType": "string"
    },
    {
      "name": "owner",
      "type": "dropdown",
      "title": "Owner",
      "inputType": "text",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "Acer one" },
        { "value": "america/toronto", "label": "Adam Haro" },
        { "value": "america/toronto", "label": "Adobe user-A" },
        { "value": "america/toronto", "label": "Adobe user-B" },
      ],
      "dataType": "string"
    },
    {
      "name": "owner_type",
      "type": "dropdown",
      "title": "Owner Type",
      "inputType": "text",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "User" },
        { "value": "america/toronto", "label": "Team" },
      ],
      "dataType": "string"
    },
    {
      "name": "description",
      "type": "multilineInput",
      "title": "Description",
      "inputType": "text",
      "dataType": "string"
    },
    {
      "name": "anniversary",
      "type": "dateInput",
      "title": "Anniversary",
      "inputType": "date",
      "placeholder": "Select date",
      
    },
    
    {
      "name": "assistant_name",
      "type": "TextInput",
      "title": "Assistant name",
      "inputType": "text",
      "dataType": "string"
    },

    {
      "name": "account_source",
      "type": "dropdown",
      "title": "Account source",
      "inputType": "text",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "Advertisement" },
        { "value": "america/toronto", "label": "Partner" },
        { "value": "america/toronto", "label": "Web" },
        { "value": "america/toronto", "label": "Campaing" },
      ],
      "dataType": "string"
    },

    {
      "name": "parent_account",
      "type": "TextInput",
      "title": "Parent Account",
      "inputType": "text",
      "dataType": "string"
    },
    
  
  ]
}



export const OpportunityData= {
  "elements": [
    {
      "name": "account_name",
      "type": "TextInput",
      "title": "Account name",
      "inputType": "text",
      "placeholder": "Enter a/c name",
      "dataType": "string"
    },
    
    {
      "name": "ammount",
      "type": "TextInput",
      "title": "Ammount",
      "inputType": "text",
      "placeholder": "Enter ammount",
      "dataType": "number"
    },
    {
      "name": "close_date",
      "type": "dateInput",
      "title": "Close Date",
      "inputType": "date",
      "placeholder": "Select date",
      
    },
    {
      "name": "description",
      "type": "multilineInput",
      "title": "Description",
      "inputType": "text",
      "dataType": "string"
    },
    {
      "name": "stage",
      "type": "TextInput",
      "title": "Stage",
      "inputType": "text",
      "placeholder": "New",
      "dataType": "string"
    },
    {
      "name": "source",
      "type": "dropdown",
      "title": "Source",
      "inputType": "text",
      "placeholder": "---none---",
      "dropdownData": [
        { "value": "Asia/taipei", "label": "Direct" },
        { "value": "america/toronto", "label": "Marketing" },
        { "value": "america/toronto", "label": "Social Media Campaign" },
        { "value": "america/toronto", "label": "Referral Program" },
        { "value": "america/toronto", "label": "Email Newsletter" },

      ],
      "dataType": "string"
    },

    {
      "name": "owner",
      "type": "TextInput",
      "title": "Owner",
      "inputType": "text",
      "placeholder": "User",
      "value" :'User',
      "dataType": "string"
    },

    {
      "name": "probability",
      "type": "TextInput",
      "title": "Probability",
      "inputType": "text",
      "placeholder": "Enter probability (0-100%)",
      "dataType": "percentage"
    }
    
  ]
}


