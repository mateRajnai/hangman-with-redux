import {createSlice} from '@reduxjs/toolkit';

const initialState = []; 

const correctLettersSlice = createSlice({
    name: 'correctLetters',
    initialState,
    reducers: {
        setCorrectLetters(state, action) {
            state = action.payload
            // return state
        }

    }


})

export const {setCorrectLetters} = correctLettersSlice.actions;
export default correctLettersSlice.reducer;