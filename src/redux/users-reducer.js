const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Aleshka",
      status: "I am boss" ,
      followed:true ,
      location: { city: "Samara", country: "Russia" },
    },
    {
      id: 2,
      fullName: "Sergey",
      status: "NO! I am boss" ,
      followed:true ,
      location: { city: "Samara", country: "Russia" },
    },
    {
      id: 3,
      fullName: "Antoshka",
      status: "NO!! NO!! I am boss" ,
      followed:false ,
      location: { city: "Sankt-Peterburg", country: "Russia" },
    },

    {
      id: 4,
      fullName: "Andrey",
      status: "I am fish" ,
      followed:false ,
      location: { city: "Saransk", country: "Russia" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const followAc = () => ({type:FOLLOW})
export const unfollowAc = () => ({type:UNFOLLOW})

export default usersReducer;
