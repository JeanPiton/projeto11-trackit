import styled from "styled-components";
import Colors from "../constants/colors";
import { useState } from "react";
import { week,Days,Day } from "./DaysButton";
import { ThreeDots } from "react-loader-spinner";

export default function Create(props){
    const [days, setDays] = useState([]);
    const [name, setName] = useState("");

    //day selection logic
    function SelectDay(id){
        //unselect day if alredy selected
        if(days.includes(id)){
            const d = days.filter(e=>{return e!=id});
            setDays(d);
        }
        //select day
        else{
            const d = [...days];
            d.push(id);
            setDays(d);
        }
    }

    //resets the form by turning it invisible
    function Reset(){
        props.funcVisibility(false);
    }

    //ensures the input is filled and submits the form
    function Confirm(event){
        event.preventDefault();

        if(name==""){
            alert("Não deixe campo vazio");
        }else{
            props.funcHabit({name, days});
            setDays([]);
            setName("");    
        }
    }

    return(
        <Div data-test="habit-create-container" $visible={props.visible}>
            <CForm onSubmit={Confirm}>
                <div>
                    <input data-test="habit-name-input" type="text" placeholder="nome do hábito" name="name" value={name} onChange={e=>setName(e.target.value)} disabled={!props.enabled}></input>
                    <Days>
                        {week.map((e,i)=><Day data-test="habit-day" key={i} $selected={days.includes(i)} onClick={()=>SelectDay(i)} type="button" disabled={!props.enabled}>{e}</Day>)}
                    </Days>
                </div>
                
                <Btn>
                    <Button data-test="habit-create-cancel-btn" $invert type="button" onClick={()=>Reset()} disabled={!props.enabled}>Cancelar</Button>
                    <Button data-test="habit-create-save-btn" type="submit" disabled={!props.enabled}>{props.enabled?"Salvar":<ThreeDots height="10" color="white"/>}</Button>
                </Btn>
            </CForm>
        </Div>
    );
}

const Div = styled.div`
    width: 340px;
    height: 180px;
    padding: 18px;
    background-color: ${Colors.create.Background};
    border-radius: 5px;
    display: ${prop=>prop.$visible?"block":"none"};
`;

const Button = styled.button`
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-style: none;
    border-radius: 5px;
    color: ${prop=>prop.$invert?Colors.create.BtnBack:Colors.create.BtnColor};
    background-color: ${prop=>prop.$invert?Colors.create.BtnColor:Colors.create.BtnBack};
`;

const Btn = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
`;



const CForm = styled.form`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;

    input{
        width: 303px;
        height: 45px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        background-color: ${Colors.create.Background};
        margin-bottom: 8px;
        ::placeholder{
            color: ${Colors.create.Caption}
        }
    }
`;