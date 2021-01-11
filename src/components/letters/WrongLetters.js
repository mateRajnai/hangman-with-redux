import React, {useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components'
import WrongLetter from './WrongLetter';
import {useSelector, useDispatch} from 'react-redux';
import {clearWrongLetters} from '../../features/letters/wrongLettersSlice';

const WrongLetters = () => {

    const generatedWord = useSelector(state => state.words.generatedWord);
    const wrongLetters = useSelector(state => state.wrongLetters);

    const dispatch = useDispatch();

    useEffect(() => {   
        dispatch(clearWrongLetters());
    }, [generatedWord])

    return ( 
        <StyleWrapper id="wrong-letters" className="styled-div">
                {wrongLetters.map(letter => 
                    <WrongLetter key={uuidv4()} letter={letter}/>
                    )}    
        </StyleWrapper>
    );
};

export default WrongLetters;

const StyleWrapper = styled.div`
    flex: 2;
    height: 100%;
    display: flex;
    align-items: center;

    @media screen and (min-width: 992px) {
        flex: 3;
    }
`;