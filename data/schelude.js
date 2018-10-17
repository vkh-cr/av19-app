import _ from 'lodash'
import activities from './activities';

export default {
  friday: [
    {
      name: 'Večeře',
      time: '18:30 - 19:30',
      location: 'Stojanov'
    },
    {
      name: 'Zahájení, mše',
      time: '20:00 - 21:00 ',
      location: 'Stojanov - kaple'
    },
    {
      name: 'BLOK 0',
      time: '21:30 - 2x:00 ',
      location: 'Stojanov - kaple; Čajovna',
      activities: _.filter(activities, ['block', 0])
    }
  ],
  saturday: [
    {
      name: 'Rozcvička / ranní běh',
      time: '7:30',
      location: 'Velehrad'
    }, {
      name: 'Modlitba',
      time: '07:45 - 08:00',
      location: 'Stojanov - kaple'
    }, {
      name: 'Snídaně',
      time: '08:00 - 08:45',
      location: 'Stojanov'
    }, {
      name: 'BLOK 1',
      time: '09:00 - 10:40',
      location: 'Velehrad',
      activities: _.filter(activities, ['block', 1])
    }, {
      name: 'Mše svatá',
      time: '11:00 - 12:00',
      location: 'Katedrála'
    }, {
      name: 'Oběd',
      time: '12:30 - 13:30',
      location: 'Stojanov'
    }, {
      name: 'Zpovědi, volčas. aktivity, atd.',
      time: '13:30 - 14:25',
      location: 'Velehrad'
    }, {
      name: 'BLOK 2',
      time: '14:30 - 16:00',
      location: 'Velehrad',
      // activities: _.filter(activities, ['block', 2])
    }, {
      name: 'BLOK 3',
      time: '16:30 - 18:00',
      location: 'Velehrad',
      // activities: _.filter(activities, ['block', 3])
    }, {
      name: 'Večeře',
      time: '18:30 - 19:30',
      location: 'Stojanov'
    }, {
      name: 'BLOK 4',
      time: '20:00 - 2x:00',
      location: 'Velehrad',
      // activities: _.filter(activities, ['block', 3])
    }
  ]
}