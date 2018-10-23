export default {
  'parents': [
    {
      'id': 1,
      'first_name': 'Иван',
      'last_name': 'Рюрикович',
      'middle_name': 'Васильевич',
      'birth': '25.08.1530',
      'death': '18.03.1584',
      'photo': '/fixtures/ivan.jpg'
    },
    {
      'id': 2,
      'first_name': 'Марфа',
      'last_name': 'Собакина',
      'middle_name': 'Васильевна',
      'birth': null,
      'death': '13.11.1571',
      'photo': '/fixtures/marfa.jpeg'
    },
  ],
  'childs': [
    {
      'parents': [
        {
          'id': 3,
          'first_name': 'Иван',
          'last_name': 'Рюрикович',
          'middle_name': 'Васильевич',
          'birth': '25.08.1530',
          'death': null,
          'photo': '/fixtures/ivan.jpg'
        },
        {
          'id': 4,
          'first_name': 'Марфа',
          'last_name': 'Собакина',
          'middle_name': 'Васильевна',
          'birth': null,
          'death': '13.11.1571',
          'photo': '/fixtures/marfa.jpeg'
        },
      ]
    }
  ]
};