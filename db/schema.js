// model/schema.js
import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'lead',
      columns: [
        { name: 'firstname', type: 'string' },
        { name: 'lastname', type: 'string', isOptional: true },
        { name: 'email', type: 'string' },
        { name: 'mobilephone', type: 'string' },
        { name: 'leadstatus', type: 'string' },
        { name: 'qualification', type: 'string' },
        { name: 'number', type: 'string'},
        { name: 'gender', type: 'string'}, 
        { name: 'email', type: 'string' },
        { name: 'mobilephone', type: 'string' },
        { name: 'leadstatus', type: 'string' },
        { name: 'qualification', type: 'string' },
        { name: 'number', type: 'string'},
        { name: 'gender', type: 'string'},
        

      ]
    }),
    tableSchema({
      name: 'comments',
      columns: [
        { name: 'body', type: 'string' },
        { name: 'post_id', type: 'string', isIndexed: true },
      ]
    }),
  ]
})