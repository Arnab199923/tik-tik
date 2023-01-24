export default {
    name: 'user',
    type: 'document',
      title: 'User',
    fields: [
      {
        name: 'username',
        type: 'string',
        title: 'User Name'
      },
      {
        name:'image',
        title:'Image',
        type:'string'
      }
    ]
  }