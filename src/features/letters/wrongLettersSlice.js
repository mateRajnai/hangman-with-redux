import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const wrongLettersSlice = createSlice({
    name: 'wrongLetters',
    initialState,
    reducers: {
        addWrongLetter(state, action) {
            state.push(action.payload);
        },
        clearWrongLetters(state) {
            state = [];
            return state;
        }
    }
})

export const {addWrongLetter, clearWrongLetters} = wrongLettersSlice.actions;

export default wrongLettersSlice.reducer;