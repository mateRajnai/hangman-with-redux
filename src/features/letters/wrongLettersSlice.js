import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const wrongLettersSlice = createSlice({
    name: 'wrongLetters',
    initialState,
    reducers: {
        setWrongLetters(state, action) {
            state = action.payload;
            return state;
        }
    }
})

export const {} = wrongLettersSlice.actions;

export default wrongLettersSlice.reducer;