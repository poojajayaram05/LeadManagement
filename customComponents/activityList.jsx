// ListItem.js
import React from 'react';
import { View, Text } from 'react-native';

// return section.fields.map((row, index) => (
//     <DataRow key={index} label={row.label} detail={lead[row.value]} />
//   ));

const ActivityList = ({values}) => {

    // const values = [
    //     {
    //       activity_type: 'task',
    //       all_day: 'false',
    //       appointment_notes: '',
    //       associated_lead: 'LEA0001015',
    //       attendees: '',
    //       date: '',
    //       description: 'This task is for lead management ',
    //       due_date: '2024-04-17',
    //       email: '',
    //       follow_up_notes: '',
    //       from_date: '',
    //       location: '',
    //       meeting_link: '',
    //       number: '',
    //       owner: [Object],
    //       remainder_before: '1970-01-01 08:00:00',
    //       remainder_required: 'false',
    //       repeat: 'dont_repeat',
    //       start_time: '1970-01-01 08:00:00',
    //       status: 'in_progress',
    //       subject: '',
    //       sys_created_by: 'lead.bhavani',
    //       sys_created_on: '2024-03-31 13:02:42',
    //       sys_id: '3fce2dd147558250e46cb70d416d430a',
    //       sys_mod_count: '3',
    //       sys_tags: '',
    //       sys_updated_by: 'bhavani',
    //       sys_updated_on: '2024-04-01 06:08:54',
    //       time: '05:30:00',
    //       time_zone: '',
    //       title: 'Lead task',
    //       to_date: ''
    //     }
    //   ]
    
       return values.map((item, index) => {

            return (
                <View>
                    <Text>{item.description}</Text>
                </View>

            )
        })
   
  
 }

export default ActivityList;
