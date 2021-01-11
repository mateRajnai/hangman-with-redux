import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCorrectLetters} from '../features/letters/correctLettersSlice';
import {addWrongLetter, clearWrongLetters} from '../features/letters/wrongLettersSlice';
import {setIsLastlyGuessedLetterWrong} from '../features/letters/isLastlyGuessedLetterWrongSlice';

export const LettersContext = React.createContext();

export const LettersProvider = (props) => {

    const generatedWord = useSelector(state => state.words.generatedWord);
    const correctLetters = useSelector(state => state.correctLetters);
    const wrongLetters = useSelector(state => state.wrongLetters);
    const isLastlyGuessedLetterWrong = useSelector(state => state.isLastlyGuessedLetterWrong)
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(setCorrectLetters(createArrayContainingNullsWithLengthOf(generatedWord.length)));
        dispatch(clearWrongLetters());
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
            // checkGuessedLetterWasAlreadyGuessed,
            correctLetters,
            wrongLetters,
            // isLastlyGuessedLetterWrong,
            setIsLastlyGuessedLetterWrong
        }} >
            {props.children}
        </LettersContext.Provider>
    );
};
