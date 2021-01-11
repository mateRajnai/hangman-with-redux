import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {setCorrectLetters} from '../../features/letters/correctLettersSlice';
import {addWrongLetter} from '../../features/letters/wrongLettersSlice';
import {setIsLastlyGuessedLetterWrong} from '../../features/letters/isLastlyGuessedLetterWrongSlice';


const GuessedLetter = () => {

    const [letter, setLetter] = useState("");

// ------------------------------------------------------//
    const generatedWord = useSelector(state => state.words.generatedWord);
    const correctLetters = useSelector(state => state.correctLetters);
    const wrongLetters = useSelector(state => state.wrongLetters);
    const dispatch = useDispatch();

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
            dispatch(addWrongLetter(guessedLetter));
            dispatch(setIsLastlyGuessedLetterWrong(true));  
        } else {
            dispatch(setCorrectLetters(correctLettersToBeUpdated));
            dispatch(setIsLastlyGuessedLetterWrong(false));
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

    //-----------------------------------------------//

    return (
        <StyleWrapper id="guessed-letter" className="styled-div">
                <input  type="text" 
                        value={letter} 
                        onChange={e => setLetter(e.target.value)}></input>
                <button type="button" 
                        data-guessed-letter={letter} 
                        onClick={e => {
                                checkGuessedLetterWasAlreadyGuessed(e); 
                                setLetter("");
                                }} 
                        disabled={letter.length !== 1}>Guess letter!</button>
        </StyleWrapper>
    );
};
export default GuessedLetter;

const StyleWrapper = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;

    input {
        width: 16%;
        height: 80%;
        color: #383961;
    }

    button {
        width: 25%;
        height: 80%;
        color: #383961;
    }

    @media screen and (min-width: 540px) {
        input {
            width: 12%;
            height: 70%;
            color: #383961;
            font-size: 120%;
            text-align: center;
        }

        button {
            width: 16%;
            height: 70%;
            color: #383961;
            font-size: 90%;
        }
    }    
    
    @media screen and (min-width: 992px) {
        input {
            width: 4%;
            height: 70%;
            color: #383961;
            font-size: 140%;
            text-align: center;
        }

        button {
            width: 6%;
            height: 70%;
            color: #383961;
            font-size: 100%;
        }
    }
`;
