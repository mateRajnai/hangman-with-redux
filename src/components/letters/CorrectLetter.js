import React from 'react';
import styled from 'styled-components';

const CorrectLetter = (props) => {
    return (
        <StyleWrapper className="correct-letter-container">
            <div className="correct-letter">
                {props.letter}
            </div>
        </StyleWrapper>
    );
};

export default CorrectLetter;


const StyleWrapper = styled.div`
    height: 25%;
    width: 4%;
    border-bottom: 5px solid white;
    margin: 2%;

    .correct-letter {
        font-size: 150%;
        width: 40%;
        color: white; 
    }

    @media screen and (min-width: 540px) {
        height: 35%;

        .correct-letter {
            font-size: 290%;
        }
    }    
    
    @media screen and (min-width: 992px) {
        height: 35%;

        .correct-letter {
            font-size: 340%;
        }
    }
`;