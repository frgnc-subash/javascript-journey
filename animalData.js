const animalData = {
  data: [
    {
      id: 1,
      name: "dog",
      foods: ["bones", "pedegree", "organs"],
      dailyamountSpend: 100,
    },
    {
      id: 2,
      name: "cat",
      foods: ["milk", "fish", "meat"],
      dailyamountSpend: 200,
    },

    {
      id: 3,
      name: "turtle",
      foods: ["veggie", "beans", "carrot"],
      dailyamountSpend: 90.33333333333333337,
    },
  ],
};

const customerAPIresponse = {
  status: 200,
  msg: " This API call is successful.",
  data: animalData,
};


const getProductNum = () => {
  if (customerAPIresponse.status === 200) {
    let productNumbers = {};
    customerAPIresponse.data.data.forEach((animal) => {
      animal.foods.forEach((food) => {
        if(productNumbers[food]) {
          productNumbers[food] += 1;
        } 
        else {
          productNumbers[food] = 1;
        }
      });
    });
    return productNumbers;
  }
};
console.log(getProductNum());



// const getProductNum = () => {
//   if (customerAPIresp.status === 200) {
//     let productNumbers = {};
//     customerAPIresp.data.forEach((customer) => {
//       customer.bought.map((item) => {
//         if (productNumbers[item.name]) {
//           productNumbers[item.name] += 1;
//         } else {
//           productNumbers[item.name] = 1;
//         }
//       });
//     });
//     return productNumbers;
//   }
// };
