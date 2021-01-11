import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isPlayerWon: false,
    isEndOfGame: false
}

const gameStatusSlice = createSlice({
    name: 'gameStatus',
    initialState,
    reducers: {
        setIsPlayerWon(state, action) {
            state.isPlayerWon = action.payload;
            // return state;
        },
        setIsEndOfGame(state, action) {
            state.isEndOfGame = action.payload;
            // return state;
        }
    }
})

export const {setIsPlayerWon, setIsEndOfGame} = gameStatusSlice.actions;
export default gameStatusSlice.reducer;  