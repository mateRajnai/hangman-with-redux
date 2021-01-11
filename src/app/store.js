import { configureStore } from '@reduxjs/toolkit'
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import wordsReducer from '../features/wordsSlice';
import gameStatusReducer from '../features/gameStatusSlice';
import correctLettersReducer from '../features/letters/correctLettersSlice';
export default configureStore({
    reducer: {
        vocabulary: vocabularyReducer,
        words: wordsReducer,
        gameStatus: gameStatusReducer,
        correctLetters: correctLettersReducer
    }
})