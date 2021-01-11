import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {setVocabulary} from '../features/vocabulary/vocabularySlice';
import {setGeneratedWord, setWordBeforeVisitingVocabularies} from '../features/wordsSlice';
export const VocabularyContext = React.createContext();

// refactor
export const VocabularyProvider = (props) => {

    
    const dispatch = useDispatch();
    const vocabulary = useSelector(state => state.vocabulary);
    const generatedWord = useSelector(state => state.words.generatedWord);


    const generateWord = (event) => {
        const chosenVocabulary = event.target.getAttribute("data-vocabulary") || vocabulary;
        dispatch(setVocabulary(chosenVocabulary));
        dispatch(setWordBeforeVisitingVocabularies(generatedWord));
        console.log(vocabulary)
        let word;
        switch (chosenVocabulary) {
            case "English":
                word = require('random-words')();
                break;
            case "German":
                word = require('random-noun-generator-german')();
                break;
            default:
                word = "apple";
                break;
        }
        dispatch(setGeneratedWord(word)); 
    }

    return (
        <VocabularyContext.Provider value={{
            generateWord,
            vocabulary
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};