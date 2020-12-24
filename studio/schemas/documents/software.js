export default {
  name: 'software',
  type: 'document',
  title: 'Software',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'level',
      type: 'string',
      title: 'Skill Level',
      options: {
        list: [
          {title: 'Familiar', value: 'Familiar'},
          {title: 'Comfortable', value: 'Comfortable'},
          {title: 'Proficient', value: 'Proficient'}
        ]
      }
    }
  ]
}
