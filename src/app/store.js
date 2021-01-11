import { configureStore } from '@reduxjs/toolkit'
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import wordsReducer from '../features/wordsSlice';
import gameStatusReducer from '../features/gameStatusSlice';
import correctLettersReducer from '../features/letters/correctLettersSlice';
import wrongLettersReducer from '../features/letters/wrongLettersSlice';
import isLastlyGuessedLetterWrongReducer from '../features/letters/isLastlyGuessedLetterWrongSlice';
export default configureStore({
    reducer: {
        gameStatus: gameStatusReducer,
        vocabulary: vocabularyReducer,
        words: wordsReducer,
        correctLetters: correctLettersReducer,
        wrongLetters: wrongLettersReducer,
        isLastlyGuessedLetterWrong: isLastlyGuessedLetterWrongReducer
    }
})