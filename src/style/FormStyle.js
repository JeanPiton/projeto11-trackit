import styled from "styled-components";
import Colors from "../constants/colors";

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 25px;

    img{
        margin-top: 68px;
    }
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
        ::placeholder{
            color: ${Colors.input.placeholder}
        }
        padding: 10px;
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

const A = styled.p`
    font-size: 14px;
    color:${Colors.link.color};
    text-decoration: underline;
`;

export {Div, Form, A};