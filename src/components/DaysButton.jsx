import styled from "styled-components";
import Colors from "../constants/colors";

const week = ["D","S","T","Q","Q","S","S"];

const Days = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    color: ${prop=>prop.$selected?Colors.create.Background:Colors.create.Caption};
    background-color: ${prop=>prop.$selected?Colors.create.Caption:Colors.create.Background};
`;

//exports the day button and the list of characters in it
export {week,Days,Day}