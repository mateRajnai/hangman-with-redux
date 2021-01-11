import {createSlice} from '@reduxjs/toolkit';

const initialState = null;

const isLastlyGuessedLetterWrongSlice = createSlice({
    name: 'isLastlyGuessedLetterSlice',
    initialState,
    reducers: {
        setIsLastlyGuessedLetterWrong(state, action) {
            state = action.payload;
        }
    }
})

export const {setIsLastlyGuessedLetterWrong} = isLastlyGuessedLetterWrongSlice.actions;

export default isLastlyGuessedLetterWrongSlice.reducer;