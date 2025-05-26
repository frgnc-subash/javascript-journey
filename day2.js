

const userData = [
  { id: 1, name: "Alex", gender: "male", age: 20, occupation: undefined },
  { id: 2, name: "Brian", gender: "male", age: 22, occupation: undefined },
  { id: 3, name: "Cathy", gender: "female", age: 19, occupation:"doctor" },
  { id: 4, name: "Derek", gender: "male", age: 25, occupation: undefined },
  { id: 5, name: "Ella", gender: "female", age: 23, occupation: undefined },
  { id: 6, name: "Fiona", gender: "female", age: 21, occupation: "mechanics" }
];

const response = {
  status: 200,
  message: "User data fetched successfully.",
  data: userData,
};

const fetchUserName = () => {
  if (response.status === 200) {
    const result = response.data
    .filter((user)=> user.occupation || user.age >=20)
    .map((user) => user.name);
    return result;

  } else {
    const message = "API fetch failed.";
    return message
  }
};

console.log(fetchUserName());
