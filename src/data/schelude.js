import _ from 'lodash'
import activities from './activities';

export default {
  friday: [
    {
      name: 'Registrace',
      time: '17:00 - 20:00',
      location: 'Stojanov - recepce',
      icon: 'heart'
    },
    {
      name: 'Večeře',
      time: '18:30 - 19:30',
      location: 'Stojanov - jídelna',
      icon: 'restaurant',
    },
    {
      name: 'Zahájení, mše',
      time: '20:00 - 21:00 ',
      location: 'Stojanov - kaple',
      icon: 'heart'
    },
    {
      name: 'BLOK 0',
      time: '21:00 - 2x:00 ',
      location: 'Stojanov - kaple; Čajovna',
      activities: _.filter(activities, ['block', 0]),
      icon: 'list-box'
    }
  ],
  saturday: [
    {
      name: 'Rozcvička / ranní běh',
      time: '7:30',
      location: 'venku'
    }, {
      name: 'Modlitba',
      time: '07:45 - 08:00',
      location: 'Stojanov - kaple'
    }, {
      name: 'Snídaně',
      time: '08:00 - 08:45',
      location: 'Stojanov - jídelna'
    }, {
      name: 'BLOK 1',
      time: '09:00 - 10:30',
      location: 'Velehrad',
      icon: 'list-box',
      activities: _.filter(activities, ['block', 1])
    },
    {
      name: 'BLOK 2',
      time: '10:50 - 12:20',
      location: 'Velehrad',
      icon: 'list-box',
      activities: _.filter(activities, ['block', 2])
    },
    {
      name: 'Anděl Páně',
      time: '12:20 - 12:40',
      location: 'U kříže',
      icon: 'heart'
    },
    {
      name: 'Oběd',
      time: '12:40 - 13:40',
      location: 'Stojanov - jídelna'
    }, {
      name: 'Zpovědi, volčas. aktivity, atd.',
      time: '13:40 - 15:00',
      location: 'Velehrad',
      activities: _.filter(activities, ['block', 7])
    }, {
      name: 'Mše svatá',
      time: '15:00 - 16:00',
      location: 'Bazilika'
    }, {
      name: 'BLOK 3',
      time: '16:30 - 18:00',
      location: 'Velehrad',
      activities: _.filter(activities, ['block', 3])
    }, {
      name: 'Večeře',
      time: '18:30 - 19:30',
      location: 'Stojanov jídelna'
    }, {
      name: 'Zpovědi, duchovní rozhovory',
      time: '19:00 - 20:00',
      location: '',
      icon: 'heart'
    }, {
      name: 'Zkouška na Zpěvy Taizé',
      time: '19:00 - 20:00',
      location: 'Zasedačka 2.patro',
    }, {
      name: 'Setkání regionů',
      time: '19:30 - 20:00',
      location: 'sklep Gymnázium',
      icon: 'heart'
    }, {
      name: 'BLOK 4',
      time: '20:00 - 2x:00',
      location: 'Velehrad',
      activities: _.filter(activities, ['block', 4])
    }
  ],
  sunday: [
    {
      name: 'Rozcvička / ranní běh',
      time: '7:30',
      location: 'venku'
    }, {
      name: 'Modlitba',
      time: '07:45 - 08:00',
      location: 'Stojanov - kaple'
    }, {
      name: 'Snídaně',
      time: '08:00 - 08:45',
      location: 'Stojanov - jídelna'
    }, {
      name: 'Zpovědi, duchovní rozhovory',
      time: '8:30 - 11:20',
      location: 'Stojanov - kaple',
    }, {
      name: 'BLOK 5',
      time: '09:00 - 10:30',
      location: 'Velehrad',
      icon: 'list-box',
      activities: _.filter(activities, ['block', 5])
    },
    {
      name: 'BLOK 6',
      time: '09:00 - 10:30',
      location: 'Velehrad',
      icon: 'list-box',
      activities: _.filter(activities, ['block', 6])
    },{
      name: 'Oběd',
      time: '11:40 - 12:40',
      location: 'Stojanov - jídelna'
    },{
      name: 'Mše svatá, zakončení',
      time: '13:00 - 14:30',
      location: 'Bazilika'
    },
  ]
}