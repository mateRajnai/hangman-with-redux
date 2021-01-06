import { configureStore } from '@reduxjs/toolkit'
import vocabularyReducer from '../features/vocabulary/vocabularySlice';

export default configureStore({
    reducer: {
        vocabulary: vocabularyReducer
    }
})