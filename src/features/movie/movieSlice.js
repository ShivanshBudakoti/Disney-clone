import { createSlice } from "@reduxjs/toolkit";
const initialState={
    recommend:null,
    newDisney:null,
    originals:null,
    trending:null,
};
const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommend=action.payload.recommend;
            state.newDisney=action.payload.newDisney;
            state.originals=action.payload.originals;
            state.trending=action.payload.trending;
        }
    }
});
export const {setMovies}=movieSlice.actions;
export const selectrecommend=state=>state.movie.recommend;
export const selectnewDisney=state=>state.movie.newDisney;
export const selectoriginal=state=>state.movie.originals;
export const selecttrending=state=>state.movie.trending;

export default movieSlice.reducer