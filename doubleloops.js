const potentialMatch = [
  {
    id: 1,
    name: "abdul",
    gender: "male",
    age: 23,
    maritalStatus: "Single",
    location: [
      { city: "Kathmandu", country: "Nepal" },
      { city: "Lalitpur", country: "India" },
    ],
  },
  {
    id: 2,
    name: "saradha",
    gender: "female",
    age: 22,
    maritalStatus: "Single",
    location: [
      { city: "Nawalpur", country: "Nepal" },
      { city: "Texas", country: "USA" },
    ],
  },

  {
    id: 3,
    name: "sumit",
    gender: "male",
    age: 30,
    maritalStatus: "Single",
    partnerName: "susmita",
    location: [
      { city: "Kathmandu", country: "Nepal" },
      { city: "Lalitpur", country: "Nepal" },
    ],
  },
];

const shadiwebAPIresp = {
  status: 200,
  message: "Data fetched successfully",
  data: potentialMatch,
};


// This function returns the unique country names from the potential matches

// const getCountryNames = () => {
//   let countryNames = [];
//   shadiwebAPIresp.data.map((candidate) => {
//     candidate.location.map((loc) => {
//       countryNames.includes(loc.country)
//         ? null
//         : countryNames.push(loc.country);
//     });
//   });
//   return countryNames;
// };
// console.log(getCountryNames());


// This function returns the unique country names from the potential matches

// const getCountryNames = () => {
//   let countryNames = [];
//   shadiwebAPIresp.data.map((candidate) => {
//     candidate.location.map((loc) => {

//      countryNames.push(loc.country);
//     });
//   });
//   return [...new Set(countryNames)];
// };
// console.log(getCountryNames());


// This function returns the unique country names from the potential matches

const getCountryNames = () => {
  let countryNames = [];
  shadiwebAPIresp.data.map((candidate) => {
    candidate.location.map((loc) => {

     countryNames.push(loc.country);
    });
  });
  const result = countryNames.filter((country, index) => {

    return countryNames.indexOf(country) === index;
  });
  return result;
};
console.log(getCountryNames());



arr = [1,1,2,2,3,3,4,5,6,7]
const uniqueArr = arr.filter((num, index) => {
    return arr.indexOf(num) === index;
})
console.log(uniqueArr); 