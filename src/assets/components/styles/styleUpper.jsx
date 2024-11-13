import styled from "styled-components";
import "../../../index.css";
import "../../../fonts/teutonic3.ttf";
import "../../../fonts/photographSignature.ttf";
import "../../../fonts/CrimsonText/CrimsonText-Regular.ttf";
import "../../../fonts/CrimsonText/CrimsonText-Bold.ttf";
import "../../../fonts/CrimsonText/CrimsonText-Italic.ttf";

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
        font-family: photographSignature;
        padding-left: 45%;
    }
    
    & .NavBar{
        border-top: 2px solid;
        margin-top: 1.5%;
        text-align: center;
        margin-top: solid;
    }

    & .NavButtons{
        margin-top:1%;
    }

    & .LinkStyle{

        font-size: 1.5em;
        padding-right: 5%;
        

        
    }


    & a:link{
        text-decoration: none;
    }
    & .NavSpan:hover{
        color:#FDF0D6;

        background-color: #A90F0F;
        padding: 0% 1% 0% 1%;
        border-radius: 3px;
    }
    

























`;