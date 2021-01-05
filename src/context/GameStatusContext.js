import React, {useState, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';
export const GameStatusContext = React.createContext();

export const GameStatusProvider = (props) => {

    const [isEndOfGame, setIsEndOfGame] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const {generateWord} = useContext(VocabularyContext);

    const startNewGame = (e) => {
        setIsEndOfGame(false);
        setIsPlayerWon(false);
        generateWord(e);
    }

    return (
        <GameStatusContext.Provider value={{
            isEndOfGame,
            setIsEndOfGame, 
            isPlayerWon, 
            setIsPlayerWon,
            startNewGame, 
        }}>
            {props.children}
        </GameStatusContext.Provider>
    );
};