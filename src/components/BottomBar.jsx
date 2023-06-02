import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Colors from "../constants/colors";

export default function BottomBar(){
    const {user, SetUser} = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    if(location.pathname=="/"||location.pathname=="/cadastro"){
        return;
    }

    return(
        <Div data-test="menu">
            <Link data-test="habit-link" to="/habitos">Hábitos</Link>
            <Pcontainer>
                <CircularProgressbar data-test="today-link" value={user.tasksdone} text="Hoje" background={true} backgroundPadding={6}
                styles={buildStyles({
                    textSize: '17px',
                    textColor: Colors.progress.Textcolor,
                    trailColor: Colors.progress.Trailcolor,
                    pathColor: Colors.progress.Pathcolor,
                    backgroundColor: Colors.progress.Background
                })} onClick={()=>navigate("/hoje")}/>
            </Pcontainer>
            <Link data-test="history-link" to="/historico">Histórico</Link>
        </Div>
    );
}

const Div = styled.div`
    width: 375px;
    height: 70px;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${Colors.bottom.Background};
    padding: 0 10px;

    a{
        color: ${Colors.bottom.color};
        text-decoration: none;
    }
`;

const Pcontainer = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 70px;
`;