import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    letter: null,
    isWrong: null
};

const guessedLetterPropertiesSlice = createSlice({
    name: 'guessedLetterProperties',
    initialState,
    reducers: {
        saveGuessedLetter(state, action) {
            state.letter = action.payload;
        },

        setIsGuessedLetterWrong(state, action) {
            state.isWrong = action.payload;
        }
    }
})

export const {saveGuessedLetter, setIsGuessedLetterWrong} = guessedLetterPropertiesSlice.actions;

export default guessedLetterPropertiesSlice.reducer;