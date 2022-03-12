import { createSlice } from "@reduxjs/toolkit";
const initialState={
    name:null,
    email:"",
    photo:"/public/image/WhatsApp Image 2022-03-09 at 16.01.33.jpeg"
};
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserLoginDetails:(state,action)=>{
            state.name=action.payload.name
            state.email=action.payload.email;
            state.photo=action.payload.photo;
        },
        setSignOutState:(state)=>{
            state.email= null;
            state.name= null;
            state.photo= null;
        },
    },
});
export const {setSignOutState,setUserLoginDetails}=userSlice.actions;
export const selectUserName=(state)=>state.user.name;
export const selectUserEmail=(state)=>state.user.email;
export const selectUserPhoto=(state)=>state.user.photo;
//console.log(initialState.photo)
export default userSlice.reducer;