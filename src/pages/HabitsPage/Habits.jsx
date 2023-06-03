import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import urls from "../../constants/urls";
import { Parse } from "../../constants/urls";
import UserContext from "../../contexts/UserContext";
import Colors from "../../constants/colors";
import Create from "../../components/CreateHabit";
import Habit from "./Habit";
import Plus from "../../img/plus.svg";

export default function Habits(){
    const [update, setUpdate] = useState(true);
    const [habits, setHabits] = useState();
    const [creating, setCreating] = useState(false);
    const [habit, setHabit] = useState();
    const {user} = useContext(UserContext);
    const config = {headers:{Authorization:`Bearer ${user.token}`}}

    useEffect(()=>{
        axios.get(urls.List,config)
        .then(r=>{
            setHabits(r.data);
            console.log(r.data);
        })
        .catch(r=>console.log(r))
        if(habit){
            axios.post(urls.Create,habit,config)
            .then(()=>{
                console.log("enviado");
                setUpdate(!update);
                setHabit();
            })
            .catch(()=>alert("Tente novamente mais tarde"));
            console.log("Habito");
        }
    },[habit,update])

    function RemoveHabit(id){
        if(confirm("Você tem certeza?")){
            const url = Parse(urls.Remove, id);
            axios.delete(url,config)
            .then(()=>{setUpdate(!update)})
            .catch(()=>alert("tente novamente"));
        }
        
    }

    return(
        <Div>
            <TopDiv>
                <h1>Meus Hábitos</h1>
                <button data-test="habit-create-btn" onClick={()=>setCreating(true)}>
                    <img src={Plus}/>
                </button>
            </TopDiv>
            <CreateDiv>
                <Create visible={creating} funcVisibility={setCreating} funcHabit={setHabit}/>
            </CreateDiv>
            <HabitsDiv>
                {!habits||habits.length==0?
                "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!":
                habits.map(e=><Habit days={e.days} name={e.name} id={e.id} func={RemoveHabit}/>)}
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
    align-items: center;
    justify-content: space-between;

    button{
        width: 40px;
        height: 35px;
        border: none;
        border-radius: 4.6px;
        color: ${Colors.button.Textcolor};
        background-color: ${Colors.button.Background};
    }
`;

const CreateDiv = styled.div``;

const HabitsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;