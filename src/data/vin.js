import types from '~/data/vinTypes';

let posters = [
  {
    name: 'White',
    swatch: '#fff',
    type: types.TSHIRT,
    price: 18,
  },
  {
    name: 'Grey',
    swatch: '#C8C8C8',
    type: types.TSHIRT,
    price: 18,
  },
  {
    name: 'Blue',
    swatch: '#94D4ED',
    type: types.TSHIRT,
    price: 18,
  },
  {
    name: 'Greetings Card (Single)',
    size: '8.3" x 5.8"',
    type: types.CARD,
    price: 5.0,
  },
  {
    name: 'Greetings Card (Pack of 4)',
    size: '8.3" x 5.8"',
    type: types.CARD,
    price: 16,
  },
  {
    name: 'Canvas Custom',
    size: '24in x 16in',
    type: types.CANVAS,
    price: 50,
  },
  {
    name: 'Poster A3',
    size: '16in x 12in',
    type: types.FRAMED,
    price: 35,
  },
];

export default posters;
