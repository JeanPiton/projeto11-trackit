import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Colors from "../constants/colors";

export default function BottomBar(){
    const {tasks} = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    if(location.pathname=="/"||location.pathname=="/cadastro"){
        //BottomBar shall only appear if the user is logged
        return;
    }

    return(
        <Div data-test="menu">
            <Link data-test="habit-link" to="/habitos">Hábitos</Link>
            <Pcontainer data-test="today-link" onClick={()=>navigate("/hoje")}>
                <CircularProgressbar value={tasks.done} maxValue={tasks.total} text="Hoje" background={true} backgroundPadding={6}
                styles={buildStyles({
                    textSize: '18px',
                    textColor: Colors.progress.Textcolor,
                    trailColor: Colors.progress.Trailcolor,
                    pathColor: Colors.progress.Pathcolor,
                    backgroundColor: Colors.progress.Background
                })}/>
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
        font-size: 18px;
        color: ${Colors.bottom.color};
        text-decoration: none;
    }
`;

const Pcontainer = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 70px;
`;