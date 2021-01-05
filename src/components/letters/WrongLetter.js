import React from 'react';
import styled from 'styled-components';

const WrongLetter = (props) => {
    return (
        <StyleWrapper>
            {props.letter},
        </StyleWrapper>
    );
};

export default WrongLetter;

const StyleWrapper = styled.div`
    color: white;
    margin: 2%;
    font-size: 150%;

    @media screen and (min-width: 540px) {
        font-size: 195%;
    }    
    
    @media screen and (min-width: 992px) {
        font-size: 270%;
    }
`;