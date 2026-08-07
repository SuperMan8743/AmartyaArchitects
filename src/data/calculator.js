const calculator = {

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