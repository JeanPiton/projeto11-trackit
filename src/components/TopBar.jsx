import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Colors from "../constants/colors";
import { useLocation } from "react-router-dom";
import Logo from "../img/logo-mini.svg";

export default function TopBar(){
    const {user} = useContext(UserContext);
    const location = useLocation();

    if(location.pathname=="/"||location.pathname=="/cadastro"){
        return;
    }

    return(
        <Div>
            <img className="Logo" src={Logo}/>
            <img src={user.image} />
        </Div>
    );
}

const Div = styled.div`
    width: 375px;
    height: 70px;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.top.Background};
    padding: 0 10px;

    .Logo{
        width: 97px;
        height: 49px;
    }

    img{
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;