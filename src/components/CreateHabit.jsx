import styled from "styled-components";
import Colors from "../constants/colors";
import { useState } from "react";
import { week,Days,Day } from "./DaysButton";

export default function Create(props){
    const [days, setDays] = useState([]);
    const [name, setName] = useState("");

    function SelectDay(id){
        if(days.includes(id)){
            const d = days.filter(e=>{return e!=id});
            setDays(d);
        }else{
            const d = [...days];
            d.push(id);
            setDays(d);
        }
    }

    function Reset(){
        setDays([]);
        setName("");
        props.funcVisibility(false);
    }

    function Confirm(event){
        event.preventDefault();

        props.funcHabit({name, days});
        Reset();
        props.funcVisibility(false);
    }

    return(
        <Div $visible={props.visible}>
            <CForm onSubmit={Confirm}>
                <div>
                    <input type="text" placeholder="nome do hábito" name="name" value={name} onChange={e=>setName(e.target.value)} required></input>
                    <Days>
                        {week.map((e,i)=><Day key={i} $selected={days.includes(i)} onClick={()=>SelectDay(i)} type="button">{e}</Day>)}
                    </Days>
                </div>
                
                <Btn>
                    <Button $invert type="reset" onClick={()=>Reset()}>Cancelar</Button>
                    <Button type="submit">Salvar</Button>
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