import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import styled from 'styled-components';
import Colors from '../../constants/colors';
import Habit from './Habit';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { Parse } from '../../constants/urls';
import urls from '../../constants/urls';
import axios from 'axios';

export default function Today(){
    dayjs.locale('pt-br')
    let today = dayjs().format('dddd, DD/MM');
    today = today.charAt(0).toUpperCase() + today.slice(1);
    const [habits, setHabits] = useState();
    const [update, setUpdate] = useState(true);
    const {user, tasks, SetTasks} = useContext(UserContext);
    const config = {headers:{Authorization:`Bearer ${user.token}`}}

    useEffect(()=>{
        axios.get(urls.Today,config)
        .then(r=>{
            setHabits(r.data);
            const total = r.data.length;
            const done = r.data.filter(e=>e.done).length;
            console.log({done, total})
            SetTasks({done, total})
        });
    },[update]);

    function TasksState(id, check){
        if(check){
            axios.post(Parse(urls.Check,id),{},config)
            .then(()=>{setUpdate(!update)})
            .catch(()=>alert("Tente novamente"));
            console.log("check");
        }else{
            axios.post(Parse(urls.Uncheck,id),{},config)
            .then(()=>{setUpdate(!update)})
            .catch(()=>alert("Tente novamente"));
            console.log("unchecked");
        }
    }

    return(
        <Div>
            <TopDiv $done={tasks.done>0}>
                <h1>{today}</h1>
                <h2>{tasks.done==0?"Nenhum hábito concluído ainda":
                `${(tasks.done/tasks.total)*100}% dos hábitos concluídos`}</h2>
            </TopDiv>
            <HabitsDiv>
                {!habits||habits.length===0?"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!":
                habits.map((e,i)=><Habit key={i} current={e.currentSequence} highest={e.highestSequence} name={e.name} done={e.done} id={e.id} func={TasksState}/>)}
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

    h1{}

    h2{
        color: ${prop=>prop.$done?Colors.check.Checked:"#BABABA"};
    }
`;

const HabitsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;