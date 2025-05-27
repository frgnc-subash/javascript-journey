// const fname = "Marcel"
// const lname = "Shelby"

// const addName = () => {
//   return `${fname} ${lname}`
// }
// console.log(addName())


// const arr1 = [-3,-2,-1]

// const arr2 = [0,1,2,3]
// const addArray = () =>{

//   const result = [...arr1...arr2...]
//   return result
// }

// const addArray = () =>[...arr1,...arr2...]

// console.log(addArray())



const userData = {

  name: "Marcel Shelby",
  email: "marcel123@cps.edu.np",
  phone: 123,
  hasPassedOut: false,
  occupation: undefined,

}

const apiResponse = {
  status: 404,
  message: "not found",
  data: {}

}

const thisIsFinalUserData = {}
const populateData = ()=> {
if(apiResponse.status ===200 && apiResponse.data){
  thisIsFinalUserData = apiResponse.data
}
else{
  thisIsFinalUserData = userData
}

}

// console.log(0||"Its not falsy.")
// filtering falsy value
// const filterFalsyValue = () => {
//   let finalUserData = {}
//   for (let key in userData) {

//     if (userData[key]) {
//       finalUserData = { ...finalUserData, [key]: userData[key] }
//     }

//   }
//   return finalUserData
// }
// console.log(filterFalsyValue())



//filtering truthy values
// const filterTruthyValue = () => {
//   let finalUserData = {}
//   for (let key in userData) {

//     if (!userData[key]) {
//       finalUserData = { ...finalUserData, [key]: userData[key] }
//     }

//   }
//   return finalUserData
// }
// console.log(filterTruthyValue())


