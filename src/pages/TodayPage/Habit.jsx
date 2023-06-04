import styled from "styled-components";
import Check from "../../img/check.svg";
import Colors from "../../constants/colors";
import { useState } from "react";

export default function Habit(props){
    const check = props.done;

    function Checker(){
        props.func(props.id, !check);
    }

    return(
        <Div>
            <TextDiv $current={props.current} $highest={props.highest} $checked={check}>
                <h1 data-test="today-habit-name">{props.name}</h1>
                <p data-test="today-habit-sequence">Sequencia atual: <span className="current">{props.current} dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span className="highest">{props.highest} dias</span></p>
            </TextDiv>
            <Image data-test="today-habit-check-btn" onClick={()=>Checker()} $checked={check}>
                <img src={Check}/>
            </Image>
        </Div>
    );
};

const Image = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${prop=>prop.$checked?Colors.check.Checked:Colors.check.Unchecked};
`;

const TextDiv = styled.div`
    p{
        .current{
            color: ${prop=>prop.$checked?Colors.check.Checked:"#666666"};
        }

        .highest{
            color: ${prop=>(prop.$current==prop.$highest)&&(prop.$highest!=0)?Colors.check.Checked:"#666666"};
        }
    }
`;

const Div = styled.div`
    width: 340px;
    height: 94px;
    display: flex;
    justify-content: space-between;
    padding: 13px;
    background-color: ${Colors.habit.Background};
    border-radius: 5px;

    h1{
        margin-bottom: 8px;
    }
`;