import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    letter: null,
    isWrong: null
};

const guessedLetterPropertiesSlice = createSlice({
    name: 'guessedLetterProperties',
    initialState,
    reducers: {
        setIsGuessedLetterWrong(state, action) {
            state.isWrong = action.payload;
        }
    }
})

export const {setIsGuessedLetterWrong} = guessedLetterPropertiesSlice.actions;

export default guessedLetterPropertiesSlice.reducer;