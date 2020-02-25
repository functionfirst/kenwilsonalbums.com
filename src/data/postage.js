import types from '~/data/types';

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

export default postage;
