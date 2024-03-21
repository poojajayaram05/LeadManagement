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


export const productFormData= {
  "elements": [
    {
      "name": "type",
      "type": "RadioButton",
      "title": "Type",
      "rdata": [
        { "value": 1, "label": "Product" },
        { "value": 2, "label": "Service" }
      ]
    },

    {
      "name": "category",
      "type": "dropdown",
      "title": "Category",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "Travel" },
        { "value": 2, "label": "Medical" },
        { "value": 3, "label": "Home" },
        { "value": 4, "label": "Pet" },
        { "value": 5, "label": "Life" }
      ]
    },
    {
      "name": "name",
      "type": "TextInput",
      "title": "Name",
      "inputType": "text",
      "placeholder":"Enter the name"
    },
    {
      "name": "description",
      "type": "TextInput",
      "title": "Description",
      "inputType": "text",
      "placeholder":"Enter the description"
    },
    {
      "name": "currency",
      "type": "dropdown",
      "title": "Currency",
      "inputType": "text",
      "placeholder":'Select',
      "dropdownData": [
        { "value": 1, "label": "INR" },
        { "value": 2, "label": "USD" }
      ]
    },
    {
      "name": "price",
      "type": "TextInput",
      "title": "Price",
      "placeholder":"enter value",
      
    },

    {
      "name": "code",
      "type": "TextInput",
      "title": "SAC Code",
      "inputType": "text",
      "placeholder":"Enter value"
    },
    {
      "name": "active",
      "type": "switch",
      "title": "active",
     
    },
    {
      "name": "images",
      "type": "imageUpload",
      "title": "Product Images",
      "placeholder":"upload picture images"
    },

  ]
}




