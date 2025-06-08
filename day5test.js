const potentialMatch = [
    {
        id: 1,
        name: "abdul",
        gender: "male",
        age: 23,
        maritalStatus: "Single",
        location: {
            permanentLocation: { city: "Kathmandu", country: "Nepal" },
            currentLocation: { city: "Lalitpur", country: "Nepal" },
        },
    },
    {
        id: 2,
        name: "saradha",
        gender: "female",
        age: 22,
        maritalStatus: "Single",
        location: {
            permanentLocation: { city: "Nawalpur", country: "Nepal" },
            currentLocation: { city: "Texas", country: "USA" },
        },
    },

    {
        id: 3,
        name: "sumit",
        gender: "male",
        age: 30,
        maritalStatus: "Single",
        partnerName: "susmita",
        location: {
            permanentLocation: { city: "Kathmandu", country: "Nepal" },
            currentLocation: { city: "Lalitpur", country: "Nepal" },
        },
    },
];

const shadiwebAPIresp = {
    status: 200,
    message: "Data fetched successfully",
    data: potentialMatch,
};

const getMyPerfectMatch = () => {
    if (shadiwebAPIresp.status === 200) {
        // let perfectMatch = [];
        shadiwebAPIresp.data.map((candidate) => {
            const { gender, age, maritalStatus, location } = candidate;
            const myRequirements =
                (gender === "female" && maritalStatus === "Single") || age >= 20;

            if (myRequirements) {
                location.currentLocation.country === "USA"
                    ? console.log(`My Perfect Match is ${candidate.name}, who is ${age} years old, 
    currently living in ${location.currentLocation.country}, ${location.currentLocation.country}.`)
                    : console.log("Keep Searching for a perfect match!");
            }
        });
    }
};
getMyPerfectMatch();