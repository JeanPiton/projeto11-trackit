import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
import UserContext from "../contexts/UserContext";
import styled from "styled-components";
import Colors from "../constants/colors";

export default function BottomBar(){
    const {user} = useContext(UserContext);

    if(!user){
        return;
    }

    return(
        <Div>
            <h1>Hábitos</h1>
            <Pcontainer>
                <CircularProgressbar value={10} text="Hoje" background={true} backgroundPadding={6}
                styles={buildStyles({
                    textSize: '17px',
                    textColor: Colors.progress.Textcolor,
                    trailColor: Colors.progress.Trailcolor,
                    pathColor: Colors.progress.Pathcolor,
                    backgroundColor: Colors.progress.Background
                })}/>
            </Pcontainer>
            <h1>Histórico</h1>
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

    h1{
        color: ${Colors.bottom.color};
    }
`;

const Pcontainer = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 48px;
`;