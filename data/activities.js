// TODO: add all parameters for speakers and find way how to show it
import _ from 'lodash'
import speakers from './speakers'

function speakerByName(name) {
  return _.find(speakers, ['name', name])
}

export default [
  {
    id: 1,
    name: 'Life',
    speaker: speakerByName('Finn the Human'),
    time: 'Pátek 18:00',
    description: 'Sometimes life is scary and dark.',
    image: require('../assets/images/activities/activity1.png'),
    day: 1,
    block: 0,
    type: 0
  },
  {
    id: 3,
    name: 'Jake a dog and his voice',
    speaker: speakerByName('Jake a dog'),
    time: 'Pátek 20:00',
    description: 'Something weird might just be something familiar viewed from a different angle.',
    image: require('../assets/images/activities/activity2.png'),
    day: 2,
    block: 0,
    type: 1
  },
  {
    id: 2,
    name: 'Princess and prince - relationship in royal family',
    speaker: speakerByName('Princess'),
    time: 'Pátek 19:00',
    description: 'People get built different. We don\'t need to figure it out, we just need to respect it.',
    image: require('../assets/images/activities/activity3.png'),
    day: 1,
    block: 0,
    type: 2
  },

  {
    id: 4,
    name: 'Ice king speech',
    speaker: speakerByName('Ice king'),
    time: 'Pátek 21:00',
    description: 'Sucking at something is the first step towards being sorta good at something.',
    image: require('../assets/images/activities/activity1.png'),
    day: 3,
    block: 1,
    type: 2
  }
];