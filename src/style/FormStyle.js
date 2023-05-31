import styled from "styled-components";
import Colors from "../constants/colors";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;

    input{
        width: 303px;
        height: 45px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        background-color: ${Colors.input.Background};
        color: ${Colors.input.color};
    }

    button{
        width: 303px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${Colors.btn.Background};
        border-style: none;
        border-radius: 5px;
        color: ${Colors.btn.color};
    }
`;

const A = styled.a`
    color:${Colors.link.color};
    text-decoration: underline;
`;

export {Div, Form, A};