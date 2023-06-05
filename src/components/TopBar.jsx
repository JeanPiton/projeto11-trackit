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
        //TopBar shall only appear if the user is logged
        return;
    }

    return(
        <Div data-test="header">
            <img className="Logo" src={Logo}/>
            <img data-test="avatar" src={user.image} />
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