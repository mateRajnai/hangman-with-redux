import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    generatedWord: "banana",
    wordBeforeVisitingVocabularies: "banana"
}

const wordsSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
        setGeneratedWord(state, action) {
            console.log(action)
            state.generatedWord = action.payload;
            // return state;
        },
        setWordBeforeVisitingVocabularies(state, action) {
            state.wordBeforeVisitingVocabularies = action.payload;
            // return state;
        }
    }
})

export const { setGeneratedWord, setWordBeforeVisitingVocabularies } = wordsSlice.actions

export default wordsSlice.reducer;