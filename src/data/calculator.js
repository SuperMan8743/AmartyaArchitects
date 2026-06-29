const calculator = {
  title: "Instant Cost Calculator",

  description:
    "Estimate the approximate construction cost of your residential or commercial project in under a minute. Simply choose your project type, enter the built-up area, and receive an instant budget estimate prepared using our standard pricing model.",

  whatsappNumber: "918743993982",

  categories: [
    {
      id: 1,
      label: "Residential",
      value: "residential",
      rates: [
        {
          min: 50,
          max: 1000,
          price: 150,
        },
        {
          min: 1001,
          max: 4000,
          price: 120,
        },
        {
          min: 4001,
          max: 999999,
          price: 100,
        },
      ],
    },
    {
      id: 2,
      label: "Commercial Office",
      value: "office",
      rates: [
        {
          min: 50,
          max: 1500,
          price: 150,
        },
        {
          min: 1501,
          max: 4000,
          price: 120,
        },
        {
          min: 4001,
          max: 999999,
          price: 100,
        },
      ],
    },
    {
      id: 3,
      label: "Commercial Retail",
      value: "retail",
      rates: [
        {
          min: 1,
          max: 400,
          price: 250,
        },
        {
          min: 401,
          max: 1500,
          price: 200,
        },
      ],
    },
  ],
};

export default calculator;