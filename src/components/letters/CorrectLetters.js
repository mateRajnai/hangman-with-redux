import React, {useEffect} from 'react';
import styled from 'styled-components';
import {v4 as uuidv4} from 'uuid';
import CorrectLetter from './CorrectLetter';
import {setIsPlayerWon, setIsEndOfGame} from '../../features/gameStatusSlice';
import {useDispatch, useSelector} from 'react-redux';
import {setCorrectLetters} from '../../features/letters/correctLettersSlice';

const CorrectLetters = () => {

    const correctLetters = useSelector(state => state.correctLetters)
    const dispatch = useDispatch();
    const generatedWord = useSelector(state=> state.words.generatedWord);

    useEffect(() => {
        let array = [];
        for (let i = 0; i < generatedWord.length; i++) {
            array[i] = null;
        }
        dispatch(setCorrectLetters(array));
    }, [generatedWord])

    useEffect(() => {
        if (!correctLetters.includes(null) && correctLetters.length !== 0) {
            dispatch(setIsEndOfGame(true));
            dispatch(setIsPlayerWon(true));
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