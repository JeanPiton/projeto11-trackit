import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Habit from './Habit';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import urls from '../../constants/urls';
import axios from 'axios';

export default function Today(){
    dayjs.locale('pt-br')
    let today = dayjs().format('dddd, DD/MM');
    today = today.charAt(0).toUpperCase() + today.slice(1);
    const [habits, setHabits] = useState();
    const [update, setUpdate] = useState(true);
    const {user} = useContext(UserContext);
    const config = {headers:{Authorization:`Bearer ${user.token}`}}

    useEffect(()=>{
        axios.get(urls.Today,config)
        .then(r=>{
            console.log(habits);
            setHabits(r.data);
        })
    },[update]);

    return(
        <Div>
            <TopDiv>
                <h1>{today}</h1>
                <h2>Nenhum habito concluido ainda</h2>
            </TopDiv>
            <HabitsDiv>
                {!habits||habits.length===0?"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!":
                habits.map((e,i)=><Habit key={i} current={e.currentSequence} highest={e.highestSequence} name={e.name} done={e.done} id={e.id}/>)}
            </HabitsDiv>
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
    gap: 20px;
    background-color: ${Colors.page.Background};
`;

const TopDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    button{
        width: 40px;
        height: 35px;
        border: none;
        border-radius: 4.6px;
        color: ${Colors.button.Textcolor};
        background-color: ${Colors.button.Background};
    }
`;

const HabitsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;