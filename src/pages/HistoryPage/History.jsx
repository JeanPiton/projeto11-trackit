import styled from "styled-components";
import Colors from "../../constants/colors";
import CalendarDisplay from "../../components/CalendarDisplay";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import urls from "../../constants/urls";
import UserContext from "../../contexts/UserContext";
import Habit from "./Habit";

export default function History(){
    const [complete, setComplete] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const [habits, setHabits] = useState([]);
    const [day, setDay] = useState();
    const {user} = useContext(UserContext);
    const config = {headers:{Authorization:`Bearer ${user.token}`}};

    useEffect(()=>{
        axios.get(urls.History,config)
        .then(r=>{
            const data = r.data;
            const completeD = data.filter(e=>e.habits.filter(h=>h.done).length==e.habits.length).map(f=>f.day);
            const incompleteD = data.filter(e=>e.habits.filter(h=>h.done).length!==e.habits.length).map(f=>f.day) 
            setHabits(data);
            setComplete(completeD);
            setIncomplete(incompleteD);
        })
    },[]);

    function DayHabits(value){
        if(habits.length!=0){
            const d = habits.filter(e=>e.day == value);
            setDay(d);
            console.log(d[0].habits[0]);
        }
    }

    return(
        <Div>
            <TopDiv>
                <h1>Histórico</h1>
            </TopDiv>
            <CalendarDisplay DaysComplete={complete} DaysIncomplete={incomplete} showHabits={DayHabits}/>
            {day && day.length>0?day[0].habits.map(e=><Habit name={e.name} done={e.done}/>):""}
        </Div>
    );
}

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    padding: 17px;
    gap: 10px;
    background-color: ${Colors.page.Background};
`;

const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;

    h1{
        font-size: 23px;
        color: ${Colors.top.Background};
    }
`;