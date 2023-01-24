export default {
    name: 'comment',
    type: 'document',
      title: 'Comment',
    fields: [
      {
        name: 'postedby',
        type: 'postedBy',
        title: 'posted By'
      },
      {
        name:'comment',
        type:'string',
        title:'Comment'
      }
    ]
  }