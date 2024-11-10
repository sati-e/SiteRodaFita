import styled from "styled-components";
import "../../../index.css";
import "../../../fonts/teutonic3.ttf";
import "../../../fonts/photographSignature.ttf";

export const StyleUpper = styled.div`
    & .FullHeader{
    padding-top:3%;
    padding-left: 3%;
    padding-right:3%;
    }

    
    & .Title {
        font-family: teutonic3;
        font-size: 96px;
    }
    & .SubTitle{
        color: #A90F0F;
        font-size: 48px;
        font-family: photographSignature
    }
`;