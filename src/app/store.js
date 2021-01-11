import { configureStore } from '@reduxjs/toolkit'
import vocabularyReducer from '../features/vocabulary/vocabularySlice';
import wordsReducer from '../features/wordsSlice';
import gameStatusReducer from '../features/gameStatusSlice';
import correctLettersReducer from '../features/letters/correctLettersSlice';
import wrongLettersReducer from '../features/letters/wrongLettersSlice';
import lastlyGuessedLetterReducer from '../features/letters/isLastlyGuessedLetterWrongSlice';
export default configureStore({
    reducer: {
        vocabulary: vocabularyReducer,
        words: wordsReducer,
        gameStatus: gameStatusReducer,
        correctLetters: correctLettersReducer,
        wrongLetters: wrongLettersReducer,
        lastlyGuessedLetter: lastlyGuessedLetterReducer
    }
})