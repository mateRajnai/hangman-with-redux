import { configureStore } from '@reduxjs/toolkit'
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import wordsReducer from '../features/wordsSlice';

export default configureStore({
    reducer: {
        vocabulary: vocabularyReducer,
        words: wordsReducer
    }
})