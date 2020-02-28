import types from '~/data/vinTypes';

let posters = [
  {
    name: "Greetings Card (Single)",
    size: "A5",
    dimensions: '8.3" x 5.8"',
    type: types.CARD,
    price: 5.0
  },
  {
    name: "Greetings Card (Pack of 4)",
    size: "A5",
    dimensions: '8.3" x 5.8"',
    type: types.CARD,
    price: 16
  },
  {
    name: "Canvas Custom",
    size: "Custom",
    dimensions: "24in x 16in",
    type: types.CANVAS,
    price: 50
  },
  {
    name: "Poster A3",
    size: "A3",
    dimensions: "16in x 12in",
    type: types.POSTER,
    price: 50
  }
];

export default posters;
