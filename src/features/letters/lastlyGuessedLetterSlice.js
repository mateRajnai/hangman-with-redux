import {createSlice} from '@reduxjs/toolkit';

const initialState = null;

const lastlyGuessedLetterSlice = createSlice({
    name: 'lastlyGuessedLetterSlice',
    initialState,
    reducers: {
        setIsLastlyGuessedLetterWrong(state, action) {
            state = action.payload;
        }
    }
})

export const {setIsLastlyGuessedLetterWrong} = lastlyGuessedLetterSlice.actions;

export default lastlyGuessedLetterSlice.reducer;