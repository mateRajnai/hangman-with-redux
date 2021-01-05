import React from 'react'
import styled from "styled-components";
import Drawing from './Drawing';
import WrongLetters from './letters/WrongLetters';
import CorrectLetters from './letters/CorrectLetters';
import GuessedLetter from './letters/GuessedLetter';
import GameEndingFeedback from './GameEndingFeedback';

const Game = () => {
    return (
        <GameContainer id="game-container" className="styled-div">
            <FirstSubContainerVertically id="first-sub-container-vertically" className="styled-div">
                <WrongLetters/>
                <Drawing/>
            </FirstSubContainerVertically>
            <SecondSubContainerVertically id="second-sub-container-vertically" className="styled-div">
                <GuessedLetter/>
                <CorrectLetters/>
            </SecondSubContainerVertically>
            <GameEndingFeedback/>
        </GameContainer>
    );
}

export default Game;

const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #383961;
`;

const FirstSubContainerVertically = styled.div`
    flex: 7;
    display: flex;
    flex-direction: column;
    
    @media screen and (min-width: 992px) {
        flex-direction: row-reverse;
    }
`;

const SecondSubContainerVertically = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
`;