import {createSlice} from '@reduxjs/toolkit'


const initialState = "English";

const vocabularySlice = createSlice({
    name: 'vocabulary',
    initialState,
    reducers: {
        // chooseVocab
        setVocabulary(state, action) {
            state = action.payload;
            return state
        }
    }
})

export const {setVocabulary} = vocabularySlice.actions;
export default vocabularySlice.reducer;