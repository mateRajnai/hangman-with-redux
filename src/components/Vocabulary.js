import React, {useContext, useEffect} from 'react';
import {VocabularyContext} from '../context/VocabularyContext';
import styled from 'styled-components';
import englishFlag from '../images/english_flag.png';
import germanFlag from '../images/german_flag.png';

const Vocabulary = () => {

    const {generateWord, generatedWord, vocabulary, 
        setWordBeforeVisitingVocabularies} = useContext(VocabularyContext);

    useEffect(() => {
        setWordBeforeVisitingVocabularies(generatedWord);
    }, [])


    useEffect(() => {
    }, [vocabulary])

    return (
        <StyleWrapper>
            <div id="chosen-vocabulary" className="vocabulary-container">
                <h2>Chosen vocabulary: {vocabulary}</h2>
            </div>
            <div id="available-vocabularies" className="vocabulary-container">
                <h2>Available vocabularies:</h2>
                <button type="button" className="flag-button"  onClick={generateWord}>
                    <StyledFlag src={englishFlag} alt="English vocabulary" data-vocabulary="English"></StyledFlag>
                </button>
                <button type="button" className="flag-button" onClick={generateWord}>
                    <StyledFlag src={germanFlag} alt="German vocabulary" data-vocabulary="German"></StyledFlag>
                </button>
            </div>
        </StyleWrapper>
    );
};

export default Vocabulary;


const StyledFlag = styled.img`
    width: 160px;
    height: 80px;
    cursor: pointer;
    border: 0;

    @media screen and (min-width: 768px) {
        
    }
`;

const StyleWrapper = styled.div`
    width: 100%;
    background-color: #383961;
    display: flex;
    flex-direction: column;

    .vocabulary-container {
        margin: 5%;
    }

    h2 {
        margin-top: 5%;
    }

    #available-vocabularies {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    
    @media screen and (min-width: 540px) {
        font-size: 120%;
        .vocabulary-container {
            margin: 5%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }    
    
    @media screen and (min-width: 992px) {
        font-size: 150%;
        .vocabulary-container {
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`;
