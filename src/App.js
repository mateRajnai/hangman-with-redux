import './App.css';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Content from './components/Content';
import {VocabularyProvider} from "./context/VocabularyContext"
import { GameStatusProvider } from './context/GameStatusContext';
import { DrawingProvider } from './context/DrawingContext';
import {LettersProvider} from "./context/LettersContext"

function App() {
  return (
      <StyleWrapper id="App">
        <BrowserRouter>
            <VocabularyProvider>
              <GameStatusProvider>
                <DrawingProvider>
                  <LettersProvider>
                    <Header/>
                    <Content/>
                  </LettersProvider>
                </DrawingProvider>
              </GameStatusProvider>
            </VocabularyProvider>
        </BrowserRouter>
      </StyleWrapper>
  );
};

export default App;

const StyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #383961;
`;