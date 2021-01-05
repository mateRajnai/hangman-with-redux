import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import {LettersContext} from '../../context/LettersContext';
import {GameStatusContext} from '../../context/GameStatusContext';
import CorrectLetter from './CorrectLetter';

const CorrectLetters = () => {

    const {correctLetters} = useContext(LettersContext);
    const {setIsEndOfGame, setIsPlayerWon} = useContext(GameStatusContext);

    useEffect(() => {
        if (!correctLetters.includes(null) && correctLetters.length !== 0) {
            setIsEndOfGame(true);
            setIsPlayerWon(true);
        }
    }, [correctLetters, setIsEndOfGame, setIsPlayerWon])    
    

    return (
    <StyleWrapper id="correct-letters" className="styled-div">
        {correctLetters.map(letter => 
            <CorrectLetter key={uuidv4()} letter={letter}/> 
            )}  
    </StyleWrapper>
    )
}

export default CorrectLetters;

const StyleWrapper = styled.div`
    flex: 4;
    display: flex;
    justify-content: center;
    align-items: center;
`;