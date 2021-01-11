import { configureStore } from '@reduxjs/toolkit'
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import wordsReducer from '../features/wordsSlice';
import gameStatusReducer from '../features/gameStatusSlice';

export default configureStore({
    reducer: {
        vocabulary: vocabularyReducer,
        words: wordsReducer,
        gameStatus: gameStatusReducer
    }
})