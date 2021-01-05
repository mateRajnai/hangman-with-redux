import React, {useState, useEffect, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const {generatedWord} = useContext(VocabularyContext);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [isLastlyGuessedLetterWrong, setIsLastlyGuessedLetterWrong] = useState();

    const checkGuessedLetterWasAlreadyGuessed = (e) => {
        const guessedLetter = e.target.getAttribute("data-guessed-letter");
        const isAlreadyGuessed = wrongLetters.includes(guessedLetter) || correctLetters.includes(guessedLetter);
        if (!isAlreadyGuessed) 
            saveGuessedLetter(guessedLetter);
    }

    const saveGuessedLetter = (guessedLetter) => {
        let correctLettersToBeUpdated = [...correctLetters];
        const guessedLetterIsWrong = updateCorrectLettersWhileSettingGuessedLetterIsWrong(
                                                                correctLettersToBeUpdated, 
                                                                guessedLetter);                                      
        if (guessedLetterIsWrong) {
            setWrongLetters([...wrongLetters, guessedLetter]);
            setIsLastlyGuessedLetterWrong(true);  
        } else {
            setCorrectLetters(correctLettersToBeUpdated);
            setIsLastlyGuessedLetterWrong(false);
        }
    }

    const updateCorrectLettersWhileSettingGuessedLetterIsWrong = (correctLettersToBeUpdated, guessedLetter) => {
        let guessedLetterIsWrong = true;
        for (let i = 0; i < generatedWord.length; i++) {
            if (generatedWord.charAt(i).toLowerCase() === guessedLetter) {
                correctLettersToBeUpdated[i] = generatedWord.charAt(i);
                guessedLetterIsWrong = false;
            }
        }
        return guessedLetterIsWrong;
    }

    useEffect(() => {
        setCorrectLetters(createArrayContainingNullsWithLengthOf(generatedWord.length));
        setWrongLetters([]);
    }, [generatedWord])

    const createArrayContainingNullsWithLengthOf = (length) => {
        let array = [];
        for (let i = 0; i < length; i++) {
            array[i] = null;
        }
        return array;
    }

    return (
        <LettersContext.Provider value={{
            checkGuessedLetterWasAlreadyGuessed,
            correctLetters,
            wrongLetters,
            isLastlyGuessedLetterWrong,
            setIsLastlyGuessedLetterWrong
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
