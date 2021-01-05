import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {LettersContext} from '../../context/LettersContext';

const GuessedLetter = () => {

    const [letter, setLetter] = useState("");
    const {checkGuessedLetterWasAlreadyGuessed} = useContext(LettersContext);

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
