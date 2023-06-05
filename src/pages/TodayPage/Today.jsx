import dayjs from 'dayjs';
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
    //sets dayjs to pt-br
    dayjs.locale('pt-br')
    //date of today in format = "name of weekday, day of month(2 digit int)/month o year(2 digit int)"
    let today = dayjs().format('dddd, DD/MM');
    //makes first letter of weekday upper case
    today = today.charAt(0).toUpperCase() + today.slice(1);
    //todays habits = [{id:int,name:"",done:bool,currentSequence:int,highestSequence:int}]
    const [habits, setHabits] = useState();
    //updates useEffect
    const [update, setUpdate] = useState(true);
    const {user, tasks, SetTasks} = useContext(UserContext);
    const config = {headers:{Authorization:`Bearer ${user.token}`}}

    useEffect(()=>{
        axios.get(urls.Today,config)
        .then(r=>{
            setHabits(r.data);
            //sets total amount of tasks and amount of tasks done 
            const total = r.data.length;
            const done = r.data.filter(e=>e.done).length;
            SetTasks({done, total})
        });
    },[update]);

    //inverts tasks state and refreshes the list of todays tasks
    function TasksState(id, check){
        if(check){
            axios.post(Parse(urls.Check,id),{},config)
            .then(()=>{setUpdate(!update)})
            .catch(()=>alert("Tente novamente"));
        }else{
            axios.post(Parse(urls.Uncheck,id),{},config)
            .then(()=>{setUpdate(!update)})
            .catch(()=>alert("Tente novamente"));
        }
    }

    return(
        <Div>
            <TopDiv $done={tasks.done>0}>
                <h1 data-test="today">{today}</h1>
                <h2 data-test="today-counter">{tasks.done==0?"Nenhum hábito concluído ainda":
                `${(tasks.done/tasks.total)*100}% dos hábitos concluídos`}</h2>
            </TopDiv>
            <HabitsDiv>
                {!habits||habits.length===0?"Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!":
                habits.map((e,i)=><Habit key={i} current={e.currentSequence} highest={e.highestSequence} name={e.name} done={e.done} id={e.id} func={TasksState} />)}
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
    gap: 5px;

    h1{
        font-size: 23px;
        color: ${Colors.top.Background};
    }

    h2{
        font-size: 18px;
        color: ${prop=>prop.$done?Colors.check.Checked:"#BABABA"};
    }
`;

const HabitsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #666666;
    font-size: 18px;
`;