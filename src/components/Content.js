import React from 'react';
import { Route } from "react-router-dom";
import styled from "styled-components";
import Game from "./Game";
import Vocabulary from "./Vocabulary";

const Content = () => {
    return (
        <StyleWrapper>
            <Route
                path={"/"}
                exact
                component={Game}
            />
            <Route
                path={"/vocabulary"}
                exact
                component={Vocabulary}
            />
        </StyleWrapper>

    );
};

export default Content;

const StyleWrapper = styled.div`
    flex: 20;
    display: flex;
`;
