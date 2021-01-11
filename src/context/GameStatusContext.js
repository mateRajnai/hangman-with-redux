import React, {useState, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';
import {useSelector} from 'react-redux'
export const GameStatusContext = React.createContext();

export const GameStatusProvider = (props) => {

    const [isEndOfGame, setIsEndOfGame] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const generateWord = useSelector(state => state.words.generateWord);

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