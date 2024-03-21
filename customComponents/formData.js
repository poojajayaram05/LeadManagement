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

export const meetingItems = {
  elements: [
    {
      id: '1',
      title: 'Lead Meeting',
      organizer: 'Jane Smith',
      status: 'Confirmed',
      description: 'New lead with potential customers.',
      location: 'Bangalore',
      timezone: 'UTC-5',
      from: 'all day',
      to: 'all day',
      all_day: 'yes',
    },
    {
      id: '2',
      title: 'Lead follow-up',
      organizer: 'John Steve',
      status: 'Confirmed',
      description: 'High demand lead looking for property at headquarters.',
      location: 'Chennai',
      timezone: 'UTC+0',
      from: '2024-03-20T09:00:00',
      to: '2024-03-20T17:00:00',
      all_day: 'no',
    },
  ],
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



