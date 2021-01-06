import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {setVocabulary} from '../features/vocabulary/vocabularySlice';
export const VocabularyContext = React.createContext();

export const VocabularyProvider = (props) => {

    // const [vocabulary, setVocabulary] = useState("English");
    const [generatedWord, setGeneratedWord] = useState(require('random-words')());
    const [wordBeforeVisitingVocabularies, setWordBeforeVisitingVocabularies] = useState();
    
    const dispatch = useDispatch();
    const vocabulary = useSelector(state => state.vocabulary)

    const generateWord = (event) => {
        const chosenVocabulary = event.target.getAttribute("data-vocabulary") || vocabulary;
        dispatch(setVocabulary(chosenVocabulary));
        console.log(vocabulary)
        let generatedWord;
        switch (chosenVocabulary) {
            case "English":
                generatedWord = require('random-words')();
                break;
            case "German":
                generatedWord = require('random-noun-generator-german')();
                break;
            default:
                generatedWord = "apple";
                break;
        }
        setGeneratedWord(generatedWord); 
    }

    return (
        <VocabularyContext.Provider value={{
            generateWord,
            generatedWord,
            vocabulary,
            wordBeforeVisitingVocabularies, 
            setWordBeforeVisitingVocabularies
        }}>
            {props.children}
        </VocabularyContext.Provider>
    );
};