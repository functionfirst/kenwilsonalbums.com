import types from '~/data/types';

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
    name: "Poster A4",
    size: "A4",
    dimensions: '12" x 8"',
    type: types.POSTER,
    price: 15
  },
  {
    name: "Poster A3",
    size: "A3",
    dimensions: '16" x 12"',
    type: types.POSTER,
    price: 25
  },
  {
    name: "Framed A4",
    size: "A4",
    dimensions: '12" x 8"',
    type: types.FRAMED,
    price: 25
  },
  {
    name: "Framed A3",
    size: "A3",
    dimensions: '16" x 12"',
    type: types.FRAMED,
    price: 35
  },
  {
    name: "Canvas A3",
    size: "A3",
    dimensions: '16" x 12"',
    type: types.CANVAS,
    price: 50
  },
  {
    name: "Canvas A2",
    size: "A2",
    dimensions: '30" x 20"',
    type: types.CANVAS,
    price: 85
  }
];

let postage = [];

postage[types.CARD] = [
  {
    title: "UK/Europe",
    price: 2.5
  },
  {
    title: "Rest of the World",
    price: 9.0
  }
];

postage[types.POSTER] = [
  {
    title: "UK/Europe",
    price: 2.0
  },
  {
    title: "Rest of the World",
    price: 4.1
  }
];

postage[types.CANVAS] = [
  {
    title: "UK",
    price: 9
  },
  {
    title: "Europe",
    price: 14
  },
  {
    title: "Rest of the World",
    price: 20
  }
];

postage[types.FRAMED] = [
  {
    title: "UK",
    price: 9
  },
  {
    title: "Europe",
    price: 14
  },
  {
    title: "Rest of the World",
    price: 20
  }
];

export default posters;
