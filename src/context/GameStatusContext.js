import React, {useState, useContext} from 'react';
import {VocabularyContext} from './VocabularyContext';
import {useSelector, useDispatch} from 'react-redux';
import {setIsPlayerWon, setIsEndOfGame} from '../features/gameStatusSlice';
export const GameStatusContext = React.createContext();

export const GameStatusProvider = (props) => {

    // const [isEndOfGame, setIsEndOfGame] = useState(false);
    const isEndOfGame = useSelector(state => state.gameStatus.isEndOfGame);
    // const [isPlayerWon, setIsPlayerWon] = useState(false);
    const isPlayerWon = useSelector(state => state.gameStatus.isPlayerWon);

    const {generateWord} = useContext(VocabularyContext);

    const dispatch = useDispatch();

    const startNewGame = (e) => {
        dispatch(setIsEndOfGame(false));
        dispatch(setIsPlayerWon(false));
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